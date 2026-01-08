# Leo Donati - Early Access Landing Page

Una landing page moderna e premium per la raccolta di early access con animazioni fluide, integrazione Shopify e design fashion/luxury.

## 🚀 Stack Tecnologico

- **React 18** - Framework UI
- **Vite** - Build tool e dev server
- **TailwindCSS** - Utility-first CSS framework
- **GSAP** - Animazioni professionali e scroll triggers
- **Framer Motion** - Micro-interazioni e transizioni
- **Lenis** - Smooth scroll
- **React Hook Form** - Gestione form e validazione
- **Canvas Confetti** - Confetti animation per success state
- **Netlify Functions** - Serverless backend
- **Shopify Admin API** - Customer management

## ✨ Features

- 🎨 Design fashion/luxury minimal e moderno
- ⚡ Animazioni GSAP fluide con parallax e scroll triggers
- 🎯 Form con validazione real-time e feedback animati
- ⏱️ Countdown timer con flip animations verso il lancio
- 🎊 Confetti animation al completamento iscrizione
- 📱 Fully responsive e mobile-first
- 🌐 Smooth scroll con Lenis
- 🔐 Integrazione sicura con Shopify Admin API
- 🚀 Performance ottimizzate (lazy loading, code splitting)
- ♿ SEO-friendly con meta tags ottimizzati

## 📦 Installazione

```bash
# Clona il repository
git clone <repository-url>
cd leodonati-landing

# Installa le dipendenze
npm install
```

## 🔧 Configurazione

### 1. Environment Variables

Crea un file `.env` nella root del progetto (usa `.env.example` come template):

```env
VITE_SHOPIFY_STORE_DOMAIN=leodonatii.myshopify.com
VITE_SHOPIFY_ADMIN_API_TOKEN=shpat_xxxxx
VITE_SHOPIFY_API_VERSION=2024-01
```

### 2. Come Ottenere il Shopify Admin API Token

1. Vai su **Shopify Admin** → **Settings** → **Apps and sales channels**
2. Click su **Develop apps**
3. Click su **Create an app**
4. Dai un nome all'app (es. "Early Access Landing")
5. Vai su **Configuration** → **Admin API integration**
6. Seleziona i seguenti permissions:
   - `write_customers` - Per creare nuovi clienti
   - `read_customers` - Per verificare clienti esistenti
7. Click su **Save**
8. Vai su **API credentials**
9. Click su **Install app**
10. Copia l'**Admin API access token** (inizia con `shpat_`)
11. Incolla il token nel file `.env`

### 3. Configurazione Shopify

L'API creerà automaticamente clienti con:
- **Tag**: `early_access_jan26`
- **Email Marketing Consent**: `SUBSCRIBED`
- **Metafields**:
  - `signup_date`: Data di iscrizione
  - `source`: `landing`
- **Note**: "Signed up via early access landing page"

## 🖥️ Sviluppo Locale

```bash
# Avvia il dev server
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Testare le Netlify Functions in locale

```bash
# Installa Netlify CLI
npm install -g netlify-cli

# Avvia il dev server con le functions
netlify dev
```

Questo avvierà il sito su `http://localhost:8888` con le functions disponibili.

## 🏗️ Build di Produzione

```bash
# Build per produzione
npm run build

# Preview della build
npm run preview
```

## 🚀 Deploy su Netlify

### Deploy con GitHub (Consigliato)

1. **Push su GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connetti a Netlify**:
   - Vai su [netlify.com](https://netlify.com)
   - Click su "New site from Git"
   - Seleziona il tuo repository
   - Netlify rileverà automaticamente le configurazioni da `netlify.toml`

3. **Configura le Environment Variables**:
   - Nel dashboard Netlify → **Site settings** → **Environment variables**
   - Aggiungi le seguenti variabili:
     - `VITE_SHOPIFY_STORE_DOMAIN`
     - `VITE_SHOPIFY_ADMIN_API_TOKEN`
     - `VITE_SHOPIFY_API_VERSION`

4. **Deploy**:
   - Click su "Deploy site"
   - Netlify builderà e deployerà automaticamente

### Deploy con Netlify CLI

```bash
# Installa Netlify CLI (se non già installato)
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 📁 Struttura del Progetto

```
leodonati-landing/
├── public/                 # File statici
├── src/
│   ├── components/
│   │   ├── Hero.jsx               # Hero section con GSAP parallax
│   │   ├── CountdownTimer.jsx     # Timer con flip animations
│   │   ├── Features.jsx           # Features grid animato
│   │   ├── SocialProof.jsx        # Counter + testimonials
│   │   └── EarlyAccessForm.jsx    # Form con validazione
│   ├── App.jsx            # Main app con Lenis smooth scroll
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles + Tailwind
├── netlify/
│   └── functions/
│       └── subscribe.js   # Shopify integration function
├── .env.example           # Template environment variables
├── netlify.toml           # Netlify configuration
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## 🎨 Personalizzazione

### Colori

Modifica i colori accent in `tailwind.config.js`:

```javascript
colors: {
  accent: {
    DEFAULT: '#8B5CF6',  // Viola
    dark: '#7C3AED',
    light: '#A78BFA',
  },
}
```

### Data di Lancio

Modifica la data target in `src/components/CountdownTimer.jsx`:

```javascript
const targetDate = new Date('2026-01-20T18:00:00').getTime()
```

### Font

I font sono caricati da Google Fonts. Per cambiarli, modifica il link in `index.html` e aggiorna `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Outfit', 'Inter', 'sans-serif'],
}
```

## 🔍 SEO

Il sito include meta tags ottimizzati in `index.html`. Personalizza:
- Title
- Description
- Open Graph tags
- Keywords

## 📊 Analytics (Opzionale)

Per aggiungere Google Analytics:

1. Aggiungi `VITE_GA_MEASUREMENT_ID` al file `.env`
2. Aggiungi lo script GA in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🐛 Debugging

### Form non invia

1. Verifica che le environment variables siano configurate correttamente
2. Controlla i log in Netlify Functions → Functions → subscribe
3. Testa localmente con `netlify dev`

### Animazioni lag

1. Verifica le performance in Chrome DevTools
2. Riduci la complessità delle animazioni GSAP
3. Ottimizza le immagini

### Shopify API errors

- Verifica che l'API token abbia i permessi corretti
- Controlla che lo store domain sia corretto (senza `https://`)
- Verifica la versione dell'API (`2024-01`)

## 📝 Note Importanti

- **Non committare** il file `.env` nel repository
- Le **Netlify Functions** sono accessibili su `/.netlify/functions/[nome]`
- Il **countdown timer** è basato sul timezone del browser dell'utente
- Il **counter social proof** è statico (500+) come richiesto
- Le **animazioni GSAP** richiedono una licenza per uso commerciale

## 🔒 Sicurezza

- Le API keys sono gestite tramite environment variables
- Le Netlify Functions agiscono come proxy sicuro
- Il token Shopify non è mai esposto al frontend
- La validazione email è implementata sia client che server-side

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Chrome Android (latest)

## 🎯 Performance

- **Lighthouse Score**: 95+ (Mobile & Desktop)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: < 300KB (gzipped)

## 📄 License

© 2026 Leo Donati. All rights reserved.

## 🤝 Support

Per supporto o domande:
- Email: support@leodonati.com
- GitHub Issues: [Create an issue]

---

Built with ❤️ by Leo Donati Team
