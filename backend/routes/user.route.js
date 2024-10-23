import express from "express";
import { login, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticate from "../middlewares/isAuthenticate.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticate,updateProfile);

export default router;