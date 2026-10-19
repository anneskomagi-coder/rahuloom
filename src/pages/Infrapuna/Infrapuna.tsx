import c from '../../content/infrapuna.json'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './Infrapuna.module.css'
const revitavet = '/revitavet.jpeg'
const revitavetHobused = '/revita-vet-hobused.jpg'

export default function Infrapuna() {

  return (
    <>
      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.photos}>
            <img src={revitavet} alt="Hobune RevitaVet infrapunatekiga" className="content-img service-ph" />
            <img src={revitavetHobused} alt="Hobused RevitaVet infrapunatekkidega" className="content-img service-ph" />
          </div>
          <div className={styles.text}>
            {c.label && <span className={styles.label}>{c.label}</span>}
            <h2>{c.title}</h2>
            {c.details.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        h2={c.cta_h2}
        text={c.cta_text}
        buttons={[{ label: c.cta_btn, to: '/kontakt' }]}
      />
    </>
  )
}
