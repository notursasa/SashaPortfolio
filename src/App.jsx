import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import ScrapbookAbout from './components/ScrapbookAbout';
import ProjectsGallery from './components/ProjectsGallery';
import SkillsToolkit from './components/SkillsToolkit';
import ContactForm from './components/ContactForm';
import CustomCursor from './components/CustomCursor';
import InteractiveGrid from './components/InteractiveGrid';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    
    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-container">
      <CustomCursor />
      
      {/* Global Background Layers */}
      <div className="dreamy-auras">
        <div className="aura aura-pink"></div>
        <div className="aura aura-blue"></div>
      </div>
      <InteractiveGrid />

      {/* Global Background motif */}
      <img 
        src="/newElements/flower pink.png" 
        alt="" 
        className="floral-bg" 
        style={{ top: '10%', left: '-5%', width: '300px', transform: 'rotate(15deg)', opacity: 0.15 }}
      />
      <img 
        src="/newElements/blue flower.png" 
        alt="" 
        className="floral-bg" 
        style={{ top: '40%', right: '-5%', width: '400px', transform: 'rotate(-45deg)', opacity: 0.1 }}
      />
      <img 
        src="/newElements/flower.png" 
        alt="" 
        className="floral-bg" 
        style={{ bottom: '20%', left: '-10%', width: '350px', transform: 'rotate(25deg)', opacity: 0.1 }}
      />

      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: 'var(--space-md) 0',
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(250, 249, 246, 0.7)'
      }}>
        <nav className="container" style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)' }}>
          <a href="#about" className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>About</a>
          <a href="#projects" className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>Projects</a>
          <a href="#skills" className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>Skills</a>
          <a href="#contact" className="label-caps" style={{ color: 'var(--color-on-surface-variant)' }}>Contact</a>
          <a href="https://binusianorg-my.sharepoint.com/personal/aisyah_algebra_binus_ac_id/_layouts/15/guestaccess.aspx?share=IQCl-WAviwZRQY00xPcdmbPKAYPisPsbxkAY6VxaO2O7rCI&e=JBrfZX" target="_blank" rel="noopener noreferrer" className="label-caps" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>CV</a>
        </nav>
      </header>

      <main>
        <Hero />
        <ScrapbookAbout />
        <ProjectsGallery />
        <SkillsToolkit />
        <ContactForm />
      </main>

      <footer className="text-center" style={{ padding: 'var(--space-lg) 0', color: 'var(--color-on-surface-variant)' }}>
        <p className="label-caps">© {new Date().getFullYear()} Sasha's Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
