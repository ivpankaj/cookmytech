import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/admin/'], // Add any private paths here if needed
        },
        sitemap: 'https://cookmytech.site/sitemap.xml',
    }
}
