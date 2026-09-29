/* =========================================================
   Privilege_Travel_Agency — script.js
   ========================================================= */

/* ---------- CONFIG ---------- */
const CONFIG = {
  whatsapp: "212675296774",
  instagram: "https://instagram.com/privilegetravel"
};


/* =========================================================
   DATA — EXCURSIONS
   ========================================================= */

const TOURS = [

  /* =========================
     AGAFAY
     ========================= */
  {
    id: "agafay",
    name: "Désert d'Agafay",
    destination: "Agafay, près de Marrakech",
    category: "desert",
    duration: "1 journée",
    price: 399,
    rating: 4.8,
    badge: "BEST SELLER",
    image: "desert agafay.jpg",

    description:
      "À seulement quelques kilomètres de Marrakech, le désert d'Agafay offre des paysages spectaculaires de collines rocheuses. Une escapade parfaite pour profiter du calme, de l'aventure et de l'ambiance désertique.",

    program: [
      {
        time: "08:00",
        label: "Départ de Marrakech"
      },
      {
        time: "09:00",
        label: "Arrivée au désert d'Agafay"
      },
      {
        time: "10:00",
        label: "Balade et découverte du désert"
      },
      {
        time: "13:00",
        label: "Déjeuner traditionnel"
      },
      {
        time: "16:00",
        label: "Retour vers Marrakech"
      }
    ],

    included: [
      "Transport aller-retour climatisé",
      "Accompagnement",
      "Déjeuner traditionnel"
    ],

    excluded: [
      "Boissons",
      "Pourboires",
      "Activités optionnelles"
    ]
  },


  /* =========================
     CHEFCHAOUEN
     ========================= */
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    destination: "La perle bleue du Rif",
    category: "montagne",
    duration: "1 journée",
    price: 349,
    rating: 4.9,
    badge: "BEST SELLER",
    image: "chafchaoun.jpg",

    description:
      "Découvrez les magnifiques ruelles bleues de Chefchaouen, son architecture traditionnelle et l'atmosphère unique de la médina.",

    program: [
      {
        time: "06:30",
        label: "Départ matinal"
      },
      {
        time: "10:30",
        label: "Arrivée à Chefchaouen"
      },
      {
        time: "11:00",
        label: "Visite de la médina bleue"
      },
      {
        time: "13:30",
        label: "Déjeuner libre"
      },
      {
        time: "17:00",
        label: "Retour"
      }
    ],

    included: [
      "Transport confortable",
      "Accompagnement",
      "Temps libre dans la médina"
    ],

    excluded: [
      "Repas",
      "Entrées éventuelles"
    ]
  },


  /* =========================
     MARRAKECH
     ========================= */
  {
    id: "marrakech",
    name: "Marrakech",
    destination: "La ville rouge",
    category: "villes",
    duration: "Excursion journée",
    price: 299,
    rating: 4.7,
    badge: "NOUVEAU",
    image: "marrakech.jpg",

    description:
      "Explorez Marrakech, sa médina, ses souks, ses monuments historiques et ses lieux emblématiques.",

    program: [
      {
        time: "09:00",
        label: "Rendez-vous au centre-ville"
      },
      {
        time: "09:30",
        label: "Visite de la Koutoubia et de la médina"
      },
      {
        time: "12:00",
        label: "Balade dans les souks"
      },
      {
        time: "14:00",
        label: "Déjeuner"
      },
      {
        time: "17:00",
        label: "Temps libre"
      }
    ],

    included: [
      "Accompagnement",
      "Visite des principaux sites"
    ],

    excluded: [
      "Déjeuner",
      "Dépenses personnelles"
    ]
  },


  /* =========================================================
     MERZOUGA
     ========================================================= */
  {
    id: "merzouga",
    name: "Merzouga Express",
    destination: "Dunes de l'Erg Chebbi — Safari Sahara",
    category: "desert",
    duration: "3 jours / 2 nuits",
    price: 779,
    rating: 5.0,
    badge: "BEST SELLER",
    image: "marzouga.jpg",

    description:
      "Le voyage le plus demandé est de retour en mode SAFARI. Ambiance, détente et relaxation au cœur du désert de Merzouga, avec hôtel, soirée animée, feu de camp et plusieurs activités selon la formule choisie.",

    dates: [
      "02–04 octobre 2026",
      "09–11 octobre 2026",
      "16–18 octobre 2026",
      "23–25 octobre 2026",
      "30 octobre–01 novembre 2026",
      "06–08 novembre 2026",
      "13–15 novembre 2026",
      "20–22 novembre 2026",
      "27–29 novembre 2026",
      "04–06 décembre 2026",
      "11–13 décembre 2026",
      "18–20 décembre 2026",
      "25–27 décembre 2026",
      "01–03 janvier 2027",
      "08–10 janvier 2027",
      "09–11 janvier 2027",
      "15–17 janvier 2027",
      "22–24 janvier 2027",
      "29–31 janvier 2027"
    ],

    formulas: [
      {
        name: "Formule Essentielle",
        price: 779,
        details: [
          "Transport touristique aller-retour climatisé",
          "Shooting photo professionnel + Story",
          "Petit-déjeuner buffet dimanche",
          "Dîner buffet samedi",
          "Soirée DJ ou Gnaoua",
          "Nuit à l'hôtel",
          "Feu de camp"
        ]
      },
      {
        name: "Formule All In",
        price: 979,
        details: [
          "Transport touristique aller-retour climatisé",
          "Shooting photo professionnel + Story",
          "Excursion 4x4 dans le désert",
          "Petits-déjeuners samedi et dimanche",
          "Déjeuner samedi",
          "Dîner buffet samedi",
          "Balade à dos de dromadaire",
          "Soirée DJ ou Gnaoua",
          "Nuit à l'hôtel",
          "Feu de camp"
        ]
      }
    ],

    program: [
      {
        time: "VENDREDI — 19:00",
        label: "Départ Casablanca — Gare Casa-Voyageurs"
      },
      {
        time: "20:00",
        label: "Départ Mohammedia — devant École Majorelle"
      },
      {
        time: "21:00",
        label: "Départ Rabat — Gare Rabat Ville"
      },
      {
        time: "00:30",
        label: "Arrivée à Meknès — Gare Routière Sidi Saïd"
      },
      {
        time: "SAMEDI",
        label: "Pause repos à Midelt"
      },
      {
        time: "07:30",
        label: "Petit-déjeuner à Aïn Atti"
      },
      {
        time: "MATIN",
        label: "Arrivée à Merzouga et installation à l'hôtel"
      },
      {
        time: "13:00",
        label: "Déjeuner à Khamlia — Dar Gnaoua"
      },
      {
        time: "14:00",
        label: "Quad / Buggy en option"
      },
      {
        time: "APRÈS-MIDI",
        label: "Excursion en 4x4 vers les dunes et coucher de soleil"
      },
      {
        time: "SOIR",
        label: "Retour à l'hôtel à dos de dromadaire"
      },
      {
        time: "SOIRÉE",
        label: "Dîner buffet, DJ / Gnaoua et feu de camp"
      },
      {
        time: "DIMANCHE — 07:00",
        label: "Réveil et petit-déjeuner buffet"
      },
      {
        time: "08:15",
        label: "Départ vers Erfoud"
      },
      {
        time: "09:30",
        label: "Arrêt à Erfoud"
      },
      {
        time: "10:30",
        label: "Arrêt à Aïn Atti — dégustation de lait de chamelle"
      },
      {
        time: "11:00",
        label: "Arrêt panoramique à l'oasis Oulad Chaggar"
      },
      {
        time: "APRÈS-MIDI",
        label: "Retour avec déjeuner libre à Zaida"
      }
    ],

    included: [
      "Transport touristique aller-retour climatisé",
      "Shooting photo professionnel + Story",
      "Nuit à l'hôtel",
      "Dîner buffet samedi",
      "Petit-déjeuner dimanche",
      "Soirée DJ ou Gnaoua",
      "Feu de camp"
    ],

    excluded: [
      "Quad",
      "Buggy",
      "Déjeuner selon la formule",
      "Boissons",
      "Dépenses personnelles"
    ],

    reservation: [
      "Avance de 300 DH par virement bancaire",
      "Contacter le 0675296774 par WhatsApp ou appel pour recevoir le RIB",
      "Réservation selon disponibilité des places"
    ],

    conditions: [
      "Contacter le collaborateur avant tout transfert",
      "Annulation au minimum 48h avant le départ",
      "L'agence n'est pas responsable des retards d'arrivée",
      "Le programme peut être modifié pour assurer la bonne réalisation du voyage tout en maintenant les services et activités inclus",
      "Conditions liées aux cas de force majeure"
    ]
  },


  /* =========================================================
     NOUVEAU VOYAGE
     AZILAL — OUZOUD — BIN EL OUIDANE — AIN ASSERDOUN
     ========================================================= */
  {
    id: "azilal-ouzoud-bin-el-ouidane",
    name: "Azilal, Ouzoud & Bin El Ouidane",
    destination: "Azilal • Cascades d'Ouzoud • Bin El Ouidane • Ain Asserdoun",
    category: "montagne",
    duration: "3 jours / 2 nuits",
    price: 1299,
    rating: 5.0,
    badge: "NOUVEAU",
    image: "azilal.jpg",

    description:
      "Quand la beauté de la nature rencontre le plaisir du voyage, commence une magnifique aventure avec Privilége Travel. Découvrez Azilal, les cascades d'Ouzoud, le lac de Bin El Ouidane et les sources d'Ain Asserdoun dans une expérience de 3 jours mêlant découverte, détente, divertissement et paysages naturels exceptionnels.",

    dates: [
      "09–11 octobre 2026",
      "16–18 octobre 2026",
      "23–25 octobre 2026",
      "30–31 octobre–01 novembre 2026",
      "06–08 novembre 2026",
      "13–15 novembre 2026",
      "20–22 novembre 2026",
      "27–29 novembre 2026",
      "04–06 décembre 2026",
      "11–13 décembre 2026",
      "18–20 décembre 2026",
      "25–27 décembre 2026"
    ],

    formulas: [
      {
        name: "Tarif du voyage",
        price: 1299,
        details: [
          "Transport aller-retour en bus touristique climatisé et confortable",
          "1 nuit dans un hôtel 4 étoiles à Azilal",
          "1 nuit dans un hôtel 4 étoiles à Bin El Ouidane",
          "Dîner du deuxième jour à l'hôtel",
          "2 petits-déjeuners à l'hôtel",
          "Animation et encadrement pendant tout le voyage"
        ]
      }
    ],

    program: [

      {
        time: "JOUR 1 — 17:30",
        label: "Départ de Kénitra si 6 personnes ou plus sont disponibles"
      },

      {
        time: "18:30",
        label: "Départ de Rabat devant la gare Rabat Agdal"
      },

      {
        time: "19:30",
        label: "Départ de Mohammedia devant Marjane"
      },

      {
        time: "20:30",
        label: "Départ de Casablanca devant la gare Casa-Voyageurs — porte arrière"
      },

      {
        time: "SOIR",
        label: "Direction Beni Mellal"
      },

      {
        time: "SOIR",
        label: "Dîner libre"
      },

      {
        time: "NUIT",
        label: "Direction l'hôtel à Azilal"
      },

      {
        time: "NUIT",
        label: "Distribution des chambres doubles et triples"
      },

      {
        time: "NUIT",
        label: "Temps libre pour repos et douche"
      },

      {
        time: "NUIT",
        label: "Nuit à l'hôtel et préparation pour le lendemain"
      },


      /* JOUR 2 */

      {
        time: "JOUR 2 — 08:00",
        label: "Petit-déjeuner à l'hôtel — inclus dans le prix"
      },

      {
        time: "09:00",
        label: "Départ vers les cascades d'Ouzoud"
      },

      {
        time: "MATIN",
        label: "Descente vers les cascades et découverte du paysage naturel"
      },

      {
        time: "MATIN",
        label: "Temps libre aux cascades d'Ouzoud"
      },

      {
        time: "MIDI",
        label: "Déjeuner libre"
      },

      {
        time: "APRÈS-MIDI",
        label: "Départ vers l'hôtel à Bin El Ouidane"
      },

      {
        time: "APRÈS-MIDI",
        label: "Distribution des chambres doubles et triples"
      },

      {
        time: "APRÈS-MIDI",
        label: "Temps libre pour profiter de l'hôtel, se reposer et se détendre"
      },

      {
        time: "SOIR",
        label: "Dîner à l'hôtel — inclus dans le prix"
      },

      {
        time: "SOIR",
        label: "Jeux et animations collectives entre les participants"
      },

      {
        time: "NUIT",
        label: "Nuit à l'hôtel et préparation pour le lendemain"
      },


      /* JOUR 3 */

      {
        time: "JOUR 3 — 08:00",
        label: "Petit-déjeuner"
      },

      {
        time: "10:00",
        label: "Départ vers le barrage de Bin El Ouidane"
      },

      {
        time: "MATIN",
        label: "Balade en bateau sur le lac — activité libre"
      },

      {
        time: "MATIN",
        label: "Tour du barrage pendant environ 1 heure"
      },

      {
        time: "APRÈS-MIDI",
        label: "Départ vers la région d'Ain Asserdoun"
      },

      {
        time: "APRÈS-MIDI",
        label: "Arrêt à la coopérative / huilerie d'Ain Asserdoun"
      },

      {
        time: "APRÈS-MIDI",
        label: "Temps libre pour acheter l'huile d'olive de la région"
      },

      {
        time: "APRÈS-MIDI",
        label: "Visite des sources d'Ain Asserdoun"
      },

      {
        time: "APRÈS-MIDI",
        label: "Découverte des cascades d'Ain Asserdoun"
      },

      {
        time: "APRÈS-MIDI",
        label: "Temps libre pour profiter de la région"
      },

      {
        time: "MIDI",
        label: "Déjeuner libre"
      },

      {
        time: "APRÈS-MIDI",
        label: "Départ pour le voyage retour"
      },

      {
        time: "SOIR",
        label: "Arrivée à Casablanca"
      },

      {
        time: "SOIR",
        label: "Arrivée à Mohammedia"
      },

      {
        time: "SOIR",
        label: "Arrivée à Rabat"
      }
    ],

    included: [
      "Transport aller-retour en bus touristique climatisé et confortable",
      "1 nuit dans un hôtel 4 étoiles à Azilal — Hotel Atlas Day ou équivalent",
      "1 nuit dans un hôtel 4 étoiles à Bin El Ouidane — Hotel Chams du Lac ou équivalent",
      "Dîner du deuxième jour à l'hôtel",
      "2 petits-déjeuners à l'hôtel",
      "Animation et encadrement pendant tout le voyage"
    ],

    excluded: [
      "Dîner du premier jour",
      "Déjeuner du deuxième jour",
      "Balade en bateau à Bin El Ouidane",
      "Déjeuner du troisième jour",
      "Dépenses personnelles"
    ],

    reservation: [
      "Envoyer le nom et prénom",
      "Envoyer le numéro de la carte nationale",
      "Indiquer le point de départ",
      "Réserver avec paiement intégral ou acompte de 400 DH",
      "Paiement par compte bancaire de Privilége Travel"
    ],

    conditions: [
      "Prix : 1299 DH par personne",
      "Réservation selon disponibilité des places",
      "Les activités indiquées comme libres sont à la charge du participant",
      "Les horaires peuvent être adaptés en fonction du déroulement du voyage"
    ]
  },


  /* =========================
     ESSAOUIRA
     ========================= */
  {
    id: "essaouira",
    name: "Essaouira",
    destination: "La cité des vents",
    category: "plages",
    duration: "1 journée",
    price: 399,
    rating: 4.6,
    badge: "NOUVEAU",
    image: "essaouira.jpg",

    description:
      "Découvrez la médina d'Essaouira, son port de pêche, ses remparts et ses plages.",

    program: [
      {
        time: "08:00",
        label: "Départ"
      },
      {
        time: "10:30",
        label: "Visite de la médina"
      },
      {
        time: "13:00",
        label: "Déjeuner libre"
      },
      {
        time: "15:00",
        label: "Temps libre à la plage"
      },
      {
        time: "18:00",
        label: "Retour"
      }
    ],

    included: [
      "Transport aller-retour",
      "Accompagnement"
    ],

    excluded: [
      "Déjeuner",
      "Activités nautiques"
    ]
  },


  /* =========================
     OUZOUD
     ========================= */
  {
    id: "ouzoud",
    name: "Ouzoud",
    destination: "Cascades d'Ouzoud",
    category: "montagne",
    duration: "1 journée",
    price: 349,
    rating: 4.7,
    badge: "NOUVEAU",
    image: "ouzoud.jpg",

    description:
      "Découvrez les impressionnantes cascades d'Ouzoud et profitez d'une journée au cœur de la nature.",

    program: [
      {
        time: "08:30",
        label: "Départ"
      },
      {
        time: "10:30",
        label: "Arrivée aux cascades"
      },
      {
        time: "12:30",
        label: "Temps libre"
      },
      {
        time: "14:00",
        label: "Déjeuner libre"
      },
      {
        time: "17:30",
        label: "Retour"
      }
    ],

    included: [
      "Transport",
      "Accompagnement"
    ],

    excluded: [
      "Déjeuner",
      "Activités optionnelles"
    ]
  },


  /* =========================
     ATLAS
     ========================= */
  {
    id: "atlas",
    name: "Atlas Mountains",
    destination: "Vallée de l'Ourika",
    category: "aventure",
    duration: "1 journée",
    price: 449,
    rating: 4.8,
    badge: "BEST SELLER",
    image: "atlas mouantains.jpg",

    description:
      "Découvrez les montagnes de l'Atlas, les villages berbères et les paysages naturels de la vallée de l'Ourika.",

    program: [
      {
        time: "08:00",
        label: "Départ de Marrakech"
      },
      {
        time: "09:30",
        label: "Arrivée dans la vallée"
      },
      {
        time: "12:30",
        label: "Déjeuner chez l'habitant"
      },
      {
        time: "15:00",
        label: "Visite d'un village berbère"
      },
      {
        time: "18:00",
        label: "Retour"
      }
    ],

    included: [
      "Transport",
      "Accompagnement",
      "Déjeuner berbère"
    ],

    excluded: [
      "Boissons",
      "Pourboires"
    ]
  },


  /* =========================
     FÈS & MEKNÈS
     ========================= */
  {
    id: "fes-meknes",
    name: "Fès & Meknès",
    destination: "Villes impériales",
    category: "culture",
    duration: "1 journée",
    price: 299,
    rating: 4.7,
    badge: "NOUVEAU",
    image: "fesmeknes.jpg",

    description:
      "Plongez dans l'histoire du Maroc à travers les villes impériales de Fès et Meknès.",

    program: [
      {
        time: "07:00",
        label: "Départ"
      },
      {
        time: "09:30",
        label: "Visite de Meknès"
      },
      {
        time: "13:00",
        label: "Déjeuner libre"
      },
      {
        time: "15:00",
        label: "Visite de la médina de Fès"
      },
      {
        time: "19:00",
        label: "Retour"
      }
    ],

    included: [
      "Transport",
      "Accompagnement"
    ],

    excluded: [
      "Déjeuner",
      "Dépenses personnelles"
    ]
  }

];


/* =========================================================
   DESTINATIONS
   ========================================================= */

const DESTINATIONS = [
  {
    name: "Marrakech",
    count: 6,
    image: "marrakech.jpg"
  },
  {
    name: "Fès",
    count: 4,
    image: "fesmeknes.jpg"
  },
  {
    name: "Chefchaouen",
    count: 3,
    image: "chafchaoun.jpg"
  },
  {
    name: "Merzouga",
    count: 5,
    image: "marzouga.jpg"
  },
  {
    name: "Agafay",
    count: 3,
    image: "desert agafay.jpg"
  },
  {
    name: "Essaouira",
    count: 4,
    image: "essaouira.jpg"
  }
];


/* =========================================================
   CIRCUITS
   ========================================================= */

const CIRCUITS = [
  {
    name: "Maroc Essentiel",
    days: "7 jours",
    route: "Marrakech → Aït Ben Haddou → Merzouga → Fès",
    price: 3490
  },
  {
    name: "Grande Aventure Sahara",
    days: "5 jours",
    route: "Marrakech → Ouarzazate → Merzouga",
    price: 2490
  },
  {
    name: "Côte Atlantique",
    days: "4 jours",
    route: "Casablanca → Rabat → Essaouira",
    price: 1990
  }
];


/* =========================================================
   TESTIMONIALS
   ========================================================= */

const TESTIMONIALS = [
  {
    name: "Claire Dubois",
    country: "France",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text:
      "Une expérience incroyable ! L'organisation était parfaite et notre guide connaissait parfaitement la région."
  },
  {
    name: "Marco Rossi",
    country: "Italie",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    text:
      "Le désert de Merzouga restera gravé dans ma mémoire. Une équipe attentionnée du début à la fin du séjour."
  },
  {
    name: "Sarah Johnson",
    country: "Royaume-Uni",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    text:
      "Réservation simple via WhatsApp, transport confortable et guides passionnants."
  }
];


/* =========================================================
   INSTAGRAM
   ========================================================= */

const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=500&auto=format&fit=crop"
];


/* =========================================================
   STATE
   ========================================================= */

let currentFilter = "all";
let currentSort = "recommended";

let favorites = JSON.parse(
  localStorage.getItem("nomadia_favorites") || "[]"
);

let activeTour = null;
let bookingQty = 2;

let testimonialIndex = 0;
let testimonialTimer = null;


/* =========================================================
   HELPERS
   ========================================================= */

function formatPrice(price) {
  return Number(price).toLocaleString("fr-FR") + " DH";
}


function buildWhatsappLink(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}


function defaultWhatsappMessage() {
  return (
    "Bonjour Privilége Travel 👋\n\n" +
    "Je souhaite avoir plus d'informations sur vos excursions.\n\n" +
    "Merci."
  );
}


function tourWhatsappMessage(tour) {

  return (
    "Bonjour Privilége Travel 👋\n\n" +
    "Je souhaite réserver :\n\n" +
    `Excursion : ${tour.name}\n` +
    "Date : \n" +
    "Nombre de personnes : \n\n" +
    "Merci."
  );
}


/* =========================================================
   WHATSAPP
   ========================================================= */

function initWhatsappLinks() {

  const links = [
    "navWhatsapp",
    "mobileWhatsapp",
    "heroWhatsapp",
    "contactWhatsapp",
    "footerWhatsapp",
    "floatingWhatsapp"
  ];

  links.forEach(id => {

    const element = document.getElementById(id);

    if (element) {
      element.href =
        buildWhatsappLink(defaultWhatsappMessage());
    }

  });
}


/* =========================================================
   NAVBAR
   ========================================================= */

function initNavbarScroll() {

  const navbar =
    document.getElementById("navbar");

  if (!navbar) return;

  window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

  });
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initMobileMenu() {

  const hamburger =
    document.getElementById("hamburger");

  const mobileMenu =
    document.getElementById("mobileMenu");

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");

  });

  mobileMenu
    .querySelectorAll(".mobile-link")
    .forEach(link => {

      link.addEventListener("click", () => {

        hamburger.classList.remove("open");
        mobileMenu.classList.remove("open");

      });

    });
}


/* =========================================================
   SEARCH OVERLAY
   ========================================================= */

function initSearchOverlay() {

  const overlay =
    document.getElementById("searchOverlay");

  const input =
    document.getElementById("liveSearchInput");

  const resultsWrap =
    document.getElementById("searchResults");

  const searchToggle =
    document.getElementById("searchToggle");

  const searchClose =
    document.getElementById("searchClose");

  if (
    !overlay ||
    !input ||
    !resultsWrap
  ) return;


  function openSearch() {

    overlay.classList.add("open");

    setTimeout(() => {
      input.focus();
    }, 350);

    renderSearchResults("");

  }


  function closeSearch() {

    overlay.classList.remove("open");
    input.value = "";

  }


  if (searchToggle) {
    searchToggle.addEventListener(
      "click",
      openSearch
    );
  }


  if (searchClose) {
    searchClose.addEventListener(
      "click",
      closeSearch
    );
  }


  overlay.addEventListener("click", e => {

    if (e.target === overlay) {
      closeSearch();
    }

  });


  document.addEventListener("keydown", e => {

    if (e.key === "Escape") {
      closeSearch();
    }

  });


  input.addEventListener("input", () => {

    renderSearchResults(input.value);

  });


  function renderSearchResults(query) {

    const q =
      query.trim().toLowerCase();

    const matches =
      TOURS.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.destination.toLowerCase().includes(q)
      );


    resultsWrap.innerHTML =
      matches.length

        ? matches.map(t => `
            <a
              class="search-result-item"
              href="#excursions"
              data-id="${t.id}"
            >
              <span>
                ${t.name} — ${t.destination}
              </span>

              <span>
                ${formatPrice(t.price)}
              </span>
            </a>
          `).join("")

        : `
          <p style="color:rgba(248,243,233,0.5);">
            Aucun résultat pour "${query}"
          </p>
        `;


    resultsWrap
      .querySelectorAll(".search-result-item")
      .forEach(item => {

        item.addEventListener("click", () => {

          overlay.classList.remove("open");

          setTimeout(() => {

            openTourModal(
              item.dataset.id
            );

          }, 300);

        });

      });

  }

}


/* =========================================================
   HERO SEARCH
   ========================================================= */

function initHeroSearch() {

  const form =
    document.getElementById("heroSearchForm");

  if (!form) return;

  form.addEventListener("submit", e => {

    e.preventDefault();

    const whereElement =
      document.getElementById("hsWhere");

    const where =
      whereElement
        ? whereElement.value.trim()
        : "";


    const excursions =
      document.getElementById("excursions");

    if (excursions) {

      excursions.scrollIntoView({
        behavior: "smooth"
      });

    }


    const searchInput =
      document.getElementById("liveSearchInput");

    if (searchInput && where) {
      searchInput.value = where;
    }


    window.__heroSearchTerm =
      where.toLowerCase();

    renderTours();

  });

}


/* =========================================================
   FILTER + SORT
   ========================================================= */

function getFilteredSortedTours() {

  let list = TOURS.slice();


  if (currentFilter !== "all") {

    list =
      list.filter(
        tour =>
          tour.category === currentFilter
      );

  }


  if (window.__heroSearchTerm) {

    const term =
      window.__heroSearchTerm;

    list =
      list.filter(tour =>
        tour.name
          .toLowerCase()
          .includes(term) ||

        tour.destination
          .toLowerCase()
          .includes(term)
      );

  }


  switch (currentSort) {

    case "price-asc":

      list.sort(
        (a, b) =>
          a.price - b.price
      );

      break;


    case "price-desc":

      list.sort(
        (a, b) =>
          b.price - a.price
      );

      break;


    case "rating":

      list.sort(
        (a, b) =>
          b.rating - a.rating
      );

      break;


    default:
      break;

  }


  return list;

}


/* =========================================================
   RENDER TOURS
   ========================================================= */

function renderTours() {

  const grid =
    document.getElementById("toursGrid");

  const noResults =
    document.getElementById("noResults");


  if (!grid) return;


  const list =
    getFilteredSortedTours();


  if (list.length === 0) {

    grid.innerHTML = "";

    if (noResults) {
      noResults.hidden = false;
    }

    return;

  }


  if (noResults) {
    noResults.hidden = true;
  }


  grid.innerHTML =
    list.map(tour => `

      <div
        class="tour-card reveal in-view"
        data-id="${tour.id}"
      >

        <div class="tour-media">

          <img
            src="${tour.image}"
            alt="${tour.name}"
            loading="lazy"
          >

          <span
            class="tour-badge ${
              tour.badge === "NOUVEAU"
                ? "new"
                : ""
            }"
          >
            ${tour.badge}
          </span>


          <button
            class="tour-fav-btn ${
              favorites.includes(tour.id)
                ? "active"
                : ""
            }"
            data-id="${tour.id}"
            aria-label="Ajouter aux favoris"
          >

            <svg
              viewBox="0 0 24 24"
              width="17"
              height="17"
              fill="none"
              stroke-width="1.8"
            >

              <path
                d="M12 20.5s-7.5-4.6-10-9.2C0.3 8 1.7 4.3 5.2 3.6c2.1-.4 4.1.6 5.2 2.3c1.1-1.7 3.1-2.7 5.2-2.3c3.5.7 4.9 4.4 3.2 7.7c-2.5 4.6-10 9.2-10 9.2z"
              />

            </svg>

          </button>

        </div>


        <div class="tour-body">

          <div class="tour-top-row">

            <h3 class="tour-name">
              ${tour.name}
            </h3>

            <span class="tour-rating">
              ★ ${tour.rating.toFixed(1)}
            </span>

          </div>


          <p class="tour-meta">
            ${tour.destination}
            ·
            ${tour.duration}
          </p>


          <div class="tour-bottom-row">

            <p class="tour-price">

              <span>Dès</span>

              <br>

              ${formatPrice(tour.price)}

            </p>


            <div class="tour-actions">

              <button
                class="btn btn-primary btn-details"
                data-id="${tour.id}"
              >
                Détails
              </button>


              <a
                class="icon-btn tour-wa-btn"
                data-id="${tour.id}"
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
              >

                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >

                  <path
                    d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.9-4.45 9.9-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67a8.2 8.2 0 0 1 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.25 8.24c-1.44 0-2.85-.37-4.09-1.08l-.29-.17l-3.11.82l.83-3.03l-.19-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.24-8.24z"
                  />

                </svg>

              </a>

            </div>

          </div>

        </div>

      </div>

    `).join("");


  /* DETAILS */

  grid
    .querySelectorAll(".btn-details")
    .forEach(button => {

      button.addEventListener(
        "click",
        () =>
          openTourModal(
            button.dataset.id
          )
      );

    });


  /* FAVORITES */

  grid
    .querySelectorAll(".tour-fav-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () =>
          toggleFavorite(
            button.dataset.id
          )
      );

    });


  /* WHATSAPP */

  grid
    .querySelectorAll(".tour-wa-btn")
    .forEach(button => {

      const tour =
        TOURS.find(
          t =>
            t.id ===
            button.dataset.id
        );

      if (tour) {

        button.href =
          buildWhatsappLink(
            tourWhatsappMessage(tour)
          );

      }

    });

}


/* =========================================================
   FILTERS + SORT
   ========================================================= */

function initFiltersAndSort() {

  const filterTabs =
    document.getElementById("filterTabs");

  const sortSelect =
    document.getElementById("sortSelect");


  if (filterTabs) {

    filterTabs.addEventListener(
      "click",
      e => {

        const button =
          e.target.closest(
            ".filter-tab"
          );

        if (!button) return;


        document
          .querySelectorAll(
            ".filter-tab"
          )
          .forEach(
            b =>
              b.classList.remove(
                "active"
              )
          );


        button.classList.add(
          "active"
        );


        currentFilter =
          button.dataset.filter;


        window.__heroSearchTerm =
          "";


        renderTours();

      }
    );

  }


  if (sortSelect) {

    sortSelect.addEventListener(
      "change",
      e => {

        currentSort =
          e.target.value;

        renderTours();

      }
    );

  }

}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(
        favorite =>
          favorite !== id
      );

  } else {

    favorites.push(id);

  }


  localStorage.setItem(
    "nomadia_favorites",
    JSON.stringify(favorites)
  );


  updateFavCount();
  renderTours();
  renderFavDrawer();

}


function updateFavCount() {

  const element =
    document.getElementById(
      "favCount"
    );

  if (element) {
    element.textContent =
      favorites.length;
  }

}


function renderFavDrawer() {

  const body =
    document.getElementById(
      "favDrawerBody"
    );

  if (!body) return;


  if (favorites.length === 0) {

    body.innerHTML = `
      <p class="fav-empty">
        Vous n'avez pas encore
        d'excursion favorite.
        <br>
        Cliquez sur le cœur
        d'une carte pour l'ajouter ici.
      </p>
    `;

    return;

  }


  const items =
    TOURS.filter(
      tour =>
        favorites.includes(
          tour.id
        )
    );


  body.innerHTML =
    items.map(tour => `

      <div class="fav-item">

        <img
          src="${tour.image}"
          alt="${tour.name}"
        >

        <div class="fav-item-info">

          <h4>
            ${tour.name}
          </h4>

          <p>
            ${formatPrice(tour.price)}
            ·
            ${tour.duration}
          </p>

        </div>


        <button
          class="fav-remove"
          data-id="${tour.id}"
          aria-label="Retirer"
        >
          &times;
        </button>

      </div>

    `).join("");


  body
    .querySelectorAll(".fav-remove")
    .forEach(button => {

      button.addEventListener(
        "click",
        () =>
          toggleFavorite(
            button.dataset.id
          )
      );

    });

}


function initFavDrawer() {

  const drawer =
    document.getElementById(
      "favDrawer"
    );

  const backdrop =
    document.getElementById(
      "drawerBackdrop"
    );

  const toggle =
    document.getElementById(
      "favToggle"
    );

  const closeButton =
    document.getElementById(
      "favClose"
    );


  if (
    !drawer ||
    !backdrop
  ) return;


  function open() {

    renderFavDrawer();

    drawer.classList.add(
      "open"
    );

    backdrop.classList.add(
      "open"
    );

  }


  function close() {

    drawer.classList.remove(
      "open"
    );

    backdrop.classList.remove(
      "open"
    );

  }


  if (toggle) {
    toggle.addEventListener(
      "click",
      open
    );
  }


  if (closeButton) {
    closeButton.addEventListener(
      "click",
      close
    );
  }


  backdrop.addEventListener(
    "click",
    close
  );

}


/* =========================================================
   DESTINATIONS
   ========================================================= */

function renderDestinations() {

  const grid =
    document.getElementById(
      "destinationsGrid"
    );

  if (!grid) return;


  grid.innerHTML =
    DESTINATIONS.map(
      destination => `

        <div
          class="destination-card reveal"
          data-name="${destination.name}"
        >

          <img
            src="${destination.image}"
            alt="${destination.name}"
            loading="lazy"
          >

          <div class="destination-info">

            <h3>
              ${destination.name}
            </h3>

            <p>
              ${destination.count}
              expériences disponibles
            </p>

            <span
              class="destination-explore"
            >
              Explorer
            </span>

          </div>

        </div>

      `
    ).join("");


  grid
    .querySelectorAll(
      ".destination-card"
    )
    .forEach(card => {

      card.addEventListener(
        "click",
        () => {

          window.__heroSearchTerm =
            card.dataset.name
              .toLowerCase();


          currentFilter =
            "all";


          document
            .querySelectorAll(
              ".filter-tab"
            )
            .forEach(button => {

              button.classList.toggle(
                "active",
                button.dataset.filter ===
                  "all"
              );

            });


          renderTours();


          const excursions =
            document.getElementById(
              "excursions"
            );

          if (excursions) {

            excursions.scrollIntoView({
              behavior: "smooth"
            });

          }

        }
      );

    });

}


/* =========================================================
   CIRCUITS
   ========================================================= */

function renderCircuits() {

  const grid =
    document.getElementById(
      "circuitsGrid"
    );

  if (!grid) return;


  grid.innerHTML =
    CIRCUITS.map(
      circuit => `

        <div class="circuit-card reveal">

          <span class="circuit-days">
            ${circuit.days}
          </span>

          <h3 class="circuit-name">
            ${circuit.name}
          </h3>

          <p class="circuit-route">
            ${circuit.route}
          </p>

          <p class="circuit-price">

            <span>
              À partir de
            </span>

            <br>

            ${formatPrice(circuit.price)}

          </p>

          <button
            class="btn btn-outline circuit-btn"
            data-name="${circuit.name}"
          >
            Voir le circuit
          </button>

        </div>

      `
    ).join("");


  grid
    .querySelectorAll(
      ".circuit-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const message =
            `Bonjour Privilége Travel 👋\n\n` +
            `Je suis intéressé(e) par le circuit :\n` +
            `${button.dataset.name}\n\n` +
            `Pouvez-vous me donner plus de détails ?\n\n` +
            `Merci.`;

          window.open(
            buildWhatsappLink(
              message
            ),
            "_blank"
          );

        }
      );

    });

}


/* =========================================================
   INSTAGRAM
   ========================================================= */

function renderInstagram() {

  const grid =
    document.getElementById(
      "instagramGrid"
    );

  if (!grid) return;


  grid.innerHTML =
    INSTAGRAM_IMAGES.map(
      src => `

        <a
          class="insta-item"
          href="${CONFIG.instagram}"
          target="_blank"
          rel="noopener"
        >

          <img
            src="${src}"
            alt="Photo de voyage Privilége Travel"
            loading="lazy"
          >

          <span class="insta-icon">

            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >

              <path
                d="M12 2c2.7 0 3.05.01 4.12.06c1.06.05 1.79.22 2.43.47c.66.26 1.21.6 1.76 1.15c.55.55.9 1.1 1.15 1.76c.25.64.42 1.37.47 2.43c.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76a4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47c-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15a4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43c.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2m0 1.8c-2.65 0-2.97.01-4.02.06c-.97.04-1.5.2-1.85.34c-.47.18-.8.4-1.15.75s-.57.68-.75 1.15c-.14.35-.3.88-.34 1.85c-.05 1.05-.06 1.37-.06 4.02s.01 2.97.06 4.02c.04.97.2 1.5.34 1.85c.18.47.4.8.75 1.15s.68.57 1.15.75c.35.14.88.3 1.85.34c1.05.05 1.37.06 4.02.06s2.97-.01 4.02-.06c.97-.04 1.5-.2 1.85-.34c.47-.18.8-.4 1.15-.75s.57-.68-.75-1.15c.14-.35.3-.88.34-1.85c.05-1.05.06-1.37.06-4.02s-.01-2.97-.06-4.02c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 0 0-.75-1.15a3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.3-1.85-.34C14.97 3.81 14.65 3.8 12 3.8m0 3.06a5.14 5.14 0 1 1 0 10.28a5.14 5.14 0 0 1 0-10.28m0 1.8a3.34 3.34 0 1 0 0 6.68a3.34 3.34 0 0 0 0-6.68m5.34-1.96a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0"
              />

            </svg>

          </span>

        </a>

      `
    ).join("");

}


/* =========================================================
   TESTIMONIALS
   ========================================================= */

function renderTestimonials() {

  const track =
    document.getElementById(
      "testimonialTrack"
    );

  const dots =
    document.getElementById(
      "testimonialDots"
    );


  if (!track || !dots) return;


  track.innerHTML =
    TESTIMONIALS.map(
      testimonial => `

        <div class="testimonial-card">

          <div class="stars">
            ★★★★★
          </div>

          <p class="testimonial-quote">
            "${testimonial.text}"
          </p>

          <img
            class="testimonial-avatar"
            src="${testimonial.avatar}"
            alt="${testimonial.name}"
          >

          <p class="testimonial-name">
            ${testimonial.name}
          </p>

          <p class="testimonial-country">
            ${testimonial.country}
          </p>

        </div>

      `
    ).join("");


  dots.innerHTML =
    TESTIMONIALS.map(
      (_, index) => `

        <button
          class="t-dot ${
            index === 0
              ? "active"
              : ""
          }"
          data-index="${index}"
        ></button>

      `
    ).join("");


  dots
    .querySelectorAll(".t-dot")
    .forEach(dot => {

      dot.addEventListener(
        "click",
        () => {

          testimonialIndex =
            parseInt(
              dot.dataset.index
            );

          updateTestimonialSlide();

          resetTestimonialTimer();

        }
      );

    });


  startTestimonialAutoplay();

}


function updateTestimonialSlide() {

  const track =
    document.getElementById(
      "testimonialTrack"
    );

  if (!track) return;


  track.style.transform =
    `translateX(-${
      testimonialIndex * 100
    }%)`;


  document
    .querySelectorAll(".t-dot")
    .forEach(
      (dot, index) =>
        dot.classList.toggle(
          "active",
          index ===
            testimonialIndex
        )
    );

}


function startTestimonialAutoplay() {

  clearInterval(
    testimonialTimer
  );


  testimonialTimer =
    setInterval(() => {

      testimonialIndex =
        (testimonialIndex + 1) %
        TESTIMONIALS.length;

      updateTestimonialSlide();

    }, 5500);

}


function resetTestimonialTimer() {

  clearInterval(
    testimonialTimer
  );

  startTestimonialAutoplay();

}


/* =========================================================
   FAQ
   ========================================================= */

function initFaq() {

  document
    .querySelectorAll(".faq-item")
    .forEach(item => {

      const question =
        item.querySelector(
          ".faq-question"
        );

      const answer =
        item.querySelector(
          ".faq-answer"
        );


      if (!question || !answer) {
        return;
      }


      question.addEventListener(
        "click",
        () => {

          const isOpen =
            item.classList.contains(
              "open"
            );


          document
            .querySelectorAll(
              ".faq-item"
            )
            .forEach(other => {

              other.classList.remove(
                "open"
              );

              const otherAnswer =
                other.querySelector(
                  ".faq-answer"
                );

              if (otherAnswer) {
                otherAnswer.style.maxHeight =
                  null;
              }

            });


          if (!isOpen) {

            item.classList.add(
              "open"
            );

            answer.style.maxHeight =
              answer.scrollHeight +
              "px";

          }

        }
      );

    });

}


/* =========================================================
   TOUR MODAL
   ========================================================= */

function openTourModal(id) {

  const tour =
    TOURS.find(
      item =>
        item.id === id
    );


  if (!tour) return;


  activeTour = tour;
  bookingQty = 2;


  const setText =
    (id, value) => {

      const element =
        document.getElementById(id);

      if (element) {
        element.textContent =
          value || "";
      }

    };


  const image =
    document.getElementById(
      "tmImage"
    );

  if (image) {

    image.src =
      tour.image;

    image.alt =
      tour.name;

  }


  setText(
    "tmBadge",
    tour.badge
  );


  const badge =
    document.getElementById(
      "tmBadge"
    );

  if (badge) {

    badge.className =
      "tour-badge " +
      (
        tour.badge === "NOUVEAU"
          ? "new"
          : ""
      );

  }


  setText(
    "tmDestination",
    tour.destination
  );


  setText(
    "tmTitle",
    tour.name
  );


  setText(
    "tmDuration",
    tour.duration
  );


  setText(
    "tmRating",
    "★ " +
    Number(tour.rating)
      .toFixed(1)
  );


  setText(
    "tmDesc",
    tour.description
  );


  setText(
    "tmPrice",
    formatPrice(tour.price)
  );


  setText(
    "tmQtyValue",
    bookingQty
  );


  /* =========================
     PROGRAMME
     ========================= */

  const programElement =
    document.getElementById(
      "tmProgram"
    );


  if (programElement) {

    if (
      Array.isArray(
        tour.program
      ) &&
      tour.program.length
    ) {

      programElement.innerHTML =
        tour.program.map(
          item => `

            <li>

              <span class="time">
                ${item.time || ""}
              </span>

              <span>
                ${item.label || ""}
              </span>

            </li>

          `
        ).join("");

    } else {

      programElement.innerHTML =
        "<li>Programme à venir.</li>";

    }

  }


  /* =========================
     INCLUS
     ========================= */

  const includedElement =
    document.getElementById(
      "tmIncluded"
    );


  if (includedElement) {

    includedElement.innerHTML =
      Array.isArray(tour.included)

        ? tour.included
            .map(
              item =>
                `<li>${item}</li>`
            )
            .join("")

        : "<li>Informations à venir.</li>";

  }


  /* =========================
     NON INCLUS
     ========================= */

  const excludedElement =
    document.getElementById(
      "tmExcluded"
    );


  if (excludedElement) {

    excludedElement.innerHTML =
      Array.isArray(tour.excluded)

        ? tour.excluded
            .map(
              item =>
                `<li>${item}</li>`
            )
            .join("")

        : "<li>Informations à venir.</li>";

  }


  /* =========================================================
     DATES
     ========================================================= */

  const datesBlock =
    document.getElementById(
      "tmDatesBlock"
    );

  const datesElement =
    document.getElementById(
      "tmDates"
    );


  if (
    datesBlock &&
    datesElement
  ) {

    if (
      Array.isArray(tour.dates) &&
      tour.dates.length
    ) {

      datesBlock.hidden =
        false;


      datesElement.innerHTML =
        tour.dates.map(
          date => `
            <span class="tour-date-pill">
              ${date}
            </span>
          `
        ).join("");

    } else {

      datesBlock.hidden =
        true;

      datesElement.innerHTML =
        "";

    }

  }


  /* =========================================================
     FORMULES
     ========================================================= */

  const formulasBlock =
    document.getElementById(
      "tmFormulas"
    );


  if (formulasBlock) {

    if (
      Array.isArray(tour.formulas) &&
      tour.formulas.length
    ) {

      formulasBlock.innerHTML =
        tour.formulas.map(
          formula => `

            <div class="tm-formula-card">

              <div class="tm-formula-head">

                <strong>
                  ${formula.name}
                </strong>

                <span>
                  ${formatPrice(
                    formula.price
                  )}
                </span>

              </div>

              ${
                Array.isArray(
                  formula.details
                )

                  ? `
                    <ul>
                      ${formula.details
                        .map(
                          detail =>
                            `<li>${detail}</li>`
                        )
                        .join("")}
                    </ul>
                  `

                  : ""
              }

            </div>

          `
        ).join("");

    } else {

      formulasBlock.innerHTML =
        "";

    }

  }


  /* =========================================================
     RÉSERVATION
     ========================================================= */

  const reservationBlock =
    document.getElementById(
      "tmReservationBlock"
    );

  const reservationElement =
    document.getElementById(
      "tmReservation"
    );


  if (
    reservationBlock &&
    reservationElement
  ) {

    if (
      Array.isArray(
        tour.reservation
      ) &&
      tour.reservation.length
    ) {

      reservationBlock.hidden =
        false;


      reservationElement.innerHTML =
        tour.reservation
          .map(
            item =>
              `<li>${item}</li>`
          )
          .join("");

    } else {

      reservationBlock.hidden =
        true;

      reservationElement.innerHTML =
        "";

    }

  }


  /* =========================================================
     CONDITIONS
     ========================================================= */

  const conditionsBlock =
    document.getElementById(
      "tmConditionsBlock"
    );

  const conditionsElement =
    document.getElementById(
      "tmConditions"
    );


  if (
    conditionsBlock &&
    conditionsElement
  ) {

    if (
      Array.isArray(
        tour.conditions
      ) &&
      tour.conditions.length
    ) {

      conditionsBlock.hidden =
        false;


      conditionsElement.innerHTML =
        tour.conditions
          .map(
            item =>
              `<li>${item}</li>`
          )
          .join("");

    } else {

      conditionsBlock.hidden =
        true;

      conditionsElement.innerHTML =
        "";

    }

  }


  /* =========================================================
     WHATSAPP
     ========================================================= */

  const whatsapp =
    document.getElementById(
      "tmWhatsapp"
    );


  if (whatsapp) {

    whatsapp.href =
      buildWhatsappLink(
        tourWhatsappMessage(
          tour
        )
      );

  }


  /* =========================================================
     OPEN MODAL
     ========================================================= */

  const backdrop =
    document.getElementById(
      "tourModalBackdrop"
    );


  if (backdrop) {

    backdrop.classList.add(
      "open"
    );

    document.body.style.overflow =
      "hidden";

  }

}


/* =========================================================
   CLOSE TOUR MODAL
   ========================================================= */

function closeTourModal() {

  const backdrop =
    document.getElementById(
      "tourModalBackdrop"
    );


  if (backdrop) {

    backdrop.classList.remove(
      "open"
    );

  }


  document.body.style.overflow =
    "";

}


/* =========================================================
   INIT TOUR MODAL
   ========================================================= */

function initTourModal() {

  const closeButton =
    document.getElementById(
      "tourModalClose"
    );

  const backdrop =
    document.getElementById(
      "tourModalBackdrop"
    );


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeTourModal
    );

  }


  if (backdrop) {

    backdrop.addEventListener(
      "click",
      e => {

        if (
          e.target.id ===
          "tourModalBackdrop"
        ) {

          closeTourModal();

        }

      }
    );

  }


  const minus =
    document.getElementById(
      "tmQtyMinus"
    );

  const plus =
    document.getElementById(
      "tmQtyPlus"
    );

  const qtyValue =
    document.getElementById(
      "tmQtyValue"
    );


  if (minus) {

    minus.addEventListener(
      "click",
      () => {

        if (bookingQty > 1) {
          bookingQty--;
        }

        if (qtyValue) {
          qtyValue.textContent =
            bookingQty;
        }

      }
    );

  }


  if (plus) {

    plus.addEventListener(
      "click",
      () => {

        bookingQty++;

        if (qtyValue) {
          qtyValue.textContent =
            bookingQty;
        }

      }
    );

  }


  const bookButton =
    document.getElementById(
      "tmBookBtn"
    );


  if (bookButton) {

    bookButton.addEventListener(
      "click",
      () => {

        closeTourModal();

        openBookingModal(
          activeTour
        );

      }
    );

  }

}


/* =========================================================
   BOOKING MODAL
   ========================================================= */

function openBookingModal(tour) {

  const backdrop =
    document.getElementById(
      "bookingModalBackdrop"
    );


  if (!backdrop) return;


  backdrop.classList.add(
    "open"
  );


  document.body.style.overflow =
    "hidden";


  const formWrap =
    document.getElementById(
      "bookingFormWrap"
    );

  const confirmation =
    document.getElementById(
      "bookingConfirmation"
    );


  if (formWrap) {
    formWrap.hidden = false;
  }


  if (confirmation) {
    confirmation.hidden = true;
  }


  const tourName =
    tour
      ? tour.name
      : "";


  const bookingTourName =
    document.getElementById(
      "bookingTourName"
    );


  if (bookingTourName) {

    bookingTourName.textContent =
      tourName
        ? `Pour l'excursion : ${tourName}`
        : "Demande générale";

  }


  const bookingTourInput =
    document.getElementById(
      "bookingTourInput"
    );


  if (bookingTourInput) {
    bookingTourInput.value =
      tourName;
  }


  const travelers =
    document.querySelector(
      '#bookingForm [name="travelers"]'
    );


  if (travelers) {
    travelers.value =
      bookingQty || 2;
  }

}


function closeBookingModal() {

  const backdrop =
    document.getElementById(
      "bookingModalBackdrop"
    );


  if (backdrop) {

    backdrop.classList.remove(
      "open"
    );

  }


  document.body.style.overflow =
    "";

}


function initBookingModal() {

  const closeButton =
    document.getElementById(
      "bookingModalClose"
    );

  const backdrop =
    document.getElementById(
      "bookingModalBackdrop"
    );

  const confirmClose =
    document.getElementById(
      "confirmCloseBtn"
    );

  const form =
    document.getElementById(
      "bookingForm"
    );


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeBookingModal
    );

  }


  if (backdrop) {

    backdrop.addEventListener(
      "click",
      e => {

        if (
          e.target.id ===
          "bookingModalBackdrop"
        ) {

          closeBookingModal();

        }

      }
    );

  }


  if (confirmClose) {

    confirmClose.addEventListener(
      "click",
      closeBookingModal
    );

  }


  if (form) {

    form.addEventListener(
      "submit",
      e => {

        e.preventDefault();


        const formWrap =
          document.getElementById(
            "bookingFormWrap"
          );

        const confirmation =
          document.getElementById(
            "bookingConfirmation"
          );


        if (formWrap) {
          formWrap.hidden = true;
        }


        if (confirmation) {
          confirmation.hidden =
            false;
        }


        e.target.reset();

      }
    );

  }

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

function initContactForm() {

  const form =
    document.getElementById(
      "contactForm"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    e => {

      e.preventDefault();


      const button =
        form.querySelector(
          "button"
        );


      if (!button) return;


      const originalText =
        button.textContent;


      button.textContent =
        "Message envoyé ✓";


      button.disabled =
        true;


      form.reset();


      setTimeout(() => {

        button.textContent =
          originalText;

        button.disabled =
          false;

      }, 2600);

    }
  );

}


/* =========================================================
   SCROLL REVEAL
   ========================================================= */

function initScrollReveal() {

  if (
    !("IntersectionObserver" in window)
  ) {

    document
      .querySelectorAll(".reveal")
      .forEach(
        element =>
          element.classList.add(
            "in-view"
          )
      );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "in-view"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.15
      }
    );


  document
    .querySelectorAll(".reveal")
    .forEach(
      element =>
        observer.observe(
          element
        )
    );

}


/* =========================================================
   COUNTERS
   ========================================================= */

function initCounters() {

  const nums =
    document.querySelectorAll(
      ".stat-num"
    );


  if (!nums.length) return;


  if (
    !("IntersectionObserver" in window)
  ) {

    nums.forEach(
      element =>
        animateCounter(element)
    );

    return;

  }


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              animateCounter(
                entry.target
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.4
      }
    );


  nums.forEach(
    element =>
      observer.observe(
        element
      )
  );

}


function animateCounter(element) {

  const target =
    parseFloat(
      element.dataset.target
    );


  if (
    Number.isNaN(target)
  ) return;


  const decimals =
    parseInt(
      element.dataset.decimal ||
      "0"
    );


  const suffix =
    element.dataset.suffix ||
    "";


  const duration =
    1400;


  const start =
    performance.now();


  function step(now) {

    const progress =
      Math.min(
        (now - start) /
          duration,
        1
      );


    const eased =
      1 -
      Math.pow(
        1 - progress,
        3
      );


    const value =
      target * eased;


    element.textContent =
      value.toFixed(
        decimals
      ) + suffix;


    if (progress < 1) {

      requestAnimationFrame(
        step
      );

    } else {

      element.textContent =
        target.toFixed(
          decimals
        ) + suffix;

    }

  }


  requestAnimationFrame(
    step
  );

}


/* =========================================================
   ACTIVE NAV LINK
   ========================================================= */

function initActiveNavLink() {

  const sectionIds = [
    "accueil",
    "excursions",
    "destinations",
    "circuits",
    "apropos",
    "contact"
  ];


  const sections =
    sectionIds
      .map(
        id =>
          document.getElementById(
            id
          )
      )
      .filter(Boolean);


  const links =
    document.querySelectorAll(
      ".nav-link"
    );


  if (!sections.length) return;


  window.addEventListener(
    "scroll",
    () => {

      let currentId =
        sections[0].id;


      sections.forEach(
        section => {

          if (
            window.scrollY + 140 >=
            section.offsetTop
          ) {

            currentId =
              section.id;

          }

        }
      );


      links.forEach(
        link => {

          link.classList.toggle(
            "active",
            link.getAttribute(
              "href"
            ) ===
              "#" + currentId
          );

        }
      );

    }
  );

}


/* =========================================================
   INITIALISATION
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initWhatsappLinks();

    initNavbarScroll();

    initMobileMenu();

    initSearchOverlay();

    initHeroSearch();

    initFiltersAndSort();

    renderTours();

    updateFavCount();

    initFavDrawer();

    renderDestinations();

    renderCircuits();

    renderInstagram();

    renderTestimonials();

    initFaq();

    initTourModal();

    initBookingModal();

    initContactForm();

    initScrollReveal();

    initCounters();

    initActiveNavLink();


    /* Date minimum */

    const today =
      new Date()
        .toISOString()
        .split("T")[0];


    const hsDate =
      document.getElementById(
        "hsDate"
      );


    if (hsDate) {
      hsDate.min =
        today;
    }

  }
);
