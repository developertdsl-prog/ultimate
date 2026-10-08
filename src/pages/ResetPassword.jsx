import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Password updated successfully! Redirecting to login...');
    navigate('/login');
  };

  return (
    <div className="auth-page flex">
      <div className="auth-visual">
         <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200" alt="Renewal" />
         <div className="auth-visual-text">
           <h2 className="text-serif">A Fresh <br />Beginning.</h2>
           <p>Choose a secure, memorable password to protect your corner of the Hub. Let's start anew.</p>
         </div>
      </div>
      
      <div className="auth-form-container flex-center">
        <div className="auth-form-wrapper">
          <div className="auth-header text-center">
            <h1 className="text-serif">New Password</h1>
            <p>Please enter your new password below.</p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label>New Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="••••••••" required />
            </div>
            
            <ul className="password-checklist mb-32">
              <li className="valid">Minimum 8 characters</li>
              <li>At least one special character</li>
              <li>A mix of uppercase and lowercase</li>
            </ul>
            
            <button type="submit" className="btn btn-primary auth-btn w-full">Update Password</button>
            
            <div className="text-center mt-32">
              <Link to="/login" className="back-link">&larr; Back to Login</Link>
            </div>
          </form>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .password-checklist {
          padding-left: 20px;
          font-size: 0.8rem;
          color: rgba(0,0,0,0.4);
          list-style: disc;
        }
        
        .password-checklist li {
           margin-bottom: 4px;
        }
        
        .password-checklist li.valid {
          color: var(--secondary);
          text-decoration: line-through;
        }
      `}} />
    </div>
  );
};

export default ResetPassword;
