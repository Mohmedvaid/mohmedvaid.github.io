import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects'

const states = ['Prototype', 'Orbit', 'Hyperloop']

export default function PortfolioPage() {
  return (
    <div className="pt-24 pb-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <p className="text-xs uppercase tracking-[0.6em] text-primary-400">Portfolio</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text">
            Crafted Missions
          </h1>
          <p className="text-slate-300 text-lg">
            Each concept is an experimental orbit; built with fast velocity and designed for durability.
          </p>
        </motion.section>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-slate-300">
            <p className="text-sm uppercase tracking-[0.5em] text-primary-300">Command window</p>
            <p>
              The missions below are creative placeholders for advanced concepts that align with future-ready systems engineering.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {states.map((state) => (
                <div
                  key={state}
                  className="glass-effect rounded-2xl p-3 text-center text-slate-200 text-xs uppercase tracking-[0.3em]"
                >
                  {state}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}
