import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sourabh Verma | Full Stack Developer',
  description: 'Creative full-stack developer building immersive digital experiences with 3D web technologies, React, and modern design.',
  generator: 'v0.app',
  metadataBase: new URL('https://sourabh.dev'),
  openGraph: {
    title: 'Sourabh Verma | Full Stack Developer',
    description: 'Creative full-stack developer with expertise in React, Next.js, and 3D web technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sourabh Verma | Full Stack Developer',
    description: 'Creative full-stack developer with expertise in React, Next.js, and 3D web technologies',
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon.ico', rel: 'shortcut icon' },
      { url: '/favicon_io/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon_io/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geist.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
