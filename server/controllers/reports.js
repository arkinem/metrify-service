import { getAirQualityInformation } from "../services/airQuality";
import { getCrimeStatistics } from "../services/crimeStatistics";
import { getCouncilTaxInfo } from "../services/councilTax";
import { getDemographicsInfo } from "../services/demographics";
import { getSchoolsInfo } from "../services/schools";
import { getPricePerSqfInfo } from "../services/pricesPerSqf";
import { getSoldPricePerSqfInfo } from "../services/soldPricesPerSqf";
import { getRestaurantsInfo } from "../services/restaurants";
import { allSkippingErrors } from "../helpers/promise";

export const generateReport = async (req, res) => {
	const { lat, lng, postcode } = req.query;
	let result = {};

	const delayPromise = async (delay, promise) => {
		await new Promise((resolve) => setTimeout(resolve, delay));
		return promise;
	};

	const allOptions = {
		airQuality: getAirQualityInformation(lat, lng),
		crimeData: getCrimeStatistics(lat, lng),
		councilTax: getCouncilTaxInfo(postcode),
		demographics: delayPromise(500, getDemographicsInfo(postcode)),
		schools: delayPromise(1000, getSchoolsInfo(postcode)),
		pricesPerSqf: delayPromise(1500, getPricePerSqfInfo(postcode)),
		soldPricesPerSqf: delayPromise(2000, getSoldPricePerSqfInfo(postcode)),
		restaurants: delayPromise(2500, getRestaurantsInfo(postcode)),
	};

	let dataToFetch = {};

	for (const [key, value] of Object.entries(allOptions)) {
		if (req.query[key] !== "false") {
			dataToFetch = { ...dataToFetch, [key]: value };
		}
	}

	try {
		const response = await allSkippingErrors(Object.values(dataToFetch));

		Object.keys(dataToFetch).map((key, index) => {
			result[key] = response[index];
		});
	} catch (error) {
		return res.status(400).json({ error });
	}

	return res.status(201).json(result);
};
