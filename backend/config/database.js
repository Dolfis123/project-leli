// Mengimpor modul mysql untuk mengelola koneksi database MySQL
const mysql = require("mysql");

// Konfigurasi koneksi database
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "db_samsat_mkw",
};
// Buat koneksi ke database menggunakan konfigurasi yang telah ditentukan
const connection = mysql.createConnection(dbConfig);
// Cek apakah koneksi berhasil atau tidak
connection.connect((err) => {
  if (err) {
    // Jika terjadi kesalahan saat melakukan koneksi, tampilkan pesan kesalahan
    console.error("Koneksi ke database gagal:", err.message);
  } else {
    // Jika koneksi berhasil, tampilkan pesan sukses
    console.log("Koneksi ke database berhasil!");
  }
});
// Ekspor objek koneksi agar dapat digunakan di modul lain
module.exports = connection;
