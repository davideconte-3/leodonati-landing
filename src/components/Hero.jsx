import confetti from 'canvas-confetti'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2026-01-09T00:00:00').getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

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
          privacy: data.privacy || false,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-lg mx-auto w-full"
      >
        {/* Logo */}
        <div className="mb-8 md:mb-10 text-center">
          <img
            src="/logo_white.png"
            alt="Leo Donati"
            className="w-40 md:w-40 mx-auto mb-6 md:mb-8"
            loading="eager"
          />

          <h1 className="text-2xl md:text-5xl font-bold font-display mb-3 md:mb-4 text-white">
            Sales up to 40%
          </h1>

          <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-6">
            Early Access Esclusivo • 72 ore
          </p>

          {/* Countdown Timer */}
          <div className="hidden flex justify-center gap-3 md:gap-4 mb-3">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                {String(timeLeft.days).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">Giorni</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white self-start">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">Ore</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white self-start">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">Min</div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-white self-start">:</div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white tabular-nums">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <div className="text-xs text-gray-600 uppercase tracking-wider mt-1">Sec</div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-600">
            {/* Inizio: 9 Gennaio 2026 */}
          </p>
        </div>

        <div className="h-px w-24 mx-auto bg-white/20 mb-8 md:mb-10" />

        {/* Form Section */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-2 md:mb-3 text-white">
            Richiedi l'accesso
          </h2>
          <p className="text-sm md:text-base text-gray-400">
            Inserisci la tua email. Ti invieremo la password personale.
          </p>
        </div>

        <div className="glass-effect p-6 md:p-8 rounded-none border-white/20">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* First Name Field */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                Nome (opzionale)
              </label>
              <input
                type="text"
                id="firstName"
                {...register('firstName')}
                className="w-full px-4 md:px-5 py-3 md:py-4 bg-white/5 border border-white/10 rounded-none
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
                className={`w-full px-4 md:px-5 py-3 md:py-4 bg-white/5 border rounded-none
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
            <div className="relative border border-white/30 p-5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/50 group">
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    id="privacy"
                    {...register('privacy', {
                      required: 'Devi accettare la privacy policy per continuare',
                    })}
                    className="peer w-5 h-5 cursor-pointer appearance-none border-2 border-white/40 bg-transparent
                             checked:bg-white checked:border-white transition-all duration-300
                             focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-black"
                  />
                  <svg className="absolute inset-0 w-5 h-5 pointer-events-none text-black opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <label htmlFor="privacy" className="flex-1 text-sm md:text-base text-gray-200 cursor-pointer leading-relaxed group-hover:text-white transition-colors">
                  Accetto la{' '}
                  <a href="/privacy-policy" className="text-white underline decoration-white/50 hover:decoration-white font-medium transition-all" target="_blank" rel="noopener noreferrer">
                    Privacy Policy
                  </a>
                  {' '}e acconsento al trattamento dei miei dati personali per ricevere comunicazioni promozionali e marketing.
                  <span className="text-red-400 ml-1">*</span>
                </label>
              </div>
              <AnimatePresence>
                {errors.privacy && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 ml-9"
                  >
                    <p className="text-sm text-red-400 flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.privacy.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 md:py-4 rounded-none font-semibold text-base md:text-lg transition-all duration-300 border-2
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
      </motion.div>
    </section>
  )
}

export default Hero
