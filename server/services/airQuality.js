import axios from "axios";

import { useConfig } from "../hooks/useConfig";
import mockedAirQualityResponse from "../mocks/airQuality";

export const getAirQualityInformation = async (lat, lng) => {
	const { airQualityServiceBaseUrl: baseUrl, airQualityServiceKey: key } = useConfig();
	const url = `${baseUrl}/v2/nearest_city`;

	const { debugMode } = useConfig();

	if (debugMode) return mockedAirQualityResponse;

	try {
		const { data } = await axios.get(url, { params: { key, lat, lon: lng } });

		return data;
	} catch (e) {
		console.log("Something went wrong with Air Visual api call", e);

		throw e;
	}
};
