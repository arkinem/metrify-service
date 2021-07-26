import dotenv from "dotenv-safe";

const useConfig = () => {
	const { AIR_VISUAL_API_KEY, PROPERTY_DATA_API_KEY, DEBUG_MODE } = dotenv.config()?.parsed;

	return {
		airQualityServiceBaseUrl: "https://api.airvisual.com",
		airQualityServiceKey: AIR_VISUAL_API_KEY,
		crimeStatisticsServiceBaseUrl: "https://data.police.uk/api",
		propertyDataServiceBaseUrl: "https://api.propertydata.co.uk",
		propertyDataServiceKey: PROPERTY_DATA_API_KEY,
		debugMode: DEBUG_MODE === undefined ? true : DEBUG_MODE === "true",
	};
};

export { useConfig };
