export default function About() {
  return (
    <div className="animate-fade-in space-y-8">
      <div className="animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="space-y-4 text-text-lighter leading-relaxed">
          <p className="animate-slide-up" style={{animationDelay: '0.1s'}}>
            Senior Full Stack Engineer with 6+ years of experience specializing in backend development using Java and the Spring Framework. Designed and maintained microservices-based backend systems, enabling scalable, resilient, and independently deployable services. I build enterprise-grade solutions and integrate Generative AI to solve complex business problems.
          </p>
        </div>
      </div>

      <div className="mt-10 pt-10 border-t border-dark-border animate-slide-up" style={{animationDelay: '0.2s'}}>
        <h3 className="text-xl font-bold text-accent-gold mb-6">Experience</h3>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Timeline - Left Side */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-2 border-accent-gold pl-6 pb-6 relative animate-slide-up hover:border-accent-gold-light smooth-transition" style={{animationDelay: '0.3s'}}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent-gold rounded-full border-2 border-dark-bg animate-pulse-gold"></div>
              <h4 className="text-lg font-bold text-white mb-1">Full Stack Engineering Sr Developer</h4>
              <p className="text-accent-gold font-semibold text-sm mb-2">Accenture • May 2023 - Present</p>
              <p className="text-text-darker text-xs mb-2">Risk Management System</p>
              <p className="text-text-light text-sm">
                Tech Stack: Spring Batch, Java, Oracle, SyBase
              </p>
            </div>

            <div className="border-l-2 border-dark-border pl-6 relative animate-slide-up hover:border-accent-gold/50 smooth-transition" style={{animationDelay: '0.4s'}}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark-border rounded-full border-2 border-dark-bg hover:bg-accent-gold smooth-transition"></div>
              <h4 className="text-lg font-bold text-white mb-1">Software Engineer (Java Developer)</h4>
              <p className="text-accent-gold font-semibold text-sm mb-2">Norima Technologies Inc. • May 2022 - March 2023</p>
              <p className="text-text-darker text-xs mb-2">Majesco: Insurance System</p>
              <p className="text-text-light text-sm">
                Tech Stack: SpringBoot, Java
              </p>
            </div>

            <div className="border-l-2 border-dark-border pl-6 relative animate-slide-up hover:border-accent-gold/50 smooth-transition" style={{animationDelay: '0.45s'}}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark-border rounded-full border-2 border-dark-bg hover:bg-accent-gold smooth-transition"></div>
              <h4 className="text-lg font-bold text-white mb-1">Full Stack Web Developer</h4>
              <p className="text-accent-gold font-semibold text-sm mb-2">Osolabs (Freelance) • Nov 2021 - April 2022</p>
              <p className="text-text-darker text-xs mb-2">DogoDesign - DogoAdmin (Inventory Store and Admin Web Application)</p>
              <p className="text-text-light text-sm">
                Tech Stack: PHP Laravel, Javascript, MySQL
              </p>
            </div>

            <div className="border-l-2 border-dark-border pl-6 relative animate-slide-up hover:border-accent-gold/50 smooth-transition" style={{animationDelay: '0.5s'}}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark-border rounded-full border-2 border-dark-bg hover:bg-accent-gold smooth-transition"></div>
              <h4 className="text-lg font-bold text-white mb-1">Full Stack Web Developer</h4>
              <p className="text-accent-gold font-semibold text-sm mb-2">Webcast Technologies Inc. • March 2021 - Feb 2022</p>
              <p className="text-text-darker text-xs mb-2">Logistics API and Web Application | Store Tracker</p>
              <p className="text-text-light text-sm">
                Tech Stack: React, NodeJs, GraphQL, MySQL, Oracle | CakePHP, MySQL
              </p>
            </div>

            <div className="border-l-2 border-dark-border pl-6 relative animate-slide-up hover:border-accent-gold/50 smooth-transition" style={{animationDelay: '0.55s'}}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark-border rounded-full border-2 border-dark-bg hover:bg-accent-gold smooth-transition"></div>
              <h4 className="text-lg font-bold text-white mb-1">Full Stack Web Developer</h4>
              <p className="text-accent-gold font-semibold text-sm mb-2">Osolabs (Freelance) • July 2020 - December 2020</p>
              <p className="text-text-darker text-xs mb-2">Elevated Math | DogoDesign - DogoAdmin</p>
              <p className="text-text-light text-sm">
                Tech Stack: JavaScript, HTML, JSS, Elementor/Wordpress | PHP Laravel, Javascript, MySQL
              </p>
            </div>

            <div className="border-l-2 border-dark-border pl-6 relative animate-slide-up hover:border-accent-gold/50 smooth-transition" style={{animationDelay: '0.6s'}}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark-border rounded-full border-2 border-dark-bg hover:bg-accent-gold smooth-transition"></div>
              <h4 className="text-lg font-bold text-white mb-1">ASE / Data Engineer</h4>
              <p className="text-accent-gold font-semibold text-sm mb-2">Accenture • Jan 2019 - Sept 2020</p>
              <p className="text-text-darker text-xs mb-2">Enterprise Search</p>
              <p className="text-text-light text-sm">
                Tech Stack: Elasticsearch, Kibana, LogStash
              </p>
            </div>

            <div className="border-l-2 border-dark-border pl-6 relative animate-slide-up hover:border-accent-gold/50 smooth-transition" style={{animationDelay: '0.65s'}}>
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-dark-border rounded-full border-2 border-dark-bg hover:bg-accent-gold smooth-transition"></div>
              <h4 className="text-lg font-bold text-white mb-1">React Native Bootcamp Trainee</h4>
              <p className="text-accent-gold font-semibold text-sm mb-2">Yondu Inc • Oct 2018 - Dec 2018</p>
              <p className="text-text-light text-sm">
                Tech Stack: React Native, Firebase
              </p>
            </div>
          </div>

          {/* Career Highlights - Right Side */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-4 space-y-4 lg:pl-4">
              {/* Career Stats */}
              <div className="bg-dark-border border border-accent-gold/30 rounded-lg p-5 animate-slide-up hover:border-accent-gold smooth-transition hover:shadow-lg hover:shadow-accent-gold/20" style={{animationDelay: '0.3s'}}>
                <h4 className="font-bold text-accent-gold mb-4 text-lg">📊 Career Highlights</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-text-light text-sm">Experience</span>
                    <span className="text-white font-bold">6+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-light text-sm">Companies</span>
                    <span className="text-white font-bold">5+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-light text-sm">Projects</span>
                    <span className="text-white font-bold">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-light text-sm">Current Role</span>
                    <span className="text-accent-gold font-bold text-xs">Senior Developer</span>
                  </div>
                </div>
              </div>

              {/* Top Technologies */}
              <div className="bg-dark-border border border-dark-border rounded-lg p-5 animate-slide-up hover:border-accent-gold/50 smooth-transition hover:shadow-lg hover:shadow-accent-gold/10" style={{animationDelay: '0.4s'}}>
                <h4 className="font-bold text-accent-gold mb-4 text-lg">🔥 Top Technologies</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-light">Java</span>
                      <span className="text-accent-gold">90%</span>
                    </div>
                    <div className="w-full bg-dark-card rounded-full h-2">
                      <div className="bg-accent-gold h-2 rounded-full" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-light">Spring Boot</span>
                      <span className="text-accent-gold">85%</span>
                    </div>
                    <div className="w-full bg-dark-card rounded-full h-2">
                      <div className="bg-accent-gold h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-light">PHP</span>
                      <span className="text-accent-gold">75%</span>
                    </div>
                    <div className="w-full bg-dark-card rounded-full h-2">
                      <div className="bg-accent-gold h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-text-light">React</span>
                      <span className="text-accent-gold">70%</span>
                    </div>
                    <div className="w-full bg-dark-card rounded-full h-2">
                      <div className="bg-accent-gold h-2 rounded-full" style={{width: '70%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="bg-dark-border border border-dark-border rounded-lg p-5 animate-slide-up hover:border-accent-gold/50 smooth-transition space-y-3 hover:shadow-lg hover:shadow-accent-gold/10" style={{animationDelay: '0.5s'}}>
                <a
                  href="/resume.pdf"
                  download
                  className="block w-full bg-accent-gold hover:bg-accent-gold-light text-dark-bg font-bold py-3 px-4 rounded-lg transition text-center smooth-transition hover:scale-105 hover:shadow-lg hover:shadow-accent-gold/30"
                >
                  📄 Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/julius-ian-corpuz-8bb025165/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-dark-card hover:bg-dark-border text-accent-gold font-bold py-3 px-4 rounded-lg border border-accent-gold/30 hover:border-accent-gold transition text-center smooth-transition hover:scale-105"
                >
                  💼 View LinkedIn
                </a>
              </div>

              {/* Current Focus */}
              <div className="bg-accent-gold/5 border border-accent-gold/30 rounded-lg p-5 animate-slide-up hover:border-accent-gold smooth-transition hover:shadow-lg hover:shadow-accent-gold/20" style={{animationDelay: '0.6s'}}>
                <h4 className="font-bold text-accent-gold mb-3 text-sm">🎯 Current Focus</h4>
                <ul className="space-y-2 text-xs text-text-light">
                  <li className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    <span>Backend Development with Spring Batch</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    <span>Generative AI Integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-gold mr-2">•</span>
                    <span>Enterprise Architecture</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-10 border-t border-dark-border animate-slide-up" style={{animationDelay: '0.5s'}}>
        <h3 className="text-xl font-bold text-accent-gold mb-6">Technical Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Programming Languages */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.6s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              ⚙️ Programming Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Java', 'PHP', 'JavaScript'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Frameworks */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.68s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              🔧 Backend Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Spring Boot', 'Spring Batch', 'Laravel', 'CakePHP', 'Node.js'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.76s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              🎨 Frontend Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'React Native', 'HTML', 'CSS', 'Tailwind CSS', 'Elementor'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.84s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              💾 Databases
            </h4>
            <div className="flex flex-wrap gap-2">
              {['MySQL', 'Oracle', 'SyBase', 'Firebase'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* APIs & Data */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '0.92s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              🔄 APIs & Data
            </h4>
            <div className="flex flex-wrap gap-2">
              {['GraphQL', 'REST APIs', 'JSON'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Search & Logging */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '1s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              🔍 Search & Logging
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Elasticsearch', 'Kibana', 'LogStash'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Content Management */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '1.08s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              📝 Content Management
            </h4>
            <div className="flex flex-wrap gap-2">
              {['WordPress', 'Elementor', 'PHP CMS'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Version Control */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '1.16s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              📚 Version Control
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Git', 'SVN'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* AI & Automation */}
          <div className="bg-dark-border border border-accent-gold/30 rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/20 hover:-translate-y-1" style={{animationDelay: '1.24s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              🤖 AI & Automation
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Generative AI', 'GitHub Copilot', 'LLM Integration'].map((skill, idx) => (
                <span key={idx} className="bg-accent-gold/10 px-3 py-1 rounded-full text-accent-gold border border-accent-gold/50 group-hover:border-accent-gold text-sm smooth-transition font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Project Management */}
          <div className="bg-dark-border border border-dark-border rounded-lg p-5 hover:border-accent-gold transition smooth-transition group animate-slide-up hover:shadow-lg hover:shadow-accent-gold/10 hover:-translate-y-1" style={{animationDelay: '1.32s'}}>
            <h4 className="font-bold text-accent-gold mb-3 group-hover:text-accent-gold-light smooth-transition text-lg">
              📊 Project Management
            </h4>
            <div className="flex flex-wrap gap-2">
              {['Agile', 'Scrum', 'Kanban', 'Jira'].map((skill, idx) => (
                <span key={idx} className="bg-dark-card px-3 py-1 rounded-full text-text-light border border-dark-border group-hover:border-accent-gold/50 text-sm smooth-transition">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
