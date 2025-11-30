import { MetadataRoute } from "next";
import postsData from "@/data/blog/posts.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "jumaa-portfolio.vercel.app"; // Update this with your actual Vercel URL

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    },
  ];

  // Blog posts
  const blogPosts = postsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
