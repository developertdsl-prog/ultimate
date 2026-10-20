import React from 'react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';

/**
 * LoginAlert
 * Accessible, animated notification banner for error & success feedback in Login.
 */
const LoginAlert = ({ error, success, onDismiss }) => {
  if (!error && !success) return null;

  const isError = Boolean(error);
  const message = error || success;

  return (
    <div
      className={`login-alert ${isError ? 'login-alert-error' : 'login-alert-success'}`}
      role={isError ? 'alert' : 'status'}
      aria-live="polite"
      id="login-feedback-alert"
    >
      <div className="login-alert-inner">
        <span className="login-alert-icon">
          {isError ? <AlertCircle size={17} /> : <CheckCircle2 size={17} />}
        </span>
        <span className="login-alert-message">{message}</span>
      </div>

      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="login-alert-dismiss"
          aria-label="Dismiss notification"
          title="Dismiss"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
};

export default LoginAlert;
