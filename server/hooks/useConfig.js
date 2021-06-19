import dotenv from "dotenv-safe";

const useConfig = () => {
	const { AIR_VISUAL_API_KEY, ZOOPLA_API_KEY, DEBUG_MODE } = dotenv.config()?.parsed;

	return {
		airQualityServiceBaseUrl: "https://api.airvisual.com",
		airQualityServiceKey: AIR_VISUAL_API_KEY,
		crimeStatisticsServiceBaseUrl: "https://data.police.uk/api",
		averagePricesServiceBaseUrl: "http://api.zoopla.co.uk/api",
		averagePricesServiceKey: ZOOPLA_API_KEY,
		debugMode: DEBUG_MODE === "true",
	};
};

export { useConfig };
