import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Julius Ian Corpuz - Portfolio',
  description: 'Full Stack Engineering Sr Developer at Accenture',
  viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-text-light">
        {/* Sticky Header Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navigation />
        </div>

        {/* Main Layout */}
        <div className="min-h-screen bg-dark-bg flex flex-col lg:flex-row lg:gap-8 lg:p-8 p-4 sm:p-6 pt-24 sm:pt-32 md:pt-28 lg:pt-28">
          {/* Sidebar */}
          <div className="lg:w-80 lg:flex-shrink-0 mb-6 lg:mb-0">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 pb-8 sm:pb-12 md:pb-8 lg:pb-0">
            {/* Content Area */}
            <div className="bg-dark-card border border-dark-border rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
