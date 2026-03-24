/* ═══════════════════════════════════════════════════════════════════════════
   ARBORESCENCES DES FORMES LITTÉRAIRES — données
   ─────────────────────────────────────────────────────────────────────────
   Ce fichier contient la structure des arbres généalogiques des formes.
   Il est chargé par trees.html, après donnees.js (atlas).

   INTÉGRATION ATLAS :
   Si donnees.js est chargé avant ce fichier dans la page,
   les objets LITERARY_FORMS et PAYS sont disponibles globalement.
   Utilisez atlasEventsFor(formKey) pour récupérer les événements
   d'une forme depuis la chronologie de l'atlas.

   STRUCTURE D'UN ARBRE :
     status  : "ready" | "stub"
     label   : nom affiché dans le bouton d'onglet
     desc    : description affichée sous les onglets
     sources : références bibliographiques (affiché en pied d'arbre)
     root    : nœud racine (si status === "ready")

   STRUCTURE D'UN NŒUD :
     id       : identifiant unique (chaîne, sans espaces)
     label    : texte court affiché sur le nœud
     year     : date ou période (affiché sous le label)
     type     : "root" | "main" | "branch" | "hybrid"
     hybrid   : true → le lien depuis le parent est en tirets (hybridation)
     detail   : texte long affiché dans le panneau de détail
     children : tableau de nœuds enfants
   ─────────────────────────────────────────────────────────────────────────
   Pour ajouter un arbre documenté :
     1. Créer une clé dans TREES avec status:"ready" et un nœud root complet.
     2. Ajouter le bouton correspondant dans trees.html (FORM_TABS).
   ═══════════════════════════════════════════════════════════════════════════ */

/* ── Intégration optionnelle avec l'atlas ────────────────────────────────── */
/**
 * Retourne tous les événements d'une forme de l'atlas (si donnees.js est chargé).
 * Exemple : atlasEventsFor("haiku") → [{year, countryId, title, detail, city?}, ...]
 */
function atlasEventsFor(formKey) {
  if (typeof LITERARY_FORMS === "undefined") return [];
  return (LITERARY_FORMS[formKey]?.timeline ?? [])
    .flatMap(e => e.events.map(ev => ({ ...ev, year: e.year })));
}

/**
 * Retourne la description d'une forme de l'atlas (si donnees.js est chargé).
 */
function atlasDescFor(formKey) {
  if (typeof LITERARY_FORMS === "undefined") return null;
  return LITERARY_FORMS[formKey]?.desc ?? null;
}


/* ══════════════════════════════════════════════════════════════════════════
   ARBRES
   ══════════════════════════════════════════════════════════════════════════ */
const TREES = {

  /* ── HAÏKU ─────────────────────────────────────────────────────────────
     Sources principales :
       Haruo Shirane, Traces of Dreams (Stanford UP, 1998)
       Makoto Ueda, Matsuo Bashō (1970) ; Dew on the Grass : Issa (2004)
       Donald Keene, World Within Walls (1976)
       Janine Beichman, Masaoka Shiki (1982, rév. 2002)
       William J. Higginson, The Haiku Handbook (1985)
       Haruo Shirane & Tomi Suzuki (dir.), Inventing the Classics (2000)
  ─────────────────────────────────────────────────────────────────────── */
  haiku: {
    status: "ready",
    label: "Haïku",
    desc: "Du waka classique au haïku mondial : généalogie d'une forme brève japonaise et de sa circulation internationale. Filiation interne japonaise d'après Shirane (1998), Ueda (1970, 2004) et Keene (1976) ; diffusion internationale d'après Higginson (1985) et les données de l'atlas.",
    sources: "Shirane, <em>Traces of Dreams</em> (1998) · Ueda, <em>Matsuo Bashō</em> (1970) · Keene, <em>World Within Walls</em> (1976) · Beichman, <em>Masaoka Shiki</em> (2002) · Higginson, <em>The Haiku Handbook</em> (1985)",
    root: {
      id: "waka",
      label: "Waka (和歌)",
      year: "VIIe–XIIe s.",
      type: "root",
      detail: "La poésie classique japonaise (<em>waka</em>, lit. « poème japonais ») fixe la structure syllabique 5-7-5-7-7 (<em>tanka</em>) qui fondera toutes les formes ultérieures. Le <em>Man'yōshū</em> (c. 759) et le <em>Kokinshū</em> (905) en constituent les sommets canoniques. La forme établit les codes du <em>kigo</em> (mot de saison), du <em>kireji</em> (coupe) et de l'<em>aware</em> (sensibilité à l'éphémère) — autant de contraintes que le haïku héritera et transformera.",
      children: [
        {
          id: "renga",
          label: "Renga (連歌)",
          year: "XIIIe–XVIe s.",
          type: "main",
          detail: "Poème-chaîne composé collectivement, en alternant strophes de 5-7-5 (<em>hokku</em>) et 7-7 (<em>wakiku</em>). Le <em>hokku</em>, strophe d'ouverture, doit contenir un <em>kigo</em> et s'adresser à l'hôte de la séance : c'est l'ancêtre direct du haïku. Les traités de Nijō Yoshimoto (<em>Tsukubashū</em>, 1357) codifient le genre. Le renga atteint son sommet avec Sōgi (1421–1502). C'est l'acte d'émancipation du <em>hokku</em> — sa conversion en poème autonome — qui définit la naissance du haïku.",
          children: [
            {
              id: "teimon",
              label: "École Teimon",
              year: "c. 1615–1675",
              type: "branch",
              detail: "Fondée par Matsunaga Teitoku (1571–1653), l'école Teimon produit la première forme stabilisée de <em>haïkaï no renga</em> — une version vernaculaire et allégée du renga aristocratique. Style didactique, jeux de mots (<em>kakekotoba</em>), humour codifié. Diffusion large grâce aux recueils imprimés. L'école Teimon est la matrice sociale du haïku : elle en fait un genre accessible aux marchands et artisans urbains.",
            },
            {
              id: "danrin",
              label: "École Danrin",
              year: "c. 1675–1685",
              type: "branch",
              detail: "Nishiyama Sōin (1605–1682) fonde l'école Danrin à Osaka en réaction contre la rigidité Teimon. Style improvisé, humour plus populaire et parfois grossier, mélange de registres (<em>zōtai</em>). Rejet des contraintes formelles excessives. L'école Danrin préfigure l'ouverture à la langue parlée et à la vie quotidienne urbaine que Bashō transformera en profondeur philosophique.",
            },
            {
              id: "basho",
              label: "École Shōfū — Bashō",
              year: "1680–1694",
              type: "main",
              detail: "Matsuo Bashō (1644–1694) transforme le <em>hokku</em> comique en forme poétique à part entière, dense et méditative. Son école, le style Shōfū, articule des concepts fondateurs : <em>wabi</em> (beauté dans la pauvreté), <em>sabi</em> (solitude patinée), <em>karumi</em> (légèreté tardive), <em>hosomi</em> (finesse). Le célébrissime « vieux bassin » (<em>furuike ya</em>, 1686) en est la démonstration paradigmatique. Shirane (<em>Traces of Dreams</em>, 1998) analyse comment Bashō construit une poétique du voyage et de la mémoire culturelle fondée sur des lieux-palimpsestes (<em>utamakura</em>).",
              children: [
                {
                  id: "epigones",
                  label: "Épigones post-Bashō",
                  year: "XVIIIe s.",
                  type: "branch",
                  detail: "Après la mort de Bashō (1694), ses disciples directs (Kyorai, Ransetsu, Kikaku) perpétuent le style Shōfū avec une fidélité qui tourne parfois à l'académisme. La fixation canonique de l'œuvre de Bashō (rééditions, commentaires) contribue paradoxalement à une sclérose du genre. Le XVIIIe siècle voit proliférer les maîtres locaux et les recueils d'imitation. C'est contre cet immobilisme que Buson proposera un renouveau par la peinture et la sensorialité.",
                },
                {
                  id: "buson",
                  label: "Yosa Buson (与謝蕪村)",
                  year: "1750–1783",
                  type: "main",
                  detail: "Buson (1716–1783), peintre renommé et poète, renouvelle le haïku par une plasticité visuelle qui contraste avec l'intériorité zen de Bashō. Ses haïkus construisent des tableaux précis, sensoriels, riches en couleurs et en matières. Keene (<em>World Within Walls</em>, 1976) le place au rang de Bashō pour la perfection formelle. Buson réhabilite également l'influence chinoise (<em>haiga</em> et <em>kanshi</em>). Masaoka Shiki le redécouvrira et l'imposera comme modèle contre l'orthodoxie post-Bashō.",
                  children: [
                    {
                      id: "gyodai",
                      label: "Gyōdai, Taigi et continuateurs",
                      year: "fin XVIIIe s.",
                      type: "branch",
                      detail: "Les disciples de Buson — notamment Gyōdai (1732–1792) et Taigi (1709–1771) — développent des voies divergentes : Taigi vers un raffinement aristocratique, Gyōdai vers une naturalité plus populaire. Ces variations documentent comment le style Buson se fragmente et se régionalise dans les cercles de haïku du Japon provincial, sans produire de rupture comparable à celle que représentera la réforme Shiki.",
                    }
                  ]
                },
                {
                  id: "issa",
                  label: "Kobayashi Issa (小林一茶)",
                  year: "1763–1827",
                  type: "main",
                  detail: "Issa (1763–1827), né paysan, compose plus de 20 000 haïkus marqués par une tendresse douloureuse envers les êtres faibles — insectes, grenouilles, enfants — et par une ironie populaire teintée d'autobiographie. Son chef-d'œuvre, <em>Oraga haru</em> (Ma Primavera, 1819), entremêle prose et haïku (<em>haibun</em>) autour de la mort de sa fille Sato. Ueda (<em>Dew on the Grass</em>, 2004) analyse comment Issa intègre le bouddhisme de la Terre Pure dans une esthétique de la compassion radicalement différente du zen de Bashō.",
                  children: [
                    {
                      id: "shiki",
                      label: "Réforme Shiki",
                      year: "1892–1902",
                      type: "main",
                      detail: "Masaoka Shiki (1867–1902) est le réformateur décisif. Il forge le terme « haïku » (distinguant le genre autonome du <em>hokku</em> de renga), fonde la revue <em>Hototogisu</em> (1897) et prône le <em>shasei</em> (croquis sur le vif, emprunté à la peinture réaliste occidentale) contre l'imitation nostalgique de Bashō. Il réhabilite Buson comme modèle alternatif. Beichman (<em>Masaoka Shiki</em>, 2002) montre comment cette réforme s'inscrit dans la modernisation Meiji : le haïku doit devenir un art national rigoureux et transmissible.",
                      children: [
                        {
                          id: "kyoshi",
                          label: "École Kyoshi — Hototogisu",
                          year: "1898–",
                          type: "branch",
                          detail: "Takahama Kyoshi (1874–1959), héritier direct de Shiki à la tête de la revue <em>Hototogisu</em>, choisit la voie conservatrice : fidélité au 5-7-5 et au <em>kigo</em> obligatoire. L'école Kyoshi domine le haïku japonais mainstream pendant la majeure partie du XXe siècle. Elle produit des maîtres comme Mizuhara Shūōshi et Yamaguchi Seishi. Sa longévité institutionnelle (la revue existe toujours) en fait le garant de la tradition canonique.",
                          children: [
                            {
                              id: "classique-jp",
                              label: "Haïku classique japonais contemporain",
                              year: "XXe–XXIe s.",
                              type: "branch",
                              detail: "Le haïku classique japonais contemporain hérite de l'école Kyoshi sa double fidélité au 5-7-5 et au <em>kigo</em>. Des centaines de revues régionales (<em>haiku-shi</em>) structurent la pratique au Japon, avec plusieurs millions de pratiquants. La Haiku International Association (Tokyo, 1989) tente de coordonner les pratiques mondiales. Le débat entre tradition et modernité reste vif : faut-il exiger le <em>kigo</em> dans les haïkus composés en dehors du Japon ?",
                            }
                          ]
                        },
                        {
                          id: "hekigoto",
                          label: "École Hekigotō — vers libre",
                          year: "1910–",
                          type: "branch",
                          detail: "Kawahigashi Hekigotō (1873–1937), autre disciple de Shiki, pousse la réforme jusqu'à l'abandon du 5-7-5 (<em>jiyuritsu haiku</em>) et du <em>kigo</em>. Haïku sans centre fixe, parfois long, jouant sur la discontinuité syntaxique. Cette radicalisation moderniste ouvre la voie aux avant-gardes japonaises des années 1920-30 et, indirectement, au haïku international qui cherchera ses propres équivalents formels.",
                          children: [
                            {
                              id: "seisensui",
                              label: "Ogiwara Seisensui",
                              year: "1911–",
                              type: "branch",
                              detail: "Ogiwara Seisensui (1884–1976), disciple de Hekigotō, fonde la revue <em>Sōun</em> (1911) et théorise un haïku encore plus libre, parfois réduit à une ligne, sans aucune contrainte syllabique ni saisonnière. Sa conception du haïku comme expression directe de l'« expérience-moment » (<em>jikkan</em>) anticipe certaines formulations du haïku Beat américain.",
                              children: [
                                {
                                  id: "santoka",
                                  label: "Taneda Santōka (種田山頭火)",
                                  year: "1926–1940",
                                  type: "branch",
                                  detail: "Santōka (1882–1940), moine mendiant bouddhiste zen, buveur et marcheur, est le poète le plus radical de la lignée Seisensui. Ses haïkus — souvent une ligne unique — naissent de l'errance et de la pauvreté volontaire. « Simplement en marchant / je marche » est sa formule paradigmatique. Redécouvert dans les années 1970, il est aujourd'hui considéré comme une voix majeure, dont l'économie extrême influence les haïkus minimalistes contemporains.",
                                }
                              ]
                            },
                            {
                              id: "diffusion",
                              label: "Diffusion internationale",
                              year: "1905–",
                              type: "hybrid",
                              hybrid: true,
                              detail: "Le haïku quitte le Japon par trois vecteurs principaux : les traductions savantes européennes (Chamberlain, 1902 ; Revon, 1910), les modernistes occidentaux qui le réinterprètent comme technique poétique (Pound, 1913), et les recueils de vulgarisation (Couchoud, 1905-1916 ; Blyth, 1949-52). Chaque réception nationale produit une variation : le kigo est souvent abandonné, le compte syllabique adapté aux phonèmes locaux, l'horizon référentiel transformé.",
                              children: [
                                {
                                  id: "couchoud",
                                  label: "Couchoud — haïku français",
                                  year: "1905–",
                                  type: "branch",
                                  detail: "Paul-Louis Couchoud (1879–1959) publie <em>Au fil de l'eau</em> (1905), premier recueil de haïkus composés en français, puis <em>Sages et poètes d'Asie</em> (1916), première présentation systématique du genre en Europe. Il pose la question fondatrice du haïku francophone : quelle équivalence entre la syllabe japonaise (mora) et la syllabe française ? L'hésitation entre respect du 5-7-5 et liberté formelle traverse tout le haïku francophone jusqu'à aujourd'hui.",
                                  children: [
                                    {
                                      id: "haiku-fr",
                                      label: "Haïku francophone contemporain",
                                      year: "1990–",
                                      type: "branch",
                                      detail: "Le haïku francophone contemporain s'organise autour de revues (<em>Haïku</em>, fondée 2003 ; <em>Ploc ! La lettre du haïku</em>) et de l'Association francophone de haïku. Poètes : Jean Antonini, Dominique Chipot, Gilles Fabre. Question centrale persistante : quel <em>kigo</em> culturellement français ? (châtaignes, Toussaint, TGV, Tour de France…). Le haïku francophone développe une identité propre, distincte du modèle japonais et du modèle anglophone.",
                                    }
                                  ]
                                },
                                {
                                  id: "pound",
                                  label: "Imagisme — Ezra Pound",
                                  year: "1913–",
                                  type: "branch",
                                  detail: "Ezra Pound décrit explicitement son poème « In a Station of the Metro » (<em>Poetry</em>, 1913) — « The apparition of these faces in the crowd / Petals on a wet, black bough » — comme un haïku en anglais. L'Imagisme codifie l'influence du haïku sur le modernisme anglophone : image directe, économie du mot, abandon de l'ornement métrique. Pound relie cette poétique à ses traductions de la poésie chinoise (<em>Cathay</em>, 1915), créant une synthèse sino-japonaise-occidentale.",
                                  children: [
                                    {
                                      id: "beat-haiku",
                                      label: "Haïku Beat — Kerouac, Ginsberg",
                                      year: "1955–",
                                      type: "branch",
                                      detail: "Jack Kerouac compose des haïkus américains tout au long des années 1950 (publiés posthumément dans <em>Book of Haikus</em>, 2003), intégrant bouddhisme zen, improvisation jazz et spontanéité beatnik. Sa définition : « Haiku = not 17 syllables but 3 short lines ». Allen Ginsberg pratique également la forme. Le haïku Beat rompt avec la contrainte syllabique japonaise et redéfinit la brièveté comme intensité d'attention plutôt que comme décompte.",
                                    },
                                    {
                                      id: "hsa",
                                      label: "Haiku Society of America",
                                      year: "1968–",
                                      type: "branch",
                                      detail: "Fondée en 1968 à New York, la Haiku Society of America publie la revue <em>Frogpond</em> et organise des concours annuels. Elle stabilise et rayonne le haïku anglophone dans le monde entier. Elle cristallise aussi le débat permanent : compter les syllabes (anglaises vs japonaises) ? conserver le <em>kigo</em> ? La HSA penche progressivement vers un haïku libre des contraintes syllabiques formelles, privilégiant la qualité de l'image et l'instant capturé.",
                                    }
                                  ]
                                },
                                {
                                  id: "tablada",
                                  label: "Tablada — haïku hispanique",
                                  year: "1919–",
                                  type: "branch",
                                  detail: "José Juan Tablada (1871–1945) publie <em>Un día</em> (1919) au Mexique, premier recueil de haïkus en espagnol, suivi de <em>Li Po y otros poemas</em> (1920). Son naturalisme tropical — lézards, perroquets, orchidées — adapte le <em>kigo</em> japonais à la faune et flore américaines. Influence directe sur Octavio Paz (qui lui consacre un essai) et tout le haïku hispano-américain. Le haïku hispanique se développe ensuite de façon autonome en Argentine, Espagne et Cuba.",
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }, /* fin haiku */


  /* ── FORMES EN CONSTRUCTION ──────────────────────────────────────────── */

  versLibre: {
    status: "stub",
    label: "Vers libre",
  },
  romanPolicier: {
    status: "stub",
    label: "Roman policier",
  },
  dialoguePhilo: {
    status: "stub",
    label: "Dialogue philosophique",
  },
  sonnet: {
    status: "stub",
    label: "Sonnet",
  },
  ghazal: {
    status: "stub",
    label: "Ghazal",
  },
  muwashshah: {
    status: "stub",
    label: "Muwashshah",
  },
  taziyeh: {
    status: "stub",
    label: "Ta'ziyeh",
  },
  
  biji: {
    status: "ready",
    label: "Biji (筆記)",
    desc: "Le biji (« notes au pinceau ») est un genre lettré chinois à forme libre, accueillant anecdotes, érudition, critique littéraire et récits de l'étrange. Né des traditions de xiaoshuo et de zhiguai sous les Wei-Jin, codifié sous les Tang, porté à son apogée sous les Song, il circule dans tout l'espace sinographique : zuihitsu au Japon, p'ilgi / chapki en Corée, bút ký au Viêt Nam. Arbre documenté d'après De Weerdt (2020), Egan (2013), Liu Yeqiu, Gang Liu, Inglis (2006), Chance (1997), Lee (1989).",
    sources: "De Weerdt, « Notebooks (Biji) and Shifting Boundaries of Knowledge » (<em>T'oung Pao</em>, 2020) · Egan, « Shen Kuo Chats with Ink Stone and Brush » (2013) · Inglis, <em>Hong Mai's Record of the Listener</em> (2006) · Liu Yeqiu 劉葉秋, <em>Lidai biji gaishu</em> · Gang Liu, <em>The Poetics of Miscellaneousness</em> (Michigan) · Chance, <em>Formless in Form</em> (1997) · Lee, <em>A Korean Storyteller's Miscellany</em> (1989)",
    root: {
      id: "xiaoshuo",
      label: "Xiaoshuo (小說)",
      year: "IIe s. av. J.-C. – IIe s.",
      type: "root",
      detail: "Le terme <em>xiaoshuo</em> (« menus propos ») apparaît dans le <em>Zhuangzi</em> avec le sens de « petite parole » sans rapport avec la fiction. Sous les Han, Ban Gu (32–92) classe les <em>xiaoshuo</em> dans le <em>Yiwenzhi</em> 藝文志 comme « bavardages de rue et commérages de ruelle » (<em>jietan xiangyu</em> 街談巷語) recueillis par de petits fonctionnaires (<em>baiguan</em> 稗官). Cette catégorie résiduelle de la bibliographie impériale fonde paradoxalement la possibilité d'un genre lettré « mineur » à forme libre. Comme le montre Gang Liu (<em>Poetics of Miscellaneousness</em>), le biji hérite de cette marginalité bibliographique qui lui permet d'accueillir ce que les genres canoniques (jing 經, shi 史) excluent.",
      children: [
        {
          id: "zhiguai",
          label: "Zhiguai (志怪)",
          year: "IIIe–VIe s.",
          type: "main",
          detail: "Les « récits de l'étrange » (<em>zhiguai xiaoshuo</em> 志怪小說) constituent la branche narrative du proto-biji. Le <em>Soushen ji</em> 搜神記 (« À la recherche des esprits ») de Gan Bao (IVe s.) en est le monument : compilation de prodiges, fantômes, métamorphoses, dans une prose concise. Le <em>Shishuo xinyu</em> 世說新語 de Liu Yiqing (Ve s.) en constitue le pendant mondain : anecdotes sur les personnalités de l'élite, jugements de caractère, bons mots. Ces deux œuvres établissent les deux polarités du biji futur : le merveilleux et l'érudition mondaine. Ge Hong (<em>Baopuzi</em> 抱朴子, IVe s.) y ajoute la dimension encyclopédique et alchimique.",
          children: [
            {
              id: "nanchao",
              label: "Biji des Dynasties du Sud",
              year: "420–589",
              type: "main",
              detail: "Le biji émerge comme genre autonome sous les Dynasties du Sud (420–589). La multiplication des formes de prose informelle — notes érudites, anecdotes historiques, observations sur les mœurs — crée un espace littéraire qui ne relève ni des classiques, ni de l'historiographie officielle, ni de la fiction avouée. Liu Yeqiu 劉葉秋 (<em>Lidai biji gaishu</em>) identifie cette période comme le moment de cristallisation du genre, entre <em>zhiguai</em> narratif et érudition philologique.",
              children: [
                {
                  id: "tang-biji",
                  label: "Biji Tang",
                  year: "618–907",
                  type: "main",
                  detail: "Le biji se perfectionne sous les Tang. Le chef-d'œuvre est le <em>Youyang zazu</em> 酉陽雜俎 (« Mélanges de Youyang ») de Duan Chengshi (IXe s.) : encyclopédie du bizarre couvrant géographie, plantes, animaux, croyances populaires, récits surnaturels, usages étrangers. La prose est brillante, le savoir immense. Autres biji Tang majeurs : le <em>Datang xinyu</em> 大唐新語 de Liu Su (anecdotes historiques), le <em>Tang guoshi bu</em> 唐國史補 de Li Zhao (supplément à l'histoire nationale). Sous les Tang, le biji se différencie du <em>chuanqi</em> 傳奇 (« conte merveilleux »), qui est de la fiction avouée, là où le biji garde une prétention au document.",
                  children: [
                    /* ── SONG : apogée, bifurcation en trois branches ── */
                    {
                      id: "song-biji",
                      label: "Biji Song — apogée",
                      year: "960–1279",
                      type: "main",
                      detail: "Le biji atteint son apogée sous les Song. De Weerdt (<em>T'oung Pao</em>, 2020) montre que l'essor de l'imprimerie, la croissance des bibliothèques privées et le système des examens créent un lectorat lettré partagé qui a besoin de genres souples pour noter ce que les genres canoniques ne peuvent accueillir. Le terme « biji » est pour la première fois utilisé comme désignation générique par Song Qi 宋祁 (998–1061), dont le <em>Biji</em> en 3 juan est le premier livre portant ce titre. Trois branches majeures se développent simultanément.",
                      children: [
                        {
                          id: "mengxi",
                          label: "Mengxi bitan (夢溪筆談)",
                          year: "c. 1088",
                          type: "branch",
                          detail: "Le <em>Mengxi bitan</em> (« Discussions au pinceau du ruisseau des songes ») de Shen Kuo 沈括 (1031–1095) est le biji le plus célèbre. 26 juan couvrant politique, culture, sciences et techniques. Première mention de l'imprimerie à caractères mobiles (Bi Sheng), première description de la boussole magnétique, explication des fossiles. Ronald Egan (2013) analyse comment Shen Kuo utilise la forme biji pour consigner des observations empiriques inclassables dans les genres savants établis — la juxtaposition d'éléments paradoxaux constitue une méthode de pensée. Fu Daiwie (<em>Chinese Science</em>, 1993) montre que la taxonomie interne du <em>Mengxi</em> (17 rubriques) reflète les sous-cultures lettrées des Song du Nord. De Weerdt souligne que ce chef-d'œuvre requiert une préface apologétique précisément parce que son contenu — anecdotes techniques, curiosités naturelles — n'a pas de place dans les genres canoniques.",
                          children: [
                            {
                              id: "biji-savant",
                              label: "Biji savant / philologique",
                              year: "XIe–XIIIe s.",
                              type: "branch",
                              detail: "Branche érudite du biji Song, orientée vers la philologie, la critique textuelle et les « petites études » (<em>xiaoxue</em> 小學). Exemples majeurs : le <em>Xuelin</em> 學林 de Wang Guanguo (classiques et phonétique), le <em>Nenggaizhai manlu</em> 能改齋漫錄 de Wu Zeng, le <em>Yeke congshu</em> 野客叢書 de Wang Mao. Peter K. Bol (<em>JSYS</em> 25, 1995) montre, à partir du <em>Mingtao zashi</em> de Zhang Lei, comment le biji sert de véhicule à l'histoire intellectuelle des Song. Cette branche savante se prolonge sous les Qing avec l'école de l'« étude par preuves » (<em>kaozheng</em>) : Gu Yanwu (<em>Rizhilu</em> 日知錄), Zhao Yi (<em>Gaiyu congkao</em>), Qian Daxin (<em>Shijiazhai yangxin lu</em>)."
                            }
                          ]
                        },
                        {
                          id: "yijian",
                          label: "Yijianzhi (夷堅志)",
                          year: "1161–c. 1198",
                          type: "branch",
                          detail: "Le <em>Yijianzhi</em> (« Récits de Yi Jian ») de Hong Mai 洪邁 (1123–1202) est la plus grande collection de récits de l'étrange produite sous les Song — environ 2 700 récits en 420 juan dans sa forme la plus complète. Alister Inglis (<em>SUNY Press</em>, 2006) montre que Hong Mai collectait ses récits auprès d'informateurs de toutes les classes sociales, créant un « réservoir narratif » qui irrigue la fiction vernaculaire ultérieure. Inglis définit le biji comme « catégorie résiduelle : une étiquette attachée aux œuvres non par ce qu'elles étaient, mais par ce qu'elles n'étaient pas ». Le <em>Rongzhai suibi</em> 容齋隨筆 du même Hong Mai mêle érudition textuelle et anecdotes — démontrant la polyvalence d'un même auteur dans les deux pôles du biji.",
                          children: [
                            {
                              id: "biji-xiaoshuo",
                              label: "Biji xiaoshuo (筆記小說)",
                              year: "XIIIe–XIXe s.",
                              type: "branch",
                              detail: "Le terme <em>biji xiaoshuo</em> apparaît pour la première fois chez Shi Shengzu 史繩祖 (fl. 1241) dans le <em>Xuezhai zhanbi</em> 學齋占畢. Il désigne la branche narrative et fictionnelle du biji, distincte du biji savant. Sous les Ming et les Qing, cette branche produit des chefs-d'œuvre : le <em>Liaozhai zhiyi</em> 聊齋志異 de Pu Songling (c. 1679–1710), 500 récits fantastiques d'une perfection stylistique rare ; le <em>Zi bu yu</em> 子不語 de Yuan Mei. Le biji xiaoshuo sert de matrice narrative au roman vernaculaire : des récits du <em>Yijianzhi</em> sont repris dans les <em>Erke pai'an jingqi</em> 二刻拍案驚奇 de la fin des Ming.",
                              children: [
                                {
                                  id: "liaozhai",
                                  label: "Liaozhai zhiyi (聊齋志異)",
                                  year: "c. 1679–1710",
                                  type: "branch",
                                  detail: "Le <em>Liaozhai zhiyi</em> (« Contes extraordinaires du studio Liao ») de Pu Songling 蒲松齡 (1640–1715) porte le biji xiaoshuo à son sommet littéraire. Environ 500 récits mettant en scène renardes-fées, fantômes et lettrés — sous la surface surnaturelle, une critique acerbe de la société et des examens impériaux. Stylistiquement, Pu Songling revient à la prose classique (guwen) tout en intégrant des éléments vernaculaires. Œuvre majeure de la littérature chinoise, traduite dans de nombreuses langues."
                                }
                              ]
                            }
                          ]
                        },
                        {
                          id: "memoires-song",
                          label: "Biji mémorialiste / historique",
                          year: "XIe–XIIIe s.",
                          type: "branch",
                          detail: "Troisième branche du biji Song : le biji comme mémoire historique et témoignage de cour. Ouyang Xiu 歐陽修 (<em>Guitian lu</em> 歸田錄, « Notes de la retraite aux champs »), Wang Pizhi (<em>Shengshui yantan lu</em> 澠水燕談錄), Ye Mengde (<em>Shilin yanyu</em> 石林燕語). De Weerdt montre comment ces biji mémorialistes consignent l'expérience politique et administrative des lettrés-fonctionnaires dans une forme que l'historiographie officielle ne permet pas — « il n'était pas inapproprié pour les lettrés de raconter des anecdotes de cour ; la difficulté résidait dans le fait de coucher ces sujets par écrit ». Le <em>Dongjing menghua lu</em> 東京夢華錄 de Meng Yuanlao (1147) constitue un cas particulier : mémoire nostalgique de la capitale Kaifeng avant sa chute en 1127.",
                          children: [
                            {
                              id: "yuewu",
                              label: "Yuewu caotang biji (閱微草堂筆記)",
                              year: "1789–1798",
                              type: "branch",
                              detail: "Le <em>Yuewu caotang biji</em> (« Notes de la chaumière des observations minutieuses ») de Ji Yun 紀昀 (1724–1805), Grand Secrétaire et directeur du <em>Siku quanshu</em>. 24 juan composés entre 1789 et 1798. Récits brefs mêlant surnaturel et morale confucéenne, dans un style classique volontairement opposé au foisonnement du <em>Liaozhai</em>. Dernière grande œuvre du biji classique. Ji Yun revendique explicitement une écriture plus sobre et « véridique » que celle de Pu Songling."
                            }
                          ]
                        }
                      ]
                    },
                    /* ── Circulation hors de Chine ── */
                    {
                      id: "zuihitsu",
                      label: "Zuihitsu (随筆) — Japon",
                      year: "c. 1000–",
                      type: "hybrid",
                      hybrid: true,
                      detail: "Le <em>zuihitsu</em> (« au fil du pinceau », 随筆, même étymon que <em>suibi</em> en chinois) est l'adaptation japonaise du biji. Le terme entre dans l'usage littéraire japonais à l'époque Muromachi (XVe s.), mais le genre est rétroprojecté sur le <em>Makura no sōshi</em> (Notes de chevet) de Sei Shōnagon (c. 1000). Linda H. Chance (<em>Formless in Form</em>, Stanford UP, 1997) montre comment le zuihitsu japonais s'écarte du modèle chinois par sa dimension esthétique et intime : là où le biji Song reste encyclopédique et philologique, le zuihitsu japonais privilégie l'observation sensorielle et le <em>mono no aware</em> (« sensibilité à l'éphémère »). Le <em>Hōjōki</em> 方丈記 de Kamo no Chōmei (1212) et le <em>Tsurezuregusa</em> 徒然草 de Yoshida Kenkō (c. 1330), avec leurs méditations bouddhiques sur l'impermanence, constituent les sommets du genre. Steven D. Carter (<em>Columbia Anthology of Japanese Essays</em>, 2014) recense plus de cent zuihitsu du Xe au XXIe siècle.",
                      children: [
                        {
                          id: "makura",
                          label: "Makura no sōshi (枕草子)",
                          year: "c. 1000",
                          type: "branch",
                          detail: "Les <em>Notes de chevet</em> de Sei Shōnagon (c. 966–1025), dame de cour de l'impératrice Teishi, sont considérées comme le premier zuihitsu. Listes (« choses qui font battre le cœur », « choses détestables »), anecdotes de cour, observations sur la nature, jugements esthétiques — dans une prose en <em>kana</em> d'une vivacité sans précédent. Le genre se développe ensuite à Kamakura avec une coloration bouddhique."
                        },
                        {
                          id: "tsurezure",
                          label: "Tsurezuregusa (徒然草)",
                          year: "c. 1330",
                          type: "branch",
                          detail: "Les <em>Heures oisives</em> de Yoshida Kenkō (c. 1283–1350), moine bouddhiste, constituent le second sommet du zuihitsu classique. 243 sections de longueur variable, mêlant méditations sur l'impermanence, anecdotes, conseils pratiques et jugements esthétiques. Chance (1997) montre comment la « rhétorique de la prose fragmentaire » chez Kenkō fait de la discontinuité même une forme d'expression philosophique."
                        },
                        {
                          id: "edo-zuihitsu",
                          label: "Zuihitsu Edo",
                          year: "XVIIe–XIXe s.",
                          type: "branch",
                          detail: "Le zuihitsu connaît un nouvel essor sous le shogunat Tokugawa. Des lettrés de premier plan — Motoori Norinaga 本居宣長 (<em>Tama no ogushi</em>, 1796, critique du <em>Genji</em> au nom du <em>mono no aware</em>), Matsudaira Sadanobu 松平定信, Yokoi Yayū — pratiquent le genre pour des réflexions érudites, personnelles et sociales. Le zuihitsu Edo mêle kokugaku (études nationales), confucianisme et observation de la vie quotidienne.",
                          children: [
                            {
                              id: "zuihitsu-moderne",
                              label: "Zuihitsu moderne et contemporain",
                              year: "XXe–XXIe s.",
                              type: "branch",
                              detail: "À l'ère Meiji et au-delà, le zuihitsu s'hybride avec l'essai occidental et la chronique journalistique. Natsume Sōseki (<em>Yume jūya</em>, « Dix nuits de rêve », 1908) en propose une version moderniste et onirique. Au XXIe siècle, le zuihitsu est réapproprié hors du Japon par des poètes asio-américains comme Kimiko Hahn (<em>The Narrow Road to the Interior</em>, 2006), qui en font une forme hybride entre poème en prose, essai et fragment. L'Asian American Writers' Workshop publie en 2022 un « Zuihitsu Notebook » dans <em>The Margins</em>."
                            }
                          ]
                        }
                      ]
                    },
                    {
                      id: "korean-chapki",
                      label: "P'ilgi / Chapki (筆記 / 雜記) — Corée",
                      year: "XIIIe s.–",
                      type: "hybrid",
                      hybrid: true,
                      detail: "En Corée, le genre est connu sous les noms de <em>p'ilgi</em> 筆記 ou <em>chapki</em> 雜記. La première œuvre notable est le <em>P'ahan chip</em> 破閑集 (« Notes pour rompre l'oisiveté ») de Yi Inno (1260), sous le Koryŏ — qui inaugure une longue tradition. Sous le Chosŏn, le genre fleurit : le <em>P'aegwan chapki</em> 稗官雜記 de Ŏ Sukkwŏn (fl. 1525–1554) et le <em>Yongjae ch'onghwa</em> 慵齋叢話 de Sŏng Hyŏn en sont les exemples les plus connus. Peter H. Lee (Princeton UP, 1989) identifie les thèmes récurrents : critique poétique, relations avec la Chine, portraits individuels, bouddhisme, vignettes autobiographiques. Comme en Chine, la miscellanée coréenne offre aux historiens des informations absentes des sources officielles (dynastiques, diplomatiques). Lee montre que la chapki est « mieux adaptée à la présentation du moi » que les genres canoniques. L'<em>Encyclopédie des historiographies</em> (Inalco, 2020) note que la <em>Taedong yasŭng</em> 大東野乘 (1909) rassemble de nombreuses miscellanées du Chosŏn.",
                      children: [
                        {
                          id: "pahan",
                          label: "P'ahan chip (破閑集)",
                          year: "1260",
                          type: "branch",
                          detail: "Le <em>P'ahan chip</em> (« Notes pour rompre l'oisiveté ») de Yi Inno (Yi Illo), sous le Koryŏ, inaugure le genre en Corée. Outre la critique poétique, il contient des notes autobiographiques en forme de journal, des portraits d'amis et des observations sur les mœurs contemporaines."
                        },
                        {
                          id: "paegwan",
                          label: "P'aegwan chapki (稗官雜記)",
                          year: "c. 1525–1554",
                          type: "branch",
                          detail: "Le <em>P'aegwan chapki</em> (« Miscellanée de l'anecdotier ») de Ŏ Sukkwŏn, traduit par Peter H. Lee (Princeton UP, 1989). Ŏ s'appelle lui-même <em>p'aegwan</em> (« petit fonctionnaire qui note les bavardages ») par modestie lettrée — exactement comme Ban Gu classait les <em>xiaoshuo</em> chinois. Lee montre que ce geste d'auto-dépréciation est constitutif du genre en Asie orientale."
                        }
                      ]
                    },
                    {
                      id: "viet-butky",
                      label: "Tùy bút / Bút ký — Viêt Nam",
                      year: "tradition lettrée",
                      type: "hybrid",
                      hybrid: true,
                      detail: "Au Viêt Nam, les lettrés confucéens compilent également des miscellanées en chinois classique, connues sous les noms de <em>tùy bút</em> 隨筆 (« au fil du pinceau ») ou <em>bút ký</em> 筆記 (« notes au pinceau »). Ce domaine reste peu étudié en langues occidentales. L'<em>Encyclopédie des historiographies</em> (Inalco, 2020) signale cette tradition sans la développer. C'est un angle mort de la recherche comparative en littérature est-asiatique."
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }, /* fin biji */
  romanChoral: {
    status: "stub",
    label: "Roman polyphonique choral",
  },
  phraseLongue: {
    status: "stub",
    label: "Phrase longue en prose",
  },
  poemeProletarien: {
    status: "stub",
    label: "Poème épique prolétarien",
  },

}; /* fin TREES */
