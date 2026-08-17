import m from '../../content/minust.json'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './Minust.module.css'
const hobune = '/hobune-masinaga.jpg'

export default function Minust() {

  const values = [
    { icon: '♡', h3: m.value1_h3, text: m.value1_text },
    { icon: '■', h3: m.value2_h3, text: m.value2_text },
    { icon: '✦', h3: m.value3_h3, text: m.value3_text },
    { icon: '◆', h3: m.value4_h3, text: m.value4_text },
  ]

  const edu = [
    { year: m.edu1_year, title: m.edu1_title, text: m.edu1_text },
    { year: m.edu2_year, title: m.edu2_title, text: m.edu2_text },
    { year: m.edu3_year, title: m.edu3_title, text: m.edu3_text },
    { year: m.edu4_year, title: m.edu4_title, text: m.edu4_text },
  ]

  return (
    <>

      <section className="section">
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <img src={hobune} alt="Hobune pikali" className="content-img about-ph" />
          </div>
          <div className={styles.aboutText}>
            <span className={styles.label}>{m.about_label}</span>
            <h2>{m.about_h2}</h2>
            <p>{m.about_p1}</p>
            <p>{m.about_p2}</p>
            <p>{m.about_p3}</p>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.label}>{m.values_label}</span>
            <h2>{m.values_h2}</h2>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={i} className={styles.valueItem}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <h3>{v.h3}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.eduSection}`}>
          <div className={styles.sectionHeader}>
            <span className={styles.label}>{m.edu_label}</span>
            <h2>{m.edu_h2}</h2>
          </div>
          <div className={styles.eduList}>
            {edu.map((e, i) => (
              <div key={i} className={styles.eduItem}>
                <span className={styles.eduYear}>{e.year}</span>
                <div>
                  <h4>{e.title}</h4>
                  <p>{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        h2={m.cta_h2}
        text={m.cta_text}
        buttons={[
          { label: m.cta_btn1, to: '/teenused', variant: 'primary' },
          { label: m.cta_btn2, to: '/kontakt', variant: 'outline' },
        ]}
      />
    </>
  )
}
