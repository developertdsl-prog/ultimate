import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Input from '../components/Input';
import '../components/login/login.css';
import {
  LoginVisualShowcase,
  LoginFormHeader,
  LoginAlert,
  LoginDemoCredentials,
  LoginRememberRow,
  LoginSocialAuth,
  LoginSecurityBadge
} from '../components/login';

/**
 * Login Page
 * Composes specialized login components tailored exclusively for the member login flow.
 */
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 1-Click Demo Fill for easy testing and review
  const handleDemoFill = () => {
    setEmail('muse@ultimategirl.com');
    setPassword('Elegance2026!');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim()) {
      setError('Please provide both your email address and password.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);

    // Simulated authentic authentication flow
    setTimeout(() => {
      setIsLoading(false);
      setSuccess('Welcome back, Muse! Entering your sanctuary...');
      setTimeout(() => {
        navigate('/');
      }, 900);
    }, 700);
  };

  const handleSocialAuth = (provider) => {
    setError('');
    setSocialLoading(provider);
    setTimeout(() => {
      setSocialLoading(null);
      setSuccess(`Connecting with ${provider}... Welcome back!`);
      setTimeout(() => {
        navigate('/');
      }, 900);
    }, 700);
  };

  return (
    <div className="auth-page flex" id="login-page">
      {/* Visual Editorial Showcase (Component used only in Login) */}
      <LoginVisualShowcase />

      {/* Form Container */}
      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          {/* Top navigation & greeting header (Component used only in Login) */}
          <LoginFormHeader />

          {/* Quick Demo Autofill Helper (Component used only in Login) */}
          <LoginDemoCredentials onAutofill={handleDemoFill} />

          {/* Feedback Alerts (Component used only in Login) */}
          <LoginAlert
            error={error}
            success={success}
            onDismiss={() => {
              setError('');
              setSuccess('');
            }}
          />

          {/* Auth Form */}
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <Input
              id="login-email"
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              icon={<Mail size={18} />}
              required
            />

            <Input
              id="login-password"
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              icon={<Lock size={18} />}
              required
            />

            {/* Remember Me & Forgot Password Row (Component used only in Login) */}
            <LoginRememberRow
              rememberMe={rememberMe}
              onChange={setRememberMe}
            />

            <button
              type="submit"
              id="login-submit-btn"
              className="btn btn-primary auth-btn"
              disabled={isLoading || Boolean(success)}
            >
              {isLoading ? (
                <>
                  <span className="auth-spinner" />
                  <span>Signing In...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>

            {/* Social Authentication (Component used only in Login) */}
            <LoginSocialAuth
              onSocialAuth={handleSocialAuth}
              socialLoading={socialLoading}
              disabled={isLoading || Boolean(success)}
            />

            <p className="auth-footer">
              New to the Hub? <Link to="/signup" id="login-signup-link">Create Account</Link>
            </p>

            {/* Security & Trust Footer Badge (Component used only in Login) */}
            <LoginSecurityBadge />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
