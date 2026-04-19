import { useState } from 'react'
import { useContent } from '../../context/ContentContext'
import PageHero from '../../components/PageHero/PageHero'
import CtaSection from '../../components/CtaSection/CtaSection'
import styles from './KKK.module.css'

interface FaqItem {
  q: string
  a: string
}

interface FaqGroup {
  title: string
  items: FaqItem[]
}

function FaqAccordion({ group }: { group: FaqGroup }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <div className={styles.faqGroup}>
      <h2 className={styles.faqGroupTitle}>{group.title}</h2>
      {group.items.map((item, i) => (
        <div key={i} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            aria-expanded={openIndex === i}
            onClick={() => toggle(i)}
          >
            <span>{item.q}</span>
            <span className={`${styles.faqIcon}${openIndex === i ? ` ${styles.faqIconOpen}` : ''}`}>+</span>
          </button>
          <div className={`${styles.faqAnswer}${openIndex === i ? ` ${styles.faqAnswerOpen}` : ''}`}>
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function KKK() {
  const c = useContent()
  const k = c.kkk

  const groups: FaqGroup[] = [
    {
      title: k.g1_title,
      items: [
        { q: k.g1_q1, a: k.g1_a1 },
        { q: k.g1_q2, a: k.g1_a2 },
        { q: k.g1_q3, a: k.g1_a3 },
        { q: k.g1_q4, a: k.g1_a4 },
      ],
    },
    {
      title: k.g2_title,
      items: [
        { q: k.g2_q1, a: k.g2_a1 },
        { q: k.g2_q2, a: k.g2_a2 },
        { q: k.g2_q3, a: k.g2_a3 },
        { q: k.g2_q4, a: k.g2_a4 },
      ],
    },
    {
      title: k.g3_title,
      items: [
        { q: k.g3_q1, a: k.g3_a1 },
        { q: k.g3_q2, a: k.g3_a2 },
        { q: k.g3_q3, a: k.g3_a3 },
      ],
    },
  ]

  return (
    <>
      <PageHero label={k.page_label} title={k.page_h1} />

      <section className="section">
        <div className={`container ${styles.faqContainer}`}>
          {groups.map((group, i) => (
            <FaqAccordion key={i} group={group} />
          ))}
        </div>
      </section>

      <CtaSection
        h2={k.cta_h2}
        text={k.cta_text}
        buttons={[{ label: k.cta_btn, to: '/kontakt' }]}
      />
    </>
  )
}
