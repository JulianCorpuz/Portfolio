export default function About() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="space-y-4 text-text-lighter leading-relaxed">
          <p className="animate-slide-up" style={{animationDelay: '0.1s'}}>
            Full Stack Engineering Sr Developer at Accenture with expertise in backend development using Java and Spring Batch. 
            I specialize in building robust, scalable solutions and leveraging Generative AI to solve complex business problems.
          </p>
          
          <p className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            With a strong foundation in Java, PHP, and modern frameworks, I build enterprise-grade applications
            that deliver exceptional performance and reliability. Currently focused on backend development and AI integration.
          </p>

          <p className="animate-slide-up" style={{animationDelay: '0.3s'}}>
            I enjoy turning complex technical challenges into elegant, maintainable solutions. My experience spans across
            different industries and I'm passionate about continuous learning and staying updated with the latest technologies.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-10 border-t border-dark-border animate-slide-up" style={{animationDelay: '0.2s'}}>
        <h3 className="text-xl font-bold text-accent-gold mb-6">Experience</h3>
        <div className="space-y-6">
          <div className="border-l-2 border-accent-gold pl-6 pb-6 relative animate-slide-up hover:border-accent-gold-light smooth-transition" style={{animationDelay: '0.3s'}}>
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-gold rounded-full border-2 border-dark-bg animate-pulse-gold"></div>
            <h4 className="text-lg font-bold text-white mb-1">Full Stack Engineering Sr Developer</h4>
            <p className="text-accent-gold font-semibold text-sm mb-3">Accenture • Present</p>
            <p className="text-text-light text-sm">
              Leading backend development initiatives using Java and Spring Batch. Designing and implementing scalable solutions
              for enterprise clients. Integrating Generative AI technologies to enhance product capabilities.
            </p>
          </div>

          <div className="border-l-2 border-dark-border pl-6 relative animate-slide-up hover:border-accent-gold/50 smooth-transition" style={{animationDelay: '0.4s'}}>
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark-border rounded-full border-2 border-dark-bg hover:bg-accent-gold smooth-transition"></div>
            <h4 className="text-lg font-bold text-white mb-1">Backend Developer</h4>
            <p className="text-accent-gold font-semibold text-sm mb-3">Accenture • Previous</p>
            <p className="text-text-light text-sm">
              Developed robust backend systems and APIs. Worked with databases, REST APIs, and microservices architecture.
              Collaborated with cross-functional teams to deliver high-quality solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-10 border-t border-dark-border animate-slide-up" style={{animationDelay: '0.5s'}}>
        <h3 className="text-xl font-bold text-accent-gold mb-6">Skills & Technologies</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { category: 'Backend', skills: 'Java, Spring Batch, Node.js, PHP' },
            { category: 'Frontend', skills: 'React, TypeScript, Tailwind CSS, JavaScript' },
            { category: 'Databases', skills: 'SQL, PostgreSQL, MongoDB, MySQL' },
            { category: 'Tools & DevOps', skills: 'Git, Docker, AWS, Jenkins, Cloud Services' },
            { category: 'AI & Emerging', skills: 'Generative AI, LLMs, Prompt Engineering, ML Basics' },
            { category: 'Architecture', skills: 'Microservices, REST APIs, Event-driven Design' }
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-dark-border border border-dark-border rounded-lg p-4 hover:border-accent-gold/50 transition smooth-transition group animate-slide-up hover:bg-dark-border/80 hover:shadow-lg hover:shadow-accent-gold/10"
              style={{animationDelay: `${0.6 + index * 0.08}s`}}
            >
              <h4 className="font-bold text-accent-gold mb-2 group-hover:text-accent-gold-light smooth-transition">
                {skill.category}
              </h4>
              <p className="text-sm text-text-lighter">{skill.skills}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
