import { getAirQualityInformation } from "../services/airQuality";
import { getCrimeStatistics } from "../services/crimeStatistics";
import { getCouncilTaxInfo } from "../services/councilTax";
import { getDemographicsInfo } from "../services/demographics";
import { getSchoolsInfo } from "../services/schools";
import { getPricePerSqfInfo } from "../services/pricesPerSqf";
import { getSoldPricePerSqfInfo } from "../services/soldPricesPerSqf";
import { getRestaurantsInfo } from "../services/restaurants";

function allSkippingErrors(promises) {
	return Promise.all(promises.map((p) => p.catch((error) => null)));
}

export const generateReport = async (req, res) => {
	const { lat, lng, postcode } = req.query;
	let response = {};

	const airQuality = getAirQualityInformation(lat, lng);
	const crimeData = getCrimeStatistics(lat, lng);
	const councilTax = getCouncilTaxInfo(postcode);
	const demographics = getDemographicsInfo(postcode);
	const schools = getSchoolsInfo(postcode);
	const pricesPerSqf = getPricePerSqfInfo(postcode);
	const soldPricesPerSqf = getSoldPricePerSqfInfo(postcode);
	const restaurants = getRestaurantsInfo(postcode);

	// if (averagePrices.error) {
	// 	return res.status(400).json({ error: averagePrices.message });
	// } else {
	// 	response = { ...response, averagePrices: averagePrices };
	// }

	try {
		response = await allSkippingErrors([
			airQuality,
			crimeData,
			councilTax,
			demographics,
			schools,
			pricesPerSqf,
			soldPricesPerSqf,
			restaurants,
		]);

		response = {
			airQuality: response[0],
			crimeData: response[1],
			councilTax: response[2],
			demographics: response[3],
			schools: response[4],
			pricesPerSqf: response[5],
			soldPricesPerSqf: response[6],
			restaurants: response[7],
		};
	} catch (error) {
		return res.status(400).json({ error });
	}

	return res.status(201).json(response);
};
