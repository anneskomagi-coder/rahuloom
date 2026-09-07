import m from '../../content/minust.json'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './Minust.module.css'
const hobune = '/hobune-masinaga.jpg'

export default function Minust() {

  return (
    <>

      <section className="section">
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <img src={hobune} alt="Hobune pikali" className="content-img about-ph" />
          </div>
         <div className={styles.aboutText}>
            <h2>{m.about_h2}</h2>
            <p>{m.about_p1}</p>
      
          <p>{m.approach_p1}</p>
          <p>{m.approach_p2}</p>
          </div> 
        </div>
      </section>

      <section className="section bg-soft">
        <div className={`container ${styles.eduSection}`}>
          <div className={styles.sectionHeader}>
            <h2>{m.edu_h2}</h2>
          </div>
          <ul className={styles.eduList}>
            {m.edu_items.map((item, i) => (
              <li key={i} className={styles.eduItem}>
                {item.text}
                {item.subitems && (
                  <ul className={styles.eduSubList}>
                    {item.subitems.map((sub, j) => (
                      <li key={j} className={styles.eduSubItem}>{sub}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* <section className="section">
        <div className={`container ${styles.approachSection}`}>
          <span className={styles.label}>{m.approach_label}</span>
          <h2>{m.approach_h2}</h2>
          <p>{m.approach_p1}</p>
          <p>{m.approach_p2}</p>
        </div>
      </section> */}

      <CtaSection
        h2={""}
        text={""}
        buttons={[
          { label: m.cta_btn1, to: '/teenused', variant: 'primary' },
          { label: m.cta_btn2, to: '/kontakt', variant: 'outline' },
        ]}
      />
    </>
  )
}
