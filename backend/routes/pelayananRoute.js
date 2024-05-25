const express = require("express");
const router = express.Router();
const pelayananController = require("../controllers/pelayananController");

// Menambahkan data pelayanan (POST request)
router.post("/pelayanan", pelayananController.tambahPelayanan);

// Mendapatkan semua data pelayanan (GET request)
router.get("/pelayanan", pelayananController.getAllPelayanan);

// Mendapatkan  data pelayanan berdasarkan ID (GET request)
router.get("/pelayanan/:id", pelayananController.getPelayananById);

// Memperbarui data pelayanan berdasarkan ID (PUT request)
router.put("/pelayanan/:id", pelayananController.updatePelayananById);

// Menghapus data elayanan berdasarkan ID (DELETE request)
router.delete("/pelayanan/:id", pelayananController.deletePelayananById);

module.exports = router;
