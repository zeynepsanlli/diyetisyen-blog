import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Anasayfa' },
  { path: '/hakkimda', label: 'Hakkımda' },
  { path: '/hizmetler', label: 'Hizmetler' },
  { path: '/blog', label: 'Blog' },
  { path: '/iletisim', label: 'İletişim' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Ana menü">
        <NavLink className="brand" onClick={closeMenu} to="/">
          Diyetisyen Beyzanur Narbay
        </NavLink>
        <button
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Menüyü aç veya kapat"
          className="menu-toggle"
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
        <div
          className={isMenuOpen ? 'nav-links open' : 'nav-links'}
          id="primary-navigation"
        >
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              end={item.path === '/'}
              key={item.path}
              onClick={closeMenu}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
