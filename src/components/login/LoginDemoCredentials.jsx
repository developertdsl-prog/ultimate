import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';

/**
 * LoginDemoCredentials
 * Quick-fill credential helper component specifically for instant preview and demo testing in Login.
 */
const LoginDemoCredentials = ({
  onAutofill,
  demoEmail = 'muse@ultimategirl.com'
}) => {
  const [filled, setFilled] = useState(false);

  const handleClick = () => {
    if (onAutofill) {
      onAutofill();
      setFilled(true);
      setTimeout(() => setFilled(false), 2000);
    }
  };

  return (
    <div className="login-demo-card" id="login-demo-helper">
      <div className="login-demo-left">
        <span className="login-demo-tag">
          <Sparkles size={12} />
          <span>Demo Account Available</span>
        </span>
        <span className="login-demo-email">{demoEmail}</span>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="login-demo-autofill-btn"
        id="login-demo-autofill-btn"
        title="Populate test credentials"
      >
        {filled ? (
          <>
            <Check size={14} />
            <span>Autofilled!</span>
          </>
        ) : (
          <>
            <Sparkles size={14} />
            <span>Autofill</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LoginDemoCredentials;
