# Integrazione Shopify - Leo Donati Landing

## Overview

Questa landing page è completamente GDPR compliant e integrata con Shopify per la gestione dei dati degli utenti.

## Architettura Dati

```
User → Landing Page → Netlify Function → Shopify Customer API
                   ↓
              Cookie Consent → Local Storage
```

## Come Funziona

### 1. Raccolta Dati Early Access

Quando un utente si registra all'early access:

1. **Consenso Privacy**: L'utente DEVE accettare la Privacy Policy (checkbox obbligatoria)
2. **Dati Raccolti**: Nome (opzionale) + Email (obbligatoria)
3. **Invio a Shopify**: I dati vengono inviati tramite Netlify Function

### 2. Netlify Function

La function `/netlify/functions/subscribe.js` gestisce:

- Validazione dati
- Verifica consenso privacy
- Creazione/aggiornamento customer su Shopify
- Aggiunta tag "early-access"
- Invio email di conferma

### 3. Shopify Customer API

I dati vengono memorizzati su Shopify come:

```javascript
{
  email: "user@example.com",
  firstName: "Nome",
  tags: ["early-access", "landing-page"],
  accepts_marketing: true, // Solo se consenso dato
  note: "Registrato da landing page il DD/MM/YYYY"
}
```

## GDPR Compliance

### Cookie Banner

Il sito mostra un banner cookie al primo accesso che permette di:

- ✅ Accettare tutti i cookie
- ✅ Accettare solo cookie necessari
- ✅ Personalizzare le preferenze

Le preferenze vengono salvate in `leo-donati-cookie-consent` cookie (durata: 1 anno).

### Categorie Cookie

1. **Necessari** (sempre attivi)
   - Gestione sessione
   - Preferenze cookie

2. **Analitici** (opzionali)
   - Google Analytics
   - Solo con consenso esplicito

3. **Marketing** (opzionali)
   - Facebook Pixel
   - Solo con consenso esplicito

### Consenso Privacy

Il form richiede **consenso esplicito** tramite checkbox per:

- Trattamento dati personali
- Ricezione comunicazioni promozionali
- Memorizzazione su Shopify

## Pagine Legali

Tutte le pagine legali sono accessibili e complete:

- `/privacy-policy` - Informativa Privacy completa GDPR
- `/cookie-policy` - Dettaglio utilizzo cookie
- `/terms-of-service` - Termini e condizioni di servizio

## Setup Shopify

### Variabili d'Ambiente

Configura le seguenti variabili in Netlify:

```bash
SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
SHOPIFY_ACCESS_TOKEN=your-admin-api-token
SHOPIFY_API_VERSION=2024-01
```

### Permessi API Shopify

L'access token deve avere i seguenti permessi:

- `write_customers` - Creare/aggiornare customers
- `read_customers` - Leggere dati customers
- `write_marketing_events` - Tracciare eventi marketing

### Creazione Access Token

1. Shopify Admin → Settings → Apps and sales channels
2. Develop apps → Create an app
3. Configure Admin API scopes
4. Install app e copia l'Admin API access token

## Diritti degli Utenti (GDPR)

Gli utenti possono esercitare i loro diritti contattando `privacy@leodonati.com`:

### Diritto di Accesso
Fornire copia dei dati memorizzati

### Diritto di Rettifica
Correggere dati inesatti

### Diritto alla Cancellazione
Eliminare tutti i dati da Shopify

### Diritto di Portabilità
Esportare dati in formato JSON/CSV

### Diritto di Opposizione
Revocare consenso marketing

## Implementazione

### Shopify Customer Metafields

Per tracciare dati aggiuntivi:

```javascript
{
  "metafields": [
    {
      "namespace": "early_access",
      "key": "signup_date",
      "value": "2026-01-07",
      "type": "date"
    },
    {
      "namespace": "early_access",
      "key": "source",
      "value": "landing-page",
      "type": "single_line_text_field"
    }
  ]
}
```

## Email Marketing

### Integrazione Klaviyo (opzionale)

Se usi Klaviyo per email marketing:

1. Installa Klaviyo app su Shopify
2. I customers vengono sincronizzati automaticamente
3. Crea un flow per "early-access" tag

### Integrazione Mailchimp (opzionale)

Se usi Mailchimp:

1. Connetti Mailchimp a Shopify
2. I customers con `accepts_marketing: true` vengono sincronizzati
3. Segmenta per tag "early-access"

## Test

### Test Locale

```bash
npm run dev
# Apri http://localhost:5173
# Testa registrazione early access
# Verifica cookie banner
# Naviga pagine legali
```

### Test Produzione

```bash
npm run build
npm run preview
# Verifica build production
```

## Deployment

### Netlify

1. Connetti repository a Netlify
2. Configura environment variables
3. Deploy automatico su push

### Verifica Post-Deploy

- ✅ Cookie banner funzionante
- ✅ Form early access invia dati
- ✅ Pagine legali accessibili
- ✅ Link footer funzionanti
- ✅ Meta tags presenti

## Privacy by Design

Questa implementazione segue il principio di "Privacy by Design":

1. **Minimizzazione dati**: Raccogliamo solo email e nome
2. **Consenso esplicito**: Checkbox obbligatoria prima dell'invio
3. **Trasparenza**: Link diretti a Privacy Policy
4. **Controllo utente**: Possibilità di personalizzare cookie
5. **Sicurezza**: Dati trasmessi via HTTPS
6. **Retention**: Dati conservati secondo normativa

## Support

Per questioni relative a privacy e dati:
- Email: privacy@leodonati.com
- Support: support@leodonati.com

## Note Importanti

⚠️ **PRIMA DEL LANCIO:**

1. Aggiorna email di contatto nelle pagine legali
2. Verifica le variabili d'ambiente Shopify
3. Testa il flusso completo di registrazione
4. Verifica che gli URL social nel footer siano corretti
5. Configura Google Analytics (se consenso dato)
6. Setup Facebook Pixel (se consenso dato)

---

**Creato**: 2026-01-07
**Versione**: 1.0.0
**Compliance**: GDPR EU
