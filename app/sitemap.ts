import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://xn--estudiojurdicogranillopueyrredn-73c2t.com/";
const additionalSiteUrls = [
  "https://www.xn--estudiojurdicogranillopueyrredn-73c2t.com/",
  "https://estudiojurídicogranillopueyrredón.com/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const allUrls = [siteUrl, ...additionalSiteUrls];

  return allUrls.map((baseUrl) => ({
    url: new URL("/", baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  }));
}
