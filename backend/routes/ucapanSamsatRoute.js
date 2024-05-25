// Mengimpor modul express untuk membuat router
const express = require("express");
const router = express.Router();

// Mengimpor controller ucapan untuk menangani permintaan pada rute ini
const ucapanSamsatController = require("../controllers/ucapanSamsatController");

// Rute untuk mendapatkan semua ucapan
router.get("/lihat-ucapan", ucapanSamsatController.getAllUcapan);
// Rute untuk membuat ucapan baru
router.post("/ucapan", ucapanSamsatController.createUcapan);

// Rute untuk memperbarui ucapan berdasarkan ID
router.put("/edit-ucapan/:id", ucapanSamsatController.updateUcapan);

// Rute untuk menghapus ucapan berdasarkan ID
router.delete("/delete-ucapan/:id", ucapanSamsatController.deleteUcapan);

// Rute untuk mendapatkan ucapan berdasarkan ID
router.get("/ucapan/:id", ucapanSamsatController.getById);

// Mengekspor router untuk digunakan pada aplikasi utama
module.exports = router;
