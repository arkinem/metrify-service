const airVisualBaseUrl = "https://api.airvisual.com";

export const services = {
  airVisual: {
    url: airVisualBaseUrl,
    getNearestCityData: (lat, lng) => ({
      method: "GET",
      url: `${airVisualBaseUrl}/v2/nearest_city?lat=${lat}&lon=${lng}&key=${process.env.AIR_VISUAL_API_KEY}`
    })
  }
};
