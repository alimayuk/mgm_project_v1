import express from "express";
import StaffController from "../controllers/reservations/StaffController.js";
import passport from "passport";
import accessTokenAutoRefresh from "../middlewares/tokens/accessTokenAutoRefresh.js";

const router = express.Router();

router.post(
  "/create-staff",
  accessTokenAutoRefresh,
  passport.authenticate("jwt", { session: false }),
  StaffController.createStaff
);

router.get(
  "/get-staff",
  accessTokenAutoRefresh,
  passport.authenticate("jwt", { session: false }),
  StaffController.getStaffs
);

router.put(
  "/delete-staff",
  accessTokenAutoRefresh,
  passport.authenticate("jwt", { session: false }),
  StaffController.deleteStaff
);

export default router;
