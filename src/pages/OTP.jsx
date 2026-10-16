import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const OTP = () => {
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleInput = (index, e) => {
    const value = e.target.value;
    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reset-password');
  };

  return (
    <div className="auth-page flex">
      <div className="auth-visual">
         <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200" alt="Verification" />
         <div className="auth-visual-text">
           <h2 className="text-serif">Verify Your <br />Identity.</h2>
           <p>We've sent a 4-digit code to your email. Enter it below to continue your journey.</p>
         </div>
      </div>
      
      <div className="auth-form-container flex-center">
        <div className="auth-form-wrapper">
          <div className="auth-header">
            <h1 className="text-serif">Enter OTP</h1>
            <p>Verification code sent to <strong>e***@example.com</strong></p>
          </div>
          
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="otp-inputs flex-center mb-32">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  ref={(el) => { inputRefs.current[index] = el; }}
                  type="text"
                  maxLength="1"
                  className="otp-input"
                  onInput={(e) => handleInput(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  autoFocus={index === 0}
                />
              ))}
            </div>
            
            <button type="submit" className="btn btn-primary auth-btn w-full">Verify Code</button>
            
            <div className="text-center mt-32">
              <p className="auth-footer">
                w't receive the code? <Link to="#" className="back-link">Resend Code</Link>
              </p>
            </div>
            
            <div className="text-center mt-32">
              <Link to="/forgot-password" style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.4)' }}>Change Email</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTP;
