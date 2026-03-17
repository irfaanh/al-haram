import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Al Haram',
        short_name: 'Al Haram',
        description: "Al Haram - Where Guidance Meets the Future",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffff',
        theme_color: '#33744D',
        icons: [
            {
                src: '/images/og-image.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/images/og-image.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
