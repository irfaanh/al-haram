import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MOMENTOR',
        short_name: 'MOMENTOR',
        description: "India's first Education Journalism platform and Future-Skills Training Academy.",
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#BE5103',
        icons: [
            {
                src: '/images/logo.png',
                sizes: 'any',
                type: 'image/png',
            },
            {
                src: '/images/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
