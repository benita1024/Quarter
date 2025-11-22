import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Quarter - Premium Quarter Zips',
  description: 'Discover and compare the finest quarter-zip sweaters from premium retailers',
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