import React, { forwardRef, useId, useState, useRef } from 'react';
import { ChevronDown, AlertCircle, X } from 'lucide-react';

/**
 * Universal, accessible, and high-aesthetic Select component for The Ultimate Girl.
 *
 * @param {Object} props
 * @param {string} [props.id] - Optional ID. If not provided, a unique ID is generated.
 * @param {string} [props.name] - Select name attribute.
 * @param {string|React.ReactNode} [props.label] - Label text displayed above select.
 * @param {string} [props.placeholder] - Placeholder text displayed as initial/prompt option.
 * @param {string|number} [props.value] - Controlled select value.
 * @param {string|number} [props.defaultValue] - Uncontrolled default value.
 * @param {function} [props.onChange] - Event change handler.
 * @param {Array<string|number|Object>} [props.options] - Options array (strings, numbers, { value, label, disabled }, or { group, options }).
 * @param {React.ReactNode} [props.children] - Custom option/optgroup elements (alternative or addition to options prop).
 * @param {React.ReactNode} [props.icon] - Left icon element (e.g., <Globe size={18} />).
 * @param {React.ReactNode} [props.leftIcon] - Alias for icon.
 * @param {React.ReactNode} [props.rightIcon] - Custom right icon replacing the default chevron.
 * @param {boolean} [props.chevron=true] - Shows dropdown chevron indicator.
 * @param {boolean} [props.clearable=false] - Allows clearing selected option back to empty.
 * @param {function} [props.onClear] - Callback fired when selection is cleared.
 * @param {string|boolean} [props.error] - Error string to display or boolean to indicate error state.
 * @param {string|React.ReactNode} [props.helperText] - Hint text displayed below select when no error.
 * @param {boolean} [props.required=false] - Marks select as required with indicator.
 * @param {boolean} [props.disabled=false] - Disables the select.
 * @param {boolean} [props.fullWidth=true] - Sets width: 100%.
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Visual size scale.
 * @param {'default'|'filled'|'minimal'} [props.variant='default'] - Design variant.
 * @param {string} [props.className] - Class for outer container wrapper.
 * @param {string} [props.selectClassName] - Class for <select> element.
 * @param {string} [props.labelClassName] - Class for <label> element.
 * @param {string} [props.wrapperClassName] - Class for select field wrapper.
 */
const Select = forwardRef(({
  id,
  name,
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  options = [],
  children,
  icon,
  leftIcon,
  rightIcon,
  chevron = true,
  clearable = false,
  onClear,
  error,
  helperText,
  required = false,
  disabled = false,
  fullWidth = true,
  size = 'md',
  variant = 'default',
  className = '',
  selectClassName = '',
  labelClassName = '',
  wrapperClassName = '',
  ...rest
}, ref) => {
  const generatedId = useId();
  const selectId = id || generatedId;

  const internalRef = useRef(null);

  // Synchronize ref passed by consumer with internal ref
  const setCombinedRef = (node) => {
    internalRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  const isControlled = value !== undefined;
  const [internalVal, setInternalVal] = useState(defaultValue ?? '');

  const activeValue = isControlled ? value : internalVal;
  const isPlaceholderSelected =
    Boolean(placeholder) &&
    (activeValue === '' || activeValue === undefined || activeValue === null);
  const hasValue = Boolean(
    activeValue !== '' && activeValue !== undefined && activeValue !== null
  );

  const resolvedLeftIcon = icon || leftIcon;
  const hasLeftIcon = Boolean(resolvedLeftIcon);

  const hasError = Boolean(error);
  const errorMessage = typeof error === 'string' ? error : null;

  const chevronSizes = {
    sm: 15,
    md: 18,
    lg: 20,
  };
  const iconSize = chevronSizes[size] || 18;

  const handleChange = (e) => {
    if (!isControlled) {
      setInternalVal(e.target.value);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isControlled) {
      setInternalVal('');
    }

    if (internalRef.current) {
      internalRef.current.value = '';
    }

    if (onClear) {
      onClear();
    }

    if (onChange) {
      const syntheticEvent = {
        target: {
          name: name || '',
          id: selectId,
          value: '',
        },
        currentTarget: {
          name: name || '',
          id: selectId,
          value: '',
        },
        preventDefault: () => {},
        stopPropagation: () => {},
      };
      onChange(syntheticEvent);
    }
  };

  const renderOptions = () => {
    const items = [];

    if (placeholder) {
      items.push(
        <option
          key="__placeholder_option__"
          value=""
          disabled={required}
          hidden={required}
        >
          {placeholder}
        </option>
      );
    }

    if (Array.isArray(options) && options.length > 0) {
      options.forEach((opt, idx) => {
        if (opt && typeof opt === 'object' && opt.group && Array.isArray(opt.options)) {
          items.push(
            <optgroup key={`grp-${opt.group}-${idx}`} label={opt.group}>
              {opt.options.map((sub, subIdx) => {
                if (sub && typeof sub === 'object') {
                  return (
                    <option
                      key={`opt-${sub.value ?? subIdx}`}
                      value={sub.value}
                      disabled={sub.disabled}
                    >
                      {sub.label ?? sub.value}
                    </option>
                  );
                }
                return (
                  <option key={`opt-${sub}-${subIdx}`} value={sub}>
                    {sub}
                  </option>
                );
              })}
            </optgroup>
          );
        } else if (opt && typeof opt === 'object') {
          items.push(
            <option
              key={`opt-${opt.value ?? idx}`}
              value={opt.value}
              disabled={opt.disabled}
            >
              {opt.label ?? opt.value}
            </option>
          );
        } else {
          items.push(
            <option key={`opt-${opt}-${idx}`} value={opt}>
              {opt}
            </option>
          );
        }
      });
    }

    if (children) {
      items.push(children);
    }

    return items;
  };

  return (
    <div
      className={`ui-select-group ${hasError ? 'has-error' : ''} ${disabled ? 'is-disabled' : ''} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
    >
      {label && (
        <label
          htmlFor={selectId}
          className={`ui-select-label ${labelClassName}`.trim()}
        >
          <span>{label}</span>
          {required && (
            <span
              className="ui-select-required-star"
              aria-hidden="true"
              title="Required"
            >
              *
            </span>
          )}
        </label>
      )}

      <div
        className={`ui-select-wrapper variant-${variant} size-${size} ${wrapperClassName}`.trim()}
      >
        {hasLeftIcon && (
          <span className="ui-select-icon-left" aria-hidden="true">
            {resolvedLeftIcon}
          </span>
        )}

        <select
          ref={setCombinedRef}
          id={selectId}
          name={name}
          value={isControlled ? (value ?? '') : internalVal}
          defaultValue={isControlled ? undefined : defaultValue}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          aria-invalid={hasError ? 'true' : undefined}
          aria-describedby={
            errorMessage
              ? `${selectId}-error`
              : helperText
              ? `${selectId}-helper`
              : undefined
          }
          className={`ui-select-field ${hasLeftIcon ? 'has-left-icon' : ''} ${isPlaceholderSelected ? 'is-placeholder' : ''} ${clearable && hasValue ? 'has-clear' : ''} ${selectClassName}`.trim()}
          {...rest}
        >
          {renderOptions()}
        </select>

        <div className="ui-select-actions">
          {clearable && hasValue && !disabled && (
            <button
              type="button"
              className="ui-select-clear-btn"
              onClick={handleClear}
              aria-label="Clear selection"
              title="Clear selection"
              tabIndex={-1}
            >
              <X size={13} />
            </button>
          )}

          {rightIcon ? (
            <span className="ui-select-icon-right">{rightIcon}</span>
          ) : chevron ? (
            <span className="ui-select-chevron" aria-hidden="true">
              <ChevronDown size={iconSize} />
            </span>
          ) : null}
        </div>
      </div>

      {errorMessage && (
        <div id={`${selectId}-error`} className="ui-select-error-msg" role="alert">
          <AlertCircle size={14} />
          <span>{errorMessage}</span>
        </div>
      )}

      {!errorMessage && helperText && (
        <div id={`${selectId}-helper`} className="ui-select-helper-text">
          {helperText}
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export { Select };
export default Select;
