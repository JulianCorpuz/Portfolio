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

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 animate-slide-up">Skills</h2>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {skillCategories.map((category) => (
          <div key={category.name}>
            <h3 className="text-xl font-bold text-accent-gold mb-6">{category.name}</h3>
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-text-light font-medium">{skill.name}</span>
                    <span className="text-accent-gold text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-dark-border rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-gold to-accent-gold-light rounded-full transition-all duration-300"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
