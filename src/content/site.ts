export const site = {
  name: "Zookini Tours",
  tagline: "Celebrating Life!",
  logoTagline: "CELEBRATE LIFE!",
  url: "https://www.zookini.co.za",
  email: "anita@zookini.co.za",
  phoneDisplay: "+27 82 334 8854",
  phoneTel: "+27823348854",
  whatsappNumber: "27823348854",
  address: "10A Foxglove Street, Paarl",
  region: "Cape Winelands, South Africa",
  copyright: "© 2012 to 2026 Zookini Tours",
} as const;

/**
 * TODO confirm before the next wording pass:
 * - The live business listing gives 10A Foxglove Street, Paarl, 7690.
 *   An earlier line on this site said Boschenmeer Estate. Confirm the public address.
 * - No About page and no testimonials page exist on zookini.co.za.
 *   The Rosalind Massow line is on the contact page. Guest reviews are not published.
 * - Pickup is not published for any journey.
 * - No tour page publishes a day-by-day order. Outlines list the named experiences only.
 * - Garden Route package includes name accommodation in Cape Town and the Winelands,
 *   while the visits are Garden Route places. Stays are left to the quote.
 * - The bushveld safari is described as exclusive for young people. No age range is given.
 * - Unnamed awards (a vineyard, a protea farm, "finest wines") are left out until they can be named.
 * - SBS is only a name on the corporate page. No logo, and no way to tell which company it is.
 * - Client logos: KPMG wordmark from the KPMG file on Wikimedia (kpmg.com blue #003087).
 *   HORSCH wordmark from horsch.com (logo_footer.svg). PSG from the psg.co.za header SVG.
 *   TERRATILL wordmark cropped from the white logo on terratill.co.za. SBS stays as text.
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
  { href: "/tours", label: "Tours" },
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
  return `Hello, I would like to enquire about ${title}.`;
}

export const houseStory = {
  title: "A small house with a long table",
  paragraphs: [
    "Zookini is a small house in the Winelands. We hand-craft leisure journeys, team breaks, and school trips.",
    "Celebrating life, for us, is time given to people, food, nature, art, and wine. Those are the finer things that give a day its meaning. Every tour is built for the people in front of us, not pulled off a shelf.",
    "Plenty of travellers search for a long time, or ask friends, and still come home without a memory they want to keep. We bring the ideas together and make the plan.",
  ],
} as const;

export const hostStory = {
  title: "Our team answers every enquiry.",
  paragraphs: [
    "A note, a call, or a WhatsApp comes to the house in Paarl. Someone on our team replies in person. There is no call centre between you and the plan.",
  ],
} as const;

export const aboutStory = {
  title: "Every tour is made for the group in front of us.",
  paragraphs: [
    "The house is at 10A Foxglove Street, Paarl. Journeys run through Cape Town, the West Coast, the Overberg, the Garden Route, the bushveld near Kruger, and the Northern and Central Drakensberg.",
    "Anita founded Zookini. Our team plans the journeys and answers every enquiry.",
    "South Africa holds a great deal in a short distance: landscapes, wildlife, food and wine, and a culture with many strands. Our team is part of that rainbow nation, which is how we can open the country to a guest.",
  ],
  approachTitle: "How a tour is made",
  approach: [
    "Boutique tours, each one made for the group rather than repeated from a shelf.",
    "Hand-selected excursions, including the road less travelled.",
    "A personal approach, with time behind the scenes.",
    "A Zookini Tour Director travels with the group.",
  ],
} as const;

export const ways = [
  {
    id: "leisure",
    label: "Leisure",
    title: "Small-group journeys",
    points: [
      {
        label: "Who it is for",
        body: "Friends, families, and a guest travelling on their own.",
      },
      {
        label: "What is included",
        body: "A coach, the meals and entrances named on that tour, and a Tour Director with the group.",
      },
      {
        label: "How it works",
        body: "Many tours hold 12 to 16 guests. Some journeys can take a larger group. We confirm the number when you enquire.",
      },
    ],
    href: "/tours",
    cta: "Explore tours",
    photo: "wine",
  },
  {
    id: "corporate",
    label: "Corporate",
    title: "Take the team away",
    points: [
      {
        label: "Who it is for",
        body: "Teams and colleagues, for a day together or a stay of two to five days.",
      },
      {
        label: "What is included",
        body: "Travel, rooms, catering, and a day programme. Meetings can sit beside the enjoyable parts.",
      },
      {
        label: "How it works",
        body: "Tell us the dates and the size of the team. We hold the detail so the organising does not swallow a month.",
      },
    ],
    href: "/corporate",
    cta: "Plan a team trip",
    photo: "corporate",
  },
  {
    id: "schools",
    label: "Schools",
    title: "The outdoor classroom",
    points: [
      {
        label: "Who it is for",
        body: "Learners of any age, and the staff travelling with them.",
      },
      {
        label: "What is included",
        body: "Curriculum days, sport groups, camps, achiever tours, and farewells, planned as a whole.",
      },
      {
        label: "How it works",
        body: "Share the grade, the dates you hope for, and whether you need a day out or a camp. We carry the plan.",
      },
    ],
    href: "/educational",
    cta: "Plan a school trip",
    photo: "educational",
  },
] as const;

export const doors = [
  {
    href: "/tours",
    label: "Leisure",
    line: "For friends and families.",
  },
  {
    href: "/corporate",
    label: "Corporate",
    line: "For teams and colleagues.",
  },
  {
    href: "/educational",
    label: "Schools",
    line: "For learners and teachers.",
  },
] as const;

export const pillars = [
  {
    href: "/tours",
    title: "Leisure",
    promise: "Small-group journeys on the road less travelled.",
    image: "/images/wine.jpg",
    imageAlt: "Two women toasting with wine glasses",
  },
  {
    href: "/corporate",
    title: "Corporate",
    promise: "Breakaways, incentives, and team days, planned in full.",
    image: "/images/corporate.jpg",
    imageAlt: "A group sharing a terrace lunch",
  },
  {
    href: "/educational",
    title: "Educational",
    promise: "An outdoor classroom for camps, curriculum days, and farewells.",
    image: "/images/educational.jpg",
    imageAlt: "A child with binoculars in the fynbos",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Tell us the celebration",
    body: "Who is coming, and what you want the days to feel like.",
  },
  {
    number: "02",
    title: "We hand-craft the plan",
    body: "Rooms, tables, coaches, and the moment people remember.",
  },
  {
    number: "03",
    title: "You pack your bags",
    body: "A Tour Director travels with the group and keeps the days moving.",
  },
] as const;

export const corporateStory = {
  lede: "We plan the travel, the stay, and the day programme.",
  intro:
    "Organising a breakaway, a team day, or a company tour can swallow a month. Our team holds the detail, including a Tuesday in the Winelands.",
  offers: [
    "Corporate breakaways",
    "Executive retreats",
    "Incentive programmes",
    "Team building",
    "End-of-year celebrations",
    "Tailor-made tours with a theme",
  ],
  clients: "We plan for the size of team you have.",
  kinds: [
    {
      title: "Business retreats",
      body: "These last two to five days. We look after the site, the rooms, transport, catering, the meetings, and the activities. Business planning can sit on the agenda, with equal room for the enjoyable parts.",
    },
    {
      title: "Incentive programmes",
      body: "A host spends informal time with guests in a relaxed setting. The same shape works for colleagues or for clients.",
    },
    {
      title: "Themed tours",
      body: "An end-of-year celebration, a company visit with a theme, golf, a safari, or a gourmet tour.",
    },
  ],
  activities: [
    { title: "Active", items: ["Beach Olympics", "Beach, braai, and sunny sky", "Amazing Race"] },
    { title: "Creative", items: ["Art jamming", "Junk to Funk", "Perfume Power"] },
    {
      title: "Cooking",
      items: ["Braai cook-off", "Master cooking challenge", "Wine blending", "Cocktail making", "Food and wine pairing"],
    },
    {
      title: "Together",
      items: [
        "Casino Royale",
        "60 second challenge",
        "Battle of the Bands",
        "Murder mystery",
        "Lights, camera, action",
        "The Apprentices",
        "Minute to win it",
      ],
    },
    { title: "Overnight", items: ["Winelands Amazing Race", "Coastal Amazing Race"] },
  ],
  events: [
    "End-of-year functions can include a murder mystery, Casino Royale, or bubbly.",
    "Other days we host: dinner and theatre, a day at the race track, day and evening cruises, and private parties at festivals.",
  ],
  outcomes:
    "A team day is time together away from the office. It can steady morale, goodwill, and confidence. A company event can mark the year, introduce something new, or give clients a table.",
  tailor:
    "Tell us the dates, the size of the team, and whether you need a day or a stay. We shape the programme around the work and the celebration.",
} as const;

export const educationalStory = {
  lede: "A plan that teachers do not have to carry alone.",
  intro:
    "Every child remembers a school trip: learning and laughter, new friends, and a little more discovered about themselves and their classmates. They want days out that feel big, and activities where imagination can run.",
  classroom: [
    "Education can be fun",
    "Ideas show up more clearly outside the classroom",
    "Learners can practise looking, asking, and looking after one another",
    "Interests can be shared",
    "A day can stay with a learner for a long time",
  ],
  offers: [
    "Curriculum day excursions",
    "Sport groups: the day, the stay, and the transport",
    "Camps for adventure, leadership, choir, sport, or mother and daughter weekends",
    "All-inclusive tours for achievers, art, consumer studies, and recreation",
    "Grade farewells, end-of-year functions, and top achiever excursions",
  ],
  journeys:
    "Schools often ask about Cape Town, the Overberg, the West Coast, the Garden Route, the bushveld, and the Drakensberg. We shape those outlines around the grade.",
  outcomes:
    "We help organise trips for learners of any age and any academic stage. The aim is a day or a camp that is enjoyable and held together.",
  tailor: "Share the grade, the dates you hope for, and whether you need a day out or a camp.",
} as const;

export const tourTailor =
  "Yes. These journeys are written as tailored tours. Tell us who is coming and what you want the days to feel like. We shape the final plan around your group.";

export const senses = ["People", "Food", "Nature", "Art", "Wine"] as const;

export const clients = [
  {
    name: "KPMG",
    logo: "/clients/kpmg.svg",
    colorLogo: "/clients/kpmg-color.svg",
  },
  {
    name: "SBS",
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
  "A quote is not a booking until the deposit is received.",
  "The balance is due six weeks before departure.",
  "Cancellation terms and the full conditions live on one page.",
] as const;
