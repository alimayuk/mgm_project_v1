import express from "express";
import ReservationsController from "../controllers/reservations/reservationsController.js";
const router = express.Router();



router.post("/", ReservationsController.createReservation);
export default router;
