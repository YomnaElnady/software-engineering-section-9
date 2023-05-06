import { Router } from "express";
import {
  get_all_users,
  get_one_user,
  update_one_user,
  delete_one_user,
} from "../controllers/userControllers.js";

const router = Router();

router.get("/api/users", get_all_users);
router.get("/api/users/:name", get_one_user);
router.put("/api/users/:name", update_one_user);
router.delete("/api/users/:name", delete_one_user);

export { router };
