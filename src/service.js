import axios from "axios";
import { services } from "./config";

export const getNearestAirPollution = async (lat, lng) => {
  const requestConfig = services.airVisual.getNearestCityData(lat, lng);

  try {
    const { data } = await axios(requestConfig);
    return data;
  } catch (e) {
    return {
      error: true,
      message: "Something went wrong with Air Visual api call"
    };
  }
};
