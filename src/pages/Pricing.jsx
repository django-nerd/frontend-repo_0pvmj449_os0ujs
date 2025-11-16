import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const plans = [
  { name: 'Starter', price: 'Gratuit', desc: 'Idéal pour tester', features: ['5 images / jour', 'Suppression de fond', 'Optimisation basique'] },
  { name: 'Pro', price: '12€ / mois', desc: 'Pour les créateurs', highlighted: true, features: ['Illimité personnel', 'Tous les 6 outils IA', 'Priorité de traitement', 'Export HD'] },
  { name: 'Business', price: '29€ / mois', desc: 'Équipes & marques', features: ['Utilisateurs multiples', 'Crédits partagés', 'Support prioritaire', 'API'] },
]

function Plan({ name, price, desc, features, highlighted }) {
  return (
    <div className={`relative rounded-3xl border ${highlighted ? 'border-purple-300 shadow-xl' : 'border-purple-100 shadow-md'} bg-white p-8 transition-all`}>
      {highlighted && <span className="absolute -top-3 right-6 rounded-full bg-purple-600 px-3 py-1 text-xs font-semibold text-white shadow">Populaire</span>}
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
      <p className="mt-6 text-3xl font-extrabold text-gray-900">{price}</p>
      <ul className="mt-6 space-y-2 text-sm text-gray-700">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500" /> {f}
          </li>
        ))}
      </ul>
      <button className={`mt-8 w-full rounded-full px-5 py-3 font-semibold text-white transition-colors ${highlighted ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'}`}>Choisir</button>
    </div>
  )
}

export default function Pricing() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Tarifs</h1>
            <p className="mt-3 text-gray-600">Choisissez le plan qui vous convient.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <Plan key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
