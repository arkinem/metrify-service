"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNearestAirPollution = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _config = require("../config");

var getNearestAirPollution = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(lat, lng) {
    var requestConfig, _yield$axios, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            requestConfig = _config.services.airVisual.getNearestCityData(lat, lng);
            _context.prev = 1;
            _context.next = 4;
            return (0, _axios["default"])(requestConfig);

          case 4:
            _yield$axios = _context.sent;
            data = _yield$axios.data;
            return _context.abrupt("return", data);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", {
              error: true,
              message: "Something went wrong with Air Visual api call"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));

  return function getNearestAirPollution(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getNearestAirPollution = getNearestAirPollution;