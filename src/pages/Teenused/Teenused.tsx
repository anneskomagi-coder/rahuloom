import t from '../../content/teenused.json'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './Teenused.module.css'
const hobuneVees = '/hobune_vees.jpeg'
const hobuneLoust = '/hobune_pikali.jpeg'
const revitavet = '/revitavet.jpeg'
const hobuseKalli = '/hobuse-kalli.jpg'

export default function Teenused() {

  const services = [
    {
      img: hobuneVees, alt: 'Massaaž. Hobune vees', reverse: false,
      label: t.s1_label, h3: t.s1_h3, text: t.s1_text,
      rows: [
        [t.s1_r1_name, t.s1_r1_price, false],
        [t.s1_r2_name, t.s1_r2_price, true],
        [t.s1_r3_name, t.s1_r3_price, false],
        [t.s1_r4_name, t.s1_r4_price, false],
      ],
    },
    {
      img: hobuneLoust, alt: 'Püsikliendile. Hobuse kallistus', reverse: true,
      label: t.s2_label, h3: t.s2_h3, text: t.s2_text,
      rows: [
        [t.s2_r1_name, t.s2_r1_price, false],
        [t.s2_r2_name, t.s2_r2_price, false],
      ],
    },
    {
      img: revitavet, alt: 'Revitavet. Infrapuna', reverse: false,
      label: t.s3_label, h3: t.s3_h3, text: t.s3_text,
      rows: [
        [t.s3_r1_name, t.s3_r1_price, false],
      ],
    },
    {
      img: hobuseKalli, alt: 'Koera massaaž', reverse: true,
      label: t.s4_label, h3: t.s4_h3, text: t.s4_text,
      rows: [
        [t.s4_r1_name, t.s4_r1_price, false],
      ],
    },
  ]

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
                <div>
                  <img src={s.img} alt={s.alt} className="content-img service-ph" />
                </div>
                <div className={styles.serviceBlockText}>
                  {s.label && <span className={styles.label}>{s.label}</span>}
                  <h3>{s.h3}</h3>
                  {s.text && <p>{s.text}</p>}
                  <div className={styles.priceCardBody}>
                    {s.rows.map(([name, price, featured], j) => (
                      <div key={j} className={`${styles.priceRow}${featured ? ` ${styles.priceRowFeatured}` : ''}`}>
                        {featured && <span className={styles.badge}>Populaarne</span>}
                        <div className={styles.priceRowInner}>
                          <span>{name}</span>
                          <span className={styles.price}>{price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>{t.services_note}</p>
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
