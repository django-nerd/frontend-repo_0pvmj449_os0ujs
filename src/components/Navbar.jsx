import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-gray-700 hover:text-purple-600 transition-colors'
  const active = ({ isActive }) =>
    isActive ? 'text-purple-700 font-semibold' : linkBase

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-purple-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-md shadow-purple-200 grid place-items-center">
            <span className="text-white font-extrabold">P</span>
          </div>
          <span className="text-xl font-black tracking-tight">PixOff</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={active} end>Accueil</NavLink>
          <NavLink to="/features" className={active}>Fonctionnalités</NavLink>
          <NavLink to="/pricing" className={active}>Tarifs</NavLink>
          <NavLink to="/auth" className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors">Connexion</NavLink>
        </div>

        <button className="md:hidden p-2 rounded-lg border border-purple-200 text-gray-700" onClick={() => setOpen(v => !v)} aria-label="Menu">
          <Menu/>
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2 border-t border-purple-100 bg-white">
          <NavLink onClick={() => setOpen(false)} to="/" className="block py-2">Accueil</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/features" className="block py-2">Fonctionnalités</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/pricing" className="block py-2">Tarifs</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/auth" className="block py-2">Connexion</NavLink>
        </div>
      )}
    </header>
  )
}
