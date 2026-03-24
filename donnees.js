/* ═══════════════════════════════════════════════════════════════════════════
   ATLAS DES FORMES LITTÉRAIRES — données
   ─────────────────────────────────────────────────────────────────────────
   Ce fichier contient uniquement les données :
     • PAYS          — métadonnées des pays (drapeau, capitale, population…)
     • resolveCityName — résolveur de noms historiques de villes
     • LITERARY_FORMS  — formes littéraires, chronologies, événements, villes
     • ERAS / getEra   — périodes historiques
   ─────────────────────────────────────────────────────────────────────────
   Pour ajouter une forme :
     Ajoutez une clé dans LITERARY_FORMS avec label, desc, et timeline.
   Pour ajouter un événement :
     Ajoutez un objet { year, events:[…] } dans la timeline de la forme.
   Pour ajouter un pays manquant :
     Ajoutez une entrée dans PAYS (clé = code ISO 3166-1 numérique, 3 chiffres).
═══════════════════════════════════════════════════════════════════════════ */

const PAYS={
"004":{nom:"Afghanistan",capitale:"Kaboul",pop:"40,1 M",superficie:"652 230 km²",drapeau:"🇦🇫"},
"008":{nom:"Albanie",capitale:"Tirana",pop:"2,8 M",superficie:"28 748 km²",drapeau:"🇦🇱"},
"012":{nom:"Algérie",capitale:"Alger",pop:"44,7 M",superficie:"2 381 741 km²",drapeau:"🇩🇿"},
"020":{nom:"Andorre",capitale:"Andorre-la-Vieille",pop:"0,08 M",superficie:"468 km²",drapeau:"🇦🇩"},
"024":{nom:"Angola",capitale:"Luanda",pop:"34,5 M",superficie:"1 246 700 km²",drapeau:"🇦🇴"},
"031":{nom:"Azerbaïdjan",capitale:"Bakou",pop:"10,2 M",superficie:"86 600 km²",drapeau:"🇦🇿"},
"032":{nom:"Argentine",capitale:"Buenos Aires",pop:"45,2 M",superficie:"2 780 400 km²",drapeau:"🇦🇷"},
"036":{nom:"Australie",capitale:"Canberra",pop:"25,7 M",superficie:"7 692 024 km²",drapeau:"🇦🇺"},
"040":{nom:"Autriche",capitale:"Vienne",pop:"9,1 M",superficie:"83 871 km²",drapeau:"🇦🇹"},
"048":{nom:"Bahreïn",capitale:"Manama",pop:"1,5 M",superficie:"778 km²",drapeau:"🇧🇭"},
"050":{nom:"Bangladesh",capitale:"Dacca",pop:"167 M",superficie:"147 570 km²",drapeau:"🇧🇩"},
"051":{nom:"Arménie",capitale:"Erevan",pop:"3 M",superficie:"29 743 km²",drapeau:"🇦🇲"},
"056":{nom:"Belgique",capitale:"Bruxelles",pop:"11,6 M",superficie:"30 528 km²",drapeau:"🇧🇪"},
"064":{nom:"Bhoutan",capitale:"Thimphou",pop:"0,7 M",superficie:"38 394 km²",drapeau:"🇧🇹"},
"068":{nom:"Bolivie",capitale:"Sucre",pop:"12,1 M",superficie:"1 098 581 km²",drapeau:"🇧🇴"},
"070":{nom:"Bosnie-Herzégovine",capitale:"Sarajevo",pop:"3,3 M",superficie:"51 197 km²",drapeau:"🇧🇦"},
"072":{nom:"Botswana",capitale:"Gaborone",pop:"2,6 M",superficie:"581 730 km²",drapeau:"🇧🇼"},
"076":{nom:"Brésil",capitale:"Brasília",pop:"214 M",superficie:"8 515 767 km²",drapeau:"🇧🇷"},
"084":{nom:"Belize",capitale:"Belmopan",pop:"0,4 M",superficie:"22 966 km²",drapeau:"🇧🇿"},
"090":{nom:"Îles Salomon",capitale:"Honiara",pop:"0,7 M",superficie:"28 896 km²",drapeau:"🇸🇧"},
"096":{nom:"Brunéi",capitale:"Bandar Seri Begawan",pop:"0,4 M",superficie:"5 765 km²",drapeau:"🇧🇳"},
"100":{nom:"Bulgarie",capitale:"Sofia",pop:"6,5 M",superficie:"110 879 km²",drapeau:"🇧🇬"},
"104":{nom:"Myanmar",capitale:"Naypyidaw",pop:"54,4 M",superficie:"676 578 km²",drapeau:"🇲🇲"},
"108":{nom:"Burundi",capitale:"Gitega",pop:"12,6 M",superficie:"27 834 km²",drapeau:"🇧🇮"},
"112":{nom:"Biélorussie",capitale:"Minsk",pop:"9,4 M",superficie:"207 600 km²",drapeau:"🇧🇾"},
"116":{nom:"Cambodge",capitale:"Phnom Penh",pop:"16,7 M",superficie:"181 035 km²",drapeau:"🇰🇭"},
"120":{nom:"Cameroun",capitale:"Yaoundé",pop:"27,2 M",superficie:"475 442 km²",drapeau:"🇨🇲"},
"124":{nom:"Canada",capitale:"Ottawa",pop:"38,2 M",superficie:"9 984 670 km²",drapeau:"🇨🇦"},
"132":{nom:"Cap-Vert",capitale:"Praia",pop:"0,6 M",superficie:"4 033 km²",drapeau:"🇨🇻"},
"140":{nom:"Rép. centrafricaine",capitale:"Bangui",pop:"5,0 M",superficie:"622 984 km²",drapeau:"🇨🇫"},
"144":{nom:"Sri Lanka",capitale:"Sri Jayawardenepura Kotte",pop:"22 M",superficie:"65 610 km²",drapeau:"🇱🇰"},
"148":{nom:"Tchad",capitale:"N'Djamena",pop:"17,4 M",superficie:"1 284 000 km²",drapeau:"🇹🇩"},
"152":{nom:"Chili",capitale:"Santiago",pop:"19,1 M",superficie:"756 102 km²",drapeau:"🇨🇱"},
"156":{nom:"Chine",capitale:"Pékin",pop:"1 412 M",superficie:"9 596 960 km²",drapeau:"🇨🇳"},
"158":{nom:"Taïwan",capitale:"Taipei",pop:"23,6 M",superficie:"35 980 km²",drapeau:"🇹🇼"},
"170":{nom:"Colombie",capitale:"Bogotá",pop:"51 M",superficie:"1 141 748 km²",drapeau:"🇨🇴"},
"174":{nom:"Comores",capitale:"Moroni",pop:"0,9 M",superficie:"2 235 km²",drapeau:"🇰🇲"},
"178":{nom:"République du Congo",capitale:"Brazzaville",pop:"5,8 M",superficie:"342 000 km²",drapeau:"🇨🇬"},
"180":{nom:"Rép. dém. du Congo",capitale:"Kinshasa",pop:"99,0 M",superficie:"2 344 858 km²",drapeau:"🇨🇩"},
"188":{nom:"Costa Rica",capitale:"San José",pop:"5,2 M",superficie:"51 100 km²",drapeau:"🇨🇷"},
"191":{nom:"Croatue",capitale:"Zagreb",pop:"4 M",superficie:"56 594 km²",drapeau:"🇭🇷"},
"192":{nom:"Cuba",capitale:"La Havane",pop:"11,3 M",superficie:"109 884 km²",drapeau:"🇨🇺"},
"196":{nom:"Chypre",capitale:"Nicosie",pop:"1,2 M",superficie:"9 251 km²",drapeau:"🇨🇾"},
"203":{nom:"Tchéquie",capitale:"Prague",pop:"10,7 M",superficie:"78 866 km²",drapeau:"🇨🇿"},
"204":{nom:"Bénin",capitale:"Porto-Novo",pop:"13,0 M",superficie:"112 622 km²",drapeau:"🇧🇯"},
"208":{nom:"Danemark",capitale:"Copenhague",pop:"5,9 M",superficie:"43 094 km²",drapeau:"🇩🇰"},
"214":{nom:"Rép. dominicaine",capitale:"Saint-Domingue",pop:"11,1 M",superficie:"48 671 km²",drapeau:"🇩🇴"},
"218":{nom:"Équateur",capitale:"Quito",pop:"18,0 M",superficie:"283 561 km²",drapeau:"🇪🇨"},
"222":{nom:"Salvador",capitale:"San Salvador",pop:"6,5 M",superficie:"21 041 km²",drapeau:"🇸🇻"},
"231":{nom:"Éthiopie",capitale:"Addis-Abeba",pop:"120 M",superficie:"1 104 300 km²",drapeau:"🇪🇹"},
"232":{nom:"Érythrée",capitale:"Asmara",pop:"3,5 M",superficie:"117 600 km²",drapeau:"🇪🇷"},
"233":{nom:"Estonie",capitale:"Tallinn",pop:"1,3 M",superficie:"45 227 km²",drapeau:"🇪🇪"},
"242":{nom:"Fidji",capitale:"Suva",pop:"0,9 M",superficie:"18 274 km²",drapeau:"🇫🇯"},
"246":{nom:"Finlande",capitale:"Helsinki",pop:"5,5 M",superficie:"338 455 km²",drapeau:"🇫🇮"},
"250":{nom:"France",capitale:"Paris",pop:"68,4 M",superficie:"551 695 km²",drapeau:"🇫🇷"},
"262":{nom:"Djibouti",capitale:"Djibouti",pop:"1,0 M",superficie:"23 200 km²",drapeau:"🇩🇯"},
"266":{nom:"Gabon",capitale:"Libreville",pop:"2,3 M",superficie:"267 668 km²",drapeau:"🇬🇦"},
"268":{nom:"Géorgie",capitale:"Tbilissi",pop:"3,7 M",superficie:"69 700 km²",drapeau:"🇬🇪"},
"270":{nom:"Gambie",capitale:"Banjul",pop:"2,6 M",superficie:"11 295 km²",drapeau:"🇬🇲"},
"275":{nom:"Palestine",capitale:"Ramallah",pop:"5,2 M",superficie:"6 020 km²",drapeau:"🇵🇸"},
"276":{nom:"Allemagne",capitale:"Berlin",pop:"83,8 M",superficie:"357 114 km²",drapeau:"🇩🇪"},
"288":{nom:"Ghana",capitale:"Accra",pop:"32,8 M",superficie:"238 533 km²",drapeau:"🇬🇭"},
"300":{nom:"Grèce",capitale:"Athènes",pop:"10,7 M",superficie:"131 957 km²",drapeau:"🇬🇷"},
"304":{nom:"Groenland",capitale:"Nuuk",pop:"0,06 M",superficie:"836 300 km²",drapeau:"🇬🇱"},
"320":{nom:"Guatemala",capitale:"Guatemala City",pop:"17,6 M",superficie:"108 889 km²",drapeau:"🇬🇹"},
"324":{nom:"Guinée",capitale:"Conakry",pop:"13,5 M",superficie:"245 857 km²",drapeau:"🇬🇳"},
"328":{nom:"Guyana",capitale:"Georgetown",pop:"0,8 M",superficie:"214 969 km²",drapeau:"🇬🇾"},
"332":{nom:"Haïti",capitale:"Port-au-Prince",pop:"11,4 M",superficie:"27 750 km²",drapeau:"🇭🇹"},
"340":{nom:"Honduras",capitale:"Tegucigalpa",pop:"10,3 M",superficie:"112 492 km²",drapeau:"🇭🇳"},
"348":{nom:"Hongrie",capitale:"Budapest",pop:"9,7 M",superficie:"93 028 km²",drapeau:"🇭🇺"},
"352":{nom:"Islande",capitale:"Reykjavik",pop:"0,4 M",superficie:"103 000 km²",drapeau:"🇮🇸"},
"356":{nom:"Inde",capitale:"New Delhi",pop:"1 407 M",superficie:"3 287 263 km²",drapeau:"🇮🇳"},
"360":{nom:"Indonésie",capitale:"Jakarta",pop:"275,5 M",superficie:"1 904 569 km²",drapeau:"🇮🇩"},
"364":{nom:"Iran",capitale:"Téhéran",pop:"86,8 M",superficie:"1 648 195 km²",drapeau:"🇮🇷"},
"368":{nom:"Irak",capitale:"Bagdad",pop:"40,8 M",superficie:"438 317 km²",drapeau:"🇮🇶"},
"372":{nom:"Irlande",capitale:"Dublin",pop:"5 M",superficie:"70 273 km²",drapeau:"🇮🇪"},
"376":{nom:"Israël",capitale:"Jérusalem",pop:"9,2 M",superficie:"20 770 km²",drapeau:"🇮🇱"},
"380":{nom:"Italie",capitale:"Rome",pop:"59,6 M",superficie:"301 340 km²",drapeau:"🇮🇹"},
"384":{nom:"Côte d'Ivoire",capitale:"Yamoussoukro",pop:"27,5 M",superficie:"322 463 km²",drapeau:"🇨🇮"},
"388":{nom:"Jamaïque",capitale:"Kingston",pop:"3 M",superficie:"10 990 km²",drapeau:"🇯🇲"},
"392":{nom:"Japon",capitale:"Tokyo",pop:"125,7 M",superficie:"377 975 km²",drapeau:"🇯🇵"},
"398":{nom:"Kazakhstan",capitale:"Astana",pop:"19,2 M",superficie:"2 724 900 km²",drapeau:"🇰🇿"},
"400":{nom:"Jordanie",capitale:"Amman",pop:"10,3 M",superficie:"89 342 km²",drapeau:"🇯🇴"},
"404":{nom:"Kenya",capitale:"Nairobi",pop:"54,0 M",superficie:"580 367 km²",drapeau:"🇰🇪"},
"408":{nom:"Corée du Nord",capitale:"Pyongyang",pop:"25,9 M",superficie:"120 538 km²",drapeau:"🇰🇵"},
"410":{nom:"Corée du Sud",capitale:"Séoul",pop:"51,7 M",superficie:"100 210 km²",drapeau:"🇰🇷"},
"414":{nom:"Koweït",capitale:"Koweït City",pop:"4,3 M",superficie:"17 818 km²",drapeau:"🇰🇼"},
"417":{nom:"Kirghizstan",capitale:"Bichkek",pop:"6,7 M",superficie:"199 951 km²",drapeau:"🇰🇬"},
"418":{nom:"Laos",capitale:"Vientiane",pop:"7,4 M",superficie:"236 800 km²",drapeau:"🇱🇦"},
"422":{nom:"Liban",capitale:"Beyrouth",pop:"6,8 M",superficie:"10 452 km²",drapeau:"🇱🇧"},
"426":{nom:"Lesotho",capitale:"Maseru",pop:"2,2 M",superficie:"30 355 km²",drapeau:"🇱🇸"},
"428":{nom:"Lettonie",capitale:"Riga",pop:"1,9 M",superficie:"64 589 km²",drapeau:"🇱🇻"},
"430":{nom:"Liberia",capitale:"Monrovia",pop:"5,2 M",superficie:"111 369 km²",drapeau:"🇱🇷"},
"434":{nom:"Libye",capitale:"Tripoli",pop:"7,0 M",superficie:"1 759 540 km²",drapeau:"🇱🇾"},
"440":{nom:"Lituanie",capitale:"Vilnius",pop:"2,8 M",superficie:"65 300 km²",drapeau:"🇱🇹"},
"442":{nom:"Luxembourg",capitale:"Luxembourg",pop:"0,7 M",superficie:"2 586 km²",drapeau:"🇱🇺"},
"450":{nom:"Madagascar",capitale:"Antananarivo",pop:"28,9 M",superficie:"587 041 km²",drapeau:"🇲🇬"},
"454":{nom:"Malawi",capitale:"Lilongwe",pop:"20,2 M",superficie:"118 484 km²",drapeau:"🇲🇼"},
"458":{nom:"Malaisie",capitale:"Kuala Lumpur",pop:"33,6 M",superficie:"329 847 km²",drapeau:"🇲🇾"},
"466":{nom:"Mali",capitale:"Bamako",pop:"22,4 M",superficie:"1 240 192 km²",drapeau:"🇲🇱"},
"474":{nom:"Martinique",capitale:"Fort-de-France",pop:"0,37 M",superficie:"1 128 km²",drapeau:"🇲🇶"},
"478":{nom:"Mauritanie",capitale:"Nouakchott",pop:"4,6 M",superficie:"1 030 700 km²",drapeau:"🇲🇷"},
"484":{nom:"Mexique",capitale:"Mexico City",pop:"130,3 M",superficie:"1 964 375 km²",drapeau:"🇲🇽"},
"496":{nom:"Mongolie",capitale:"Oulan-Bator",pop:"3,3 M",superficie:"1 564 116 km²",drapeau:"🇲🇳"},
"498":{nom:"Moldavie",capitale:"Chișinău",pop:"2,6 M",superficie:"33 846 km²",drapeau:"🇲🇩"},
"504":{nom:"Maroc",capitale:"Rabat",pop:"37,5 M",superficie:"446 550 km²",drapeau:"🇲🇦"},
"508":{nom:"Mozambique",capitale:"Maputo",pop:"32,8 M",superficie:"801 590 km²",drapeau:"🇲🇿"},
"512":{nom:"Oman",capitale:"Mascate",pop:"4,5 M",superficie:"309 500 km²",drapeau:"🇴🇲"},
"516":{nom:"Namibie",capitale:"Windhoek",pop:"2,6 M",superficie:"824 292 km²",drapeau:"🇳🇦"},
"524":{nom:"Népal",capitale:"Katmandou",pop:"29,6 M",superficie:"147 181 km²",drapeau:"🇳🇵"},
"528":{nom:"Pays-Bas",capitale:"Amsterdam",pop:"17,6 M",superficie:"41 543 km²",drapeau:"🇳🇱"},
"540":{nom:"Nouvelle-Calédonie",capitale:"Nouméa",pop:"0,27 M",superficie:"18 575 km²",drapeau:"🇳🇨"},
"548":{nom:"Vanuatu",capitale:"Port-Vila",pop:"0,3 M",superficie:"12 189 km²",drapeau:"🇻🇺"},
"554":{nom:"Nouvelle-Zélande",capitale:"Wellington",pop:"5,1 M",superficie:"268 021 km²",drapeau:"🇳🇿"},
"558":{nom:"Nicaragua",capitale:"Managua",pop:"6,9 M",superficie:"130 373 km²",drapeau:"🇳🇮"},
"562":{nom:"Niger",capitale:"Niamey",pop:"25,1 M",superficie:"1 267 000 km²",drapeau:"🇳🇪"},
"566":{nom:"Nigéria",capitale:"Abuja",pop:"213,4 M",superficie:"923 768 km²",drapeau:"🇳🇬"},
"578":{nom:"Norvège",capitale:"Oslo",pop:"5,4 M",superficie:"385 207 km²",drapeau:"🇳🇴"},
"586":{nom:"Pakistan",capitale:"Islamabad",pop:"220,9 M",superficie:"881 913 km²",drapeau:"🇵🇰"},
"591":{nom:"Panama",capitale:"Panama City",pop:"4,4 M",superficie:"75 517 km²",drapeau:"🇵🇦"},
"598":{nom:"Papouasie-Nouvelle-Guinée",capitale:"Port Moresby",pop:"10,3 M",superficie:"462 840 km²",drapeau:"🇵🇬"},
"600":{nom:"Paraguay",capitale:"Asunción",pop:"7,4 M",superficie:"406 752 km²",drapeau:"🇵🇾"},
"604":{nom:"Pérou",capitale:"Lima",pop:"32,9 M",superficie:"1 285 216 km²",drapeau:"🇵🇪"},
"608":{nom:"Philippines",capitale:"Manille",pop:"110,8 M",superficie:"300 000 km²",drapeau:"🇵🇭"},
"616":{nom:"Pologne",capitale:"Varsovie",pop:"37,8 M",superficie:"312 685 km²",drapeau:"🇵🇱"},
"620":{nom:"Portugal",capitale:"Lisbonne",pop:"10,3 M",superficie:"92 212 km²",drapeau:"🇵🇹"},
"634":{nom:"Qatar",capitale:"Doha",pop:"2,9 M",superficie:"11 586 km²",drapeau:"🇶🇦"},
"642":{nom:"Roumanie",capitale:"Bucarest",pop:"19,2 M",superficie:"238 397 km²",drapeau:"🇷🇴"},
"643":{nom:"Russie",capitale:"Moscou",pop:"143,4 M",superficie:"17 098 242 km²",drapeau:"🇷🇺"},
"646":{nom:"Rwanda",capitale:"Kigali",pop:"13,5 M",superficie:"26 338 km²",drapeau:"🇷🇼"},
"682":{nom:"Arabie Saoudite",capitale:"Riyad",pop:"35,3 M",superficie:"2 149 690 km²",drapeau:"🇸🇦"},
"686":{nom:"Sénégal",capitale:"Dakar",pop:"17,2 M",superficie:"196 722 km²",drapeau:"🇸🇳"},
"688":{nom:"Serbie",capitale:"Belgrade",pop:"6,9 M",superficie:"77 474 km²",drapeau:"🇷🇸"},
"694":{nom:"Sierra Leone",capitale:"Freetown",pop:"8,2 M",superficie:"71 740 km²",drapeau:"🇸🇱"},
"703":{nom:"Slovaquie",capitale:"Bratislava",pop:"5,4 M",superficie:"49 035 km²",drapeau:"🇸🇰"},
"704":{nom:"Viêt Nam",capitale:"Hanoï",pop:"97,3 M",superficie:"331 212 km²",drapeau:"🇻🇳"},
"705":{nom:"Slovénie",capitale:"Ljubljana",pop:"2,1 M",superficie:"20 273 km²",drapeau:"🇸🇮"},
"706":{nom:"Somalie",capitale:"Mogadiscio",pop:"17,1 M",superficie:"637 657 km²",drapeau:"🇸🇴"},
"710":{nom:"Afrique du Sud",capitale:"Pretoria",pop:"60 M",superficie:"1 219 090 km²",drapeau:"🇿🇦"},
"716":{nom:"Zimbabwe",capitale:"Harare",pop:"15,0 M",superficie:"390 757 km²",drapeau:"🇿🇼"},
"724":{nom:"Espagne",capitale:"Madrid",pop:"47,4 M",superficie:"505 990 km²",drapeau:"🇪🇸"},
"728":{nom:"Soudan du Sud",capitale:"Djouba",pop:"10,9 M",superficie:"619 745 km²",drapeau:"🇸🇸"},
"729":{nom:"Soudan",capitale:"Khartoum",pop:"45,7 M",superficie:"1 861 484 km²",drapeau:"🇸🇩"},
"732":{nom:"Sahara occidental",capitale:"Laâyoune",pop:"0,6 M",superficie:"266 000 km²",drapeau:"🇪🇭"},
"740":{nom:"Suriname",capitale:"Paramaribo",pop:"0,6 M",superficie:"163 820 km²",drapeau:"🇸🇷"},
"752":{nom:"Suède",capitale:"Stockholm",pop:"10,4 M",superficie:"450 295 km²",drapeau:"🇸🇪"},
"756":{nom:"Suisse",capitale:"Berne",pop:"8,7 M",superficie:"41 285 km²",drapeau:"🇨🇭"},
"760":{nom:"Syrie",capitale:"Damas",pop:"21,3 M",superficie:"185 180 km²",drapeau:"🇸🇾"},
"762":{nom:"Tadjikistan",capitale:"Douchanbé",pop:"9,9 M",superficie:"143 100 km²",drapeau:"🇹🇯"},
"764":{nom:"Thaïlande",capitale:"Bangkok",pop:"71,6 M",superficie:"513 120 km²",drapeau:"🇹🇭"},
"768":{nom:"Togo",capitale:"Lomé",pop:"8,5 M",superficie:"56 785 km²",drapeau:"🇹🇬"},
"780":{nom:"Trinité-et-Tobago",capitale:"Port of Spain",pop:"1,4 M",superficie:"5 128 km²",drapeau:"🇹🇹"},
"784":{nom:"Émirats arabes unis",capitale:"Abou Dabi",pop:"9,9 M",superficie:"83 600 km²",drapeau:"🇦🇪"},
"788":{nom:"Tunisie",capitale:"Tunis",pop:"11,8 M",superficie:"163 610 km²",drapeau:"🇹🇳"},
"792":{nom:"Turquie",capitale:"Ankara",pop:"84,7 M",superficie:"783 356 km²",drapeau:"🇹🇷"},
"795":{nom:"Turkménistan",capitale:"Achgabat",pop:"6,1 M",superficie:"488 100 km²",drapeau:"🇹🇲"},
"800":{nom:"Ouganda",capitale:"Kampala",pop:"47,1 M",superficie:"241 038 km²",drapeau:"🇺🇬"},
"804":{nom:"Ukraine",capitale:"Kyiv",pop:"41,4 M",superficie:"603 550 km²",drapeau:"🇺🇦"},
"807":{nom:"Macédoine du Nord",capitale:"Skopje",pop:"2,1 M",superficie:"25 713 km²",drapeau:"🇲🇰"},
"818":{nom:"Égypte",capitale:"Le Caire",pop:"102,3 M",superficie:"1 001 450 km²",drapeau:"🇪🇬"},
"826":{nom:"Royaume-Uni",capitale:"Londres",pop:"67,1 M",superficie:"242 495 km²",drapeau:"🇬🇧"},
"834":{nom:"Tanzanie",capitale:"Dodoma",pop:"63,3 M",superficie:"945 087 km²",drapeau:"🇹🇿"},
"840":{nom:"États-Unis",capitale:"Washington D.C.",pop:"332,8 M",superficie:"9 833 517 km²",drapeau:"🇺🇸"},
"854":{nom:"Burkina Faso",capitale:"Ouagadougou",pop:"22,1 M",superficie:"274 200 km²",drapeau:"🇧🇫"},
"858":{nom:"Uruguay",capitale:"Montevideo",pop:"3,5 M",superficie:"176 215 km²",drapeau:"🇺🇾"},
"860":{nom:"Ouzbékistan",capitale:"Tachkent",pop:"35,3 M",superficie:"448 978 km²",drapeau:"🇺🇿"},
"862":{nom:"Venezuela",capitale:"Caracas",pop:"28,7 M",superficie:"912 050 km²",drapeau:"🇻🇪"},
"882":{nom:"Samoa",capitale:"Apia",pop:"0,2 M",superficie:"2 831 km²",drapeau:"🇼🇸"},
"887":{nom:"Yémen",capitale:"Sanaa",pop:"33,7 M",superficie:"527 968 km²",drapeau:"🇾🇪"},
"894":{nom:"Zambie",capitale:"Lusaka",pop:"19,5 M",superficie:"752 618 km²",drapeau:"🇿🇲"},
};

/* city name resolver */
function resolveCityName(city,year){
  if(city.noms){const m=city.noms.find(n=>year>=n.debut&&year<n.fin);if(m)return{nom:m.nom,local:m.local||null};}
  return{nom:city.nom_actuel||"?",local:null};
}

const LITERARY_FORMS={
  ecritures:{
    label:"Écritures",
    desc:"Premières attestations des grands systèmes d'écriture : du cunéiforme sumérien (c. 3300 av. J.-C.) aux alphabets créés au XIXe–XXe siècles.",
    timeline:[
      {year:-3400,events:[
        {countryId:"364",title:"Écriture proto-élamite — Suse",detail:"Plus anciens signes d'écriture attestés (c. 3400–3300 av. J.-C.). Pictogrammes liés à la comptabilité. Non déchiffrée.",city:{lat:32.19,lon:48.25,nom_actuel:"Shush (Suse)",noms:[{nom:"Suse",local:"𒀭𒋢𒊺",debut:-9999,fin:9999}]}},
        {countryId:"368",title:"Cunéiforme proto-sumérien — Uruk",detail:"Tablettes d'Uruk : premiers pictogrammes sumériens (c. 3300 av. J.-C.). Ancêtre de tous les systèmes cunéiformes.",city:{lat:31.32,lon:45.62,nom_actuel:"Warka",noms:[{nom:"Uruk",local:"𒀕𒆳",debut:-9999,fin:300}]}}
      ]},
      {year:-3200,events:[
        {countryId:"818",title:"Hiéroglyphes égyptiens — Abydos",detail:"Premières inscriptions hiéroglyphiques (tombe U-j, c. 3200 av. J.-C.). Déchiffré par Champollion en 1822.",city:{lat:26.18,lon:31.92,nom_actuel:"Abydos",noms:[{nom:"Abdju / Abydos",local:"𓇋𓃀𓆓𓅱",debut:-9999,fin:9999}]}}
      ]},
      {year:-2600,events:[
        {countryId:"586",title:"Écriture de l'Indus — Mohenjo-daro",detail:"~400 signes attestés (c. 2600–1900 av. J.-C.). Non déchiffrée.",city:{lat:27.33,lon:68.14,nom_actuel:"Mohenjo-daro"}}
      ]},
      {year:-1800,events:[
        {countryId:"818",title:"Écriture protosinaïtique — Sinaï",detail:"Premier alphabet consonantique : ~30 signes dérivés de hiéroglyphes. Ancêtre de tous les alphabets phéniciens, grecs et latins.",city:{lat:29.00,lon:33.50,nom_actuel:"Serabit el-Khadim (Sinaï)"}}
      ]},
      {year:-1600,events:[
        {countryId:"156",title:"Écriture oraculaire sur os (jiǎgǔwén) — Anyang",detail:"Premiers caractères chinois (~1600–1046 av. J.-C., Shang). Ancêtre direct de l'écriture chinoise moderne.",city:{lat:36.13,lon:114.33,nom_actuel:"Anyang"}}
      ]},
      {year:-1500,events:[
        {countryId:"300",title:"Linéaire B — Mycènes",detail:"Syllabaire mycénien déchiffré en 1952 par Michael Ventris. Disparu c. 1200 av. J.-C.",city:{lat:37.73,lon:22.76,nom_actuel:"Mycènes",noms:[{nom:"Mykḗnai",local:"Μυκῆναι",debut:-9999,fin:9999}]}}
      ]},
      {year:-1400,events:[
        {countryId:"760",title:"Alphabet ougaritique — Ougarit",detail:"Alphabet cunéiforme de 30 signes (c. 1400–1185 av. J.-C.).",city:{lat:35.60,lon:35.78,nom_actuel:"Ras Shamra",noms:[{nom:"Ougarit",local:"𒌑𒂵𒊑𒌅",debut:-9999,fin:-1185}]}}
      ]},
      {year:-1050,events:[
        {countryId:"422",title:"Alphabet phénicien — Byblos",detail:"22 consonnes. Ancêtre des alphabets hébreu, araméen, arabe, grec et latin.",city:{lat:34.12,lon:35.65,nom_actuel:"Jbeil (Byblos)",noms:[{nom:"Byblos / Gubla",local:"𐤂𐤁𐤋",debut:-9999,fin:9999}]}}
      ]},
      {year:-800,events:[
        {countryId:"300",title:"Alphabet grec archaïque",detail:"Adaptation du phénicien avec ajout de voyelles. Ancêtre du latin, du cyrillique et de l'arménien.",city:{lat:37.97,lon:23.73,nom_actuel:"Athènes",noms:[{nom:"Athènes",local:"Ἀθῆναι",debut:-9999,fin:9999}]}}
      ]},
      {year:-600,events:[
        {countryId:"380",title:"Alphabet latin — Rome",detail:"Dérivé du grec via l'étrusque. Utilisé par ~70 % de la population mondiale.",city:{lat:41.90,lon:12.50,nom_actuel:"Rome"}},
        {countryId:"356",title:"Brahmi — Inde",detail:"C. 500–300 av. J.-C. Ancêtre des écritures d'Asie du Sud et du Sud-Est.",city:{lat:25.32,lon:82.97,nom_actuel:"Varanasi"}}
      ]},
      {year:-250,events:[
        {countryId:"729",title:"Écriture méroïtique — Royaume de Méroé",detail:"Alphabet de 23 signes dérivé des hiéroglyphes. En usage c. 300 av. J.-C.–400 apr. J.-C.",city:{lat:16.94,lon:33.74,nom_actuel:"Méroé (Soudan)"}}
      ]},
      {year:100,events:[
        {countryId:"578",title:"Runes germaniques (Futhark ancien) — Scandinavie",detail:"24 signes. Scandinavie et Europe du Nord (c. 150–700 apr. J.-C.). Usages rituels, commémoratifs, épigraphiques. Pas de localisation ponctuelle : usage régional étendu."}
      ]},
      {year:400,events:[
        {countryId:"051",title:"Alphabet arménien — Machtots",detail:"Créé c. 405 apr. J.-C. par Mesrop Machtots. 38 lettres. Lié à la traduction de la Bible.",city:{lat:40.18,lon:44.51,nom_actuel:"Erevan",noms:[{nom:"Vałaršapat",local:"Վաղարշապատ",debut:-9999,fin:1900},{nom:"Erevan",local:"Երևան",debut:1900,fin:9999}]}},
        {countryId:"268",title:"Alphabet géorgien (asomtavruli)",detail:"C. 430 apr. J.-C. Lié à la traduction des Évangiles. Unique au monde.",city:{lat:41.69,lon:44.83,nom_actuel:"Tbilissi",noms:[{nom:"Mtskheta",local:"მცხეთა",debut:-9999,fin:500},{nom:"Tbilissi",local:"თბილისი",debut:500,fin:9999}]}}
      ]},
      {year:430,events:[
        {countryId:"231",title:"Écriture éthiopienne — Ge'ez (Fidel)",detail:"Abugida de 231 syllabes. Encore utilisée pour l'amharique, le tigrigna et le guèze liturgique.",city:{lat:14.33,lon:38.93,nom_actuel:"Aksoum"}}
      ]},
      {year:600,events:[
        {countryId:"682",title:"Écriture arabe — Arabie",detail:"Dérivée du nabatéen. 28 lettres. Liée à la révélation coranique. De l'Espagne à l'Indonésie.",city:{lat:21.42,lon:39.82,nom_actuel:"La Mecque"}}
      ]},
      {year:650,events:[
        {countryId:"156",title:"Écriture tibétaine (Ucen)",detail:"Créée sous Songtsen Gampo. Liée à la traduction du canon bouddhiste.",city:{lat:29.65,lon:91.12,nom_actuel:"Lhassa"}}
      ]},
      {year:700,events:[
        {countryId:"392",title:"Man'yōgana → Kana — Japon",detail:"Le hiragana et le katakana dérivent du man'yōgana (VIIe s.). Système toujours en usage.",city:{lat:34.69,lon:135.50,nom_actuel:"Nara"}}
      ]},
      {year:863,events:[
        {countryId:"100",title:"Alphabet cyrillique — Cyrille et Méthode",detail:"Créé ~863 pour noter le vieux slave liturgique. Utilisé par ~250 M de personnes.",city:{lat:41.99,lon:21.43,nom_actuel:"Ohrid (Macédoine)"}}
      ]},
      {year:1000,events:[
        {countryId:"484",title:"Écriture maya — apogée classique",detail:"~800 glyphes logosyllabiques. Déchiffrement progressif depuis les années 1950–1980.",city:{lat:20.68,lon:-88.57,nom_actuel:"Chichén Itzá"}}
      ]},
      {year:1443,events:[
        {countryId:"410",title:"Hangul — roi Sejong le Grand",detail:"Promulgué en 1446. Alphabet de 24 lettres. Auteur et date connus avec certitude.",city:{lat:37.58,lon:126.98,nom_actuel:"Séoul",noms:[{nom:"Hanyang",local:"漢陽",debut:-9999,fin:1910},{nom:"Séoul",local:"서울",debut:1910,fin:9999}]}}
      ]},
      {year:1821,events:[
        {countryId:"840",title:"Syllabaire cherokee — Séquoyah",detail:"85 syllabes. Adoption quasi totale de la nation cherokee en moins de 5 ans.",city:{lat:35.46,lon:-84.57,nom_actuel:"Territoire cherokee"}}
      ]},
      {year:1949,events:[
        {countryId:"324",title:"Alphabet N'Ko — Solomana Kante",detail:"Créé en 1949 pour les langues mandé. Utilisé en alphabétisation et édition religieuse.",city:{lat:10.39,lon:-9.53,nom_actuel:"Kankan (Guinée)"}}
      ]}
    ]
  },
  versLibre:{
    label:"Vers libre",
    desc:"Triple histoire du vers libre : pseudotraductions romantiques, vers libre littéraire mondial (Whitman, Maïakovski, modernismes), et vers libre en traduction savante. Les trois fils se nouent en 1886.",
    timeline:[
      {year:1827,events:[{countryId:"250",title:"La Guzla — Prosper Mérimée (pseudotraduction)",detail:"Poèmes illyriens fictifs sans rime ni mètre régulier. Mystifie Goethe et Pouchkine. La pseudotraduction comme vecteur clandestin de formes prosodiques nouvelles (Lombez).",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1831,events:[{countryId:"250",title:"Nerval : pseudotraductions de l'allemand",detail:"Poèmes attribués à Jean-Paul Richter dans Le Mercure de France — aucun original allemand retrouvé.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1856,events:[{countryId:"840",title:"Leaves of Grass — Walt Whitman",detail:"Fondation du vers libre moderne anglophone. Long verset influencé par la Bible hébraïque et les épopées homériques.",city:{lat:40.71,lon:-73.99,nom_actuel:"New York"}}]},
      {year:1866,events:[{countryId:"250",title:"Iliade / Odyssée — Leconte de Lisle (traduction)",detail:"Prose poétique rythmée refusant l'alexandrin. Premier grand refus du mètre classique français pour rendre Homère.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1886,events:[
        {countryId:"250",title:"Brins d'herbes — Laforgue traduit Whitman (La Vogue)",detail:"Traductions de Whitman dans La Vogue (juin 1886) ; la semaine suivante : premiers vers libres personnels. Même numéro : les Illuminations de Rimbaud.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}},
        {countryId:"056",title:"Émile Verhaeren — Les Soirs / Les Débâcles",detail:"Introduction progressive du vers libre, sous forme de modules de vers pairs. Verhaeren devient par la suite un poète de renommée mondiale.",city:{lat:50.85,lon:4.35,nom_actuel:"Bruxelles"}}
      ]},
      {year:1907,events:[{countryId:"250",title:"Première traduction française de Gilgamesh — Dhorme",detail:"Vers libre savant né de la contrainte philologique : les parallélismes akkadiens sont intraduisibles en mètre classique.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1912,events:[
        {countryId:"826",title:"Imagisme — Ezra Pound, H.D., Amy Lowell",detail:"Image directe, économie de mot, liberté rythmique. Pound lie le vers libre à la traduction de la poésie chinoise (Cathay, 1915).",city:{lat:51.51,lon:-0.13,nom_actuel:"Londres"}},
        {countryId:"643",title:"Maïakovski — vers-escalier",detail:"Le vers-escalier (лесенка) : chaque marche est une unité rythmique accentuelle. Rupture avec la métrique syllabo-tonique russe.",city:{lat:55.75,lon:37.62,nom_actuel:"Moscou"}}
      ]},
      {year:1922,events:[
        {countryId:"826",title:"The Waste Land — T. S. Eliot",detail:"Synthèse du vers libre moderniste. Polyphonie de citations, de langues et de registres. Prix Nobel 1948.",city:{lat:51.51,lon:-0.13,nom_actuel:"Londres"}},
        {countryId:"076",title:"Semaine d'Art Moderne — São Paulo",detail:"Mário de Andrade : Paulicéia Desvairada. Oswald de Andrade : vers syncopé cannibale. Rupture avec le Parnasse.",city:{lat:-23.55,lon:-46.63,nom_actuel:"São Paulo"}},
        {countryId:"156",title:"Bing Xin (冰心) — Étoiles et Printemps",detail:"Premiers recueils de vers libres inspirés de Tagore et Whitman. Première grande poétesse chinoise moderne.",city:{lat:39.91,lon:116.39,nom_actuel:"Pékin"}}
      ]},
      {year:1930,events:[
        {countryId:"643",title:"Maïakovski — À pleine voix",detail:"Dernier grand poème. Programme : le vers-escalier comme oralisation visible du discours. Suicide en avril 1930.",city:{lat:55.75,lon:37.62,nom_actuel:"Moscou"}},
        {countryId:"076",title:"Libertinagem — Manuel Bandeira",detail:"Recueil emblématique du vers libre brésilien. 'Vou-me embora pra Pasárgada'.",city:{lat:-22.91,lon:-43.17,nom_actuel:"Rio de Janeiro"}}
      ]},
      {year:1933,events:[{countryId:"156",title:"La Rivière de Dayan — Ai Qing (艾青)",detail:"Écrit en prison. Vers libre épique influencé par Whitman et Maïakovski. Figure centrale de la poésie chinoise du XXe s.",city:{lat:30.26,lon:120.21,nom_actuel:"Hangzhou"}}]},
      {year:1939,events:[{countryId:"604",title:"Poemas humanos — César Vallejo",detail:"Écrits à Paris, publiés posthumément. Vers libre espagnol d'une étrangeté syntaxique radicale.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1947,events:[{countryId:"474",title:"Cahier d'un retour au pays natal — Aimé Césaire",detail:"Long verset surréaliste et africain. Édition définitive avec préface de Breton.",city:{lat:14.62,lon:-61.02,nom_actuel:"Fort-de-France"}}]},
      {year:1955,events:[
        {countryId:"250",title:"Odyssée — Philippe Jaccottet (traduction)",detail:"Vers libres de longueur variable. Choix de ne pas imposer l'alexandrin à Homère.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}},
        {countryId:"840",title:"Howl — Allen Ginsberg",detail:"Long verset whitmanien scandé à la Gallery Six, San Francisco. Acte fondateur de la Beat Generation.",city:{lat:37.77,lon:-122.42,nom_actuel:"San Francisco"}}
      ]},
      {year:1962,events:[{countryId:"250",title:"Shakespeare — Yves Bonnefoy (traduction)",detail:"Hamlet (1962), Jules César, Lear, Macbeth. Vers libres refusant de mimer le pentamètre par l'alexandrin.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1970,events:[{countryId:"250",title:"Les cinq rouleaux — Henri Meschonnic (traduction)",detail:"Bible en vers libres rythmés selon l'oralité hébraïque. Le rythme comme organisation du discours.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:2017,events:[{countryId:"250",title:"Métamorphoses — Marie Cosnay (traduction)",detail:"12 000 vers d'Ovide en vers libres d'une étrangeté assumée. Prix Nelly-Sachs 2018.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]}
    ]
  },
  haiku:{
    label:"Haïku",
    desc:"Poème bref issu du hokku d'ouverture du renga. Né au Japon au XVIIe siècle, codifié par Bashō, réformé par Shiki, le haïku circule dans le monde entier au XXe siècle.",
    timeline:[
      {year:1672,events:[{countryId:"392",title:"Kai Ōi — Matsuo Bashō",detail:"Bashō élève le hokku au rang de poème autonome. Son école fixe : kigo, kireji, yugen, sabi.",city:{lat:35.00,lon:135.77,nom_actuel:"Kyoto"}}]},
      {year:1689,events:[{countryId:"392",title:"Oku no hosomichi — Matsuo Bashō",detail:"Chef-d'œuvre du haibun. 'Le vieux bassin aux grenouilles' (1686) : le haïku le plus commenté de l'histoire.",city:{lat:35.69,lon:139.69,nom_actuel:"Tokyo",noms:[{nom:"Edo",local:"江戸",debut:-9999,fin:1868},{nom:"Tokyo",local:"東京",debut:1868,fin:9999}]}}]},
      {year:1750,events:[{countryId:"392",title:"Yosa Buson — haïku pictural",detail:"Buson renouvelle le genre après Bashō par une plasticité visuelle raffinée.",city:{lat:34.69,lon:135.50,nom_actuel:"Osaka"}}]},
      {year:1810,events:[{countryId:"392",title:"Kobayashi Issa — haïku de la compassion",detail:"Tendresse douloureuse pour les êtres faibles. Plus de 20 000 haïkus composés.",city:{lat:36.69,lon:138.18,nom_actuel:"Shinano (Nagano)"}}]},
      {year:1897,events:[{countryId:"392",title:"Masaoka Shiki — réforme et revue Hototogisu",detail:"Shiki forge le terme 'haïku' et prône le shasei (croquis sur le vif). Sa réforme engendre deux courants contradictoires.",city:{lat:35.69,lon:139.69,nom_actuel:"Tokyo"}}]},
      {year:1905,events:[{countryId:"250",title:"Paul-Louis Couchoud — premiers haïkus en français",detail:"Au fil de l'eau (1905), premier recueil de haïkus en français. Pose le problème de la syllabe française.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1910,events:[{countryId:"392",title:"Kawahigashi Hekigotō — haïku en vers libre",detail:"Abandon du 5-7-5 et du kigo (jiyuritsu haiku). Radicalisation moderniste.",city:{lat:35.69,lon:139.69,nom_actuel:"Tokyo"}}]},
      {year:1913,events:[{countryId:"840",title:"Ezra Pound — haïku imagiste",detail:"'In a Station of the Metro'. Image directe sans explication. L'Imagisme codifie l'influence du haïku.",city:{lat:51.51,lon:-0.13,nom_actuel:"Londres"}}]},
      {year:1919,events:[{countryId:"484",title:"José Juan Tablada — haïku hispanique",detail:"Un día (1919), premier recueil de haïkus en espagnol. Influence sur Octavio Paz.",city:{lat:19.43,lon:-99.13,nom_actuel:"Mexico"}}]},
      {year:1955,events:[{countryId:"840",title:"Jack Kerouac — haïku Beat",detail:"'Haiku = not 17 syllables but 3 short lines'. Intégration du zen, du jazz et de la spontanéité beatnik.",city:{lat:37.77,lon:-122.42,nom_actuel:"San Francisco"}}]},
      {year:1968,events:[{countryId:"840",title:"Haiku Society of America — diffusion mondiale",detail:"Fondée en 1968. Le haïku anglophone se stabilise et rayonne dans le monde entier.",city:{lat:40.71,lon:-73.99,nom_actuel:"New York"}}]},
      {year:2000,events:[{countryId:"250",title:"Haïku francophone contemporain",detail:"La revue Haïku (France, 2003). Question centrale : quel équivalent au 5-7-5 en français ?",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]}
    ]
  },
  romanPolicier:{
    label:"Roman policier",
    desc:"Récit centré sur l'élucidation d'un crime, né aux États-Unis au milieu du XIXe siècle.",
    timeline:[
      {year:1841,events:[{countryId:"840",title:"Double assassinat dans la rue Morgue — E. A. Poe",detail:"Première nouvelle policière. Poe invente le détective raisonneur Auguste Dupin.",city:{lat:39.95,lon:-75.16,nom_actuel:"Philadelphie"}}]},
      {year:1866,events:[{countryId:"250",title:"L'Affaire Lerouge — Émile Gaboriau",detail:"Premier roman policier français. Gaboriau crée Monsieur Lecoq.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1887,events:[{countryId:"826",title:"A Study in Scarlet — Arthur Conan Doyle",detail:"Première apparition de Sherlock Holmes et du Dr Watson.",city:{lat:51.51,lon:-0.13,nom_actuel:"Londres"}}]},
      {year:1920,events:[{countryId:"826",title:"La Mystérieuse Affaire de Styles — Agatha Christie",detail:"Premier roman d'Hercule Poirot. Christie deviendra la reine du whodunit.",city:{lat:51.51,lon:-0.13,nom_actuel:"Londres"}}]},
      {year:1929,events:[{countryId:"056",title:"Pietr-le-Letton — Georges Simenon",detail:"Premier roman du commissaire Maigret. Simenon ancre le polar dans le quotidien.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1939,events:[{countryId:"840",title:"The Big Sleep — Raymond Chandler",detail:"Chef-d'œuvre du roman noir hard-boiled. Philip Marlowe face à la corruption de Los Angeles.",city:{lat:34.05,lon:-118.24,nom_actuel:"Los Angeles"}}]},
      {year:1965,events:[{countryId:"752",title:"Roseanna — Sjöwall & Wahlöö",detail:"Premier volume de Martin Beck. Acte fondateur du polar scandinave.",city:{lat:59.33,lon:18.07,nom_actuel:"Stockholm"}}]}
    ]
  },
  dialoguePhilo:{
    label:"Dialogue philosophique",
    desc:"Forme littéraire mettant en scène un échange argumenté entre interlocuteurs. Née en Inde et en Grèce antiques, elle circule à travers les traditions bouddhique, islamique et européenne.",
    timeline:[
      {year:-500,events:[
        {countryId:"356",title:"Suttas du Canon pāli — Entretiens du Bouddha",detail:"Les suttas mettent en scène Siddhārtha Gautama dialoguant avec disciples, brahmanes et rois.",city:{lat:25.60,lon:85.13,nom_actuel:"Patna",noms:[{nom:"Rājagṛha",local:"राजगृह",debut:-9999,fin:-400},{nom:"Pāṭaliputra",local:"पाटलिपुत्र",debut:-400,fin:600},{nom:"Patna",debut:600,fin:9999}]}},
        {countryId:"300",title:"Premiers dialogues socratiques — Platon",detail:"Platon compose les premiers dialogues mettant en scène Socrate : Apologie, Ion, Hippias mineur.",city:{lat:37.98,lon:23.73,nom_actuel:"Athènes",noms:[{nom:"Athènes",local:"Ἀθῆναι",debut:-9999,fin:9999}]}}
      ]},
      {year:-380,events:[{countryId:"300",title:"La République, Le Banquet — Platon",detail:"Grands dialogues de la maturité. Platon porte le genre à son apogée littéraire et philosophique.",city:{lat:37.98,lon:23.73,nom_actuel:"Athènes"}}]},
      {year:-300,events:[{countryId:"156",title:"Mencius (Mengzi) — Entretiens",detail:"Mengzi dialogue avec princes et lettrés pour défendre la bonté innée de la nature humaine.",city:{lat:35.57,lon:116.98,nom_actuel:"Zoucheng"}}]},
      {year:-150,events:[{countryId:"586",title:"Milindapañha — Questions du roi Milinda",detail:"Dialogue entre le roi indo-grec Ménandre et le moine Nāgasena. Rencontre entre bouddhisme et dialectique grecque.",city:{lat:34.01,lon:71.58,nom_actuel:"Peshawar"}}]},
      {year:-45,events:[{countryId:"380",title:"Tusculanes, De natura deorum — Cicéron",detail:"Cicéron adapte le dialogue philosophique grec au latin.",city:{lat:41.90,lon:12.50,nom_actuel:"Rome"}}]},
      {year:165,events:[{countryId:"792",title:"Dialogues des morts — Lucien de Samosate",detail:"Lucien détourne le dialogue en satire. Influence sur Érasme et Voltaire.",city:{lat:37.08,lon:38.29,nom_actuel:"Şanlıurfa",noms:[{nom:"Samosate",local:"Σαμόσατα",debut:-9999,fin:9999}]}}]},
      {year:400,events:[{countryId:"012",title:"Soliloques, De Magistro — Augustin d'Hippone",detail:"Augustin christianise le dialogue philosophique. Le De Magistro : échange avec son fils Adéodat.",city:{lat:36.89,lon:7.75,nom_actuel:"Annaba",noms:[{nom:"Hippone",local:"Hippo Regius",debut:-9999,fin:700},{nom:"Annaba",debut:700,fin:9999}]}}]},
      {year:1000,events:[{countryId:"368",title:"Al-Imtāʿ wa-l-muʾānasa — Abū Ḥayyān al-Tawḥīdī",detail:"37 nuits de conversation entre al-Tawḥīdī et le vizir Ibn Saʿdān. Chef-d'œuvre de l'adab dialogique arabe.",city:{lat:33.32,lon:44.37,nom_actuel:"Bagdad"}}]},
      {year:1528,events:[{countryId:"380",title:"Le Livre du Courtisan — Baldassare Castiglione",detail:"Dialogue de cour à Urbino. Castiglione ressuscite le modèle cicéronien dans la Renaissance italienne.",city:{lat:43.73,lon:12.64,nom_actuel:"Urbino"}}]},
      {year:1713,events:[{countryId:"826",title:"Three Dialogues — George Berkeley",detail:"Berkeley met en scène Hylas et Philonous pour défendre l'immatérialisme.",city:{lat:51.51,lon:-0.13,nom_actuel:"Londres"}}]},
      {year:1769,events:[{countryId:"250",title:"Le Neveu de Rameau — Denis Diderot",detail:"Dialogue satirique entre 'Moi' et 'Lui'. Diderot pousse la forme vers la dialectique sociale.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]},
      {year:1923,events:[{countryId:"250",title:"L'Âme et la Danse, Eupalinos — Paul Valéry",detail:"Valéry réinvente le dialogue platonicien en y mêlant poétique et architecture.",city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}]}
    ]
  },  
  biji: {
    label: "Biji (筆記)",
    desc: "Notes au pinceau : genre lettré chinois à forme libre, accueillant anecdotes, érudition, critique littéraire et récits de l'étrange. Du zhiguai des Wei-Jin au Liaozhai zhiyi de Pu Songling, le biji traverse quinze siècles de littérature chinoise et circule dans tout l'espace sinographique : zuihitsu au Japon, p'ilgi en Corée, bút ký au Viêt Nam.",
    timeline: [
      { year: -100, events: [
        { countryId:"156", title:"Xiaoshuo (小說) — Ban Gu, Yiwenzhi",
          detail:"Ban Gu (32–92) classe les xiaoshuo dans le Yiwenzhi du Hanshu comme « bavardages de rue et commérages de ruelle » recueillis par de petits fonctionnaires. Cette catégorie résiduelle fonde paradoxalement le genre à forme libre : le biji héritera de cette marginalité bibliographique qui lui permet d'accueillir ce que les genres canoniques excluent.",
          city:{ lat:34.26, lon:108.94, nom_actuel:"Xi'an",
            noms:[{nom:"Chang'an",local:"長安",debut:-9999,fin:900},{nom:"Xi'an",local:"西安",debut:900,fin:9999}] }}
      ]},
      { year: 350, events: [
        { countryId:"156", title:"Soushen ji (搜神記) — Gan Bao",
          detail:"« À la recherche des esprits ». Compilation de prodiges, fantômes et métamorphoses dans une prose concise. Monument du zhiguai (récits de l'étrange), branche narrative du proto-biji. L'une des deux polarités fondatrices du genre : le merveilleux.",
          city:{ lat:32.06, lon:118.78, nom_actuel:"Nanjing",
            noms:[{nom:"Jiankang",local:"建康",debut:280,fin:589},{nom:"Nanjing",local:"南京",debut:589,fin:9999}] }},
        { countryId:"156", title:"Shishuo xinyu (世說新語) — Liu Yiqing",
          detail:"« Nouveaux récits du monde ». Anecdotes sur les personnalités de l'élite, jugements de caractère, bons mots. L'autre polarité fondatrice : l'érudition mondaine et le portrait lettré. Modèle de prose classique pendant un millénaire.",
          city:{ lat:32.06, lon:118.78, nom_actuel:"Nanjing",
            noms:[{nom:"Jiankang",local:"建康",debut:280,fin:589},{nom:"Nanjing",local:"南京",debut:589,fin:9999}] }}
      ]},
      { year: 500, events: [
        { countryId:"156", title:"Émergence du biji — Dynasties du Sud",
          detail:"Sous les Dynasties du Sud (420–589), le biji émerge comme genre autonome : notes érudites, anecdotes historiques, observations sur les mœurs, dans un espace littéraire qui ne relève ni des classiques, ni de l'histoire officielle, ni de la fiction. Liu Yeqiu identifie cette période comme le moment de cristallisation du genre.",
          city:{ lat:32.06, lon:118.78, nom_actuel:"Nanjing",
            noms:[{nom:"Jiankang",local:"建康",debut:280,fin:589},{nom:"Nanjing",local:"南京",debut:589,fin:9999}] }}
      ]},
      { year: 860, events: [
        { countryId:"156", title:"Youyang zazu (酉陽雜俎) — Duan Chengshi",
          detail:"« Mélanges de Youyang ». Chef-d'œuvre du biji Tang : encyclopédie du bizarre couvrant géographie, plantes, animaux, croyances, récits surnaturels, usages étrangers. Prose brillante et savoir immense. Le biji Tang se distingue du chuanqi (conte merveilleux à fiction avouée) : le biji garde une prétention au document et à l'observation.",
          city:{ lat:34.26, lon:108.94, nom_actuel:"Xi'an",
            noms:[{nom:"Chang'an",local:"長安",debut:-9999,fin:900},{nom:"Xi'an",local:"西安",debut:900,fin:9999}] }}
      ]},
      { year: 1000, events: [
        { countryId:"392", title:"Makura no sōshi (枕草子) — Sei Shōnagon",
          detail:"Les Notes de chevet de Sei Shōnagon (c. 966–1025), dame de cour de l'impératrice Teishi. Premier zuihitsu japonais : listes, anecdotes de cour, observations sur la nature, jugements esthétiques. Adaptation japonaise du modèle biji chinois, mais avec une sensibilité esthétique et intime propre (Chance, Formless in Form, 1997).",
          city:{ lat:35.01, lon:135.77, nom_actuel:"Kyoto",
            noms:[{nom:"Heian-kyō",local:"平安京",debut:794,fin:1868},{nom:"Kyoto",local:"京都",debut:1868,fin:9999}] }}
      ]},
      { year: 1058, events: [
        { countryId:"156", title:"Song Qi — premier livre intitulé Biji",
          detail:"Song Qi 宋祁 (998–1061) compose un Biji en 3 juan : le premier livre portant explicitement ce titre comme désignation du genre. Trois parties : « Analyse des coutumes » (Shisu 釋俗), « Recherches et corrections » (Kaoding 考訂) et un troisième volet d'observations diverses. Moment de prise de conscience générique.",
          city:{ lat:34.78, lon:114.30, nom_actuel:"Kaifeng",
            noms:[{nom:"Bianjing / Kaifeng",local:"汴京",debut:960,fin:1127},{nom:"Kaifeng",local:"開封",debut:1127,fin:9999}] }}
      ]},
      { year: 1088, events: [
        { countryId:"156", title:"Mengxi bitan (夢溪筆談) — Shen Kuo",
          detail:"« Discussions au pinceau du ruisseau des songes ». 26 juan. Première mention de l'imprimerie à caractères mobiles, de la boussole magnétique, explication des fossiles. Shen Kuo utilise la forme biji pour consigner des observations empiriques inclassables dans les genres canoniques (Egan, 2013 ; Fu Daiwie, 1993). De Weerdt (2020) montre que ce chef-d'œuvre requiert une préface apologétique parce que son contenu n'a pas de place dans les genres établis. Un tiers du texte concerne les sciences et techniques — source majeure pour Needham (Science and Civilisation in China).",
          city:{ lat:32.21, lon:119.42, nom_actuel:"Zhenjiang",
            noms:[{nom:"Runzhou / Zhenjiang",local:"潤州",debut:-9999,fin:1113},{nom:"Zhenjiang",local:"鎮江",debut:1113,fin:9999}] }}
      ]},
      { year: 1161, events: [
        { countryId:"156", title:"Yijianzhi (夷堅志) — Hong Mai",
          detail:"Hong Mai 洪邁 (1123–1202) compose la plus grande collection de récits de l'étrange des Song : environ 2 700 récits en 420 juan. Inglis (SUNY, 2006) montre que Hong Mai collectait ses récits auprès d'informateurs de toutes les classes sociales, créant un « réservoir narratif » qui irrigue la fiction vernaculaire ultérieure. Son Rongzhai suibi mêle érudition et anecdotes — polyvalence d'un même auteur dans les deux pôles du biji.",
          city:{ lat:28.68, lon:115.86, nom_actuel:"Nanchang",
            noms:[{nom:"Hongzhou / Nanchang",local:"洪州",debut:-9999,fin:1360},{nom:"Nanchang",local:"南昌",debut:1360,fin:9999}] }}
      ]},
      { year: 1260, events: [
        { countryId:"410", title:"P'ahan chip (破閑集) — Yi Inno (Corée)",
          detail:"Premier biji coréen notable. « Notes pour rompre l'oisiveté » de Yi Inno, sous le Koryŏ. Critique poétique, notes autobiographiques, portraits d'amis et observations sur les mœurs contemporaines. Inaugure une longue tradition de miscellanées lettrées en Corée.",
          city:{ lat:37.58, lon:126.98, nom_actuel:"Séoul",
            noms:[{nom:"Kaegyŏng (Koryŏ)",local:"開京",debut:-9999,fin:1392},{nom:"Hanyang",local:"漢陽",debut:1392,fin:1910},{nom:"Séoul",local:"서울",debut:1910,fin:9999}] }}
      ]},
      { year: 1330, events: [
        { countryId:"392", title:"Tsurezuregusa (徒然草) — Yoshida Kenkō",
          detail:"Les Heures oisives de Yoshida Kenkō (c. 1283–1350), moine bouddhiste. 243 sections mêlant méditations sur l'impermanence, anecdotes, conseils pratiques. Chance (1997) montre comment la discontinuité formelle est elle-même une expression philosophique. Second sommet du zuihitsu classique japonais.",
          city:{ lat:35.01, lon:135.77, nom_actuel:"Kyoto",
            noms:[{nom:"Kyoto",local:"京都",debut:-9999,fin:9999}] }}
      ]},
      { year: 1540, events: [
        { countryId:"410", title:"P'aegwan chapki (稗官雜記) — Ŏ Sukkwŏn (Corée)",
          detail:"« Miscellanée de l'anecdotier ». Ŏ Sukkwŏn (fl. 1525–1554) s'appelle p'aegwan par modestie lettrée — comme Ban Gu classait les xiaoshuo. Traduit par Peter H. Lee (Princeton, 1989), qui montre que la chapki est « mieux adaptée à la présentation du moi » que les genres canoniques coréens.",
          city:{ lat:37.58, lon:126.98, nom_actuel:"Séoul",
            noms:[{nom:"Hanyang",local:"漢陽",debut:1392,fin:1910},{nom:"Séoul",local:"서울",debut:1910,fin:9999}] }}
      ]},
      { year: 1700, events: [
        { countryId:"156", title:"Liaozhai zhiyi (聊齋志異) — Pu Songling",
          detail:"« Contes extraordinaires du studio Liao ». Environ 500 récits de renardes-fées, fantômes et lettrés. Sous la surface surnaturelle, critique acerbe de la société et des examens impériaux. Sommet littéraire du biji xiaoshuo. Retour à la prose classique (guwen) avec éléments vernaculaires. Composé c. 1679–1710, publié en 1766.",
          city:{ lat:36.72, lon:117.98, nom_actuel:"Zibo",
            noms:[{nom:"Zichuan / Zibo",local:"淄川",debut:-9999,fin:9999}] }}
      ]},
      { year: 1789, events: [
        { countryId:"156", title:"Yuewu caotang biji (閱微草堂筆記) — Ji Yun",
          detail:"« Notes de la chaumière des observations minutieuses ». Ji Yun 紀昀 (1724–1805), directeur du Siku quanshu. 24 juan, 1789–1798. Récits brefs mêlant surnaturel et morale confucéenne, dans un style sobre volontairement opposé au Liaozhai. Dernière grande œuvre du biji classique.",
          city:{ lat:39.91, lon:116.39, nom_actuel:"Pékin",
            noms:[{nom:"Pékin",local:"北京",debut:-9999,fin:9999}] }}
      ]}
    ]
  },
};

const ERAS=[
  {start:-3500,end:-500,label:"Haute Antiquité"},{start:-500,end:476,label:"Antiquité classique"},
  {start:476,end:1000,label:"Haut Moyen Âge"},{start:1000,end:1500,label:"Moyen Âge tardif"},
  {start:1500,end:1789,label:"Époque moderne"},{start:1789,end:1914,label:"XIXe siècle"},
  {start:1914,end:1945,label:"Guerres mondiales"},{start:1945,end:2030,label:"Époque contemporaine"}
];
function getEra(y){return ERAS.find(e=>y>=e.start&&y<e.end)||ERAS[ERAS.length-1];}

