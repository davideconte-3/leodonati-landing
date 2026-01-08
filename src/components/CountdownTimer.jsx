import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const CountdownTimer = () => {
  // Target date: 9 Gennaio 2026, 00:00
  const targetDate = new Date('2026-01-09T00:00:00').getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [prevTime, setPrevTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        const newTime = { days, hours, minutes, seconds }

        setPrevTime(timeLeft)
        setTimeLeft(newTime)
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate, timeLeft])

  const TimeUnit = ({ value, label, prevValue }) => {
    const hasChanged = value !== prevValue

    return (
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-28 md:w-32 md:h-36 mb-2">
          {/* Card background */}
          <div className="absolute inset-0 glass-effect rounded-none overflow-hidden border-white/20">
            {/* Divider line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20" />

            {/* Animated number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={value}
                  initial={hasChanged ? { rotateX: -90, opacity: 0 } : false}
                  animate={{ rotateX: 0, opacity: 1 }}
                  exit={{ rotateX: 90, opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.4, 0.0, 0.2, 1]
                  }}
                  className="text-5xl md:text-6xl font-bold font-display text-white"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {String(value).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <span className="text-sm md:text-base text-gray-400 uppercase tracking-wider font-medium">
          {label}
        </span>
      </div>
    )
  }

  return (
    <section className="relative py-24 px-6 bg-black">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
            Inizia tra
          </h2>
          <p className="text-xl text-gray-400">
            9 Gennaio 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 md:gap-8 flex-wrap"
        >
          <TimeUnit
            value={timeLeft.days}
            label="Giorni"
            prevValue={prevTime.days}
          />
          <div className="text-4xl md:text-5xl text-white font-bold mb-8">:</div>
          <TimeUnit
            value={timeLeft.hours}
            label="Ore"
            prevValue={prevTime.hours}
          />
          <div className="text-4xl md:text-5xl text-white font-bold mb-8">:</div>
          <TimeUnit
            value={timeLeft.minutes}
            label="Minuti"
            prevValue={prevTime.minutes}
          />
          <div className="text-4xl md:text-5xl text-white font-bold mb-8">:</div>
          <TimeUnit
            value={timeLeft.seconds}
            label="Secondi"
            prevValue={prevTime.seconds}
          />
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 h-px w-full max-w-2xl mx-auto bg-white/20"
        />
      </div>
    </section>
  )
}

export default CountdownTimer
