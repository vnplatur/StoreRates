import express from "express";
import { loginUsers, registerUsers } from "../controllers/userController.js";

const router = express.Router();

router.post("/login", loginUsers);
router.post("/register", registerUsers);

export default router;
