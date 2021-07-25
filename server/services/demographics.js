import axios from "axios";

import { useConfig } from "../hooks/useConfig";
import mockedDemographicsResponse from "../mocks/demographics";

export const getDemographicsInfo = async (postcode) => {
	const { propertyDataServiceBaseUrl: baseUrl, propertyDataServiceKey: key } = useConfig();
	const url = `${baseUrl}/demographics`;

	const { debugMode } = useConfig();

	if (debugMode) return mockedDemographicsResponse;

	try {
		const { data } = await axios.get(url, { params: { key, postcode } });

		return data;
	} catch (e) {
		console.log("Something went wrong with PropertyData/demographics api call", e);

		throw e;
	}
};
