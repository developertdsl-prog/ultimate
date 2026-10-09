import React, { forwardRef, useId, useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';

/**
 * Universal, accessible, and high-aesthetic Input component for The Ultimate Girl.
 *
 * @param {Object} props
 * @param {string} [props.id] - Optional ID. If not provided, a unique ID is generated.
 * @param {string} [props.name] - Input name attribute.
 * @param {string|React.ReactNode} [props.label] - Label text displayed above input.
 * @param {string} [props.type='text'] - Standard HTML input type.
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string|number} [props.value] - Controlled input value.
 * @param {string|number} [props.defaultValue] - Uncontrolled default value.
 * @param {function} [props.onChange] - Event change handler.
 * @param {React.ReactNode} [props.icon] - Left icon element (e.g., <Mail size={18} />).
 * @param {React.ReactNode} [props.leftIcon] - Alias for icon.
 * @param {React.ReactNode} [props.rightIcon] - Right element or icon.
 * @param {React.ReactNode} [props.rightElement] - Alias for rightIcon.
 * @param {boolean} [props.showPasswordToggle=true] - Auto-render eye toggle when type="password".
 * @param {string|boolean} [props.error] - Error string to display or boolean to indicate error state.
 * @param {string|React.ReactNode} [props.helperText] - Hint text displayed below input when no error.
 * @param {boolean} [props.required=false] - Marks input as required with indicator.
 * @param {boolean} [props.disabled=false] - Disables the input.
 * @param {boolean} [props.readOnly=false] - Readonly state.
 * @param {boolean} [props.fullWidth=true] - Sets width: 100%.
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Visual size scale.
 * @param {'default'|'filled'|'minimal'} [props.variant='default'] - Design variant.
 * @param {string} [props.className] - Class for outer container wrapper.
 * @param {string} [props.inputClassName] - Class for <input> element.
 * @param {string} [props.labelClassName] - Class for <label> element.
 */
const Input = forwardRef(({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  defaultValue,
  onChange,
  icon,
  leftIcon,
  rightIcon,
  rightElement,
  showPasswordToggle = true,
  error,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  fullWidth = true,
  size = 'md',
  variant = 'default',
  className = '',
  inputClassName = '',
  labelClassName = '',
  ...rest
}, ref) => {
  const generatedId = useId();
  const inputId = id || generatedId;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordField = type === 'password';
  const effectiveType = isPasswordField && isPasswordVisible ? 'text' : type;

  const resolvedLeftIcon = icon || leftIcon;
  const resolvedRightElement = rightElement || rightIcon;

  const hasLeftIcon = Boolean(resolvedLeftIcon);
  const shouldRenderPasswordToggle = isPasswordField && showPasswordToggle !== false;
  const hasRightElement = Boolean(resolvedRightElement) || shouldRenderPasswordToggle;

  const hasError = Boolean(error);
  const errorMessage = typeof error === 'string' ? error : null;

  return (
    <div
      className={`ui-input-group ${hasError ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
    >
      {label && (
        <label
          htmlFor={inputId}
          className={`ui-input-label ${labelClassName}`.trim()}
        >
          <span>{label}</span>
          {required && (
            <span className="ui-input-required-star" aria-hidden="true" title="Required">
              *
            </span>
          )}
        </label>
      )}

      <div className={`ui-input-wrapper variant-${variant} size-${size}`}>
        {hasLeftIcon && (
          <span className="ui-input-icon-left" aria-hidden="true">
            {resolvedLeftIcon}
          </span>
        )}

        <input
          ref={ref}
          id={inputId}
          name={name}
          type={effectiveType}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          aria-invalid={hasError ? 'true' : undefined}
          aria-describedby={
            errorMessage
              ? `${inputId}-error`
              : helperText
              ? `${inputId}-helper`
              : undefined
          }
          className={`ui-input-field ${hasLeftIcon ? 'has-left-icon' : ''} ${hasRightElement ? 'has-right-icon' : ''} ${inputClassName}`.trim()}
          {...rest}
        />

        {shouldRenderPasswordToggle ? (
          <button
            type="button"
            className="ui-input-toggle-btn"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            title={isPasswordVisible ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {isPasswordVisible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : resolvedRightElement ? (
          <div className="ui-input-icon-right">{resolvedRightElement}</div>
        ) : null}
      </div>

      {errorMessage && (
        <div id={`${inputId}-error`} className="ui-input-error-msg" role="alert">
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}

      {!errorMessage && helperText && (
        <div id={`${inputId}-helper`} className="ui-input-helper-text">
          {helperText}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
export default Input;
