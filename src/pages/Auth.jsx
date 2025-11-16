import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Auth() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar/>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Connexion / Inscription</h1>
              <p className="mt-3 text-gray-600">Accédez à votre espace PixOff en toute simplicité.</p>
            </div>

            <div className="rounded-2xl border border-purple-100 bg-white p-8 shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="vous@exemple.com"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mot de passe</label>
                  <input type="password" className="mt-1 w-full rounded-xl border border-purple-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="••••••••"/>
                </div>
                <button type="submit" className="w-full rounded-full bg-purple-600 px-5 py-3 font-semibold text-white shadow-lg hover:bg-purple-700 transition-colors">Se connecter</button>
                <button type="button" className="w-full rounded-full bg-purple-50 px-5 py-3 font-semibold text-purple-700 border border-purple-200 hover:bg-purple-100 transition-colors">Créer un compte</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
