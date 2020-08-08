import express from "express";
// import * as asyncHandler from "express-async-handler";
import * as controller from "../controllers/controller";

var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/api/v1/airpollution", controller.getAirPollution);

export default router;
