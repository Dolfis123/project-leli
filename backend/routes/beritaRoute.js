const express = require("express");
const multer = require("multer");
const path = require("path");
const newsController = require("../controllers/beritaController");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, "image_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Only image files are allowed!"));
  },
});

router.get("/news", newsController.getAllNews);
router.get("/news/:hashed_id", newsController.getNewsById);
router.get("/news-admin/:id", newsController.getNewsByIdAdmin);
router.post("/news", upload.single("news_image"), newsController.addNews);
router.put("/news/:id", upload.single("news_image"), newsController.updateNews);
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
