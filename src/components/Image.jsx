import React, { forwardRef, useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, AlertCircle } from 'lucide-react';

/**
 * Universal, accessible, and high-aesthetic Image component for The Ultimate Girl.
 * Supports progressive loading, shimmer skeletons, fallback handling, aspect ratios,
 * hover zoom, overlays, badges, and captions.
 *
 * @param {Object} props
 * @param {string} props.src - Primary image source URL.
 * @param {string} [props.alt=''] - Accessible image description.
 * @param {string} [props.fallbackSrc] - Alternate URL to load if primary src fails.
 * @param {React.ReactNode} [props.fallback] - Custom React node to render on error.
 * @param {'skeleton'|'blur'|'none'|React.ReactNode} [props.placeholder='skeleton'] - Placeholder style while loading.
 * @param {string} [props.blurDataURL] - Low-resolution data URL for blur placeholder preview.
 * @param {'auto'|'1/1'|'square'|'16/9'|'video'|'4/3'|'3/4'|'portrait'|'9/16'|'21/9'|string|number} [props.aspectRatio] - Container aspect ratio.
 * @param {'cover'|'contain'|'fill'|'none'|'scale-down'} [props.fit='cover'] - CSS object-fit behavior.
 * @param {'center'|'top'|'bottom'|'left'|'right'|string} [props.position='center'] - CSS object-position.
 * @param {'none'|'xs'|'sm'|'md'|'lg'|'xl'|'2xl'|'full'|'pill'|'circle'} [props.radius='none'] - Border radius styling.
 * @param {string|number} [props.width] - Optional container width.
 * @param {string|number} [props.height] - Optional container height.
 * @param {'lazy'|'eager'} [props.loading='lazy'] - Native HTML image loading mode.
 * @param {'async'|'sync'|'auto'} [props.decoding='async'] - Native HTML image decoding mode.
 * @param {boolean} [props.zoomOnHover=false] - Smooth scale up on hover.
 * @param {React.ReactNode|boolean|'gradient'|'dark'|'blush'} [props.overlay=false] - Visual overlay layer.
 * @param {React.ReactNode} [props.badge] - Chip or badge element positioned on image.
 * @param {'top-left'|'top-right'|'bottom-left'|'bottom-right'} [props.badgePosition='top-left'] - Position of badge.
 * @param {React.ReactNode|string} [props.caption] - Optional figure caption.
 * @param {'below'|'overlay'} [props.captionPlacement='below'] - Caption placement mode.
 * @param {'none'|'sm'|'md'|'lg'|'colored'} [props.shadow='none'] - Box shadow level.
 * @param {boolean} [props.bordered=false] - Displays a delicate editorial border.
 * @param {string} [props.className=''] - Additional CSS class names for container.
 * @param {string} [props.imgClassName=''] - Additional CSS class names for the <img>.
 * @param {string} [props.captionClassName=''] - Additional CSS class names for the caption.
 * @param {React.Ref} [props.containerRef] - Ref to attach to the container element.
 * @param {function} [props.onLoad] - Callback when image successfully loads.
 * @param {function} [props.onError] - Callback when image fails to load.
 * @param {function} [props.onClick] - Click handler for container.
 */
const Image = forwardRef(({
  src,
  alt = '',
  fallbackSrc,
  fallback,
  placeholder = 'skeleton',
  blurDataURL,
  aspectRatio,
  fit = 'cover',
  position = 'center',
  radius = 'none',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  zoomOnHover = false,
  overlay = false,
  badge,
  badgePosition = 'top-left',
  caption,
  captionPlacement = 'below',
  shadow = 'none',
  bordered = false,
  className = '',
  imgClassName = '',
  captionClassName = '',
  containerRef,
  onLoad,
  onError,
  onClick,
  ...rest
}, ref) => {
  const [status, setStatus] = useState('loading'); // 'loading' | 'loaded' | 'error'
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);
  const internalImgRef = useRef(null);

  // Sync consumer ref with internal img ref
  const setCombinedImgRef = (node) => {
    internalImgRef.current = node;
    if (typeof ref === 'function') {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  // Reset or detect already cached image on src changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasTriedFallback(false);

    if (internalImgRef.current?.complete && internalImgRef.current?.naturalWidth > 0) {
      setStatus('loaded');
    } else {
      setStatus('loading');
    }
  }, [src]);

  const handleLoad = (e) => {
    setStatus('loaded');
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    if (fallbackSrc && !hasTriedFallback) {
      setHasTriedFallback(true);
      setCurrentSrc(fallbackSrc);
      setStatus('loading');
    } else {
      setStatus('error');
      if (onError) onError(e);
    }
  };

  // Parse aspect ratio helper
  const resolvedAspectRatio = (() => {
    if (!aspectRatio || aspectRatio === 'auto') return undefined;
    if (aspectRatio === 'square' || aspectRatio === '1/1') return '1 / 1';
    if (aspectRatio === 'video' || aspectRatio === '16/9') return '16 / 9';
    if (aspectRatio === 'portrait' || aspectRatio === '3/4') return '3 / 4';
    if (aspectRatio === '4/3') return '4 / 3';
    if (aspectRatio === '9/16') return '9 / 16';
    if (aspectRatio === '21/9') return '21 / 9';
    return typeof aspectRatio === 'number' ? `${aspectRatio}` : aspectRatio;
  })();

  const containerClasses = [
    'ui-image-container',
    `radius-${radius}`,
    shadow !== 'none' ? `shadow-${shadow}` : '',
    bordered ? 'is-bordered' : '',
    zoomOnHover ? 'is-zoomable' : '',
    status === 'loaded' ? 'is-loaded' : '',
    status === 'loading' ? 'is-loading' : '',
    status === 'error' ? 'is-error' : '',
    className
  ].filter(Boolean).join(' ');

  const imgClasses = [
    'ui-image-img',
    `fit-${fit}`,
    status === 'loaded' ? 'is-visible' : 'is-hidden',
    imgClassName
  ].filter(Boolean).join(' ');

  const containerStyles = {
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
    ...(resolvedAspectRatio ? { aspectRatio: resolvedAspectRatio } : {})
  };

  const imgStyles = {
    objectPosition: position,
    ...(rest.style || {})
  };

  const WrapperTag = caption ? 'figure' : 'div';

  // Render overlay background if configured
  const renderOverlay = () => {
    if (!overlay) return null;
    if (React.isValidElement(overlay)) {
      return <div className="ui-image-overlay custom">{overlay}</div>;
    }
    const overlayType = typeof overlay === 'string' ? overlay : 'dark';
    return <div className={`ui-image-overlay overlay-${overlayType}`} />;
  };

  // Render badge chip
  const renderBadge = () => {
    if (!badge) return null;
    return (
      <div className={`ui-image-badge pos-${badgePosition}`}>
        {badge}
      </div>
    );
  };

  // Render error fallback
  const renderFallback = () => {
    if (fallback) return fallback;
    return (
      <div className="ui-image-fallback" role="img" aria-label={alt || 'Image unavailable'}>
        <div className="ui-image-fallback-icon-wrap">
          <ImageIcon className="ui-image-fallback-icon" size={28} />
          <AlertCircle className="ui-image-fallback-alert" size={14} />
        </div>
        <span className="ui-image-fallback-text">{alt || 'Image unavailable'}</span>
      </div>
    );
  };

  return (
    <WrapperTag
      ref={containerRef}
      className={containerClasses}
      style={containerStyles}
      onClick={onClick}
      aria-busy={status === 'loading'}
    >
      <div className="ui-image-inner">
        {/* Low-res blur background placeholder */}
        {blurDataURL && status !== 'loaded' && (
          <img
            src={blurDataURL}
            alt=""
            aria-hidden="true"
            className="ui-image-blur-preview"
          />
        )}

        {/* Shimmer skeleton placeholder */}
        {status === 'loading' && placeholder === 'skeleton' && (
          <div className="ui-image-skeleton" aria-hidden="true">
            <div className="ui-image-skeleton-shimmer" />
          </div>
        )}

        {/* Custom ReactNode placeholder */}
        {status === 'loading' && React.isValidElement(placeholder) && (
          <div className="ui-image-custom-placeholder" aria-hidden="true">
            {placeholder}
          </div>
        )}

        {/* Error Fallback */}
        {status === 'error' && renderFallback()}

        {/* Main Image */}
        {status !== 'error' && (
          <img
            ref={setCombinedImgRef}
            src={currentSrc}
            alt={alt}
            loading={loading}
            decoding={decoding}
            onLoad={handleLoad}
            onError={handleError}
            className={imgClasses}
            style={imgStyles}
            {...rest}
          />
        )}

        {/* Overlay (gradient/tint/custom) */}
        {status === 'loaded' && renderOverlay()}

        {/* Floating Badge (e.g., category chip) */}
        {renderBadge()}

        {/* Overlay Caption */}
        {caption && captionPlacement === 'overlay' && (
          <figcaption className={`ui-image-caption is-overlay ${captionClassName}`}>
            {caption}
          </figcaption>
        )}
      </div>

      {/* Below Caption */}
      {caption && captionPlacement === 'below' && (
        <figcaption className={`ui-image-caption is-below ${captionClassName}`}>
          {caption}
        </figcaption>
      )}
    </WrapperTag>
  );
});

Image.displayName = 'Image';

export default Image;
