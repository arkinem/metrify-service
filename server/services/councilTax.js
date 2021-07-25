import axios from "axios";

import { useConfig } from "../hooks/useConfig";
import mockedCouncilTaxResponse from "../mocks/councilTax";

export const getCouncilTaxInfo = async (postcode) => {
	const { propertyDataServiceBaseUrl: baseUrl, propertyDataServiceKey: key } = useConfig();
	const url = `${baseUrl}/council-tax`;

	const { debugMode } = useConfig();

	if (debugMode) return mockedCouncilTaxResponse;

	try {
		const { data } = await axios.get(url, { params: { key, postcode } });

		return data;
	} catch (e) {
		console.log("Something went wrong with PropertyData/council-tax api call", e);

		throw e;
	}
};
