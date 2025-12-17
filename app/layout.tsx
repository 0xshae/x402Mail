import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'x402Mail - Privacy-Focused Email',
  description: 'Privacy-focused email service with anti-spam protection using the x402 protocol',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

