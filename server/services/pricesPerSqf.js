import axios from "axios";

import { useConfig } from "../hooks/useConfig";
import mockedPricesPerSqfResponse from "../mocks/pricesPerSqf";

export const getPricePerSqfInfo = async (postcode) => {
	const { propertyDataServiceBaseUrl: baseUrl, propertyDataServiceKey: key } = useConfig();
	const url = `${baseUrl}/prices-per-sqf`;

	const { debugMode } = useConfig();

	if (debugMode) return mockedPricesPerSqfResponse;

	try {
		const { data } = await axios.get(url, { params: { key, postcode } });

		return data;
	} catch (e) {
		console.log("Something went wrong with PropertyData/prices-per-sqf api call", e);

		throw e;
	}
};
