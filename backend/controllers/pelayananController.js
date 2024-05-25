// Mengimpor modul database untuk koneksi ke database
const db = require("../config/database"); // Sesuaikan path dengan struktur folder Anda

// Fungsi untuk menambahkan data pelayanan ke database
const tambahPelayanan = (req, res) => {
  const { pelayanan } = req.body;
  // Query untuk menyimpan data pelayanan ke database
  const query = "INSERT INTO tb_pelayanan (pelayanan) VALUES (?)";
  db.query(query, [pelayanan], (err, result) => {
    if (err) {
      console.error("Gagal menyimpan pelayanan:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal menyimpan data pelayanan." });
    }

    // Mengembalikan respons berhasil jika data berhasil disimpan
    return res
      .status(200)
      .json({ message: "Data pelayanan berhasil disimpan." });
  });
};

// Fungsi untuk mendapatkan semua data pelayanan dari database
const getAllPelayanan = (req, res) => {
  // Query untuk mendapatkan semua data pelayanan
  const query = "SELECT * FROM tb_pelayanan";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Gagal mendapatkan data pelayanan:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal mendapatkan data pelayanan." });
    }

    // Mengembalikan data pelayanan dalam respons
    return res.status(200).json(result);
  });
};

// Fungsi untuk mendapatkan data pelayanan berdasarkan ID dari database
const getPelayananById = (req, res) => {
  const id = req.params.id;

  // Query untuk mendapatkan data pelayanan berdasarkan ID
  const query = "SELECT * FROM tb_pelayanan WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal mendapatkan data pelayanan:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal mendapatkan data pelayanan." });
    }

    // Mengembalikan data pelayanan yang sesuai dengan ID dalam respons
    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "Data pelayanan tidak ditemukan." });
    }
    return res.status(200).json(result[0]);
  });
};

// Fungsi untuk menghapus data pelayanan berdasarkan ID dari database
const deletePelayananById = (req, res) => {
  const id = req.params.id;

  // Query untuk menghapus data pelayanan berdasarkan ID
  const query = "DELETE FROM tb_pelayanan WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal menghapus data pelayanan:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal menghapus data pelayanan." });
    }

    // Mengembalikan respons berhasil jika data berhasil dihapus
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Data pelayanan tidak ditemukan." });
    }
    return res
      .status(200)
      .json({ message: "Data pelayanan berhasil dihapus." });
  });
};

// Fungsi untuk memperbarui data pelayanan berdasarkan ID di database
const updatePelayananById = (req, res) => {
  const id = req.params.id;
  const { pelayanan } = req.body;

  // Query untuk memperbarui data pelayanan berdasarkan ID
  const query = "UPDATE tb_pelayanan SET pelayanan = ? WHERE id = ?";
  db.query(query, [pelayanan, id], (err, result) => {
    if (err) {
      console.error("Gagal memperbarui data pelayanan:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal memperbarui data pelayanan." });
    }

    // Mengembalikan respons berhasil jika data berhasil diperbarui
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Data pelayanan tidak ditemukan." });
    }
    return res
      .status(200)
      .json({ message: "Data pelayanan berhasil diperbarui." });
  });
};

// Mengekspor fungsi-fungsi untuk digunakan di luar modul
module.exports = {
  tambahPelayanan,
  getAllPelayanan,
  getPelayananById,
  deletePelayananById,
  updatePelayananById,
};
