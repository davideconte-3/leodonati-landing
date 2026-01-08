import confetti from 'canvas-confetti'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const EarlyAccessForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const triggerConfetti = () => {
    const count = 200
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
      colors: ['#FFFFFF', '#000000', '#666666'],
    }

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fire(0.25, { spread: 26, startVelocity: 55 })
    fire(0.2, { spread: 60 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/.netlify/functions/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          firstName: data.firstName || '',
        }),
      })

      const result = await response.json()

      if (response.ok && result.success) {
        setSubmitStatus('success')
        triggerConfetti()
        reset()

        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      } else {
        setSubmitStatus('error')
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      }
    } catch (error) {
      console.error('Submit error:', error)
      setSubmitStatus('error')
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="early-access-form"
      className="relative py-16 md:py-24 px-6 bg-black"
    >
      <div className="relative z-10 max-w-lg mx-auto">
        {/* Simple header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-3 md:mb-4 text-white">
            Richiedi l'accesso
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Inserisci la tua email. Ti invieremo  il link di accesso esclusivo.
          </p>
        </div>

        <div className="glass-effect p-6 md:p-10 rounded-none border-white/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* First Name Field */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                Nome (opzionale)
              </label>
              <input
                type="text"
                id="firstName"
                {...register('firstName')}
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-none
                         text-white placeholder-gray-500 focus:outline-none focus:border-white
                         transition-all duration-300 text-sm md:text-base"
                placeholder="Il tuo nome"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email richiesta',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Indirizzo email non valido',
                  },
                })}
                className={`w-full px-4 md:px-6 py-3 md:py-4 bg-white/5 border rounded-none
                         text-white placeholder-gray-500 focus:outline-none
                         transition-all duration-300 text-sm md:text-base ${errors.email
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-white/10 focus:border-white'
                  }`}
                placeholder="nome@esempio.com"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-2 text-xs md:text-sm text-red-400"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Privacy Consent Checkbox - GDPR Required */}
            <div className="border-2 border-white p-4 bg-black/50 mt-2">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="privacy-checkbox"
                  {...register('privacy', {
                    required: 'Devi accettare la privacy policy per continuare',
                  })}
                  className="w-6 h-6 mt-1 accent-white cursor-pointer flex-shrink-0"
                />
                <label htmlFor="privacy-checkbox" className="text-sm text-white cursor-pointer">
                  Accetto la{' '}
                  <a href="/privacy-policy" className="underline font-semibold text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                  {' '}e acconsento al trattamento dei miei dati personali per ricevere comunicazioni promozionali. *
                </label>
              </div>
              {errors.privacy && (
                <p className="mt-2 text-sm text-red-400 ml-10">
                  {errors.privacy.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 md:py-5 rounded-none font-semibold text-base md:text-lg transition-all duration-300 border-2
                       ${isSubmitting
                  ? 'bg-gray-700 border-gray-700 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-black hover:text-white border-white active:scale-95'
                }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  <span className="text-sm md:text-base">Invio in corso...</span>
                </span>
              ) : (
                'Richiedi accesso'
              )}
            </button>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 bg-white/10 border border-white/30 rounded-none text-center"
                >
                  <p className="text-white font-medium text-sm md:text-base">
                    ✓ Perfetto! Controlla la tua email.
                  </p>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-4 bg-red-500/20 border border-red-500/50 rounded-none text-center"
                >
                  <p className="text-red-400 font-medium text-sm md:text-base">
                    Errore. Riprova più tardi.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

        </div>

      </div>
    </section>
  )
}

export default EarlyAccessForm
