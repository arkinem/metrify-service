import axios from "axios";
import { useConfig } from "../hooks/useConfig";

const debug = true;

export const getAirQualityInformation = async (lat, lng) => {
	const { airQualityServiceBaseUrl: baseUrl, airQualityServiceKey: key } = useConfig();
	const url = `${baseUrl}/v2/nearest_city`;

	if (debug) return mockResponse;

	try {
		const { data } = await axios.get(url, { params: { key, lat, lon: lng } });

		return data;
	} catch (e) {
		return {
			error: true,
			message: "Something went wrong with Air Visual api call",
		};
	}
};

const mockResponse = {
	status: "success",
	data: {
		city: "Luton",
		state: "England",
		country: "United Kingdom",
		location: {
			type: "Point",
			coordinates: [-0.422144, 51.880154],
		},
		current: {
			weather: {
				ts: "2020-08-08T20:00:00.000Z",
				tp: 19,
				pr: 1021,
				hu: 77,
				ws: 5.7,
				wd: 20,
				ic: "04n",
			},
			pollution: {
				ts: "2020-08-08T19:00:00.000Z",
				aqius: 73,
				mainus: "p2",
				aqicn: 36,
				maincn: "p1",
			},
		},
	},
};
