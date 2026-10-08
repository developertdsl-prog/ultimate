import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="auth-page flex">
      <div className="auth-visual">
         <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200" alt="Lifestyle" />
         <div className="auth-visual-text">
           <h2 className="text-serif">Elevate Your <br />Lifestyle.</h2>
           <p>Where modern muses gather to curate a life of intentional elegance and shared wisdom.</p>
         </div>
      </div>
      
      <div className="auth-form-container flex-center">
        <div className="auth-form-wrapper">
          <div className="auth-header">
            <h1 className="text-serif">Welcome Back</h1>
            <p>Sign in to continue your journey through the digital atelier.</p>
          </div>
          
          <form className="auth-form">
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" />
            </div>
            <div className="input-group">
              <div className="flex-between">
                <label>Password</label>
                <Link to="/forgot-password" id="forgot-link">Forgot Password?</Link>
              </div>
              <input type="password" placeholder="••••••••" />
            </div>
            
            <button type="submit" className="btn btn-primary auth-btn">Sign In</button>
            
           
            <p className="auth-footer">
              New to the Hub? <Link to="/signup">Create Account</Link>
            </p>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;
