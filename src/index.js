const site = {
	"sections": [
		{
			"type": "header",
			"header": "Cooking with Matt",
			"images": [
				"https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/01_site_generator/p1_cooking_1.jpg",
				"https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/01_site_generator/p1_cooking_2.jpg",
				"https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/01_site_generator/p1_cooking_3.jpg"
			]
		},
		{
			"type": "text",
			"header": "Delicious Meals For You",
			"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			"type": "gallery",
			"images": [
				"https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/01_site_generator/p1_cooking_4.jpg",
				"https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/01_site_generator/p1_cooking_5.jpg",
				"https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/01_site_generator/p1_cooking_6.jpg",
				"https://raw.githubusercontent.com/CodingNomads/js_201_labs/master/resources/01_site_generator/p1_cooking_7.jpg",
			]
		}
	]
}


function buildSite(site){
	buildSections(site.sections)
}

buildSite(site)
