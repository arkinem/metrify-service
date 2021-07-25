import axios from "axios";

import { useConfig } from "../hooks/useConfig";
import mockedRestaurantsResponse from "../mocks/restaurants";

export const getRestaurantsInfo = async (postcode) => {
	const { propertyDataServiceBaseUrl: baseUrl, propertyDataServiceKey: key } = useConfig();
	const url = `${baseUrl}/restaurants`;

	const { debugMode } = useConfig();

	if (debugMode) return mockedRestaurantsResponse;

	try {
		const { data } = await axios.get(url, { params: { key, postcode } });

		return data;
	} catch (e) {
		console.log("Something went wrong with PropertyData/restaurants api call", e);

		throw e;
	}
};
