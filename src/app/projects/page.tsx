import projectsData from '@/data/projects-data.json'
import Link from 'next/link'
import Image from 'next/image'

export default function Projects() {
  return (
    <div className="animate-fade-in max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 animate-slide-up">Featured Projects</h2>
      <p className="text-text-lighter mb-12 animate-slide-up max-w-3xl" style={{animationDelay: '0.1s'}}>
        Production-ready applications showcasing enterprise architecture, modern tech stacks, and best practices
      </p>

      <div className="space-y-16">
        {projectsData.map((project, index) => (
          <article
            key={project.id}
            className="bg-dark-border border border-dark-border rounded-2xl overflow-hidden hover:border-accent-gold transition-all duration-500 group animate-slide-up hover:shadow-2xl hover:shadow-accent-gold/10"
            style={{animationDelay: `${index * 0.2}s`}}
          >
            {/* Project Header with Screenshot */}
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-96 border-b md:border-b-0 md:border-r border-dark-border overflow-hidden bg-dark-card group-hover:border-accent-gold/50 smooth-transition">
                <Image 
                  src={project.screenshot} 
                  alt={project.title}
                  fill
                  className="object-contain group-hover:scale-105 smooth-transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-gold/10 opacity-0 group-hover:opacity-100 smooth-transition duration-700"></div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent-gold transition">
                  {project.title}
                </h3>
                
                <p className="text-accent-gold text-sm font-semibold mb-4">{project.description}</p>
                
                <p className="text-text-lighter text-sm leading-relaxed mb-6">
                  {project.fullDescription}
                </p>
                
                <div className="flex gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-accent-gold text-dark-bg font-semibold rounded-lg hover:bg-accent-gold-light transition smooth-transition group-hover:shadow-lg group-hover:shadow-accent-gold/30 active:scale-95"
                  >
                    View Code
                  </a>
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border border-accent-gold text-accent-gold font-semibold rounded-lg hover:bg-accent-gold hover:text-dark-bg transition smooth-transition group-hover:shadow-lg group-hover:shadow-accent-gold/30 active:scale-95"
                    >
                      Live Demo →
                    </a>
                  )}
                  <Link
                    href={`/projects/${project.id}`}
                    className="px-6 py-3 border border-dark-border text-text-lighter font-semibold rounded-lg hover:border-accent-gold hover:text-accent-gold transition smooth-transition active:scale-95"
                  >
                    Full Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="px-8 py-6 border-t border-dark-border bg-dark-card/30">
              <h4 className="text-sm font-semibold text-text-lighter mb-3 uppercase tracking-wider">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={tech}
                    className="text-xs bg-dark-bg px-4 py-2 rounded-full text-accent-gold border border-dark-border group-hover:border-accent-gold/50 smooth-transition animate-fade-in font-medium"
                    style={{animationDelay: `${idx * 0.05}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {'features' in project && project.features && (
              <div className="px-8 py-6 border-t border-dark-border">
                <h4 className="text-sm font-semibold text-text-lighter mb-4 uppercase tracking-wider">✨ Key Features</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-text-lighter bg-dark-card/30 p-3 rounded-lg border border-dark-border hover:border-accent-gold/30 smooth-transition"
                    >
                      <span className="text-accent-gold text-base">{feature.split(' - ')[0]}</span>
                      <span className="flex-1">{feature.split(' - ').slice(1).join(' - ')}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Highlights */}
            <div className="px-8 py-6 border-t border-dark-border bg-dark-card/20">
              <h4 className="text-sm font-semibold text-text-lighter mb-4 uppercase tracking-wider">🎯 Technical Highlights</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {project.technicalDecisions.slice(0, 6).map((decision, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2 text-sm text-text-lighter"
                  >
                    <span className="text-accent-gold mt-1">▸</span>
                    <span>{decision}</span>
                  </div>
                ))}
              </div>
              {project.technicalDecisions.length > 6 && (
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-block mt-4 text-accent-gold text-sm font-semibold hover:underline"
                >
                  View all {project.technicalDecisions.length} technical decisions →
                </Link>
              )}
            </div>

            {/* Development Phases (if available) */}
            {'developmentPhases' in project && project.developmentPhases && (
              <div className="px-8 py-6 border-t border-dark-border">
                <h4 className="text-sm font-semibold text-text-lighter mb-4 uppercase tracking-wider">📅 Development Journey</h4>
                <div className="space-y-2">
                  {project.developmentPhases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-text-lighter bg-dark-card/30 p-3 rounded-lg border border-dark-border"
                    >
                      {phase}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  )
}
