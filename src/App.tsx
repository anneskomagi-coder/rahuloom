import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ContentProvider, useContentContext } from './context/ContentContext'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Editor from './components/Editor/Editor'

const Avaleht = lazy(() => import('./pages/Avaleht/Avaleht'))
const Minust = lazy(() => import('./pages/Minust/Minust'))
const Teenused = lazy(() => import('./pages/Teenused/Teenused'))
const Kontakt = lazy(() => import('./pages/Kontakt/Kontakt'))
const KKK = lazy(() => import('./pages/KKK/KKK'))

const isLocalhost = typeof window !== 'undefined' &&
  /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)

function AppShell() {
  const { content } = useContentContext()

  if (!content) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--mid)', fontFamily: 'var(--font)' }}>Laeb…</p>
      </div>
    )
  }

  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Avaleht />} />
            <Route path="/minust" element={<Minust />} />
            <Route path="/teenused" element={<Teenused />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/kkk" element={<KKK />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      {isLocalhost && <Editor />}
    </>
  )
}

export default function App() {
  return (
    <ContentProvider>
      <AppShell />
    </ContentProvider>
  )
}
