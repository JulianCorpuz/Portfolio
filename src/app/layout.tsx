import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Julius Ian Corpuz - Portfolio',
  description: 'Full Stack Engineering Sr Developer at Accenture',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-text-light">
        {children}
      </body>
    </html>
  )
}
