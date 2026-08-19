export type Planet = {
  slug: string;
  name: string;
  kind: string;
  tagline: string;
  summary: string;
  image: string;
  color: string;
  distanceAu: string;
  diameter: string;
  dayLength: string;
  yearLength: string;
  moons: number;
  gravity: string;
  temperature: string;
  facts: string[];
};

export const planets: Planet[] = [
  {
    slug: "mercury",
    name: "Mercury",
    kind: "Terrestrial",
    tagline: "The swift, sun-scorched world",
    summary:
      "The smallest planet in the solar system and the closest to the Sun, Mercury swings through wild temperature extremes with almost no atmosphere to soften them.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07_centered.jpg/800px-Mercury_in_color_-_Prockter07_centered.jpg",
    color: "oklch(0.7 0.03 80)",
    distanceAu: "0.39 AU",
    diameter: "4,879 km",
    dayLength: "1,408 hours",
    yearLength: "88 days",
    moons: 0,
    gravity: "3.7 m/s²",
    temperature: "−173°C to 427°C",
    facts: [
      "A single Mercury day lasts about 59 Earth days.",
      "Its cratered surface resembles our own Moon.",
      "Ice may hide inside permanently shadowed polar craters.",
    ],
  },
  {
    slug: "venus",
    name: "Venus",
    kind: "Terrestrial",
    tagline: "Earth's veiled twin",
    summary:
      "Wrapped in thick clouds of sulfuric acid, Venus is the hottest planet in the solar system and spins backwards compared to almost everything else.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Venus_globe.jpg/800px-Venus_globe.jpg",
    color: "oklch(0.85 0.1 90)",
    distanceAu: "0.72 AU",
    diameter: "12,104 km",
    dayLength: "5,832 hours",
    yearLength: "225 days",
    moons: 0,
    gravity: "8.9 m/s²",
    temperature: "464°C average",
    facts: [
      "Venus rotates in the opposite direction to most planets.",
      "Surface pressure is roughly 92 times that of Earth.",
      "It is the brightest natural object in our sky after the Sun and Moon.",
    ],
  },
  {
    slug: "mars",
    name: "Mars",
    kind: "Terrestrial",
    tagline: "The red planet of ancient rivers",
    summary:
      "Mars is home to Olympus Mons, the tallest volcano known, and to dry riverbeds that hint at a warmer, wetter past.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/800px-OSIRIS_Mars_true_color.jpg",
    color: "oklch(0.65 0.17 35)",
    distanceAu: "1.5 AU",
    diameter: "6,779 km",
    dayLength: "24.6 hours",
    yearLength: "687 days",
    moons: 2,
    gravity: "3.7 m/s²",
    temperature: "−125°C to 20°C",
    facts: [
      "Olympus Mons rises about 22 km above the plains.",
      "Global dust storms can cloak the entire planet for weeks.",
      "Its two moons, Phobos and Deimos, are likely captured asteroids.",
    ],
  },
  {
    slug: "jupiter",
    name: "Jupiter",
    kind: "Gas giant",
    tagline: "The storm king",
    summary:
      "The largest planet in our solar system, wrapped in iconic bands of cloud and guarded by a storm wider than Earth itself.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/800px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    color: "oklch(0.78 0.12 65)",
    distanceAu: "5.2 AU",
    diameter: "139,820 km",
    dayLength: "9.9 hours",
    yearLength: "11.9 years",
    moons: 95,
    gravity: "24.8 m/s²",
    temperature: "−145°C cloud tops",
    facts: [
      "The Great Red Spot has raged for at least 150 years.",
      "Jupiter's magnetic field is the strongest of any planet.",
      "Europa, one of its moons, likely hides a global ocean.",
    ],
  },
  {
    slug: "saturn",
    name: "Saturn",
    kind: "Ringed world",
    tagline: "A world of ice and dust rings",
    summary:
      "Saturn's rings span thousands of kilometres yet are only metres thick — a shimmering archive of ice, rock and dust.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg",
    color: "oklch(0.88 0.11 95)",
    distanceAu: "9.6 AU",
    diameter: "116,460 km",
    dayLength: "10.7 hours",
    yearLength: "29.4 years",
    moons: 146,
    gravity: "10.4 m/s²",
    temperature: "−178°C average",
    facts: [
      "Saturn is less dense than water.",
      "Titan has lakes of liquid methane and a thick atmosphere.",
      "A hexagonal jet stream circles its north pole.",
    ],
  },
  {
    slug: "uranus",
    name: "Uranus",
    kind: "Ice giant",
    tagline: "The tilted wanderer",
    summary:
      "Uranus rolls around the Sun on its side, giving it the most extreme seasons of any planet — decades of daylight, then decades of dark.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/800px-Uranus2.jpg",
    color: "oklch(0.85 0.08 200)",
    distanceAu: "19.2 AU",
    diameter: "50,724 km",
    dayLength: "17.2 hours",
    yearLength: "84 years",
    moons: 28,
    gravity: "8.7 m/s²",
    temperature: "−224°C average",
    facts: [
      "Its axial tilt is about 98 degrees.",
      "Methane in the atmosphere gives it a pale cyan colour.",
      "It has a faint set of narrow, dark rings.",
    ],
  },
  {
    slug: "neptune",
    name: "Neptune",
    kind: "Ice giant",
    tagline: "Where the winds never stop",
    summary:
      "The most distant major planet, Neptune drives supersonic winds through a deep blue atmosphere far from the Sun's warmth.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/800px-Neptune_Full.jpg",
    color: "oklch(0.6 0.15 255)",
    distanceAu: "30.1 AU",
    diameter: "49,244 km",
    dayLength: "16.1 hours",
    yearLength: "165 years",
    moons: 16,
    gravity: "11.2 m/s²",
    temperature: "−214°C average",
    facts: [
      "Winds reach over 2,000 km/h — the fastest measured.",
      "It was found by mathematics before it was ever seen.",
      "Triton orbits backwards and may be a captured dwarf planet.",
    ],
  },
];

export type SkyEvent = {
  id: string;
  date: string;
  day: string;
  category: "Meteor shower" | "Planetary" | "Lunar phase" | "Eclipse" | "Conjunction";
  title: string;
  detail: string;
  time: string;
  visibility: "Excellent" | "Good" | "Fair";
};

export const events: SkyEvent[] = [
  {
    id: "perseids",
    date: "Aug 21",
    day: "Friday",
    category: "Meteor shower",
    title: "Perseid Meteor Shower",
    detail: "Up to 90 meteors an hour radiating from Perseus. Best after midnight.",
    time: "Peak visibility · 02:14 AM",
    visibility: "Excellent",
  },
  {
    id: "saturn-opposition",
    date: "Aug 23",
    day: "Sunday",
    category: "Planetary",
    title: "Saturn at Opposition",
    detail: "Saturn sits opposite the Sun — its rings are at their brightest all year.",
    time: "Best viewing · All night",
    visibility: "Excellent",
  },
  {
    id: "new-moon",
    date: "Aug 28",
    day: "Friday",
    category: "Lunar phase",
    title: "New Moon",
    detail: "Darkest skies of the month. Ideal for deep-sky and galaxy hunting.",
    time: "Dark skies · 04:37 AM",
    visibility: "Excellent",
  },
  {
    id: "venus-jupiter",
    date: "Sep 02",
    day: "Wednesday",
    category: "Conjunction",
    title: "Venus–Jupiter Conjunction",
    detail: "The two brightest planets pass within one degree low in the east.",
    time: "Pre-dawn · 05:10 AM",
    visibility: "Good",
  },
  {
    id: "partial-eclipse",
    date: "Sep 14",
    day: "Monday",
    category: "Eclipse",
    title: "Partial Lunar Eclipse",
    detail: "Earth's shadow clips the northern limb of the Moon for 96 minutes.",
    time: "Maximum · 11:48 PM",
    visibility: "Good",
  },
  {
    id: "harvest-moon",
    date: "Sep 21",
    day: "Monday",
    category: "Lunar phase",
    title: "Harvest Full Moon",
    detail: "A low, golden full Moon rising close to sunset for several nights.",
    time: "Moonrise · 06:52 PM",
    visibility: "Fair",
  },
];

export type SkyObject = {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  size: number;
  magnitude: string;
  distance: string;
  constellation: string;
  note: string;
};

export const skyObjects: SkyObject[] = [
  {
    id: "sirius",
    name: "Sirius",
    type: "Binary star",
    x: 46,
    y: 62,
    size: 12,
    magnitude: "−1.46",
    distance: "8.6 light years",
    constellation: "Canis Major",
    note: "The brightest star in the night sky, twinkling with fierce colour near the horizon.",
  },
  {
    id: "vega",
    name: "Vega",
    type: "Main sequence star",
    x: 74,
    y: 34,
    size: 10,
    magnitude: "0.03",
    distance: "25 light years",
    constellation: "Lyra",
    note: "A cornerstone of the Summer Triangle and once the northern pole star.",
  },
  {
    id: "deneb",
    name: "Deneb",
    type: "Blue supergiant",
    x: 58,
    y: 24,
    size: 11,
    magnitude: "1.25",
    distance: "2,600 light years",
    constellation: "Cygnus",
    note: "One of the most luminous stars known, marking the tail of the swan.",
  },
  {
    id: "betelgeuse",
    name: "Betelgeuse",
    type: "Red supergiant",
    x: 24,
    y: 70,
    size: 11,
    magnitude: "0.50",
    distance: "548 light years",
    constellation: "Orion",
    note: "A dying giant that will one day explode as a supernova.",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    type: "Gas giant",
    x: 86,
    y: 58,
    size: 13,
    magnitude: "−2.20",
    distance: "4.2 AU",
    constellation: "Taurus",
    note: "Steady, creamy and bright — four moons are visible with binoculars.",
  },
  {
    id: "andromeda",
    name: "Andromeda Galaxy",
    type: "Spiral galaxy",
    x: 34,
    y: 28,
    size: 14,
    magnitude: "3.44",
    distance: "2.5 million light years",
    constellation: "Andromeda",
    note: "The furthest object visible to the unaided eye from a dark site.",
  },
];

export const constellationLines: { name: string; points: [number, number][] }[] = [
  {
    name: "Orion",
    points: [
      [16, 82],
      [24, 70],
      [31, 63],
      [38, 68],
      [42, 79],
    ],
  },
  {
    name: "Cygnus",
    points: [
      [50, 40],
      [58, 24],
      [66, 33],
      [74, 34],
    ],
  },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "reading-the-night-sky",
    title: "Reading the night sky without a telescope",
    category: "Beginner",
    readTime: "6 min read",
    excerpt:
      "Star hopping, averted vision and dark adaptation — the three habits that turn a blank sky into a map.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Milky_Way_Arch.jpg/1200px-Milky_Way_Arch.jpg",
    body: [
      "Your eyes need about twenty minutes to fully dark-adapt. Put the phone away, let the pupils widen, and the sky roughly triples in depth.",
      "Start from a shape you already know. The Plough points to Polaris; Orion's belt points down to Sirius and up to Aldebaran. Every session is a chain of small hops from a bright anchor to a fainter target.",
      "Averted vision is the last trick: look slightly to the side of a faint object and the more sensitive edges of your retina pick it up. Galaxies and nebulae often appear only when you stop staring straight at them.",
    ],
  },
  {
    slug: "life-cycle-of-a-star",
    title: "The life cycle of a star, from nebula to remnant",
    category: "Astrophysics",
    readTime: "9 min read",
    excerpt:
      "Every star is a balance between gravity pulling in and fusion pushing out. The story is what happens when that balance breaks.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Pillars_of_creation_%282014%29_NASA_HST.jpg/1200px-Pillars_of_creation_%282014%29_NASA_HST.jpg",
    body: [
      "Stars begin inside cold molecular clouds. A shockwave nudges a dense pocket, gravity takes over, and the core heats until hydrogen fusion ignites.",
      "For most of its life a star sits on the main sequence, converting hydrogen into helium. Our Sun has been doing this for 4.6 billion years and has roughly five billion left.",
      "When the fuel runs low, the outcome depends entirely on mass: modest stars swell into red giants and drift away as planetary nebulae, while heavyweights collapse and detonate as supernovae, leaving neutron stars or black holes behind.",
    ],
  },
  {
    slug: "why-galaxies-have-shapes",
    title: "Why galaxies have shapes",
    category: "Deep sky",
    readTime: "7 min read",
    excerpt:
      "Spirals, ellipticals and irregulars are snapshots of collisions and rotation stretched across billions of years.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1200px-Andromeda_Galaxy_%28with_h-alpha%29.jpg",
    body: [
      "A galaxy's shape records its history. Spirals keep cold gas in a rotating disc, so new stars keep forming along the arms.",
      "Ellipticals are usually the result of mergers. The collision scrambles orbits, gas is used up or blown out, and what remains is a smooth cloud of older red stars.",
      "The Milky Way and Andromeda are on a collision course. In roughly four billion years the two spirals will merge into a single elliptical galaxy.",
    ],
  },
  {
    slug: "choosing-first-telescope",
    title: "Choosing your first telescope",
    category: "Gear",
    readTime: "5 min read",
    excerpt:
      "Aperture beats magnification, and the best telescope is the one light enough that you actually carry it outside.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Telescope_at_night_sky.jpg/1200px-Telescope_at_night_sky.jpg",
    body: [
      "Ignore the magnification printed on the box. What matters is aperture — the diameter of the main lens or mirror — because that determines how much light you gather.",
      "A 6-inch Dobsonian is the classic first scope: simple, stable and cheap per centimetre of aperture. Refractors are lower maintenance but cost far more for the same light grasp.",
      "Buy a planisphere and a red torch before you buy a second eyepiece. Knowing where to point matters more than any accessory.",
    ],
  },
];

export const observationLog = [
  { object: "Saturn", date: "Aug 12", seeing: "Good", note: "Cassini division visible at 180×." },
  { object: "M31 Andromeda", date: "Aug 08", seeing: "Excellent", note: "Core plus both dust lanes." },
  { object: "Perseids", date: "Aug 05", seeing: "Fair", note: "17 meteors in 40 minutes." },
  { object: "Moon — Copernicus", date: "Jul 29", seeing: "Excellent", note: "Terraced walls sharp." },
];
