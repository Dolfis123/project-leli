const express = require("express");
const router = express.Router();
const pendaftaranController = require("../controllers/pendaftaranSamsatController");

// Menambahkan data pendaftaran (POST request)
router.post("/pendaftaran", pendaftaranController.tambahPendaftaran);

// Mendapatkan semua data pendaftaran (GET request)
router.get("/pendaftaran", pendaftaranController.getAllPendaftaran);

// Mendapatkan  data pendaftaran berdasarkan ID (GET request)
router.get("/pendaftaran/:id", pendaftaranController.getPendaftaranById);

// Memperbarui data pendaftaran berdasarkan ID (PUT request)
router.put("/pendaftaran/:id", pendaftaranController.updatePendaftaranById);

// Menghapus data pendaftaran berdasarkan ID (DELETE request)
router.delete("/pendaftaran/:id", pendaftaranController.deletePendaftaranById);

module.exports = router;
