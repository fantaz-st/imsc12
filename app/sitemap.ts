import type { MetadataRoute } from "next";

const siteUrl = "https://imsc.pfst.hr";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/authors", "/registration", "/welcome"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
