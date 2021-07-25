const mockedCouncilTaxResponse = {
	status: "success",
	postcode: "LU1 5FT",
	postcode_type: "full",
	council: "Luton",
	council_rating: "Average tax",
	year: "2020/21",
	annual_change: "+3.99%",
	council_tax: {
		band_a: "1,024.80",
		band_b: "1,195.60",
		band_c: "1,366.40",
		band_d: "1,537.20",
		band_e: "1,878.80",
		band_f: "2,220.40",
		band_g: "2,562.00",
		band_h: "3,074.40",
	},
	note: "These figures include adult social care and the Greater London Authority precept (if applicable) but exclude any parish precepts.",
	properties: [],
	process_time: "0.46",
};

export default mockedCouncilTaxResponse;