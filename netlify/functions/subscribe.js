exports.handler = async function (event, context) {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  }

  // Handle OPTIONS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' }
  }

  // Only POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const data = JSON.parse(event.body)
    const { email, firstName, privacy } = data

    // Validation
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Email non valida' })
      }
    }

    if (!privacy) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ success: false, error: 'Devi accettare la privacy policy' })
      }
    }

    // Success - log for now
    console.log('✅ New subscriber:', { email, firstName, timestamp: new Date().toISOString() })

    // ========================================
    // SHOPIFY INTEGRATION (Uncomment when ready)
    // ========================================
    //
    // Step 1: Install node-fetch if not already installed:
    //   npm install node-fetch@2
    //
    // Step 2: Add these environment variables in Netlify:
    //   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
    //   SHOPIFY_ACCESS_TOKEN=your-admin-api-token
    //
    // Step 3: Uncomment the code below:
    const fetch = require('node-fetch')

    const shopifyUrl = `https://${process.env.SHOPIFY_STORE_DOMAIN}/admin/api/2024-01/customers.json`

    try {
      const shopifyResponse = await fetch(shopifyUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          customer: {
            email: email,
            first_name: firstName || 'Early Access',
            tags: 'early-access, leodonati-landing',
            note: `Iscritto da landing page il ${new Date().toISOString()}. Privacy consent: ${privacy}`,
            email_marketing_consent: {
              state: 'subscribed',
              opt_in_level: 'confirmed_opt_in',
              consent_updated_at: new Date().toISOString()
            }
          }
        })
      })

      const shopifyData = await shopifyResponse.json()

      if (!shopifyResponse.ok) {
        console.error('❌ Shopify API error:', shopifyData)
        // Continue anyway, don't fail the user request
      } else {
        console.log('✅ Customer created in Shopify:', shopifyData.customer.id)
      }
    } catch (shopifyError) {
      console.error('❌ Shopify integration error:', shopifyError)
      // Continue anyway, don't fail the user request
    }
    // ========================================
    // END SHOPIFY INTEGRATION
    // ========================================

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        message: 'Iscrizione completata!'
      })
    }

  } catch (error) {
    console.error('❌ Error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ success: false, error: 'Errore server' })
    }
  }
}
