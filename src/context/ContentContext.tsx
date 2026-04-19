import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Content } from '../types/content'

interface ContentContextValue {
  content: Content | null
  updateContent: (updated: Content) => void
}

const ContentContext = createContext<ContentContextValue | null>(null)

export function ContentProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Content | null>(null)

  useEffect(() => {
    fetch('/content.json')
      .then(r => r.json())
      .then(setContent)
      .catch(console.error)
  }, [])

  function updateContent(updated: Content) {
    setContent(updated)
  }

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent(): Content {
  const ctx = useContext(ContentContext)
  if (!ctx || !ctx.content) throw new Error('useContent must be used within ContentProvider with loaded content')
  return ctx.content
}

export function useContentContext() {
  const ctx = useContext(ContentContext)
  if (!ctx) throw new Error('useContentContext must be used within ContentProvider')
  return ctx
}
