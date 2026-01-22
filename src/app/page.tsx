'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to About page on initial load
    router.push('/about')
  }, [router])

  return (
    <div className="animate-fade-in text-center py-20">
      <div className="animate-pulse">
        <h1 className="text-4xl font-bold text-accent-gold mb-4">Loading...</h1>
        <p className="text-text-lighter">Redirecting to portfolio...</p>
      </div>
    </div>
  )
}
