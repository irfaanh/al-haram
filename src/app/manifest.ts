import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'AL HARAM',
        short_name: 'AL HARAM',
        description: "AL HARAM - Where Guidance Meets the Future",
        start_url: '/',
        display: 'standalone',
        background_color: '#ffff',
        theme_color: '#33744D',
        icons: [
            {
                src: '/images/applogo.png?v=2',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/images/applogo.png?v=2',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
