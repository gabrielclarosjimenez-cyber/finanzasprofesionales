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
  role: 'Técnico en Sistemas Microinformáticos y Redes y estudiante de ASIR',
  shortBio:
    'Técnico en Sistemas Microinformáticos y Redes y estudiante de segundo curso de Administración de Sistemas Informáticos en Red (ASIR). Estudia informática desde 2021 y en Finanzas Profesionales explica, con lenguaje sencillo y fuentes oficiales, cómo proteger tu dinero en internet y usar la tecnología para organizar tus finanzas.',
  // Foto cuadrada de 400×400 en public/img/.
  photo: '/img/gabriel.jpg',
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
