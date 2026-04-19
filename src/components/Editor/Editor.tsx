import { useState } from 'react'
import { useContentContext } from '../../context/ContentContext'
import styles from './Editor.module.css'

export default function Editor() {
  const [editing, setEditing] = useState(false)
  const [status, setStatus] = useState('')
  const { content } = useContentContext()

  async function handleSave() {
    if (!content) return
    setStatus('Salvestab...')

    try {
      const res = await fetch('/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content, null, 2),
      })
      const result = await res.json() as { ok: boolean }
      if (result.ok) {
        setStatus('✓ Salvestatud!')
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('✗ Viga!')
      }
    } catch {
      setStatus('✗ Viga!')
    }
  }

  return (
    <>
      {editing && (
        <style>{`
          [data-edit-key] {
            outline: 2px dashed #a8c4b4 !important;
            outline-offset: 3px;
            border-radius: 3px;
            cursor: text;
          }
          [data-edit-key]:hover {
            outline-color: #193626 !important;
            background: rgba(25,54,38,0.05);
          }
        `}</style>
      )}
      <div className={styles.toolbar}>
        <span className={styles.label}>✏️ Muuda tekste</span>
        <button onClick={() => { setEditing(e => !e); setStatus('') }}>
          {editing ? 'Lõpeta muutmine' : 'Lülita muutmine sisse'}
        </button>
        {editing && (
          <button className={styles.saveBtn} onClick={handleSave}>
            💾 Salvesta
          </button>
        )}
        {status && <span className={styles.status}>{status}</span>}
      </div>
    </>
  )
}
