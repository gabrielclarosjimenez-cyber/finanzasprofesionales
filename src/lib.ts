import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articulos'>;

/** ¿Se puede publicar? No es borrador y su fecha de publicación ya ha llegado. */
export const isPublished = (data: Article['data'], now = new Date()) => !data.draft && data.pubDate <= now;

/**
 * Artículos publicados, del más reciente al más antiguo.
 * Los que tienen fecha futura se publican solos ese día (la web se reconstruye cada mañana).
 * En local (`npm run dev`) se ven todos, también borradores y programados.
 */
export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articulos', ({ data }) => import.meta.env.DEV || isPublished(data));
  return all.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' });

export const readingTime = (text: string) => Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
