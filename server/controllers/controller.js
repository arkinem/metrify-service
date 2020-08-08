import { getNearestAirPollution } from "../services/service";

export const getAirPollution = async (req, res) => {
	const { lat, lng } = req.body;

	const result = await getNearestAirPollution(lat, lng);

	if (result.error) {
		return res.status(400).json({ error: result.message });
	}

	return res.status(201).json(result);
};
