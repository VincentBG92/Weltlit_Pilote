/* ═══════════════════════════════════════════════════════════════════
   VERS LIBRE — Triple histoire + xinshi chinois
   ─────────────────────────────────────────────────────────────────
   Fusion des données originales, des ajouts xinshi (Hu Shi 1917,
   Guo Moruo 1921) et des descriptions enrichies.
   Les champs cityCountryId signalent les cas diasporiques
   (auteur d'un pays, publication dans un autre).
   ═════════════════════════════════════════════════════════════════ */
LITERARY_FORMS.versLibre = {
  label: "Vers libre",
  desc: "Triple histoire du vers libre : pseudotraductions romantiques, vers libre littéraire mondial (Whitman, Maïakovski, modernismes), et vers libre en traduction savante. Le cas chinois (xinshi, 新诗) ajoute une quatrième dimension : la rupture y est double — abandon simultané de la prosodie tonale classique (ping/ze) ET de la langue littéraire (wenyan) au profit du vernaculaire (baihua). Les trois fils se nouent en 1886.",
  timeline: [
    /* ── Pseudotraductions romantiques ── */
    {year:1827, events:[
      {countryId:"250", title:"La Guzla — Prosper Mérimée (pseudotraduction)",
        detail:"Poèmes illyriens fictifs présentés comme traduits de la Dalmatie. Style 'barbare', sans rime ni mètre régulier. Mystifie Goethe et Pouchkine. Selon Christine Lombez, la pseudotraduction est le vecteur clandestin d'introduction de formes prosodiques nouvelles : la tolérance du lectorat est plus grande pour une déviance attribuée à l'étranger.",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]},
    {year:1831, events:[
      {countryId:"250", title:"Nerval : pseudotraductions de l'allemand",
        detail:"Gérard de Nerval publie dans Le Mercure de France des poèmes attribués à Jean-Paul Richter et Bürger, dont aucun original allemand n'a été retrouvé. La frontière entre vraie et fausse traduction révèle l'espace d'expérimentation que la pseudotraduction ouvre au poète.",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]},

    /* ── Fondation anglophone ── */
    {year:1856, events:[
      {countryId:"840", title:"Leaves of Grass — Walt Whitman",
        detail:"Fondation du vers libre moderne anglophone. Long verset blanc influencé par la Bible hébraïque (parallélismes), Carlyle et les épopées homériques. Whitman s'adresse directement au lecteur dans un 'je' démesuré et démocratique. Ignoré à sa sortie, redécouvert en Europe avant de conquérir l'Amérique.",
        city:{lat:40.71,lon:-73.99,nom_actuel:"New York"}}
    ]},

    /* ── Traduction et vers libre savant ── */
    {year:1866, events:[
      {countryId:"250", title:"Iliade / Odyssée — Leconte de Lisle (traduction)",
        detail:"Prose poétique rythmée et archaïsante refusant l'alexandrin. Premier grand refus du mètre classique français pour rendre Homère. Question centrale : comment rendre l'hexamètre dactylique dans une langue syllabique ?",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]},

    /* ── 1886 : moment fondateur français ── */
    {year:1886, events:[
      {countryId:"250", title:"Brins d'herbes — Laforgue traduit Whitman (La Vogue)",
        detail:"Jules Laforgue publie ses traductions de Leaves of Grass dans La Vogue en juin 1886. La semaine suivante : ses premiers vers libres personnels. Même numéro : les Illuminations de Rimbaud. Moment fondateur : la traduction comme catalyseur du vers libre français (Lombez, Romantisme, 2008).",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}},
      {countryId:"056", title:"Émile Verhaeren — Les Soirs / Les Débâcles",
        detail:"Le grand poète belge s'empare du vers libre symboliste avec une puissance rythmique exceptionnelle. Premier poète francophone à faire du vers libre une forme majeure et non expérimentale. Influence décisive sur Stefan Zweig, Romain Rolland et les expressionnistes.",
        city:{lat:50.85,lon:4.35,nom_actuel:"Bruxelles"}}
    ]},
    {year:1907, events:[
      {countryId:"250", title:"Première traduction française de Gilgamesh — Dhorme",
        detail:"Vers libre savant né de la contrainte philologique : les parallélismes de la poésie akkadienne sont intraduisibles en mètre classique. Disposition en courts segments mimant la structure originale.",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]},

    /* ── Imagisme + futurisme russe ── */
    {year:1912, events:[
      {countryId:"840", title:"Imagisme — Ezra Pound, H.D., Amy Lowell",
        detail:"Pound fonde l'Imagisme à Londres avec H.D. et Aldington. Image directe, économie de mot, liberté rythmique. Pound lie le vers libre à la traduction de la poésie chinoise (Cathay, 1915) et japonaise. L'Imagisme irrigue tout le vers libre anglophone du XXe siècle.",
        cityCountryId:"826",
        city:{lat:51.51,lon:-0.13,nom_actuel:"Londres"}},
      {countryId:"643", title:"Maïakovski — premiers poèmes futuristes",
        detail:"Vladimir Maïakovski invente le vers-escalier (лесенка) : chaque marche est une unité rythmique accentuelle. Rupture radicale avec la métrique syllabo-tonique russe. Influence décisive sur Ai Qing et toute la poésie du monde soviétique et post-colonial.",
        city:{lat:55.75,lon:37.62,nom_actuel:"Moscou"}}
    ]},

    /* ── Révolution poétique chinoise (xinshi 新诗) ── */
    {year:1917, events:[
      {countryId:"156", title:"Hu Shi (胡适) — manifeste et premiers vers libres chinois",
        detail:"En janvier 1917, Hu Shi publie dans Xin Qingnian (新青年, La Jeunesse) son manifeste 'Suggestions pour une réforme littéraire' (文学改良刍议), suivi de huit poèmes en langue vernaculaire (baihua 白话). Double rupture sans équivalent en Occident : abandon simultané de la prosodie classique — schémas tonaux ping/ze (平仄), parallélismes obligatoires (对仗), rimes codifiées — ET du chinois classique (wenyan 文言). Son recueil Changshi ji (尝试集, Tentatives, 1920) est le premier livre de xinshi (新诗, poésie nouvelle). Sources : Michelle Yeh, Modern Chinese Poetry (Yale UP, 1991).",
        city:{lat:39.91,lon:116.39,nom_actuel:"Pékin",noms:[{nom:"Pékin",local:"北京",debut:-9999,fin:9999}]}}
    ]},
    {year:1921, events:[
      {countryId:"156", title:"Nüshen (女神, Les Déesses) — Guo Moruo (郭沫若)",
        detail:"Premier grand recueil de vers libres romantiques en chinois. Guo Moruo (1892–1978), formé au Japon, digère Whitman, Shelley, Goethe et Tagore dans un vers libre véhément et cosmique. Fait du xinshi une forme majeure, non plus un exercice expérimental. Cofondateur de la Société de la Création (创造社). Il représente le courant romantique face au formalisme de Wen Yiduo (闻一多). Sources : Michel Hockx (éd.), The Flowering of Modern Chinese Poetry (2015).",
        city:{lat:31.23,lon:121.47,nom_actuel:"Shanghai"}}
    ]},

    /* ── 1922 : modernismes mondiaux ── */
    {year:1922, events:[
      {countryId:"826", title:"The Waste Land — T. S. Eliot",
        detail:"Synthèse du vers libre moderniste anglophone. Polyphonie de citations (Dante, Shakespeare, Bible bouddhiste), langues et registres. Influencé par Laforgue et le symbolisme français. Prix Nobel 1948.",
        city:{lat:51.51,lon:-0.13,nom_actuel:"Londres"}},
      {countryId:"076", title:"Semaine d'Art Moderne — São Paulo",
        detail:"Fondation du modernisme brésilien. Mário de Andrade : Paulicéia Desvairada. Oswald de Andrade : vers syncopé cannibale. Rupture radicale avec le Parnasse portugais.",
        city:{lat:-23.55,lon:-46.63,nom_actuel:"São Paulo"}},
    ]},

      /* ── 1923 : modernismes mondiaux ── */
    {year:1923, events:[
      {countryId:"156", title:"Bing Xin (冰心) — Étoiles et Printemps",
        detail:"Bing Xin (Xie Wanying, 1900–1999) publie Fanxing (繁星, 1923) et Chunshui (春水, 1923), courts poèmes en vers libres inspirés de Tagore et Whitman. Après Hu Shi (1917) et Guo Moruo (1921), elle représente une troisième voie du xinshi : prose lyrique fragmentée, concision proche du haïku. Première grande poétesse chinoise moderne.",
        city:{lat:39.91,lon:116.39,nom_actuel:"Pékin"}}
    ]},

    /* ── Années 1930 ── */
    {year:1930, events:[
      {countryId:"643", title:"Maïakovski — À pleine voix",
        detail:"Dernier grand poème. Le vers-escalier comme oralisation visible du discours, la rime comme percussion. Suicide en avril 1930. Ses poèmes, traduits en vers libres dans des dizaines de langues, propagent le modèle du vers rythmique accentuel non métrique.",
        city:{lat:55.75,lon:37.62,nom_actuel:"Moscou"}},
      {countryId:"076", title:"Libertinagem — Manuel Bandeira",
        detail:"Recueil emblématique du vers libre brésilien. Bandeira, 'São João Batista du modernisme', y perfectionne un vers libre intime, ironique, populaire. 'Vou-me embora pra Pasárgada'.",
        city:{lat:-22.91,lon:-43.17,nom_actuel:"Rio de Janeiro"}}
    ]},
    {year:1933, events:[
      {countryId:"156", title:"La Rivière de Dayan — Ai Qing (艾青)",
        detail:"Ai Qing (1910–1996) écrit en prison Dayanhe — wo de baomu (大堰河——我的保姆, 1933). Vers libre épique en baihua, influencé par Apollinaire, Verhaeren et Maïakovski, découverts lors de son séjour parisien (1929–1932). Lignes de longueur irrégulière, sans schéma tonal ni rime. Son traité Shilun (诗论, 1938) théorise le rythme du vers libre chinois comme 'rythme de la langue parlée'. Son fils est l'artiste Ai Weiwei.",
        city:{lat:30.26,lon:120.21,nom_actuel:"Hangzhou"}}
    ]},

    /* ── Diaspora hispanoaméricaine ── */
    {year:1939, events:[
      {countryId:"604", title:"Poemas humanos — César Vallejo",
        detail:"Écrits à Paris, publiés posthumément. Vers libre espagnol d'une étrangeté syntaxique radicale : Vallejo brise la grammaire pour exprimer la douleur collective. Influence décisive sur toute la poésie hispanoaméricaine.",
        cityCountryId:"250",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]},

    /* ── Négritude et Caraïbes ── */
    {year:1947, events:[
      {countryId:"474", title:"Cahier d'un retour au pays natal — Aimé Césaire",
        detail:"Long verset surréaliste et africain. Césaire forge un vers libre qui dévore toutes les langues pour restituer la violence coloniale et l'élan de la négritude. Édition définitive avec préface de Breton.",
        city:{lat:14.62,lon:-61.02,nom_actuel:"Fort-de-France"}}
    ]},

    /* ── Traductions majeures + Beat ── */
    {year:1955, events:[
      {countryId:"250", title:"Odyssée — Philippe Jaccottet (traduction)",
        detail:"Vers libres de longueur variable. Choix de ne pas imposer l'alexandrin à Homère. Jaccottet théorise la nécessité de laisser la syntaxe grecque respirer dans la langue d'arrivée.",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}},
      {countryId:"840", title:"Howl — Allen Ginsberg",
        detail:"Long verset whitmanien scandé à la Gallery Six, San Francisco. Ginsberg renoue avec le catalogue, l'anaphore, le souffle épique de Whitman. Procès pour obscénité. Acte fondateur de la Beat Generation.",
        city:{lat:37.77,lon:-122.42,nom_actuel:"San Francisco"}}
    ]},
    {year:1962, events:[
      {countryId:"250", title:"Shakespeare — Yves Bonnefoy (traduction)",
        detail:"Hamlet (1962), Jules César, Lear, Macbeth. Vers libres refusant de mimer le pentamètre iambique par l'alexandrin. Bonnefoy théorise la traduction comme geste d'écriture à part entière.",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]},
    {year:1970, events:[
      {countryId:"250", title:"Les cinq rouleaux — Henri Meschonnic (traduction)",
        detail:"Bible en vers libres rythmés selon l'oralité hébraïque, sans ponctuation, en lignes calquées sur les accents du texte massorétique. Théorisé dans Pour la poétique II (1973) : le rythme n'est pas métrique mais organisation du discours.",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]},

    /* ── Traductions contemporaines ── */
    {year:2009, events:[
      {countryId:"250", title:"Iliade — Jean-Louis Backès (traduction)",
        detail:"Gallimard. Vers libres au service d'une syntaxe homérique respectée. Rejets et enjambements fonctionnels. Backès a théorisé dans l'Histoire des traductions en langue française le rôle de la traduction comme vecteur d'introduction du vers libre en France.",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]},
    {year:2017, events:[
      {countryId:"250", title:"Métamorphoses — Marie Cosnay (traduction)",
        detail:"Éditions de l'Ogre. 10 ans de travail. 12 000 vers d'Ovide en vers libres d'une étrangeté assumée. Décrochages de registre, syntaxe proche du latin. Prix Nelly-Sachs 2018.",
        city:{lat:48.86,lon:2.35,nom_actuel:"Paris"}}
    ]}
  ]
};
