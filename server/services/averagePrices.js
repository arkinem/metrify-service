import axios from "axios";
import parser from "xml2json";
import { useConfig } from "../hooks/useConfig";

const fetchAveragePrices = async (latitude, longitude) => {
	const { averagePricesServiceBaseUrl: baseUrl, averagePricesServiceKey: api_key } = useConfig();
	const url = `${baseUrl}/v1/average_sold_prices`;
	const page_size = 20;

	const makeRequest = (page_number = 1) =>
		axios.get(url, {
			params: {
				output_type: "outcode",
				area_type: "streets",
				page_size,
				page_number,
				longitude,
				latitude,
				api_key,
			},
		});

	const parseResponse = (data) => parser.toJson(data, { object: true });

	try {
		let result = [];
		const response = await makeRequest();
		const parsed = parseResponse(response.data);

		if (parsed?.response) {
			result = [...parsed.response.areas];
			const pageCount = parsed.response.result_count / page_size;
			for (let i = 2; i < pageCount && i <= 5; i++) {
				const nextPage = await makeRequest(i);
				const nextPageParsed = parseResponse(nextPage.data);

				if (parsed?.response) {
					result = [...result, ...nextPageParsed.response.areas];
				}
			}
		}

		return result;
	} catch (e) {
		console.log(e.response);
		return {
			error: true,
			message: "Something went wrong with Zoopla api call",
		};
	}
};

export const getAveragePrices = async (lat, lng) => {
	const { debugMode } = useConfig();

	if (debugMode) return mockResponse;

	const response = await fetchAveragePrices(lat, lng);

	if (response?.error) return response;

	let counters = {
		"1year": 0,
		"3year": 0,
		"5year": 0,
		"7year": 0,
		turnover: 0,
	};

	const incrementAverage = (currentAverage, counterLabel, newValue, float = false) => {
		const parsedValue = float ? parseFloat(newValue) : parseInt(newValue);
		const numberOfElements = counters[counterLabel];

		if (numberOfElements === 0) {
			counters[counterLabel] = numberOfElements + 1;
			return parsedValue;
		}

		if (parsedValue === 0) return currentAverage;

		const average = (currentAverage * numberOfElements + parsedValue) / (numberOfElements + 1);
		counters[counterLabel] = numberOfElements + 1;

		return average.toFixed(2);
	};

	const incrementValue = (currentValue, valueToAdd) =>
		(currentValue || 0) + (parseInt(valueToAdd) || 0);

	const average = response.reduce((accumulator, data) => ({
		averagePrice1Year: incrementAverage(
			accumulator.averagePrice1Year,
			"1year",
			data.average_sold_price_1year
		),
		averagePrice3Year: incrementAverage(
			accumulator.averagePrice3Year,
			"3year",
			data.average_sold_price_3year
		),
		averagePrice5Year: incrementAverage(
			accumulator.averagePrice5Year,
			"5year",
			data.average_sold_price_5year
		),
		averagePrice7Year: incrementAverage(
			accumulator.averagePrice7Year,
			"7year",
			data.average_sold_price_7year
		),
		numberOfSales1Year: incrementValue(accumulator.numberOfSales1Year, data.number_of_sales_1year),
		numberOfSales3Year: incrementValue(accumulator.numberOfSales3Year, data.number_of_sales_3year),
		numberOfSales5Year: incrementValue(accumulator.numberOfSales5Year, data.number_of_sales_5year),
		numberOfSales7Year: incrementValue(accumulator.numberOfSales7Year, data.number_of_sales_7year),
		turnover: incrementAverage(accumulator.turnover, "turnover", data.turnover, true),
	}));

	return average;
};

const mockResponse = {
	averagePrice1Year: "337325.57",
	averagePrice3Year: "358026.44",
	averagePrice5Year: "350841.13",
	averagePrice7Year: "323298.95",
	numberOfSales1Year: 102,
	numberOfSales3Year: 495,
	numberOfSales5Year: 937,
	numberOfSales7Year: 1327,
	turnover: "15.33",
};
