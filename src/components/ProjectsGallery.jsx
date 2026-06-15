import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 6,
    title: 'PETRONAS Strategic Evolution & Super-App Ecosystem',
    category: 'Global Corporate Strategy / UI/UX Prototyping',
    description: "Conducted a comprehensive 5-year longitudinal analysis (2020–2025) of corporate reports to evaluate the company's Global Value Chain, phases of internationalization, and strategic partnerships. Applied advanced analytical frameworks (OLI Paradigm, PESTEL, SWOT, Porter's Five Forces) to assess global market positioning. Based on these data-driven insights, engineered growth hacking strategies (B2B co-marketing, geofence push notifications, gamification) and translated the strategic vision into a functional interactive web prototype for a new digital super-app ecosystem (Setel).",
    tags: ['Global Strategy', 'Growth Hacking', 'UI/UX Prototyping', 'Business Analytics', 'Super-App'],
    rotation: '1deg',
    links: [
      { url: 'https://setel-super-apps-prototype.vercel.app/', label: 'Prototype' },
      { url: 'https://canva.link/junmc4ko549e6f1', label: 'Analysis (Deck)' }
    ]
  },
  {
    id: 1,
    title: 'GigitAja (Sustainable Food Waste Platform)',
    category: 'Sustainable Business / UI/UX Prototyping',
    description: 'Spearheaded the core business vision and end-to-end execution of a tech initiative addressing food waste and SDGs (2, 12, 13) in Indonesia. Acted as the mastermind behind the sustainable business model, from initial ideation and market gap identification to formulating the comprehensive business plan. Led cross-discipline collaboration to translate this core business vision into a high-fidelity interactive web prototype demonstrating a complete purchase flow.',
    tags: ['Sustainable Business', 'UI/UX Prototyping', 'Business Strategy', 'Project Management', 'SDGs'],
    rotation: '-1deg',
    link: 'https://canva.link/uhca51olnsou5fu',
    linkType: 'Canva Booklet'
  },
  {
    id: 2,
    title: 'Senusa Kopi - POS & Inventory Management System',
    category: 'Web Application / Information Systems',
    description: 'A comprehensive web-based Point of Sale (POS) and inventory management system designed for coffee shops. Engineered complex master data management, automated stock deduction through recipe linking, role-based authorization, and real-time business performance reporting.',
    tags: ['PHP', 'MySQL', 'POS System', 'Inventory Management', 'Web Development'],
    rotation: '2deg',
    link: 'https://github.com/notursasa/SenusaKopiIndonesia',
    linkType: 'GitHub'
  },
  {
    id: 3,
    title: 'Manajemen Bank Sampah (Waste Bank Management)',
    category: 'Desktop Application / Software Engineering',
    description: 'A JavaFX desktop application integrated with MariaDB to streamline waste deposit operations and promote environmental sustainability. Features include secure user authentication (SHA-256), a gamified reward redemption system, and automated real-time transaction notifications via Discord Webhook.',
    tags: ['Java', 'JavaFX', 'MariaDB', 'Desktop App', 'Discord Webhook'],
    rotation: '-2deg',
    link: 'https://github.com/notursasa/ManajemenBankSampah',
    linkType: 'GitHub'
  },
  {
    id: 4,
    title: 'CareConnect Platform',
    category: 'Full-stack Development / Information Systems',
    description: 'Developed a comprehensive web application using low-code technology to seamlessly connect service providers with consumers. Managed end-to-end development, from designing an intuitive user interface to implementing backend database integration.',
    tags: ['Full-stack Development', 'Mendix', 'Low-code', 'Web Application', 'UI/UX'],
    rotation: '1deg',
    link: null,
    linkType: null
  },
  {
    id: 5,
    title: 'Arthamas Bengkel Information System',
    category: 'System Design / UI/UX Prototyping',
    description: 'Developed a comprehensive information system for a motorcycle repair shop to digitize manual operations, covering spare part inventory, service bookings, complaints handling, and financial reporting. Acted as the sole UI/UX Designer, engineering the complete visual experience from low-fidelity wireframes to a high-fidelity interactive prototype. Simultaneously served as the System Designer, architecting rigorous technical documentation including Use Case Descriptions, Activity Diagrams, System Sequence Diagrams (SSD), and Entity-Relationship Diagrams (ERD).',
    tags: ['System Design', 'UI/UX Design', 'Figma', 'UML Modeling', 'ERD', 'Business Application'],
    rotation: '-1.5deg',
    link: 'https://www.figma.com/proto/chXYOBbMRcP3FgtxXcRgSA/LEC-ABAD?node-id=56-3637&t=S59YgGidDbGkARGb-1',
    linkType: 'Figma'
  }
];

const ProjectsGallery = () => {
  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      {/* Background Scrapbook Elements */}
      <img src="/newElements/tulip soft pink.png" alt="" className="scrapbook-element" style={{ bottom: '10%', right: '-30px', width: '250px', transform: 'rotate(-15deg)' }} />

      <div className="container">
        <h2 className="display-lg text-center" style={{ marginBottom: 'var(--space-lg)' }}>Featured Projects</h2>
        
        <div className="grid-asymmetric">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={index === 0 ? "col-12" : "col-12 col-md-6"}
              style={{ transform: `rotate(${project.rotation})` }}
            >
              <div className="card" style={{ padding: 'var(--space-lg)', height: '100%', position: 'relative' }}>
                {index === 1 && (
                  <img src="/newElements/cat peeking.png" alt="" className="scrapbook-element" style={{ top: '10px', right: '10px', width: '80px' }} />
                )}
                {index === 2 && (
                  <img src="/newElements/bowtie.png" alt="" className="scrapbook-element" style={{ bottom: '10px', right: '10px', width: '50px', transform: 'rotate(15deg)' }} />
                )}
                <span className="label-caps" style={{ color: 'var(--color-secondary)' }}>{project.category}</span>
                <h3 className="headline-md" style={{ margin: 'var(--space-sm) 0' }}>{project.title}</h3>
                <p style={{ color: 'var(--color-on-surface-variant)', marginBottom: 'var(--space-md)' }}>{project.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="label-caps" 
                      style={{ 
                        padding: '4px 12px', 
                        backgroundColor: 'var(--color-secondary-container)', 
                        color: 'var(--color-on-secondary-container)',
                        borderRadius: 'var(--radius-sm)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(project.links || (project.link ? [{url: project.link, label: project.linkType}] : [])).length > 0 && (
                  <div style={{ marginTop: 'var(--space-lg)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                    {(project.links || (project.link ? [{url: project.link, label: project.linkType}] : [])).map((linkObj, i) => (
                      <a 
                        key={i}
                        href={linkObj.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="handwriting"
                        style={{ 
                          color: 'var(--color-primary)', 
                          textDecoration: 'none', 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '8px', 
                          fontSize: '1.2rem',
                          borderBottom: '2px dashed var(--color-primary)',
                          paddingBottom: '2px'
                        }}
                      >
                        <span>View {linkObj.label} &rarr;</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
