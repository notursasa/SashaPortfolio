import { motion } from 'framer-motion';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent to the Lyrical Garden.");
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="paper-container" 
          style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', backgroundImage: 'url("/newElements/scrapbook paper orientation vertical background.png")', backgroundSize: 'cover', backgroundColor: 'transparent' }}
        >
          {/* Scrapbook Elements */}
          <img src="/newElements/black cat.png" alt="" className="scrapbook-element" style={{ bottom: '-10px', left: '-50px', width: '110px' }} />
          <img src="/newElements/plant.png" alt="" className="scrapbook-element scrapbook-hide-mobile" style={{ top: '-50px', right: '-40px', width: '130px' }} />
          <div className="text-center" style={{ marginBottom: 'var(--space-lg)' }}>
            <h2 className="display-lg">Send a Note</h2>
            <p className="handwriting" style={{ fontSize: '1.5rem', color: 'var(--color-on-surface-variant)' }}>Let's discuss strategy, design, or just chat.</p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <div className="grid-asymmetric">
              <div className="col-12 col-md-6">
                <input type="text" placeholder="YOUR NAME" className="input-minimalist" required />
              </div>
              <div className="col-12 col-md-6">
                <input type="email" placeholder="EMAIL ADDRESS" className="input-minimalist" required />
              </div>
            </div>
            
            <textarea 
              placeholder="YOUR MESSAGE" 
              className="input-minimalist" 
              rows="4" 
              style={{ resize: 'vertical' }}
              required
            ></textarea>
            
            <div className="text-center" style={{ marginTop: 'var(--space-md)' }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="label-caps"
                style={{ 
                  padding: 'var(--space-sm) var(--space-lg)', 
                  backgroundColor: 'transparent',
                  border: '1px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                Deliver Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
