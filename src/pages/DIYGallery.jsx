import diyHero from '../assets/diy_hero.png';

const DIYGallery = () => {
  const projects = [
    { title: 'Artisan Beeswax Wraps', difficulty: 'Beginner', time: '30 mins', img: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798156?q=80&w=600' },
    { title: 'Hand-Poured Soy Candles', difficulty: 'Intermediate', time: '2 hours', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600' },
    { title: 'Ceramic Trincv cket Dish', difficulty: 'Advanced', time: '3 days', img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600' }
  ];

  return (
    <div className="diy-gallery">
      <section className="diy-hero section-padding">
        <div className="container">
          <div className="diy-hero-card bg-neutral grid">
            <div className="diy-hero-img">
              <img src={diyHero} alt="DIY Studio" />
            </div>
            <div className="diy-hero-content flex-center">
              <div className="content-inner">
                <span className="tag">CREATIVE GALLERY</span>
                <h1 className="text-serif">Create Your Own <br /><span className="italic">Magic.</span></h1>
                <p>Bringing hands-on creativity to your everyday life. Simple, beautiful projects that spark joy and inspire mindfulness.</p>
                <div className="diy-search flex">
                  <input type="text" placeholder="Search projects..." />
                  <button className="btn btn-primary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects section-padding">
        <div className="container">
          <div className="section-header flex-between">
            <h2 className="section-title">Featured Projects</h2>
            <div className="filter-tabs flex">
              <button className="filter-tab active">All</button>
              <button className="filter-tab">Home</button>
              <button className="filter-tab">Beauty</button>
              <button className="filter-tab">Tech</button>
            </div>
          </div>
          <div className="projects-grid grid">
            {projects.map((p, i) => (
              <div key={i} className="project-card">
                <div className="project-img-wrapper">
                  <img src={p.img} alt={p.title} />
                  <span className="difficulty-tag">{p.difficulty}</span>
                </div>
                <div className="project-details">
                  <h3>{p.title}</h3>
                  <div className="project-meta flex">
                    <span>⏱ {p.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gift-guides section-padding bg-neutral">
        <div className="container">
          <h2 className="section-title text-center">Gift Guides</h2>
          <div className="guides-grid grid">
             <div className="guide-card">
               <div className="guide-img"><img src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=600" alt="Self-Care Gift Guide" /></div>
               <h3>The Self-Care Enthusiast</h3>
             </div>
             <div className="guide-card">
               <div className="guide-img"><img src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=600" alt="Home Decor Guide" /></div>
               <h3>Modern Home Decor</h3>
             </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .diy-hero-card {
          grid-template-columns: 1fr 1fr;
          border-radius: var(--radius-lg);
          overflow: hidden;
          min-height: 500px;
        }
        
        .diy-hero-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .content-inner {
          padding: 60px;
          max-width: 500px;
        }
        
        .tag {
          color: var(--secondary);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.8rem;
          margin-bottom: 24px;
          display: block;
        }
        
        .diy-hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 24px;
        }
        
        .diy-search {
          margin-top: 40px;
          gap: 8px;
        }
        
        .diy-search input {
          flex: 1;
          padding: 12px 20px;
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.05);
          font-family: var(--font-sans);
        }
        
        .filter-tab {
          padding: 8px 20px;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(0,0,0,0.5);
        }
        
        .filter-tab.active {
          background: var(--primary);
          color: white;
        }
        
        .projects-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 48px;
        }
        
        .project-card {
          cursor: pointer;
        }
        
        .project-img-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 20px;
          aspect-ratio: 4/5;
        }
        
        .project-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        
        .project-card:hover img {
          transform: scale(1.05);
        }
        
        .difficulty-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(4px);
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        
        .project-details h3 {
          font-family: var(--font-sans);
          font-size: 1.25rem;
          margin-bottom: 8px;
        }
        
        .project-meta {
          font-size: 0.85rem;
          color: rgba(0,0,0,0.5);
        }
        
        .guides-grid {
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          margin-top: 48px;
        }
        
        .guide-card {
          text-align: center;
        }
        
        .guide-img {
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 24px;
        }
        
        .guide-img img {
          width: 100%;
          height: 350px;
          object-fit: cover;
        }
        
        .guide-card h3 {
          font-size: 1.5rem;
        }
        
        @media (max-width: 1024px) {
          .diy-hero-card {
            grid-template-columns: 1fr;
          }
          .projects-grid {
            grid-template-columns: 1fr 1fr;
          }
           .content-inner {
            padding: 40px;
            text-align: center;
            max-width: 100%;
          }
        }
        
        @media (max-width: 768px) {
           .projects-grid, .guides-grid {
            grid-template-columns: 1fr;
          }
          .section-header {
            flex-direction: column;
            gap: 20px;
          }
           .diy-hero-content h1 {
            font-size: 2.5rem;
          }
        }
      `}} />
    </div>
  );
};

export default DIYGallery;
