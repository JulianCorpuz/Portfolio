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
    <div className="min-h-screen bg-dark-bg flex flex-col md:flex-row md:gap-8 md:p-8">
      {/* Sidebar */}
      <div className="md:w-80 md:flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 pb-24 md:pb-0">
        {/* Content Area */}
        <div className="bg-dark-card border border-dark-border rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6">
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
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="grid md:grid-cols-1 gap-8">
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
