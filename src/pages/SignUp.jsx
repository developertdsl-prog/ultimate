import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="auth-page flex">
      <div className="auth-visual">
         <img src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=1200" alt="Lifestyle" />
         <div className="auth-visual-text">
           <h2 className="text-serif">The Digital <br />Atelier.</h2>
           <p>Where modern muses gather to curate a life of intentional elegance and shared wisdom.</p>
         </div>
      </div>
      
      <div className="auth-form-container flex-center">
        <div className="auth-form-wrapper">
          <div className="auth-header">
            <h1 className="text-serif">Create Account</h1>
            <p>Join our community of over 50,000 modern muses.</p>
          </div>
          
          <form className="auth-form">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="Jane Doe" />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            
            <div className="flex-center" style={{ gap: '8px', marginBottom: '24px' }}>
              <input type="checkbox" id="terms" style={{ width: '16px', height: '16px' }} />
              <label htmlFor="terms" style={{ margin: 0, textTransform: 'none', fontSize: '0.75rem' }}>I agree to the <a href="#">Terms & Conditions</a></label>
            </div>
            
            <button type="submit" className="btn btn-primary auth-btn">Create Account</button>
            
            <div className="divider-line"><span>Or join with</span></div>
            
            <div className="social-auth grid">
              <button className="social-btn">Google</button>
              <button className="social-btn">Apple</button>
            </div>
            
            <p className="auth-footer">
              Already a member? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default SignUp;
