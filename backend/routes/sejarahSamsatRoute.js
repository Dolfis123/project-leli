const express = require("express");
const router = express.Router();
const sejarahController = require("../controllers/sejarahSamsatController");
const multer = require("multer");
const path = require("path");

// Konfigurasi multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// Menambahkan data sejarah (POST request)
router.post(
  "/sejarah",
  upload.single("image"),
  sejarahController.tambahSejarah
);

// Mendapatkan semua data sejarah (GET request)
router.get("/sejarah", sejarahController.getAllSejarah);

// Mendapatkan data sejarah berdasarkan ID (GET request)
router.get("/sejarah/:id", sejarahController.getSejarahById);

// Memperbarui data sejarah berdasarkan ID (PUT request)
// Memperbarui data sejarah berdasarkan ID (PUT request)
router.put(
  "/sejarah/:id",
  upload.single("image"),
  sejarahController.updateSejarah
);

// Menghapus data sejarah berdasarkan ID (DELETE request)
router.delete("/sejarah/:id", sejarahController.deleteSejarah);

module.exports = router;
