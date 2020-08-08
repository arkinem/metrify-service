import express from "express";
import * as controller from "../controllers/reports";

var router = express.Router();

router.get("/api/v1/report", controller.generateReport);

export default router;
