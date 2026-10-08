import ArticleCard from '../components/ArticleCard';
import heroImage from '../assets/hero_lifestyle.png';
import fashionImage from '../assets/fashion_collection.png';

const Home = () => {
  const latestArticles = [
    {
      id: 1,
      title: 'The Art of Stillness: 5 Morning Rituals for a Grounded Day',
      excerpt: 'Discover how taking just 10 minutes for yourself each morning can transform your productivity and mental clarity.',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1545202720-afcee06f8902?q=80&w=600&auto=format&fit=crop',
      date: 'OCT 24, 2024',
      author: 'Emilia Grey'
    },
    {
      id: 2,
      title: 'Seasonal Trends: How to Master the "Cozy Luxe" Aesthetic',
      excerpt: 'Layering textures and soft tones to create a wardrobe that feels like a warm embrace.',
      category: 'Fashion',
      image: fashionImage,
      date: 'OCT 22, 2024',
      author: 'Sophia Chen'
    },
    {
      id: 3,
      title: '5 DIY Skincare Hacks That Actually Work (and 3 to Avoid)',
      excerpt: 'From honey glow masks to caffeine eye treatments, here’s what’s worth your time.',
      category: 'Beauty',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=600&auto=format&fit=crop',
      date: 'OCT 20, 2024',
      author: 'Lina Vance'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section flex-center">
        <div className="container grid hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">Elevate Your <br /> <span className="italic">Everyday.</span></h1>
            <p className="hero-subtitle">Curated inspiration for the modern woman who seeks elegance in every detail.</p>
            <div className="hero-cta flex">
              <button className="btn btn-primary">Explore Hubs</button>
              <button className="btn btn-secondary-outline">New Arrivals</button>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroImage} alt="Lifestyle Hero" className="hero-img animate-float" />
            <div className="floating-badge">
              <span className="text-serif">The Monday Muse</span>
              <p>Issue #42 is out now</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="featured-categories section-padding bg-neutral">
        <div className="container">
          <div className="section-header flex-between">
            <h2 className="section-title">Curated Collections</h2>
            <a href="#" className="view-all">View All Categories &rarr;</a>
          </div>
          <div className="categories-grid grid">
            <div className="category-card lifestyle-card">
              <div className="cat-img-wrapper">
                <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=800&auto=format&fit=crop" alt="Lifestyle" />
              </div>
              <h3>Lifestyle & <br /> Self-Care</h3>
            </div>
            <div className="category-card fashion-card">
              <div className="cat-img-wrapper">
                <img src={fashionImage} alt="Fashion" />
              </div>
              <h3>Fashion & <br /> Style</h3>
            </div>
            <div className="category-card diy-card">
              <div className="cat-img-wrapper">
                <img src="https://images.unsplash.com/photo-1603502840248-2651f67fec89?q=80&w=800&auto=format&fit=crop" alt="DIY" />
              </div>
              <h3>DIY & <br /> Crafts</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="latest-articles section-padding">
        <div className="container">
          <div className="section-header flex-center-v">
            <h2 className="section-title">Latest Articles</h2>
          </div>
          <div className="articles-grid grid">
            {latestArticles.map(article => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-hero container">
        <div className="newsletter-box text-center bg-neutral">
          <h2 className="text-serif">Join the Inner Circle</h2>
          <p>Get exclusive access to our weekly editorial guides and early access to the Ultimate Girl Boutique.</p>
          <div className="newsletter-inputs flex-center">
            <input type="email" placeholder="Your best email..." />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <p className="newsletter-disclaimer">By subscribing, you agree to our privacy policy and terms.</p>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .hero-section {
          min-height: 90vh;
          padding: 40px 0;
          overflow: hidden;
        }
        
        .hero-grid {
          grid-template-columns: 1fr 1.2fr;
          align-items: center;
          gap: 60px;
        }
        
        .hero-title {
          font-size: 5rem;
          line-height: 0.9;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }
        
        .hero-title span {
          color: var(--primary);
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: rgba(26,26,26,0.7);
          margin-bottom: 40px;
          max-width: 450px;
        }
        
        .hero-cta {
          gap: 16px;
        }
        
        .btn-secondary-outline {
          border: 1px solid var(--secondary);
          color: var(--secondary);
        }
        
        .btn-secondary-outline:hover {
          background: var(--secondary);
          color: white;
        }
        
        .hero-visual {
          position: relative;
        }
        
        .hero-img {
          border-radius: 40% 60% 60% 40% / 60% 30% 70% 40%;
          width: 100%;
          max-width: 550px;
          object-fit: cover;
          box-shadow: 0 30px 60px rgba(240, 98, 146, 0.2);
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        .floating-badge {
          position: absolute;
          bottom: 40px;
          left: -40px;
          background: white;
          padding: 20px 24px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border-left: 4px solid var(--primary);
        }
        
        .section-header {
          margin-bottom: 48px;
        }
        
        .section-title {
          font-size: 2.5rem;
        }
        
        .view-all {
          font-weight: 600;
          color: var(--primary);
          font-size: 0.9rem;
        }
        
        .categories-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        .category-card {
          position: relative;
          text-align: center;
          cursor: pointer;
        }
        
        .cat-img-wrapper {
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: 24px;
        }
        
        .cat-img-wrapper img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .category-card:hover .cat-img-wrapper img {
          transform: scale(1.1);
        }
        
        .category-card h3 {
          font-size: 1.5rem;
          color: var(--dark);
        }
        
        .articles-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        
        .newsletter-box {
          padding: 80px;
          border-radius: var(--radius-lg);
          margin-bottom: 80px;
        }
        
        .newsletter-box h2 {
          font-size: 3rem;
          margin-bottom: 16px;
        }
        
        .newsletter-box p {
          max-width: 600px;
          margin: 0 auto 32px;
          color: rgba(26,26,26,0.6);
        }
        
        .newsletter-inputs {
          gap: 12px;
        }
        
        .newsletter-inputs input {
          width: 100%;
          max-width: 400px;
          padding: 16px 24px;
          border-radius: 100px;
          border: 1px solid rgba(0,0,0,0.1);
          font-family: var(--font-sans);
        }
        
        .newsletter-disclaimer {
          font-size: 0.8rem !important;
          margin-top: 24px !important;
        }
        
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content {
            order: 2;
          }
          .hero-visual {
            order: 1;
            margin-bottom: 40px;
          }
          .hero-subtitle {
            margin: 0 auto 40px;
          }
          .hero-cta {
            justify-content: center;
          }
          .hero-title {
            font-size: 4rem;
          }
          .articles-grid, .categories-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }
          .articles-grid, .categories-grid {
            grid-template-columns: 1fr;
          }
          .newsletter-box {
            padding: 40px 24px;
          }
        }
      `}} />
    </div>
  );
};

export default Home;
