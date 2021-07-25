import axios from "axios";

import { useConfig } from "../hooks/useConfig";
import mockedSchoolsResponse from "../mocks/schools";

export const getSchoolsInfo = async (postcode) => {
	const { propertyDataServiceBaseUrl: baseUrl, propertyDataServiceKey: key } = useConfig();
	const url = `${baseUrl}/schools`;

	const { debugMode } = useConfig();

	if (debugMode) return mockedSchoolsResponse;

	try {
		const { data } = await axios.get(url, { params: { key, postcode } });

		return data;
	} catch (e) {
		console.log("Something went wrong with PropertyData/schools api call", e);

		throw e;
	}
};
