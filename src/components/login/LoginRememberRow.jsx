import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

/**
 * LoginRememberRow
 * Accessible custom Remember Me checkbox and Forgot Password link row.
 */
const LoginRememberRow = ({
  rememberMe,
  onChange,
  forgotUrl = '/forgot-password',
  forgotText = 'Forgot password?',
  rememberText = 'Remember me'
}) => {
  return (
    <div className="login-options-row">
      <label className="login-remember-label" htmlFor="login-remember-checkbox">
        <input
          type="checkbox"
          id="login-remember-checkbox"
          className="login-remember-input"
          checked={rememberMe}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="login-custom-checkbox" aria-hidden="true">
          <Check size={12} strokeWidth={3} className="login-checkbox-tick" />
        </span>
        <span>{rememberText}</span>
      </label>

      <Link to={forgotUrl} className="login-forgot-link" id="login-forgot-password-link">
        {forgotText}
      </Link>
    </div>
  );
};

export default LoginRememberRow;
