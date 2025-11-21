import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * 404 Not Found page
 */
export default function NotFoundPage() {
  return (
    <div className="pt-20 md:pt-32 pb-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-display font-bold mb-4 gradient-text">404</h1>
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4 text-slate-200">
            Page Not Found
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all hover:scale-105"
          >
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

