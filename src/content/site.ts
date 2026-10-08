export const site = {
  name: "Zookini Tours",
  tagline: "Celebrating Life!",
  logoTagline: "CELEBRATE LIFE!",
  url: "https://www.zookini.co.za",
  email: "anita@zookini.co.za",
  phoneDisplay: "+27 (0)82 334 8854",
  phoneTel: "+27823348854",
  whatsappNumber: "27823348854",
  address: "Paarl, Cape Winelands",
  copyright: "© 2012 to 2026 Zookini Tours South Africa. All rights reserved.",
  footerHeading: "Contact Us",
} as const;

/**
 * TODO confirm before the next wording pass:
 * - The public place line is Paarl, Cape Winelands. The street address is not published.
 * - No About page and no testimonials page exist on zookini.co.za.
 *   The Rosalind Massow line is on the contact page. Guest reviews are not published.
 * - Pickup is not published for any journey.
 * - No tour page publishes a day-by-day order. Outlines list the named experiences only.
 * - Garden Route package includes name accommodation in Cape Town and the Winelands,
 *   while the visits are Garden Route places. Stays are left to the quote.
 * - The bushveld safari is described as exclusive for young people. No age range is given.
 * - Unnamed awards (a vineyard, a protea farm, "finest wines") are left out until they can be named.
 * - Client logos: KPMG wordmark from the KPMG file on Wikimedia (kpmg.com blue #003087).
 *   HORSCH wordmark from horsch.com (logo_footer.svg). PSG from the psg.co.za header SVG.
 *   TERRATILL wordmark cropped from the white logo on terratill.co.za.
 *   STADIO (formerly SBS) from stadio.ac.za/themes/stadio/logo.svg. The word is white
 *   in that file, so the saved marks use #3E5559 for the word. Colour squares stay
 *   on the hover file.
 */

export const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/zookinitours/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/zookinitours/",
  },
  {
    label: "Pinterest",
    href: "http://pinterest.com/ZookiniTours",
  },
] as const;

export const nav = [
  { href: "/tours", label: "Leisure" },
  { href: "/corporate", label: "Corporate" },
  { href: "/educational", label: "Educational" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage = "Hello, I would like to enquire about a Zookini tour.";

export function tourWhatsAppMessage(title: string) {
  return `Hello, I would like to enquire about the ${title}.`;
}

export const houseStory = {
  title: "Every tour is unique",
  link: "About Zookini Tours",
  paragraphs: [
    "Zookini Tours believe in celebrating life! This is the reason why EVERY tour is unique. We offer a fresh approach to creating a once-in-a-lifetime tour, ensuring that every tour is hand crafted to be enticing, exciting and with you enjoying every minute!",
    "A good number of people spend hours browsing the Internet or relying on family and friends for ideas for their next tour. Only to be disappointed at the end without special memories to treasure.",
    "We always have something special in mind!",
  ],
} as const;

export const hostStory = {
  title: "We bring all your dreams together.",
  paragraphs: [
    "We will gladly assist on bringing your dream to life and will help carry it through to the last detail.",
  ],
} as const;

export const aboutStory = {
  title: "Celebrating Life!",
  link: "Leisure Tours",
  paragraphs: [
    "Zookini Tours is a family run company in Paarl, Cape Winelands, founded by Anita Kemp.",
    "South Africa is one of the most diverse countries in the world. It is a country of beauty and splendour, a unique and inspiring experience! It is home to one of the most diverse and exotic landscapes, wonderful people, abundant wildlife, excellent food and wine and colourful culture and history. Any visitor to South Africa will be amazed by what the country has to offer.",
    "Being part of our rainbow nation, our team consists of people that has a passion for their country and its people. That is the reason why we can open up exceptional opportunities to offer the greatness of our country! Come celebrate life with us!",
    "celebrate, verb, \\ˈse-lə-ˌbrāt\\, to take part in special enjoyable activities or to do something special for an important event, occasion, holiday ......",
  ],
  approachTitle: "We offer:",
  approach: [
    "Boutique style tours.",
    "Every tour is unique with exceptional quality and personalised service.",
    "Hand Selected excursions on the road less travelled.",
    "Behind the scenes personal approach.",
    "Small group tours, only 12 to 16 travellers per tour.",
  ],
} as const;

export const ways = [
  {
    id: "leisure",
    label: "Leisure",
    title: "Leisure",
    points: [
      {
        label: "We offer",
        body: "Boutique style tours. Every tour is unique with exceptional quality and personalised service.",
      },
      {
        label: "On the road less travelled",
        body: "Hand Selected excursions on the road less travelled. Behind the scenes personal approach.",
      },
      {
        label: "Small group tours",
        body: "Small group tours, only 12 to 16 travellers per tour.",
      },
    ],
    href: "/tours",
    cta: "Leisure Tours",
    photo: "wine",
  },
  {
    id: "corporate",
    label: "Corporate",
    title: "Corporate",
    points: [
      {
        label: "We offer",
        body: "Corporate Breakaways, Executive Retreats, Corporate Incentive Programmes, Team Building Events, End of the Year Celebrations, Tailor Made Tours with a specific theme in mind.",
      },
      {
        label: "Every detail of your itinerary",
        body: "Our professional team will manage to plan and organise every detail of your itinerary. This includes all travel arrangements; accommodation requirements; attendance of day excursions etc.",
      },
      {
        label: "Business Retreats",
        body: "These retreats last between two to five days and we give attention to site selection, accommodation, transportation, catering, business meetings and activities.",
      },
    ],
    href: "/corporate",
    cta: "Corporate Tours",
    photo: "corporate",
  },
  {
    id: "schools",
    label: "Educational",
    title: "The Outdoor Classroom",
    points: [
      {
        label: "Educational",
        body: "We will assist in organising educational trips for students of any age and at any academic stage.",
      },
      {
        label: "Camps",
        body: "Camps: Adventure, Leadership, Choir, Sport, Mother & Daughter Camps etc.",
      },
      {
        label: "All Inclusive Tours",
        body: "All Inclusive Tours: Top Ten Achiever Tours; Art Tours; Consumer Study Tours; Recreational Tours etc.",
      },
    ],
    href: "/educational",
    cta: "School and Educational Tours",
    photo: "educational",
  },
] as const;

export const doors = [
  {
    href: "/tours",
    label: "Leisure",
    line: "Boutique style tours.",
  },
  {
    href: "/corporate",
    label: "Corporate",
    line: "Corporate Breakaways, Executive Retreats, Team Building Events",
  },
  {
    href: "/educational",
    label: "Educational",
    line: "Every child remembers their school trip",
  },
] as const;

export const pillars = [
  {
    href: "/tours",
    title: "Leisure",
    promise: "Boutique style tours.",
    image: "/images/wine.jpg",
    imageAlt: "Two women toasting with wine glasses",
  },
  {
    href: "/corporate",
    title: "Corporate",
    promise: "Corporate Breakaways, Executive Retreats, Team Building Events",
    image: "/images/corporate.jpg",
    imageAlt: "A group sharing a terrace lunch",
  },
  {
    href: "/educational",
    title: "Educational",
    promise: "Every child remembers their school trip",
    image: "/images/educational.jpg",
    imageAlt: "A child with binoculars in the fynbos",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "We research",
    body: "Tell us who is travelling and what you would love to see and do.",
  },
  {
    number: "02",
    title: "We negotiate, we organise",
    body: "Our professional team will manage to plan and organise every detail of your itinerary.",
  },
  {
    number: "03",
    title: "And you ..... pack your bags!",
    body: "Tour accompanied by a Zookini Tour Director",
  },
] as const;

export const corporateStory = {
  lede: "It can be an overwhelming task to organise corporate events, team building events and corporate tours.",
  intro:
    "Our professional team will manage to plan and organise every detail of your itinerary. This includes all travel arrangements; accommodation requirements; attendance of day excursions etc. We will gladly assist on bringing your dream to life and will help carry it through to the last detail.",
  offersTitle: "We offer:",
  offers: [
    "Corporate Breakaways",
    "Executive Retreats",
    "Corporate Incentive Programmes",
    "Team Building Events",
    "End of the Year Celebrations",
    "Tailor Made Tours with a specific theme in mind",
  ],
  clients:
    "With names such as KPMG, SBS, Horsch, Terratill and PSG appearing on our client list we are confident that we can cater to your corporate needs.",
  kindsTitle: "Tours & Retreats",
  kindsIntro:
    "We specialise in executive retreats, incentive programmes and corporate themed tours. Business development and organisational planning are typically part of the agenda, but equal weight is given to enjoyable activities as part of the itinerary.",
  kinds: [
    {
      title: "Business Retreats",
      body: "These retreats last between two to five days and we give attention to site selection, accommodation, transportation, catering, business meetings and activities.",
    },
    {
      title: "Incentive Programmes",
      body: "These programmes allow a host to spend informal time with its guests in a relaxed environment. Appreciation events can range from programmes geared towards employee appreciation to client appreciation.",
    },
    {
      title: "Corporate Themed Tours",
      body: "These retreats can include: End of the Year Celebrations, International Company visits with a particular theme in mind, Golf Tours, Safari Tours, Gourmet Tours etc.",
    },
  ],
  teamIntro:
    "Team Building events are meant to build the company's strengths while building employee morale, goodwill and confidence. It provides the unique opportunity for employees to spend time together in a non-work environment. Corporate team building events have been epitomised by outdoor and physical group activities, but it can also focus on other types of activities from workshops to sensitivity training to wine blending.",
  activitiesTitle: "A Taste on Some of Our Activities:",
  activities: [
    "Active Adventure: Beach Olympics, Beach, Braai & Sunny Sky, Amazing Race",
    "Creative: Art Jamming, Junk to Funk, Perfume Power",
    "Cooking: Braai Cook Off, Master Cooking Challenge, Wine Blending, Mix it Up Cocktail Making, Food and Wine Pairing",
    "Interactive: Casino Royale, 60 Second Challenge, Battle of the Bands, Murder Mystery, Lights, Camera, Action!, The Apprentices, Minute to Win it",
    "Overnight Options: Overnight Winelands Amazing Race, Overnight Coastal Amazing Race",
  ],
  eventsTitle: "A Taste on Some of Our Events:",
  events: [
    "End of the Year Celebration Functions may include: Murder Mystery, Casino Royale, Bubbly at its Best",
    "Other events: Dinner and theatre, Day at the Race Track, Day and Evening Cruises, Private Parties at Festivals",
  ],
  outcomes:
    "There are many reasons why corporate events are an integral part of a company. It builds employee morale, market new products and services and they help build client relationships. There are limitless possibilities and types of events that organisations hold throughout the year.",
  tailorTitle: "Tailor Made Tours with a specific theme in mind",
  tailor: "We always have something special in mind!",
} as const;

export const educationalStory = {
  lede: "We will assist in organising educational trips for students of any age and at any academic stage.",
  intro:
    "Every child remembers their school trip, a time of learning and laughter, making friends, exploring exciting new experiences, as well as discovering a bit more about themselves and their classmates. They want epic, exciting days out, they want activities that allow imaginations to run riot just as freely as their restless bodies. The Outdoor Classroom is the place where:",
  classroom: [
    "Education is fun",
    "Concepts and theories spring to life",
    "Practical inquiry can be perfected",
    "Ideas and interests can be shared",
    "Learners can be inspired for a lifetime",
  ],
  offersTitle: "We will assist in organising",
  offers: [
    "Day Excursions that is curriculum based.",
    "Day Excursions, Accommodation and Transport for School Sport Groups.",
    "Camps: Adventure, Leadership, Choir, Sport, Mother & Daughter Camps etc.",
    "All Inclusive Tours: Top Ten Achiever Tours; Art Tours; Consumer Study Tours; Recreational Tours etc.",
    "Other events: Grade 7 Farewell; End-of-the-Year Functions; Top Achiever Excursions & Tours etc.",
  ],
  journeys:
    "Our educational tours: I Love Cape Town Tour, Overwhelming Overberg Tour, Bushveld Safari Adventure Tour, Wondrous West Coast Tour, Glorious Garden Route Tour and Drakensberg Adventure Tour.",
  outcomes:
    "We ensure successful, enjoyable stress-free and unique day outings, camps and tours within South Africa.",
  tailorTitle: "Every child remembers their school trips and tours!",
  tailor: "We will gladly assist on bringing your dream to life and will help carry it through to the last detail.",
} as const;

export const tourTailor =
  "We will gladly assist on bringing your dream to life and will help carry it through to the last detail.";

export const senses = ["People", "Food", "Nature", "Art", "Wine"] as const;

export const clients = [
  {
    name: "KPMG",
    logo: "/clients/kpmg.svg",
    colorLogo: "/clients/kpmg-color.svg",
  },
  {
    name: "STADIO",
    alt: "SBS",
    logo: "/clients/stadio.svg",
    colorLogo: "/clients/stadio-color.svg",
  },
  {
    name: "HORSCH",
    logo: "/clients/horsch.svg",
    colorLogo: "/clients/horsch-color.svg",
  },
  {
    name: "TERRATILL",
    logo: "/clients/terratill.png",
  },
  {
    name: "PSG",
    logo: "/clients/psg.svg",
    colorLogo: "/clients/psg-color.svg",
  },
] as const;

export const bookingGlance = [
  "Upon confirmation of a reservation, ZOOKINI TOURS will immediately request a 50% non-repayable deposit of the total price for a chosen tour/accommodation.",
  "The balance of the total price for reserved tour/accommodation/holiday needs to reach ZOOKINI TOURS six (6) weeks before the departure date of the tour/holiday, or date of the reserved services and / or performances.",
  "A cancellation of a reservation must be in writing.",
] as const;

export const homeQuote = {
  text: '"A travel adventure has no substitute. It is the ultimate experience, your one big opportunity for flair."',
  name: "Rosalind Massow",
} as const;
