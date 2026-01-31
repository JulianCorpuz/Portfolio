'use client'

import { useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

const THEME_KEY = 'theme'

function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('light', theme === 'light')
  root.dataset.theme = theme
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = (localStorage.getItem(THEME_KEY) as Theme | null) ?? getSystemTheme()
    setTheme(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    applyTheme(theme)
    localStorage.setItem(THEME_KEY, theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={theme === 'light'}
      className="flex items-center justify-center w-10 h-10 rounded-lg border border-dark-border bg-dark-card text-accent-gold hover:border-accent-gold/70 hover:bg-dark-border smooth-transition"
    >
      <span className="text-lg">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  )
}
