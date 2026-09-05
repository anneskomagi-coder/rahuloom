import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import c from '../../content/shared.json'
import styles from './Header.module.css'
const logo = '/rahuloom-logo-white.webp'

export default function Header() {
  const [open, setOpen] = useState(false)

  function closeNav() { setOpen(false) }

  return (
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
        <nav className={`${styles.nav}${open ? ` ${styles.open}` : ''}`}>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? styles.active : ''} onClick={closeNav}>{c.nav.avaleht}</NavLink></li>
            <li><NavLink to="/minust" className={({ isActive }) => isActive ? styles.active : ''} onClick={closeNav}>{c.nav.minust}</NavLink></li>
            <li><NavLink to="/teenused" className={({ isActive }) => isActive ? styles.active : ''} onClick={closeNav}>{c.nav.teenused}</NavLink></li>
            <li><NavLink to="/kontakt" className={({ isActive }) => isActive ? styles.active : ''} onClick={closeNav}>{c.nav.kontakt}</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
