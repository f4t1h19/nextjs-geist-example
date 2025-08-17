import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mobilya Store - Modern Mobilya ve Ev Dekorasyonu',
  description: 'Kaliteli ve modern mobilyalarla evinizi güzelleştirin. Geniş ürün yelpazesi, uygun fiyatlar ve hızlı teslimat.',
  keywords: 'mobilya, ev dekorasyonu, modern mobilya, koltuk, masa, yatak odası, mutfak',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
