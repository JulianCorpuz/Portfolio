'use client'

import { useState, useEffect, useRef } from 'react'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import About from './about/page'
import Projects from './projects/page'
import Contact from './contact/page'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      // Hide header while scrolling
      setIsHeaderVisible(false)

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Show header when scrolling stops (800ms after last scroll event)
      scrollTimeoutRef.current = setTimeout(() => {
        setIsHeaderVisible(true)
      }, 800)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />
      case 'skills':
        return <SkillsSection />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <About />
    }
  }

  return (
    <>
      {/* Sticky Header Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
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
            {renderContent()}
          </div>
        </div>
      </div>
    </>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      name: '⚙️ Core Programming Languages',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'PHP', level: 92 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      name: 'Frameworks',
      skills: [
        { name: 'Spring Boot', level: 92 },
        { name: 'Spring Batch', level: 90 },
        { name: 'Laravel PHP', level: 88 },
        { name: 'Cake PHP', level: 85 },
        { name: 'ReactJs', level: 87 },
        { name: 'NodeJs', level: 85 },
      ],
    },
    {
      name: 'Front-End Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 93 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Bootstrap', level: 90 },
      ],
    },
    {
      name: 'Back-End & Databases',
      skills: [
        { name: 'MySQL', level: 92 },
        { name: 'NoSQL', level: 88 },
        { name: 'GraphQL', level: 85 },
        { name: 'REST APIs', level: 94 },
      ],
    },
    {
      name: '🤖 AI & Automation',
      skills: [
        { name: 'Generative AI', level: 88 },
        { name: 'GitHub Copilot (Agentic AI)', level: 90 },
        { name: 'LLM Integration', level: 85 },
        { name: 'AI Automation', level: 83 },
      ],
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 90 },
        { name: 'Jenkins', level: 88 },
        { name: 'Git', level: 95 },
        { name: 'Maven', level: 87 },
        { name: 'Linux / Shell Script', level: 85 },
        { name: 'Ansible', level: 82 },
      ],
    },
    {
      name: 'Data & CMS',
      skills: [
        { name: 'Elasticsearch', level: 82 },
        { name: 'Hadoop', level: 80 },
        { name: 'Tableau', level: 85 },
        { name: 'Qlik Sense', level: 83 },
        { name: 'WordPress', level: 88 },
      ],
    },
    {
      name: 'Agile & Management',
      skills: [
        { name: 'Scrum', level: 92 },
        { name: 'Kanban', level: 90 },
        { name: 'Jira', level: 91 },
        { name: 'Agile Methodology', level: 90 },
      ],
    },
  ]

  // Helper components for different visualizations
  const StarRating = ({ level }: { level: number }) => {
    const filled = Math.round(level / 20)
    return (
      <div className="text-lg">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < filled ? 'text-accent-gold' : 'text-text-darker'}>{i < filled ? '★' : '☆'}</span>
        ))}
      </div>
    )
  }

  const LevelBadge = ({ level }: { level: number }) => {
    const label = level >= 85 ? 'Expert' : level >= 70 ? 'Advanced' : level >= 50 ? 'Intermediate' : 'Beginner'
    const cls = level >= 85
      ? 'bg-accent-gold/10 text-accent-gold border border-accent-gold/50'
      : level >= 70
      ? 'bg-dark-card text-text-light border border-dark-border'
      : level >= 50
      ? 'bg-dark-card/60 text-text-lighter border border-dark-border'
      : 'bg-dark-card/40 text-text-darker border border-dark-border'
    return <span className={`px-3 py-1 rounded-full text-xs ${cls}`}>{label}</span>
  }

  const Donut = ({ level, soft = false }: { level: number; soft?: boolean }) => {
    const [value, setValue] = useState(0)
    useEffect(() => {
      const target = level
      const step = Math.max(1, Math.floor(target / 40))
      const id = setInterval(() => {
        setValue((v) => {
          const next = v + step
          if (next >= target) {
            clearInterval(id)
            return target
          }
          return next
        })
      }, 20)
      return () => clearInterval(id)
    }, [level])

    const deg = value * 3.6
    return (
      <div
        className="relative w-24 h-24 rounded-full shadow-lg shadow-accent-gold/10"
        style={{ background: `conic-gradient(#ffc107 ${deg}deg, #2a2a3e ${deg}deg)` }}
      >
        <div className="absolute inset-0 rounded-full ring-2 ring-accent-gold/20" />
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <span className="text-accent-gold font-bold text-base sm:text-lg">
            {value}%
          </span>
        </div>
        {soft ? (
          <div
            className="absolute rounded-full"
            style={{
              inset: '14px',
              background: 'radial-gradient(circle, rgba(15,15,30,0.9) 65%, rgba(15,15,30,0.0) 100%)',
            }}
          />
        ) : (
          <div className="absolute inset-3 bg-dark-bg rounded-full" />
        )}
      </div>
    )
  }

  const Dots = ({ level }: { level: number }) => {
    const filled = Math.round(level / 20)
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < filled ? 'text-accent-gold' : 'text-text-darker'}>●</span>
        ))}
      </div>
    )
  }

  const CounterBar = ({ level }: { level: number }) => {
    const [value, setValue] = useState(0)
    useEffect(() => {
      const target = level
      const step = Math.max(1, Math.floor(target / 40))
      const id = setInterval(() => {
        setValue((v) => {
          const next = v + step
          if (next >= target) {
            clearInterval(id)
            return target
          }
          return next
        })
      }, 20)
      return () => clearInterval(id)
    }, [level])
    return (
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-accent-gold text-sm">{value}%</span>
        </div>
        <div className="w-full h-2 bg-dark-border rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-accent-gold to-accent-gold-light rounded-full transition-all duration-300" style={{ width: `${value}%` }} />
        </div>
      </div>
    )
  }

  const iconForSkill = (name: string) => {
    if (name.includes('Copilot')) return '🧠'
    if (name.includes('LLM')) return '🔗'
    if (name.toLowerCase().includes('automation')) return '⚙️'
    return '🤖'
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 animate-slide-up">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skillCategories.map((category, catIndex) => (
          <div key={category.name} className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: `${0.3 + catIndex * 0.08}s`}}>
            <h3 className="text-lg font-bold text-accent-gold mb-6 group-hover:text-accent-gold-light smooth-transition">{category.name}</h3>

            {/* Render different UI per category index */}
            {catIndex === 0 && (
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <Donut level={skill.level} soft />
                    <span className="mt-2 text-xs text-text-light">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}

            {catIndex === 1 && (
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-text-light font-medium">{skill.name}</span>
                    <StarRating level={skill.level} />
                  </div>
                ))}
              </div>
            )}

            {catIndex === 2 && (
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-text-light font-medium">{skill.name}</span>
                    <LevelBadge level={skill.level} />
                  </div>
                ))}
              </div>
            )}

            {catIndex === 3 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, idx) => {
                  const shapes = [
                    // Hexagon shield (top)
                    'polygon(50% 0%, 100% 35%, 90% 100%, 50% 90%, 10% 100%, 0% 35%)',
                    // Circle
                    'circle(50%)',
                    // Diamond
                    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    // Square with rounded
                    'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                    // Star
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  ];
                  const shape = shapes[idx % shapes.length];
                  return (
                    <div key={skill.name} className="flex flex-col items-center">
                      <div
                        className="flex flex-col items-center justify-center p-3 shadow-lg transition-all duration-300 hover:shadow-accent-gold/50 hover:scale-110"
                        style={{
                          width: '80px',
                          height: '90px',
                          background: `linear-gradient(135deg, rgba(255,193,7, ${0.3 + (skill.level / 100) * 0.5}), rgba(255,193,7, ${0.15 + (skill.level / 100) * 0.35}))`,
                          clipPath: shape,
                          border: '2px solid rgba(255,193,7, 0.6)',
                          boxShadow: `0 4px 12px rgba(255,193,7, ${0.2 + (skill.level / 100) * 0.3})`,
                        }}
                      >
                        <span className="text-accent-gold font-bold text-sm">{skill.level}%</span>
                      </div>
                      <span className="mt-2 text-xs text-text-light text-center max-w-[80px]">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {catIndex === 4 && (
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-text-light font-medium">
                      <span>{iconForSkill(skill.name)}</span>
                      {skill.name}
                    </span>
                    <Dots level={skill.level} />
                  </div>
                ))}
              </div>
            )}

            {catIndex === 5 && (
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="bg-dark-card border border-dark-border rounded-md p-3 flex items-center gap-3 hover:border-accent-gold/50 smooth-transition">
                    <div className="w-1 h-8 bg-accent-gold rounded" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-text-light text-sm font-medium">{skill.name}</span>
                        <span className="text-text-darker text-xs">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {catIndex === 6 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => {
                  const blockCount = 5;
                  const filledBlocks = Math.round((skill.level / 100) * blockCount);
                  return (
                    <div
                      key={skill.name}
                      className="bg-dark-card border border-dark-border rounded-xl p-4 flex flex-col items-center gap-3 hover:border-accent-gold/50 hover:shadow-lg hover:shadow-accent-gold/10 smooth-transition"
                    >
                      <span className="text-xs text-text-light text-center font-medium">{skill.name}</span>
                      <div className="flex flex-col gap-2 w-full items-center">
                        <div className="flex gap-1">
                          {Array.from({ length: blockCount }).map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-8 rounded-sm transition-all duration-300"
                              style={{
                                backgroundColor: i < filledBlocks ? '#ffc107' : 'rgba(42, 42, 62, 0.8)',
                                border: i < filledBlocks ? '1px solid #ffd54f' : '1px solid rgba(255, 193, 7, 0.3)',
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-accent-gold font-semibold text-xs">{skill.level}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {catIndex === 7 && (
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="bg-dark-card border border-dark-border rounded-md p-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-text-light text-sm font-medium">{skill.name}</span>
                    </div>
                    <CounterBar level={skill.level} />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
