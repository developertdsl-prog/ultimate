import ArticleCard from '../components/ArticleCard';
import fashionHero from '../assets/fashion_collection.png';

const FashionHub = () => {
  const outfits = [
    { title: 'The Everyday Chic', style: 'Minimalist', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400' },
    { title: 'Autumn Harvest', style: 'Bohemian', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400' },
    { title: 'Midtown Modern', style: 'Corporate', img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=400' },
    { title: 'Date Night Rose', style: 'Romantic', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400' }
  ];

  return (
    <div className="fashion-hub">
      <section className="fashion-hero container section-padding">
        <div className="fashion-hero-overlap grid">
          <div className="hero-img-box animate-scale-in">
            <img src={fashionHero} alt="Fashion Hero" className="hero-main-img" />
            <div className="overlay-info">
              <span className="caption">FEATURED LOOK</span>
              <h4>Cozy Luxe 2024</h4>
            </div>
          </div>
          <div className="hero-content-box">
            <h1 className="text-serif fashion-title">Seasonal <br /> <span className="italic">Trends.</span></h1>
            <p>Elevating your wardrobe with pieces that transition flawlessly from day to dusk. Discover this season's most-wanted silhouettes.</p>
            <div className="fashion-cta-row flex">
              <button className="btn btn-primary">Shop the Look</button>
              <button className="btn btn-secondary">Trend Report</button>
            </div>
          </div>
        </div>
      </section>

      <section className="outfit-inspiration section-padding">
        <div className="container">
          <h2 className="section-title text-center">Outfit Inspiration</h2>
          <div className="outfits-grid grid">
            {outfits.map((look, i) => (
              <div key={i} className="outfit-card">
                <div className="outfit-img-wrapper">
                  <img src={look.img} alt={look.title} />
                  <div className="outfit-info-overlay">
                    <span className="style-tag">{look.style}</span>
                    <h3>{look.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fashion-hacks section-padding bg-neutral">
        <div className="container grid hacks-container">
          <div className="hacks-text">
            <h2 className="section-title">Fashion Hacks</h2>
            <div className="hacks-list">
              <div className="hack-item">
                <h4>01. The Perfect Tuck</h4>
                <p>Master the "French Tuck" for an effortlessly polished look with any oversized knit.</p>
              </div>
              <div className="hack-item">
                <h4>02. Accessorizing 101</h4>
                <p>Three ways to style a silk scarf for hair, bags, and necklines.</p>
              </div>
              <div className="hack-item">
                <h4>03. Capsule Building</h4>
                <p>The 10 essential pieces you need to create over 30 unique outfits.</p>
              </div>
            </div>
          </div>
          <div className="hacks-visual flex-center">
            <div className="circle-bg">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400" alt="Capsule Wardrobe" />
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .fashion-hero-overlap {
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
        }
        
        .hero-img-box {
          position: relative;
          z-index: 1;
        }
        
        .hero-main-img {
          width: 100%;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-md);
        }
        
        .overlay-info {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: white;
          padding: 24px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          z-index: 5;
          text-align: center;
        }
        
        .overlay-info .caption {
          font-size: 0.7rem;
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 700;
        }
        
        .fashion-title {
          font-size: 4.5rem;
          line-height: 0.95;
          margin-bottom: 24px;
        }
        
        .fashion-cta-row {
          gap: 16px;
          margin-top: 32px;
        }
        
        .outfits-grid {
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 60px;
        }
        
        .outfit-img-wrapper {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          aspect-ratio: 3/4;
        }
        
        .outfit-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .outfit-info-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .outfit-card:hover .outfit-info-overlay {
          transform: translateY(0);
          opacity: 1;
        }
        
        .outfit-card:hover img {
          transform: scale(1.1);
        }
        
        .style-tag {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--secondary);
          font-weight: 700;
        }
        
        .outfit-info-overlay h3 {
          font-family: var(--font-sans);
          font-size: 1.1rem;
          margin-top: 8px;
        }
        
        .hacks-container {
          grid-template-columns: 1.2fr 1fr;
          gap: 100px;
          align-items: center;
        }
        
        .hack-item {
          margin-bottom: 40px;
        }
        
        .hack-item h4 {
          font-family: var(--font-sans);
          color: var(--primary);
          margin-bottom: 12px;
          font-size: 1.3rem;
        }
        
        .hacks-visual .circle-bg {
          width: 400px;
          height: 400px;
          background: var(--tertiary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .hacks-visual img {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: var(--shadow-md);
        }
        
        @media (max-width: 1024px) {
          .fashion-hero-overlap {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .fashion-cta-row {
            justify-content: center;
          }
          .overlay-info {
            right: 50%;
            transform: translateX(50%);
          }
          .outfits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .hacks-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hacks-visual {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .fashion-title {
            font-size: 3rem;
          }
          .outfits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}} />
    </div>
  );
};

export default FashionHub;
