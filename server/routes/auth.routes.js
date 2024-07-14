import express from "express";
import passport from "passport";
import authValidation from "../middlewares/validations/auth.validation.js";
import RegisterController from "../controllers/auth/registerController.js";
import verifyEmailController from "../controllers/auth/verifyEmailController.js";
import LoginController from "../controllers/auth/loginController.js";
import changeUserPassword from "../controllers/auth/changePasswordController.js";
import accessTokenAutoRefresh from "../middlewares/tokens/accessTokenAutoRefresh.js";
import UserNewAccessToken from "../controllers/tokens/UserNewAccessToken.js";
import logoutUser from "../controllers/auth/logoutController.js";

const router = express.Router();

// public routes
router.post("/register", authValidation.register, RegisterController.register);
router.post("/login", authValidation.login, LoginController.login);
router.get("/verify-email/:email/:otp", verifyEmailController.verifyEmail);
router.get("/refresh-token", UserNewAccessToken.getNewAccessToken);
router.post(
  "/reset-password-link",
  authValidation.emailPasswordLink,
  changeUserPassword.sendUserPasswordResetEmail
);
router.post(
  "/reset-password/:id/:token",
  authValidation.changePassword,
  changeUserPassword.userPasswordReset
);

// private routes
router.post(
  "/change-password",
  authValidation.changePassword,
  accessTokenAutoRefresh,
  passport.authenticate("jwt", { session: false }),
  changeUserPassword.changePassword
);
router.post(
  "/logout",
  accessTokenAutoRefresh,
  passport.authenticate("jwt", { session: false }),
  logoutUser.logout
);

export default router;
