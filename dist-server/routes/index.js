"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var controller = _interopRequireWildcard(require("../controllers/controller"));

// import * as asyncHandler from "express-async-handler";
var router = _express["default"].Router();
/* GET home page. */


router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express"
  });
});
router.get("/api/v1/airpollution", controller.getAirPollution);
var _default = router;
exports["default"] = _default;