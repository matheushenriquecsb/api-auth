import express from "express";
import userController from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";
const router = express.Router();

router.get("/", isAuthenticated, userController.getUsers);

export default router;
