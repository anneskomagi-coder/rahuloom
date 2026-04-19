import { Link } from 'react-router-dom'
import { useContent } from '../../context/ContentContext'
import styles from './Footer.module.css'
const logo = '/loplik-logo-rahuloom.webp'

export default function Footer() {
  const c = useContent()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <Link to="/">{c.nav.avaleht}</Link>
          <Link to="/minust">{c.nav.minust}</Link>
          <Link to="/teenused">{c.nav.teenused}</Link>
          <Link to="/kontakt">{c.nav.kontakt}</Link>
        </nav>
        <p className={styles.copy}>{c.footer.copy}</p>
      </div>
    </footer>
  )
}
