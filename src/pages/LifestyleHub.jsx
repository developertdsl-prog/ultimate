import ArticleCard from '../components/ArticleCard';

const LifestyleHub = () => {
  const essentials = [
    { name: 'Mindfulness Journal', price: '$28', img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=400' },
    { name: 'Santal & Rose Candle', price: '$42', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=400' },
    { name: 'Silk  Mask', price: '$35', img: 'https://images.unsplash.com/photo-1583073010140-083907a97405?q=80&w=400' }
  ];

  const articles = [
    {
      id: 1,
      title: 'The Art of Stillness: 5 Morning Rituals for a Grounded Day',
      excerpt: 'Discover how taking just 10 minutes for yourself each morning can transform your productivity.',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1545202720-afcee06f8902?q=80&w=600',
      date: 'OCT 24, 2024',
      author: 'Emilia Grey'
    },
    {
      id: 4,
      title: 'Creating Your Sanctuary: The Psychology of Home Office Design',
      excerpt: 'How your environment influences your focus and creativity in the digital age.',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600',
      date: 'OCT 18, 2024',
      author: 'Maya Rivers'
    }
  ];

  return (
    <div className="lifestyle-hub">
      <section className="hub-hero section-padding">
        <div className="container grid hub-hero-grid">
          <div className="hub-hero-visual animate-fade-in">
            <img src="https://images.unsplash.com/photo-1512418490979-92798ccc13a0?q=80&w=800" alt="Lifestyle Hero" className="aspect-portrait" />
          </div>
          <div className="hub-hero-content">
            <span className="subtitle text-sans">LIFESTYLE & WELLNESS</span>
            <h1 className="text-serif">The Art of <br /><span className="italic">Stillness.</span></h1>
            <p>Exploring the intersection of intentionality and modern living. Learn how to cultivate a life of purpose and peace among the noise.</p>
            <button className="btn btn-primary">Begin the Journey</button>
          </div>
        </div>
      </section>

      <section className="curated-essentials section-padding bg-neutral">
        <div className="container">
          <h2 className="section-title text-center">Curated Essentials</h2>
          <div className="essentials-grid grid">
            {essentials.map((item, i) => (
              <div key={i} className="essential-item text-center">
                <div className="essential-img-wrapper">
                  <img src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p className="price">{item.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-40">
            <button className="btn btn-secondary">Shop the Collection</button>
          </div>
        </div>
      </section>

      <section className="hub-articles section-padding">
        <div className="container">
          <h2 className="section-title">Latest in Lifestyle</h2>
          <div className="articles-grid grid">
            {articles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .hub-hero-grid {
          grid-template-columns: 1.2fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        .hub-hero-visual img {
          border-radius: var(--radius-lg);
          width: 100%;
          box-shadow: 20px 20px 0 var(--neutral);
        }
        
        .subtitle {
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.8rem;
          margin-bottom: 24px;
          display: block;
        }
        
        .hub-hero-content h1 {
          font-size: 4rem;
          margin-bottom: 24px;
        }
        
        .hub-hero-content p {
          font-size: 1.2rem;
          color: rgba(26,26,26,0.7);
          margin-bottom: 40px;
        }
        
        .essentials-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }
        
        .essential-img-wrapper {
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 20px;
          aspect-ratio: 1/1;
        }
        
        .essential-img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .essential-item:hover img {
          transform: scale(1.05);
        }
        
        .essential-item h3 {
          font-size: 1.2rem;
          font-family: var(--font-sans);
          font-weight: 600;
        }
        
        .price {
          color: var(--primary);
          font-weight: 700;
          margin-top: 8px;
        }
        
        .mt-40 { margin-top: 40px; }
        
        @media (max-width: 1024px) {
          .hub-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hub-hero-visual {
            order: 2;
          }
          .hub-hero-content {
            order: 1;
          }
        }
        
        @media (max-width: 768px) {
          .essentials-grid {
            grid-template-columns: 1fr;
          }
          .hub-hero-content h1 {
            font-size: 3rem;
          }
        }
      `}} />
    </div>
  );
};

export default LifestyleHub;
