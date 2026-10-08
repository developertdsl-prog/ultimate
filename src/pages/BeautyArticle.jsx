const BeautyArticle = () => {
  return (
    <article className="beauty-article">
      <header className="article-header section-padding">
        <div className="container text-center">
          <div className="meta-info flex-center">
            <span className="category">BEAUTY & SKINCARE</span>
            <span className="divider">/</span>
            <span className="date">OCTOBER 20, 2024</span>
          </div>
          <h1 className="text-serif article-main-title">5 DIY Skincare Hacks <br /> <span className="italic">That Actually Work.</span></h1>
          <div className="author-box flex-center">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100" alt="Lina Vance" className="author-avatar" />
            <div className="author-details text-left">
              <strong>Lina Vance</strong>
              <p>Beauty Editor</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container article-body">
        <div className="main-featured-image">
          <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200" alt="Skincare Setup" />
        </div>
        
        <div className="content-wrapper">
          <p className="lead-text">In a world full of $200 serums and complicated 12-step routines, sometimes the best solutions are sitting right in your kitchen cabinet. After years of testing high-end products and ancient home remedies, I’ve distilled the noise down to these five effective DIY hacks.</p>
          
          <section className="hack-section">
            <h2>01. The Honey Glow Mask</h2>
            <p>Raw Manuka honey is a natural humectant and has powerful antibacterial properties. Apply a thin layer to clean skin for 15 minutes to soothe inflammation and lock in moisture.</p>
            <div className="pro-tip">
              <strong>PRO TIP:</strong> Mix in a pinch of turmeric for extra brightening, but don't leave it on for more than 5 minutes to avoid staining!
            </div>
          </section>

          <section className="hack-section">
            <h2>02. Green Tea De-Puffing</h2>
            <p>The caffeine and antioxidants in green tea are incredible for reducing under-eye puffiness. Steep two bags, let them cool in the fridge, and place them over your eyes for 5-10 minutes.</p>
          </section>

          <img src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?q=80&w=800" alt="Natural Ingredients" className="content-img" />

          <section className="hack-section">
            <h2>03. Silk Over Cotton</h2>
            <p>Technically not a "formula" but a lifestyle hack. Switching to a silk pillowcase reduces friction on your skin and hair, preventing "sleep lines" and morning frizz.</p>
          </section>

          <blockquote className="article-quote text-serif">
            "Beauty isn't about perfection; it's about the ritual of caring for yourself with intention."
          </blockquote>

          <section className="hack-section">
            <h2>04. The 60-Second Rule</h2>
            <p>Cleanse your face for a full 60 seconds. Most people only wash for 15. This gives the ingredients in your cleanser time to actually break down oils and dirt.</p>
          </section>

          <section className="hack-section">
            <h2>05. Rice Water Rinse</h2>
            <p>Used for centuries in Asia, fermented rice water is rich in vitamins and minerals that strengthen hair and brighten the complexion. Use it as a final rinse after your normal routine.</p>
          </section>
          
          <div className="article-tags flex">
            <span>#Skincare</span>
            <span>#DIYBeauty</span>
            <span>#Wellness</span>
            <span>#SelfCare</span>
          </div>
        </div>
      </div>

      <section className="related-articles section-padding bg-neutral">
        <div className="container">
          <h2 className="section-title text-center">You Might Also Adore...</h2>
          <div className="articles-grid grid">
            <div className="mini-card flex">
               <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=300" alt="Morning Routine" />
               <div>
                 <h4>The Art of Stillness</h4>
                 <p>Lifestyle</p>
               </div>
            </div>
             <div className="mini-card flex">
               <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=300" alt="Fashion Hacks" />
               <div>
                 <h4>Fashion Hacks 101</h4>
                 <p>Fashion</p>
               </div>
            </div>
             <div className="mini-card flex">
               <img src="https://images.unsplash.com/photo-1603502840248-2651f67fec89?q=80&w=300" alt="DIY Project" />
               <div>
                 <h4>Creative Magic</h4>
                 <p>DIY</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .meta-info {
          gap: 12px;
          margin-bottom: 24px;
        }
        
        .meta-info .category {
          color: var(--primary);
          font-weight: 700;
          letter-spacing: 2px;
          font-size: 0.8rem;
        }
        
        .divider { color: rgba(0,0,0,0.1); }
        
        .date {
          font-size: 0.8rem;
          color: rgba(0,0,0,0.5);
          font-weight: 600;
        }
        
        .article-main-title {
          font-size: 4rem;
          margin-bottom: 40px;
        }
        
        .author-box {
          gap: 16px;
        }
        
        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .author-details strong {
          display: block;
          font-size: 1rem;
        }
        
        .author-details p {
          font-size: 0.8rem;
          color: rgba(0,0,0,0.5);
        }
        
        .main-featured-image {
          margin-bottom: 60px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
        }
        
        .main-featured-image img {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }
        
        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .lead-text {
          font-size: 1.4rem;
          color: var(--dark);
          line-height: 1.5;
          margin-bottom: 48px;
          font-family: var(--font-serif);
        }
        
        .hack-section {
          margin-bottom: 48px;
        }
        
        .hack-section h2 {
          font-family: var(--font-sans);
          font-size: 1.8rem;
          color: var(--primary);
          margin-bottom: 16px;
        }
        
        .hack-section p {
          font-size: 1.1rem;
          color: rgba(0,0,0,0.7);
        }
        
        .pro-tip {
          margin-top: 24px;
          padding: 24px;
          background: var(--neutral);
          border-left: 4px solid var(--secondary);
          border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
          font-size: 0.95rem;
        }
        
        .content-img {
          width: 100%;
          border-radius: var(--radius-md);
          margin-bottom: 48px;
        }
        
        .article-quote {
          font-size: 2.2rem;
          text-align: center;
          padding: 60px 0;
          color: var(--tertiary);
          line-height: 1.2;
        }
        
        .article-tags {
          gap: 12px;
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        
        .article-tags span {
          background: rgba(0,0,0,0.03);
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 0.85rem;
          color: rgba(0,0,0,0.6);
        }
        
        .mini-card {
          background: white;
          padding: 16px;
          border-radius: var(--radius-md);
          gap: 16px;
          align-items: center;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        
        .mini-card:hover {
          transform: translateY(-5px);
        }
        
        .mini-card img {
          width: 80px;
          height: 80px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        
        .mini-card h4 {
          font-family: var(--font-sans);
          font-size: 1rem;
          margin-bottom: 4px;
        }
        
        .mini-card p {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
        }
        
        @media (max-width: 1024px) {
           .article-main-title {
            font-size: 3rem;
          }
          .main-featured-image img {
            height: 400px;
          }
        }
        
        @media (max-width: 768px) {
           .article-main-title {
            font-size: 2.5rem;
          }
           .lead-text {
            font-size: 1.2rem;
          }
          .mini-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}} />
    </article>
  );
};

export default BeautyArticle;
