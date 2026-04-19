import styles from './PageHero.module.css'

interface PageHeroProps {
  label: string
  title: string
}

export default function PageHero({ label, title }: PageHeroProps) {
  return (
    <section className={styles.pageHero}>
      <div className="container">
        <span className={styles.label}>{label}</span>
        <h1>{title}</h1>
      </div>
    </section>
  )
}
