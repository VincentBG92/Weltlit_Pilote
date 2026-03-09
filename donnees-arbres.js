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
    status: "stub",
    label: "Biji",
  },
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
