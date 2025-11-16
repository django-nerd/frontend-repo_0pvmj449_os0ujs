import { motion } from 'framer-motion'
import { Eraser, Image as ImageIcon, Stars, UserRound, Sparkles, Wand2 } from 'lucide-react'

const features = [
  {
    title: 'Supprimer l’arrière-plan',
    desc: 'Retirez le fond de vos photos instantanément.',
    icon: ImageIcon,
  },
  {
    title: 'Découpage de visage (Face Cutout)',
    desc: 'Détourez automatiquement un visage avec précision.',
    icon: UserRound,
  },
  {
    title: 'Effacer des objets',
    desc: 'Supprimez un objet gênant sur votre image.',
    icon: Eraser,
  },
  {
    title: 'Restaurer une ancienne image',
    desc: 'Restaurez les vieilles photos abîmées en HD.',
    icon: Wand2,
  },
  {
    title: 'PixOff AI',
    desc: 'Transformations IA avancées pour vos images.',
    icon: Stars,
  },
  {
    title: 'Optimiser une photo',
    desc: 'Améliorez la qualité, la netteté et les détails.',
    icon: Sparkles,
  },
]

export default function FeaturesGrid({ cta = false }) {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Nos 6 fonctionnalités IA</h2>
          <p className="mt-3 text-gray-600">Des outils rapides, précis et simples d’utilisation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group rounded-2xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
              <div className="h-12 w-12 rounded-full bg-purple-50 text-purple-600 grid place-items-center shadow-inner shadow-purple-100 group-hover:scale-105 transition-transform">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {cta && (
          <div className="text-center mt-10">
            <a href="/features" className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-white font-semibold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-colors">Utiliser les outils</a>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-20 h-40 bg-gradient-to-b from-white to-purple-50/60" />
    </section>
  )
}
