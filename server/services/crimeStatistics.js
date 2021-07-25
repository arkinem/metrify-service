import axios from "axios";
import moment from "moment";

import { useConfig } from "../hooks/useConfig";
import mockedCrimeStatisticsResponse from "../mocks/crimeStatistics";

export const getCrimeStatistics = async (lat, lng) => {
	const { debugMode } = useConfig();

	if (debugMode) return mockedCrimeStatisticsResponse;

	let result = {};

	// fetch 12 months data starting 3 months from now
	for (let i = 3; i < 16; i++) {
		const date = moment().subtract(i, "month").format("YYYY-MM");
		const crimes = await fetchCrimeStatistics(lat, lng, date);

		crimes.forEach((crime) => {
			const currentValue = result[crime.category];
			if (!currentValue) result[crime.category] = 1;
			else result[crime.category] = currentValue + 1;
		});
	}

	return result;
};

const fetchCrimeStatistics = async (lat, lng, date) => {
	const { crimeStatisticsServiceBaseUrl: baseUrl } = useConfig();
	const url = `${baseUrl}/crimes-at-location`;

	try {
		const { data } = await axios.get(url, { params: { date, lat, lng } });
		return data;
	} catch (e) {
		console.log("Something went wrong with Police UK api call", e);

		throw e;
	}
};
