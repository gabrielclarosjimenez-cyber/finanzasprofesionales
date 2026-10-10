// Plugin de Markdown: si un artículo enlaza a otro que todavía no se ha publicado
// (borrador o con fecha futura), muestra solo el texto, sin enlace roto.
// El día que se publica el otro artículo, la reconstrucción diaria activa el enlace.
import { readdirSync, readFileSync } from 'node:fs';

export function unpublishedSlugs(dir = './src/content/articulos', now = new Date()) {
  const out = new Set();
  for (const f of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const t = readFileSync(`${dir}/${f}`, 'utf8');
    const date = new Date(t.match(/^pubDate:\s*(\S+)/m)?.[1]);
    if (!/^draft:\s*false/m.test(t) || date > now) out.add(f.replace(/\.md$/, ''));
  }
  return out;
}

export default function remarkHideUnpublishedLinks({ hidden = new Set() } = {}) {
  const walk = (node) => {
    if (!node.children) return;
    node.children = node.children.flatMap((child) => {
      const m = child.type === 'link' && child.url.match(/^\/([a-z0-9-]+)\/$/);
      if (m && hidden.has(m[1])) return child.children;
      walk(child);
      return [child];
    });
  };
  return (tree) => walk(tree);
}
