import axios from "axios";
import moment from "moment";
import { crimeStatisticsServiceBaseUrl as baseUrl } from "../config";

export const getCrimeStatistics = async (lat, lng) => {
	return [
		await fetchCrimeStatistics(lat, lng, moment().format("YYYY-MM")),
		await fetchCrimeStatistics(lat, lng, moment().subtract(1, "month").format("YYYY-MM")),
		await fetchCrimeStatistics(lat, lng, moment().subtract(2, "month").format("YYYY-MM")),
	];
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
