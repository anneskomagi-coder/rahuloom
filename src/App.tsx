import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Avaleht = lazy(() => import('./pages/Avaleht/Avaleht'))
const Minust = lazy(() => import('./pages/Minust/Minust'))
const Teenused = lazy(() => import('./pages/Teenused/Teenused'))
const Kontakt = lazy(() => import('./pages/Kontakt/Kontakt'))
const KKK = lazy(() => import('./pages/KKK/KKK'))
const Proov2 = lazy(() => import('./pages/Proov2/Proov2'))

export default function App() {
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
            <Route path="/proov-2" element={<Proov2 />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
