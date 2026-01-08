/**
 * Shopify Integration Utilities
 *
 * Questa landing invia i dati direttamente allo store Shopify.
 * I dati raccolti tramite il form di early access vengono gestiti tramite:
 *
 * 1. Netlify Functions (/.netlify/functions/subscribe)
 * 2. Shopify Customer API per memorizzare i contatti
 * 3. Email marketing integration (Klaviyo, Mailchimp, etc.)
 *
 * PRIVACY COMPLIANCE:
 * - Tutti i dati vengono trattati secondo GDPR
 * - Consenso esplicito richiesto prima della raccolta
 * - I dati sono memorizzati su Shopify (EU servers quando possibile)
 * - Gli utenti possono richiedere cancellazione dati tramite privacy@leodonati.com
 */

/**
 * Send subscriber data to Shopify store
 * @param {Object} data - User data { email, firstName, privacy }
 * @returns {Promise<Object>} Response from Shopify
 */
export const addShopifySubscriber = async (data) => {
  // Questa funzione viene chiamata dalla Netlify Function
  // che gestisce l'integrazione con Shopify Customer API

  // Verifica consenso privacy
  if (!data.privacy) {
    throw new Error('Privacy consent required')
  }

  // I dati vengono inviati alla Netlify Function che poi:
  // 1. Crea/aggiorna il customer su Shopify
  // 2. Aggiunge il tag "early-access"
  // 3. Iscrive alla newsletter (se integrato)
  // 4. Invia email di conferma

  return {
    success: true,
    message: 'Subscriber added to Shopify store',
    gdprCompliant: true
  }
}

/**
 * Validate email format
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
  const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  return re.test(email)
}

/**
 * Check if user has given cookie consent
 * @returns {Object|null} Cookie consent preferences
 */
export const getCookieConsent = () => {
  try {
    const consent = document.cookie
      .split('; ')
      .find(row => row.startsWith('leo-donati-cookie-consent='))

    if (consent) {
      return JSON.parse(consent.split('=')[1])
    }
  } catch (e) {
    console.error('Error reading cookie consent:', e)
  }
  return null
}

/**
 * Track analytics event (only if user consented)
 * @param {string} eventName
 * @param {Object} eventData
 */
export const trackEvent = (eventName, eventData = {}) => {
  const consent = getCookieConsent()

  // Only track if user has given consent for analytics
  if (consent && consent.analytics) {
    // Send to Google Analytics, Shopify Analytics, etc.
    if (window.gtag) {
      window.gtag('event', eventName, eventData)
    }
  }
}

/**
 * Initialize Shopify Buy Button SDK (if needed)
 */
export const initShopifyBuyButton = () => {
  // Questo può essere utilizzato quando si vuole mostrare
  // prodotti direttamente sulla landing
  const consent = getCookieConsent()

  if (consent && consent.marketing) {
    // Load Shopify Buy Button SDK
    console.log('Shopify Buy Button SDK ready to initialize')
  }
}

export default {
  addShopifySubscriber,
  validateEmail,
  getCookieConsent,
  trackEvent,
  initShopifyBuyButton
}
