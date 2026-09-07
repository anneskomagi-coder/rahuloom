import t from '../../content/teenused.json'
import h from '../../content/hinnad.json'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './Teenused.module.css'
const hobuneVees = '/hobune_vees.jpeg'
const hobuneLoust = '/hobune_pikali.jpeg'
const revitavet = '/revitavet.jpeg'
const revitavetHobused = '/revita-vet-hobused.jpg'
const koer = '/ann-koer-w.jpg'

const serviceImages = [
  { img: hobuneVees, alt: 'Massaaž. Hobune vees', reverse: false },
  { img: hobuneLoust, alt: 'Püsikliendile. Hobuse kallistus', reverse: true },
  { img: revitavet, img2: revitavetHobused, alt: 'Revitavet. Infrapuna', reverse: false },
  { img: koer, alt: 'Koera massaaž', reverse: true },
]

export default function Teenused() {

  const services = h.services.map((service, i) => ({
    ...service,
    ...serviceImages[i],
  }))

  return (
    <>
      <section className="section">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>{t.services_h2}</h2>
            <p>{t.services_text}</p>
          </div>
          <div className={styles.serviceBlocks}>
            {services.map((s, i) => (
              <div key={i} className={`${styles.serviceBlock}${s.reverse ? ` ${styles.serviceBlockReverse}` : ''}`}>
                <div className={styles.servicePhotos}>
                  <img src={s.img} alt={s.alt} className="content-img service-ph" />
                  {'img2' in s && s.img2 && (
                    <img src={s.img2} alt={s.alt} className="content-img service-ph" />
                  )}
                </div>
                <div className={styles.serviceBlockText}>
                  {s.label && <span className={styles.label}>{s.label}</span>}
                  <h3>{s.title}</h3>
                  {s.text && <p>{s.text}</p>}
                  {'details' in s && Array.isArray(s.details) && s.details.map((para, k) => (
                    <p key={k} className={styles.serviceDetail}>{para}</p>
                  ))}
                  <div className={styles.priceCardBody}>
                    {s.rows.map((row, j) => (
                      <div key={j} className={`${styles.priceRow}${row.featured ? ` ${styles.priceRowFeatured}` : ''}`}>
                        {row.featured && <span className={styles.badge}>Populaarne</span>}
                        <div className={styles.priceRowInner}>
                          <span>{row.name}</span>
                          <span className={styles.price}>{row.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>{h.services_note}</p>
        </div>
      </section>

      <CtaSection
        h2={t.cta_h2}
        text={t.cta_text}
        buttons={[{ label: t.cta_btn, to: '/kontakt' }]}
      />
    </>
  )
}
