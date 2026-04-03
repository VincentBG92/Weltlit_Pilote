/* ═══════════════════════════════════════════════════════
   ÉCRITURES — Premières attestations des grands systèmes
   ═══════════════════════════════════════════════════════ */
LITERARY_FORMS.ecritures = {
  label: "Écritures",
  desc: "Premières attestations des grands systèmes d'écriture : du cunéiforme sumérien (c. 3300 av. J.-C.) aux alphabets créés au XIXe–XXe siècles. Dates approximatives selon l'état des fouilles et des déchiffrements.",
  timeline: [
    {year:-3400, events:[
      {countryId:"364", title:"Écriture proto-élamite — Suse",
        detail:"Plus anciens signes d'écriture attestés (c. 3400–3300 av. J.-C.). Pictogrammes liés à la comptabilité. Non déchiffrée. Précède de quelques décennies le cunéiforme sumérien.",
        city:{lat:32.19,lon:48.25,nom_actuel:"Shush (Suse)",noms:[{nom:"Suse",local:"𒀭𒋢𒊺",debut:-9999,fin:9999}]}},
      {countryId:"368", title:"Cunéiforme proto-sumérien — Uruk",
        detail:"Tablettes d'Uruk : premiers pictogrammes sumériens (c. 3300 av. J.-C.), bientôt phonétisés en syllabes. Ancêtre de tous les systèmes cunéiformes. Invention liée à la comptabilité des surplus agricoles.",
        city:{lat:31.32,lon:45.62,nom_actuel:"Warka",noms:[{nom:"Uruk",local:"𒀕𒆳",debut:-9999,fin:300}]}}
    ]},
    {year:-3200, events:[
      {countryId:"818", title:"Hiéroglyphes égyptiens — Abydos",
        detail:"Premières inscriptions hiéroglyphiques (tombe U-j, Abydos, c. 3200 av. J.-C.). Système à la fois logographique et consonantique. Restera en usage jusqu'à 394 apr. J.-C., déchiffré par Champollion en 1822.",
        city:{lat:26.18,lon:31.92,nom_actuel:"Abydos",noms:[{nom:"Abdju / Abydos",local:"𓇋𓃀𓆓𓅱",debut:-9999,fin:9999}]}}
    ]},
    {year:-2600, events:[
      {countryId:"586", title:"Écriture de l'Indus — Mohenjo-daro",
        detail:"~400 signes attestés sur sceaux et tablettes (c. 2600–1900 av. J.-C.). Non déchiffrée. Disparaît avec le déclin de la civilisation harappéenne. L'une des grandes énigmes de la paléographie.",
        city:{lat:27.33,lon:68.14,nom_actuel:"Mohenjo-daro"}}
    ]},
    {year:-1800, events:[
      {countryId:"818", title:"Écriture protosinaïtique — Sinaï / Levant",
        detail:"Premier alphabet consonantique (abjad) : ~30 signes dérivés de hiéroglyphes égyptiens. Mines de Serabit el-Khadim. Ancêtre de tous les alphabets phéniciens, sémitiques, grecs et latins. Révolution : 30 signes contre 700 pour les hiéroglyphes.",
        city:{lat:29.00,lon:33.50,nom_actuel:"Serabit el-Khadim (Sinaï)"}}
    ]},
    {year:-1600, events:[
      {countryId:"156", title:"Écriture oraculaire sur os (jiǎgǔwén) — Anyang",
        detail:"Premiers caractères chinois attestés (~1600–1046 av. J.-C., Shang). Logogrammes gravés sur os et écailles de tortue pour les oracles. Ancêtre direct de l'écriture chinoise moderne.",
        city:{lat:36.13,lon:114.33,nom_actuel:"Anyang",noms:[{nom:"Yin / Anyang",local:"殷",debut:-9999,fin:1600},{nom:"Anyang",local:"安阳",debut:1600,fin:9999}]}}
    ]},
    {year:-1500, events:[
      {countryId:"300", title:"Linéaire B — Mycènes / Cnossos",
        detail:"Syllabaire noté sur tablettes d'argile. Déchiffré en 1952 par Michael Ventris. Note le grec mycénien. Disparu c. 1200 av. J.-C. lors de l'effondrement de l'Âge du Bronze.",
        city:{lat:37.73,lon:22.76,nom_actuel:"Mycènes",noms:[{nom:"Mykḗnai",local:"Μυκῆναι",debut:-9999,fin:9999}]}}
    ]},
    {year:-1400, events:[
      {countryId:"760", title:"Alphabet ougaritique — Ougarit",
        detail:"Alphabet cunéiforme de 30 signes (c. 1400–1185 av. J.-C.). Côte syrienne. Disparaît avec la destruction de la ville par les Peuples de la Mer.",
        city:{lat:35.60,lon:35.78,nom_actuel:"Ras Shamra",noms:[{nom:"Ougarit",local:"𒌑𒂵𒊑𒌅",debut:-9999,fin:-1185}]}}
    ]},
    {year:-1050, events:[
      {countryId:"422", title:"Alphabet phénicien — Byblos / Tyr",
        detail:"22 consonnes. Se répand dans tout le bassin méditerranéen grâce au commerce maritime. Ancêtre direct des alphabets hébreu, araméen, arabe, grec et latin.",
        city:{lat:34.12,lon:35.65,nom_actuel:"Jbeil (Byblos)",noms:[{nom:"Byblos / Gubla",local:"𐤂𐤁𐤋",debut:-9999,fin:9999}]}}
    ]},
    {year:-800, events:[
      {countryId:"300", title:"Alphabet grec archaïque",
        detail:"Adaptation du phénicien avec ajout de voyelles : première écriture à noter voyelles ET consonnes. Ancêtre du latin (via l'étrusque), du cyrillique et de l'arménien.",
        city:{lat:37.97,lon:23.73,nom_actuel:"Athènes",noms:[{nom:"Athènes",local:"Ἀθῆναι",debut:-9999,fin:9999}]}}
    ]},
    {year:-600, events:[
      {countryId:"380", title:"Alphabet latin — Rome",
        detail:"Dérivé du grec via l'alphabet étrusque. C. 600 av. J.-C. Utilisé aujourd'hui par ~70 % de la population mondiale.",
        city:{lat:41.90,lon:12.50,nom_actuel:"Rome"}},
      {countryId:"356", title:"Brahmi — Inde",
        detail:"C. 500–300 av. J.-C. Abugida (syllabaire à voyelles inhérentes). Ancêtre de la quasi-totalité des écritures d'Asie du Sud et du Sud-Est : devanagari, bengali, khmère, thaï, tibétain, birmane…",
        city:{lat:25.32,lon:82.97,nom_actuel:"Varanasi"}}
    ]},
    {year:-250, events:[
      {countryId:"729", title:"Écriture méroïtique — Royaume de Méroé",
        detail:"Alphabet de 23 signes dérivé des hiéroglyphes. Soudan actuel. En usage c. 300 av. J.-C.–400 apr. J.-C. Partiellement déchiffrée.",
        city:{lat:16.94,lon:33.74,nom_actuel:"Méroé (Soudan)"}}
    ]},
    {year:100, events:[
      {countryId:"578", title:"Runes germaniques (Futhark ancien) — Scandinavie",
        detail:"24 signes. Scandinavie et Europe du Nord (c. 150–700 apr. J.-C.). Usages rituels, commémoratifs, épigraphiques."}
    ]},
    {year:400, events:[
      {countryId:"051", title:"Alphabet arménien — Machtots",
        detail:"Créé c. 405 apr. J.-C. par Mesrop Machtots. 38 lettres. Lié à la traduction de la Bible. Langue et écriture encore utilisées sans discontinuité.",
        city:{lat:40.18,lon:44.51,nom_actuel:"Erevan",noms:[{nom:"Vałaršapat",local:"Վաղարշապատ",debut:-9999,fin:1900},{nom:"Erevan",local:"Երևան",debut:1900,fin:9999}]}},
      {countryId:"268", title:"Alphabet géorgien (asomtavruli)",
        detail:"C. 430 apr. J.-C. Lié à la traduction des Évangiles. Unique au monde.",
        city:{lat:41.69,lon:44.83,nom_actuel:"Tbilissi",noms:[{nom:"Mtskheta",local:"მცხეთა",debut:-9999,fin:500},{nom:"Tbilissi",local:"თბილისი",debut:500,fin:9999}]}}
    ]},
    {year:430, events:[
      {countryId:"231", title:"Écriture éthiopienne — Ge'ez (Fidel)",
        detail:"Dérivée du sudarabique sabéen. Abugida de 231 syllabes. Encore utilisée pour l'amharique, le tigrigna et le guèze liturgique.",
        city:{lat:14.33,lon:38.93,nom_actuel:"Aksoum"}}
    ]},
    {year:600, events:[
      {countryId:"682", title:"Écriture arabe — Arabie",
        detail:"Dérivée du nabatéen. 28 lettres. Liée à la révélation coranique. Deuxième système d'écriture par nombre de locuteurs. De l'Espagne à l'Indonésie.",
        city:{lat:21.42,lon:39.82,nom_actuel:"La Mecque"}}
    ]},
    {year:650, events:[
      {countryId:"156", title:"Écriture tibétaine (Ucen)",
        detail:"Créée sous Songtsen Gampo. Dérivée du gupta (Inde). Liée à la traduction du canon bouddhiste tibétain.",
        city:{lat:29.65,lon:91.12,nom_actuel:"Lhassa"}}
    ]},
    {year:700, events:[
      {countryId:"392", title:"Man'yōgana → Kana — Japon",
        detail:"Le man'yōgana (VIIe s.) note le japonais phonétiquement avec des sinogrammes. Le hiragana et le katakana en dérivent au IXe s. Système toujours en usage combiné aux kanji.",
        city:{lat:34.69,lon:135.50,nom_actuel:"Nara"}}
    ]},
    {year:863, events:[
      {countryId:"100", title:"Alphabet cyrillique — Cyrille et Méthode",
        detail:"Créé ~863 pour noter le vieux slave liturgique. Dérivé du grec oncial. Utilisé aujourd'hui par ~250 M de personnes.",
        city:{lat:41.99,lon:21.43,nom_actuel:"Ohrid (Macédoine)"}}
    ]},
    {year:1000, events:[
      {countryId:"484", title:"Écriture maya — apogée classique",
        detail:"Logosyllabique : ~800 glyphes. Déchiffrement progressif depuis les années 1950–1980 (Knorozov, Houston, Stuart).",
        city:{lat:20.68,lon:-88.57,nom_actuel:"Chichén Itzá"}}
    ]},
    {year:1443, events:[
      {countryId:"410", title:"Hangul — roi Sejong le Grand",
        detail:"Créé en 1443, promulgué en 1446. Alphabet phonético-syllabique de 24 lettres. Auteur et date connus avec certitude.",
        city:{lat:37.58,lon:126.98,nom_actuel:"Séoul",noms:[{nom:"Hanyang",local:"漢陽",debut:-9999,fin:1910},{nom:"Séoul",local:"서울",debut:1910,fin:9999}]}}
    ]},
    {year:1821, events:[
      {countryId:"840", title:"Syllabaire cherokee — Séquoyah",
        detail:"85 syllabes. Adoption quasi totale de la nation cherokee en moins de 5 ans. Exemple unique d'invention d'écriture par un locuteur en dehors de toute tradition alphabète.",
        city:{lat:35.46,lon:-84.57,nom_actuel:"Territoire cherokee"}}
    ]},
    {year:1949, events:[
      {countryId:"324", title:"Alphabet N'Ko — Solomana Kante",
        detail:"Créé en 1949 pour les langues mandé (bambara, dioula, malinké). Alphabet de droite à gauche. Utilisé en alphabétisation et édition religieuse.",
        city:{lat:10.39,lon:-9.53,nom_actuel:"Kankan (Guinée)"}}
    ]}
  ]
};