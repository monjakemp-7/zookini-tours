/**
 * Homepage social row. Swap a frame by editing this list.
 * `objectPosition` keeps faces inside the square crop.
 */
export type SocialSource = "instagram" | "facebook";

export type SocialPost = {
  id: string;
  src: string;
  source: SocialSource;
  permalink: string;
  date: string;
  alt: string;
  objectPosition: string;
  photographer?: {
    name: string;
    href: string;
  };
};

export const weddingPhotoCredit = {
  label: "Wedding photos by @photos_byfran",
  href: "https://www.instagram.com/photos_byfran/",
} as const;

const fran = {
  name: "@photos_byfran",
  href: weddingPhotoCredit.href,
} as const;

export const socialPosts: readonly SocialPost[] = [
  {
    id: "post-01",
    src: "/images/social/post-01.jpg",
    source: "facebook",
    permalink: "https://www.facebook.com/photo/?fbid=1458230812993811",
    date: "2026-08-04",
    alt: "The Noordheuwel school choir gathered for a group photo in front of Cape Town City Hall on a sunny day",
    objectPosition: "center center",
  },
  {
    id: "post-03",
    src: "/images/social/post-03.jpg",
    source: "instagram",
    permalink: "https://www.instagram.com/p/DTk3MQmDNV_/",
    date: "2026-01-16",
    alt: "A smiling bride and groom embracing in a green garden on their wedding day",
    objectPosition: "center 35%",
    photographer: fran,
  },
  {
    id: "post-02",
    src: "/images/social/post-02.jpg",
    source: "facebook",
    permalink: "https://www.facebook.com/photo/?fbid=1505943678222524",
    date: "2026-09-27",
    alt: "A school group sitting on the floor watching the kelp forest tank at an aquarium",
    objectPosition: "center center",
  },
  {
    id: "post-05",
    src: "/images/social/post-05.jpg",
    source: "instagram",
    permalink: "https://www.instagram.com/p/DboKLxKjHfA/",
    date: "2026-08-04",
    alt: "The entrance to The Good Neighbour Cafe and Bakery at Neighbourgood Newlands in Cape Town",
    objectPosition: "center 28%",
  },
  {
    id: "post-04",
    src: "/images/social/post-04.jpg",
    source: "facebook",
    permalink: "https://www.facebook.com/photo/?fbid=1505943821555843",
    date: "2026-09-27",
    alt: "A tour group standing beside flowering coral trees in a mountainside botanical garden",
    objectPosition: "center center",
  },
  {
    id: "post-08",
    src: "/images/social/post-08.jpg",
    source: "instagram",
    permalink: "https://www.instagram.com/p/DTk3MQmDNV_/",
    date: "2026-01-16",
    alt: "A couple holding hands across a flowering garden with a mountain in the background",
    objectPosition: "center 25%",
    photographer: fran,
  },
];

export function socialSourceLabel(source: SocialSource) {
  return source === "facebook" ? "Facebook" : "Instagram";
}
