import t from '../../content/teenused.json'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './Teenused.module.css'
const hobuneVees = '/hobune_vees.jpeg'
const hobuneLoust = '/hobune_pikali.jpeg'
const hobunePikali = '/revitavet.jpeg'

export default function Teenused() {

  const services = [
    {
      img: hobuneVees, alt: 'Massaaz. Hobune vees', reverse: false,
      label: t.s1_label, h3: t.s1_h3, text: t.s1_text,
      items: [t.s1_li1, t.s1_li2, t.s1_li3, t.s1_li4],
    },
    {
      img: hobuneLoust, alt: 'Püsikliendile. Hobuse kallistus', reverse: true,
      label: t.s2_label, h3: t.s2_h3, text: t.s2_text,
      items: [t.s2_li1, t.s2_li2, t.s2_li3, t.s2_li4],
    },
    {
      img: hobunePikali, alt: 'Revitavet. Infrapuna', reverse: false,
      label: t.s3_label, h3: t.s3_h3, text: t.s3_text,
      items: [t.s3_li1, t.s3_li2, t.s3_li3, t.s3_li4],
    },
  ]

  const priceCards = [
    {
      featured: false, badge: null, title: t.p1_title,
      rows: [
        [t.p1_r1_name, t.p1_r1_price], [t.p1_r2_name, t.p1_r2_price],
        [t.p1_r3_name, t.p1_r3_price], [t.p1_r4_name, t.p1_r4_price],
        [t.p1_r5_name, t.p1_r5_price],
      ],
    },
    {
      featured: true, badge: t.p2_badge, title: t.p2_title,
      rows: [
        [t.p2_r1_name, t.p2_r1_price], [t.p2_r2_name, t.p2_r2_price],
        [t.p2_r3_name, t.p2_r3_price], [t.p2_r4_name, t.p2_r4_price],
        [t.p2_r5_name, t.p2_r5_price],
      ],
    },
    {
      featured: false, badge: null, title: t.p3_title,
      rows: [
        [t.p3_r1_name, t.p3_r1_price], [t.p3_r2_name, t.p3_r2_price],
        [t.p3_r3_name, t.p3_r3_price], [t.p3_r4_name, t.p3_r4_price],
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
                  <span className={styles.label}>{s.label}</span>
                  <h3>{s.h3}</h3>
                  <p>{s.text}</p>
                  <div className={styles.priceCardBody}>
                  {priceCards[i].rows.map(([name, price], j) => (
                    <div key={j} className={styles.priceRow}>
                      <span>{name}</span>
                      <span className={styles.price}>{price}</span>
                    </div>
                  ))}
                </div>
                  {/* <ul className={styles.serviceList}>
                    {s.items.map((item, j) => <li key={j}>{item}</li>)}
                  </ul> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.label}>{t.prices_label}</span>
            <h2>{t.prices_h2}</h2>
            <p>{t.prices_text}</p>
          </div>
          <div className={styles.pricingGrid}>
            {priceCards.map((card, i) => (
              <div key={i} className={`${styles.priceCard}${card.featured ? ` ${styles.priceCardFeatured}` : ''}`}>
                <div className={styles.priceCardHeader}>
                  {card.badge && <span className={styles.badge}>{card.badge}</span>}
                  <h3>{card.title}</h3>
                </div>
                <div className={styles.priceCardBody}>
                  {card.rows.map(([name, price], j) => (
                    <div key={j} className={styles.priceRow}>
                      <span>{name}</span>
                      <span className={styles.price}>{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>{t.prices_note}</p>
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
