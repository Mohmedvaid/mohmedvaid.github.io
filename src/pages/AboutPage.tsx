import { motion } from 'framer-motion'

const experience = [
  {
    role: 'Senior Flight Software Engineer · NorthStar Labs',
    duration: '2021 — present',
    detail: 'Lead on-call duty for orbit-to-surface telemetry. Remapped three legacy control rooms into one dashboard called SkyDeck, which is still humming.',
  },
  {
    role: 'Full-stack Launch Developer · Zenith Dynamics',
    duration: '2019 — 2021',
    detail: 'Launched an internal tool named RoverOps that automated deployment sequences (the rockets loved it and so did the ops team).',
  },
  {
    role: 'Engineer Intern · AstroHabit',
    duration: '2018 — 2019',
    detail: 'Helped prototype the first gesture-aware docking UI—users told me it felt like Jedi mind control, which I’ll take as a compliment.',
  },
]

const humor = [
  'Has been known to debug while upside-down in zero-G simulations.',
  'Believes coffee is a valid propulsion fuel source, pending safety review.',
  'Willing to pair-program with robots and occasionally win.',
]

export default function AboutPage() {
  return (
    <div className="pt-28 pb-16 relative min-h-screen">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_45%,#000000_100%)] opacity-70" />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 max-w-3xl mx-auto"
        >
          <p className="text-xs uppercase tracking-[0.6em] text-primary-300">Background</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text">
            Keeping rockets online and humans smiling
          </h1>
          <p className="text-lg text-slate-300">
            Senior engineer who writes clean futures and launches improbable ideas. I design systems that survive cosmic radiation and office politics alike.
          </p>
        </motion.section>

        <section className="grid gap-6 lg:grid-cols-3 relative">
          {humor.map((line, index) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect p-5 rounded-2xl text-sm text-slate-200"
            >
              <p className="text-primary-400 uppercase text-[0.6rem] tracking-[0.6em] mb-2">Mission humor</p>
              <p>{line}</p>
            </motion.div>
          ))}
        </section>

        <section className="relative space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-display font-semibold text-white">Career Trajectory</h2>
            <span className="text-xs uppercase tracking-[0.5em] text-primary-300">Timeline</span>
          </div>

          <div className="space-y-4">
            {experience.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative border border-white/10 rounded-3xl p-6 glass-effect shadow-xl"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 rounded-t-3xl" />
                <p className="text-sm uppercase tracking-[0.4em] text-primary-300">{item.duration}</p>
                <h3 className="text-2xl font-display font-semibold text-white mt-2">{item.role}</h3>
                <p className="text-slate-300 mt-3 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

