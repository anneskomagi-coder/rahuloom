import styles from './Proov2.module.css'

const emblem = '/rahuloom-emblem.png'
const darkCard = '/rahuloom-dark-card.png'
const cardMock = '/rahuloom-cardmock.png'
const embroidery = '/rahuloom-embroidery.png'
const decal = '/rahuloom-decal.png'

const values = [
  { icon: 'connection', h3: 'ÜHENDUS', text: 'Usaldus, lähedus ja koos liikumine.' },
  { icon: 'sun', h3: 'SOOJUS JA TAASTUMINE', text: 'Infrapunateraapia sümboliseeritud soojusena, mis toetab keha loomulikku taastumist.' },
  { icon: 'leaf', h3: 'LOODUSLÄHEDUS', text: 'Kooskõlas looduse rütmidega, looduslikud meetodid ja holistiline lähenemine.' },
  { icon: 'hand', h3: 'PUUDUTUS JA HOOLIVUS', text: 'Õrn puudutus, mis loob rahu, vabastab pingeid ja toetab keha tasakaalu.' },
  { icon: 'heart', h3: 'RAHU JA TASAKAAL', text: 'Kehas kergus ja meeles rahu, et liikumine oleks vaba ja loomulik.' },
]

const strip = [
  { icon: 'hand', label: 'PUUDUTUS', text: 'Õrn ja teadlik lähenemine.' },
  { icon: 'sun', label: 'INFRAPUNA', text: 'Soojuse jõud keha taastumiseks.' },
  { icon: 'leaf', label: 'LOODUS', text: 'Looduslikud meetodid ja keskkond.' },
  { icon: 'horse', label: 'PROFESSIONAALSUS', text: 'Aastane kogemus ja teadmised.' },
  { icon: 'heart', label: 'HOOLIVUS', text: 'Iga loom on tähtis. Iga puudutus loeb.' },
]

const palette = [
  { hex: '#1F3A2D' },
  { hex: '#4C6B4F' },
  { hex: '#A8A186' },
  { hex: '#E9E0CF' },
  { hex: '#C89D5A' },
]

function Icon({ name }: { name: string }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }
  switch (name) {
    case 'connection':
      return (
        <svg {...common}>
          <path d="M8 15c-2.5-2-3-6 0-8 2 3 5 3 7 0 3 2 2.6 6 0 8" />
          <circle cx="8" cy="16.5" r="1.4" />
          <circle cx="15" cy="16.5" r="1.4" />
        </svg>
      )
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="3.2" />
          <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8" />
        </svg>
      )
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M6 19c8 0 12-5 12-14-9 0-13 4-13 12 0 .7.03 1.4.09 2" />
          <path d="M6 19c1-3 3-6 8-9" />
        </svg>
      )
    case 'hand':
      return (
        <svg {...common}>
          <path d="M8 12.5V6.2a1.3 1.3 0 0 1 2.6 0V11" />
          <path d="M10.6 11V5a1.3 1.3 0 0 1 2.6 0v6" />
          <path d="M13.2 11V6.2a1.3 1.3 0 0 1 2.6 0V13" />
          <path d="M8 12.5c0-1-.6-1.6-1.4-1.8A1.3 1.3 0 0 0 5 12v2.8C5 18.8 7.6 21 11 21c3.6 0 5.8-2 5.8-5.4V9.6" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...common}>
          <path d="M12 20.2S4 15.4 4 9.8C4 6.6 6.4 5 8.8 5c1.5 0 2.8.8 3.2 2 .4-1.2 1.7-2 3.2-2 2.4 0 4.8 1.6 4.8 4.8 0 5.6-8 10.4-8 10.4Z" />
        </svg>
      )
    case 'horse':
      return (
        <svg {...common}>
          <path d="M6 20c.3-3 1-5 1-7 0-4 2.2-7 5.5-7 2.8 0 4.5 2 4.5 4.3 0 1.4-.6 2.3-1.6 3.2" />
          <path d="M13 6.3 15.2 4l1 1.6L18 5l-.6 2.4 1.6.6-2 1.6" />
          <path d="M9.5 14c0 2.4.6 4.3 1 6" />
          <circle cx="14.6" cy="7.4" r=".4" fill="currentColor" />
        </svg>
      )
    default:
      return null
  }
}

export default function Proov2() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.emblemCol}>
            <img src={emblem} alt="Rahuloom — loomamassaaž ja infrapunateraapia" className={styles.emblem} />
          </div>

          <ul className={styles.valuesList}>
            {values.map((v) => (
              <li key={v.h3} className={styles.valueRow}>
                <span className={styles.valueIcon}>
                  <Icon name={v.icon} />
                </span>
                <span>
                  <span className={styles.valueTitle}>{v.h3}</span>
                  <span className={styles.valueText}>{v.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.showcase}>
        <div className={styles.showcaseGrid}>
          <img src={darkCard} alt="Rahuloom logo tumerohelisel taustal" className={styles.tileWide} />
          <img src={cardMock} alt="Rahuloom visiitkaardi mockup" className={styles.tileWide} />
          <div className={styles.tileStack}>
            <img src={embroidery} alt="Rahuloom logo tikandina" className={styles.tileHalf} />
            <img src={decal} alt="Rahuloom logo autokleebisena" className={styles.tileHalf} />
          </div>
        </div>
      </section>

      <section className={styles.paletteSection}>
        <div className={styles.swatches}>
          {palette.map((p) => (
            <div key={p.hex} className={styles.swatch}>
              <span className={styles.swatchColor} style={{ background: p.hex }} />
              <span className={styles.swatchHex}>{p.hex}</span>
            </div>
          ))}
        </div>

        <ul className={styles.strip}>
          {strip.map((s) => (
            <li key={s.label} className={styles.stripItem}>
              <span className={styles.stripIcon}>
                <Icon name={s.icon} />
              </span>
              <span className={styles.stripLabel}>{s.label}</span>
              <p className={styles.stripText}>{s.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
