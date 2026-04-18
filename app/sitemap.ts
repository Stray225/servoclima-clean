import type { MetadataRoute } from 'next'

const SITE_URL = 'https://serviclim.ar'

const SECTORES = [
  'industria',
  'corporativo',
  'logistica',
  'retail',
  'hospitality',
  'proyectos-especiales',
  'ambiental',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/premium`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...SECTORES.map((slug) => ({
      url: `${SITE_URL}/sectores/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
