export const themes = [
  { id: "foodie", label: "Foodie" },
  { id: "wine", label: "Wine & Women" },
  { id: "art", label: "Art" },
  { id: "fynbos", label: "Fynbos" },
  { id: "cape-town", label: "Cape Town" },
  { id: "nature", label: "Nature" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];

export type ItineraryStop = {
  day: string;
  title: string;
  body: string;
};

export type Tour = {
  slug: string;
  title: string;
  hook: string;
  atmosphere: string;
  story: string[];
  special: string;
  suits: string;
  duration: string;
  groupSize: string;
  region: string;
  themes: ThemeId[];
  audience: string;
  highlights: string[];
  itinerary: ItineraryStop[];
  includes: string[];
  excludes: string[];
  practical: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  note?: string;
};

const sharedExcludes = [
  "Flights, unless your quote says otherwise",
  "Arrangements before or after the tour dates",
  "Meals that are not on the itinerary",
  "Personal extras such as extra drinks, laundry, calls, and shopping",
];

const director = "A Zookini Tour Director with the group";

const outline =
  "These are the experiences named for this tour. A day-by-day order is not published. We set the order with you.";

export const tours: Tour[] = [
  {
    slug: "women-and-wine-weekend",
    title: "Women & Wine Weekend",
    hook: "A women-only Winelands weekend. The plan itself is the surprise.",
    atmosphere: "Bubbly, long tables, and a Winelands weekend kept as a surprise.",
    story: [
      "This weekend is for women celebrating life together: mothers and daughters, sisters, friends, or a guest travelling on her own.",
      "It is a weekend of laughs, chats, and new places, with bubbly and wine in the Winelands. The addresses stay a surprise.",
    ],
    special:
      "The tastings are at wine farms with a more feminine touch. There is an event, plus surprises and gifts.",
    suits: "Women travelling together, or a woman joining on her own. Men are not on this weekend.",
    duration: "3 days",
    groupSize: "12 to 16",
    region: "Cape Winelands",
    themes: ["wine"],
    audience: "Women",
    highlights: [
      "Wine tastings at farms with a more feminine touch",
      "Meals on the weekend",
      "An event or two",
      "Surprises and gifts",
      "Two nights in the Winelands",
    ],
    itinerary: [
      {
        day: "The shape",
        title: "Three days, and the addresses stay sealed",
        body: "A weekend of two nights. The coach, the stay, the meals, the tastings, the excursions, and the gifts are in the package. We do not publish the farms, because the surprise is the point.",
      },
    ],
    includes: [
      "Air-conditioned coach",
      "Accommodation for two nights in the Winelands",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      "Wine and bubbly tastings and pairings",
      "Surprises and gifts",
      director,
    ],
    excludes: sharedExcludes,
    practical: [
      "Women only.",
      "Three days, two nights.",
      "12 to 16 guests.",
      outline,
    ],
    image: "/images/wine.jpg",
    imageAlt: "Two women toasting with wine glasses",
    featured: true,
    note: "Women only. The places stay a surprise until you are in them.",
  },
  {
    slug: "i-love-cape-town",
    title: "I Love Cape Town",
    hook: "Cape Town and the Winelands, for people who want the city, the food, the art, and the mountain.",
    atmosphere: "Ocean, mountain, a heart museum, and a Winelands afternoon.",
    story: [
      "Cape Town holds cultures, kitchens, history, art, the mountain, and the sea.",
      "This tour takes in the city's main stops and the Winelands around them, with a Tour Director. The group can be larger than on our smaller journeys.",
    ],
    special:
      "The well-known stops stay, and so do a few doors coach tours often pass: a community project in Hout Bay, marine work in Kalk Bay, and a picnic under trees in Paarl.",
    suits: "People who want the city and the Winelands together.",
    duration: "3 to 5 days",
    groupSize: "12 to 52",
    region: "Cape Town and the Winelands",
    themes: ["cape-town"],
    audience: "Leisure",
    highlights: [
      "Two Oceans Aquarium and a marine outing in the harbour",
      "A class in the clouds on Table Mountain",
      "The heart museum at Groote Schuur",
      "Kirstenbosch, Hout Bay, and Kalk Bay",
      "Winelands picnic, Franschhoek chocolate, and Stellenbosch strawberries in season",
    ],
    itinerary: [
      {
        day: "Harbour",
        title: "Two Oceans Aquarium",
        body: "The aquarium, and a marine outing in the harbour.",
      },
      {
        day: "Mountain",
        title: "A class in the clouds",
        body: "Table Mountain, with a class in the clouds.",
      },
      {
        day: "Groote Schuur",
        title: "The heart museum",
        body: "The museum at Groote Schuur Hospital, where Dr Chris Barnard performed the first heart transplant.",
      },
      {
        day: "Gardens",
        title: "Kirstenbosch",
        body: "Kirstenbosch National Botanical Garden, set against the slopes of Table Mountain.",
      },
      {
        day: "Hout Bay",
        title: "A community project",
        body: "A visit to a community project in Hout Bay.",
      },
      {
        day: "Kalk Bay",
        title: "Marine conservation",
        body: "A marine conservation project in Kalk Bay, dedicated to protecting life in the oceans.",
      },
      {
        day: "Winelands",
        title: "Paarl, Franschhoek, and Stellenbosch",
        body: "A picnic under trees in Paarl, a chocolate factory in Franschhoek, museums, and strawberry picking in Stellenbosch when the fruit is in season.",
      },
    ],
    includes: [
      "Return flights between Johannesburg and Cape Town, when your quote includes them",
      "Air-conditioned coach",
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
    practical: [
      "Runs over 3 to 5 days.",
      "12 to 52 guests.",
      "Strawberries in Stellenbosch only when they are in season.",
      outline,
    ],
    image: "/images/cape-town.jpg",
    imageAlt: "Table Mountain across the water at dusk",
    featured: true,
    note: "This tour can host from 12 to 52 guests.",
  },
  {
    slug: "life-is-art",
    title: "Life is Art",
    hook: "Galleries, studios, and wine-farm walls, with time to stop.",
    atmosphere: "Galleries, a graffiti walk, working studios, and art on wine farms.",
    story: [
      "The art is in galleries, on harbour walls, in textile rooms, and at animation desks.",
      "Life is Art is for people who want time with South African art in the city, then with artists in the Winelands.",
    ],
    special:
      "You see the national collection and Zeitz MOCAA, then working rooms where animation and cloth are actually made, and studios from Franschhoek to Stellenbosch.",
    suits: "People who want the city's artists up close, then a quieter studio day in the Winelands.",
    duration: "3 to 5 days",
    groupSize: "12 to 16",
    region: "Cape Town, Simon's Town, and Franschhoek",
    themes: ["art"],
    audience: "Leisure",
    highlights: [
      "South African National Gallery",
      "Zeitz MOCAA at the V&A Waterfront",
      "A street-art walk, an animation studio, and a textile workshop",
      "Studios in Franschhoek, Paarl, and Stellenbosch",
      "A Hout Bay art community project",
    ],
    itinerary: [
      {
        day: "City",
        title: "The national collection",
        body: "The South African National Gallery, an overview of South African art.",
      },
      {
        day: "Waterfront",
        title: "Zeitz MOCAA",
        body: "The Zeitz Museum of Contemporary Art Africa at the V&A Waterfront.",
      },
      {
        day: "Studios",
        title: "Street, animation, and cloth",
        body: "A walking art and graffiti tour, a local animation studio, and a textile design studio and factory.",
      },
      {
        day: "Winelands",
        title: "Artists and wine farms",
        body: "Local artists and studios in Franschhoek, Paarl, and Stellenbosch, a design centre for upcoming artists, and the art that lives on wine farms.",
      },
      {
        day: "Hout Bay",
        title: "An art community project",
        body: "An art community project in Hout Bay.",
      },
    ],
    includes: [
      "Air-conditioned coach",
      "Accommodation in Cape Town, Simon's Town, and Franschhoek",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    practical: ["Runs over 3 to 5 days.", "12 to 16 guests.", outline],
    image: "/images/art.jpg",
    imageAlt: "A sculpture resting in the grass at a Franschhoek wine estate",
    featured: true,
  },
  {
    slug: "protea-and-fynbos",
    title: "Protea & Fynbos",
    hook: "Kirstenbosch, private gardens, and a floral kingdom you can walk.",
    atmosphere: "Kirstenbosch, a floral safari, private gardens, and protea fields.",
    story: [
      "The Western Cape shows its Mediterranean climate, its water, and its indigenous flora on this tour.",
      "It moves from private gardens and community garden programmes to fynbos you can smell, taste beside a glass of wine, and see in the field.",
    ],
    special:
      "The Cape floral kingdom is one of six on earth, and the smallest. You meet it in Kirstenbosch, on an open 4x4, and on a biodynamic walk in Somerset West.",
    suits: "Guests who want gardens, fynbos, and the countryside, with time for the people who tend them.",
    duration: "3 to 5 days",
    groupSize: "12 to 16",
    region: "Cape Town and the Winelands",
    themes: ["fynbos", "nature"],
    audience: "Leisure",
    highlights: [
      "Kirstenbosch National Botanical Garden",
      "An open 4x4 through the floral kingdom",
      "A biodynamic walk on a Somerset West wine estate",
      "Private gardens, a protea farm, and a fynbos and wine pairing",
      "A Winelands garden tea and a city community garden",
    ],
    itinerary: [
      {
        day: "Kirstenbosch",
        title: "The garden on the mountain",
        body: "Kirstenbosch National Botanical Garden, set against the slopes of Table Mountain.",
      },
      {
        day: "The veld",
        title: "A 4x4 botanical safari",
        body: "The Cape floral kingdom from an open-top Land Rover.",
      },
      {
        day: "Somerset West",
        title: "Circle of Life walk",
        body: "A biodynamic walk at a wine estate in Somerset West.",
      },
      {
        day: "Estates",
        title: "Private gardens and a pairing",
        body: "Walking garden tours on private estates and wine farms, and a fynbos and wine pairing.",
      },
      {
        day: "Tea",
        title: "A garden tea in the Winelands",
        body: "Colonial-style high tea in a private Winelands garden.",
      },
      {
        day: "Proteas",
        title: "Fields of proteas",
        body: "A commercial protea farm, plus a community garden project, including a rooftop garden on a Cape Town building.",
      },
    ],
    includes: [
      "Air-conditioned coach",
      "Stays in Cape Town and the Winelands",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    practical: ["Runs over 3 to 5 days.", "12 to 16 guests.", outline],
    image: "/images/fynbos.jpg",
    imageAlt: "Pale protea blooms at Kirstenbosch",
    featured: true,
  },
  {
    slug: "time-to-taste-foodie",
    title: "Time to Taste Foodie",
    hook: "Good friends, good food, and good wine, from a Bo-Kaap kitchen to a braai under the stars.",
    atmosphere: "Bo-Kaap cooking, a Stellenbosch walk, rooibos, and a braai under the stars.",
    story: [
      "Louise Fresco wrote that food, in the end, in our own tradition, is something holy. It is not about nutrients and calories. It is about sharing. It is about honesty. It is about identity.",
      "South African food carries many cultures in one kitchen: smoked snoek, biryani, bobotie, a braai with boerewors, and potjiekos. Rooibos is native here. This tour is five days of cooking, tasting, and sitting down together.",
    ],
    special:
      "You cook with Cape Malay hosts in the Bo-Kaap, take a class on a wine farm, walk Stellenbosch for lunch, taste rooibos where it grows, and close at least one evening beside the coals.",
    suits: "Friends who want to cook, taste, and share a table. A good shape for a group that likes food as the reason for the journey.",
    duration: "5 days",
    groupSize: "12 to 16",
    region: "Cape Town, the Winelands, and the West Coast",
    themes: ["foodie"],
    audience: "Leisure",
    highlights: [
      "Hands-on Bo-Kaap cooking",
      "A chef's class on a wine farm",
      "A Cape cuisine walk in Stellenbosch",
      "Rooibos where it grows, and West Coast seafood",
      "A braai under the stars, with local wine, cheese, and charcuterie",
    ],
    itinerary: [
      {
        day: "Bo-Kaap",
        title: "A Cape Malay kitchen",
        body: "A cooking tour into the food culture of the Cape Malay community in the Bo-Kaap.",
      },
      {
        day: "Wine farm",
        title: "A class in the kitchen",
        body: "A cooking class with an in-house chef, in a working kitchen on a wine farm.",
      },
      {
        day: "Stellenbosch",
        title: "A cuisine walk",
        body: "A classic Cape cuisine walk through Stellenbosch.",
      },
      {
        day: "Rooibos",
        title: "Tea in its landscape",
        body: "Rooibos, tasted where it grows.",
      },
      {
        day: "West Coast",
        title: "Seafood beside the sea",
        body: "West Coast seafood with a glass of crisp wine next to the sea.",
      },
      {
        day: "Evening",
        title: "A braai under the stars",
        body: "A South African braai, with local wines, charcuterie, olives, cheeses, spices, and homemade products.",
      },
    ],
    includes: [
      "Air-conditioned coach",
      "Accommodation in Cape Town and the Winelands",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    practical: ["Five days.", "12 to 16 guests.", outline],
    image: "/images/foodie.jpg",
    imageAlt: "Bright houses along a Bo-Kaap street",
    featured: true,
  },
  {
    slug: "wondrous-west-coast",
    title: "Wondrous West Coast",
    hook: "Long beaches, fishing villages, spring flowers, and seafood eaten close to the boats.",
    atmosphere: "Museums, a fossil park, seafood at Lamberts Bay, and villages up the coast.",
    story: [
      "The West Coast asks for a slower look: long white beaches, aqua water, fishing villages, fresh seafood, spring flowers, and a deep cultural history, including ancient cave paintings.",
      "This outline runs north of Cape Town, with nights in Citrusdal, Elandsbaai, Langebaan, and Yzerfontein.",
    ],
    special:
      "The days mix working heritage and the sea: a wheat museum, rooibos, rock paintings, a fossil park, a lagoon, and sand boarding for guests who want it.",
    suits: "Guests who want the coast, the villages, and a bit of adventure. Sand boarding at Atlantis Dunes is there for anyone who wants the faster hour.",
    duration: "3 to 5 days",
    groupSize: "12 to 52",
    region: "West Coast",
    themes: ["nature", "foodie"],
    audience: "Leisure",
    highlights: [
      "Wheat Industry Museum in Moorreesburg",
      "Rooibos on an eco farm and at the Clanwilliam factory",
      "Rock paintings, and a centre for the San story",
      "Seafood at Lamberts Bay and a day on the Langebaan lagoon",
      "West Coast Fossil Park and sand boarding at Atlantis Dunes",
    ],
    itinerary: [
      {
        day: "Moorreesburg",
        title: "Wheat Industry Museum",
        body: "The Wheat Industry Museum in Moorreesburg, one of two in the world.",
      },
      {
        day: "Rooibos",
        title: "An eco farm and Clanwilliam",
        body: "Rooibos made on an eco farm, and a visit to the rooibos factory in Clanwilliam.",
      },
      {
        day: "Paintings",
        title: "A cave of rock art",
        body: "A farm walk to a cave where San rock paintings are still preserved.",
      },
      {
        day: "Lamberts Bay",
        title: "Seafood on a dune",
        body: "A freshly prepared seafood lunch at Lamberts Bay, on a dune beside the sea.",
      },
      {
        day: "Fossils",
        title: "West Coast Fossil Park",
        body: "Animals that lived on this coast some 5 million years ago.",
      },
      {
        day: "Langebaan",
        title: "The lagoon",
        body: "The lagoon at the West Coast National Park, with a day of kayaking and swimming.",
      },
      {
        day: "San story",
        title: "Adventure, rest, and learning",
        body: "A centre that combines adventure, relaxation, and education around the San people.",
      },
      {
        day: "Atlantis",
        title: "Sand boarding",
        body: "Sand boarding at Atlantis Dunes, for guests who want it.",
      },
    ],
    includes: [
      "Return flights between Johannesburg and Cape Town, when your quote includes them",
      "Air-conditioned coach",
      "Accommodation in Citrusdal, Elandsbaai, Langebaan, and Yzerfontein",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    practical: [
      "Runs over 3 to 5 days.",
      "12 to 52 guests.",
      "Wild flowers when the spring veld is in colour. The rest of the tour does not depend on them.",
      outline,
    ],
    image: "/images/west-coast.jpg",
    imageAlt: "A whitewashed cottage above the sea at Paternoster",
    featured: true,
  },
  {
    slug: "glorious-garden-route",
    title: "Glorious Garden Route",
    hook: "Beaches, forest, caves, and a coast that changes as you drive.",
    atmosphere: "An ostrich farm, the Cango Caves, Knysna, and the sand at Nature's Valley.",
    story: [
      "The Garden Route is a long green road of beaches, mountains, waterfalls, and tangled forest.",
      "There is hiking, whale watching in season, beach walks, an ostrich farm, and time in the forest.",
    ],
    special:
      "The notes name a chain of particular stops, from the Cango Caves and Mossel Bay to Knysna's Featherbed reserve, a protea farm, and the sanctuaries at Plettenberg Bay.",
    suits: "People who want the coast, the forest, and the caves, at a small-group pace.",
    duration: "3 to 5 days",
    groupSize: "12 to 52",
    region: "Garden Route",
    themes: ["nature"],
    audience: "Leisure",
    highlights: [
      "An ostrich farm and the Cango Caves",
      "Dias Museum and the Shell Museum in Mossel Bay",
      "Featherbed Nature Reserve at the Knysna Heads",
      "A protea farm walk in Knysna",
      "Birds of Eden, Monkeyland, and Nature's Valley",
    ],
    itinerary: [
      {
        day: "Klein Karoo",
        title: "Ostriches and the Cango Caves",
        body: "An ostrich farm, and the Cango Caves in the Klein Karoo.",
      },
      {
        day: "Mossel Bay",
        title: "Dias and the shells",
        body: "The Dias Museum Complex, with a life-size replica of the caravel, and the Shell Museum in Mossel Bay.",
      },
      {
        day: "Knysna",
        title: "Featherbed Nature Reserve",
        body: "A ferry to the reserve at the Knysna Heads, a 4x4 drive, lunch, and an eco walk. Also a guided walk on a protea farm in Knysna.",
      },
      {
        day: "Plettenberg Bay",
        title: "Birds and primates",
        body: "Birds of Eden, a free-flight bird sanctuary, and Monkeyland, a free-roaming primate sanctuary.",
      },
      {
        day: "Nature's Valley",
        title: "A white beach",
        body: "A swim and a walk on the beaches at Nature's Valley.",
      },
    ],
    includes: [
      "Return flights between Johannesburg and Cape Town, when your quote includes them",
      "Air-conditioned coach",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    practical: [
      "Runs over 3 to 5 days.",
      "12 to 52 guests.",
      "Whale watching is possible in season. Where you sleep is confirmed in the quote.",
      outline,
    ],
    image: "/images/garden-route.jpg",
    imageAlt: "Mist over the Knysna Heads",
    featured: true,
  },
  {
    slug: "overwhelming-overberg",
    title: "Overwhelming Overberg",
    hook: "Mountains, fynbos, wheat fields, and the whale coast, within a drive of the city.",
    atmosphere: "Clarence Drive, Hermanus in whale season, Cape Agulhas, and lunch at Struisbaai.",
    story: [
      "Within a drive of the city, the Overberg is still open country in many ways: rugged mountains, fynbos, wheat and canola, and a long coast.",
      "One part of the journey is where the Atlantic and Indian Oceans meet. Between June and November the whales come to this southern coastline.",
    ],
    special:
      "The route uses Clarence Drive, the penguins at Betty's Bay, Hermanus, Cape Agulhas, a seafood lunch at Struisbaai, and a vineyard in the Bot River valley.",
    suits: "Guests who want coast and country in one journey, with time to reflect as well as to be out on the cliffs.",
    duration: "3 to 5 days",
    groupSize: "12 to 52",
    region: "Overberg",
    themes: ["nature", "fynbos"],
    audience: "Leisure",
    highlights: [
      "Clarence Drive, between the sea and the mountains",
      "Stony Point penguins and the old whaling station at Betty's Bay",
      "Hermanus in whale season, June to November",
      "Cape Agulhas, the lighthouse, and lunch at Struisbaai",
      "A Bot River valley vineyard and Cheetah Outreach",
    ],
    itinerary: [
      {
        day: "The drive",
        title: "Clarence Drive",
        body: "A coastal drive squeezed between the sea and the foothills of the Hottentots Holland mountains.",
      },
      {
        day: "Betty's Bay",
        title: "Penguins and the whaling station",
        body: "Stony Point penguin colony and the old whaling station.",
      },
      {
        day: "Hermanus",
        title: "The whale coast",
        body: "Hermanus, where the whales come in from June to November.",
      },
      {
        day: "Agulhas",
        title: "The southern tip",
        body: "An eco walk at Cape Agulhas National Park, where the oceans meet, and the climb to the second oldest working lighthouse in South Africa.",
      },
      {
        day: "Struisbaai",
        title: "Seafood beside the harbour",
        body: "A freshly prepared seafood lunch at Struisbaai, and a visit to the Shipwreck Museum.",
      },
      {
        day: "Bot River",
        title: "A vineyard and the cheetahs",
        body: "A vineyard overlooking Walker Bay, on a large estate in the Bot River valley, and Cheetah Outreach, an education programme for the survival of the cheetah.",
      },
    ],
    includes: [
      "Return flights from Johannesburg to Cape Town",
      "Air-conditioned coach",
      "Accommodation in Hermanus, Struisbaai, Arniston, and Walker Bay",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    practical: [
      "Runs over 3 to 5 days.",
      "12 to 52 guests.",
      "Whales from June to November. The coast, the tip, and the towns are there in every month.",
      outline,
    ],
    image: "/images/overberg.jpg",
    imageAlt: "Vineyard rows with a mountain behind them",
    featured: false,
  },
  {
    slug: "bushveld-safari",
    title: "Bushveld Safari",
    hook: "A bush programme near Kruger: drives, a walk, elephants, horses, and a braai under the stars.",
    atmosphere: "Game drives, a bush walk, and a braai, close to Kruger.",
    story: [
      "This is a bush experience in the bushveld, close to the Kruger National Park. You can watch the sun rise over the Lebombo Mountains and the evening glow as it sets.",
      "The programme is an introduction to a big game conservancy and an education in nature, with rangers whose tracking is part of the day.",
    ],
    special:
      "Alongside the open-vehicle game drive and an early eco walk, the notes include an elephant-back safari and a horseback safari through indigenous bush.",
    suits: "The live notes say this safari is for young people. No age range is given. It suits a group that wants to be close to the bush, on foot, on horseback, and in an open vehicle.",
    duration: "5 days",
    groupSize: "12 to 52",
    region: "Bushveld, near Kruger",
    themes: ["nature"],
    audience: "Leisure",
    highlights: [
      "Elephant-back safari: a short introduction, including touching, feeling, and feeding",
      "Horseback through indigenous bush, rocky outcrops, and riverbeds",
      "Game viewing in an open 4x4 in a private reserve",
      "An early eco bush walk: trees, insects, and spoor",
      "A braai under bushveld stars",
    ],
    itinerary: [
      {
        day: "Elephants",
        title: "Elephant-back safari",
        body: "A brief introduction that includes touching, feeling, and feeding the elephants.",
      },
      {
        day: "Horses",
        title: "A ride through the bush",
        body: "A horseback safari through indigenous bush, past rocky outcrops, riverbeds, and open views.",
      },
      {
        day: "Drive",
        title: "Open vehicle game viewing",
        body: "Game viewing in an open four-wheel-drive in a private game reserve.",
      },
      {
        day: "On foot",
        title: "Early eco bush walk",
        body: "Trees, shrubs, vegetation, insects, and spoor, with rangers whose tracking is part of the lesson.",
      },
      {
        day: "Evening",
        title: "A braai under the stars",
        body: "A South African braai under the bushveld stars. Nights are at a safari lodge.",
      },
    ],
    includes: [
      "Air-conditioned coach",
      "Accommodation at a safari lodge",
      "Meals on the itinerary",
      "Excursions and entrance fees",
      director,
    ],
    excludes: sharedExcludes,
    practical: [
      "Five days.",
      "12 to 52 guests.",
      "The live notes say this safari is for young people. An age range is not published.",
      outline,
    ],
    image: "/images/safari.jpg",
    imageAlt: "Guests on an open game-drive vehicle at sunset",
    featured: true,
    note: "The live notes say this safari is for young people. No age range is given.",
  },
  {
    slug: "drakensberg-adventure",
    title: "Drakensberg Adventure",
    hook: "Steep country, mountain streams, and adventure days in the Northern and Central Berg.",
    atmosphere: "Zip-lines, a night walk, birds of prey, and the Drakensberg Boys Choir.",
    story: [
      "The Northern and Central Drakensberg is steep country, with mountain streams and forest. The notes give the area an average of 300 good weather days a year.",
      "This tour is based at an adventure centre. The days are activities, a night walk, and two visits that belong to this valley: birds of prey, and the Drakensberg Boys Choir.",
    ],
    special:
      "Adventure here means paintball, a zip-line, target shooting, scootours, and tree climbing, plus a night eco walk and lessons that include a bug crawl.",
    suits: "Groups who want activity days in the mountains, with three meals and a base so the bags stay put.",
    duration: "3 to 5 days",
    groupSize: "12 to 60",
    region: "Northern and Central Drakensberg",
    themes: ["nature"],
    audience: "Leisure",
    highlights: [
      "Paintball, zip-line, target shooting, scootours, and tree climbing",
      "A night eco walk under the stars",
      "Lessons from nature, including a bug crawl, a bug hunt, and a stokbrood evening",
      "Birds of prey in the Champagne Valley",
      "The Drakensberg Boys Choir",
    ],
    itinerary: [
      {
        day: "Activities",
        title: "The adventure list",
        body: "Paintball, a zip-line, target shooting, scootours, tree climbing, and more on the programme.",
      },
      {
        day: "Night",
        title: "An eco walk under the stars",
        body: "A night walk, night-sound listening, and learn-from-nature lessons that include a bug crawl and a bug hunt.",
      },
      {
        day: "Fire",
        title: "Stokbrood",
        body: "A stokbrood evening at the adventure centre.",
      },
      {
        day: "Champagne Valley",
        title: "Birds of prey",
        body: "A bird of prey centre in the Champagne Valley, with large birds rehabilitated from injury.",
      },
      {
        day: "The choir",
        title: "Drakensberg Boys Choir",
        body: "A visit to the Drakensberg Boys Choir.",
      },
    ],
    includes: [
      "Transport by coach",
      "Accommodation at the adventure centre",
      "Three meals a day",
      "Excursions and entrance fees",
      "The adventure activities on the programme",
      director,
    ],
    excludes: sharedExcludes,
    practical: [
      "Runs over 3 to 5 days.",
      "12 to 60 guests.",
      "The notes give the area about 300 good weather days a year. We still plan for mountain weather.",
      outline,
    ],
    image: "/images/drakensberg.jpg",
    imageAlt: "A golden grass ridge under a pale sky",
    featured: false,
  },
];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getFeaturedTours() {
  return tours.filter((tour) => tour.featured);
}

export function getRelatedTours(slug: string, count = 3) {
  const current = getTour(slug);
  const others = tours.filter((tour) => tour.slug !== slug);
  if (!current) return others.slice(0, count);
  const sameTheme = others.filter((tour) => tour.themes.some((theme) => current.themes.includes(theme)));
  const rest = others.filter((tour) => !sameTheme.includes(tour));
  return [...sameTheme, ...rest].slice(0, count);
}

export function themeLabel(id: ThemeId) {
  return themes.find((theme) => theme.id === id)?.label ?? id;
}

export const enquiryOptions = [
  { value: "not-sure", label: "Not sure yet. Help me choose" },
  { value: "corporate", label: "Corporate breakaway" },
  { value: "educational", label: "Educational or school trip" },
  ...tours.map((tour) => ({ value: tour.slug, label: tour.title })),
];

export function enquiryLabel(value: string) {
  return enquiryOptions.find((option) => option.value === value)?.label ?? value;
}
