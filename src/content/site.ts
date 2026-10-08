export const site = {
  name: "Zookini Tours",
  tagline: "Celebrating Life!",
  logoTagline: "CELEBRATE LIFE!",
  url: "https://www.zookini.co.za",
  email: "anita@zookini.co.za",
  phoneDisplay: "+27 82 334 8854",
  phoneTel: "+27823348854",
  whatsappNumber: "27823348854",
  address: "Boschenmeer Estate, Paarl",
  region: "Cape Winelands, South Africa",
  copyright: "© 2012–2026 Zookini Tours",
} as const;

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

export const defaultWhatsAppMessage =
  "Hello Anita, I would like to enquire about a Zookini tour.";

export function tourWhatsAppMessage(title: string) {
  return `Hello Anita, I would like to enquire about ${title}.`;
}

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
    body: "We research, negotiate, and organise the stays, tables, and coaches.",
  },
  {
    number: "03",
    title: "You pack your bags",
    body: "A Tour Director travels with the group and keeps the details moving.",
  },
] as const;

export const senses = ["People", "Food", "Nature", "Art", "Wine"] as const;

export const clients = ["KPMG", "SBS", "Horsch", "Terratill", "PSG"] as const;

export const bookingGlance = [
  "A quote is not a booking until the deposit is received.",
  "The balance is due six weeks before departure.",
  "Cancellation terms and the full conditions live on one page.",
] as const;
