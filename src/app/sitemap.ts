import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/research`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/publications`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/facilities`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/team`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/careers`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
