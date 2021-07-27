const mockedAirQualityResponse = {
	status: "success",
	data: {
		city: "Luton",
		state: "England",
		country: "United Kingdom",
		location: {
			type: "Point",
			coordinates: [-0.422144, 51.880154],
		},
		current: {
			weather: {
				ts: "2020-08-08T20:00:00.000Z",
				tp: 19, //temperature in Celsius
				pr: 1021, //atmospheric pressure in hPa
				hu: 77, //humidity %
				ws: 5.7, //wind speed (m/s)
				wd: 20, //wind direction
				ic: "04n", //weather icon code
			},
			pollution: {
				ts: "2020-08-08T19:00:00.000Z",
				aqius: 73,
				mainus: "p2", //main pollutant for US AQI
				aqicn: 36,
				maincn: "p1",
			},
		},
	},
};

export default mockedAirQualityResponse;
