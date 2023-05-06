import { Router } from "express";
import {
  get_all_authors,
  get_one_author,
  post_one_author,
  update_one_author,
  delete_one_author,
} from "../controllers/authorControllers.js";

const router = Router();

router.get("/api/authors", get_all_authors);
router.get("/api/authors/:name", get_one_author);
router.post("/api/authors", post_one_author);
router.put("/api/authors/:name", update_one_author);
router.delete("/api/authors/:name", delete_one_author);

export { router };
