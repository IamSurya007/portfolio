import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Surya Pillutla - Full-Stack Mobile & Front-End Developer',
    short_name: 'Surya P',
    description: 'Full-Stack Mobile & Front-End Developer specializing in Flutter, Angular, Next.js, and TypeScript',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#171717',
    icons: [
      {
        src: '/api/icon/192',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/api/icon/512',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
