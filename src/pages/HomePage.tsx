import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const missions = [
  { title: 'Starline Autonomy', detail: 'Fusion-grade orchestration for deep-space telemetry.' },
  { title: 'Nebula Forge', detail: 'Realtime analytics pipeline for atmospheric re-entry labs.' },
  { title: 'Gravity Lattice', detail: 'Adaptive UI fabric that bends to multi-modal triggers.' },
]

const scrollNarrative = [
  'Launch sequence initiated',
  'Cruising through the frictionless interface',
  'Landing at the portfolio observatory',
]

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const glow = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div className="min-h-screen relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_55%,#000000_90%)] opacity-90" />
        <motion.div
          style={{ scaleX: glow }}
          className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 origin-left"
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl bg-primary-500/20 cosmic-ring" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Hero */}
        <section className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
          >
            <span className="gradient-text">Mission Control · Mohmed Vaid</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-200 mb-8"
          >
            Designing propulsion-grade experiences for cosmic-scale applications.
            Think beyond pixels—think atmospheric control.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/portfolio"
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-semibold shadow-xl shadow-primary-500/40 transition-all transform hover:-translate-y-0.5"
            >
              Visit the Observatory
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-primary-500 rounded-full text-slate-100 font-semibold backdrop-blur-xl bg-white/5 hover:border-primary-400 transition-all"
            >
              Signal Mission Control
            </Link>
          </motion.div>
        </section>

        {/* Mission Highlights */}
        <section className="relative z-10">
          <div className="grid gap-8 md:grid-cols-3">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-effect rounded-2xl p-6 flex flex-col space-y-4 hover:shadow-[0_0_40px_rgba(14,165,233,0.25)]"
              >
                <p className="text-sm uppercase tracking-[0.4em] text-primary-300">Phase {index + 1}</p>
                <h3 className="text-2xl font-display font-semibold text-white">{mission.title}</h3>
                <p className="text-slate-300 leading-relaxed">{mission.detail}</p>
                <div className="text-xs uppercase text-slate-400 tracking-wide">
                  <span>launch ETA: immediate</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Scroll Narrative */}
        <section className="relative z-10">
          <div className="flex flex-col items-center space-y-10">
            <div className="w-full h-48 relative">
              <motion.div
                style={{ scaleY: glow }}
                className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-accent-400 to-primary-500 origin-top rounded-full mx-auto"
              />
              <div className="absolute inset-0 flex flex-col justify-between items-center">
                {scrollNarrative.map((text, index) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="text-center w-full"
                  >
                    <span className="text-slate-400 text-sm tracking-[0.3em] uppercase">
                      {index === 0 ? 'Ignition' : index === 2 ? 'Touchdown' : 'Cruise'}
                    </span>
                    <p className="text-lg md:text-xl font-semibold text-white mt-2">{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-sm uppercase text-slate-400 tracking-[0.5em]">
              Scroll to chart your orbit
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

