import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://cookmytech.site'

    // All static routes in the application
    const routes = [
        '',
        '/about',
        '/business',
        '/careers',
        '/contact',
        '/donate',
        '/privacy-policy',
        '/products',
        '/refund-policy',
        '/shipping',
        '/terms-and-conditions',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}
