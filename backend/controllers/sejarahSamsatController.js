const db = require("../config/database");

// Fungsi untuk menyimpan data sejarah ke database
const tambahSejarah = (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Request File:", req.file);

  if (!req.file) {
    return res.status(400).json({ Error: "No file uploaded" });
  }

  const sqlQuery = "INSERT INTO tb_sejarah_samsat (isi, image) VALUES (?)";
  const values = [req.body.isi, req.file.filename];

  db.query(sqlQuery, [values], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ Error: "Error in query execution" });
    }
    return res.status(200).json({ Status: "Successful", Result: result });
  });
};

// Fungsi untuk mendapatkan semua data sejarah
const getAllSejarah = (req, res) => {
  const query = "SELECT * FROM tb_sejarah_samsat";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Gagal mendapatkan data sejarah:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal mendapatkan data sejarah." });
    }

    return res.status(200).json(result);
  });
};

// Fungsi untuk mendapatkan data sejarah berdasarkan ID
const getSejarahById = (req, res) => {
  const id = req.params.id;

  const query = "SELECT * FROM tb_sejarah_samsat WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal mendapatkan data sejarah:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal mendapatkan data sejarah." });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Data sejarah tidak ditemukan." });
    }

    return res.status(200).json(result[0]);
  });
};

// Fungsi untuk memperbarui data sejarah berdasarkan ID
const updateSejarah = (req, res) => {
  const id = req.params.id;
  const { isi } = req.body;

  // Cek apakah file gambar diunggah
  const image = req.file ? req.file.filename : null;

  let query = "UPDATE tb_sejarah_samsat SET isi = ?";
  let params = [isi];

  if (image) {
    query += ", image = ?";
    params.push(image);
  }

  query += " WHERE id = ?";
  params.push(id);

  db.query(query, params, (err, result) => {
    if (err) {
      console.error("Gagal memperbarui data sejarah:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal memperbarui data sejarah." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Data sejarah tidak ditemukan." });
    }

    return res
      .status(200)
      .json({ message: "Data sejarah berhasil diperbarui." });
  });
};

// Fungsi untuk menghapus data sejarah berdasarkan ID
const deleteSejarah = (req, res) => {
  const id = req.params.id;

  const query = "DELETE FROM tb_sejarah_samsat WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal menghapus data sejarah:", err.message);
      return res.status(500).json({ message: "Gagal menghapus data sejarah." });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Data sejarah tidak ditemukan." });
    }

    return res.status(200).json({ message: "Data sejarah berhasil dihapus." });
  });
};

module.exports = {
  tambahSejarah,
  getAllSejarah,
  getSejarahById,
  updateSejarah,
  deleteSejarah,
};
