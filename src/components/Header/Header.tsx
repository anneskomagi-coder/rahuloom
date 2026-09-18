import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import c from '../../content/shared.json'
import styles from './Header.module.css'
const logo = '/rahuloom-logo-white.webp'

const links = [
  { to: '/', label: c.nav.avaleht, end: true },
  { to: '/minust', label: c.nav.minust },
  { to: '/teenused', label: c.nav.teenused },
  { to: '/kontakt', label: c.nav.kontakt },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  function closeNav() { setOpen(false) }

  function renderLinks() {
    return links.map(link => (
      <li key={link.to}>
        <NavLink
          to={link.to}
          end={link.end}
          className={({ isActive }) => isActive ? styles.active : ''}
          onClick={closeNav}
        >
          {link.label}
        </NavLink>
      </li>
    ))
  }

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>
          <NavLink to="/" className={styles.logo} onClick={closeNav}>
            <img src={logo} alt="Logo" />
          </NavLink>
          <button
            className={styles.toggle}
            aria-label="Menüü"
            onClick={() => setOpen(o => !o)}
          >
            &#9776;
          </button>
          <nav className={styles.nav}>
            <ul>{renderLinks()}</ul>
          </nav>
        </div>
      </header>
      <nav className={`${styles.mobileNav}${open ? ` ${styles.open}` : ''}`}>
        <ul>{renderLinks()}</ul>
      </nav>
    </>
  )
}
