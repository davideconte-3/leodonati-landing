import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import TermsOfService from './pages/TermsOfService'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

function App() {
  return (
    <Router>
      <div className="App bg-black min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={
            <>
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>

        {/* Cookie Consent Banner - shown on all pages */}
        <CookieConsent />
      </div>
    </Router>
  )
}

export default App
