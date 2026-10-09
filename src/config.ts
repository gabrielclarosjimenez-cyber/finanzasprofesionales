// Datos generales de la web. Cambia aquí y se actualiza en todas las páginas.

export const SITE = {
  name: 'Finanzas Profesionales',
  tagline: 'Tecnología y seguridad para tus finanzas personales',
  description:
    'Guías prácticas para proteger tu banca online, evitar estafas y usar la tecnología para organizar tu dinero, escritas por un técnico en sistemas y redes.',
  url: 'https://finanzasprofesionales.es',
  email: 'gabriel@finanzasprofesionales.es',
  lang: 'es',
  locale: 'es_ES',
};

export const AUTHOR = {
  name: 'Gabriel Claros Jiménez',
  role: 'Técnico en sistemas microinformáticos y redes',
  shortBio:
    'Técnico en sistemas microinformáticos y redes. En Finanzas Profesionales explica, con pruebas reales, cómo proteger tu dinero en internet y aprovechar la tecnología para organizar tus finanzas.',
  // Pon tu foto en public/img/gabriel.jpg (cuadrada, mínimo 400×400) y cambia a '/img/gabriel.jpg'.
  photo: '',
  linkedin: '',
};

// Datos legales (LSSI art. 10). NO se escriben aquí para que no queden en el
// historial público del repositorio: se leen de las "Variables" de GitHub
// Actions (TITULAR_NIF y TITULAR_DOMICILIO) al publicar la web.
export const LEGAL = {
  titular: AUTHOR.name,
  nif: import.meta.env.PUBLIC_TITULAR_NIF || '[NIF pendiente]',
  domicilio: import.meta.env.PUBLIC_TITULAR_DOMICILIO || '[Domicilio pendiente]',
  updated: '9 de octubre de 2026',
};

// Google AdSense. Déjalo vacío hasta tener tu ID de editor (ca-pub-...).
// Cuando lo pongas, la web carga el código de AdSense, el banner de
// consentimiento de Google y genera /ads.txt automáticamente.
export const ADSENSE = {
  client: '', // Ejemplo: 'ca-pub-1234567890123456'
};
