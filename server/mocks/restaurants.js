const mockedRestaurantsResponse = {
	status: "success",
	postcode: "LU1 5FT",
	postcode_type: "full",
	url: "https://propertydata.co.uk/draw?input=LU1+5FT",
	data: {
		average_hygiene: "4.08",
		proportion_bad: 0,
		rating: "Very good restaurant hygiene",
		nearby: [
			{
				name: "Peri Peri Original",
				address: ", 24 Chapel Street",
				type: "Takeaway/sandwich shop",
				hygiene: null,
				rating_date: null,
				lat: "51.87611500",
				lng: "-0.41716200",
				distance: "0.05",
			},
			{
				name: "Black Horse",
				address: "The Black Horse, 23 Hastings Street",
				type: "Pub/bar/nightclub",
				hygiene: null,
				rating_date: null,
				lat: "51.87672400",
				lng: "-0.41905800",
				distance: "0.05",
			},
			{
				name: "Chapel News & Wine",
				address: ", 62 Chapel Street",
				type: "Retailers - other",
				hygiene: 3,
				rating_date: "2020-02-18T00:00:00.000000Z",
				lat: "51.87600700",
				lng: "-0.41716600",
				distance: "0.05",
			},
			{
				name: "New Town Chinese Take Away",
				address: ", 80 Chapel Street",
				type: "Takeaway/sandwich shop",
				hygiene: 4,
				rating_date: "2019-07-14T23:00:00.000000Z",
				lat: "51.87600700",
				lng: "-0.41716600",
				distance: "0.05",
			},
			{
				name: "How Cha Chinese and Thai",
				address: ", 32 Chapel Street",
				type: "Takeaway/sandwich shop",
				hygiene: 5,
				rating_date: "2019-09-09T23:00:00.000000Z",
				lat: "51.87600600",
				lng: "-0.41716500",
				distance: "0.05",
			},
			{
				name: "Premier Inn Luton",
				address: ", Regent Street",
				type: "Hotel/bed & breakfast/guest house",
				hygiene: 5,
				rating_date: "2020-02-14T00:00:00.000000Z",
				lat: "51.87705300",
				lng: "-0.41810200",
				distance: "0.06",
			},
			{
				name: "Enterprise Public House",
				address: "The Enterprise, 20 Elizabeth Street",
				type: "Pub/bar/nightclub",
				hygiene: 4,
				rating_date: "2016-09-19T23:00:00.000000Z",
				lat: "51.87546200",
				lng: "-0.41884000",
				distance: "0.06",
			},
			{
				name: "Mario's Cafe",
				address: ", 87-89 Chapel Street",
				type: "Restaurant/Cafe/Canteen",
				hygiene: 4,
				rating_date: "2020-01-21T00:00:00.000000Z",
				lat: "51.87522200",
				lng: "-0.41831200",
				distance: "0.07",
			},
			{
				name: "Jumbo Take Away",
				address: ", 88a Chapel Street",
				type: "Takeaway/sandwich shop",
				hygiene: null,
				rating_date: null,
				lat: "51.87522200",
				lng: "-0.41831200",
				distance: "0.07",
			},
			{
				name: "Continental Food Store",
				address: ", 87-89 Chapel Street",
				type: "Retailers - other",
				hygiene: 3,
				rating_date: "2019-03-13T00:00:00.000000Z",
				lat: "51.87522200",
				lng: "-0.41831200",
				distance: "0.07",
			},
			{
				name: "Lill smoke shack pizza",
				address: ", 15 Elizabeth Street",
				type: "Takeaway/sandwich shop",
				hygiene: null,
				rating_date: null,
				lat: "51.87519310",
				lng: "-0.41891450",
				distance: "0.08",
			},
			{
				name: "The Bailie",
				address: "The Butchers Arms, 94 Hastings Street",
				type: "Pub/bar/nightclub",
				hygiene: 4,
				rating_date: "2016-08-31T23:00:00.000000Z",
				lat: "51.87565300",
				lng: "-0.42024300",
				distance: "0.09",
			},
			{
				name: "Best One Minimarket",
				address: ", 114 Wellington Street",
				type: "Retailers - other",
				hygiene: 4,
				rating_date: "2016-10-25T23:00:00.000000Z",
				lat: "51.87695400",
				lng: "-0.42009600",
				distance: "0.09",
			},
			{
				name: "Family Choice",
				address: ", 94-98 Chapel Street",
				type: "Retailers - other",
				hygiene: 4,
				rating_date: "2020-02-18T00:00:00.000000Z",
				lat: "51.87497600",
				lng: "-0.41810200",
				distance: "0.09",
			},
			{
				name: "KSK Food And Wine Ltd",
				address: ", 115 Wellington Street",
				type: "Retailers - other",
				hygiene: 4,
				rating_date: "2018-12-19T00:00:00.000000Z",
				lat: "51.87695400",
				lng: "-0.42009600",
				distance: "0.09",
			},
			{
				name: "Icon Hotel-Icon Pizzeria Cilento",
				address: "Icon Hotel Luton, 15 Stuart Street",
				type: "Hotel/bed & breakfast/guest house",
				hygiene: null,
				rating_date: null,
				lat: "51.87765800",
				lng: "-0.41898100",
				distance: "0.10",
			},
			{
				name: "Henar Mini Market",
				address: ", 75 Wellington Street",
				type: "Retailers - other",
				hygiene: 5,
				rating_date: "2018-07-03T23:00:00.000000Z",
				lat: "51.87762210",
				lng: "-0.41937060",
				distance: "0.11",
			},
			{
				name: "Jimmys Steak and Kebab House",
				address: ", 13a Windsor Street",
				type: "Takeaway/sandwich shop",
				hygiene: 4,
				rating_date: "2019-01-15T00:00:00.000000Z",
				lat: "51.87446000",
				lng: "-0.41846900",
				distance: "0.12",
			},
			{
				name: "313 Burger",
				address: ", 15 Windsor Street",
				type: "Takeaway/sandwich shop",
				hygiene: null,
				rating_date: null,
				lat: "51.87447720",
				lng: "-0.41847470",
				distance: "0.12",
			},
			{
				name: "BAMBOO PALACE",
				address: ", 15 Windsor street",
				type: "Takeaway/sandwich shop",
				hygiene: null,
				rating_date: null,
				lat: "51.87447720",
				lng: "-0.41847470",
				distance: "0.12",
			},
		],
	},
	process_time: "0.31",
};

export default mockedRestaurantsResponse;
