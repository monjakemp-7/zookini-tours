export const themes = [
  { id: "foodie", label: "Foodie" },
  { id: "wine", label: "Wine & Women" },
  { id: "art", label: "Art" },
  { id: "fynbos", label: "Fynbos" },
  { id: "cape-town", label: "Cape Town" },
  { id: "nature", label: "Nature" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export type ItineraryDay = {
  day: string;
  title: string;
  body: string;
};

export type Tour = {
  slug: string;
  title: string;
  hook: string;
  story: string[];
  duration: string;
  groupSize: string;
  region: string;
  themes: ThemeId[];
  audience: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  note?: string;
};

const sharedExcludes = [
  "Flights, unless your quote says otherwise",
  "Meals that are not on the itinerary",
  "Personal extras such as extra drinks, laundry, calls, and shopping",
  "Arrangements before or after the tour dates",
];

const director = "A Zookini Tour Director with the group";

export const tours: Tour[] = [
  {
    slug: "women-and-wine-weekend",
    title: "Women & Wine Weekend",
    hook: "A women-only Winelands weekend where the plan itself is the surprise.",
    story: [
      "This weekend is for women celebrating life together — mothers and daughters, sisters, friends, or a guest travelling on her own.",
      "Expect bubbly, long tables, and places chosen with a feminine touch. The details stay a surprise until you are in them. That is the point.",
    ],
    duration: "3 days",
    groupSize: "12–16",
    region: "Cape Winelands",
    themes: ["wine"],
    audience: "Women",
    highlights: [
      "Tastings at wine farms with a more feminine touch",
      "Meals chosen to be talked about afterwards",
      "An event to keep, plus surprises and gifts",
      "Two nights in the Winelands",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive, and let the surprise start",
        body: "Settle into the Winelands. The first glass, the first table, and the first unplanned delight are already arranged.",
      },
      {
        day: "Day 2",
        title: "Farms, laughter, and a long lunch",
        body: "A full day of tastings and an excursion meant to take your breath. We will not spoil the address.",
      },
      {
        day: "Day 3",
        title: "One more toast, then home",
        body: "A gentle close, gifts in the bag, and the kind of stories that only appear when nobody had to plan the day.",
      },
    ],
    includes: [
      "Air-conditioned luxury coach",
      "Accommodation for two nights in the Winelands",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      "Wine and bubbly tastings and pairings",
      "Surprises and gifts",
      director,
    ],
    excludes: sharedExcludes,
    image: "/images/wine.jpg",
    imageAlt: "Red wine poured into a glass",
    featured: true,
    note: "Women only.",
  },
  {
    slug: "i-love-cape-town",
    title: "I Love Cape Town",
    hook: "The city for romantics, cooks, and the quietly curious — gathered into one hand-crafted tour.",
    story: [
      "Cape Town holds oceans, a mountain, neighbourhood kitchens, and a Winelands afternoon within easy reach of each other.",
      "This tour keeps the famous moments and opens a few doors that coach tours usually drive past: a community project, a marine story, a picnic under trees.",
    ],
    duration: "3–5 days",
    groupSize: "12–16",
    region: "Cape Town & Winelands",
    themes: ["cape-town"],
    audience: "Leisure",
    highlights: [
      "Two Oceans Aquarium and a harbour marine outing",
      "A class in the clouds on Table Mountain",
      "The Heart of Cape Town Museum at Groote Schuur",
      "Kirstenbosch, a Hout Bay community visit, and Kalk Bay’s ocean work",
      "Winelands picnic, Franschhoek chocolate, and Stellenbosch in season",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Ocean and harbour",
        body: "Two Oceans Aquarium and time on the water. A first evening in the city.",
      },
      {
        day: "Day 2",
        title: "Mountain and a piece of medical history",
        body: "Table Mountain, then the museum that tells the story of the first heart transplant.",
      },
      {
        day: "Day 3",
        title: "Gardens and community",
        body: "Kirstenbosch against the mountain, and a community project in Hout Bay.",
      },
      {
        day: "Day 4",
        title: "Winelands, slower",
        body: "Paarl, Franschhoek, or Stellenbosch — picnic, chocolate, and whatever the season is offering.",
      },
    ],
    includes: [
      "Return flights between Johannesburg and Cape Town, when your quote includes them",
      "Air-conditioned luxury coach",
      "Accommodation in Cape Town and the Winelands",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: [
      "Arrangements outside the tour dates",
      "Meals that are not on the itinerary",
      "Personal extras such as extra drinks, laundry, calls, and shopping",
    ],
    image: "/images/cape-town.jpg",
    imageAlt: "Cape Town with Table Mountain beyond the city bowl",
    featured: true,
    note: "Published conditions allow a larger group on this tour. Ask Anita if you are more than 16.",
  },
  {
    slug: "life-is-art",
    title: "Life is Art",
    hook: "Galleries, studios, and wine-farm walls — Cape Town’s art scene, hosted rather than hurried.",
    story: [
      "Cape Town makes art in public: in galleries, on harbour walls, in textile rooms and animation desks.",
      "Life is Art is for people who want the city’s artists up close, then a quieter studio day in the Winelands.",
    ],
    duration: "3–5 days",
    groupSize: "12–16",
    region: "Cape Town, Simon’s Town & Franschhoek",
    themes: ["art"],
    audience: "Leisure",
    highlights: [
      "South African National Gallery",
      "Zeitz MOCAA at the V&A Waterfront",
      "A street-art walk, an animation studio, and a textile workshop",
      "Artist studios in Franschhoek, Paarl, and Stellenbosch",
      "A Hout Bay art community project",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "The city’s collection",
        body: "National Gallery and Zeitz MOCAA. Two ways of telling South African art, in one day.",
      },
      {
        day: "Day 2",
        title: "Studios and the street",
        body: "A graffiti walk, then working rooms where animation and cloth are actually made.",
      },
      {
        day: "Day 3",
        title: "Winelands studios",
        body: "Artists in Franschhoek, Paarl, and Stellenbosch, and the art that lives on wine farms.",
      },
    ],
    includes: [
      "Air-conditioned luxury coach",
      "Accommodation in Cape Town, Simon’s Town, and Franschhoek",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    image: "/images/art.jpg",
    imageAlt: "A framed painting on a gallery wall",
    featured: true,
  },
  {
    slug: "protea-and-fynbos",
    title: "Protea & Fynbos",
    hook: "Kirstenbosch, private gardens, and a floral kingdom you can smell.",
    story: [
      "The Cape floral kingdom is one of six on earth, and it is small enough to walk.",
      "This tour moves from Kirstenbosch to protea fields, community gardens, and a fynbos pairing on a wine farm.",
    ],
    duration: "3–5 days",
    groupSize: "12–16",
    region: "Cape Town & Winelands",
    themes: ["fynbos", "nature"],
    audience: "Leisure",
    highlights: [
      "Kirstenbosch National Botanical Garden",
      "An open 4×4 through the floral kingdom",
      "A biodynamic walk on a Somerset West wine estate",
      "Private gardens, a protea farm, and a fynbos and wine pairing",
      "A Winelands garden tea and a city community garden",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Kirstenbosch",
        body: "The garden on the slopes of Table Mountain, with time to actually look.",
      },
      {
        day: "Day 2",
        title: "Fynbos up close",
        body: "A 4×4 botanical safari and a pairing that puts the veld in the glass.",
      },
      {
        day: "Day 3",
        title: "Private gardens",
        body: "Estate walks, a protea farm, and tea in a Winelands garden.",
      },
    ],
    includes: [
      "Air-conditioned luxury coach",
      "Hand-picked stays in Cape Town and the Winelands",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    image: "/images/fynbos.jpg",
    imageAlt: "Soft pink blooms in a garden bed",
    featured: true,
  },
  {
    slug: "time-to-taste-foodie",
    title: "Time to Taste Foodie",
    hook: "Bo-Kaap kitchens, a wine-farm class, West Coast seafood, and a braai under stars.",
    story: [
      "Louise Fresco wrote that food, in the end, is something holy — about sharing, honesty, and identity. That is the spirit of this tour.",
      "You cook with a Cape Malay auntie, walk Stellenbosch for lunch, taste rooibos where it grows, and end at least one evening beside the coals.",
    ],
    duration: "5 days",
    groupSize: "12–16",
    region: "Cape Town, Winelands & West Coast",
    themes: ["foodie"],
    audience: "Leisure",
    highlights: [
      "Hands-on Bo-Kaap cooking",
      "A chef’s class on a wine farm",
      "A Cape cuisine walk in Stellenbosch",
      "Rooibos in the landscape, and West Coast seafood",
      "A braai under the stars, with local wine, cheese, and charcuterie",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Bo-Kaap",
        body: "A cooking morning in a Cape Malay kitchen. You leave knowing how the dish actually goes.",
      },
      {
        day: "Day 2",
        title: "Wine-farm kitchen",
        body: "An in-house chef, a proper stove, and lunch that you helped make.",
      },
      {
        day: "Day 3",
        title: "Stellenbosch on foot",
        body: "A cuisine walk through town. Small plates, short stories, no rush.",
      },
      {
        day: "Day 4",
        title: "Rooibos and the West Coast",
        body: "Tea in its landscape, then seafood and a cold glass beside the sea.",
      },
      {
        day: "Day 5",
        title: "Coals and stars",
        body: "A South African braai to close. Boerewors, salad, and the last bottle.",
      },
    ],
    includes: [
      "Air-conditioned luxury coach",
      "Luxury accommodation in Cape Town and the Winelands",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    image: "/images/foodie.jpg",
    imageAlt: "A dining table set with plates and glassware",
    featured: true,
  },
  {
    slug: "wondrous-west-coast",
    title: "Wondrous West Coast",
    hook: "Fishing villages, wild flowers in season, and seafood eaten close to the boats.",
    story: [
      "The West Coast is wide sky, salt, and towns that still feel like towns.",
      "This outline follows the long bay north of Cape Town: harbours, a flower stop when the season allows, and a table that tastes of the Atlantic.",
    ],
    duration: "3–5 days",
    groupSize: "12–16",
    region: "West Coast",
    themes: ["nature", "foodie"],
    audience: "Leisure",
    highlights: [
      "Coastal villages north of Cape Town",
      "A seafood lunch beside the water",
      "Spring flowers when the veld is in colour",
      "Time for the light, which is half the reason to go",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Leave the city slowly",
        body: "Up the coast. A first harbour stop and an evening in a small town.",
      },
      {
        day: "Day 2",
        title: "Boats and the table",
        body: "The catch of the day, a walk on the sand, and a story from someone who lives there.",
      },
      {
        day: "Day 3",
        title: "Flowers or wide sky",
        body: "In flower season, the veld. Out of season, birdlife, salt pans, and a long lunch anyway.",
      },
    ],
    includes: [
      "Air-conditioned luxury coach",
      "Hand-picked accommodation",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    image: "/images/west-coast.jpg",
    imageAlt: "Pale sand and blue sea under a bright sky",
    featured: true,
  },
  {
    slug: "glorious-garden-route",
    title: "Glorious Garden Route",
    hook: "Lakes, forest, and a coast that keeps changing temperature and mood.",
    story: [
      "The Garden Route is the long green road between the Winelands and the eastern forests.",
      "Lakes at Wilderness, a Knysna morning, and time under yellowwood. We keep the group small so the scenic stops are not a queue.",
    ],
    duration: "4–5 days",
    groupSize: "12–16",
    region: "Garden Route",
    themes: ["nature"],
    audience: "Leisure",
    highlights: [
      "Wilderness lakes and a forest walk",
      "Knysna heads and the lagoon",
      "A farm or market table along the route",
      "One unhurried scenic stop that is not on every coach clock",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Over the mountains",
        body: "Out of the Winelands and onto the Garden Route. Settle where the lakes start.",
      },
      {
        day: "Day 2",
        title: "Forest and lagoon",
        body: "A walk under big trees, then Knysna for oysters or a simple harbour lunch.",
      },
      {
        day: "Day 3",
        title: "The long coast",
        body: "Beaches, a viewpoint worth the stop, and a night that does not involve repacking at dawn.",
      },
    ],
    includes: [
      "Air-conditioned luxury coach",
      "Hand-picked accommodation",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    image: "/images/garden-route.jpg",
    imageAlt: "A wave breaking toward a sandy shore",
    featured: true,
  },
  {
    slug: "overwhelming-overberg",
    title: "Overwhelming Overberg",
    hook: "Whale coast, country towns, and fynbos hills an hour from the city, feeling much further.",
    story: [
      "The Overberg is Hermanus when the whales are in, and Stanford, Elim, or a gravel farm road when they are not.",
      "It is a short journey with a big sky. Useful for a long weekend that still feels like you left.",
    ],
    duration: "3–4 days",
    groupSize: "12–16",
    region: "Overberg",
    themes: ["nature", "fynbos"],
    audience: "Leisure",
    highlights: [
      "Hermanus cliff path in whale season",
      "A small-town lunch and a farm gate",
      "Fynbos hills and a wine stop on the way home",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Over the mountain",
        body: "Sir Lowry’s or the coastal road, then a first evening in the Overberg.",
      },
      {
        day: "Day 2",
        title: "Coast or country",
        body: "Whales if the season says so. Otherwise a town, a reserve, or a farm kitchen.",
      },
      {
        day: "Day 3",
        title: "Home via one more view",
        body: "A last stop for wine or flowers, then back to the Winelands.",
      },
    ],
    includes: [
      "Air-conditioned luxury coach",
      "Hand-picked accommodation",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    image: "/images/overberg.jpg",
    imageAlt: "Green hills under soft morning light",
    featured: false,
  },
  {
    slug: "bushveld-safari",
    title: "Bushveld Safari",
    hook: "A small-group safari with a host, not a convoy. Dust, firelight, and an early start.",
    story: [
      "Bushveld mornings are cold and worth it. This journey is for guests who want wildlife with the same care Zookini gives a Winelands table.",
      "Game drives, a guide who will wait for the light, and evenings that end at a fire rather than a buffet queue.",
    ],
    duration: "4–5 days",
    groupSize: "12–16",
    region: "Bushveld",
    themes: ["nature"],
    audience: "Leisure",
    highlights: [
      "Game drives in a small group",
      "A lodge or camp chosen for the place, not the brochure",
      "Sundowners and a fire",
      "Time between sightings, which is when the bush gets quiet enough to hear",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Into the bush",
        body: "Travel to camp. An afternoon drive if the light allows, and a first night with the frogs.",
      },
      {
        day: "Day 2",
        title: "Early drive",
        body: "Out before breakfast. The day belongs to whatever the reserve is doing.",
      },
      {
        day: "Day 3",
        title: "Another rhythm",
        body: "A slower drive or a walk with a guide, then a long lunch and an evening fire.",
      },
    ],
    includes: [
      "Road or air transfers as quoted",
      "Camp or lodge accommodation",
      "Meals on the itinerary",
      "Game drives listed in your quote",
      director,
    ],
    excludes: [
      "Flights, unless your quote says otherwise",
      "Park fees not listed in the quote",
      "Personal extras and drinks beyond inclusions",
      "Travel insurance, which we ask every guest to arrange",
    ],
    image: "/images/safari.jpg",
    imageAlt: "Elephants walking through dry bushveld grass",
    featured: true,
    note: "The reserve is confirmed when you enquire.",
  },
  {
    slug: "drakensberg-adventure",
    title: "Drakensberg Adventure",
    hook: "Amphitheatre country: hikes to match the group, and evenings in a mountain lodge.",
    story: [
      "The Drakensberg is a wall of rock and a lot of weather. The pleasure is in choosing a walk that suits the people in the group, then coming back to a proper meal.",
      "Suitable for guests who like a day on their feet and a comfortable night. Not a race to the summit unless that is what you asked for.",
    ],
    duration: "4–5 days",
    groupSize: "12–16",
    region: "Drakensberg",
    themes: ["nature"],
    audience: "Leisure",
    highlights: [
      "Guided walks scaled to the group",
      "Amphitheatre views",
      "A lodge base so the bags stay put",
      "One cultural or craft stop in the foothills",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive under the mountains",
        body: "Settle at the lodge. A short sunset walk if the cloud lifts.",
      },
      {
        day: "Day 2",
        title: "A real hike",
        body: "Out with a guide for a route chosen to fit the group. Picnic in the pack.",
      },
      {
        day: "Day 3",
        title: "A gentler day",
        body: "Rock art, a foothills visit, or a second trail. Evening back at the fire.",
      },
    ],
    includes: [
      "Road transfers as quoted",
      "Lodge accommodation",
      "Meals on the itinerary",
      "Guided walks listed in your quote",
      director,
    ],
    excludes: sharedExcludes,
    image: "/images/drakensberg.jpg",
    imageAlt: "A sharp mountain ridge above a green valley",
    featured: false,
  },
];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getFeaturedTours() {
  return tours.filter((tour) => tour.featured);
}

export function themeLabel(id: ThemeId) {
  return themes.find((theme) => theme.id === id)?.label ?? id;
}

export const enquiryOptions = [
  { value: "not-sure", label: "Not sure yet — help me choose" },
  { value: "corporate", label: "Corporate breakaway" },
  { value: "educational", label: "Educational or school trip" },
  ...tours.map((tour) => ({ value: tour.slug, label: tour.title })),
];

export function enquiryLabel(value: string) {
  return enquiryOptions.find((option) => option.value === value)?.label ?? value;
}
