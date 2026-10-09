import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string().max(110),
    description: z.string().min(70).max(170),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'seguridad-y-estafas',
      'banca-digital-y-pagos',
      'herramientas-y-presupuesto',
      'ia-y-automatizacion',
    ]),
    // true = no se publica (solo se ve en local con `npm run dev`).
    draft: z.boolean().default(true),
    // Aviso de "contenido informativo, no es asesoramiento".
    disclaimer: z.boolean().default(true),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { articulos };
