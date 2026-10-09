import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowLeft, Sparkles, ShieldCheck, Check } from 'lucide-react';
import Input from '../components/Input';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // 1-Click Demo Fill for easy review
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
    <div className="auth-page flex">
      {/* Visual Editorial Showcase */}
      <div className="auth-visual">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400"
          alt="The Ultimate Girl Editorial Atelier"
        />

        <div className="auth-visual-content">
          <div className="auth-visual-badge">
            <Sparkles size={14} />
            <span>The Digital Atelier • Member Sanctuary</span>
          </div>

          <h2 className="auth-visual-title text-serif">
            Elevate Your <br />
            <em>Everyday</em> Aesthetic.
          </h2>

          <p className="auth-visual-desc">
            Where modern muses gather to curate quiet luxury, bespoke fashion inspiration, and intentional living.
          </p>

          <div className="auth-visual-quote-card">
            <div className="quote-stars">★★★★★</div>
            <p>
              &ldquo;The only digital space where effortless elegance, mindful self-care, and creative inspiration seamlessly converge.&rdquo;
            </p>
            <div className="auth-visual-quote-author">
              <div className="auth-visual-muses">
                <div className="auth-visual-avatars">
                  <img
                    className="auth-visual-avatar"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120"
                    alt="Muse 1"
                  />
                  <img
                    className="auth-visual-avatar"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120"
                    alt="Muse 2"
                  />
                  <img
                    className="auth-visual-avatar"
                    src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=120"
                    alt="Muse 3"
                  />
                </div>
                <div className="auth-visual-author-info">
                  <div className="auth-visual-author-name">Camille Laurent</div>
                  <div className="auth-visual-author-role">Paris Fashion Contributor</div>
                </div>
              </div>
              <span className="auth-visual-pill-count">50k+ Muses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="auth-form-container">
        <div className="auth-form-wrapper">
          {/* Top navigation row */}
          <div className="auth-top-nav">
            <Link to="/" className="auth-back-link" title="Return to Homepage">
              <ArrowLeft size={16} />
              <span>Back to Hub</span>
            </Link>
            <Link to="/" className="auth-brand-badge">
              Ultimate Girl Hub
            </Link>
          </div>

          {/* Header */}
          <div className="auth-header">
            <span className="auth-tag">
              <Sparkles size={12} />
              <span>Welcome Back</span>
            </span>
            <h1 className="text-serif">Sign In to Your Hub</h1>
            <p>Enter your details below to access your saved lookbooks, private bookmarks, and daily musings.</p>
          </div>

          {/* Quick Demo Autofill Button */}
          <button
            type="button"
            onClick={handleDemoFill}
            className="demo-autofill-btn"
            title="Click to auto-populate demo credentials"
          >
            <Sparkles size={14} />
            <span>Click to Autofill Demo Account (muse@ultimategirl.com)</span>
          </button>

          {/* Feedback Alerts */}
          {error && (
            <div className="auth-alert-box auth-alert-error" role="alert">
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="auth-alert-box auth-alert-success" role="status">
              <Check size={16} />
              <span>{success}</span>
            </div>
          )}

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

            {/* Remember Me & Forgot Password Row */}
            <div className="auth-options-row">
              <label className="auth-remember-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="auth-checkbox"
                />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" id="forgot-link">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
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

            {/* Social Authentication */}
            <div className="divider-line">
              <span>Or continue with</span>
            </div>

            <div className="social-auth">
              <button
                type="button"
                className="social-btn"
                onClick={() => handleSocialAuth('Google')}
                disabled={Boolean(socialLoading) || Boolean(success)}
              >
                {socialLoading === 'Google' ? (
                  <span className="auth-spinner" style={{ borderColor: 'rgba(0,0,0,0.2)', borderTopColor: '#000' }} />
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                )}
                <span>Google</span>
              </button>

              <button
                type="button"
                className="social-btn"
                onClick={() => handleSocialAuth('Apple')}
                disabled={Boolean(socialLoading) || Boolean(success)}
              >
                {socialLoading === 'Apple' ? (
                  <span className="auth-spinner" style={{ borderColor: 'rgba(0,0,0,0.2)', borderTopColor: '#000' }} />
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.87-1 2.98 1.07.08 2.15-.5 2.81-1.32z" />
                  </svg>
                )}
                <span>Apple</span>
              </button>
            </div>

            <p className="auth-footer">
              New to the Hub? <Link to="/signup">Create Account</Link>
            </p>

            <div className="auth-trust-note">
              <ShieldCheck size={14} />
              <span>256-Bit SSL Encrypted • Private & Confidential</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
