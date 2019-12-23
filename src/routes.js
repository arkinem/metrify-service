import express from "express";
import * as controller from "./controller";

const router = express.Router();

router.get("/api/v1/airpollution", controller.getAirPollution);

export default router;
