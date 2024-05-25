const db = require("../config/database");
const path = require("path");
const moment = require("moment-timezone");
const crypto = require("crypto");

function generateRandomId() {
  return crypto
    .createHash("sha256")
    .update(Date.now().toString())
    .digest("hex");
}

exports.getAllNews = (req, res) => {
  const query = "SELECT * FROM tb_berita";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Gagal mengambil berita: ", err);
      res.status(500).json({ error: "Gagal mengambil berita" });
    } else {
      res.json(results);
    }
  });
};

exports.getNewsById = (req, res) => {
  const hashed_id = req.params.hashed_id;
  const query = "SELECT * FROM tb_berita WHERE hashed_id = ?";
  db.query(query, [hashed_id], (err, results) => {
    if (err) {
      console.error("Gagal mengambil berita: ", err);
      res.status(500).json({ error: "Gagal mengambil berita" });
    } else if (results.length === 0) {
      res.status(404).json({ message: "Berita tidak ditemukan" });
    } else {
      res.json(results[0]);
    }
  });
};

exports.getNewsByIdAdmin = (req, res) => {
  const id = parseInt(req.params.id);
  const query = "SELECT * FROM tb_berita WHERE news_id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error("Gagal mengambil berita: ", err);
      res.status(500).json({ error: "Gagal mengambil berita" });
    } else if (results.length === 0) {
      res.status(404).json({ message: "Berita tidak ditemukan" });
    } else {
      res.json(results[0]);
    }
  });
};

exports.addNews = (req, res) => {
  const { news_title, news_content, publication_date, news_source, category } =
    req.body;

  const news_image = req.file ? req.file.filename : null;

  const query =
    "INSERT INTO tb_berita (news_title, news_content, publication_date, news_source, category, news_image, hashed_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const newId = generateRandomId();
  const hashedId = newId;

  db.query(
    query,
    [
      news_title,
      news_content,
      publication_date,
      news_source,
      category,
      news_image,
      hashedId,
    ],
    (err, result) => {
      if (err) {
        console.error("Gagal menambahkan berita: ", err);
        res.status(500).json({ error: "Gagal menambahkan berita" });
      } else {
        res.json({
          message: "Berita berhasil ditambahkan",
          newId,
        });
      }
    }
  );
};

exports.updateNews = (req, res) => {
  const id = parseInt(req.params.id);

  const { news_title, news_content, publication_date, news_source, category } =
    req.body;
  const news_image = req.file ? req.file.filename : null;

  let query =
    "UPDATE tb_berita SET news_title=?, news_content=?, publication_date=?, news_source=?, category=?";
  const queryParams = [
    news_title,
    news_content,
    publication_date,
    news_source,
    category,
  ];

  if (news_image) {
    query += ", news_image=?";
    queryParams.push(news_image);
  }

  query += " WHERE news_id=?";
  queryParams.push(id);

  db.query(query, queryParams, (err, result) => {
    if (err) {
      console.error("Gagal memperbarui berita: ", err);
      res.status(500).json({ error: "Gagal memperbarui berita" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Berita tidak ditemukan" });
      } else {
        res.json({ message: "Berita berhasil diperbarui" });
      }
    }
  });
};

exports.deleteNews = (req, res) => {
  const id = parseInt(req.params.id);
  const query = "DELETE FROM tb_berita WHERE news_id=?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal menghapus berita: ", err);
      res.status(500).json({ error: "Gagal menghapus berita" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Berita tidak ditemukan" });
      } else {
        res.json({ message: "Berita berhasil dihapus" });
      }
    }
  });
};
