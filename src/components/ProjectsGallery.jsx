import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Market Expansion Strategy',
    category: 'Business Strategy',
    description: 'A comprehensive feasibility study and market entry strategy for a tech startup expanding into Southeast Asia.',
    tags: ['Market Research', 'Financial Modeling', 'SWOT'],
    rotation: '-1deg'
  },
  {
    id: 2,
    title: 'Enterprise Architecture Redesign',
    category: 'Information Systems',
    description: 'Streamlining internal workflows and data pipelines for a mid-sized logistics company using modern cloud infrastructure.',
    tags: ['System Analysis', 'Cloud Infrastructure', 'UML'],
    rotation: '2deg'
  },
  {
    id: 3,
    title: 'Customer Loyalty App',
    category: 'Digital Innovation',
    description: 'Designing a gamified loyalty program interface and backend architecture to increase customer retention by 30%.',
    tags: ['UX Design', 'Product Management', 'Data Analytics'],
    rotation: '-2deg'
  }
];

const ProjectsGallery = () => {
  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      {/* Background Scrapbook Elements */}
      <img src="/newElements/tulip soft pink.png" alt="" className="scrapbook-element" style={{ bottom: '10%', right: '-30px', width: '250px', transform: 'rotate(-15deg)' }} />

      <div className="container">
        <h2 className="display-lg text-center" style={{ marginBottom: 'var(--space-lg)' }}>Projects</h2>
        
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
                  <img src="/newElements/cat peeking.png" alt="" className="scrapbook-element" style={{ top: '-40px', right: '10px', width: '80px' }} />
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
