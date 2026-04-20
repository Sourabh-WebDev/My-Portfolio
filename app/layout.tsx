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
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
