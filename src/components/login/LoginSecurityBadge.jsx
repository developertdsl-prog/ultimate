import React from 'react';
import { ShieldCheck, Fingerprint } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * LoginSecurityBadge
 * Trust and compliance badge footer component for the Login page.
 */
const LoginSecurityBadge = ({
  sslText = '256-Bit SSL Encrypted • Private & Confidential',
  biometricText = 'Touch ID & Passkey Ready'
}) => {
  return (
    <footer className="login-security-section" aria-label="Security and Privacy">
      <div className="login-trust-badge">
        <ShieldCheck size={15} />
        <span>{sslText}</span>
      </div>

      <div className="login-biometric-hint">
        <Fingerprint size={13} />
        <span>{biometricText}</span>
      </div>

      <div className="login-legal-links">
        <Link to="/lifestyle" title="Privacy Policy">
          Privacy Policy
        </Link>
        <span>•</span>
        <Link to="/lifestyle" title="Terms of Service">
          Terms of Service
        </Link>
        <span>•</span>
        <span>© {new Date().getFullYear()} Ultimate Girl</span>
      </div>
    </footer>
  );
};

export default LoginSecurityBadge;
