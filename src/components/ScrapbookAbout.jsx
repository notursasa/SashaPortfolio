import { motion } from 'framer-motion';

const ScrapbookAbout = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="paper-container grid-asymmetric"
          style={{ position: 'relative', backgroundImage: 'url("/newElements/about me backgrounds.png")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'transparent', boxShadow: 'var(--shadow-hover)' }}
        >
          {/* Scrapbook Elements */}
          <img src="/newElements/pinned paper.png" alt="" className="scrapbook-element" style={{ top: '-40px', right: '-20px', width: '150px', zIndex: -1, transform: 'rotate(10deg)' }} />
          <img src="/newElements/cat glasses.png" alt="" className="scrapbook-element" style={{ bottom: '-30px', left: '10%', width: '100px' }} />
          {/* Portrait Column */}
          <div className="col-12 col-md-5">
            <div className="card" style={{ padding: '16px 16px 48px', backgroundColor: '#fff', transform: 'rotate(-2deg)' }}>
              <img 
                src="/newElements/my photo.jpg" 
                alt="Aisyah Sasha Raissa Algebra" 
                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-sm)' }}
              />
              <p className="handwriting text-center" style={{ marginTop: '16px', color: 'var(--color-on-surface-variant)' }}>
                Aisyah "Sasha" Raissa Algebra
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="col-12 col-md-7" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: '15%', paddingLeft: '0%' }}>
            <h2 className="headline-md" style={{ marginBottom: 'var(--space-md)' }}>The Cheerful Scholar</h2>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              Hello! I'm Sasha, a Digital Business Innovation student pursuing a Dual Degree at Binus University. 
              My journey lies at the intersection of rigorous technical systems and vibrant business strategies. 
            </p>
            <p style={{ marginBottom: 'var(--space-md)' }}>
              I believe that the best solutions are not just functional, but profoundly human and artistic. 
              Like a well-composed piece of jazz music, good architecture requires intuition, flow, and structural integrity.
            </p>
            <p className="handwriting" style={{ fontSize: '2rem' }}>
              Let's create something beautiful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrapbookAbout;
