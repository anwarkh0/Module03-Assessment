import {
    creacteArticle,
    getALlArticles,
    getOneArticle,
    updateArticle,
    deleteArticle,
} from "../controllers/articleController.js";
import express from "express";
import uploadImage from "../middlewares/multer.js";
const router = express.Router();
router.get("/getAll", getALlArticles);
router.get("/:id", getOneArticle);
router.post("/create", uploadImage.single("Picture"), creacteArticle);
router.put("/:id", uploadImage.single("Picture"), updateArticle);
router.delete("/:id", deleteArticle);

export default router;