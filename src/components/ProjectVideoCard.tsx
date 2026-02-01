'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Maximize2 } from 'lucide-react'

interface ProjectVideoCardProps {
  screenshot: string
  title: string
}

export default function ProjectVideoCard({ screenshot, title }: ProjectVideoCardProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleFullscreen = async () => {
    if (!containerRef.current) return

    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (error) {
      console.error('Fullscreen error:', error)
    }
  }

  return (
    <div 
      ref={containerRef}
      className="relative h-48 sm:h-64 md:h-96 border-b md:border-b-0 md:border-r border-dark-border overflow-hidden bg-dark-card group-hover:border-accent-gold/50 smooth-transition"
    >
      {screenshot && screenshot.endsWith('.mp4') ? (
        <>
          <video
            ref={videoRef}
            src={screenshot}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 smooth-transition duration-700"
          />
          {/* Fullscreen Button */}
          <button
            onClick={handleFullscreen}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-dark-bg/80 hover:bg-dark-bg text-accent-gold p-2 sm:p-2.5 rounded-lg transition smooth-transition hover:text-accent-gold-light hover:scale-110 z-10 backdrop-blur-sm border border-accent-gold/30 hover:border-accent-gold/60"
            aria-label="Toggle fullscreen"
            title="Fullscreen"
          >
            <Maximize2 size={18} className="sm:w-5 sm:h-5" />
          </button>
        </>
      ) : (
        <Image 
          src={screenshot} 
          alt={title}
          fill
          className="object-contain group-hover:scale-105 smooth-transition duration-700"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-gold/10 opacity-0 group-hover:opacity-100 smooth-transition duration-700"></div>
    </div>
  )
}
