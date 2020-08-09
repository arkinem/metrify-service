import axios from "axios";
import moment from "moment";
import config from "../config";
const { crimeStatisticsServiceBaseUrl: baseUrl } = config;

export const getCrimeStatistics = async (lat, lng) => {
	return [
		await fetchCrimeStatistics(lat, lng, moment().subtract(3, "month").format("YYYY-MM")),
		await fetchCrimeStatistics(lat, lng, moment().subtract(13, "month").format("YYYY-MM")),
		await fetchCrimeStatistics(lat, lng, moment().subtract(25, "month").format("YYYY-MM")),
	];
};

const fetchCrimeStatistics = async (lat, lng, date) => {
	const url = `${baseUrl}/crimes-at-location`;

	try {
		const { data } = await axios.get(url, { params: { date, lat, lng } });

		return data;
	} catch (e) {
		console.log(e);
		return {
			error: true,
			message: "Something went wrong with Police UK api call",
		};
	}
};
