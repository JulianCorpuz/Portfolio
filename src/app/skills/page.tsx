'use client'

export default function Skills() {
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
      name: '🔧 Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', level: 92 },
        { name: 'Laravel PHP', level: 88 },
        { name: 'ReactJs', level: 87 },
        { name: 'Next.js', level: 85 },
        { name: 'Express.js', level: 83 },
      ],
    },
    {
      name: '🗄️ Databases',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 87 },
        { name: 'Oracle', level: 85 },
        { name: 'Redis', level: 82 },
      ],
    },
    {
      name: '☁️ DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 88 },
        { name: 'Azure', level: 85 },
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 83 },
        { name: 'Jenkins', level: 87 },
      ],
    },
    {
      name: '🛠️ Tools & Technologies',
      skills: [
        { name: 'Git', level: 93 },
        { name: 'VS Code', level: 95 },
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'Postman', level: 88 },
      ],
    },
    {
      name: '🌐 Protocols & APIs',
      skills: [
        { name: 'REST API', level: 92 },
        { name: 'GraphQL', level: 85 },
        { name: 'WebSocket', level: 83 },
        { name: 'gRPC', level: 80 },
        { name: 'SOAP', level: 87 },
      ],
    },
    {
      name: '📊 Data & CMS',
      skills: [
        { name: 'Elasticsearch', level: 82 },
        { name: 'Hadoop', level: 80 },
        { name: 'Tableau', level: 85 },
        { name: 'Qlik Sense', level: 83 },
        { name: 'WordPress', level: 88 },
      ],
    },
    {
      name: '🎯 Agile & Management',
      skills: [
        { name: 'Scrum', level: 90 },
        { name: 'Kanban', level: 88 },
        { name: 'JIRA', level: 92 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Code Review', level: 90 },
      ],
    },
  ]

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 animate-slide-up">
        <span className="bg-gradient-to-r from-accent-gold via-accent-gold-light to-accent-gold bg-clip-text text-transparent animate-pulse">
          Skills & Expertise
        </span>
      </h2>
      <p className="text-text-lighter mb-8 animate-slide-up text-center" style={{animationDelay: '0.1s'}}>
        Explore my technical proficiencies through interactive visualizations
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skillCategories.map((category, catIndex) => (
          <div 
            key={category.name} 
            className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" 
            style={{animationDelay: `${0.3 + catIndex * 0.08}s`}}
          >
            <h3 className="text-lg font-bold text-accent-gold mb-6 group-hover:text-accent-gold-light smooth-transition">{category.name}</h3>

            {/* Donut Charts - Programming Languages */}
            {catIndex === 0 && (
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="flex flex-col items-center animate-fade-in" style={{animationDelay: `${idx * 0.15}s`}}>
                    <Donut level={skill.level} />
                    <span className="mt-2 text-xs text-text-light">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Star Ratings - Frameworks */}
            {catIndex === 1 && (
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="flex items-center justify-between animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                    <span className="text-text-light font-medium">{skill.name}</span>
                    <StarRating level={skill.level} />
                  </div>
                ))}
              </div>
            )}

            {/* Level Badges - Databases */}
            {catIndex === 2 && (
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="flex items-center justify-between animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                    <span className="text-text-light font-medium">{skill.name}</span>
                    <LevelBadge level={skill.level} />
                  </div>
                ))}
              </div>
            )}

            {/* Geometric Shapes - DevOps */}
            {catIndex === 3 && (
              <div className="flex flex-wrap gap-4 justify-center">
                {category.skills.map((skill, idx) => {
                  const shapes = [
                    'polygon(50% 0%, 100% 35%, 90% 100%, 50% 90%, 10% 100%, 0% 35%)',
                    'circle(50%)',
                    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  ]
                  const shape = shapes[idx % shapes.length]
                  return (
                    <div key={skill.name} className="flex flex-col items-center animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                      <div
                        className="flex flex-col items-center justify-center p-3 shadow-lg transition-all duration-300 hover:shadow-accent-gold/50 hover:scale-110 hover:rotate-6"
                        style={{
                          width: '80px',
                          height: '90px',
                          background: `linear-gradient(135deg, rgba(255,193,7, ${0.3 + (skill.level / 100) * 0.5}), rgba(255,193,7, ${0.15 + (skill.level / 100) * 0.35}))`,
                          clipPath: shape,
                          border: '2px solid rgba(255,193,7, 0.6)',
                          boxShadow: `0 4px 12px rgba(255,193,7, ${0.2 + (skill.level / 100) * 0.3})`,
                          animation: 'pulse-glow 3s ease-in-out infinite',
                          animationDelay: `${idx * 0.2}s`,
                        }}
                      >
                        <span className="text-accent-gold font-bold text-sm">{skill.level}%</span>
                      </div>
                      <span className="mt-2 text-xs text-text-light text-center max-w-[80px]">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Dots - Tools */}
            {catIndex === 4 && (
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="flex items-center justify-between animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                    <span className="text-text-light font-medium">{skill.name}</span>
                    <Dots level={skill.level} />
                  </div>
                ))}
              </div>
            )}

            {/* Vertical Bars - Protocols */}
            {catIndex === 5 && (
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="bg-dark-card border border-dark-border rounded-md p-3 flex items-center gap-3 hover:border-accent-gold/50 smooth-transition animate-slide-up" style={{animationDelay: `${idx * 0.1}s`}}>
                    <div className="w-1 h-8 bg-accent-gold rounded" style={{animation: 'grow-height 1s ease-out forwards', animationDelay: `${idx * 0.1}s`}} />
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

            {/* Block Bars - Data & CMS */}
            {catIndex === 6 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIdx) => {
                  const blockCount = 5
                  const filledBlocks = Math.round((skill.level / 100) * blockCount)
                  return (
                    <div
                      key={skill.name}
                      className="bg-dark-card border border-dark-border rounded-xl p-4 flex flex-col items-center gap-3 hover:border-accent-gold/50 hover:shadow-lg hover:shadow-accent-gold/10 smooth-transition animate-fade-in"
                      style={{animationDelay: `${skillIdx * 0.1}s`}}
                    >
                      <span className="text-xs text-text-light text-center font-medium">{skill.name}</span>
                      <div className="flex flex-col gap-2 w-full items-center">
                        <div className="flex gap-1">
                          {Array.from({ length: blockCount }).map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-8 rounded-sm transition-all duration-300 hover:scale-110"
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
                  )
                })}
              </div>
            )}

            {/* Animated Progress Bars - Agile & Management */}
            {catIndex === 7 && (
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-text-light text-sm font-medium group-hover:text-accent-gold transition">{skill.name}</span>
                      <span className="text-accent-gold font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative h-3 bg-dark-card rounded-full overflow-hidden border border-dark-border group-hover:border-accent-gold/50 transition">
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-gold via-accent-gold-light to-accent-gold rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${idx * 0.1}s`,
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 2s ease-in-out infinite',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{animation: 'slide-right 2s ease-in-out infinite'}}></div>
                      </div>
                    </div>
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

// Donut Chart Component
function Donut({ level }: { level: number }) {
  const circumference = 2 * Math.PI * 40
  const offset = circumference - (level / 100) * circumference
  
  return (
    <div className="relative w-24 h-24 group cursor-pointer animate-fade-in">
      <svg className="transform -rotate-90 w-24 h-24 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke="rgba(42, 42, 62, 0.8)"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="48"
          cy="48"
          r="40"
          stroke="url(#gradient)"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
          style={{ strokeLinecap: 'round', animation: 'dash 2s ease-out forwards' }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffc107" />
            <stop offset="50%" stopColor="#ffd54f" />
            <stop offset="100%" stopColor="#ffc107" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-accent-gold font-bold text-sm group-hover:text-accent-gold-light transition">{level}%</span>
      </div>
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
           style={{boxShadow: '0 0 20px rgba(255, 193, 7, 0.4)'}}></div>
    </div>
  )
}

// Star Rating Component
function StarRating({ level }: { level: number }) {
  const stars = 5
  const filledStars = Math.round((level / 100) * stars)
  
  return (
    <div className="flex gap-1">
      {Array.from({ length: stars }).map((_, i) => (
        <span
          key={i}
          className={`text-lg transition-all duration-300 hover:scale-125 cursor-pointer ${
            i < filledStars ? 'text-accent-gold hover:drop-shadow-[0_0_8px_rgba(255,193,7,0.8)]' : 'text-dark-border hover:text-accent-gold/50'
          }`}
          style={{ animationDelay: `${i * 0.1}s`, animation: i < filledStars ? 'bounce-light 2s ease-in-out infinite' : 'none' }}
        >
          ★
        </span>
      ))}
    </div>
  )
}

// Level Badge Component
function LevelBadge({ level }: { level: number }) {
  const getLevel = (lvl: number) => {
    if (lvl >= 90) return { text: 'Expert', color: 'bg-accent-gold', glow: 'shadow-accent-gold/50' }
    if (lvl >= 80) return { text: 'Advanced', color: 'bg-green-500', glow: 'shadow-green-500/50' }
    if (lvl >= 70) return { text: 'Intermediate', color: 'bg-blue-500', glow: 'shadow-blue-500/50' }
    return { text: 'Beginner', color: 'bg-gray-500', glow: 'shadow-gray-500/50' }
  }
  
  const badge = getLevel(level)
  
  return (
    <span className={`${badge.color} text-dark-bg text-xs font-bold px-3 py-1 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${badge.glow} cursor-pointer`} style={{animation: 'pulse-subtle 3s ease-in-out infinite'}}>
      {badge.text}
    </span>
  )
}

// Dots Component
function Dots({ level }: { level: number }) {
  const dots = 5
  const filledDots = Math.round((level / 100) * dots)
  
  return (
    <div className="flex gap-1">
      {Array.from({ length: dots }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-all duration-500 hover:scale-150 cursor-pointer ${
            i < filledDots 
              ? 'bg-accent-gold shadow-lg shadow-accent-gold/50' 
              : 'bg-dark-border hover:bg-accent-gold/30'
          }`}
          style={{ animationDelay: `${i * 0.15}s`, animation: i < filledDots ? 'pulse 2s ease-in-out infinite' : 'none' }}
        />
      ))}
    </div>
  )
}
