import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Dashidar — Handcrafted Wood Tables, Brooklyn NY',
  description: 'Dashidar makes custom solid wood tables by hand in Brooklyn, New York. Architectural, modular, made to order.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
