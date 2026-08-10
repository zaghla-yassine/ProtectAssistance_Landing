const featureImageBasePath = `${import.meta.env.BASE_URL}image`;

export const featureCatalog = [
  {
    id: 1,
    slug: "anti-enlevement",
    title: "Anti-enlèvement",
    icon: "bi-shield-lock-fill",
    image: `${featureImageBasePath}/feature-1.png`,
    shortDescription:
      "Alerte automatique si l'enfant dépasse une vitesse configurée, plus options d'urgence discrètes.",
    heroDescription:
      "Les parents configurent un seuil de vitesse. Si l'enfant dépasse ce seuil, une alerte est envoyée immédiatement aux proches avec la position GPS.",
    detailedExplanation:
      "Cette fonctionnalité aide les familles à réagir plus vite face à un risque d'enlèvement. Le parent choisit une vitesse limite (par exemple 70 km/h). Si le smartphone détecte un déplacement anormalement rapide, l'application déclenche une alerte automatique et partage le contexte de sécurité.",
    howItWorks: [
      "Le parent configure une vitesse de déclenchement dans l'application.",
      "L'application surveille les variations de vitesse en continu.",
      "Si le seuil est dépassé, les proches reçoivent une alerte immédiate.",
      "L'enfant peut aussi déclencher l'alerte via secousse, mode panique discret ou autres moyens d'urgence.",
    ],
    whyUse: [
      "Réagir rapidement en cas de déplacement suspect.",
      "Renforcer la sécurité des enfants lors des trajets.",
      "Donner une visibilité immédiate aux proches.",
    ],
  },
  {
    id: 2,
    slug: "phrase-secrete",
    title: "Phrase secrète",
    icon: "bi-chat-left-quote-fill",
    image: `${featureImageBasePath}/feature-2.png`,
    shortDescription:
      "Une phrase codée permet de déclencher une alerte silencieuse pendant un appel ou via reconnaissance.",
    heroDescription:
      "Le parent définit une phrase de sécurité. Lorsqu'elle est prononcée, l'application envoie une alerte automatique avec géolocalisation.",
    detailedExplanation:
      "La phrase secrète permet de demander de l'aide sans attirer l'attention. Exemple : 'Le dossier est bleu'. Si cette phrase est reconnue, une alerte est transmise automatiquement avec la position GPS.",
    howItWorks: [
      "Le parent enregistre une phrase secrète dans les paramètres.",
      "La phrase est reconnue.",
      "L'application lance l'alerte sans action visible supplémentaire.",
      "Les contacts d'urgence reçoivent la position en temps réel.",
    ],
    whyUse: [
      "Alerter discrètement sans escalade du risque.",
      "Conserver un moyen de secours même sous contrainte.",
      "Informer rapidement la famille avec une preuve de contexte.",
    ],
  },
  {
    id: 3,
    slug: "jet-du-telephone",
    title: "Jet du téléphone",
    icon: "bi-exclamation-triangle-fill",
    image: `${featureImageBasePath}/feature-3.png`,
    shortDescription:
      "Détection d'un mouvement violent de type jet et envoi immédiat d'une alerte.",
    heroDescription:
      "Si un mouvement anormal indique un jet violent du smartphone, l'application considère un risque et déclenche une alerte.",
    detailedExplanation:
      "Les capteurs de mouvement évaluent l'intensité et la signature d'un jet. Lorsqu'un comportement critique est détecté, l'application lance un protocole d'urgence afin de prévenir les proches sans attendre une action manuelle.",
    howItWorks: [
      "Analyse des accélérations brusques du smartphone.",
      "Détection d'un schéma de mouvement cohérent avec un jet.",
      "Déclenchement automatique d'une alerte immédiate.",
      "Partage de la position et du contexte avec les contacts.",
    ],
    whyUse: [
      "Utile quand l'utilisateur ne peut plus interagir avec son écran.",
      "Détection rapide des situations de danger physique.",
      "Réduction du délai entre incident et assistance.",
    ],
  },
  {
    id: 4,
    slug: "mode-panique-discret",
    title: "Mode panique discret",
    icon: "bi-eye-slash-fill",
    image: `${featureImageBasePath}/feature-4.png`,
    shortDescription:
      "Appui discret de 3 secondes pour envoyer une alerte silencieuse.",
    heroDescription:
      "L'utilisateur peut déclencher une alerte silencieuse depuis sa poche, sans attirer l'attention.",
    detailedExplanation:
      "Le mode panique discret est conçu pour les moments où la discrétion est essentielle. Un appui long de 3 secondes suffit pour activer l'alerte, sans son ni signal visible, afin de protéger l'utilisateur face à un agresseur.",
    howItWorks: [
      "L'utilisateur maintient l'action de panique pendant 3 secondes.",
      "Le système confirme le geste sans afficher d'alerte visible.",
      "Les proches sont notifiés immédiatement.",
      "La position GPS est partagée automatiquement.",
    ],
    whyUse: [
      "Déclenchement discret en environnement hostile.",
      "Simple à mémoriser et rapide à exécuter.",
      "Permet de demander de l'aide sans se faire repérer.",
    ],
  },
  {
    id: 5,
    slug: "secousse-du-telephone",
    title: "Secousse du téléphone",
    icon: "bi-phone-vibrate-fill",
    image: `${featureImageBasePath}/feature-5.png`,
    shortDescription:
      "Secouer le téléphone 5 fois envoie une alerte immédiate avec position GPS.",
    heroDescription:
      "Un geste simple et rapide : 5 secousses successives déclenchent l'alerte sans navigation dans l'interface.",
    detailedExplanation:
      "Cette fonctionnalité est pensée pour les situations d'urgence où le temps manque. En secouant le smartphone cinq fois rapidement, l'application active instantanément l'alerte et transmet la position aux contacts choisis.",
    howItWorks: [
      "Le système détecte cinq secousses rapides.",
      "Le schéma est validé pour éviter les faux positifs.",
      "L'alerte est envoyée en quelques secondes.",
      "Les proches reçoivent la géolocalisation.",
    ],
    whyUse: [
      "Aucune recherche de bouton en situation de stress.",
      "Compatible avec des usages en mouvement.",
      "Déclenchement quasi instantané.",
    ],
  },
  {
    id: 6,
    slug: "alarme-maison",
    title: "Alarme Maison",
    icon: "bi-house-door-fill",
    image: `${featureImageBasePath}/feature-6.png`,
    shortDescription:
      "Protection du domicile avec détection multi-signaux et déclenchement immédiat.",
    heroDescription:
      "Sirènes, phrase secrète, mots de détresse ou gestes d'urgence : plusieurs signaux peuvent activer l'alerte maison.",
    detailedExplanation:
      "Alarme Maison centralise plusieurs méthodes de détection pour renforcer la protection du domicile. La fonctionnalité peut réagir aux signaux sonores, aux gestes d’urgence et aux mots de détresse tels que « Au secours » ou « À l’aide », afin de prévenir rapidement la famille. Elle intègre également des moyens de déclenchement discrets et rapides : une simple pression sur l’écran peut activer un mode panique en arrière-plan, permettant de lancer une alerte sans attirer l’attention. L’alerte peut également être déclenchée en cas de jet du téléphone ou lorsque celui-ci est secoué de manière répétée. Enfin, la détection du déclenchement d’une alarme incendie permet également de transmettre rapidement une alerte à la famille afin de favoriser une intervention dans les meilleurs délais.",
    howItWorks: [
      "Activation du mode maison dans l'application.",
      "Écoute des signaux critiques (sirène incendie, mots de détresse).",
      "Prise en compte des gestes d'urgence (jet, secousse, panique discret, phrase secrète).",
      "Envoi automatique de l'alerte aux proches en cas de détection.",
    ],
    whyUse: [
      "Protection renforcée de la maison.",
      "Plusieurs mécanismes couvrent différents scénarios.",
      "Alerte immédiate même si l'utilisateur ne peut pas appeler.",
    ],
  },
  {
    id: 7,
    slug: "accident-de-voiture",
    title: "Accident de voiture",
    icon: "bi-car-front-fill",
    image: `${featureImageBasePath}/feature-7.png`,
    shortDescription:
      "Détection automatique de situations compatibles avec un accident de voiture.",
    heroDescription:
      "Le système analyse les chocs et mots de détresse pour notifier rapidement les contacts d'urgence.",
    detailedExplanation:
      "En cas de choc ou d'événement brusque, cette fonctionnalité peut détecter des signaux associés à un accident. Les mots de détresse comme 'Au secours' ou 'À l'aide' renforcent la détection afin de déclencher une alerte aux proches.",
    howItWorks: [
      "Détection d'un jet ou impact violent du smartphone.",
      "Analyse contextuelle de mots de détresse.",
      "Validation des signaux critiques.",
      "Notification immédiate des contacts d'urgence.",
    ],
    whyUse: [
      "Utile quand la victime ne peut pas appeler.",
      "Réduction du temps de réaction des proches.",
      "Amélioration de la prise en charge après incident.",
    ],
  },
  {
    id: 8,
    slug: "chute-senior",
    title: "Chute Senior",
    icon: "bi-person-wheelchair",
    image: `${featureImageBasePath}/feature-8.png`,
    shortDescription:
      "Alerte vocale pour les seniors via détection de mots de détresse.",
    heroDescription:
      "Conçue pour les personnes âgées, la fonctionnalité prévient la famille en cas d'appel à l'aide.",
    detailedExplanation:
      "Chute Senior vise à protéger les personnes vulnérables. Si l’application détecte des mots comme « Au secours » ou « À l’aide », ou détecte un choc pouvant indiquer une chute, elle déclenche automatiquement une alerte afin que la famille puisse intervenir rapidement.",
    howItWorks: [
      "Le mode senior est activé dans l'application.",
      "Le système surveille les mots de détresse configurés.",
      "En cas de détection, une alerte est émise automatiquement.",
      "Les proches reçoivent la localisation et le contexte.",
    ],
    whyUse: [
      "Apporte une couche de sécurité au quotidien.",
      "Rassure la famille même à distance.",
      "Facilite une intervention rapide en cas de chute.",
    ],
  },
  {
    id: 9,
    slug: "zone-alzheimer",
    title: "Zone Alzheimer",
    icon: "bi-geo-alt-fill",
    image: `${featureImageBasePath}/feature-9.png`,
    shortDescription:
      "Alerte automatique si une personne sort d'une zone GPS sécurisée.",
    heroDescription:
      "Les proches définissent un point et un rayon de sécurité. Toute sortie de zone déclenche une alerte avec position.",
    detailedExplanation:
      "Zone Alzheimer permet de définir un périmètre de sécurité autour d'un lieu de référence. Si la personne suivie sort du rayon configuré (ex : 50 mètres), les proches sont prévenus automatiquement avec sa position en temps réel.",
    howItWorks: [
      "Sélection d'un point GPS sur la carte.",
      "Définition d'un rayon de sécurité.",
      "Surveillance continue des entrées/sorties de zone.",
      "Alerte immédiate avec géolocalisation en cas de dépassement.",
    ],
    whyUse: [
      "Particulièrement adaptée à l'accompagnement Alzheimer.",
      "Aide à prévenir l'errance et la désorientation.",
      "Donne une meilleure réactivité aux aidants.",
    ],
  },
];

export const featureMap = new Map(
  featureCatalog.map((feature) => [feature.slug, feature]),
);
