import axios from "axios";
import moment from "moment";
import config from "../config";
const { crimeStatisticsServiceBaseUrl: baseUrl } = config;

const debug = false;

export const getCrimeStatistics = async (lat, lng) => {
	let result = {};

	if (!debug) {
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
	} else {
		result = mockResponse;
		console.log(result);
	}

	return result;
};

const fetchCrimeStatistics = async (lat, lng, date) => {
	const url = `${baseUrl}/crimes-at-location`;

	try {
		const { data } = await axios.get(url, { params: { date, lat, lng } });
		return data;
	} catch (e) {
		return {
			error: true,
			message: "Something went wrong with Police UK api call",
		};
	}
};

const mockResponse = {
	"anti-social-behaviour": 8,
	"public-order": 4,
	"vehicle-crime": 12,
	"criminal-damage-arson": 6,
	robbery: 2,
	"violent-crime": 16,
	burglary: 2,
	"other-crime": 1,
	"other-theft": 1,
};
