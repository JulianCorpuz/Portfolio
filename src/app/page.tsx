'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import About from './about/page'
import Projects from './projects/page'
import Contact from './contact/page'

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

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
    <div className="min-h-screen bg-dark-bg flex flex-col lg:flex-row lg:gap-8 lg:p-8 p-4 sm:p-6">
      {/* Sidebar */}
      <div className="lg:w-80 lg:flex-shrink-0 mb-6 lg:mb-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 pb-24 sm:pb-28 md:pb-24 lg:pb-0">
        {/* Content Area */}
        <div className="bg-dark-card border border-dark-border rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
          {renderContent()}
        </div>

        {/* Navigation */}
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      name: 'Core Technologies',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Framework', level: 90 },
        { name: 'Spring Batch', level: 88 },
        { name: 'PHP', level: 85 },
      ],
    },
    {
      name: 'AI & Innovation',
      skills: [
        { name: 'Generative AI', level: 85 },
        { name: 'AI Integration', level: 82 },
        { name: 'LLM Applications', level: 80 },
        { name: 'Machine Learning', level: 75 },
      ],
    },
    {
      name: 'Backend & Tools',
      skills: [
        { name: 'REST APIs', level: 92 },
        { name: 'Database Design', level: 88 },
        { name: 'Docker', level: 85 },
        { name: 'Git', level: 95 },
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
