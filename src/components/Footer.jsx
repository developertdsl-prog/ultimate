import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-neutral">
      <div className="container">
        <div className="footer-top grid">
          <div className="footer-brand">
            <h2 className="logo text-serif">Ultimate Girl Hub</h2>
            <p className="brand-description">Empowering women with curated lifestyle content on style, wellness, and self-care.</p>
          </div>
          
          <div className="footer-links-grid grid">
            <div className="link-column">
              <h4>Categories</h4>
              <ul>
                <li><Link to="/lifestyle">Lifestyle</Link></li>
                <li><Link to="/fashion">Fashion</Link></li>
                <li><Link to="/diy">DIY & Crafts</Link></li>
                <li><Link to="/beauty">Beauty & Skincare</Link></li>
              </ul>
            </div>
            
            <div className="link-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="link-column newsletter">
              <h4>Join the Inner Circle</h4>
              <p>Stay updated with our latest style guides and wellness tips.</p>
              <form className="newsletter-form flex">
                <input type="email" placeholder="Email Address" required />
                <button type="submit" className="btn btn-primary">Join</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom flex-between">
          <p className="copyright">&copy; {new Date().getFullYear()} Ultimate Girl Hub. All rights reserved.</p>
          <div className="social-links-footer">
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
            <a href="#">Pinterest</a>
            <a href="#">Email</a>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          padding: 80px 0 40px;
          margin-top: 80px;
          border-top: 1px solid rgba(0,0,0,0.05);
        }
        
        .footer-top {
          grid-template-columns: 1fr 2fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        
        .brand-description {
          margin-top: 20px;
          color: rgba(26,26,26,0.6);
          font-size: 1.1rem;
          max-width: 300px;
        }
        
        .footer-links-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        
        .link-column h4 {
          text-transform: uppercase;
          font-family: var(--font-sans);
          font-size: 0.8rem;
          letter-spacing: 2px;
          margin-bottom: 24px;
          color: var(--primary);
        }
        
        .link-column ul li {
          margin-bottom: 12px;
          font-size: 0.95rem;
          color: rgba(26,26,26,0.8);
        }
        
        .link-column ul li:hover {
          color: var(--primary);
        }
        
        .newsletter p {
          font-size: 0.9rem;
          margin-bottom: 20px;
          color: rgba(26,26,26,0.7);
        }
        
        .newsletter-form {
          gap: 8px;
        }
        
        .newsletter-form input {
          flex: 1;
          padding: 10px 16px;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 100px;
          font-family: var(--font-sans);
          background: var(--white);
        }
        
        .footer-bottom {
          padding-top: 40px;
          border-top: 1px solid rgba(0,0,0,0.05);
          font-size: 0.85rem;
          color: rgba(26,26,26,0.5);
        }
        
        .social-links-footer a {
          margin-left: 24px;
        }
        
        .social-links-footer a:hover {
          color: var(--primary);
        }
        
        @media (max-width: 1024px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        
        @media (max-width: 768px) {
          .footer-links-grid {
            grid-template-columns: 1fr 1fr;
          }
          .newsletter {
            grid-column: span 2;
            margin-top: 20px;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
