const mockedDemographicsResponse = {
	status: "success",
	postcode: "LU1 5FT",
	postcode_type: "full",
	radius: 0,
	url: "https://propertydata.co.uk/draw?input=LU1+5FT",
	data: {
		deprivation: 39,
		health: 42,
		social_grade: {
			ab: "10.7",
			c1: "30.4",
			c2: "22.3",
			de: "36.6",
		},
		age: {
			"0-4": "7.93",
			"5-9": "6.74",
			"10-14": "6.31",
			"15-19": "6.77",
			"20-24": "11.49",
			"25-29": "9.89",
			"30-34": "7.80",
			"35-39": "6.40",
			"40-44": "6.41",
			"45-49": "6.36",
			"50-54": "5.39",
			"55-59": "4.34",
			"60-64": "3.89",
			"65-69": "2.63",
			"70-74": "2.33",
			"75-79": "2.28",
			"80-84": "1.87",
			"85-89": "1.18",
		},
		politics: {
			results: {
				Labour: "52%",
				Conservative: "31%",
				Independent: "10%",
				"Brexit Party": "4%",
				Green: "2%",
			},
			constituences: ["Luton South"],
		},
		proportion_with_degree: 26,
		vehicles_per_household: "0.8",
		commute_method: {
			at_home: "2.6",
			underground_light_rail: "0.3",
			train: "5.2",
			bus: "9.7",
			taxi: "1.4",
			motorcycle: "0.6",
			car_driver: "49.9",
			car_passenger: "10.5",
			bicycle: "1.0",
			foot: "17.8",
			other: "1.0",
		},
	},
	process_time: "0.02",
};

export default mockedDemographicsResponse;