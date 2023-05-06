import { Router } from "express";
import {
  get_all_books,
  get_one_book,
  post_one_book,
  update_one_book,
  delete_one_book,
} from "../controllers/bookControllers.js";

const router = Router();

router.get("/api/books", get_all_books);
router.get("/api/books/:title", get_one_book);
router.post("/api/books", post_one_book);
router.put("/api/books/:title", update_one_book);
router.delete("/api/books/:title", delete_one_book);

export { router };
