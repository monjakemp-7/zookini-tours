import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { tours } from "@/content/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/tours", "/corporate", "/educational", "/about", "/enquire", "/contact", "/policies", "/credits"];
  return [
    ...paths.map((path) => ({
      url: `${site.url}${path || "/"}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...tours.map((tour) => ({
      url: `${site.url}/tours/${tour.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
