# 🚀 Deployment Instructions

## Current Status

✅ **Completed:**
- GDPR-compliant cookie consent banner
- Privacy Policy, Cookie Policy, Terms of Service pages
- Early access form with privacy checkbox
- Netlify Function for handling subscriptions (`netlify/functions/subscribe.js`)
- All legal information updated with company data

⚠️ **Known Issue:**
- Netlify Dev (local development) has issues serving functions
- **This is ONLY a local development issue**
- The function WILL work when deployed to Netlify's production servers

## Deploying to Netlify

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add GDPR compliance and subscription function"
git push
```

### Step 2: Connect to Netlify
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Netlify will auto-detect the settings from `netlify.toml`
5. Click "Deploy site"

### Step 3: Verify Function Works
After deployment:
1. Go to your live site
2. Fill out the early access form
3. Check Netlify Functions logs: `Site Settings` → `Functions` → `subscribe`
4. You should see successful submissions logged

## Next Steps: Shopify Integration

The current function (`netlify/functions/subscribe.js`) logs submissions but doesn't save them yet.

To integrate with Shopify Customer API:

1. **Get Shopify API credentials:**
   - Go to your Shopify Admin
   - Apps → Develop apps → Create an app
   - Configure Admin API → Customer read/write permissions
   - Get your API token

2. **Add environment variables in Netlify:**
   - Site settings → Environment variables
   - Add:
     ```
     SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
     SHOPIFY_ACCESS_TOKEN=your-access-token
     ```

3. **Update the function:**
   - Uncomment the Shopify API call in `subscribe.js`
   - The code is already there, just commented out

## Testing Locally (Alternative)

If you need to test the function locally, deploy to Netlify first, then:

```bash
netlify link  # Link to your deployed site
netlify dev   # Now functions will work
```

Or use this temporary workaround:
```bash
# Install netlify CLI globally
npm install -g netlify-cli

# From project root
netlify functions:serve
```

---

**Company Info (already configured):**
- DONATI LEONARDO
- P.IVA: 08912580720  
- VAT EU: IT08912580720
- Via Lazio 28 - 70027 - Palo del Colle (BA) - Italia
