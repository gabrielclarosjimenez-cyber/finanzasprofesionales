export const CATEGORIES = [
  {
    slug: 'seguridad-y-estafas',
    name: 'Seguridad y estafas',
    description:
      'Cómo reconocer fraudes bancarios, phishing, smishing y estafas de compraventa, y qué hacer paso a paso si te ocurren.',
  },
  {
    slug: 'banca-digital-y-pagos',
    name: 'Banca digital y pagos',
    description:
      'Usar con seguridad la banca online, el móvil, las tarjetas y Bizum: configuraciones recomendadas y riesgos reales.',
  },
  {
    slug: 'herramientas-y-presupuesto',
    name: 'Herramientas y presupuesto',
    description:
      'Apps, plantillas y métodos probados para controlar gastos, organizar documentos y preparar tus trámites digitales.',
  },
  {
    slug: 'ia-y-automatizacion',
    name: 'IA y automatización',
    description:
      'Cómo aprovechar la inteligencia artificial y la automatización para tus finanzas sin poner en riesgo tus datos.',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug)!;
