import { Link } from 'react-router-dom'
import { useContent } from '../../context/ContentContext'
import Button from '../../components/Button/Button'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './Avaleht.module.css'
const hobune = '/hobune_vees.jpeg'

export default function Avaleht() {
  const c = useContent()
  const a = c.avaleht

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>{a.hero_subtitle}</p>
          <h1>{a.hero_h1}</h1>
          <p className={styles.heroText}>{a.hero_text}</p>
          <div className={styles.heroBtns}>
            <Button to="/kontakt" variant="primary">{a.hero_btn_primary}</Button>
            <Button to="/teenused" variant="outline">{a.hero_btn_outline}</Button>
          </div>
        </div>
      </section>

      <section className={`section ${styles.intro ?? ''}`}>
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introText}>
            <span className={styles.label}>{a.intro_label}</span>
            <h2>{a.intro_h2}</h2>
            <p>{a.intro_text}</p>
            <Button to="/minust" variant="secondary">{a.intro_btn}</Button>
          </div>
          <div>
            <img src={hobune} alt="Valge hobune" className="content-img intro-ph" />
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.label}>{a.services_label}</span>
            <h2>{a.services_h2}</h2>
            <p>{a.services_text}</p>
            <Button to="/teenused" variant="primary">{a.cards_btn}</Button>
          </div>
          <div className={styles.cards}>
            {([
              { h3: a.card1_h3, text: a.card1_text },
              { h3: a.card2_h3, text: a.card2_text },
              { h3: a.card3_h3, text: a.card3_text },
            ] as const).map((card, i) => (
              <div key={i} className={styles.card}>
                <h3>{card.h3}</h3>
                <p>{card.text}</p>
                <Link to="/teenused" className={styles.linkArrow}>Loe rohkem &rarr;</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.quoteSection}>
        <div className="container">
          <blockquote>{a.quote}</blockquote>
        </div>
      </section>

      <CtaSection
        h2={a.cta_h2}
        text={a.cta_text}
        buttons={[{ label: a.cta_btn, to: '/kontakt' }]}
      />
    </>
  )
}
