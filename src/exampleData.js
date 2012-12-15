"use strict";

// Hard-coded data for the example citations

define(function () {
	var CSLEDIT_exampleData = {};

	// Possible options to apply to each reference in each inline citation
	CSLEDIT_exampleData.additionalOptions = [
		{
			"description" : "Normal citation",
			"options" : {}
		},
		{
			"description" : "Locator: Pages 244-255",
			"options" : {
				"locator" : "244-252",
				"label" : "page"
			}
		},
		{
			"description" : "Locator: Chapter 5",
			"options" : {
				"locator" : "5",
				"label" : "chapter"
			}
		},
		{
			"description" : "Author only",
			"options" : {
				"author-only" : true
			}
		},
		{
			"description" : "Suppress author",
			"options" : {
				"suppress-author" : true
			}
		}
	];

	// Hard coded default list of csl-data.json references used
	// in the editor and search pages
	CSLEDIT_exampleData.jsonDocumentList = [
	{
		"type": "article-journal",
		"title": "Virgo: a laser interferometer to detect gravitational waves",
		"container-title": "Journal of Instrumentation",
		"page": "P03012-P03012",
		"volume": "7",
		"issue": "03",
		"abstract": "This paper presents a complete description of Virgo, the French-Italian gravitational wave detector.\n The detector, built at Cascina, near Pisa (Italy), is a very large Michelson interferometer, with 3\n km-long arms. In this paper, following a presentation of the physics requirements, leading to the\n specifications for the construction of the detector, a detailed description of all its different\n elements is given. These include civil engineering infrastructures, a huge ultra-high vacuum (UHV)\n chamber (about 6000 cubic metres), all of the optical components, including high quality mirrors and\n their seismic isolating suspensions, all of the electronics required to control the interferometer\n and for signal detection. The expected performances of these different elements are given, leading\n to an overall sensitivity curve as a function of the incoming gravitational wave frequency. This\n description represents the detector as built and used in the first data-taking runs. Improvements in\n different parts have been and continue to be performed, leading to better sensitivities. These will\n be detailed in a forthcoming paper.",
		"DOI": "10.1088/1748-0221/7/03/P03012",
		"ISSN": "1748-0221",
		"journalAbbreviation": "J. Instrum.",
		"language": "en-US",
		"author": [
			{
				"family": "Accadia",
				"given": "T"
			},
			{
				"family": "Acernese",
				"given": "F"
			},
			{
				"family": "Alshourbagy",
				"given": "M"
			},
			{
				"family": "Amico",
				"given": "P"
			},
			{
				"family": "Antonucci",
				"given": "F"
			},
			{
				"family": "Aoudia",
				"given": "S"
			},
			{
				"family": "Arnaud",
				"given": "N"
			},
			{
				"family": "Arnault",
				"given": "C"
			},
			{
				"family": "Arun",
				"given": "K G"
			},
			{
				"family": "Astone",
				"given": "P"
			},
			{
				"family": "Avino",
				"given": "S"
			},
			{
				"family": "Babusci",
				"given": "D"
			},
			{
				"family": "Ballardin",
				"given": "G"
			},
			{
				"family": "Barone",
				"given": "F"
			},
			{
				"family": "Barrand",
				"given": "G"
			},
			{
				"family": "Barsotti",
				"given": "L"
			},
			{
				"family": "Barsuglia",
				"given": "M"
			},
			{
				"family": "Basti",
				"given": "A"
			},
			{
				"family": "Bauer",
				"given": "Th S"
			},
			{
				"family": "Beauville",
				"given": "F"
			},
			{
				"family": "Bebronne",
				"given": "M"
			},
			{
				"family": "Bejger",
				"given": "M"
			},
			{
				"family": "Beker",
				"given": "M G"
			},
			{
				"family": "Bellachia",
				"given": "F"
			},
			{
				"family": "Belletoile",
				"given": "A"
			},
			{
				"family": "Beney",
				"given": "J L"
			},
			{
				"family": "Bernardini",
				"given": "M"
			},
			{
				"family": "Bigotta",
				"given": "S"
			},
			{
				"family": "Bilhaut",
				"given": "R"
			},
			{
				"family": "Birindelli",
				"given": "S"
			},
			{
				"family": "Bitossi",
				"given": "M"
			},
			{
				"family": "Bizouard",
				"given": "M A"
			},
			{
				"family": "Blom",
				"given": "M"
			},
			{
				"family": "Boccara",
				"given": "C"
			},
			{
				"family": "Boget",
				"given": "D"
			},
			{
				"family": "Bondu",
				"given": "F"
			},
			{
				"family": "Bonelli",
				"given": "L"
			},
			{
				"family": "Bonnand",
				"given": "R"
			},
			{
				"family": "Boschi",
				"given": "V"
			},
			{
				"family": "Bosi",
				"given": "L"
			},
			{
				"family": "Bouedo",
				"given": "T"
			},
			{
				"family": "Bouhou",
				"given": "B"
			},
			{
				"family": "Bozzi",
				"given": "A"
			},
			{
				"family": "Bracci",
				"given": "L"
			},
			{
				"family": "Braccini",
				"given": "S"
			},
			{
				"family": "Bradaschia",
				"given": "C"
			},
			{
				"family": "Branchesi",
				"given": "M"
			},
			{
				"family": "Briant",
				"given": "T"
			},
			{
				"family": "Brillet",
				"given": "A"
			},
			{
				"family": "Brisson",
				"given": "V"
			},
			{
				"family": "Brocco",
				"given": "L"
			},
			{
				"family": "Bulik",
				"given": "T"
			},
			{
				"family": "Bulten",
				"given": "H J"
			},
			{
				"family": "Buskulic",
				"given": "D"
			},
			{
				"family": "Buy",
				"given": "C"
			},
			{
				"family": "Cagnoli",
				"given": "G"
			},
			{
				"family": "Calamai",
				"given": "G"
			},
			{
				"family": "Calloni",
				"given": "E"
			},
			{
				"family": "Campagna",
				"given": "E"
			},
			{
				"family": "Canuel",
				"given": "B"
			},
			{
				"family": "Carbognani",
				"given": "F"
			},
			{
				"family": "Carbone",
				"given": "L"
			},
			{
				"family": "Cavalier",
				"given": "F"
			},
			{
				"family": "Cavalieri",
				"given": "R"
			},
			{
				"family": "Cecchi",
				"given": "R"
			},
			{
				"family": "Cella",
				"given": "G"
			},
			{
				"family": "Cesarini",
				"given": "E"
			},
			{
				"family": "Chassande-Mottin",
				"given": "E"
			},
			{
				"family": "Chatterji",
				"given": "S"
			},
			{
				"family": "Chiche",
				"given": "R"
			},
			{
				"family": "Chincarini",
				"given": "A"
			},
			{
				"family": "Chiummo",
				"given": "A"
			},
			{
				"family": "Christensen",
				"given": "N"
			},
			{
				"family": "Clapson",
				"given": "A C"
			},
			{
				"family": "Cleva",
				"given": "F"
			},
			{
				"family": "Coccia",
				"given": "E"
			},
			{
				"family": "Cohadon",
				"given": "P -F"
			},
			{
				"family": "Colacino",
				"given": "C N"
			},
			{
				"family": "Colas",
				"given": "J"
			},
			{
				"family": "Colla",
				"given": "A"
			},
			{
				"family": "Colombini",
				"given": "M"
			},
			{
				"family": "Conforto",
				"given": "G"
			},
			{
				"family": "Corsi",
				"given": "A"
			},
			{
				"family": "Cortese",
				"given": "S"
			},
			{
				"family": "Cottone",
				"given": "F"
			},
			{
				"family": "Coulon",
				"given": "J -P"
			},
			{
				"family": "Cuoco",
				"given": "E"
			},
			{
				"family": "D'Antonio",
				"given": "S"
			},
			{
				"family": "Daguin",
				"given": "G"
			},
			{
				"family": "Dari",
				"given": "A"
			},
			{
				"family": "Dattilo",
				"given": "V"
			},
			{
				"family": "David",
				"given": "P Y"
			},
			{
				"family": "Davier",
				"given": "M"
			},
			{
				"family": "Day",
				"given": "R"
			},
			{
				"family": "Debreczeni",
				"given": "G"
			},
			{
				"family": "Carolis",
				"given": "G De"
			},
			{
				"family": "Dehamme",
				"given": "M"
			},
			{
				"family": "Fabbro",
				"given": "R Del"
			},
			{
				"family": "Pozzo",
				"given": "W Del"
			},
			{
				"family": "Prete",
				"given": "M del"
			},
			{
				"family": "Derome",
				"given": "L"
			},
			{
				"family": "Rosa",
				"given": "R De"
			},
			{
				"family": "DeSalvo",
				"given": "R"
			},
			{
				"family": "Dialinas",
				"given": "M"
			},
			{
				"family": "Fiore",
				"given": "L Di"
			},
			{
				"family": "Lieto",
				"given": "A Di"
			},
			{
				"family": "Emilio",
				"given": "M Di Paolo"
			},
			{
				"family": "Virgilio",
				"given": "A Di"
			},
			{
				"family": "Dietz",
				"given": "A"
			},
			{
				"family": "Doets",
				"given": "M"
			},
			{
				"family": "Dominici",
				"given": "P"
			},
			{
				"family": "Dominjon",
				"given": "A"
			},
			{
				"family": "Drago",
				"given": "M"
			},
			{
				"family": "Drezen",
				"given": "C"
			},
			{
				"family": "Dujardin",
				"given": "B"
			},
			{
				"family": "Dulach",
				"given": "B"
			},
			{
				"family": "Eder",
				"given": "C"
			},
			{
				"family": "Eleuteri",
				"given": "A"
			},
			{
				"family": "Enard",
				"given": "D"
			},
			{
				"family": "Evans",
				"given": "M"
			},
			{
				"family": "Fabbroni",
				"given": "L"
			},
			{
				"family": "Fafone",
				"given": "V"
			},
			{
				"family": "Fang",
				"given": "H"
			},
			{
				"family": "Ferrante",
				"given": "I"
			},
			{
				"family": "Fidecaro",
				"given": "F"
			},
			{
				"family": "Fiori",
				"given": "I"
			},
			{
				"family": "Flaminio",
				"given": "R"
			},
			{
				"family": "Forest",
				"given": "D"
			},
			{
				"family": "Forte",
				"given": "L A"
			},
			{
				"family": "Fournier",
				"given": "J -D"
			},
			{
				"family": "Fournier",
				"given": "L"
			},
			{
				"family": "Franc",
				"given": "J"
			},
			{
				"family": "Francois",
				"given": "O"
			},
			{
				"family": "Frasca",
				"given": "S"
			},
			{
				"family": "Frasconi",
				"given": "F"
			},
			{
				"family": "Freise",
				"given": "A"
			},
			{
				"family": "Gaddi",
				"given": "A"
			},
			{
				"family": "Galimberti",
				"given": "M"
			},
			{
				"family": "Gammaitoni",
				"given": "L"
			},
			{
				"family": "Ganau",
				"given": "P"
			},
			{
				"family": "Garnier",
				"given": "C"
			},
			{
				"family": "Garufi",
				"given": "F"
			},
			{
				"family": "G\u00e1sp\u00e1r",
				"given": "M E"
			},
			{
				"family": "Gemme",
				"given": "G"
			},
			{
				"family": "Genin",
				"given": "E"
			},
			{
				"family": "Gennai",
				"given": "A"
			},
			{
				"family": "Gennaro",
				"given": "G"
			},
			{
				"family": "Giacobone",
				"given": "L"
			},
			{
				"family": "Giazotto",
				"given": "A"
			},
			{
				"family": "Giordano",
				"given": "G"
			},
			{
				"family": "Giordano",
				"given": "L"
			},
			{
				"family": "Girard",
				"given": "C"
			},
			{
				"family": "Gouaty",
				"given": "R"
			},
			{
				"family": "Grado",
				"given": "A"
			},
			{
				"family": "Granata",
				"given": "M"
			},
			{
				"family": "Granata",
				"given": "V"
			},
			{
				"family": "Grave",
				"given": "X"
			},
			{
				"family": "Greverie",
				"given": "C"
			},
			{
				"family": "Groenstege",
				"given": "H"
			},
			{
				"family": "Guidi",
				"given": "G M"
			},
			{
				"family": "Hamdani",
				"given": "S"
			},
			{
				"family": "Hayau",
				"given": "J -F"
			},
			{
				"family": "Hebri",
				"given": "S"
			},
			{
				"family": "Heidmann",
				"given": "A"
			},
			{
				"family": "Heitmann",
				"given": "H"
			},
			{
				"family": "Hello",
				"given": "P"
			},
			{
				"family": "Hemming",
				"given": "G"
			},
			{
				"family": "Hennes",
				"given": "E"
			},
			{
				"family": "Hermel",
				"given": "R"
			},
			{
				"family": "Heusse",
				"given": "P"
			},
			{
				"family": "Holloway",
				"given": "L"
			},
			{
				"family": "Huet",
				"given": "D"
			},
			{
				"family": "Iannarelli",
				"given": "M"
			},
			{
				"family": "Jaranowski",
				"given": "P"
			},
			{
				"family": "Jehanno",
				"given": "D"
			},
			{
				"family": "Journet",
				"given": "L"
			},
			{
				"family": "Karkar",
				"given": "S"
			},
			{
				"family": "Ketel",
				"given": "T"
			},
			{
				"family": "Voet",
				"given": "H"
			},
			{
				"family": "Kovalik",
				"given": "J"
			},
			{
				"family": "Kowalska",
				"given": "I"
			},
			{
				"family": "Kreckelbergh",
				"given": "S"
			},
			{
				"family": "Krolak",
				"given": "A"
			},
			{
				"family": "Lacotte",
				"given": "J C"
			},
			{
				"family": "Lagrange",
				"given": "B"
			},
			{
				"family": "Penna",
				"given": "P La"
			},
			{
				"family": "Laval",
				"given": "M"
			},
			{
				"family": "Marec",
				"given": "J C Le"
			},
			{
				"family": "Leroy",
				"given": "N"
			},
			{
				"family": "Letendre",
				"given": "N"
			},
			{
				"family": "Li",
				"given": "T G F"
			},
			{
				"family": "Lieunard",
				"given": "B"
			},
			{
				"family": "Liguori",
				"given": "N"
			},
			{
				"family": "Lodygensky",
				"given": "O"
			},
			{
				"family": "Lopez",
				"given": "B"
			},
			{
				"family": "Lorenzini",
				"given": "M"
			},
			{
				"family": "Loriette",
				"given": "V"
			},
			{
				"family": "Losurdo",
				"given": "G"
			},
			{
				"family": "Loupias",
				"given": "M"
			},
			{
				"family": "Mackowski",
				"given": "J M"
			},
			{
				"family": "Maiani",
				"given": "T"
			},
			{
				"family": "Majorana",
				"given": "E"
			},
			{
				"family": "Magazz\u00f9",
				"given": "C"
			},
			{
				"family": "Maksimovic",
				"given": "I"
			},
			{
				"family": "Malvezzi",
				"given": "V"
			},
			{
				"family": "Man",
				"given": "N"
			},
			{
				"family": "Mancini",
				"given": "S"
			},
			{
				"family": "Mansoux",
				"given": "B"
			},
			{
				"family": "Mantovani",
				"given": "M"
			},
			{
				"family": "Marchesoni",
				"given": "F"
			},
			{
				"family": "Marion",
				"given": "F"
			},
			{
				"family": "Marin",
				"given": "P"
			},
			{
				"family": "Marque",
				"given": "J"
			},
			{
				"family": "Martelli",
				"given": "F"
			},
			{
				"family": "Masserot",
				"given": "A"
			},
			{
				"family": "Massonnet",
				"given": "L"
			},
			{
				"family": "Matone",
				"given": "G"
			},
			{
				"family": "Matone",
				"given": "L"
			},
			{
				"family": "Mazzoni",
				"given": "M"
			},
			{
				"family": "Menzinger",
				"given": "F"
			},
			{
				"family": "Michel",
				"given": "C"
			},
			{
				"family": "Milano",
				"given": "L"
			},
			{
				"family": "Minenkov",
				"given": "Y"
			},
			{
				"family": "Mitra",
				"given": "S"
			},
			{
				"family": "Mohan",
				"given": "M"
			},
			{
				"family": "Montorio",
				"given": "J -L"
			},
			{
				"family": "Morand",
				"given": "R"
			},
			{
				"family": "Moreau",
				"given": "F"
			},
			{
				"family": "Moreau",
				"given": "J"
			},
			{
				"family": "Morgado",
				"given": "N"
			},
			{
				"family": "Morgia",
				"given": "A"
			},
			{
				"family": "Mosca",
				"given": "S"
			},
			{
				"family": "Moscatelli",
				"given": "V"
			},
			{
				"family": "Mours",
				"given": "B"
			},
			{
				"family": "Mugnier",
				"given": "P"
			},
			{
				"family": "Mul",
				"given": "F -A"
			},
			{
				"family": "Naticchioni",
				"given": "L"
			},
			{
				"family": "Neri",
				"given": "I"
			},
			{
				"family": "Nocera",
				"given": "F"
			},
			{
				"family": "Pacaud",
				"given": "E"
			},
			{
				"family": "Pagliaroli",
				"given": "G"
			},
			{
				"family": "Pai",
				"given": "A"
			},
			{
				"family": "Palladino",
				"given": "L"
			},
			{
				"family": "Palomba",
				"given": "C"
			},
			{
				"family": "Paoletti",
				"given": "F"
			},
			{
				"family": "Paoletti",
				"given": "R"
			},
			{
				"family": "Paoli",
				"given": "A"
			},
			{
				"family": "Pardi",
				"given": "S"
			},
			{
				"family": "Parguez",
				"given": "G"
			},
			{
				"family": "Parisi",
				"given": "M"
			},
			{
				"family": "Pasqualetti",
				"given": "A"
			},
			{
				"family": "Passaquieti",
				"given": "R"
			},
			{
				"family": "Passuello",
				"given": "D"
			},
			{
				"family": "Perciballi",
				"given": "M"
			},
			{
				"family": "Perniola",
				"given": "B"
			},
			{
				"family": "Persichetti",
				"given": "G"
			},
			{
				"family": "Petit",
				"given": "S"
			},
			{
				"family": "Pichot",
				"given": "M"
			},
			{
				"family": "Piergiovanni",
				"given": "F"
			},
			{
				"family": "Pietka",
				"given": "M"
			},
			{
				"family": "Pignard",
				"given": "R"
			},
			{
				"family": "Pinard",
				"given": "L"
			},
			{
				"family": "Poggiani",
				"given": "R"
			},
			{
				"family": "Popolizio",
				"given": "P"
			},
			{
				"family": "Pradier",
				"given": "T"
			},
			{
				"family": "Prato",
				"given": "M"
			},
			{
				"family": "Prodi",
				"given": "G A"
			},
			{
				"family": "Punturo",
				"given": "M"
			},
			{
				"family": "Puppo",
				"given": "P"
			},
			{
				"family": "Qipiani",
				"given": "K"
			},
			{
				"family": "Rabaste",
				"given": "O"
			},
			{
				"family": "Rabeling",
				"given": "D S"
			},
			{
				"family": "R\u00e1cz",
				"given": "I"
			},
			{
				"family": "Raffaelli",
				"given": "F"
			},
			{
				"family": "Rapagnani",
				"given": "P"
			},
			{
				"family": "Rapisarda",
				"given": "S"
			},
			{
				"family": "Re",
				"given": "V"
			},
			{
				"family": "Reboux",
				"given": "A"
			},
			{
				"family": "Regimbau",
				"given": "T"
			},
			{
				"family": "Reita",
				"given": "V"
			},
			{
				"family": "Remilleux",
				"given": "A"
			},
			{
				"family": "Ricci",
				"given": "F"
			},
			{
				"family": "Ricciardi",
				"given": "I"
			},
			{
				"family": "Richard",
				"given": "F"
			},
			{
				"family": "Ripepe",
				"given": "M"
			},
			{
				"family": "Robinet",
				"given": "F"
			},
			{
				"family": "Rocchi",
				"given": "A"
			},
			{
				"family": "Rolland",
				"given": "L"
			},
			{
				"family": "Romano",
				"given": "R"
			},
			{
				"family": "Rosi\u0144ska",
				"given": "D"
			},
			{
				"family": "Roudier",
				"given": "P"
			},
			{
				"family": "Ruggi",
				"given": "P"
			},
			{
				"family": "Russo",
				"given": "G"
			},
			{
				"family": "Salconi",
				"given": "L"
			},
			{
				"family": "Sannibale",
				"given": "V"
			},
			{
				"family": "Sassolas",
				"given": "B"
			},
			{
				"family": "Sentenac",
				"given": "D"
			},
			{
				"family": "Solimeno",
				"given": "S"
			},
			{
				"family": "Sottile",
				"given": "R"
			},
			{
				"family": "Sperandio",
				"given": "L"
			},
			{
				"family": "Stanga",
				"given": "R"
			},
			{
				"family": "Sturani",
				"given": "R"
			},
			{
				"family": "Swinkels",
				"given": "B"
			},
			{
				"family": "Tacca",
				"given": "M"
			},
			{
				"family": "Taddei",
				"given": "R"
			},
			{
				"family": "Taffarello",
				"given": "L"
			},
			{
				"family": "Tarallo",
				"given": "M"
			},
			{
				"family": "Tissot",
				"given": "S"
			},
			{
				"family": "Toncelli",
				"given": "A"
			},
			{
				"family": "Tonelli",
				"given": "M"
			},
			{
				"family": "Torre",
				"given": "O"
			},
			{
				"family": "Tournefier",
				"given": "E"
			},
			{
				"family": "Travasso",
				"given": "F"
			},
			{
				"family": "Tremola",
				"given": "C"
			},
			{
				"family": "Turri",
				"given": "E"
			},
			{
				"family": "Vajente",
				"given": "G"
			},
			{
				"family": "Brand",
				"given": "J F J van den"
			},
			{
				"family": "Broeck",
				"given": "C Van Den"
			},
			{
				"family": "Putten",
				"given": "S van der"
			},
			{
				"family": "Vasuth",
				"given": "M"
			},
			{
				"family": "Vavoulidis",
				"given": "M"
			},
			{
				"family": "Vedovato",
				"given": "G"
			},
			{
				"family": "Verkindt",
				"given": "D"
			},
			{
				"family": "Vetrano",
				"given": "F"
			},
			{
				"family": "V\u00e9ziant",
				"given": "O"
			},
			{
				"family": "Vicer\u00e9",
				"given": "A"
			},
			{
				"family": "Vinet",
				"given": "J -Y"
			},
			{
				"family": "Vilalte",
				"given": "S"
			},
			{
				"family": "Vitale",
				"given": "S"
			},
			{
				"family": "Vocca",
				"given": "H"
			},
			{
				"family": "Ward",
				"given": "R L"
			},
			{
				"family": "Was",
				"given": "M"
			},
			{
				"family": "Yamamoto",
				"given": "K"
			},
			{
				"family": "Yvert",
				"given": "M"
			},
			{
				"family": "Zendri",
				"given": "J -P"
			},
			{
				"family": "Zhang",
				"given": "Z"
			}
		],
		"issued": {
			"date-parts": [
				[
					"2012",
					3,
					29
				]
			]
		}
	},
	{
		"type": "report",
		"title": "Country clustering in comparative political economy",
		"publisher": "Max-Planck Institute for the Study of Societies",
		"publisher-place": "Cologne",
		"page": "32",
		"genre": "MPIfG Discussion Paper",
		"event-place": "Cologne",
		"URL": "www.mpifg.de/pu/mpifg_dp/dp09-5.pdf",
		"number": "09-5",
		"author": [
			{
				"family": "Ahlquist",
				"given": "John S."
			},
			{
				"family": "Breunig",
				"given": "Christian"
			}
		],
		"issued": {
			"date-parts": [
				[
					2009
				]
			]
		},
		"accessed": {
			"date-parts": [
				[
					2012,
					12,
					15
				]
			]
		}
	},
	{
		"type": "book",
		"title": "Selected non-fictions",
		"publisher": "Viking",
		"publisher-place": "New York",
		"number-of-pages": "559",
		"event-place": "New York",
		"ISBN": "0670849472",
		"language": "en-US",
		"author": [
			{
				"family": "Borges",
				"given": "Jorge Luis"
			}
		],
		"editor": [
			{
				"family": "Weinberger",
				"given": "Eliot"
			}
		],
		"translator": [
			{
				"family": "Allen",
				"given": "Esther"
			},
			{
				"family": "Levine",
				"given": "Suzanne Jill"
			},
			{
				"family": "Weinberger",
				"given": "Eliot"
			}
		],
		"issued": {
			"date-parts": [
				[
					1999
				]
			]
		}
	},
	{
		"type": "article-journal",
		"title": "The varieties of capitalism and hybrid success",
		"container-title": "Comparative Political Studies",
		"page": "307-332",
		"volume": "40",
		"issue": "3",
		"abstract": "The varieties of capitalism literature maintains that advanced capitalist countries whose institutions best fit either the liberal or coordinated market economy types will perform better than countries whose institutions are mixed. This is because hybrids are less likely to yield functionally beneficial institutional complementarities. The authors challenge this assertion. Denmark has performed as well as many purer cases during the 1990s. And Denmark has recently developed a more hybrid form than is generally recognized by (a) increasing the exposure of actors to market forces and (b) decentralizing collective learning and decision making. The institutional complementarities associated with such hybridization have contributed to its success; however, these complementarities are based on institutional heterogeneity rather than homogeneity. This is demonstrated by analyses of three cases: Danish labor markets, vocational training, and industrial policy. The implication of the authors' argument is that the varieties of capitalism theory is logically flawed.",
		"URL": "http://cps.sagepub.com.turing.library.northwestern.edu/content/40/3/307.abstract",
		"DOI": "10.1177/0010414006286542",
		"ISSN": "1552-3829",
		"journalAbbreviation": "Comp. Polit. Stud.",
		"language": "en-US",
		"author": [
			{
				"family": "Campbell",
				"given": "John L."
			},
			{
				"family": "Pedersen",
				"given": "Ove K."
			}
		],
		"issued": {
			"date-parts": [
				[
					"2007",
					3,
					1
				]
			]
		},
		"accessed": {
			"date-parts": [
				[
					2010,
					7,
					26
				]
			]
		}
	},
	{
		"type": "book",
		"title": "Planting green roofs and living walls",
		"publisher": "Timber Press",
		"publisher-place": "Portland, OR",
		"number-of-pages": "328",
		"edition": "2",
		"event-place": "Portland, OR",
		"abstract": "The latest techniques for planting roofs and walls to enhance our buildings and benefit the environment. The green roof industry is booming and the technology changing fast as professionals respond to the unique challenges of each new planting. In this comprehensively updated, fully revised edition of their authoritative reference, Nigel Dunnett and Nol Kingsbury reveal the very latest techniques, materials, and plants, and showcase some spectacular new case studies for the non-professional. Green roofs and walls reduce pollution and runoff, help insulate and reduce the maintenance needs of buildings, contribute to biodiversity, and provide habitats for wildlife. In addition to all this, they are attractive to look at and enhance the quality of life of residents. In Planting Green Roofs and Living Walls, Revised and Updated Edition, the authors describe and illustrate the practical techniques required to design, implement, and maintain a green roof or wall to the highest standards. This informative, up-to-the-minute reference will encourage gardeners everywhere to consider the enormous benefits to be gained from planting on their roofs and walls.",
		"ISBN": "0881929115",
		"language": "en-US",
		"author": [
			{
				"family": "Dunnett",
				"given": "Nigel"
			},
			{
				"family": "Kingsbury",
				"given": "No\u00ebl"
			}
		],
		"issued": {
			"date-parts": [
				[
					2008
				]
			]
		}
	},
	{
		"type": "article-journal",
		"title": "On the electrodynamics of moving bodies",
		"container-title": "Annalen der Physik",
		"page": "1-26",
		"volume": "17",
		"issue": "4",
		"abstract": "General description of special relativity",
		"URL": "http://bavard.fourmilab.ch/etexts/einstein/specrel/specrel.pdf",
		"DOI": "10.1088/0143-0807/27/4/007",
		"journalAbbreviation": "Ann. Phys.",
		"language": "en-US",
		"author": [
			{
				"family": "Einstein",
				"given": "Albert"
			}
		],
		"issued": {
			"date-parts": [
				[
					1905
				]
			]
		}
	},
	{
		"type": "article-newspaper",
		"title": "Rooftop greenhouse will boost city farming",
		"container-title": "New York Times",
		"publisher-place": "New York",
		"page": "A20",
		"event-place": "New York",
		"ISSN": "0362-4331",
		"language": "en-US",
		"author": [
			{
				"family": "Foderaro",
				"given": "Lisa W."
			}
		],
		"issued": {
			"date-parts": [
				[
					"2012",
					4,
					6
				]
			]
		}
	},
	{
		"type": "book",
		"title": "Beyond varieties of capitalism: conflict, contradiction, and complementarities in the European economy",
		"publisher": "Oxford University Press",
		"publisher-place": "Oxford and New York",
		"number-of-pages": "438",
		"event-place": "Oxford and New York",
		"ISBN": "9780199206483",
		"shortTitle": "Beyond varieties of capitalism",
		"language": "en-GB",
		"editor": [
			{
				"family": "Hanck\u00e9",
				"given": "Bob"
			},
			{
				"family": "Rhodes",
				"given": "Martin"
			},
			{
				"family": "Thatcher",
				"given": "Mark"
			}
		],
		"issued": {
			"date-parts": [
				[
					2007
				]
			]
		}
	},
	{
		"type": "book",
		"title": "Steve Jobs",
		"publisher": "Simon & Schuster",
		"publisher-place": "New York, NY",
		"number-of-pages": "630",
		"event-place": "New York, NY",
		"ISBN": "9781451648539",
		"language": "en-US",
		"author": [
			{
				"family": "Isaacson",
				"given": "Walter"
			}
		],
		"issued": {
			"date-parts": [
				[
					"2011",
					10,
					24
				]
			]
		}
	},
	{
		"type": "chapter",
		"title": "Firms and the welfare state: When, why, and how does social policy matter to employers?",
		"container-title": "Varieties of capitalism. The institutional foundations of comparative advantage",
		"publisher": "Oxford University Press",
		"publisher-place": "New York",
		"page": "184-213",
		"event-place": "New York",
		"ISBN": "9780199247752",
		"language": "en-US",
		"author": [
			{
				"family": "Mares",
				"given": "Isabela"
			}
		],
		"editor": [
			{
				"family": "Hall",
				"given": "Peter A"
			},
			{
				"family": "Soskice",
				"given": "David"
			}
		],
		"issued": {
			"date-parts": [
				[
					2001
				]
			]
		}
	},
	{
		"type": "book",
		"title": "Shaping the body politic: Art and political formation in early america",
		"publisher": "University of Virginia Press",
		"publisher-place": "Charlottesville, VA",
		"number-of-pages": "313",
		"event-place": "Charlottesville, VA",
		"abstract": "Traditional narratives imply that art in early America was severely limited in scope. By contrast, these essays collectively argue that visual arts played a critical role in shaping an early American understanding of the body politic. American artists in the late colonial and early national periods enlisted the arts to explore and exploit their visions of the relationship of the American colonies to the mother country and, later, to give material shape to the ideals of modern republican nationhood. Taking a uniquely broad view of both politics and art, Shaping the Body Politic ranges in topic from national politics to the politics of national identity, and from presidential portraits to the architectures of the ordinary. The book covers subject matter from the 1760s to the 1820s, ranging from Patience Wright's embodiment of late colonial political tension to Thomas Jefferson's designs for the entry hall at Monticello as a museum. Paul Staiti, Maurie McInnis, and Roger Stein offer new readings of canonical presidential images and spaces: Jean-Antoine Houdon's George Washington, Gilbert Stuart's the Lansdowne portrait of Washington, and Thomas Jefferson's Monticello. In essays that engage print and painting, portraiture and landscape, Wendy Bellion, David Steinberg, and John Crowley explore the formation of national identity. The volume's concluding essays, by Susan Rather and Bernard Herman, examine the politics of the everyday. The accompanying eighty-five illustrations and color plates demonstrate the broad range of politically resonant visual material in early America. ContributorsWendy Bellion, University of Delaware * John E. Crowley, Dalhousie University * Bernard L. Herman, University of North Carolina, Chapel Hill * Maurie D. McInnis, University of Virginia * Louis P. Nelson, University of Virginia * Susan Rather, University of Texas, Austin * Paul Staiti, Mount Holyoke College * Roger B. Stein, emeritus, University of Virginia * David Steinberg, Independent Scholar Thomas Jefferson Foundation Distinguished Lecture Series",
		"ISBN": "0813931029",
		"language": "en-US",
		"author": [
			{
				"family": "McInnis",
				"given": "Maurie Dee"
			},
			{
				"family": "Nelson",
				"given": "Louis P."
			}
		],
		"issued": {
			"date-parts": [
				[
					2011
				]
			]
		}
	},
	{
		"type": "patent",
		"title": "Yo-yo having a modifiable string gap",
		"abstract": "The invention is a yo-yo that includes unique features that enable a user to adjust the yo-yo's string gap. In the preferred embodiment, at least one of the yo-yo's side assemblies includes a screw engaged to a nut that has two thru-bores located in a side-by-side relation. The screw is located to one side of the yo-yo's axis of rotation and can be rotated by a user to adjust the position of the associated side assembly on the yo-yo's axle structure. By appropriate positioning of the side assembly, a user can adjust the yo-yo's performance characteristics.",
		"number": "WO2011US30214",
		"issued": {
			"date-parts": [
				[
					2011
				]
			]
		}
	},
	{
		"type": "article-journal",
		"title": "Molecular structure of nucleic acids; a structure for deoxyribose nucleic acid",
		"container-title": "Nature",
		"page": "737-738",
		"volume": "171",
		"issue": "4356",
		"abstract": "We wish to suggest a structure for the salt of deoxyribose nucleic acid (D.N.A.). This structure has novel features which are of considerable biological interest.",
		"URL": "http://www.ncbi.nlm.nih.gov/pubmed/13054692",
		"DOI": "10.1038/171737a0",
		"ISSN": "0028-0836",
		"shortTitle": "Molecular structure of nucleic acids",
		"journalAbbreviation": "Nature",
		"language": "en-US",
		"author": [
			{
				"family": "Watson",
				"given": "James Dewey"
			},
			{
				"family": "Crick",
				"given": "Francis Harry Compton"
			}
		],
		"issued": {
			"date-parts": [
				[
					1953
				]
			]
		}
	},
	{
		"type": "webpage",
		"title": "CSL search by example",
		"container-title": "Citation Style Editor",
		"URL": "http://editor.citationstyles.org/searchByExample/",
		"accessed": {
			"date-parts": [
				[
					2012,
					12,
					15
				]
			]
		}
	}
]
	return CSLEDIT_exampleData;
});
