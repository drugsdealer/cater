import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Fleet from './components/Fleet'
import Features from './components/Features'
import Steps from './components/Steps'
import Community from './components/Community'
import RequestForm from './components/RequestForm'
import Footer from './components/Footer'
import LegalModal, { type LegalDoc } from './components/LegalModal'
import CookieBanner from './components/CookieBanner'
import ContactFab from './components/ContactFab'
import type { Boat } from './data/fleet'

export default function App() {
  const [legalDoc, setLegalDoc] = useState<LegalDoc>(null)
  const [selectedBoat, setSelectedBoat] = useState<Boat | null>(null)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fleet onSelect={setSelectedBoat} />
        <Features />
        <Steps />
        <Community />
        <RequestForm onLegal={setLegalDoc} selected={selectedBoat} />
      </main>
      <Footer onLegal={setLegalDoc} />

      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
      <CookieBanner onOpenPrivacy={() => setLegalDoc('privacy')} />
      <ContactFab />
    </>
  )
}
