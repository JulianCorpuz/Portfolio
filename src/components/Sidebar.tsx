'use client'

import { useState } from 'react'
import { Linkedin, Github, Mail } from 'lucide-react'

interface SidebarProps {
  isOpen?: boolean
}

export default function Sidebar({ isOpen = false }: SidebarProps) {
  const [expanded, setExpanded] = useState(isOpen)

  return (
    <aside className={`
      relative lg:sticky lg:top-8
      w-full lg:w-80
      bg-dark-card border border-dark-border rounded-xl sm:rounded-2xl lg:rounded-3xl
      p-4 sm:p-6 md:p-8
      max-h-fit overflow-visible
      transition-all duration-300
      z-0
      animate-fade-in
      hover:border-accent-gold/50 smooth-transition
    `}>
      {/* Profile Section */}
      <div className="flex flex-col items-center lg:items-start gap-3 sm:gap-4 mb-6 animate-slide-up">
        <div className="relative w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-gold to-accent-gold-dark rounded-2xl blur-xl opacity-30 animate-pulse-gold"></div>
          <div className="relative w-full h-full rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-dark flex items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text animate-float">
              JC
            </div>
          </div>
        </div>
        
        <div className="text-center lg:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-text-light animate-slide-down break-words">
            Julius Ian Corpuz
          </h1>
          <p className="text-accent-gold text-xs sm:text-sm md:text-base font-semibold mt-1 animate-slide-down" style={{animationDelay: '0.1s'}}>
            Senior Developer
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent my-6"></div>

      <div id="sidebar-details" className={`${expanded ? 'block' : 'hidden'} md:block`}>
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3 md:flex-col md:gap-4">
          <div className="flex items-start gap-3 group cursor-pointer hover:scale-105 smooth-transition animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 border border-accent-gold/30 flex items-center justify-center flex-shrink-0 text-accent-gold group-hover:border-accent-gold smooth-transition">
              ✉
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase text-text-darker font-bold tracking-wider">Email</p>
              <a href="mailto:iancorpuz0118@gmail.com" className="text-sm text-accent-gold hover:text-accent-gold-light transition truncate group-hover:underline">
                iancorpuz0118@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 group cursor-pointer hover:scale-105 smooth-transition animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 border border-accent-gold/30 flex items-center justify-center flex-shrink-0 text-accent-gold group-hover:border-accent-gold smooth-transition">
              📍
            </div>
            <div>
              <p className="text-xs uppercase text-text-darker font-bold tracking-wider">Location</p>
              <p className="text-sm text-text-light">Philippines</p>
            </div>
          </div>

          <div className="flex items-start gap-3 group cursor-pointer hover:scale-105 smooth-transition animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 border border-accent-gold/30 flex items-center justify-center flex-shrink-0 text-accent-gold group-hover:border-accent-gold smooth-transition">
              🚀
            </div>
            <div>
              <p className="text-xs uppercase text-text-darker font-bold tracking-wider">Core Stack</p>
              <p className="text-sm text-text-light">Java • Spring • SQL</p>
            </div>
          </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-gold to-transparent my-6"></div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start animate-slide-up" style={{animationDelay: '0.5s'}}>
          <a href="https://linkedin.com/in/julius-ian-corpuz-8bb025165" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-lg bg-dark-border border border-dark-border hover:border-accent-gold flex items-center justify-center smooth-transition text-accent-gold hover:bg-gradient-to-br hover:from-accent-gold/20 hover:to-accent-gold/5 hover:scale-110 active:scale-95">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="w-10 h-10 rounded-lg bg-dark-border border border-dark-border hover:border-accent-gold flex items-center justify-center smooth-transition text-accent-gold hover:bg-gradient-to-br hover:from-accent-gold/20 hover:to-accent-gold/5 hover:scale-110 active:scale-95">
            <Github size={20} />
          </a>
          <a href="mailto:iancorpuz0118@gmail.com" 
             className="w-10 h-10 rounded-lg bg-dark-border border border-dark-border hover:border-accent-gold flex items-center justify-center smooth-transition text-accent-gold hover:bg-gradient-to-br hover:from-accent-gold/20 hover:to-accent-gold/5 hover:scale-110 active:scale-95">
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Toggle button for mobile */}
      <button 
        onClick={() => setExpanded(!expanded)}
        className="md:hidden w-full mt-6 py-3 px-4 bg-accent-gold text-dark-bg font-semibold rounded-lg hover:bg-accent-gold-light transition smooth-transition active:scale-95 hover:shadow-lg hover:shadow-accent-gold/30 btn-light"
        aria-expanded={expanded}
        aria-controls="sidebar-details"
      >
        {expanded ? 'Close' : 'Show More'}
      </button>
    </aside>
  )
}
