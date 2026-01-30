import React from 'react';

interface PerformantImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  className?: string;
  priority?: boolean;
}

/**
 * Performance-optimized image component with lazy loading and proper attributes
 *
 * Features:
 * - Lazy loading by default (loading="lazy")
 * - Width and height attributes to prevent layout shift
 * - Optional priority loading for above-the-fold images
 * - WebP format support with fallback (when implemented)
 *
 * Usage:
 * <PerformantImage
 *   src="/image.jpg"
 *   alt="Description"
 *   width={800}
 *   height={600}
 *   lazy={true}
 * />
 */
export default function PerformantImage({
  src,
  alt,
  width,
  height,
  lazy = true,
  className = '',
  priority = false,
  ...props
}: PerformantImageProps) {
  const loadingStrategy = priority ? 'eager' : lazy ? 'lazy' : 'eager';
  const fetchPriority = priority ? 'high' : 'auto';

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadingStrategy}
      fetchPriority={fetchPriority as 'high' | 'low' | 'auto'}
      decoding="async"
      className={className}
      {...props}
    />
  );
}

/**
 * Picture element component for WebP support with fallback
 *
 * Usage:
 * <PictureImage
 *   webpSrc="/image.webp"
 *   fallbackSrc="/image.jpg"
 *   alt="Description"
 *   width={800}
 *   height={600}
 * />
 */
interface PictureImageProps {
  webpSrc?: string;
  fallbackSrc: string;
  alt: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  className?: string;
  priority?: boolean;
}

export function PictureImage({
  webpSrc,
  fallbackSrc,
  alt,
  width,
  height,
  lazy = true,
  className = '',
  priority = false,
}: PictureImageProps) {
  const loadingStrategy = priority ? 'eager' : lazy ? 'lazy' : 'eager';
  const fetchPriority = priority ? 'high' : 'auto';

  return (
    <picture>
      {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
      <source srcSet={fallbackSrc} type="image/jpeg" />
      <img
        src={fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        loading={loadingStrategy}
        fetchPriority={fetchPriority as 'high' | 'low' | 'auto'}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

/**
 * Responsive image component with srcset for different screen sizes
 *
 * Usage:
 * <ResponsiveImage
 *   src="/image-800.jpg"
 *   srcSet="/image-400.jpg 400w, /image-800.jpg 800w, /image-1200.jpg 1200w"
 *   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
 *   alt="Description"
 *   width={800}
 *   height={600}
 * />
 */
interface ResponsiveImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  className?: string;
  priority?: boolean;
}

export function ResponsiveImage({
  src,
  srcSet,
  sizes,
  alt,
  width,
  height,
  lazy = true,
  className = '',
  priority = false,
}: ResponsiveImageProps) {
  const loadingStrategy = priority ? 'eager' : lazy ? 'lazy' : 'eager';
  const fetchPriority = priority ? 'high' : 'auto';

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loadingStrategy}
      fetchPriority={fetchPriority as 'high' | 'low' | 'auto'}
      decoding="async"
      className={className}
    />
  );
}
