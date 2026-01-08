import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = Cookies.get('leo-donati-cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      try {
        const saved = JSON.parse(consent)
        setPreferences(saved)
      } catch (e) {
        setShowBanner(true)
      }
    }
  }, [])

  const savePreferences = (prefs) => {
    const consentData = {
      necessary: true,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      timestamp: new Date().toISOString()
    }

    // Save for 1 year
    Cookies.set('leo-donati-cookie-consent', JSON.stringify(consentData), { expires: 365 })
    setPreferences(consentData)
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptAll = () => {
    savePreferences({ analytics: true, marketing: true })
  }

  const acceptNecessary = () => {
    savePreferences({ analytics: false, marketing: false })
  }

  const handleCustomize = () => {
    setShowSettings(true)
  }

  const handleSaveCustom = () => {
    savePreferences(preferences)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-black/95 backdrop-blur-xl border border-white/10 rounded-none shadow-2xl">
            {!showSettings ? (
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      Utilizziamo i cookie
                    </h3>
                    <p className="text-sm md:text-base text-gray-300 max-w-3xl">
                      Utilizziamo cookie tecnici e, previo tuo consenso, cookie analitici e di profilazione di terze parti per migliorare la tua esperienza.
                      Puoi acconsentire all'utilizzo di tali tecnologie cliccando su "Accetta tutti".
                      {' '}
                      <Link to="/privacy-policy" className="text-white underline hover:text-gray-300">
                        Privacy Policy
                      </Link>
                      {' • '}
                      <Link to="/cookie-policy" className="text-white underline hover:text-gray-300">
                        Cookie Policy
                      </Link>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <button
                      onClick={acceptNecessary}
                      className="px-6 py-3 border border-white/20 text-white hover:bg-white/10
                               transition-all duration-300 text-sm font-medium whitespace-nowrap"
                    >
                      Solo necessari
                    </button>
                    <button
                      onClick={handleCustomize}
                      className="px-6 py-3 border border-white/20 text-white hover:bg-white/10
                               transition-all duration-300 text-sm font-medium whitespace-nowrap"
                    >
                      Personalizza
                    </button>
                    <button
                      onClick={acceptAll}
                      className="px-6 py-3 bg-white text-black hover:bg-gray-200
                               transition-all duration-300 text-sm font-medium whitespace-nowrap"
                    >
                      Accetta tutti
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Preferenze Cookie
                </h3>

                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 border border-white/10 rounded-none">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-white mb-1">Cookie Necessari</h4>
                      <p className="text-sm text-gray-400">
                        Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={true}
                        disabled
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 border border-white/10 rounded-none">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-white mb-1">Cookie Analitici</h4>
                      <p className="text-sm text-gray-400">
                        Questi cookie ci aiutano a capire come i visitatori interagiscono con il sito web.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 border border-white/10 rounded-none">
                    <div className="flex-1 pr-4">
                      <h4 className="font-semibold text-white mb-1">Cookie di Marketing</h4>
                      <p className="text-sm text-gray-400">
                        Questi cookie vengono utilizzati per mostrare annunci pertinenti ai tuoi interessi.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="w-5 h-5"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 px-6 py-3 border border-white/20 text-white hover:bg-white/10
                             transition-all duration-300 text-sm font-medium"
                  >
                    Indietro
                  </button>
                  <button
                    onClick={handleSaveCustom}
                    className="flex-1 px-6 py-3 bg-white text-black hover:bg-gray-200
                             transition-all duration-300 text-sm font-medium"
                  >
                    Salva preferenze
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
