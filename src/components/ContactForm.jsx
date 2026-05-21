import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    // Web3Forms Access Key
    formData.append("access_key", "ac53f806-8ccc-42a1-90d2-c8b48dd20cc4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset(); // clear the form
        setTimeout(() => setStatus(''), 5000); // clear success message after 5 seconds
      } else {
        console.error("Error from Web3Forms", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Fetch error", error);
      setStatus('error');
    }
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
                <input type="text" name="name" placeholder="YOUR NAME" className="input-minimalist" required />
              </div>
              <div className="col-12 col-md-6">
                <input type="email" name="email" placeholder="EMAIL ADDRESS" className="input-minimalist" required />
              </div>
            </div>
            
            <textarea 
              name="message"
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
                disabled={status === 'submitting'}
                className="label-caps"
                style={{ 
                  padding: 'var(--space-sm) var(--space-lg)', 
                  backgroundColor: status === 'success' ? 'var(--color-primary)' : 'transparent',
                  border: '1px solid var(--color-primary)',
                  color: status === 'success' ? 'white' : 'var(--color-primary)',
                  borderRadius: 'var(--radius-full)',
                  opacity: status === 'submitting' ? 0.7 : 1,
                  cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Deliver Message'}
              </motion.button>
              
              {status === 'error' && (
                <p style={{ color: 'red', marginTop: 'var(--space-sm)' }}>
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
