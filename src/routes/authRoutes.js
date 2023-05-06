import { Router } from "express";
import { post_one_user, login_user } from "../controllers/authControllers.js";

const router = Router();

router.post("/api/users/signup", post_one_user);
router.post("/api/users/login", login_user);

export { router };
