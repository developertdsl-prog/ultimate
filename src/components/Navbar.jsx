import { Menu, Search, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container flex-between">
        <div className="nav-left flex-center">
          <button className="icon-btn"><Menu size={24} /></button>
          <button className="icon-btn search-btn"><Search size={20} /></button>
        </div>
        
        <div className="nav-center flex-center">
          <Link to="/" className="logo text-serif">Ultimate Girl Hub</Link>
          <div className="nav-links flex">
            <Link to="/lifestyle">Lifestyle</Link>
            <Link to="/fashion">Fashion</Link>
            <Link to="/diy">DIY</Link>
          </div>
        </div>
        
        <div className="nav-right flex-center">
          <div className="social-links flex">
            <a href="#" className="icon-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="icon-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 2.78 2.78 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
            <a href="#" className="icon-link"><Heart size={18} /></a>
          </div>
          <Link to="/login" className="btn btn-secondary sign-in-btn">Sign In</Link>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .navbar {
          height: var(--header-height);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
        }
        
        .flex-between {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .logo {
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          margin-right: 40px;
        }
        
        .nav-links {
          gap: 32px;
          font-weight: 600;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .nav-links a:hover {
          color: var(--primary);
        }
        
        .icon-btn {
          padding: 8px;
          margin-right: 12px;
          color: var(--dark);
        }
        
        .icon-link {
          margin-left: 16px;
          color: var(--dark);
          opacity: 0.6;
        }
        
        .icon-link:hover {
          opacity: 1;
          color: var(--primary);
        }
        
        .sign-in-btn {
          margin-left: 24px;
          padding: 8px 20px;
          font-size: 0.9rem;
        }
        
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .logo { margin-right: 0; }
        }
        
        @media (max-width: 768px) {
          .social-links, .search-btn {
            display: none;
          }
          .logo {
            font-size: 1.4rem;
          }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
