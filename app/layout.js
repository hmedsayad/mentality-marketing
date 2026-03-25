import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mentality Marketing - Marketing Guides for Algerian Businesses',
  description: 'We are the marketing guides for Algerian businesses that want to grow. Professional marketing services to help your business succeed.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}