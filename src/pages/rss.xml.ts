import rss from '@astrojs/rss';
import { getArticles } from '../lib';
import { SITE } from '../config';

export async function GET() {
  const articles = (await getArticles()).filter((a) => !a.data.draft);
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: SITE.url,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      link: `/${a.id}/`,
    })),
  });
}
