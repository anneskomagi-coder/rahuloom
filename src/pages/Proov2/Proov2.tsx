import styles from './Proov2.module.css'

const emblem = '/rahuloom-emblem.png'
const hobuneLoust = '/hobune_loust.jpg.webp'
const hobunePikali = '/hobune_pikali.jpeg'
const hobuneVees = '/hobune_vees.jpeg'
const hobuneValge = '/hobune_valge.png.webp'

const values = [
  { icon: 'connection', h3: 'ÜHENDUS', text: 'Usaldus, lähedus ja koos liikumine.' },
  { icon: 'sun', h3: 'SOOJUS JA TAASTUMINE', text: 'Infrapunateraapia sümboliseeritud soojusena, mis toetab keha loomulikku taastumist.' },
  { icon: 'leaf', h3: 'LOODUSLÄHEDUS', text: 'Kooskõlas looduse rütmidega, looduslikud meetodid ja holistiline lähenemine.' },
  { icon: 'hand', h3: 'PUUDUTUS JA HOOLIVUS', text: 'Õrn puudutus, mis loob rahu, vabastab pingeid ja toetab keha tasakaalu.' },
  { icon: 'heart', h3: 'RAHU JA TASAKAAL', text: 'Kehas kergus ja meeles rahu, et liikumine oleks vaba ja loomulik.' },
]

const strip = [
  { icon: 'phone', label: '+372 5804 5288', text: '' },
  { icon: 'globe', label: 'www.rahuloom.com', text: '' },
  { icon: 'mail', label: 'ann.rahuloom@gmail.com', text: '' },
  { icon: 'pin', label: 'Kokkuleppel üle Eesti', text: '' },
  { icon: 'heart', label: 'Hobused ruulivad', text: '' },
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
    case 'phone':
      return (
        <svg {...common} strokeWidth={1.4}>
          <path d="M7 3.5c.6 0 1.1.4 1.3.9l1 2.4c.2.5 0 1-.3 1.4L7.8 9.6c-.3.3-.3.7-.1 1a11 11 0 0 0 5.7 5.7c.3.2.7.2 1-.1l1.4-1.2c.4-.3.9-.5 1.4-.3l2.4 1c.5.2.9.7.9 1.3v2c0 1-.9 1.8-1.9 1.6C11.9 19.4 4.6 12.1 3.4 5.4 3.2 4.4 4 3.5 5 3.5Z" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common} strokeWidth={1.4}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.3 2.3 3.5 5.2 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.2-3.5-8.5S9.7 5.8 12 3.5Z" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common} strokeWidth={1.4}>
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="m4.5 7 6.6 5a1.5 1.5 0 0 0 1.8 0l6.6-5" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common} strokeWidth={1.4}>
          <path d="M12 21.5S5 15 5 9.8a7 7 0 0 1 14 0c0 5.2-7 11.7-7 11.7Z" />
          <circle cx="12" cy="9.5" r="2.4" />
        </svg>
      )
    case 'paw':
      return (
        <svg {...common} viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <ellipse cx="12" cy="15.5" rx="5.6" ry="4.6" />
          <ellipse cx="5.2" cy="10.4" rx="2.1" ry="2.7" transform="rotate(-18 5.2 10.4)" />
          <ellipse cx="9.6" cy="6.3" rx="2" ry="2.7" transform="rotate(-8 9.6 6.3)" />
          <ellipse cx="14.4" cy="6.3" rx="2" ry="2.7" transform="rotate(8 14.4 6.3)" />
          <ellipse cx="18.8" cy="10.4" rx="2.1" ry="2.7" transform="rotate(18 18.8 10.4)" />
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
          <img src={hobuneLoust} alt="Hobune heinamaal" className={styles.tileWide} />
          <img src={hobuneVees} alt="Hobune ja inimene meres" className={styles.tileWide} />
          <div className={styles.tileStack}>
            <img src={hobuneValge} alt="Õrn puudutus hobuse laubal" className={styles.tileHalf} />
            <img src={hobunePikali} alt="Hobune lamamas liival" className={styles.tileHalf} />
          </div>
        </div>
      </section>

      <section className={styles.paletteSection}>
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
