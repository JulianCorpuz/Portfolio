'use client'

interface NavItem {
  id: string
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About', icon: 'ℹ' },
  { id: 'skills', label: 'Skills', icon: '⭐' },
  { id: 'projects', label: 'Projects', icon: '📁' },
  { id: 'contact', label: 'Contact', icon: '✉' },
]

interface NavigationProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="w-full bg-dark-card/95 backdrop-blur-md
                   border-b border-dark-border
                   px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5
                   smooth-transition
                   animate-slide-down">
      <ul className="flex justify-center lg:justify-start lg:gap-8 gap-1 sm:gap-2 overflow-x-auto max-w-7xl mx-auto">
        {navItems.map((item, index) => (
          <li key={item.id} style={{animationDelay: `${index * 0.1}s`}} className="animate-fade-in flex-shrink-0">
            <button
              onClick={() => onTabChange(item.id)}
              className={`
                flex flex-col sm:flex-row sm:items-center sm:gap-2
                py-2 sm:py-3 px-3 sm:px-4 md:px-5
                rounded-lg transition-all duration-300
                text-xs sm:text-sm md:text-base font-medium
                relative overflow-hidden
                group
                whitespace-nowrap
                ${activeTab === item.id
                  ? 'text-accent-gold bg-dark-border border border-accent-gold/50 shadow-lg shadow-accent-gold/20'
                  : 'text-text-lighter hover:text-text-light hover:border-dark-border hover:border'
                }
              `}
            >
              {/* Hover background effect */}
              <div className={`absolute inset-0 bg-gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
              
              <span className="text-xl md:text-lg group-hover:animate-bounce-light">{item.icon}</span>
              <span className="text-xs md:text-base">{item.label}</span>

              {/* Active indicator */}
              {activeTab === item.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent-gold to-accent-gold-light animate-pulse-gold"></div>
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
