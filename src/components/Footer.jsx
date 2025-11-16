export default function Footer() {
  return (
    <footer className="mt-20 border-t border-purple-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} PixOff. Tous droits réservés.</p>
        <div className="text-sm text-gray-500 flex items-center gap-4">
          <a className="hover:text-purple-600" href="#">Confidentialité</a>
          <a className="hover:text-purple-600" href="#">Conditions</a>
          <a className="hover:text-purple-600" href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
