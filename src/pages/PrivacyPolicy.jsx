import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p className="text-sm text-gray-500 mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduzione</h2>
            <p>
              Leo Donati (di seguito "noi", "nostro") rispetta la privacy dei propri utenti e si impegna a proteggere i dati personali raccolti attraverso il presente sito web.
              La presente Privacy Policy descrive come raccogliamo, utilizziamo e proteggiamo le informazioni personali in conformità con il Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Titolare del Trattamento</h2>
            <div className="bg-white/5 border border-white/10 p-6 rounded-none mb-4">
              <p className="mb-2"><strong className="text-white">DONATI LEONARDO</strong></p>
              <p className="mb-1">Partita IVA: 08912580720</p>
              <p className="mb-1">VAT Europeo: IT08912580720</p>
              <p className="mb-1">Indirizzo: Via Lazio 28 - 70027 - Palo del Colle (BA) - Italia</p>
            </div>
            <p>
              Per qualsiasi richiesta relativa alla presente Privacy Policy, è possibile contattarci a:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> privacy@leodonati.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Dati Raccolti</h2>
            <p className="mb-4">Raccogliamo le seguenti categorie di dati personali:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Dati di contatto:</strong> nome, cognome, indirizzo email</li>
              <li><strong>Dati di navigazione:</strong> indirizzo IP, tipo di browser, pagine visitate, durata della visita</li>
              <li><strong>Cookie e tecnologie simili:</strong> come descritto nella nostra Cookie Policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Finalità del Trattamento</h2>
            <p className="mb-4">I dati personali vengono trattati per le seguenti finalità:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Gestione delle registrazioni all'early access</li>
              <li>Invio di comunicazioni promozionali e newsletter (previo consenso)</li>
              <li>Miglioramento del servizio e analisi statistiche</li>
              <li>Adempimento di obblighi legali</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Base Giuridica del Trattamento</h2>
            <p className="mb-4">Il trattamento dei dati personali si basa su:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Consenso:</strong> per l'invio di comunicazioni marketing</li>
              <li><strong>Interesse legittimo:</strong> per analisi statistiche e miglioramento del servizio</li>
              <li><strong>Obblighi legali:</strong> per adempiere a obblighi di legge</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Condivisione dei Dati</h2>
            <p className="mb-4">I dati personali possono essere condivisi con:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Shopify:</strong> per la gestione della piattaforma e-commerce</li>
              <li><strong>Provider di servizi email:</strong> per l'invio di comunicazioni</li>
              <li><strong>Servizi di analytics:</strong> per analisi statistiche (solo in forma anonimizzata)</li>
            </ul>
            <p className="mt-4">
              Non vendiamo né condividiamo i tuoi dati personali con terze parti per scopi di marketing senza il tuo esplicito consenso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Periodo di Conservazione</h2>
            <p>
              I dati personali vengono conservati per il tempo necessario a soddisfare le finalità per cui sono stati raccolti,
              o secondo i termini previsti dalla legge. I dati di marketing vengono conservati fino alla revoca del consenso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Diritti dell'Interessato</h2>
            <p className="mb-4">In conformità al GDPR, hai i seguenti diritti:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Diritto di accesso:</strong> ottenere conferma dell'esistenza dei tuoi dati</li>
              <li><strong>Diritto di rettifica:</strong> correggere dati inesatti o incompleti</li>
              <li><strong>Diritto alla cancellazione:</strong> richiedere la cancellazione dei dati (diritto all'oblio)</li>
              <li><strong>Diritto di limitazione:</strong> limitare il trattamento in determinate circostanze</li>
              <li><strong>Diritto di portabilità:</strong> ricevere i dati in formato leggibile</li>
              <li><strong>Diritto di opposizione:</strong> opporsi al trattamento per motivi legittimi</li>
              <li><strong>Diritto di revoca:</strong> revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="mt-4">
              Per esercitare i tuoi diritti, contattaci a: privacy@leodonati.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Sicurezza dei Dati</h2>
            <p>
              Adottiamo misure tecniche e organizzative appropriate per proteggere i dati personali da accesso non autorizzato,
              perdita, distruzione o alterazione. Tutti i dati vengono trasmessi in modo sicuro tramite connessioni crittografate (HTTPS).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Trasferimenti Internazionali</h2>
            <p>
              I dati possono essere trasferiti e conservati su server ubicati al di fuori dell'Unione Europea.
              In tal caso, garantiamo che siano adottate misure adeguate per proteggere i dati in conformità al GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Modifiche alla Privacy Policy</h2>
            <p>
              Ci riserviamo il diritto di modificare la presente Privacy Policy in qualsiasi momento.
              Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Contatti</h2>
            <p className="mb-4">
              Per qualsiasi domanda o richiesta relativa alla presente Privacy Policy, contattaci a:
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-none">
              <p className="mb-2"><strong className="text-white">DONATI LEONARDO</strong></p>
              <p className="mb-1">Via Lazio 28 - 70027 - Palo del Colle (BA) - Italia</p>
              <p className="mb-1"><strong>Partita IVA:</strong> 08912580720</p>
              <p className="mb-1"><strong>Email:</strong> privacy@leodonati.com</p>
              <p className="mb-1"><strong>PEC:</strong> leodonati@pec.it</p>
            </div>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500">
              Hai anche il diritto di presentare un reclamo all'Autorità di controllo competente (Garante per la Protezione dei Dati Personali).
            </p>
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

export default PrivacyPolicy
