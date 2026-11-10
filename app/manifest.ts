import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Surya Pillutla — Full-Stack Engineer',
    short_name: 'Surya P',
    description: 'Full-stack engineer building reliable mobile, web and cloud systems with Flutter, React/Angular, Node.js and AWS.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060607',
    theme_color: '#060607',
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
        purpose: 'any',
      },
      {
        src: '/api/icon/512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
