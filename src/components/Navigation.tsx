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
    <nav className="fixed md:relative bottom-0 left-0 right-0 md:bottom-auto
                   bg-dark-card/75 backdrop-blur-md
                   border-t md:border md:border-dark-border
                   rounded-t-2xl md:rounded-2xl
                   border-dark-border
                   px-4 md:px-6 py-3 md:py-4
                   z-30 md:z-0
                   md:mb-6
                   smooth-transition
                   animate-slide-up">
      <ul className="flex justify-around md:justify-start md:gap-8">
        {navItems.map((item, index) => (
          <li key={item.id} style={{animationDelay: `${index * 0.1}s`}} className="animate-fade-in">
            <button
              onClick={() => onTabChange(item.id)}
              className={`
                flex flex-col md:flex-row md:items-center md:gap-2
                py-2 md:py-3 px-3 md:px-4
                rounded-lg transition-all duration-300
                text-sm md:text-base font-medium
                relative overflow-hidden
                group
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
