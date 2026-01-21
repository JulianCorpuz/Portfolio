export default function Skills() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <p className="text-text-lighter leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
          A comprehensive overview of my technical expertise across multiple domains and technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
        {/* Programming Languages */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.3s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            ⚙️ Programming Languages
          </h4>
          <ul className="space-y-2">
            {['Java', 'PHP', 'JavaScript'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Frameworks */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.38s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            🔧 Backend Frameworks
          </h4>
          <ul className="space-y-2">
            {['Spring Boot', 'Spring Batch', 'Laravel', 'CakePHP', 'Node.js'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Frontend Technologies */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.46s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            🎨 Frontend Technologies
          </h4>
          <ul className="space-y-2">
            {['React', 'React Native', 'HTML', 'CSS', 'Tailwind CSS', 'Elementor'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Databases */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.54s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            💾 Databases
          </h4>
          <ul className="space-y-2">
            {['MySQL', 'Oracle', 'SyBase', 'Firebase'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* APIs & Data */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.62s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            🔄 APIs & Data
          </h4>
          <ul className="space-y-2">
            {['GraphQL', 'REST APIs', 'JSON'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Search & Logging */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.7s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            🔍 Search & Logging
          </h4>
          <ul className="space-y-2">
            {['Elasticsearch', 'Kibana', 'LogStash'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Management */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.78s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            📝 Content Management
          </h4>
          <ul className="space-y-2">
            {['WordPress', 'Elementor', 'PHP CMS'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Version Control */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.86s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            📚 Version Control
          </h4>
          <ul className="space-y-2">
            {['Git', 'SVN'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI & Automation */}
        <div className="bg-dark-border border border-accent-gold/30 rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/20 hover:-translate-y-1" style={{animationDelay: '0.94s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            🤖 AI & Automation
          </h4>
          <ul className="space-y-2">
            {['Generative AI', 'GitHub Copilot', 'LLM Integration'].map((skill, idx) => (
              <li key={idx} className="text-accent-gold flex items-start font-medium">
                <span className="mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Management */}
        <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '1.02s'}}>
          <h4 className="font-bold text-accent-gold mb-4 group-hover:text-accent-gold-light smooth-transition text-lg">
            📊 Project Management
          </h4>
          <ul className="space-y-2">
            {['Agile', 'Scrum', 'Kanban', 'Jira'].map((skill, idx) => (
              <li key={idx} className="text-text-light flex items-start">
                <span className="text-accent-gold mr-3">-</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
