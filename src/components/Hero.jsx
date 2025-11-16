import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-purple-700 ring-1 ring-purple-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" /> Nouveauté
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-black tracking-tight text-gray-900">
            Éditez vos images avec l’IA en un clic
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-xl">
            PixOff transforme vos photos grâce à 6 outils IA puissants.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Link to="/features" className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors">
              Commencer maintenant
            </Link>
            <a href="#features" className="text-purple-700 hover:text-purple-800 font-medium">Voir les outils</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
    </section>
  )
}
