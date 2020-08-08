"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.services = void 0;
var airVisualBaseUrl = "https://api.airvisual.com";
var services = {
  airVisual: {
    url: airVisualBaseUrl,
    getNearestCityData: function getNearestCityData(lat, lng) {
      return {
        method: "GET",
        url: "".concat(airVisualBaseUrl, "/v2/nearest_city?lat=").concat(lat, "&lon=").concat(lng, "&key=").concat(process.env.AIR_VISUAL_API_KEY)
      };
    }
  }
};
exports.services = services;