import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * Universal, accessible, and high-aesthetic Button component for The Ultimate Girl.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - Button label/content.
 * @param {'primary'|'secondary'|'tertiary'|'outline'|'outline-primary'|'outline-secondary'|'ghost'|'dark'|'light'|'danger'|'link'} [props.variant='primary'] - Visual style variant.
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} [props.size='md'] - Button size scale.
 * @param {'pill'|'rounded'|'md'|'square'|'circle'} [props.shape='pill'] - Border-radius geometry.
 * @param {React.ReactNode} [props.leftIcon] - Leading icon placed before children.
 * @param {React.ReactNode} [props.icon] - Alias for leftIcon (or main icon if iconOnly=true).
 * @param {React.ReactNode} [props.rightIcon] - Trailing icon placed after children.
 * @param {boolean} [props.iconOnly=false] - Square/circular icon button (equal width and height).
 * @param {boolean} [props.loading=false] - Shows animated spinner and prevents interaction.
 * @param {string} [props.loadingText] - Optional replacement text while loading.
 * @param {boolean} [props.disabled=false] - Disables the button.
 * @param {boolean} [props.fullWidth=false] - Expands button to 100% container width.
 * @param {'button'|'submit'|'reset'} [props.type='button'] - Standard HTML button type.
 * @param {string} [props.to] - Target route for react-router Link.
 * @param {string} [props.href] - URL destination for standard anchor <a> tag.
 * @param {React.ElementType} [props.as] - Custom HTML tag or React component.
 * @param {string} [props.className=''] - Custom additional CSS class names.
 * @param {function} [props.onClick] - Click handler function.
 */
const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'pill',
  leftIcon,
  icon,
  rightIcon,
  iconOnly = false,
  loading = false,
  loadingText,
  disabled = false,
  fullWidth = false,
  type = 'button',
  to,
  href,
  as,
  className = '',
  onClick,
  ...rest
}, ref) => {
  const resolvedLeftIcon = icon || leftIcon;
  const isDisabled = Boolean(disabled || loading);

  const classes = [
    'ui-btn',
    `variant-${variant}`,
    `size-${size}`,
    `shape-${shape}`,
    fullWidth ? 'w-full' : '',
    iconOnly ? 'is-icon-only' : '',
    loading ? 'is-loading' : '',
    isDisabled ? 'is-disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = (e) => {
    if (isDisabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Render loading spinner icon
  const renderSpinner = () => (
    <span className="ui-btn-spinner" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ui-btn-spinner-icon"
      >
        <circle
          cx="12"
          cy="12"
          r="9.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeOpacity="0.25"
        />
        <path
          d="M12 2.5a9.5 9.5 0 0 1 9.5 9.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );

  // Content body
  const renderContent = () => {
    if (loading) {
      return (
        <>
          {renderSpinner()}
          {loadingText ? (
            <span className="ui-btn-text">{loadingText}</span>
          ) : !iconOnly && children ? (
            <span className="ui-btn-text">{children}</span>
          ) : null}
        </>
      );
    }

    if (iconOnly) {
      return (
        <span className="ui-btn-icon ui-btn-icon-single">
          {children || resolvedLeftIcon || rightIcon}
        </span>
      );
    }

    return (
      <>
        {resolvedLeftIcon && (
          <span className="ui-btn-icon ui-btn-icon-left" aria-hidden="true">
            {resolvedLeftIcon}
          </span>
        )}
        {children && <span className="ui-btn-text">{children}</span>}
        {rightIcon && (
          <span className="ui-btn-icon ui-btn-icon-right" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </>
    );
  };

  const sharedProps = {
    ref,
    className: classes,
    'aria-disabled': isDisabled || undefined,
    'aria-busy': loading || undefined,
    onClick: handleClick,
    ...rest,
  };

  // Custom component/element
  if (as) {
    const Component = as;
    return (
      <Component
        {...sharedProps}
        disabled={isDisabled ? true : undefined}
      >
        {renderContent()}
      </Component>
    );
  }

  // React Router Link
  if (to) {
    return (
      <Link
        to={isDisabled ? '#' : to}
        tabIndex={isDisabled ? -1 : undefined}
        {...sharedProps}
      >
        {renderContent()}
      </Link>
    );
  }

  // Standard Anchor link
  if (href) {
    return (
      <a
        href={isDisabled ? undefined : href}
        tabIndex={isDisabled ? -1 : undefined}
        {...sharedProps}
      >
        {renderContent()}
      </a>
    );
  }

  // Default HTML Button
  return (
    <button
      type={type}
      disabled={isDisabled}
      {...sharedProps}
    >
      {renderContent()}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };
export default Button;
