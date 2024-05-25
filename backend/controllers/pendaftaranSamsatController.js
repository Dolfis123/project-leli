// Mengimpor modul database untuk koneksi ke database
const db = require("../config/database"); // Sesuaikan path dengan struktur folder Anda

// Fungsi untuk menambahkan data visi dan misi ke database
const tambahPendaftaran = (req, res) => {
  const { pendaftaran } = req.body;
  // Query untuk menyimpan data visi dan misi ke database
  const query = "INSERT INTO tb_pendaftaran (pendaftaran) VALUES (?)";
  db.query(query, [pendaftaran], (err, result) => {
    if (err) {
      console.error("Gagal menyimpan pendaftaran:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal menyimpan data pendaftaran." });
    }

    // Mengembalikan respons berhasil jika data berhasil disimpan
    return res
      .status(200)
      .json({ message: "Data pendaftaran berhasil disimpan." });
  });
};

// Fungsi untuk mendapatkan semua data visi dan misi dari database
const getAllPendaftaran = (req, res) => {
  // Query untuk mendapatkan semua data visi dan misi
  const query = "SELECT * FROM tb_pendaftaran";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Gagal mendapatkan data pendaftaran:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal mendapatkan data pendaftaran." });
    }

    // Mengembalikan data visi dan misi dalam respons
    return res.status(200).json(result);
  });
};

// Fungsi untuk mendapatkan data visi dan misi berdasarkan ID dari database
const getPendaftaranById = (req, res) => {
  const id = req.params.id;

  // Query untuk mendapatkan data visi dan misi berdasarkan ID
  const query = "SELECT * FROM tb_pendaftaran WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal mendapatkan data pendaftaran:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal mendapatkan data pendaftaran." });
    }

    // Mengembalikan data visi dan misi yang sesuai dengan ID dalam respons
    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "Data pendaftaran tidak ditemukan." });
    }
    return res.status(200).json(result[0]);
  });
};

// Fungsi untuk menghapus data visi dan misi berdasarkan ID dari database
const deletePendaftaranById = (req, res) => {
  const id = req.params.id;

  // Query untuk menghapus data visi dan misi berdasarkan ID
  const query = "DELETE FROM tb_pendaftaran WHERE id = ?";
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error("Gagal menghapus data pendaftaran:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal menghapus data pendaftaran." });
    }

    // Mengembalikan respons berhasil jika data berhasil dihapus
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Data pendaftaran tidak ditemukan." });
    }
    return res
      .status(200)
      .json({ message: "Data pendaftaran berhasil dihapus." });
  });
};

// Fungsi untuk memperbarui data visi dan misi berdasarkan ID di database
const updatePendaftaranById = (req, res) => {
  const id = req.params.id;
  const { pendaftaran } = req.body;

  // Query untuk memperbarui data visi dan misi berdasarkan ID
  const query = "UPDATE tb_pendaftaran SET pendaftaran = ? WHERE id = ?";
  db.query(query, [pendaftaran, id], (err, result) => {
    if (err) {
      console.error("Gagal memperbarui data pendaftaran:", err.message);
      return res
        .status(500)
        .json({ message: "Gagal memperbarui data pendaftaran." });
    }

    // Mengembalikan respons berhasil jika data berhasil diperbarui
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Data pendaftaran tidak ditemukan." });
    }
    return res
      .status(200)
      .json({ message: "Data pendaftaran berhasil diperbarui." });
  });
};

// Mengekspor fungsi-fungsi untuk digunakan di luar modul
module.exports = {
  tambahPendaftaran,
  getAllPendaftaran,
  getPendaftaranById,
  deletePendaftaranById,
  updatePendaftaranById,
};
