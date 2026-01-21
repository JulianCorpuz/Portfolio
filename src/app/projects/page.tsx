import projectsData from '@/data/projects-data.json'

export default function Projects() {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-slide-up">Projects</h2>
      <p className="text-text-lighter mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
        Some notable projects I've worked on showcasing my technical expertise
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className="bg-dark-border border border-dark-border rounded-xl p-5 hover:border-accent-gold transition-all duration-300 group animate-slide-up hover:shadow-xl hover:shadow-accent-gold/10 hover:-translate-y-2"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <div className="mb-4 h-40 border border-dark-border rounded-lg overflow-hidden relative group-hover:border-accent-gold/50 smooth-transition">
              <img 
                src={project.screenshot} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/0 to-accent-gold/10 opacity-0 group-hover:opacity-100 smooth-transition"></div>
            </div>
            
            <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-accent-gold transition">
              {project.title}
            </h3>
            
            <p className="text-text-lighter text-xs sm:text-sm mb-4 line-clamp-2">{project.description}</p>
            
            <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, idx) => (
                <span
                  key={tech}
                  className="text-xs bg-dark-card px-3 py-1 rounded-full text-accent-gold border border-dark-border group-hover:border-accent-gold/50 smooth-transition animate-fade-in"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs bg-dark-card px-3 py-1 rounded-full text-text-lighter">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            
            <div className="flex gap-3">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 px-3 bg-accent-gold text-dark-bg text-sm font-semibold rounded-lg hover:bg-accent-gold-light transition smooth-transition group-hover:shadow-lg group-hover:shadow-accent-gold/30 active:scale-95"
              >
                GitHub
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-3 border border-accent-gold text-accent-gold text-sm font-semibold rounded-lg hover:bg-accent-gold hover:text-dark-bg transition smooth-transition group-hover:shadow-lg group-hover:shadow-accent-gold/30 active:scale-95"
                >
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
