import { lifeArtHero } from "@/content/life-art";

export const themes = [
  { id: "foodie", label: "Foodie" },
  { id: "wine", label: "Women & Wine" },
  { id: "art", label: "Art" },
  { id: "fynbos", label: "Protea & Fynbos" },
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
  tabTitle: string;
  eyebrow: string;
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
  /** CSS object-position for the page hero crop. */
  imagePosition?: string;
  featured: boolean;
  note?: string;
};

export const tours: Tour[] = [
  {
    slug: "women-and-wine-weekend",
    title: "Woman & Wine Weekend",
    tabTitle: "Woman & Wine Weekend, South Africa, Zookini Tours",
    eyebrow: "Women & Wine",
    hook: "The Women and Wine Weekend is aimed at women celebrating and loving life!",
    atmosphere: "Lots of Bubbly and wine in the beautiful winelands!",
    story: [
      "It's a weekend of pure excitement, of many surprises, laughs and chats, of visiting wonderful new places, of gathering beautiful memories and of course ...... enjoying lots of Bubbly and wine in the beautiful winelands!",
    ],
    special: "Handcrafted and captivating itineraries that include:",
    suits: "Whether it’s a mother-daughter, a sisters’ get-together, a single traveller or just friends catching up, the Woman & Wine Weekend is the best!",
    duration: "3 days",
    groupSize: "12 to 16 Persons",
    region: "Winelands",
    themes: ["wine"] as ThemeId[],
    audience: "Women",
    highlights: [
      "Wine Tastings at some of South Africa's finest wine farms, those with a more feminine touch!",
      "Excursions to places that will take your breath away!",
      "Meals that will tickle your tastebuds!",
      "An event or two to cherish for ever!",
      "The finest of local experts to create everlasting memories!",
      "And so much more .... !",
    ],
    itinerary: [
      {
        day: "Weekend Tour of 3 days",
        title: "Everything is a surprise!",
        body: "To make it more exciting, everything is a surprise!",
      },
    ],
    includes: [
      "Transport in an Air Conditioned Luxury Coach",
      "Luxurious Accommodation for two nights in the Winelands",
      "Exotic and delectable meals",
      "All excursions, tours and entrance fees",
      "Unique Wine & Bubbly Tastings and Pairings",
      "Lots of surprises and gifts",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "All flights to and from Cape Town, South Africa.",
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Minimum of 12 Persons per tour.",
      "Maximum of 16 Persons per tour.",
      "Tailor made Weekend Tour of 3 days",
      "Woman only",
    ],
    image: "/images/wine.jpg",
    imageAlt: "Two women toasting with wine glasses",
    featured: true,
    note: "Woman only",
  },
  {
    slug: "i-love-cape-town",
    title: "I Love Cape Town Tour",
    tabTitle: "I Love Cape Town Tour, South Africa, Zookini Tours",
    eyebrow: "Cape Town",
    hook: "I love Cape Town!",
    atmosphere: "A favourite among many world travellers!",
    story: [
      "There is nowhere like Cape Town! A city for the romantic; the adventure-seeker; the food-enthusiast; the art-lover ... a favourite among many world travellers!",
      "Cultures, cuisines, landscapes, history, nature, art, design, natural wonders … This wonderful mix brought together on the most southern tip of the most beautiful country in the world!",
    ],
    special: "Explore and celebrate the highlights of Cape Town and the surrounding regions with this very special tour!",
    suits: "",
    duration: "3 to 5 days",
    groupSize: "12 to 52 Persons",
    region: "Cape Town and The Winelands",
    themes: ["cape-town"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "The world famous Two Oceans Aquarium",
      "“Class in the Clouds”",
      "The Heart Museum",
      "Kirstenbosch National Botanical Garden",
      "An extraordinary community project",
      "A Marine Conservation Project",
      "Other visits in the Winelands",
    ],
    itinerary: [
      {
        day: "Harbour",
        title: "The world famous Two Oceans Aquarium",
        body: "The world famous Two Oceans Aquarium. Also included is a “Marine Game Drive” in the harbour.",
      },
      {
        day: "Table Mountain",
        title: "“Class in the Clouds”",
        body: "A once-in-a-lifetime opportunity to experience a “Class in the Clouds”, on Table Mountain!",
      },
      {
        day: "Groote Schuur Hospital",
        title: "The Heart Museum",
        body: "The Heart Museum at Groote Schuur Hospital where Dr. Chris Barnard performed the first ever heart transplant.",
      },
      {
        day: "Kirstenbosch",
        title: "Kirstenbosch National Botanical Garden",
        body: "Kirstenbosch National Botanical Garden set against the slopes of Cape Town’s Table Mountain. One of the most beautiful gardens in Africa and one of the great botanic gardens of the world.",
      },
      {
        day: "Hout Bay",
        title: "An extraordinary community project",
        body: "A visit to an extraordinary community project in Hout Bay.",
      },
      {
        day: "Kalk Bay",
        title: "A Marine Conservation Project",
        body: "A Marine Conservation Project in Kalk Bay dedicated to protecting life in our oceans.",
      },
      {
        day: "Winelands",
        title: "Other visits in the Winelands",
        body: "Other visits in the Winelands include: a picnic under beautiful trees in Paarl; a visit at a local chocolate factory in Franschhoek; tours at museums of importance; strawberry picking in Stellenbosch when in season and much much more!",
      },
    ],
    includes: [
      "Return flights from Johannesburg to Cape Town (if applicable)",
      "Transport in Air Conditioned Luxury Coach",
      "Accommodation in Cape Town and The Winelands",
      "All meals as per itinerary",
      "All excursions, tours and entrance fees",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Minimum of 12 Persons per tour.",
      "Maximum of 52 Persons per tour.",
      "Tailor made tour of 3 to 5 days",
    ],
    image: "/images/cape-town.jpg",
    imageAlt: "Table Mountain across the water at dusk",
    featured: true,
  },
  {
    slug: "life-is-art",
    title: "Life is Art Tour",
    tabTitle: "Life is Art Tour, South Africa, Zookini Tours",
    eyebrow: "Art",
    hook: "Cape Town is an incubator of artistic creativity!",
    atmosphere: "A world of sensations awaiting to be discovered.",
    story: [
      "The Art Scene as a whole in Cape Town and surrounds offers a unique experience, a world of sensations awaiting to be discovered.",
    ],
    special: "Zookini Tours has compiled an exceptional art tour specifically aimed at art lovers to enrich, inspire and celebrate South Africa’s unique art.",
    suits: "",
    duration: "3 to 5 days",
    groupSize: "12 to 16 Persons",
    region: "Cape Town, Simon’s Town and Franschhoek",
    themes: ["art"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "The South African National Gallery",
      "Zeitz Museum of Contemporary Art Africa",
      "Walking Art and Graffiti Tour",
      "Animation Studio",
      "Textile Design Studio",
      "Local Artists and Studios",
      "Upcoming artists",
      "Art Community Project",
      "Art and its importance",
    ],
    itinerary: [
      {
        day: "Cape Town",
        title: "The South African National Gallery",
        body: "The South African National Gallery which provides an overview of South African art, the country’s most revered art museum.",
      },
      {
        day: "V&A Waterfront",
        title: "Zeitz Museum of Contemporary Art Africa",
        body: "The new Zeitz Museum of Contemporary Art Africa at the V&A Waterfront",
      },
      {
        day: "Cape Town",
        title: "Walking Art and Graffiti Tour",
        body: "Trendy Walking Art and Graffiti Tour",
      },
      {
        day: "Studios",
        title: "Animation Studio",
        body: "Award winning local Animation Studio",
      },
      {
        day: "Studios",
        title: "Textile Design Studio",
        body: "Textile Design Studio and Factory",
      },
      {
        day: "Franschhoek, Paarl and Stellenbosch",
        title: "Local Artists and Studios",
        body: "Local Artists and Studios in Franschhoek, Paarl and Stellenbosch",
      },
      {
        day: "Design Centre",
        title: "Upcoming artists",
        body: "Design Centre as platform for upcoming artists",
      },
      {
        day: "Hout Bay",
        title: "Art Community Project",
        body: "Art Community Project in Hout Bay",
      },
      {
        day: "Wine Farms",
        title: "Art and its importance",
        body: "Art and its importance at various Wine Farms",
      },
    ],
    includes: [
      "Transport in Air Conditioned Luxury Coach",
      "Accommodation in Cape Town, Simon’s Town and Franschhoek",
      "All meals as per itinerary",
      "All excursions, tours and entrance fees",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "All flights to and from Cape Town, South Africa.",
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Boutique style tour with minimum of 12 Persons per tour.",
      "Maximum of 16 Persons per tour.",
      "Tailor made tour of 3 to 5 days",
    ],
    image: lifeArtHero.src,
    imageAlt: lifeArtHero.alt,
    imagePosition: lifeArtHero.position,
    featured: true,
  },
  {
    slug: "protea-and-fynbos",
    title: "Protea & Fynbos Tour",
    tabTitle: "Protea & Fynbos Tour, South Africa, Zookini Tours",
    eyebrow: "Protea & Fynbos",
    hook: "The Cape Protea and Fynbos Garden Tour displays the Western Cape with its Mediterranean climate, abundant sources of water and rich indigenous unique flora at its best.",
    atmosphere: "Our diverse and unique Fynbos experiences",
    story: [
      "The tour is designed to incorporate the wealth that nature has on offer, from stunning private gardens; passionate gardeners; community upliftment garden programmes to our diverse and unique Fynbos experiences.",
    ],
    special: "Let us share South Africa’s finest gardens and beautiful countryside with you!",
    suits: "",
    duration: "3 to 5 days",
    groupSize: "12 to 16 Persons",
    region: "Cape Town and The Winelands",
    themes: ["fynbos", "nature"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "Kirstenbosch National Botanical Garden",
      "4x4 botanical safari",
      "Circle of Life Biodynamic Walk",
      "Sustainable Walking Garden Tours",
      "Fynbos & Wine Pairing",
      "Colonial Style High Tea",
      "The fields of proteas",
      "Garden Community Projects",
      "Gardening and its importance",
    ],
    itinerary: [
      {
        day: "Kirstenbosch",
        title: "Kirstenbosch National Botanical Garden",
        body: "A visit to Kirstenbosch National Botanical Garden set against the slopes of Cape Town’s Table Mountain. One of the most beautiful gardens in Africa and one of the great botanic gardens of the world.",
      },
      {
        day: "Cape Floral Kingdom",
        title: "4x4 botanical safari",
        body: "Experience the Cape Floral Kingdom, one and the smallest of only six floral kingdoms in the world with a 4x4 botanical safari on an open-top Land Rover.",
      },
      {
        day: "Somerset West",
        title: "Circle of Life Biodynamic Walk",
        body: "A Circle of Life Biodynamic Walk at a renowned wine estate in Somerset West.",
      },
      {
        day: "Private Estates and Wine Farms",
        title: "Sustainable Walking Garden Tours",
        body: "Sustainable Walking Garden Tours on extraordinary Private Estates and Wine Farms",
      },
      {
        day: "Fynbos",
        title: "Fynbos & Wine Pairing",
        body: "Experience Fynbos in nature, but also with a unique Fynbos & Wine Pairing.",
      },
      {
        day: "The Winelands",
        title: "Colonial Style High Tea",
        body: "Colonial Style High Tea in a lovely private garden in The Winelands.",
      },
      {
        day: "Protea Farms",
        title: "The fields of proteas",
        body: "Explore the fields of proteas at one of the world’s largest commercial Protea Farms.",
      },
      {
        day: "Cape Town",
        title: "Garden Community Projects",
        body: "Visit local Garden Community Projects such as a rooftop garden on top of one of Cape Town’s Buildings.",
      },
      {
        day: "Wine Farms",
        title: "Gardening and its importance",
        body: "Gardening and its importance and impact on the wines at various Wine Farms",
      },
    ],
    includes: [
      "Transport in Air Conditioned Luxury Coach",
      "Hand Picked Accommodation in Cape Town and The Winelands",
      "All meals as per itinerary",
      "All excursions, tours and entrance fees",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "All flights to and from Cape Town, South Africa.",
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Boutique style tour with minimum of 12 Persons per tour.",
      "Maximum of 16 Persons per tour.",
      "Tailor made tour of 3 to 5 days",
    ],
    image: "/images/fynbos.jpg",
    imageAlt: "Pale protea blooms at Kirstenbosch",
    featured: true,
  },
  {
    slug: "time-to-taste-foodie",
    title: "Time to Taste Foodie Tour",
    tabTitle: "Time to Taste Foodie Tour, South Africa, Zookini Tours",
    eyebrow: "Foodie",
    hook: "Good friends ... good food ... and good wine!",
    atmosphere: "The smell and taste of our traditional local food",
    story: [
      "Louise Fresco said: “Food, in the end, in our own tradition, is something holy. It’s not about nutrients and calories. It’s about sharing. It’s about honesty. It’s about identity.”",
      "South Africans are known as the rainbow nation, therefore it is not surprising that we have a rainbow cuisine as well! Our rich cultural heritage is reflected in our South African food.",
      "Popular South African dishes include smoked snoek, biryani, bobotie, a braai with boerewors and potjiekos, proudly South African main meals.",
      "Locally produced drinks such as Rooibos tea is native to our country, not to mention our finest wines which have been earning excellent awards internationally.",
    ],
    special: "Come and celebrate the smell and taste of our traditional local food!",
    suits: "",
    duration: "5 days",
    groupSize: "12 to 16 Persons",
    region: "Cape Town and The Winelands",
    themes: ["foodie"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "Bo-Kaap Cooking Tour",
      "A cooking class",
      "Classic Cape Cuisine Walk",
      "Experience Rooibos",
      "The lovely seafood of the West Coast",
      "A traditional South African Braai",
      "Local wines and craft beers",
    ],
    itinerary: [
      {
        day: "Bo-Kaap",
        title: "Bo-Kaap Cooking Tour",
        body: "A Bo-Kaap Cooking Tour takes you on a voyage into the food-culture of the Cape Malays in Bo-Kaap. Included is a hands-on, practical lesson on how to cook and bake like a real Cape Malay ‘Auntie’!",
      },
      {
        day: "Wine farm",
        title: "A cooking class",
        body: "A cooking class conducted by an in-house chef on a wine farm presented in a state-of-the-art kitchen.",
      },
      {
        day: "Stellenbosch",
        title: "Classic Cape Cuisine Walk",
        body: "A Classic Cape Cuisine Walk in the lovely town of Stellenbosch.",
      },
      {
        day: "Rooibos",
        title: "Experience Rooibos",
        body: "Experience Rooibos, unique to South Africa, first-hand in its natural environment.",
      },
      {
        day: "West Coast",
        title: "The lovely seafood of the West Coast",
        body: "Taste the lovely seafood of the West Coast while enjoying a glass of crisp wine next to the sea!",
      },
      {
        day: "Under the stars",
        title: "A traditional South African Braai",
        body: "Enjoy a traditional South African Braai under the stars!",
      },
      {
        day: "The wonderful tastes of South Africa",
        title: "Local wines and craft beers",
        body: "Get hooked on the wonderful tastes of South Africa from the introduction of a large selection of our local wines and craft beers enjoyed with a variety of charcuterie, olives, cheeses, spices and traditional and home made products.",
      },
    ],
    includes: [
      "Transport in Air Conditioned Luxury Coach",
      "Luxury Accommodation in Cape Town and The Winelands",
      "All meals as per itinerary",
      "All excursions, tours and entrance fees",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "All flights to and from Cape Town, South Africa.",
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Minimum of 12 Persons per tour.",
      "Maximum of 16 Persons per tour.",
      "Tailor made tour of 5 days",
    ],
    image: "/images/foodie.jpg",
    imageAlt: "Bright houses along a Bo-Kaap street",
    featured: true,
  },
  {
    slug: "wondrous-west-coast",
    title: "Wondrous West Coast Tour",
    tabTitle: "Wondrous West Coast Tour, South Africa, Zookini Tours",
    eyebrow: "Nature",
    hook: "The West Coast is South Africa’s own treasure trove!",
    atmosphere: "Long, white beaches, aqua blue seas, quaint fishing villages",
    story: [
      "The West Coast of South Africa demands a special appreciation with its long, white beaches, aqua blue seas, quaint fishing villages, wonderful fresh seafood, colourful flowers in spring, rich cultural history and the ancient cave paintings.",
    ],
    special: "",
    suits: "",
    duration: "3 to 5 days",
    groupSize: "12 to 52 Persons",
    region: "West Coast",
    themes: ["nature", "foodie"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "Wheat Industry Museum",
      "Rooibos Tea first hand",
      "Bushman Rock Paintings",
      "The well known Rooibos Factory",
      "A Freshly prepared Seafood Lunch",
      "Some 5 million years ago",
      "The azure lagoon",
      "A new understanding of the San People",
      "Sand Boarding",
    ],
    itinerary: [
      {
        day: "Moorreesburg",
        title: "Wheat Industry Museum",
        body: "Visit the Wheat Industry Museum in Moorreesburg, only one of two in the world!",
      },
      {
        day: "Eco Farm",
        title: "Rooibos Tea first hand",
        body: "A visit to an Eco Farm where we will experience the manufacturing of Rooibos Tea first hand.",
      },
      {
        day: "A cave",
        title: "Bushman Rock Paintings",
        body: "A Walk on a farm to a cave where Bushman Rock Paintings are still preserved through all the years.",
      },
      {
        day: "Clanwilliam",
        title: "The well known Rooibos Factory",
        body: "A visit to the well known Rooibos Factory in Clanwilliam.",
      },
      {
        day: "Lamberts Bay",
        title: "A Freshly prepared Seafood Lunch",
        body: "A Freshly prepared Seafood Lunch at Lamberts Bay on a dune next to the seaside.",
      },
      {
        day: "West Coast Fossil Park",
        title: "Some 5 million years ago",
        body: "A Tour at the West Coast Fossil Park where we learn more about animals which inhabited the west coast area some 5 million years ago.",
      },
      {
        day: "West Coast National Park",
        title: "The azure lagoon",
        body: "A visit to the azure lagoon at the West Coast National Park where we will enjoy a day of kayaking and swimming.",
      },
      {
        day: "San People",
        title: "A new understanding of the San People",
        body: "We visit a centre which combines adventure, relaxation and education to leave a lasting impression and a new understanding of the San People.",
      },
      {
        day: "Atlantis Dunes",
        title: "Sand Boarding",
        body: "For the Adventure lover we include loads of fun with Sand Boarding at Atlantis Dunes.",
      },
    ],
    includes: [
      "Return flights from Johannesburg to Cape Town (if applicable)",
      "Transport in Air Conditioned Luxury Coach",
      "Accommodation in Citrusdal, Elandsbaai, Langebaan & Yzerfontein",
      "All meals as per itinerary",
      "All excursions, tours and entrance fees",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "All flights to and from Cape Town, South Africa.",
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Minimum of 12 Persons per tour.",
      "Maximum of 52 Persons per tour.",
      "Tailor made tour of 3 to 5 days",
    ],
    image: "/images/west-coast.jpg",
    imageAlt: "A whitewashed cottage above the sea at Paternoster",
    featured: true,
  },
  {
    slug: "glorious-garden-route",
    title: "Glorious Garden Route Tour",
    tabTitle: "Glorious Garden Route Tour, South Africa, Zookini Tours",
    eyebrow: "Nature",
    hook: "The Garden Route is without any doubt the jewel of South Africa!",
    atmosphere: "An endless list of activities to enjoy for the nature lover and the adventure seeker.",
    story: [
      "It is a beautiful journey with white stretched beaches; mountains; waterfalls; deep tangled forests and mountains.",
      "There's an endless list of activities to enjoy for the nature lover and the adventure seeker. From hiking and whale watching to long beach walks, to visiting ostrich farms to bathing in the beauty and splendour of the glorious nature.",
    ],
    special: "The visit to the Garden Route will create enough special memories to last a lifetime!",
    suits: "",
    duration: "3 to 5 days",
    groupSize: "12 to 52 Persons",
    region: "Garden Route",
    themes: ["nature"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "An awesome experience at an Ostrich Farm",
      "The Cango Caves",
      "A life-size replica of the Dias Caravel",
      "The Shell Museum",
      "Featherbed Nature Reserve",
      "A Guided walk on a lovely Protea Farm",
      "Birds of Eden and Monkeyland Sanctuary",
      "The lovely white beaches",
    ],
    itinerary: [
      {
        day: "Ostrich Farm",
        title: "An awesome experience at an Ostrich Farm",
        body: "An awesome experience at an Ostrich Farm you will never forget!",
      },
      {
        day: "Klein Karoo",
        title: "The Cango Caves",
        body: "A visit to the Cango Caves, the spectacular underground wonder of the Klein Karoo.",
      },
      {
        day: "Dias Museum Complex",
        title: "A life-size replica of the Dias Caravel",
        body: "A visit to the Dias Museum Complex where we will see a life-size replica of the Dias Caravel.",
      },
      {
        day: "Mossel Bay",
        title: "The Shell Museum",
        body: "A visit to the Shell Museum in Mossel Bay.",
      },
      {
        day: "Knysna Heads",
        title: "Featherbed Nature Reserve",
        body: "A visit to the Featherbed Nature Reserve located at the Knysna Heads. Included is a ferry trip, a 4x4 vehicle & trailer drive; a lovely lunch and an eco-reserve walk at Featherbed Nature Reserve.",
      },
      {
        day: "Knysna",
        title: "A Guided walk on a lovely Protea Farm",
        body: "A Guided walk on a lovely Protea Farm in Knysna.",
      },
      {
        day: "Plettenberg Bay",
        title: "Birds of Eden and Monkeyland Sanctuary",
        body: "A visit to Birds of Eden, a free flight bird sanctuary in Plettenberg Bay and Monkeyland Sanctuary, the world’s first free roaming multi-species primate sanctuary in Plettenberg Bay.",
      },
      {
        day: "Nature’s Valley",
        title: "The lovely white beaches",
        body: "A swim and walk on the lovely white beaches of Nature’s Valley.",
      },
    ],
    includes: [
      "Return flights from Johannesburg to Cape Town (if applicable)",
      "Transport in Air Conditioned Luxury Coach",
      "Accommodation in Cape Town and The Winelands",
      "All meals as per itinerary",
      "All excursions, tours and entrance fees",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Minimum of 12 Persons per tour.",
      "Maximum of 52 Persons per tour.",
      "Tailor made tour of 3 to 5 days",
    ],
    image: "/images/garden-route.jpg",
    imageAlt: "Mist over the Knysna Heads",
    featured: true,
  },
  {
    slug: "overwhelming-overberg",
    title: "Overwhelming Overberg Tour",
    tabTitle: "Overwhelming Overberg Tour, South Africa, Zookini Tours",
    eyebrow: "Nature",
    hook: "The Overberg, a region of contrasts and wonder!",
    atmosphere: "Rugged mountain ranges, fynbos, rolling wheat and canola fields, and splendid coastal vistas.",
    story: [
      "Within driving distance of one of South Africa's busiest cities, you will find this lovely gem that is unspoilt in so many ways.",
      "The Overberg has rugged mountain ranges, fynbos, rolling wheat and canola fields, and splendid coastal vistas.",
      "The unique experience of witnessing the meeting of the Atlantic and Indian Oceans is once-in-a-lifetime.",
      "A highlight every year between June and November is the coming of the whales to the Western Cape's southern coastline or the Cape Whale Coast.",
    ],
    special: "Do join the Overwhelming Overberg Tour to reflect, discover and have the adventure of a lifetime!",
    suits: "",
    duration: "3 to 5 days",
    groupSize: "12 to 52 Persons",
    region: "Overberg",
    themes: ["nature", "fynbos"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "A coastal drive via Clarence Drive",
      "Stony Point Penguin Colony & Old Whaling Station",
      "The quaint town of Hermanus",
      "An Eco Walk",
      "The second oldest working lighthouse in South Africa",
      "A Freshly prepared Seafood Lunch",
      "The only Shipwreck Museum in South Africa",
      "An international award-winning vineyard",
      "The Cheetah Outreach Centre",
    ],
    itinerary: [
      {
        day: "Clarence Drive",
        title: "A coastal drive via Clarence Drive",
        body: "A coastal drive via Clarence Drive, one of the most scenic routes the Cape has to offer. It is squashed between the sea and the foothills of the Hottentots Holland Mountains.",
      },
      {
        day: "Betty’s Bay",
        title: "Stony Point Penguin Colony & Old Whaling Station",
        body: "A Visit to Stony Point Penguin Colony & Old Whaling Station in Betty’s Bay.",
      },
      {
        day: "Hermanus",
        title: "The quaint town of Hermanus",
        body: "The quaint town of Hermanus, the official Whale Watching Capital of the World.",
      },
      {
        day: "Cape Agulhas National Park",
        title: "An Eco Walk",
        body: "An Eco Walk at the astonishing Cape Agulhas National Park, the most southern tip of Africa.",
      },
      {
        day: "Lighthouse",
        title: "The second oldest working lighthouse in South Africa",
        body: "We climb hundreds of steps to reach the top of the second oldest working lighthouse in South Africa.",
      },
      {
        day: "Struisbaai",
        title: "A Freshly prepared Seafood Lunch",
        body: "A Freshly prepared Seafood Lunch at Struisbaai next to the seaside.",
      },
      {
        day: "Shipwreck Museum",
        title: "The only Shipwreck Museum in South Africa",
        body: "A visit to the only Shipwreck Museum in South Africa, a chilling experience.",
      },
      {
        day: "Bot River Valley",
        title: "An international award-winning vineyard",
        body: "A visit to an international award-winning vineyard overlooking Walker Bay, set within a picturesque 1000-hectare estate tucked away in the beautiful Bot River Valley.",
      },
      {
        day: "Cheetah Outreach Centre",
        title: "The Cheetah Outreach Centre",
        body: "The Cheetah Outreach Centre is an education and community-based programme created to raise awareness of the cheetah and to campaign for its survival.",
      },
    ],
    includes: [
      "Return flights from Johannesburg to Cape Town",
      "Transport in Air Conditioned Luxury Coach",
      "Accommodation in Hermanus, Struisbaai, Arniston and Walker Bay",
      "All meals as per itinerary",
      "All excursions, tours and entrance fees",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "All flights to and from Cape Town, South Africa.",
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Minimum of 12 Persons per tour.",
      "Maximum of 52 Persons per tour.",
      "Tailor made tour of 3 to 5 days",
    ],
    image: "/images/overberg.jpg",
    imageAlt: "Vineyard rows with a mountain behind them",
    featured: false,
  },
  {
    slug: "bushveld-safari",
    title: "Bushveld Safari Adventure Tour",
    tabTitle: "Bushveld Safari Adventure Tour, South Africa, Zookini Tours",
    eyebrow: "Nature",
    hook: "Enjoy a real bush experience in the heart of South Africa’s Bushveld close to the Kruger National Park!",
    atmosphere: "The stillness of this wonderful African wilderness.",
    story: [
      "You will be able to watch the sun rise over the Lebombo Mountains to the east and in the evenings marvel at the orange glow of the sun as it sets again in the west.",
      "Enjoy the bush views in every direction and just listen to the stillness of this wonderful African wilderness.",
    ],
    special: "The programme have been designed to offer an introduction to a big game conservancy and an education on nature.",
    suits: "",
    duration: "5 days",
    groupSize: "12 to 52 Persons",
    region: "Bushveld close to the Kruger National Park",
    themes: ["nature"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "Elephant Back Safari",
      "Horse Back Safari",
      "A game viewing experience",
      "Eco Bushwalk Safari",
      "Very close to nature",
      "A South African Braai",
    ],
    itinerary: [
      {
        day: "Elephants",
        title: "Elephant Back Safari",
        body: "A wonderful activity includes the Elephant Back Safari, a brief introduction which includes touching, feeling and feeding the elephants.",
      },
      {
        day: "Indigenous bush",
        title: "Horse Back Safari",
        body: "Also included is a Horse Back Safari. We ride through indigenous bush passing rocky outcrops, river beds and exceptionally scenic terrain.",
      },
      {
        day: "Private Game Reserve",
        title: "A game viewing experience",
        body: "A game viewing experience on site using open four wheel drive vehicle in the private Game Reserve.",
      },
      {
        day: "Early morning",
        title: "Eco Bushwalk Safari",
        body: "An early morning Eco Bushwalk Safari where the focus is on trees, shrubs, overall vegetation, insects and spoor.",
      },
      {
        day: "Game rangers",
        title: "Very close to nature",
        body: "Expect to get very close to nature with some of the most experienced game rangers Africa has to offer. Their tracking ability is truly impressive and will educate and fascinate you.",
      },
      {
        day: "Bushveld stars",
        title: "A South African Braai",
        body: "A South African Braai under the beautiful Bushveld stars!",
      },
    ],
    includes: [
      "Transport in Air Conditioned Coach",
      "Accommodation at a lovely Safari Lodge",
      "All meals as per itinerary",
      "All excursions, tours and entrance fees",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "All flights to and from Cape Town, South Africa.",
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Minimum of 12 Persons per tour.",
      "Maximum of 52 Persons per tour.",
      "Tailor made tour of 5 days",
    ],
    image: "/images/safari.jpg",
    imageAlt: "Guests on an open game drive vehicle at sunset",
    featured: true,
    note: "This is a safari adventure exclusive for young people!",
  },
  {
    slug: "drakensberg-adventure",
    title: "Drakensberg Adventure Tour",
    tabTitle: "Drakensberg Adventure Tour, South Africa, Zookini Tours",
    eyebrow: "Nature",
    hook: "The Drakensberg region is regarded as the adventure capital of South Africa!",
    atmosphere: "Exhilarating, diverse, safe and fun!",
    story: [
      "The Northern and Central Drakensberg area has some of the most beautiful scenery that can be imagined. Steep terrain, mountain streams, forests and an average of 300 good weather days a year, sets the scene for you to discover an unforgettable adventure!",
    ],
    special: "Adventure Activities are exhilarating, diverse, safe and fun!",
    suits: "",
    duration: "3 to 5 days",
    groupSize: "12 to 60 Persons",
    region: "Northern and Central Drakensberg",
    themes: ["nature"] as ThemeId[],
    audience: "Leisure",
    highlights: [
      "Paintball, Zip-Line, Target Shooting",
      "An Eco Walk",
      "Bug Crawling",
      "Stokbrood evening",
      "A Bird of Prey Centre",
      "The World Famous Drakensberg Boys Choir",
    ],
    itinerary: [
      {
        day: "Adventure Activities",
        title: "Paintball, Zip-Line, Target Shooting",
        body: "Adventure Activities includes: Paintball; Zip-Line; Target Shooting; Scootours; Tree Climbing and many more!",
      },
      {
        day: "At night",
        title: "An Eco Walk",
        body: "An Eco Walk at night under the stars!",
      },
      {
        day: "Learn-from-Nature",
        title: "Bug Crawling",
        body: "Learn-from-Nature Lessons that includes Bug Crawling.",
      },
      {
        day: "Other interesting activities",
        title: "Stokbrood evening",
        body: "Other interesting activities such as Stokbrood evening, Night sound appreciation, Bug Hunt etc.",
      },
      {
        day: "Champagne Valley",
        title: "A Bird of Prey Centre",
        body: "A visit to a Bird of Prey Centre in the Champagne Valley that includes large birds rehabilitated from injury, and provides an excellent opportunity to see these magnificent sky warriors in action.",
      },
      {
        day: "Drakensberg Boys Choir",
        title: "The World Famous Drakensberg Boys Choir",
        body: "A visit to the World Famous Drakensberg Boys Choir.",
      },
    ],
    includes: [
      "Transport in a Semi Luxury Coach",
      "Accommodation at the Adventure Centre",
      "Three meals per day",
      "All excursions, tours and entrance fees",
      "All adventure activities",
      "Tour accompanied by a Zookini Tour Director",
    ],
    excludes: [
      "All flights to and from Cape Town, South Africa.",
      "Any arrangements regarding accommodation, transport, meals and excursions prior and after the chosen tour.",
      "Meals not included in itinerary",
      "Any extras such as beverages (alcoholic and non-alcoholic), phone calls, laundry etc. and services of personal nature.",
    ],
    practical: [
      "Minimum of 12 Persons per tour.",
      "Maximum of 60 Persons per tour.",
      "Tailor made tour of 3 to 5 days",
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
  { value: "not-sure", label: "Not sure yet" },
  { value: "corporate", label: "Corporate Tours" },
  { value: "educational", label: "School and Educational Tours" },
  ...tours.map((tour) => ({ value: tour.slug, label: tour.title })),
];

export function enquiryLabel(value: string) {
  return enquiryOptions.find((option) => option.value === value)?.label ?? value;
}
