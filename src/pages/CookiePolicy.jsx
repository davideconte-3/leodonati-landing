import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link to="/" className="inline-block mb-4 hover:opacity-70 transition-opacity">
            <img src="/logo_white.png" alt="Leo Donati" className="h-10" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6 py-12 md:py-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Cookie Policy</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p className="text-sm text-gray-500 mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web.
              Vengono utilizzati per far funzionare il sito in modo efficiente e fornire informazioni ai proprietari del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Come Utilizziamo i Cookie</h2>
            <p className="mb-4">
              Utilizziamo diverse categorie di cookie sul nostro sito web:
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">2.1 Cookie Necessari</h3>
            <p className="mb-4">
              Questi cookie sono essenziali per il funzionamento del sito web e non possono essere disabilitati nei nostri sistemi.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-none">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left pb-3 pr-4">Nome</th>
                    <th className="text-left pb-3 pr-4">Scopo</th>
                    <th className="text-left pb-3">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 font-mono text-xs">leo-donati-cookie-consent</td>
                    <td className="py-3 pr-4">Memorizza le preferenze sui cookie</td>
                    <td className="py-3">1 anno</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">session</td>
                    <td className="py-3 pr-4">Gestione della sessione utente</td>
                    <td className="py-3">Sessione</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">2.2 Cookie Analitici</h3>
            <p className="mb-4">
              Questi cookie ci permettono di contare le visite e le fonti di traffico per misurare e migliorare le prestazioni del nostro sito.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-none">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left pb-3 pr-4">Nome</th>
                    <th className="text-left pb-3 pr-4">Fornitore</th>
                    <th className="text-left pb-3 pr-4">Scopo</th>
                    <th className="text-left pb-3">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 font-mono text-xs">_ga</td>
                    <td className="py-3 pr-4">Google Analytics</td>
                    <td className="py-3 pr-4">Distingue gli utenti</td>
                    <td className="py-3">2 anni</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">_gid</td>
                    <td className="py-3 pr-4">Google Analytics</td>
                    <td className="py-3 pr-4">Distingue gli utenti</td>
                    <td className="py-3">24 ore</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              <strong>Nota:</strong> Questi cookie vengono installati solo previo tuo consenso esplicito.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-white mb-3">2.3 Cookie di Marketing</h3>
            <p className="mb-4">
              Questi cookie possono essere impostati attraverso il nostro sito dai nostri partner pubblicitari per costruire un profilo dei tuoi interessi.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-none">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left pb-3 pr-4">Nome</th>
                    <th className="text-left pb-3 pr-4">Fornitore</th>
                    <th className="text-left pb-3 pr-4">Scopo</th>
                    <th className="text-left pb-3">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-3 pr-4 font-mono text-xs">_fbp</td>
                    <td className="py-3 pr-4">Facebook</td>
                    <td className="py-3 pr-4">Tracciamento pubblicità</td>
                    <td className="py-3">3 mesi</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-mono text-xs">fr</td>
                    <td className="py-3 pr-4">Facebook</td>
                    <td className="py-3 pr-4">Pubblicità personalizzata</td>
                    <td className="py-3">3 mesi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              <strong>Nota:</strong> Questi cookie vengono installati solo previo tuo consenso esplicito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Cookie di Terze Parti</h2>
            <p className="mb-4">
              Utilizziamo servizi di terze parti che possono installare cookie sul tuo dispositivo:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Google Analytics:</strong> per analisi statistiche sul traffico del sito</li>
              <li><strong>Facebook Pixel:</strong> per ottimizzare le campagne pubblicitarie (solo con consenso)</li>
              <li><strong>Shopify:</strong> per la gestione della piattaforma e-commerce</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Gestione delle Preferenze Cookie</h2>
            <p className="mb-4">
              Puoi gestire le tue preferenze sui cookie in qualsiasi momento:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tramite il banner cookie che appare alla prima visita del sito</li>
              <li>Modificando le impostazioni del tuo browser</li>
              <li>Eliminando i cookie già installati</li>
            </ul>
            <p className="mt-4">
              <strong>Importante:</strong> La disabilitazione di alcuni cookie potrebbe influire sulla funzionalità del sito web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Come Disabilitare i Cookie nel Browser</h2>
            <p className="mb-4">
              Puoi configurare il tuo browser per bloccare o eliminare i cookie. Di seguito i link alle istruzioni per i browser più comuni:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Modifiche alla Cookie Policy</h2>
            <p>
              Ci riserviamo il diritto di modificare questa Cookie Policy in qualsiasi momento.
              Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Contatti</h2>
            <p className="mb-4">
              Per qualsiasi domanda relativa alla presente Cookie Policy, contattaci a:
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-none">
              <p className="mb-2"><strong className="text-white">DONATI LEONARDO</strong></p>
              <p className="mb-1">Via Lazio 28 - 70027 - Palo del Colle (BA) - Italia</p>
              <p className="mb-1"><strong>Partita IVA:</strong> 08912580720</p>
              <p className="mb-1"><strong>Email:</strong> privacy@leodonati.com</p>
            </div>
          </section>

          <section className="pt-8 border-t border-white/10">
            <div className="flex gap-4 text-sm">
              <Link to="/privacy-policy" className="text-white underline hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white underline hover:text-gray-300">
                Termini di Servizio
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            to="/"
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Torna alla home
          </Link>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-500">
          <p>© 2026 Leo Donati. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default CookiePolicy
