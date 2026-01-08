import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

const SocialProof = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const targetCount = 500 // Counter as requested

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Animate counter
          gsap.to({ value: 0 }, {
            value: targetCount,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() {
              setCount(Math.floor(this.targets()[0].value))
            }
          })
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [targetCount])

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Counter Section */}
        <motion.div
          ref={countRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block glass-effect px-12 py-8 rounded-none mb-8 border-white/20">
            <motion.div
              className="text-7xl md:text-8xl font-bold font-display text-white mb-4"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {count}+
            </motion.div>
            <p className="text-xl text-gray-400">
              Iscritti all'early access
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500"
          >
            Non perdere l'opportunità
          </motion.p>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm border-t border-white/10 pt-12"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-white">72h</span>
            <span>Early Access Esclusivo</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-white">-50%</span>
            <span>Sconti fino al 50%</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-white">🔒</span>
            <span>Password Personale</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl text-white">✓</span>
            <span>Accesso Prioritario</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
