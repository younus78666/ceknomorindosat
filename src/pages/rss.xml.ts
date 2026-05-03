import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "~/data/site.config";
import { listPosts } from "~/data/internal-links";

export async function GET(context: APIContext) {
  const posts = listPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.title,
      description: p.description,
      link: `/${p.slug}`,
      pubDate: p.publishedAt ? new Date(p.publishedAt) : new Date(),
    })),
    customData: `<language>${SITE.locale}</language>`,
  });
}
