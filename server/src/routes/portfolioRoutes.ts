import { Router } from "express";
import {
  getPortfolioItems,
  createPortfolioItem,
  deletePortfolioItem,
} from "@/controllers/portfolioController.js";
import { protect, authorize } from "@/middlewares/auth.middleware.js";
import { upload } from "@/middlewares/upload.middleware.js";

const router = Router();

router.get("/", getPortfolioItems);
router.post(
  "/",
  protect,
  authorize("admin"),
  upload.single("image"),
  createPortfolioItem,
);
router.delete("/:id", protect, authorize("admin"), deletePortfolioItem);

export default router;
