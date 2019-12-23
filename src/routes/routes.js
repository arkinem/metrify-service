import express from "express";
import metrifyController from "../controllers/metrifyController";

const router = express.Router();

router.get("/api/v1/airpollution", metrifyController.getAirPollution);

export default router;
