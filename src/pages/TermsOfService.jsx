import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TermsOfService = () => {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Termini e Condizioni di Servizio</h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <p className="text-sm text-gray-500 mb-8">
              Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Accettazione dei Termini</h2>
            <p>
              Accedendo e utilizzando questo sito web (www.leodonati.com), accetti di essere vincolato dai presenti Termini e Condizioni di Servizio.
              Se non accetti questi termini, ti preghiamo di non utilizzare il nostro sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Informazioni Legali</h2>
            <div className="bg-white/5 border border-white/10 p-6 rounded-none mb-6">
              <p className="mb-2"><strong className="text-white">Ragione Sociale:</strong> DONATI LEONARDO</p>
              <p className="mb-1"><strong className="text-white">Sede Legale:</strong> Via Lazio 28 - 70027 - Palo del Colle (BA) - Italia</p>
              <p className="mb-1"><strong className="text-white">Partita IVA:</strong> 08912580720</p>
              <p className="mb-1"><strong className="text-white">VAT Europeo:</strong> IT08912580720</p>
              <p className="mb-1"><strong className="text-white">Email:</strong> info@leodonati.com</p>
              <p className="mb-1"><strong className="text-white">PEC:</strong> leodonati@pec.it</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Descrizione del Servizio</h2>
            <p>
              Leo Donati fornisce una piattaforma di e-commerce per la vendita di prodotti di moda premium.
              Il sito offre la possibilità di registrarsi all'early access per ricevere notifiche su nuove collezioni e offerte esclusive.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Registrazione e Account</h2>
            <p className="mb-4">
              Per accedere ad alcuni servizi, potrebbe essere richiesta la registrazione di un account. L'utente si impegna a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornire informazioni accurate, complete e aggiornate</li>
              <li>Mantenere la sicurezza delle proprie credenziali di accesso</li>
              <li>Notificare immediatamente qualsiasi uso non autorizzato del proprio account</li>
              <li>Essere responsabile di tutte le attività che si verificano sotto il proprio account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Early Access</h2>
            <p className="mb-4">
              Registrandoti all'early access:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Acconsenti a ricevere comunicazioni promozionali via email</li>
              <li>Ottieni accesso prioritario alle nuove collezioni</li>
              <li>Ricevi offerte e sconti esclusivi</li>
              <li>Puoi annullare la registrazione in qualsiasi momento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Ordini e Pagamenti</h2>
            <p className="mb-4">
              Tutte le transazioni sono gestite tramite Shopify. Accettando questi termini, accetti anche:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>I prezzi sono espressi in Euro (€) e includono IVA</li>
              <li>I prezzi possono variare senza preavviso</li>
              <li>Gli ordini sono soggetti a disponibilità</li>
              <li>Ci riserviamo il diritto di rifiutare o annullare qualsiasi ordine</li>
              <li>Il pagamento deve essere completato prima della spedizione</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Spedizione e Consegna</h2>
            <p className="mb-4">
              Le condizioni di spedizione sono le seguenti:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Spediamo in tutta Italia e nell'Unione Europea</li>
              <li>I tempi di consegna variano in base alla destinazione</li>
              <li>Le spese di spedizione sono calcolate al checkout</li>
              <li>Spedizione gratuita per ordini superiori a €150</li>
              <li>Il rischio di perdita o danno passa all'acquirente al momento della consegna</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Diritto di Recesso</h2>
            <p className="mb-4">
              In conformità con la normativa europea sui diritti dei consumatori:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Hai 14 giorni dalla ricezione per esercitare il diritto di recesso</li>
              <li>I prodotti devono essere restituiti nelle condizioni originali</li>
              <li>I prodotti danneggiati o usati non possono essere restituiti</li>
              <li>Le spese di reso sono a carico dell'acquirente</li>
              <li>Il rimborso sarà effettuato entro 14 giorni dalla ricezione del reso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Proprietà Intellettuale</h2>
            <p className="mb-4">
              Tutti i contenuti presenti sul sito, inclusi ma non limitati a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Testi, immagini, loghi, grafica</li>
              <li>Design e layout del sito</li>
              <li>Software e codice</li>
              <li>Marchi e nomi commerciali</li>
            </ul>
            <p className="mt-4">
              Sono di proprietà esclusiva di Leo Donati o dei rispettivi proprietari e sono protetti dalle leggi sul copyright e sulla proprietà intellettuale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Uso Consentito</h2>
            <p className="mb-4">
              L'utente si impegna a non:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Violare le leggi applicabili</li>
              <li>Trasmettere contenuti offensivi, diffamatori o illeciti</li>
              <li>Interferire con il funzionamento del sito</li>
              <li>Tentare di accedere a aree riservate</li>
              <li>Utilizzare bot o sistemi automatizzati</li>
              <li>Copiare o riprodurre contenuti senza autorizzazione</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Limitazione di Responsabilità</h2>
            <p className="mb-4">
              Leo Donati non sarà responsabile per:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Danni indiretti, incidentali o consequenziali</li>
              <li>Perdita di profitti o opportunità commerciali</li>
              <li>Interruzioni del servizio o errori tecnici</li>
              <li>Contenuti di siti web di terze parti</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Garanzia sui Prodotti</h2>
            <p>
              Tutti i prodotti Leo Donati sono coperti dalla garanzia legale di conformità di 2 anni prevista dal Codice del Consumo italiano.
              I difetti devono essere comunicati entro 2 mesi dalla scoperta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Privacy e Protezione Dati</h2>
            <p>
              Il trattamento dei dati personali è regolato dalla nostra{' '}
              <Link to="/privacy-policy" className="text-white underline hover:text-gray-300">
                Privacy Policy
              </Link>
              , che costituisce parte integrante dei presenti Termini.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Modifiche ai Termini</h2>
            <p>
              Ci riserviamo il diritto di modificare questi Termini in qualsiasi momento.
              Le modifiche saranno pubblicate su questa pagina e l'uso continuato del sito costituirà accettazione delle modifiche.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">15. Legge Applicabile e Foro Competente</h2>
            <p>
              I presenti Termini sono regolati dalla legge italiana.
              Per qualsiasi controversia sarà competente in via esclusiva il Foro di Bari, salvo diverse disposizioni inderogabili di legge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">16. Risoluzione Alternativa delle Controversie</h2>
            <p>
              In conformità al Regolamento UE n. 524/2013, segnaliamo che la Commissione Europea ha istituito una piattaforma online
              per la risoluzione alternativa delle controversie (ODR), disponibile al seguente indirizzo:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-gray-300">
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">17. Contatti</h2>
            <p className="mb-4">
              Per qualsiasi domanda relativa ai presenti Termini, contattaci a:
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-none">
              <p className="mb-2"><strong className="text-white">DONATI LEONARDO</strong></p>
              <p className="mb-1">Via Lazio 28 - 70027 - Palo del Colle (BA) - Italia</p>
              <p className="mb-1"><strong>Partita IVA:</strong> 08912580720</p>
              <p className="mb-1"><strong>Email:</strong> info@leodonati.com</p>
              <p className="mb-1"><strong>Assistenza clienti:</strong> support@leodonati.com</p>
              <p className="mb-1"><strong>PEC:</strong> leodonati@pec.it</p>
            </div>
          </section>

          <section className="pt-8 border-t border-white/10">
            <div className="flex gap-4 text-sm">
              <Link to="/privacy-policy" className="text-white underline hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-white underline hover:text-gray-300">
                Cookie Policy
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

export default TermsOfService
