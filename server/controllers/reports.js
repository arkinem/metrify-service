import { getNearestAirPollution } from "../services/reports";

export const generateReport = async (req, res) => {
	const { lat, lng } = req.body;
	let response = { message: "I'm working on getting reports endpoint ready!" };
	console.log("Request for", lat, lng, "recieved.");
	// FETCH AIR DATA

	// const result = await getNearestAirPollution(lat, lng);

	// if (result.error) {
	// 	return res.status(400).json({ error: result.message });
	// }

	return res.status(201).json(response);
};
