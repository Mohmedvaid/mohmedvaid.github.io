import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  title: string
  description: string
  stack: string[]
  links: { live: string; repo: string; details: string }
}

export default function ProjectCard({ title, description, stack, links }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn('glass-effect rounded-3xl p-6 h-full flex flex-col justify-between space-y-6', 'border border-white/5')}
    >
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.5em] text-primary-300">Prototype</p>
        <h3 className="text-2xl font-display font-bold text-white">{title}</h3>
        <p className="text-slate-300 leading-relaxed">{description}</p>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-white/10 text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-xs uppercase tracking-widest text-slate-300">
          <a href={links.live} className="text-primary-400 hover:text-white transition-colors">
            Live //
          </a>
          <a href={links.repo} className="text-primary-400 hover:text-white transition-colors">
            Repo //
          </a>
          <a href={links.details} className="text-primary-400 hover:text-white transition-colors">
            Details
          </a>
        </div>
      </div>
    </motion.article>
  )
}
