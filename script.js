/* =========================================================
   PRIVILEGE TRAVEL — script.js
   Version complète corrigée
   ========================================================= */


/* =========================================================
   CONFIG
   ========================================================= */

const CONFIG = {
  whatsapp: "212675296774",
  instagram: "https://instagram.com/priviligetravel"
};


/* =========================================================
   DATA — VOYAGES
   ========================================================= */

const TOURS = [

{
id:"merzouga-ouarzazate",

name:"Merzouga – Ouarzazate",

destination:"Erg Chebbi • Rissani • Erfoud • Tinghir • Gorges Todgha • Aït Ben Haddou",

category:"desert",

duration:"4 jours / 3 nuits",

price:1299,

rating:5.0,

badge:"BEST SELLER",

image:"PM6.jpeg",


description:
"Un voyage de luxe au sud-est du Maroc à la découverte de Merzouga, Ouarzazate, Rissani, Erfoud, Tinghir, les Gorges Todgha, Kelaat M'Gouna et Aït Ben Haddou. Une expérience entre désert, montagnes, culture et paysages exceptionnels.",


dates:[

"01–04 octobre 2026",
"08–11 octobre 2026",
"15–18 octobre 2026",
"18–21 octobre 2026",
"22–25 octobre 2026",
"29 octobre–01 novembre 2026",
"05–08 novembre 2026",
"12–15 novembre 2026",
"19–22 novembre 2026",
"26–29 novembre 2026",
"03–06 décembre 2026",
"06–09 décembre 2026",
"10–13 décembre 2026",
"17–20 décembre 2026",
"24–27 décembre 2026",
"08–11 janvier 2027",
"14–17 janvier 2027",
"21–24 janvier 2027",
"24–27 janvier 2027",
"28–31 janvier 2027",
"21–24 mars 2027",
"25–28 mars 2027",
"29 avril–02 mai 2027",
"09–12 mai 2027",
"13–16 mai 2027",
"20–23 mai 2027",
"27–30 mai 2027"

],


formulas:[

{
name:"Programme normal",
price:1299,

items:[

"Transport touristique climatisé",

"Nuitée hôtel 4★ à Erfoud",

"Nuitée hôtel 4★ à Ouarzazate",

"Petits déjeuners buffet",

"Dîners buffet",

"Animation et accompagnement"

]

},


{
name:"Programme complet",
price:1499,

items:[

"Transport touristique climatisé",

"Hôtels 4★ Erfoud et Ouarzazate",

"Tous les petits déjeuners",

"Tous les dîners buffet",

"Déjeuner à Rissani",

"Balade chameau à Merzouga",

"Excursion 4×4 désert",

"Entrée musée du cinéma Ouarzazate",

"Animation et guide"

]

},


{
name:"Avion + Retour bus",
price:2399,

items:[

"Vol Royal Air Maroc aller",

"Retour en autocar touristique",

"Hôtels 4★",

"Tous les repas inclus",

"Excursion Merzouga 4×4 + dromadaire",

"Musée du cinéma",

"Animation et accompagnement"

]

}

],


program:[


{
time:"JOUR 1",

label:
"Départ Casablanca 19:00, Mohammedia 20:00, Rabat Agdal 20:45, Kénitra 21:45 puis direction sud-est avec pause dîner."
},


{
time:"JOUR 2 MATIN",

label:
"Petit déjeuner, arrêt à Aïn Atti, découverte d'Erfoud et installation à l'hôtel 4★."
},


{
time:"APRÈS-MIDI",

label:
"Visite de Rissani, découverte de la ville des dattes et déjeuner traditionnel."
},


{
time:"SOIR",

label:
"Départ vers Merzouga, excursion en 4×4 et dromadaire, coucher du soleil sur les dunes, dîner buffet et nuit à l'hôtel."
},


{
time:"JOUR 3",

label:
"Petit déjeuner, visite oasis Drâa, direction Gorges Todgha, déjeuner à Tinghir puis découverte d'Ouarzazate et Aït Ben Haddou."
},


{
time:"SOIR",

label:
"Installation hôtel 4★ Ouarzazate, détente, piscine et dîner buffet."
},


{
time:"JOUR 4",

label:
"Visite musée du cinéma, studios Ouarzazate, Kasbah Aït Ben Haddou, déjeuner puis retour vers Casablanca, Mohammedia, Rabat et Kénitra."

}

],


included:[

"Transport touristique climatisé",

"Hébergement hôtels 4★",

"2 petits déjeuners buffet",

"2 dîners buffet",

"Animation et accompagnement",

"Guide durant la visite"

],


excluded:[

"Activités optionnelles selon formule",

"Dépenses personnelles",

"Repas non mentionnés"

],


reservation:

"Réservation par WhatsApp au 0675296774 avec nom complet, CIN, téléphone et acompte selon disponibilité.",


conditions:[

"Places limitées selon disponibilité",

"Les sièges sont attribués selon l'ordre des réservations",

"Le programme peut subir de petites modifications",

"Respect des horaires obligatoire"

]

},

{
id:"dakhla-maldives-du-maroc",

name:"Grand Sud – Dakhla en 8 jours",

destination:"Tiznit • Tan-Tan • Laâyoune • Dakhla",

category:"aventure",

duration:"8 jours / 6 nuits",

price:4199,

rating:5.0,

badge:"SPÉCIAL DAKHLA",

image:"PM8.jpeg",


description:
"Un circuit complet le long de la côte atlantique, des villes du Sud jusqu'à la presqu'île de Dakhla. Plages de Lakhsas, Trou du Diable, parc de Khnifiss, Dune Blanche, source chaude d'Aïn Rek, ferme d'huîtres et désert. Aller en autocar climatisé, retour en avion avec Royal Air Maroc.",


dates:[
"03–10 octobre 2026",
"17–24 octobre 2026 (spécial vacances scolaires)",
"31 octobre–07 novembre 2026",
"14–21 novembre 2026",
"05–12 décembre 2026 (spécial vacances scolaires)",
"26 décembre 2026–02 janvier 2027 (spécial réveillon 2027)",
"09–16 janvier 2027",
"23–30 janvier 2027",
"20–27 mars 2027 (spécial vacances scolaires)",
"03–10 avril 2027",
"17–24 avril 2027",
"01–08 mai 2027",
"22–29 mai 2027"
],


program:[

{
time:"JOUR 1 — 16:30",
label:"Départ de Fès — devant la gare ferroviaire"
},

{
time:"18:00",
label:"Départ de Meknès — gare routière Sidi Saïd"
},

{
time:"20:00",
label:"Départ de Rabat — Gare Rabat Agdal"
},

{
time:"20:45",
label:"Départ de Mohammedia — devant Marjane"
},

{
time:"21:30",
label:"Départ de Casablanca — Gare routière Casa Voyageurs (dîner dans une aire de repos)"
},

{
time:"01:30",
label:"Départ de Marrakech — devant la gare ferroviaire, puis direction Tiznit"
},


{
time:"JOUR 2 — Matin",
label:"Petit déjeuner, installation à l'hôtel Idou Tiznit et répartition des chambres (doubles ou triples)"
},

{
time:"Journée",
label:"Plage de Lakhsas : temps libre, baignade, puis déjeuner"
},

{
time:"Après-midi",
label:"Visite du souk de l'argent de Tiznit (bijoux et artisanat)"
},

{
time:"Soir",
label:"Dîner et nuit à Tiznit"
},


{
time:"JOUR 3 — Matin",
label:"Petit déjeuner puis route vers Guelmim (Porte du Sahara)"
},

{
time:"Matin",
label:"Arrivée à Tan-Tan et photos avec les chameaux, symbole de la ville"
},

{
time:"Midi",
label:"Visite du Trou du Diable (Ajab Allah) puis déjeuner à Akhfennir"
},

{
time:"Après-midi",
label:"Parc national de Khnifiss et balade en bateau sur la lagune de Naïla (optionnelle, 40 DH)"
},

{
time:"Soir",
label:"Arrivée à Laâyoune, installation à l'hôtel, dîner et balade nocturne en ville"
},


{
time:"JOUR 4 — Matin",
label:"Petit déjeuner à l'hôtel puis route vers Dakhla"
},

{
time:"Matin",
label:"Arrêt à la plage de Foum El Oued"
},

{
time:"Midi",
label:"Passage par Boujdour et déjeuner libre"
},

{
time:"Après-midi",
label:"Arrivée à Dakhla, installation à l'hôtel Surf House et temps libre pour se reposer"
},

{
time:"Soir",
label:"Dîner à l'hôtel"
},


{
time:"JOUR 5 — Matin",
label:"Petit déjeuner puis départ en 4x4 (optionnel, 200 DH) vers la célèbre Dune Blanche"
},

{
time:"Matin",
label:"Temps libre pour se détendre et se baigner à la Dune Blanche"
},

{
time:"Midi",
label:"Source chaude d'Aïn Rek (La Source) : bain d'eau sulfureuse à 39°C"
},

{
time:"Après-midi",
label:"Visite d'une ferme d'huîtres à Boutalha et déjeuner sur place"
},

{
time:"Après-midi",
label:"Visite de la réserve d'élevage d'autruches, puis retour à l'hôtel"
},

{
time:"Soir",
label:"Complexe d'artisanat traditionnel, marché central (thé, daraa et produits locaux) et dîner"
},


{
time:"JOUR 6 — Matin",
label:"Petit déjeuner puis départ en 4x4 (optionnel, 250 DH) vers la sebkha d'Imlili via Aarkoub, à 130 km à l'est de Dakhla"
},

{
time:"Matin",
label:"Découverte des poches d'eau très salées abritant de petits poissons, phénomène écologique unique"
},

{
time:"Midi",
label:"Plage de Porto Rico : temps libre et baignade"
},

{
time:"Après-midi",
label:"Visite des tentes nomades, thé sahraoui et photos en tenue traditionnelle, puis déjeuner"
},

{
time:"Soir",
label:"Retour à l'hôtel, balade nocturne libre à Dakhla et dîner"
},


{
time:"JOUR 7 — Matin",
label:"Petit déjeuner puis route de retour vers Laâyoune"
},

{
time:"Midi",
label:"Déjeuner à Boujdour"
},

{
time:"Après-midi",
label:"Arrivée à Laâyoune (hôtel Oscar), répartition des chambres et repos"
},

{
time:"Soir",
label:"Visite de la place du Mechouar et de l'avenue Mecca (produits locaux), puis dîner"
},


{
time:"JOUR 8 — Matin",
label:"Petit déjeuner puis transfert à l'aéroport Hassan Ier de Laâyoune"
},

{
time:"Fin de matinée",
label:"Vol retour avec Royal Air Maroc vers l'aéroport Mohammed V de Casablanca"
}

],


included:[

"Transport aller en autocar touristique climatisé",

"Vol retour avec Royal Air Maroc (Laâyoune – Casablanca)",

"Tous les petits déjeuners",

"3 dîners à Dakhla",

"2 nuits à Laâyoune (hôtel Oscar ou équivalent)",

"3 nuits à Dakhla (hôtel Surf House Dakhla, proche de la mer, avec piscine)",

"1 nuit à Tiznit (hôtel Idou Tiznit)",

"Animation et accompagnement durant tout le voyage"

],


excluded:[

"Excursion en 4x4 à la Dune Blanche 200 DH (optionnelle)",

"Excursion en 4x4 à la sebkha d'Imlili 250 DH (optionnelle)",

"Balade en bateau sur la lagune de Naïla 40 DH (optionnelle)",

"Déjeuners et dîners hors Dakhla (sauf indication contraire)",

"Dépenses personnelles"

],


reservation:
"Réservation et renseignements par WhatsApp ou téléphone auprès d'Allo Privilège Travel au 0675296774. Pour réserver, communiquez votre numéro de CIN, votre nom complet et votre numéro de téléphone, puis versez le montant total ou un acompte de 2000 DH (virement bancaire ou sur place à l'agence).",


conditions:[

"Réservation ouverte dans la limite des places disponibles",

"Places numérotées selon l'ordre de réservation",

"Tarif enfant : 1 à 5 ans 2500 DH, 6 à 10 ans 3200 DH, à partir de 11 ans même tarif que l'adulte",

"Un seul enfant par chambre bénéficie du tarif enfant, en chambre double avec ses parents",

"Le programme peut subir de légères modifications pour assurer le bon déroulement du voyage",

"Merci de respecter les horaires pour profiter pleinement du voyage",

"En cas d'annulation, prévenir l'agence suffisamment à l'avance avant le départ",

"Aucune réclamation n'est acceptée en cas d'absence le jour du départ"

]

},
   
   {
id:"dakhla",

name:"Dakhla — Voyage Avion",

destination:"Dakhla • Lagon • Désert • Océan Atlantique",

category:"plages",

duration:"4 jours / 3 nuits",

price:3799,

rating:5.0,

badge:"BEST SELLER",

image:"PM5.jpeg",


description:
"Un voyage exceptionnel à Dakhla avec Privilège Travel. Vol aller-retour avec Royal Air Maroc, hôtels au choix, excursions en 4x4, lagon, désert et paysages uniques.",


dates:[
"Départ chaque jeudi — Retour dimanche",
"Disponible toute l'année"
],


formulas:[

{
name:"Hôtel 3★ — Centre ville (Petit déjeuner)",
price:3899,
items:[
"Chambre double ou triple : 3899 DH/personne",
"Chambre single : 4299 DH",
"Petit déjeuner inclus"
]
},


{
name:"Hôtel 4★ Surf House — Vue plage (Demi pension)",
price:4199,
items:[
"Chambre double ou triple : 4199 DH/personne",
"Chambre single : 4949 DH",
"Piscine et proximité plage",
"Demi pension"
]
},


{
name:"Hôtel 4★ PK25 / West Point — Vue mer",
price:6450,
items:[
"Chambre double ou triple : 6450 DH/personne",
"Chambre single : 8150–8250 DH",
"Pension complète"
]
},


{
name:"Hôtel 5★ Dakhla Club — Vue mer",
price:6999,
items:[
"Chambre double ou triple : 6999 DH/personne",
"Chambre single : 7799 DH",
"Piscine",
"Pension complète"
]
}

],


program:[


{
time:"JOUR 1",
label:
"Rassemblement à l'aéroport Mohammed V Casablanca. Vol direct Casablanca → Dakhla avec Royal Air Maroc. Accueil, transfert hôtel, installation, dîner inclus et nuitée."
},


{
time:"JOUR 2 — 09:00",
label:
"Petit déjeuner inclus. Départ en 4x4 vers la Dune Blanche, visite de la Source Asmaa et découverte des paysages du lagon. Déjeuner libre au restaurant Parc des Huîtres. Retour hôtel et dîner inclus."
},


{
time:"JOUR 3 — 09:00",
label:
"Petit déjeuner. Safari 4x4 vers Sabkha Amelili, découverte du site naturel, puis direction plage Porto Rico avec temps libre baignade. Retour hôtel, dîner inclus et balade nocturne en ville."
},


{
time:"JOUR 4",
label:
"Petit déjeuner hôtel. Check-out et transfert vers l'aéroport. Vol retour Dakhla → Casablanca avec Royal Air Maroc."
}

],


included:[

"Vol aller-retour Casablanca — Dakhla avec Royal Air Maroc",

"Bagages compris (23 + 10 kg)",

"Transfert aéroport ↔ hôtel",

"3 nuitées selon hôtel choisi",

"2 jours d'excursions Safari 4x4",

"Frais entrée ferme d'autruches",

"Frais baignade Source Asmaa",

"Visites guidées"

],


excluded:[

"Déjeuners non mentionnés",

"Dépenses personnelles",

"Options supplémentaires",

"Activités non incluses"

],


reservation:
"Réservation par WhatsApp au 0675296774. Contactez Privilège Travel pour choisir votre hôtel et confirmer votre réservation.",


conditions:[

"Départ chaque jeudi retour dimanche",

"Voyage personnalisable selon vos préférences",

"Prix selon hôtel choisi",

"Disponibilité selon les places aériennes et hôtelières",

"Programme pouvant être adapté selon les conditions du voyage"

]

},

{
id:"dakhla",

name:"Dakhla — Maldives du Maroc",

destination:"Dakhla • Côte Atlantique • Grand Sud Marocain",

category:"plages",

duration:"9 jours / 7 nuits",

price:3149,

rating:5.0,

badge:"BEST SELLER",

image:"PM7.jpeg",


description:
"Une aventure exceptionnelle vers le sud du Maroc à la découverte de Dakhla, ses plages paradisiaques, ses paysages désertiques et les plus beaux endroits de la côte atlantique.",


dates:[
"03–11 octobre 2026",
"17–25 octobre 2026",
"31 octobre–08 novembre 2026",
"14–22 novembre 2026",
"05–13 décembre 2026",
"26 décembre 2026–03 janvier 2027",
"09–17 janvier 2027",
"23–31 janvier 2027",
"20–28 mars 2027",
"03–11 avril 2027",
"17–25 avril 2027",
"01–09 mai 2027",
"22–30 mai 2027"
],


formulas:[

{
name:"Programme Standard",
price:3149,

items:[
"Transport touristique climatisé aller-retour",
"Tous les petits déjeuners",
"1 nuit à Agadir Hotel Sud Bahia ou équivalent",
"2 nuits à Laâyoune Hotel Oscar ou équivalent",
"3 nuits à Dakhla Hotel Playa ou équivalent",
"1 nuit à Tiznit Hotel Sénégal ou équivalent",
"Animation et accompagnement durant la totalité du voyage"
]

},


{
name:"Programme VIP",
price:3399,

items:[
"Transport touristique climatisé aller-retour",
"Tous les petits déjeuners",
"1 nuit à Agadir Hotel Oasis ou équivalent",
"2 nuits à Laâyoune Hotel Oscar ou équivalent",
"3 nuits à Dakhla Surf House 4 étoiles avec piscine",
"3 dîners à Dakhla",
"1 nuit à Tiznit Hotel Idou Tiznit",
"Animation et accompagnement durant la totalité du voyage"
]

}

],


program:[

{
time:"JOUR 1",
label:"Départ depuis Fès, Meknès, Rabat, Mohammedia et Casablanca. Direction Tiznit."
},

{
time:"JOUR 2",
label:"Visite plage Legzira, temps libre plage, visite marché de Tiznit et installation hôtel."
},

{
time:"JOUR 3",
label:"Direction Guelmim, Tan Tan, Trou du Diable, parc national Khnifiss, balade en bateau au lac Naila et arrivée Laâyoune."
},

{
time:"JOUR 4",
label:"Départ vers Dakhla avec visite Foum El Oued et Boujdour. Installation à l'hôtel Dakhla."
},

{
time:"JOUR 5",
label:"Excursion 4x4 vers Dune Blanche, source Ain Rak, ferme ostréicole, réserve d'autruches et marché local."
},

{
time:"JOUR 6",
label:"Excursion vers Sebkha Imili, Porto Rico, rencontre avec les nomades et pause thé sahraoui."
},

{
time:"JOUR 7",
label:"Retour vers Laâyoune, visite touristique de la ville et nuit à l'hôtel."
},

{
time:"JOUR 8",
label:"Départ vers Tarfaya, visite Casa Mar, direction Agadir et soirée libre."
},

{
time:"JOUR 9",
label:"Matin libre à Agadir, départ retour après déjeuner et retour vers les villes de départ."
}

],


included:[

"Transport touristique climatisé aller-retour",

"Petits déjeuners durant la totalité du séjour",

"Hébergement dans les hôtels mentionnés",

"Animation et accompagnement pendant le voyage"

],


excluded:[

"Excursions 4x4 à Dakhla",

"Balade bateau lac Naila",

"Activités nautiques",

"Repas non mentionnés",

"Dépenses personnelles"

],


reservation:
"Réservation par WhatsApp au 0675296774 avec nom complet, CIN, téléphone et acompte de 1000 DH.",


conditions:[

"Places limitées selon disponibilité",

"Les sièges sont attribués selon l'ordre de réservation",

"Le programme peut subir de petites modifications selon les conditions",

"Les personnes absentes au départ ne peuvent pas réclamer de remboursement"

]

},
   
   {
id:"dakhla",

name:"Dakhla — SUD du Maroc",

destination:"Sud marocain • Océan Atlantique • Dakhla",

category:"aventure",

duration:"9 jours / 7 nuits",

price:3149,

rating:5.0,

badge:"BEST SELLER",

image:"PM4.jpeg",


description:
"Une aventure exceptionnelle vers Dakhla, les Maldives du Maroc. Découvrez les paysages du sud marocain, les plages sauvages, le désert, les lagunes et les plus beaux sites entre Agadir, Laâyoune et Dakhla.",


dates:[

"03–11 octobre 2026",

"17–25 octobre 2026 (Vacances scolaires)",

"31 octobre–08 novembre 2026",

"14–22 novembre 2026",

"05–13 décembre 2026 (Vacances scolaires)",

"26 décembre 2026–03 janvier 2027 (Réveillon)",

"09–17 janvier 2027",

"23–31 janvier 2027",

"20–28 mars 2027",

"03–11 avril 2027",

"17–25 avril 2027",

"01–09 mai 2027",

"22–30 mai 2027"

],


program:[


{
time:"JOUR 1",
label:
"Départ depuis Fès, Meknès, Rabat, Mohammedia et Casablanca. Route vers le sud marocain avec pauses et dîner libre."
},


{
time:"JOUR 2",
label:
"Arrivée à Tiznit. Installation hôtel. Visite plage Legzira, temps libre plage, visite marché local."
},


{
time:"JOUR 3",
label:
"Départ vers Guelmim, Tan Tan, Trou du Diable, parc national Khnifiss, balade en bateau à la lagune Naila et arrivée à Laâyoune."
},


{
time:"JOUR 4",
label:
"Départ vers Dakhla. Visite Foum El Oued, Boujdour puis arrivée à Dakhla. Installation hôtel et temps libre."
},


{
time:"JOUR 5",
label:
"Excursion 4x4 optionnelle vers Dune Blanche, source thermale Ain Asma, ferme ostréicole Talha Mar, réserve des autruches et découverte de Dakhla."
},


{
time:"JOUR 6",
label:
"Excursion désert vers Sebkha Imili, plage Porto Rico, rencontre avec les nomades, thé sahraoui et retour hôtel."
},


{
time:"JOUR 7",
label:
"Départ retour vers Laâyoune. Visite place Mechouar et avenue Mekka. Nuit à l'hôtel."
},


{
time:"JOUR 8",
label:
"Départ vers Tarfaya, visite Casa Mar, route vers Agadir, installation hôtel et promenade nocturne."
},


{
time:"JOUR 9",
label:
"Matin libre à Agadir, départ retour après déjeuner et retour vers les villes de départ."
}


],


included:[

"Transport touristique climatisé aller-retour",

"Tous les petits déjeuners",

"Accompagnement et animation durant la totalité du voyage",

"1 nuit hôtel Agadir",

"2 nuits hôtel Laâyoune",

"3 nuits hôtel Dakhla",

"1 nuit hôtel Tiznit"

],


excluded:[

"Repas non mentionnés",

"Excursion 4x4",

"Balades en bateau",

"Activités optionnelles",

"Dépenses personnelles"

],


formulas:[

{
name:"Programme Standard",
price:3149,

items:[

"Transport touristique",

"Petits déjeuners",

"Hôtel Sud Bahia Agadir",

"Hôtel Oscar Laâyoune",

"Hôtel Playa Dakhla",

"Hôtel Sénégal Tiznit"

]

},


{
name:"Programme VIP",

price:3399,

items:[

"Transport touristique",

"Petits déjeuners",

"Hôtel Oasis Agadir",

"Hôtel Oscar Laâyoune",

"Dakhla Surf House 4 étoiles avec piscine",

"3 dîners à Dakhla",

"Hôtel Idou Tiznit"

]

}

],



reservation:
"Réservation par WhatsApp au 0675296774. Acompte conseillé : 1000 DH pour confirmer la place.",


conditions:[

"Places limitées selon disponibilité",

"Les sièges sont attribués selon l'ordre de réservation",

"Le programme peut subir de petites modifications selon les conditions",

"Les personnes doivent respecter les horaires du programme",

"En cas d'annulation, prévenir l'organisation suffisamment tôt"

]


},

  /* =======================================================
     MARRAKECH
     ======================================================= */

 {
id:"imlil-akfay-marrakech",

name:"Imlil – Akfay – Marrakech",

destination:"Montagnes de l'Atlas • Désert d'Agafay • Ville rouge",

category:"aventure",

duration:"3 jours / 2 nuits",

price:879,

rating:5.0,

badge:"BEST SELLER",

image:"PM3.jpeg",


description:
"Une expérience unique entre les montagnes de l'Atlas, les cascades d'Imlil, le désert d'Agafay et la magie de Marrakech. Une excursion complète entre nature, aventure, détente et découverte.",


dates:[
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
"15–17 janvier 2027",
"22–24 janvier 2027",
"29–31 janvier 2027"
],


program:[

{
time:"VENDREDI 18:00",
label:"Départ de Rabat — Gare Rabat Agdal"
},

{
time:"20:00",
label:"Départ de Casablanca — Gare Casa Voyageurs"
},

{
time:"Nuit",
label:"Direction Imlil et installation au Riad"
},


{
time:"SAMEDI 09:00",
label:"Petit déjeuner au Riad"
},

{
time:"Matin",
label:"Visite des cascades d'Imlil et promenade facile dans la nature"
},

{
time:"Après-midi",
label:"Départ vers Marrakech avec arrêt déjeuner à Tahnaout"
},

{
time:"Soir",
label:"Installation à l'hôtel à Marrakech et temps libre"
},

{
time:"Nuit",
label:"Sortie optionnelle au désert d'Agafay avec dîner et animation (150 DH)"
},


{
time:"DIMANCHE 06:00",
label:"Possibilité de balade en montgolfière au lever du soleil (optionnelle)"
},

{
time:"09:30",
label:"Petit déjeuner à l'hôtel"
},

{
time:"Matin",
label:"Visite de la Palmeraie de Marrakech"
},

{
time:"Après-midi",
label:"Activité Quad dans la Palmeraie (optionnelle)"
},

{
time:"16:00",
label:"Départ retour vers Casablanca puis Rabat"
}

],


included:[

"Transport touristique climatisé aller-retour",

"Nuitée dans un Riad à Imlil",

"Nuitée dans un hôtel à Marrakech",

"Petits déjeuners samedi et dimanche",

"Animation et accompagnement durant le voyage"

],


excluded:[

"Dîner Agafay 150 DH optionnel",

"Montgolfière",

"Quad",

"Repas non mentionnés",

"Dépenses personnelles"

],


reservation:
"Réservation par WhatsApp au 0675296774. Possibilité de confirmer avec un acompte de 300 DH.",


conditions:[

"Places limitées selon disponibilité",

"Confirmation après paiement",

"Le programme peut être modifié pour assurer le bon déroulement du voyage",

"L'agence décline toute responsabilité en cas de force majeure"

]

},
   
  /* =======================================================
     MERZOUGA
     ======================================================= */

  {
    id: "merzouga",
    name: "Merzouga Express",
    destination: "Dunes de l'Erg Chebbi — Safari Sahara",
    category: "desert",
    duration: "3 jours / 2 nuits",
    price: 779,
    rating: 5.0,
    badge: "BEST SELLER",
    image: "PM.jpeg",

    specialTitle:
      "Safari Merzouga — 779 DH / All In 979 DH",

    description:
      "Le voyage le plus demandé est de retour en mode SAFARI. Une expérience exceptionnelle entre détente, découverte et aventure au cœur du désert de Merzouga et des dunes de l'Erg Chebbi.",

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
        items: [
          "Transport touristique climatisé A/R",
          "Shooting photo professionnel et Story",
          "Petit déjeuner en buffet le dimanche",
          "Dîner du samedi en buffet",
          "Soirée à l'hôtel avec DJ ou Gnaoua",
          "Nuitée à l'hôtel",
          "Feu de camp"
        ]
      },

      {
        name: "Formule All In",
        price: 979,
        items: [
          "Transport touristique climatisé A/R",
          "Shooting photo professionnel et Story",
          "Excursion en 4×4 dans le désert de Merzouga",
          "Petits déjeuners en buffet samedi et dimanche",
          "Déjeuner du samedi",
          "Dîner du samedi en buffet",
          "Balade en dromadaire",
          "Soirée à l'hôtel avec DJ ou Gnaoua",
          "Nuitée à l'hôtel",
          "Feu de camp"
        ]
      }
    ],

    program: [

      {
        time: "VENDREDI · 19:00",
        label: "Départ de Casablanca — Gare Casa-Voyageurs"
      },

      {
        time: "20:00",
        label: "Départ de Mohammedia — devant École Majorelle"
      },

      {
        time: "21:00",
        label: "Départ de Rabat — Gare Rabat Ville"
      },

      {
        time: "00:30",
        label: "Départ de Meknès — Gare routière Sidi Saïd"
      },

      {
        time: "Nuit",
        label: "Pause dîner et repos en route"
      },

      {
        time: "SAMEDI · 07:30",
        label: "Arrivée à Aïn Atti, petit déjeuner et possibilité d'acheter cache-col, melhfa et derâa"
      },

      {
        time: "Matinée",
        label: "Départ vers Merzouga, arrivée à l'hôtel et check-in"
      },

      {
        time: "Matinée",
        label: "Distribution des chambres doubles, triples ou suites quadruples selon disponibilité"
      },

      {
        time: "Matinée",
        label: "Temps libre, détente et baignade à la piscine"
      },

      {
        time: "13:00",
        label: "Départ vers Khamlia et déjeuner à Dar Gnaoua : salade, medfouna, poulet, thé et fruit de saison"
      },

      {
        time: "14:00",
        label: "1 heure de Quad ou Buggy — activité optionnelle"
      },

      {
        time: "Après-midi",
        label: "Excursion en 4×4 vers les dunes de Merzouga"
      },

      {
        time: "Après-midi",
        label: "Coucher du soleil dans les dunes"
      },

      {
        time: "Soir",
        label: "Retour à l'hôtel à dos de dromadaire"
      },

      {
        time: "Soir",
        label: "Douche et temps libre"
      },

      {
        time: "Soirée",
        label: "Dîner buffet, soirée DJ ou Gnaoua et feu de camp"
      },

      {
        time: "Nuit",
        label: "Nuitée à l'hôtel"
      },

      {
        time: "DIMANCHE · 07:00",
        label: "Réveil et petit déjeuner buffet"
      },

      {
        time: "08:15",
        label: "Check-out et départ vers Erfoud"
      },

      {
        time: "09:30",
        label: "Arrivée à Erfoud et possibilité d'achat de dattes"
      },

      {
        time: "10:30",
        label: "Arrivée à Aïn Atti et possibilité d'achat de lait de dromadaire"
      },

      {
        time: "11:00",
        label: "Pause panoramique à l'oasis Oulad Chaggar"
      },

      {
        time: "Retour",
        label: "Déjeuner libre à Zaida et pause sur la route"
      },

      {
        time: "Fin",
        label: "Arrivée successive à Meknès, Rabat, Mohammedia puis Casablanca"
      }
    ],

    included: [
      "Transport touristique climatisé A/R",
      "Shooting photo professionnel et Story",
      "Nuitée à l'hôtel",
      "Dîner du samedi en buffet",
      "Petit déjeuner du dimanche en buffet",
      "Soirée à l'hôtel avec DJ ou Gnaoua",
      "Feu de camp"
    ],

    excluded: [
      "Déjeuner du samedi en formule Essentielle",
      "Excursion 4×4 en formule Essentielle",
      "Balade en dromadaire en formule Essentielle",
      "Quad : 350 DH/personne/1H",
      "Quad : 450 DH/2 personnes/1H",
      "Buggy : 900 DH/1 ou 2 personnes/1H",
      "Dépenses personnelles"
    ],

    reservation:
      "Réservation par versement bancaire d'une avance de 300 DH. Contactez Allo Privilège au 0675296774 via WhatsApp ou appel pour demander le RIB.",

    conditions: [
      "Réservation selon les places disponibles.",
      "Avant tout versement, contactez l'un des collaborateurs.",
      "Annulation possible 48 heures avant le jour du voyage.",
      "L'agence n'est pas responsable en cas d'arrivée tardive.",
      "Le programme peut être modifié pour assurer le bon déroulement du voyage.",
      "Les services et activités compris seront maintenus dans la mesure du possible.",
      "En cas de force majeure, la responsabilité de l'agence ne peut être engagée."
    ]
  },


  /* =======================================================
     AZILAL — OUZOUD — BIN EL OUIDANE
     ======================================================= */

  {
    id: "azilal-ouzoud",
    name: "Azilal, Ouzoud & Bin El Ouidane",
    destination: "Azilal — Cascades d'Ouzoud — Bin El Ouidane — Aïn Asserdoun",
    category: "montagne",
    duration: "3 jours / 2 nuits",
    price: 1299,
    rating: 5.0,
    badge: "BEST SELLER",
    image: "PM2.jpeg",

    specialTitle:
      "Azilal • Ouzoud • Bin El Ouidane — 1299 DH",

    description:
      "Quand la beauté de la nature rencontre le plaisir du voyage, l'aventure commence avec Privilège Travel. Découvrez une magnifique expérience au cœur de la nature marocaine entre les montagnes de l'Atlas, les cascades d'Ouzoud, le lac de Bin El Ouidane et les sources d'Aïn Asserdoun. Une escapade pensée pour combiner découverte, détente, divertissement et moments conviviaux pendant 3 jours.",

    dates: [
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
      "25–27 décembre 2026"
    ],

    formulas: [
      {
        name: "Formule complète",
        price: 1299,
        items: [
          "Transport aller-retour en bus touristique climatisé et confortable",
          "1 nuit dans un hôtel 4 étoiles à Azilal",
          "1 nuit dans un hôtel 4 étoiles à Bin El Ouidane",
          "Hôtel Atlas Day à Azilal ou équivalent",
          "Hôtel Chams du Lac à Bin El Ouidane ou équivalent",
          "Dîner du deuxième jour à l'hôtel",
          "Petits déjeuners des deuxième et troisième jours",
          "Animation et encadrement pendant tout le voyage"
        ]
      }
    ],

    program: [

      {
        time: "JOUR 1 · 17:30",
        label: "Départ de Kénitra si un minimum de 6 participants est disponible"
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
        label: "Départ de Casablanca devant la gare Casa-Voyageurs, porte arrière"
      },

      {
        time: "Soirée",
        label: "Direction Béni Mellal. Dîner libre."
      },

      {
        time: "Nuit",
        label: "Direction Azilal puis arrivée à l'hôtel"
      },

      {
        time: "Nuit",
        label: "Distribution des chambres doubles et triples"
      },

      {
        time: "Nuit",
        label: "Temps libre pour le repos et la douche"
      },

      {
        time: "JOUR 2 · 08:00",
        label: "Petit déjeuner à l'hôtel — compris dans le prix"
      },

      {
        time: "09:00",
        label: "Départ vers les cascades d'Ouzoud"
      },

      {
        time: "Matinée",
        label: "Descente vers les cascades et temps libre pour profiter du paysage naturel"
      },

      {
        time: "Midi",
        label: "Déjeuner libre aux cascades"
      },

      {
        time: "Après-midi",
        label: "Départ vers l'hôtel à Bin El Ouidane"
      },

      {
        time: "Après-midi",
        label: "Installation dans les chambres doubles et triples"
      },

      {
        time: "Après-midi",
        label: "Temps libre pour profiter de l'hôtel, se reposer et se détendre"
      },

      {
        time: "Soirée",
        label: "Dîner à l'hôtel — compris dans le prix"
      },

      {
        time: "Soirée",
        label: "Jeux et animations collectives entre les participants"
      },

      {
        time: "Nuit",
        label: "Nuit à Bin El Ouidane"
      },

      {
        time: "JOUR 3 · 08:00",
        label: "Petit déjeuner à l'hôtel"
      },

      {
        time: "10:00",
        label: "Départ vers le barrage de Bin El Ouidane"
      },

      {
        time: "Matinée",
        label: "Possibilité de promenade en bateau sur le lac de Bin El Ouidane — activité libre"
      },

      {
        time: "1 heure",
        label: "Tour en bateau sur le barrage — activité libre"
      },

      {
        time: "Après",
        label: "Départ vers Aïn Asserdoun"
      },

      {
        time: "Après-midi",
        label: "Arrêt dans une huilerie d'Aïn Asserdoun et temps libre pour découvrir ou acheter l'huile d'olive de la région"
      },

      {
        time: "Après-midi",
        label: "Visite des sources et des cascades d'Aïn Asserdoun"
      },

      {
        time: "Après-midi",
        label: "Temps libre pour profiter de la région"
      },

      {
        time: "Midi",
        label: "Déjeuner libre"
      },

      {
        time: "Retour",
        label: "Départ pour le voyage retour"
      },

      {
        time: "Fin",
        label: "Arrivées successives à Casablanca, Mohammedia puis Rabat"
      }
    ],

    included: [
      "Transport aller-retour en bus touristique climatisé et confortable",
      "1 nuit dans un hôtel 4 étoiles à Azilal",
      "1 nuit dans un hôtel 4 étoiles à Bin El Ouidane",
      "Hôtel Atlas Day à Azilal ou équivalent",
      "Hôtel Chams du Lac à Bin El Ouidane ou équivalent",
      "Dîner du deuxième jour à l'hôtel",
      "Petit déjeuner du deuxième jour",
      "Petit déjeuner du troisième jour",
      "Animation et encadrement pendant tout le voyage"
    ],

    excluded: [
      "Dîner du premier jour",
      "Déjeuner du deuxième jour",
      "Déjeuner du troisième jour",
      "Promenade en bateau à Bin El Ouidane",
      "Dépenses personnelles",
      "Prestations non mentionnées"
    ],

    reservation:
      "Pour participer, envoyez votre nom, prénom, numéro de carte nationale et votre point de départ. Réservez votre place par paiement intégral ou par une avance de 400 DH via le compte bancaire de l'agence. Contactez Allo Privilège au 0675296774 pour obtenir les informations bancaires.",

    conditions: [
      "Prix : 1299 DH par personne.",
      "Réservation selon les places disponibles.",
      "L'avance de réservation est de 400 DH.",
      "Le paiement intégral est également possible.",
      "Les chambres sont doubles ou triples.",
      "Les repas non mentionnés comme inclus sont libres.",
      "La promenade en bateau à Bin El Ouidane est une activité libre et non comprise.",
      "Le programme peut être adapté selon les conditions du voyage."
    ]
  },

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
      "Réservation simple via WhatsApp, transport confortable et guides passionnants. Je recommande vivement Privilege Travel."
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
    "Bonjour Privilege Travel 👋\n\n" +
    "Je souhaite avoir plus d'informations sur vos excursions.\n\n" +
    "Merci."
  );
}


function tourWhatsappMessage(tour) {
  return (
    "Bonjour Privilege Travel 👋\n\n" +
    "Je souhaite réserver :\n\n" +
    `Excursion : ${tour.name}\n` +
    "Date : \n" +
    "Nombre de personnes : \n\n" +
    "Merci."
  );
}


/* =========================================================
   WHATSAPP LINKS
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
        buildWhatsappLink(
          defaultWhatsappMessage()
        );
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
    !resultsWrap ||
    !searchToggle ||
    !searchClose
  ) {
    return;
  }


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


  searchToggle.addEventListener(
    "click",
    openSearch
  );

  searchClose.addEventListener(
    "click",
    closeSearch
  );


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

    renderSearchResults(
      input.value
    );

  });


  function renderSearchResults(query) {

    const q =
      query.trim().toLowerCase();


    const matches =
      TOURS.filter(tour => {

        return (
          tour.name
            .toLowerCase()
            .includes(q) ||

          tour.destination
            .toLowerCase()
            .includes(q)
        );

      });


    resultsWrap.innerHTML =
      matches.map(tour => `

        <a
          class="search-result-item"
          href="#excursions"
          data-id="${tour.id}"
        >

          <span>
            ${tour.name}
            —
            ${tour.destination}
          </span>

          <span>
            ${formatPrice(tour.price)}
          </span>

        </a>

      `).join("")

      ||

      `<p style="color:rgba(248,243,233,0.5);">
        Aucun résultat pour "${query}"
      </p>`;


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

    const where =
      document
        .getElementById("hsWhere")
        ?.value
        .trim() || "";


    document
      .getElementById("excursions")
      ?.scrollIntoView({
        behavior: "smooth"
      });


    const searchInput =
      document.getElementById(
        "liveSearchInput"
      );

    if (searchInput) {
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

  let list =
    TOURS.slice();


  if (currentFilter !== "all") {

    list =
      list.filter(
        tour =>
          tour.category ===
          currentFilter
      );

  }


  if (window.__heroSearchTerm) {

    const term =
      window.__heroSearchTerm;


    list =
      list.filter(tour => {

        return (
          tour.name
            .toLowerCase()
            .includes(term) ||

          tour.destination
            .toLowerCase()
            .includes(term)
        );

      });

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
    document.getElementById(
      "toursGrid"
    );

  const noResults =
    document.getElementById(
      "noResults"
    );


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
              ★ ${Number(tour.rating).toFixed(1)}
            </span>

          </div>


          <p class="tour-meta">
            ${tour.destination}
            ·
            ${tour.duration}
          </p>


          <div class="tour-bottom-row">

            <p class="tour-price">
              <span>Dès</span><br>
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


  grid
    .querySelectorAll(".btn-details")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          openTourModal(
            button.dataset.id
          );

        }
      );

    });


  grid
    .querySelectorAll(".tour-fav-btn")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          toggleFavorite(
            button.dataset.id
          );

        }
      );

    });


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
   FILTERS
   ========================================================= */

function initFiltersAndSort() {

  const filterTabs =
    document.getElementById(
      "filterTabs"
    );

  const sortSelect =
    document.getElementById(
      "sortSelect"
    );


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

  if (
    favorites.includes(id)
  ) {

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

  const counter =
    document.getElementById(
      "favCount"
    );

  if (counter) {
    counter.textContent =
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
        d'une carte pour
        l'ajouter ici.

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
    .querySelectorAll(
      ".fav-remove"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          toggleFavorite(
            button.dataset.id
          );

        }
      );

    });
}


/* =========================================================
   FAVORITES DRAWER
   ========================================================= */

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
    !backdrop ||
    !toggle ||
    !closeButton
  ) {
    return;
  }


  function openDrawer() {

    renderFavDrawer();

    drawer.classList.add(
      "open"
    );

    backdrop.classList.add(
      "open"
    );

  }


  function closeDrawer() {

    drawer.classList.remove(
      "open"
    );

    backdrop.classList.remove(
      "open"
    );

  }


  toggle.addEventListener(
    "click",
    openDrawer
  );


  closeButton.addEventListener(
    "click",
    closeDrawer
  );


  backdrop.addEventListener(
    "click",
    closeDrawer
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

            <span class="destination-explore">
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
            .forEach(
              button =>
                button.classList.toggle(
                  "active",
                  button.dataset.filter ===
                    "all"
                )
            );


          renderTours();


          document
            .getElementById(
              "excursions"
            )
            ?.scrollIntoView({
              behavior: "smooth"
            });

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
            `Bonjour Privilege Travel 👋\n\n` +
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
      source => `

        <a
          class="insta-item"
          href="${CONFIG.instagram}"
          target="_blank"
          rel="noopener"
        >

          <img
            src="${source}"
            alt="Photo de voyage Privilege Travel"
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
                d="M12 2c2.7 0 3.05.01 4.12.06c1.06.05 1.79.22 2.43.47c.66.26 1.21.6 1.76 1.15c.55.55.9 1.1 1.15 1.76c.25.64.42 1.37.47 2.43c.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76a4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47c-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15a4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43c.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2m0 1.8c-2.65 0-2.97.01-4.02.06c-.97.04-1.5.2-1.85.34c-.47.18-.8.4-1.15.75s-.57.68-.75 1.15c-.14.35-.3.88-.34 1.85c-.05 1.05-.06 1.37-.06 4.02s.01 2.97.06 4.02c.04.97.2 1.5.34 1.85c.18.47.4.8.75 1.15s.68.57 1.15.75c.35.14.88.3 1.85.34c1.05.05 1.37.06 4.02.06s2.97-.01 4.02-.06c.97-.04 1.5-.2 1.85-.34c.47-.18.8-.4 1.15-.75s.57-.68.75-1.15c.14-.35.3-.88.34-1.85c.05-1.05.06-1.37-.06-4.02s.01-2.97.06-4.02c.04-.97.2-1.5.34-1.85a3.1 3.1 0 0 0-.75-1.15a3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.3-1.85-.34C14.97 3.81 14.65 3.8 12 3.8m0 3.06a5.14 5.14 0 1 1 0 10.28a5.14 5.14 0 0 1 0-10.28m0 1.8a3.34 3.34 0 1 0 0 6.68a3.34 3.34 0 0 0 0-6.68m5.34-1.96a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0"
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

let testimonialIndex = 0;
let testimonialTimer = null;


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
          aria-label="Témoignage ${index + 1}"
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
    .querySelectorAll(
      ".t-dot"
    )
    .forEach(
      (dot, index) => {

        dot.classList.toggle(
          "active",
          index ===
            testimonialIndex
        );

      }
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
    .querySelectorAll(
      ".faq-item"
    )
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
   TOUR DETAILS MODAL
   ========================================================= */

function openTourModal(id) {

  const tour =
    TOURS.find(
      item =>
        item.id === id
    );


  if (!tour) {
    console.warn(
      "Voyage introuvable :",
      id
    );

    return;
  }


  activeTour = tour;
  bookingQty = 2;


  const image =
    document.getElementById(
      "tmImage"
    );

  const badge =
    document.getElementById(
      "tmBadge"
    );

  const destination =
    document.getElementById(
      "tmDestination"
    );

  const title =
    document.getElementById(
      "tmTitle"
    );

  const duration =
    document.getElementById(
      "tmDuration"
    );

  const rating =
    document.getElementById(
      "tmRating"
    );

  const description =
    document.getElementById(
      "tmDesc"
    );

  const price =
    document.getElementById(
      "tmPrice"
    );

  const qty =
    document.getElementById(
      "tmQtyValue"
    );


  if (image) {

    image.src =
      tour.image;

    image.alt =
      tour.name;

  }


  if (badge) {

    badge.textContent =
      tour.badge || "";

    badge.className =
      "tour-badge " +
      (
        tour.badge === "NOUVEAU"
          ? "new"
          : ""
      );

  }


  if (destination) {
    destination.textContent =
      tour.destination || "";
  }


  if (title) {
    title.textContent =
      tour.name || "";
  }


  if (duration) {
    duration.textContent =
      tour.duration || "";
  }


  if (rating) {
    rating.textContent =
      "★ " +
      Number(
        tour.rating || 0
      ).toFixed(1);
  }


  if (description) {
    description.textContent =
      tour.description || "";
  }


  if (price) {
    price.textContent =
      formatPrice(
        tour.price || 0
      );
  }


  if (qty) {
    qty.textContent =
      bookingQty;
  }


  /* =======================================================
     SPECIAL CONTENT
     ======================================================= */

  const special =
    document.getElementById(
      "tmSpecial"
    );

  const specialTitle =
    document.getElementById(
      "tmSpecialTitle"
    );

  const formulas =
    document.getElementById(
      "tmFormulas"
    );


  if (special) {

    special.hidden =
      !tour.formulas ||
      tour.formulas.length === 0;

  }


  if (specialTitle) {

    specialTitle.textContent =
      tour.specialTitle ||
      `${tour.name} — ${formatPrice(tour.price)}`;

  }


  if (formulas) {

    if (
      tour.formulas &&
      tour.formulas.length
    ) {

      formulas.innerHTML =
        tour.formulas
          .map(
            formula => `

              <div class="tm-formula">

                <div class="tm-formula-top">

                  <strong>
                    ${formula.name}
                  </strong>

                  <span>
                    ${formatPrice(
                      formula.price
                    )}
                  </span>

                </div>


                <ul>

                  ${
                    (formula.items || [])
                      .map(
                        item =>
                          `<li>${item}</li>`
                      )
                      .join("")
                  }

                </ul>

              </div>

            `
          )
          .join("");

    } else {

      formulas.innerHTML = "";

    }

  }


  /* =======================================================
     DATES
     ======================================================= */

  const datesBlock =
    document.getElementById(
      "tmDatesBlock"
    );

  const dates =
    document.getElementById(
      "tmDates"
    );


  if (
    tour.dates &&
    tour.dates.length
  ) {

    if (dates) {

      dates.innerHTML =
        tour.dates
          .map(
            date =>
              `<span class="tm-date-item">${date}</span>`
          )
          .join("");

    }


    if (datesBlock) {
      datesBlock.hidden =
        false;
    }

  } else {

    if (dates) {
      dates.innerHTML = "";
    }

    if (datesBlock) {
      datesBlock.hidden =
        true;
    }

  }


  /* =======================================================
     RESERVATION
     ======================================================= */

  const reservationBlock =
    document.getElementById(
      "tmReservationBlock"
    );

  const reservation =
    document.getElementById(
      "tmReservation"
    );


  if (tour.reservation) {

    if (reservation) {
      reservation.textContent =
        tour.reservation;
    }


    if (reservationBlock) {
      reservationBlock.hidden =
        false;
    }

  } else {

    if (reservation) {
      reservation.textContent = "";
    }

    if (reservationBlock) {
      reservationBlock.hidden =
        true;
    }

  }


  /* =======================================================
     CONDITIONS
     ======================================================= */

  const conditionsBlock =
    document.getElementById(
      "tmConditionsBlock"
    );

  const conditions =
    document.getElementById(
      "tmConditions"
    );


  if (
    tour.conditions &&
    tour.conditions.length
  ) {

    if (conditions) {

      conditions.innerHTML =
        tour.conditions
          .map(
            condition =>
              `<li>${condition}</li>`
          )
          .join("");

    }


    if (conditionsBlock) {
      conditionsBlock.hidden =
        false;
    }

  } else {

    if (conditions) {
      conditions.innerHTML = "";
    }

    if (conditionsBlock) {
      conditionsBlock.hidden =
        true;
    }

  }


  /* =======================================================
     PROGRAMME
     ======================================================= */

  const program =
    document.getElementById(
      "tmProgram"
    );


  if (program) {

    program.innerHTML =
      (tour.program || [])
        .map(
          item => `

            <li>

              <span class="time">
                ${item.time}
              </span>

              <span>
                ${item.label}
              </span>

            </li>

          `
        )
        .join("");

  }


  /* =======================================================
     INCLUDED
     ======================================================= */

  const included =
    document.getElementById(
      "tmIncluded"
    );


  if (included) {

    included.innerHTML =
      (tour.included || [])
        .map(
          item =>
            `<li>${item}</li>`
        )
        .join("");

  }


  /* =======================================================
     EXCLUDED
     ======================================================= */

  const excluded =
    document.getElementById(
      "tmExcluded"
    );


  if (excluded) {

    excluded.innerHTML =
      (tour.excluded || [])
        .map(
          item =>
            `<li>${item}</li>`
        )
        .join("");

  }


  /* =======================================================
     WHATSAPP
     ======================================================= */

  const whatsapp =
    document.getElementById(
      "tmWhatsapp"
    );


  if (whatsapp) {

    whatsapp.href =
      buildWhatsappLink(
        tourWhatsappMessage(tour)
      );

  }


  /* =======================================================
     OPEN MODAL
     ======================================================= */

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

  const minus =
    document.getElementById(
      "tmQtyMinus"
    );

  const plus =
    document.getElementById(
      "tmQtyPlus"
    );

  const bookButton =
    document.getElementById(
      "tmBookBtn"
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
          e.target ===
          backdrop
        ) {

          closeTourModal();

        }

      }
    );

  }


  if (minus) {

    minus.addEventListener(
      "click",
      () => {

        if (bookingQty > 1) {
          bookingQty--;
        }


        const quantity =
          document.getElementById(
            "tmQtyValue"
          );


        if (quantity) {
          quantity.textContent =
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


        const quantity =
          document.getElementById(
            "tmQtyValue"
          );


        if (quantity) {
          quantity.textContent =
            bookingQty;
        }

      }
    );

  }


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


  document.addEventListener(
    "keydown",
    e => {

      if (
        e.key === "Escape"
      ) {

        closeTourModal();

      }

    }
  );
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


  const bookingTourInput =
    document.getElementById(
      "bookingTourInput"
    );


  if (bookingTourName) {

    bookingTourName.textContent =
      tourName
        ? `Pour l'excursion : ${tourName}`
        : "Demande générale";

  }


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


/* =========================================================
   CLOSE BOOKING MODAL
   ========================================================= */

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


/* =========================================================
   INIT BOOKING MODAL
   ========================================================= */

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
          e.target ===
          backdrop
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


        form.reset();

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


      setTimeout(
        () => {

          button.textContent =
            originalText;

          button.disabled =
            false;

        },
        2600
      );

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
      .querySelectorAll(
        ".reveal"
      )
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
    .querySelectorAll(
      ".reveal"
    )
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

  const numbers =
    document.querySelectorAll(
      ".stat-num"
    );


  if (!numbers.length) return;


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


  numbers.forEach(
    element =>
      observer.observe(
        element
      )
  );
}


function animateCounter(element) {

  const target =
    parseFloat(
      element.dataset.target ||
      "0"
    );


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
      ) +
      suffix;


    if (progress < 1) {

      requestAnimationFrame(
        step
      );

    } else {

      element.textContent =
        target.toFixed(
          decimals
        ) +
        suffix;

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

  const sections = [
    "accueil",
    "excursions",
    "destinations",
    "circuits",
    "apropos",
    "contact"
  ]
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
            window.scrollY +
              140 >=
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
              "#" +
                currentId
          );

        }
      );

    }
  );
}


/* =========================================================
   INIT
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


    /* -----------------------------------------
       DATE PICKER
       ----------------------------------------- */

    const today =
      new Date()
        .toISOString()
        .split("T")[0];


    const heroDate =
      document.getElementById(
        "hsDate"
      );


    if (heroDate) {
      heroDate.min =
        today;
    }

  }
);
