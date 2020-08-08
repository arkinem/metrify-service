import { getAirQualityInformation } from "../services/airQuality";

export const generateReport = async (req, res) => {
	const { lat, lng } = req.query;
	let response = {};

	const airQuality = await getAirQualityInformation(lat, lng);

	if (airQuality.error) {
		return res.status(400).json({ error: airQuality.message });
	}

	return res.status(201).json(airQuality);
};
