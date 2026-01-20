import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <div className="animate-fade-in">
      <div className="animate-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-text-lighter mb-8">Have a question or want to work together? I'd love to hear from you.</p>
      </div>

      <div className="animate-slide-up" style={{animationDelay: '0.1s'}}>
        <ContactForm />
      </div>

      <div className="mt-12 pt-12 border-t border-dark-border grid md:grid-cols-3 gap-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
        <div className="bg-dark-border border border-dark-border rounded-lg p-6 hover:border-accent-gold/50 transition smooth-transition group hover:bg-dark-border/80 hover:shadow-lg hover:shadow-accent-gold/10 animate-slide-up" style={{animationDelay: '0.3s'}}>
          <p className="text-text-lighter text-sm uppercase font-semibold mb-3 group-hover:text-accent-gold smooth-transition">📧 Email</p>
          <a href="mailto:iancorpuz0118@gmail.com" className="text-accent-gold hover:text-accent-gold-light transition font-semibold group-hover:scale-105 inline-block smooth-transition">
            iancorpuz0118@gmail.com
          </a>
        </div>
        
        <div className="bg-dark-border border border-dark-border rounded-lg p-6 hover:border-accent-gold/50 transition smooth-transition group hover:bg-dark-border/80 hover:shadow-lg hover:shadow-accent-gold/10 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <p className="text-text-lighter text-sm uppercase font-semibold mb-3 group-hover:text-accent-gold smooth-transition">💼 LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/julius-ian-corpuz-8bb025165/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-gold hover:text-accent-gold-light transition font-semibold group-hover:scale-105 inline-block smooth-transition"
          >
            julius-ian-corpuz
          </a>
        </div>

        <div className="bg-dark-border border border-dark-border rounded-lg p-6 hover:border-accent-gold/50 transition smooth-transition group hover:bg-dark-border/80 hover:shadow-lg hover:shadow-accent-gold/10 animate-slide-up" style={{animationDelay: '0.5s'}}>
          <p className="text-text-lighter text-sm uppercase font-semibold mb-3 group-hover:text-accent-gold smooth-transition">📍 Location</p>
          <p className="text-text-light font-semibold">Philippines</p>
        </div>
      </div>
    </div>
  )
}
