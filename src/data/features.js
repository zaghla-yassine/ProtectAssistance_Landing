export const featureCatalog = [
  {
    id: 1,
    slug: "anti-enlevement",
    title: "Anti-enlevement",
    icon: "bi-shield-lock-fill",
    image: "/image/feature-1.png",
    shortDescription:
      "Alerte automatique si l'enfant depasse une vitesse configuree, plus options d'urgence discretes.",
    heroDescription:
      "Les parents configurent un seuil de vitesse. Si l'enfant depasse ce seuil, une alerte est envoyee immediatement aux proches avec la position GPS.",
    detailedExplanation:
      "Cette fonctionnalite aide les familles a reagir plus vite face a un risque d'enlevement. Le parent choisit une vitesse limite (par exemple 70 km/h). Si le smartphone detecte un deplacement anormalement rapide, l'application declenche une alerte automatique et partage le contexte de securite.",
    howItWorks: [
      "Le parent configure une vitesse de declenchement dans l'application.",
      "L'application surveille les variations de vitesse en continu.",
      "Si le seuil est depasse, les proches recoivent une alerte immediate.",
      "L'enfant peut aussi declencher l'alerte via secousse, mode panique discret ou autres moyens d'urgence.",
    ],
    whyUse: [
      "Reagir rapidement en cas de deplacement suspect.",
      "Renforcer la securite des enfants lors des trajets.",
      "Donner une visibilite immediate aux proches.",
    ],
  },
  {
    id: 2,
    slug: "phrase-secrete",
    title: "Phrase secrete",
    icon: "bi-chat-left-quote-fill",
    image: "/image/feature-2.png",
    shortDescription:
      "Une phrase codee permet de declencher une alerte silencieuse pendant un appel ou via reconnaissance.",
    heroDescription:
      "Le parent definit une phrase de securite. Lorsqu'elle est prononcee, l'application envoie une alerte automatique avec geolocalisation.",
    detailedExplanation:
      "La phrase secrete permet de demander de l'aide sans attirer l'attention. Exemple: 'Le dossier est bleu'. Si cette phrase est reconnue pendant un appel ou dans l'application, une alerte est transmise automatiquement avec la position GPS.",
    howItWorks: [
      "Le parent enregistre une phrase secrete dans les parametres.",
      "La phrase est reconnue pendant un appel ou un contexte configure.",
      "L'application lance l'alerte sans action visible supplementaire.",
      "Les contacts d'urgence recoivent la position en temps reel.",
    ],
    whyUse: [
      "Alerter discretement sans escalation du risque.",
      "Conserver un moyen de secours meme sous contrainte.",
      "Informer rapidement la famille avec une preuve de contexte.",
    ],
  },
  {
    id: 3,
    slug: "jet-du-telephone",
    title: "Jet du telephone",
    icon: "bi-exclamation-triangle-fill",
    image: "/image/feature-3.png",
    shortDescription:
      "Detection d'un mouvement violent de type jet et envoi immediat d'une alerte.",
    heroDescription:
      "Si un mouvement anormal indique un jet violent du smartphone, l'application considere un risque et declenche une alerte.",
    detailedExplanation:
      "Les capteurs de mouvement evaluent l'intensite et la signature d'un jet. Lorsqu'un comportement critique est detecte, l'application lance un protocole d'urgence afin de prevenir les proches sans attendre une action manuelle.",
    howItWorks: [
      "Analyse des accelerations brusques du smartphone.",
      "Detection d'un schema de mouvement coherent avec un jet.",
      "Declenchement automatique d'une alerte immediate.",
      "Partage de la position et du contexte avec les contacts.",
    ],
    whyUse: [
      "Utile quand l'utilisateur ne peut plus interagir avec son ecran.",
      "Detection rapide des situations de danger physique.",
      "Reduction du delai entre incident et assistance.",
    ],
  },
  {
    id: 4,
    slug: "mode-panique-discret",
    title: "Mode panique discret",
    icon: "bi-eye-slash-fill",
    image: "/image/feature-4.png",
    shortDescription:
      "Appui discret de 3 secondes pour envoyer une alerte silencieuse.",
    heroDescription:
      "L'utilisateur peut declencher une alerte silencieuse depuis sa poche, sans attirer l'attention.",
    detailedExplanation:
      "Le mode panique discret est concu pour les moments ou la discretion est essentielle. Un appui long de 3 secondes suffit pour activer l'alerte, sans son ni signal visible, afin de proteger l'utilisateur face a un agresseur.",
    howItWorks: [
      "L'utilisateur maintient l'action de panique pendant 3 secondes.",
      "Le systeme confirme le geste sans afficher d'alerte visible.",
      "Les proches sont notifies immediatement.",
      "La position GPS est partagee automatiquement.",
    ],
    whyUse: [
      "Declenchement discret en environnement hostile.",
      "Simple a memoriser et rapide a executer.",
      "Permet de demander de l'aide sans se faire reperer.",
    ],
  },
  {
    id: 5,
    slug: "secousse-du-telephone",
    title: "Secousse du telephone",
    icon: "bi-phone-vibrate-fill",
    image: "/image/feature-5.png",
    shortDescription:
      "Secouer le telephone 5 fois envoie une alerte immediate avec position GPS.",
    heroDescription:
      "Un geste simple et rapide: 5 secousses successives declenchent l'alerte sans navigation dans l'interface.",
    detailedExplanation:
      "Cette fonctionnalite est pensee pour les situations d'urgence ou le temps manque. En secouant le smartphone cinq fois rapidement, l'application active instantanement l'alerte et transmet la position aux contacts choisis.",
    howItWorks: [
      "Le systeme detecte cinq secousses rapides.",
      "Le schema est valide pour eviter les faux positifs.",
      "L'alerte est envoyee en quelques secondes.",
      "Les proches recoivent la geolocalisation.",
    ],
    whyUse: [
      "Aucune recherche de bouton en situation de stress.",
      "Compatible avec des usages en mouvement.",
      "Declenchement quasi instantane.",
    ],
  },
  {
    id: 6,
    slug: "alarme-maison",
    title: "Alarme Maison",
    icon: "bi-house-door-fill",
    image: "/image/feature-6.png",
    shortDescription:
      "Protection du domicile avec detection multi-signaux et declenchement immediat.",
    heroDescription:
      "Sirenes, phrase secrete, mots de detresse ou gestes d'urgence: plusieurs signaux peuvent activer l'alerte maison.",
    detailedExplanation:
      "Alarme Maison centralise plusieurs methodes de detection pour proteger le domicile. La fonctionnalite reagit aux signaux sonores, aux gestes d'urgence et aux mots de detresse ('Au secours', 'A l'aide') afin de prevenir rapidement la famille.",
    howItWorks: [
      "Activation du mode maison dans l'application.",
      "Ecoute des signaux critiques (sirene incendie, mots de detresse).",
      "Prise en compte des gestes d'urgence (jet, secousse, panique discret, phrase secrete).",
      "Envoi automatique de l'alerte aux proches en cas de detection.",
    ],
    whyUse: [
      "Protection renforcee de la maison.",
      "Plusieurs mecanismes couvrent differents scenarios.",
      "Alerte immediate meme si l'utilisateur ne peut pas appeler.",
    ],
  },
  {
    id: 7,
    slug: "accident-de-voiture",
    title: "Accident de voiture",
    icon: "bi-car-front-fill",
    image: "/image/feature-7.png",
    shortDescription:
      "Detection automatique de situations compatibles avec un accident de voiture.",
    heroDescription:
      "Le systeme analyse les chocs et mots de detresse pour notifier rapidement les contacts d'urgence.",
    detailedExplanation:
      "En cas de choc ou d'evenement brusque, cette fonctionnalite peut detecter des signaux associes a un accident. Les mots de detresse comme 'Au secours' ou 'A l'aide' renforcent la detection afin de declencher une alerte aux proches.",
    howItWorks: [
      "Detection d'un jet ou impact violent du smartphone.",
      "Analyse contextuelle de mots de detresse.",
      "Validation des signaux critiques.",
      "Notification immediate des contacts d'urgence.",
    ],
    whyUse: [
      "Utile quand la victime ne peut pas appeler.",
      "Reduction du temps de reaction des proches.",
      "Amelioration de la prise en charge apres incident.",
    ],
  },
  {
    id: 8,
    slug: "chute-senior",
    title: "Chute Senior",
    icon: "bi-person-wheelchair",
    image: "/image/feature-8.png",
    shortDescription:
      "Alerte vocale pour les seniors via detection de mots de detresse.",
    heroDescription:
      "Concue pour les personnes agees, la fonctionnalite previens la famille en cas d'appel a l'aide.",
    detailedExplanation:
      "Chute Senior vise a proteger les personnes vulnerables. Si l'application detecte des mots comme 'Au secours' ou 'A l'aide', elle envoie une alerte immediate afin que la famille puisse intervenir rapidement.",
    howItWorks: [
      "Le mode senior est active dans l'application.",
      "Le systeme surveille les mots de detresse configures.",
      "En cas de detection, une alerte est emise automatiquement.",
      "Les proches recoivent la localisation et le contexte.",
    ],
    whyUse: [
      "Apporte une couche de securite au quotidien.",
      "Rassure la famille meme a distance.",
      "Facilite une intervention rapide en cas de chute.",
    ],
  },
  {
    id: 9,
    slug: "zone-alzheimer",
    title: "Zone Alzheimer",
    icon: "bi-geo-alt-fill",
    image: "/image/feature-9.png",
    shortDescription:
      "Alerte automatique si une personne sort d'une zone GPS securisee.",
    heroDescription:
      "Les proches definissent un point et un rayon de securite. Toute sortie de zone declenche une alerte avec position.",
    detailedExplanation:
      "Zone Alzheimer permet de definir un perimetre de securite autour d'un lieu de reference. Si la personne suivie sort du rayon configure (ex: 50 metres), les proches sont prevenus automatiquement avec sa position en temps reel.",
    howItWorks: [
      "Selection d'un point GPS sur la carte.",
      "Definition d'un rayon de securite.",
      "Surveillance continue des entrees/sorties de zone.",
      "Alerte immediate avec geolocalisation en cas de depassement.",
    ],
    whyUse: [
      "Particulierement adapte a l'accompagnement Alzheimer.",
      "Aide a prevenir l'errance et la desorientation.",
      "Donne une meilleure reactivite aux aidants.",
    ],
  },
];

export const featureMap = new Map(
  featureCatalog.map((feature) => [feature.slug, feature]),
);
