import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/otp'); // Mock transition for UX
  };
//updated forgot password screen
  return (
    <div className="auth-page flex">
      <div className="auth-visual">
         <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200" alt="Guidance" />
         <div className="auth-visual-text">
           <h2 className="text-serif">Find Your <br />Way Back.</h2>
           <p>Don't worry, even the most intentional muses lose their way. Let's get you back to the digital atelier.</p>
         </div>
      </div>
      
      <div className="auth-form-container flex-center">
        <div className="auth-form-wrapper">
          <div className="auth-header">
            <Link to="/" className="logo text-serif mb-32" style={{ display: 'inline-block', fontSize: '2.2rem' }}>
              Ultimate Girl Hub
            </Link>
            <h1 className="text-serif">Forgot your password?</h1>
            <p>Enter your email address below and we'll send you a verification code to reset your password.</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@example.com" required />
            </div>
            
            <button type="submit" className="btn btn-primary auth-btn w-full">Send Verification Code</button>
            
            <div className="text-center mt-32">
              <Link to="/login" className="back-link">&larr; Back to Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
