// Configuración principal de Astro.
// https://docs.astro.build/es/reference/configuration-reference/
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';

// Categorías con al menos un artículo publicado (las vacías no van al sitemap).
const dir = './src/content/articulos';
const usedCategories = new Set(
  readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readFileSync(`${dir}/${f}`, 'utf8'))
    .filter((t) => /^draft:\s*false/m.test(t))
    .map((t) => t.match(/^category:\s*(\S+)/m)?.[1]),
);

export default defineConfig({
  site: 'https://finanzasprofesionales.es',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => {
        const m = page.match(/\/categoria\/([^/]+)\//);
        return !m || usedCategories.has(m[1]);
      },
    }),
  ],
  // Redirecciones de URL antiguas de WordPress que siguen teniendo sentido.
  redirects: {
    '/sobre-nosotros': '/sobre-mi/',
    '/politica-de-privacidad': '/politica-privacidad/',
    '/terminos-y-condiciones': '/aviso-legal/',
    '/ciberseguridad-y-custodia-digital': '/categoria/seguridad-y-estafas/',
    '/inteligencia-artificial-financiera': '/categoria/ia-y-automatizacion/',
  },
});
