"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAirPollution = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _service = require("../services/service");

var getAirPollution = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, lat, lng, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, lat = _req$body.lat, lng = _req$body.lng;
            _context.next = 3;
            return (0, _service.getNearestAirPollution)(lat, lng);

          case 3:
            result = _context.sent;

            if (!result.error) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              error: result.message
            }));

          case 6:
            return _context.abrupt("return", res.status(201).json(result));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAirPollution(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAirPollution = getAirPollution;