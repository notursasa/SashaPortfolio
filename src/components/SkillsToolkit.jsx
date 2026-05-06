import { useEffect, useRef } from 'react';

const SkillsToolkit = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Clear container to prevent duplicate clouds on React StrictMode re-renders
    containerRef.current.innerHTML = '';

    const texts = [
      `<img src="/skillElements/CSS3_logo.svg.png" width="60" />`,
      `<img src="/skillElements/HTML5_logo_and_wordmark.svg.png" width="60" />`,
      `<img src="/skillElements/Java_logo_PNG10.png" width="60" />`,
      `<img src="/skillElements/Javascript_badge.svg.png" width="60" />`,
      `<img src="/skillElements/New_Power_BI_Logo.svg.png" width="60" />`,
      `<img src="/skillElements/React-icon.svg.png" width="60" />`,
      `<img src="/skillElements/Typescript_logo_2020.svg.png" width="60" />`,
      `<img src="/skillElements/Vitejs-logo.svg.png" width="60" />`,
      `<img src="/skillElements/figma-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.webp" width="60" />`,
      `<img src="/skillElements/microsoft sql server.svg" width="60" />`,
      `<img src="/skillElements/PHP-logo.svg.png" width="60" />`,
      `<img src="/skillElements/Octicons-mark-github.svg" width="60" />`
    ];

    const options = {
      radius: window.innerWidth < 768 ? 150 : 250,
      maxSpeed: 'fast',
      initSpeed: 'normal',
      direction: 135,
      keep: true,
      useHTML: true,
      useContainerInlineStyles: true,
      useItemInlineStyles: true,
    };

    // Dynamically import TagCloud to avoid SSR issues if we ever used Next.js, 
    // and to safely initialize it in Vite.
    import('TagCloud').then((TagCloudModule) => {
      const TagCloud = TagCloudModule.default;
      TagCloud(containerRef.current, texts, options);
    });

  }, []);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <img src="/newElements/cat sleep.png" alt="" className="scrapbook-element scrapbook-hide-mobile" style={{ top: '-20px', left: '50%', transform: 'translateX(-50%)', width: '120px' }} />
      <img src="/newElements/star.png" alt="" className="scrapbook-element" style={{ top: '30%', left: '10%', width: '60px' }} />
      <img src="/newElements/flower pink2.png" alt="" className="scrapbook-element" style={{ bottom: '20%', right: '10%', width: '150px' }} />
      <img src="/newElements/cat tongue out.png" alt="" className="scrapbook-element" style={{ bottom: '10px', left: '15%', width: '90px', transform: 'rotate(-10deg)' }} />

      <div className="container">
        <h2 className="display-lg text-center" style={{ marginBottom: 'var(--space-lg)' }}>The Toolkit</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px' }}>
          <div ref={containerRef} className="tagcloud-wrap"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsToolkit;
