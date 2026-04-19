import { useState } from 'react'
import { useContent } from '../../context/ContentContext'
import PageHero from '../../components/PageHero/PageHero'
import Button from '../../components/Button/Button'
import styles from './Kontakt.module.css'

export default function Kontakt() {
  const c = useContent()
  const k = c.kontakt
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
  }

  const hours = k.info_hours.split('\n')

  return (
    <>
      <PageHero label={k.page_label} title={k.page_h1} />

      <section className="section">
        <div className={`container ${styles.grid}`}>
          <div className={styles.formWrap}>
            <h2>{k.form_h2}</h2>
            <p>{k.form_text}</p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="nimi">Nimi *</label>
                  <input type="text" id="nimi" name="nimi" placeholder="Sinu nimi" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">E-post *</label>
                  <input type="email" id="email" name="email" placeholder="sinu@email.ee" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="telefon">Telefon</label>
                <input type="tel" id="telefon" name="telefon" placeholder="+372 5xxx xxxx" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="teema">Teema</label>
                <select id="teema" name="teema">
                  <option value="">Vali teema</option>
                  <option value="massaaž">Massaaž</option>
                  <option value="noustamine">Nõustamine</option>
                  <option value="loogastus">Lõõgastus</option>
                  <option value="kinkekaard">Kinkekaard</option>
                  <option value="muu">Muu</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="sonum">Sõnum *</label>
                <textarea id="sonum" name="sonum" rows={5} placeholder="Kirjuta oma küsimusest või soovist..." required />
              </div>
              <Button type="submit" variant="primary" full>{k.form_btn}</Button>
              {submitted && (
                <div className={styles.success}>{k.form_success}</div>
              )}
            </form>
          </div>

          <div className={styles.infoSide}>
            <h2>{k.info_h2}</h2>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>✉</div>
              <div>
                <h4>{k.info_email_label}</h4>
                <a href={`mailto:${k.info_email}`}>{k.info_email}</a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>✆</div>
              <div>
                <h4>{k.info_phone_label}</h4>
                <a href={`tel:${k.info_phone.replace(/\s/g, '')}`}>{k.info_phone}</a>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>●</div>
              <div>
                <h4>{k.info_location_label}</h4>
                <p>
                  {k.info_location}<br />
                  <small>{k.info_location_note}</small>
                </p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.infoIcon}>✎</div>
              <div>
                <h4>{k.info_hours_label}</h4>
                <p>{hours.map((line, i) => <span key={i}>{line}{i < hours.length - 1 && <br />}</span>)}</p>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h4>{k.info_social_label}</h4>
              <div className={styles.socialRow}>
                <a href={k.info_instagram_url} className={styles.socialLink} aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
                <a href={k.info_facebook_url} className={styles.socialLink} aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
