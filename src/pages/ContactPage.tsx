import { motion } from 'framer-motion'

/**
 * Contact page - Placeholder for contact form
 */
export default function ContactPage() {
  return (
    <div className="pt-20 md:pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-center gradient-text">
            Get In Touch
          </h1>
          
          <div className="glass-effect rounded-lg p-8">
            <p className="text-slate-300 text-center mb-8">
              Contact form and information will be added here.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:Mohmedvaid@gmail.com" className="hover:text-primary-400 transition-colors">
                  Mohmedvaid@gmail.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

