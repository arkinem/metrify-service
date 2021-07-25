import axios from "axios";

import { useConfig } from "../hooks/useConfig";
import mockedSoldPricesPerSqfResponse from "../mocks/soldPricesPerSqf";

export const getSoldPricePerSqfInfo = async (postcode) => {
	const { propertyDataServiceBaseUrl: baseUrl, propertyDataServiceKey: key } = useConfig();
	const url = `${baseUrl}/sold-prices-per-sqf`;

	const { debugMode } = useConfig();

	if (debugMode) return mockedSoldPricesPerSqfResponse;

	try {
		const { data } = await axios.get(url, { params: { key, postcode } });

		return data;
	} catch (e) {
		console.log("Something went wrong with PropertyData/sold-prices-per-sqf api call", e);

		throw e;
	}
};
