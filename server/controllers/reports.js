import { getAirQualityInformation } from "../services/airQuality";
import { getCrimeStatistics } from "../services/crimeStatistics";
import { getAveragePrices } from "../services/averagePrices";

export const generateReport = async (req, res) => {
	const { lat, lng } = req.query;
	let response = {};

	const airQuality = await getAirQualityInformation(lat, lng);

	if (airQuality.error) {
		return res.status(400).json({ error: airQuality.message });
	} else {
		response = { ...response, airQuality: airQuality };
	}

	const crimeData = await getCrimeStatistics(lat, lng);

	if (crimeData.error) {
		return res.status(400).json({ error: crimeData.message });
	} else {
		response = { ...response, crimeData: crimeData };
	}

	const averagePrices = await getAveragePrices(lat, lng);

	if (averagePrices.error) {
		return res.status(400).json({ error: averagePrices.message });
	} else {
		response = { ...response, averagePrices: averagePrices };
	}

	return res.status(201).json(response);
};
