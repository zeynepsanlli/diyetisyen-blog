import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Anasayfa' },
  { path: '/hakkimda', label: 'Hakkımda' },
  { path: '/hizmetler', label: 'Hizmetler' },
  { path: '/blog', label: 'Blog' },
  { path: '/iletisim', label: 'İletişim' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Ana menü">
        <NavLink className="brand" to="/">
          Diyetisyen Beyzanur Narbay
        </NavLink>
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              end={item.path === '/'}
              key={item.path}
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
