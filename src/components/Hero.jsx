import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container text-center" style={{ position: 'relative' }}>
        {/* Scrapbook Elements */}
        <motion.img 
          src="/newElements/starfall.png" 
          alt="" 
          className="scrapbook-element" 
          style={{ top: '-10%', left: '10%', width: '120px', transform: 'rotate(-15deg)' }} 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img 
          src="/newElements/forget-me-not.png" 
          alt="" 
          className="scrapbook-element" 
          style={{ bottom: '10%', right: '5%', width: '180px', transform: 'rotate(20deg)' }}
          animate={{ rotate: [20, 25, 20] }} 
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h2 className="handwriting" style={{ marginBottom: 'var(--space-md)' }}>Aisyah "Sasha" Raissa Algebra</h2>
          <h1 className="display-lg" style={{ color: 'var(--color-primary)', marginBottom: 'var(--space-lg)' }}>
            The Lyrical Garden
          </h1>
          <p className="headline-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '600px', margin: '0 auto var(--space-lg)' }}>
            Information Systems & Business Strategy
          </p>
          
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <motion.a 
              href="#about"
              className="label-caps"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'inline-block',
                padding: 'var(--space-md) var(--space-lg)', 
                backgroundColor: 'var(--color-primary)', 
                color: 'white', 
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              Walk through the Garden
            </motion.a>
            <motion.a 
              href="https://binusianorg-my.sharepoint.com/personal/aisyah_algebra_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQCl-WAviwZRQY00xPcdmbPKAYPisPsbxkAY6VxaO2O7rCI&e=JBrfZX"
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                display: 'inline-block',
                padding: 'var(--space-md) var(--space-lg)', 
                backgroundColor: 'transparent',
                border: '2px solid var(--color-primary)',
                color: 'var(--color-primary)', 
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-soft)'
              }}
            >
              View CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
