import Button from '../Button/Button'
import styles from './CtaSection.module.css'

interface CtaBtn {
  label: string
  to?: string
  variant?: 'primary' | 'outline'
}

interface CtaSectionProps {
  h2: string
  text: string
  buttons: CtaBtn[]
}

export default function CtaSection({ h2, text, buttons }: CtaSectionProps) {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.inner}`}>
        <h2>{h2}</h2>
        <p>{text}</p>
        <div className={styles.btns}>
          {buttons.map((btn, i) => (
            <Button key={i} to={btn.to} variant={btn.variant ?? 'primary'}>{btn.label}</Button>
          ))}
        </div>
      </div>
    </section>
  )
}
