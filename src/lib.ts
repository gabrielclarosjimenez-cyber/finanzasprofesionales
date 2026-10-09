import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articulos'>;

/** Artículos publicados, del más reciente al más antiguo. En local también muestra borradores. */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articulos', ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' });

export const readingTime = (text: string) => Math.max(1, Math.round(text.split(/\s+/).length / 220));
