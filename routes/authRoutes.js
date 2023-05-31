import express from "express";
const router = express.Router();
import authController from "../controllers/authController.js";
import validate from "../validators/validate.js";
import authValidators from "../validators/authValidators.js";

router.post(
  "/login",
  validate(authValidators.authLoginValidatorSchema),
  authController.login
);
router.post(
  "/register",
  validate(authValidators.authRegisterValidatorSchema),
  authController.register
);

export default router;
