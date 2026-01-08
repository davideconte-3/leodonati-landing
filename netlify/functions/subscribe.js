exports.handler = async function(event, context) {
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
