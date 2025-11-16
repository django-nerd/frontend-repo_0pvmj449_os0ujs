import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturesGrid from '../components/FeaturesGrid'

function ToolCard({ title, desc }) {
  return (
    <div className="rounded-2xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all">
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{desc}</p>
      <button className="mt-4 inline-flex items-center justify-center rounded-full bg-purple-600 px-4 py-2 text-white font-semibold shadow-md hover:bg-purple-700 transition-colors">Utiliser cet outil</button>
    </div>
  )
}

export default function Features() {
  const list = [
    ['Supprimer l’arrière-plan','Retirez le fond de vos photos instantanément.'],
    ['Découpage de visage (Face Cutout)','Détourez automatiquement un visage avec précision.'],
    ['Effacer des objets','Supprimez un objet gênant sur votre image.'],
    ['Restaurer une ancienne image','Restaurez les vieilles photos abîmées en HD.'],
    ['PixOff AI','Transformations IA avancées pour vos images.'],
    ['Optimiser une photo','Améliorez la qualité, la netteté et les détails.'],
  ]

  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Fonctionnalités</h1>
            <p className="mt-3 text-gray-600">Une suite d’outils IA pour créer des images parfaites.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(([t,d]) => <ToolCard key={t} title={t} desc={d} />)}
          </div>
        </div>
      </section>
      <FeaturesGrid/>
      <Footer/>
    </div>
  )
}
