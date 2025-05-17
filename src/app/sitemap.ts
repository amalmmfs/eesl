import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://eesl.org.in/",
      lastModified: new Date("2024-04-15"), // Use the actual last update date for each page
      priority: 0.8,
    },
    {
      url: "https://eesl.org.in/publications",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://eesl.org.in/facilities",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://eesl.org.in/research",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://eesl.org.in/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://eesl.org.in/team",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://eesl.org.in/careers",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://eesl.org.in/gallery",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
