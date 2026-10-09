# finanzasprofesionales.es

Web de **Finanzas Profesionales**: tecnología y seguridad para las finanzas personales.
Está hecha con [Astro](https://astro.build) (genera HTML estático) y se publica gratis en **GitHub Pages**.
Cada vez que se sube un cambio a la rama `main`, GitHub construye la web y la publica sola (`.github/workflows/deploy.yml`).

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Nombre, correo, bio, ID de AdSense | `src/config.ts` |
| Categorías | `src/data/categories.ts` |
| Artículos (uno por archivo `.md`) | `src/content/articulos/` |
| Páginas legales, Sobre mí, Contacto | `src/pages/*.astro` |
| Colores y estilos | `src/styles/global.css` |
| Imágenes | `public/img/` (se enlazan como `/img/nombre.jpg`) |

## Publicar un artículo

1. Crea un archivo en `src/content/articulos/`, por ejemplo `estafas-bizum.md`. El nombre del archivo es la URL: `finanzasprofesionales.es/estafas-bizum/`.
2. Copia la cabecera de otro artículo y cambia `title`, `description` (70–170 caracteres), `pubDate`, `category` y `sources`.
3. Mientras lo escribes, deja `draft: true` (no se publica). Cuando esté terminado, con tu experiencia y tus capturas, cambia a `draft: false`.
4. Si actualizas un artículo antiguo, añade `updatedDate: AAAA-MM-DD`.
5. Las notas `<!-- PENDIENTE ... -->` no se ven en la web: sustitúyelas por tu texto.

## Datos legales privados

El NIF y el domicilio **no están en el código** (el repositorio es público). Se guardan en
GitHub > Settings > Secrets and variables > Actions > pestaña **Variables**:
- `TITULAR_NIF`
- `TITULAR_DOMICILIO`

## AdSense

Cuando tengas tu ID de editor, ponlo en `src/config.ts` (`client: 'ca-pub-...'`). La web añade
el código de AdSense, el mensaje de consentimiento de Google, el enlace «Configurar cookies» y genera `/ads.txt`.

## Probar en tu ordenador (opcional)

Necesitas Node.js 22 o superior.

```bash
npm install
npm run dev     # abre http://localhost:4321 (muestra también los borradores)
npm run build   # genera la web final en dist/
```
