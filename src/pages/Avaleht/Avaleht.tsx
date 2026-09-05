import { Link } from 'react-router-dom'
import a from '../../content/avaleht.json'
import Button from '../../components/Button/Button'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './Avaleht.module.css'
const hobune = '/hobune_vees.jpeg'

const galleryPhotos = [
  { src: '/hobune-masinaga.jpg', alt: 'Massaaž hobusega tallis', caption: 'tallis, hommikul' },
  { src: '/hobuse-kalli.jpg', alt: 'Hobuse kallistus', caption: 'kallistus' },
  { src: '/hobune_pikali.jpeg', alt: 'Hobune liivarannas', caption: 'rannas puhkamas' },
]

const whyPhotos = [
  { src: '/hobu-kasi.jpg', alt: 'Käsi hobuse kaelal', caption: 'rahulik puudutus' },
  { src: '/revitavet.jpeg', alt: 'RevitaVet infrapunatekk hobusel', caption: 'soe ja hubane' },
]

const howPhotos = [
  { src: '/hobu-hambad.jpg', alt: 'Naerev hobune karjamaal', caption: 'naerusuine sõber' },
  { src: '/hobuse-hambad.jpeg', alt: 'Hobune metsateel', caption: 'metsarajal' },
]

export default function Avaleht() {

  const whyItems = [
    { h3: a.why1_h3, text: a.why1_text },
    { h3: a.why2_h3, text: a.why2_text },
    { h3: a.why3_h3, text: a.why3_text },
    { h3: a.why4_h3, text: a.why4_text },
    { h3: a.why5_h3, text: a.why5_text },
  ]

  const howSteps = [a.how1_text, a.how2_text, a.how3_text, a.how4_text, a.how5_text]

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

      <div className={styles.scrapbook}>

        <section className={styles.gallerySection}>
          <div className={`container ${styles.galleryRow}`}>
            {galleryPhotos.map((photo, i) => (
              <div key={i} className={styles.pinnedPhoto} data-index={i}>
                <span className={styles.tape} />
                <img src={photo.src} alt={photo.alt} />
                <p className={styles.caption}>{photo.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.pageSection}>
          <div className={`container ${styles.introGrid}`}>
            <div className={styles.introText}>
              <span className={styles.label}>{a.intro_label}</span>
              {a.intro_h2 && <h2>{a.intro_h2}</h2>}
              <p>{a.intro_text}</p>
              <Button to="/minust" variant="secondary">{a.intro_btn}</Button>
            </div>
            <div className={styles.introPhotoWrap}>
              <span className={styles.tape} />
              <img src={hobune} alt="Valge hobune" className={styles.introPhoto} />
            </div>
          </div>
        </section>

        <section className={styles.pageSection}>
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
                { h3: a.card4_h3, text: a.card4_text },
              ] as const).map((card, i) => (
                <Link key={i} to="/teenused" className={styles.card}>
                  <h3>{card.h3}</h3>
                  <p>{card.text}</p>
                  <span className={styles.linkArrow}>Loe rohkem &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pageSection}>
          <div className={`container ${styles.whySection}`}>
            <div className={styles.whyMain}>
              <div className={styles.sectionHeaderLeft}>
                <span className={styles.label}>{a.why_label}</span>
                <h2>{a.why_h2}</h2>
              </div>
              <div className={styles.whyGrid}>
                {whyItems.map((item, i) => (
                  <div key={i} className={styles.whyItem}>
                    <h3>{item.h3}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.miniGallery}>
              {whyPhotos.map((photo, i) => (
                <div key={i} className={`${styles.pinnedPhoto} ${styles.pinnedPhotoSmall}`}>
                  <span className={styles.tape} />
                  <img src={photo.src} alt={photo.alt} />
                  <p className={styles.caption}>{photo.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pageSection}>
          <div className={`container ${styles.howSection}`}>
            <div className={styles.miniGallery}>
              {howPhotos.map((photo, i) => (
                <div key={i} className={`${styles.pinnedPhoto} ${styles.pinnedPhotoSmall}`}>
                  <span className={styles.tape} />
                  <img src={photo.src} alt={photo.alt} />
                  <p className={styles.caption}>{photo.caption}</p>
                </div>
              ))}
            </div>
            <div className={styles.howMain}>
              <div className={styles.sectionHeaderLeft}>
                <span className={styles.label}>{a.how_label}</span>
                <h2>{a.how_h2}</h2>
              </div>
              <ol className={styles.howList}>
                {howSteps.map((step, i) => (
                  <li key={i} className={styles.howStep}>
                    <span className={styles.howNumber}>{i + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className={styles.quoteSection}>
          <div className="container">
            <blockquote>{a.quote}</blockquote>
          </div>
        </section>

      </div>

      <CtaSection
        h2={a.cta_h2}
        text={a.cta_text}
        buttons={[{ label: a.cta_btn, to: '/kontakt' }]}
      />
    </>
  )
}
