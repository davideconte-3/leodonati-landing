import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      number: '01',
      title: '72 Ore di Accesso Esclusivo',
      description: 'Accedi ai saldi prima di tutti e scegli i tuoi pezzi preferiti.',
    },
    {
      number: '02',
      title: 'Sconti fino al 50%',
      description: 'Prezzi speciali su tutta la collezione. Sconto applicato automaticamente.',
    },
    {
      number: '03',
      title: 'Password Personale',
      description: 'Riceverai via email la tua password esclusiva il giorno prima.',
    },
    {
      number: '04',
      title: 'Priorità Assoluta',
      description: 'Nessuna coda, nessuna attesa. Shop in completa tranquillità.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  }

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-display mb-6 text-white">
            Perché Early Access?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vantaggi esclusivi riservati a chi si iscrive prima
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-effect p-8 rounded-none h-full transition-all duration-300 border-white/10 hover:border-white/30">
                {/* Number */}
                <div className="text-6xl font-bold text-white/20 mb-6 font-display">
                  {feature.number}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-display mb-4 text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 h-px w-full max-w-4xl mx-auto bg-white/20"
        />
      </div>
    </section>
  )
}

export default Features
