import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';

/**
 * LoginFormHeader
 * Top navigation and editorial welcome header for the Login page.
 */
const LoginFormHeader = ({
  backLink = '/',
  backLabel = 'Back to Hub',
  brandName = 'Ultimate Girl Hub',
  tagline = 'Welcome Back',
  title = 'Sign In to Your Hub',
  subtitle = 'Enter your details below to access your saved lookbooks, private bookmarks, and daily musings.'
}) => {
  return (
    <header className="login-header-wrapper">
      {/* Top navigation row */}
      <nav className="login-header-nav" aria-label="Login navigation">
        <Link to={backLink} className="login-back-btn" id="login-back-link" title="Return to Hub">
          <ArrowLeft size={15} />
          <span>{backLabel}</span>
        </Link>
        <Link to={backLink} className="login-brand-emblem" id="login-brand-badge" title="Ultimate Girl Home">
          <span className="login-brand-icon">U</span>
          <span>{brandName}</span>
        </Link>
      </nav>

      {/* Welcome intro */}
      <div className="login-header-intro">
        <div className="login-badge-pill">
          <Sparkles size={12} />
          <span>{tagline}</span>
        </div>
        <h1 className="login-header-title">{title}</h1>
        <p className="login-header-subtitle">{subtitle}</p>
      </div>
    </header>
  );
};

export default LoginFormHeader;
