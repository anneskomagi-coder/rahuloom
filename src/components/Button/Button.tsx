import { Link } from 'react-router-dom'
import styles from './Button.module.css'

type Variant = 'primary' | 'outline' | 'secondary'

interface ButtonProps {
  to?: string
  href?: string
  variant?: Variant
  full?: boolean
  type?: 'submit' | 'button'
  onClick?: () => void
  disabled?: boolean
  children: React.ReactNode
}

export default function Button({ to, href, variant = 'primary', full, type, onClick, disabled, children }: ButtonProps) {
  const className = [styles.btn, styles[variant], full ? styles.full : ''].filter(Boolean).join(' ')

  if (to) return <Link to={to} className={className}>{children}</Link>
  if (href) return <a href={href} className={className}>{children}</a>
  return <button type={type ?? 'button'} className={className} onClick={onClick} disabled={disabled}>{children}</button>
}
