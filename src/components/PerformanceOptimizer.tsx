import { useEffect } from 'react';

/**
 * Performance Optimizer Component
 *
 * Implements various performance optimizations:
 * - Lazy loads non-critical resources
 * - Defers analytics scripts
 * - Monitors Core Web Vitals
 * - Reports performance metrics
 */

// Define types for requestIdleCallback which might not be in all environments
interface Window {
  requestIdleCallback: (
    callback: (deadline: IdleDeadline) => void,
    options?: { timeout: number },
  ) => number;
}

interface IdleDeadline {
  timeRemaining: () => number;
  didTimeout: boolean;
}

// Minimal interface for PerformanceObserverEntry to satisfy TS
interface PerformanceEntryWithProcessing extends PerformanceEntry {
  processingStart?: number;
  hadRecentInput?: boolean;
  value?: number;
}

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Defer loading of non-critical scripts
    const loadDeferredScripts = () => {
      // Analytics and tracking scripts should load after page content
      // This is a placeholder - add your analytics scripts here

      // Example: Load Google Analytics after page load
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        (window as unknown as Window).requestIdleCallback(() => {
          // Load analytics here
          console.log('Analytics loaded after idle');
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          // Load analytics here
          console.log('Analytics loaded after timeout');
        }, 2000);
      }
    };

    // Load deferred scripts after initial render
    loadDeferredScripts();

    // Monitor Core Web Vitals (if supported)
    if ('web-vital' in window || 'PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      } catch (e) {
        // LCP not supported
      }

      // First Input Delay (FID)
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceEntryWithProcessing[];
          entries.forEach((entry) => {
            if (entry.processingStart) {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
      } catch (e) {
        // FID not supported
      }

      // Cumulative Layout Shift (CLS)
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceEntryWithProcessing[];
          entries.forEach((entry) => {
            if (!entry.hadRecentInput && entry.value) {
              clsValue += entry.value;
              console.log('CLS:', clsValue);
            }
          });
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        // CLS not supported
      }
    }

    // Preload critical images for next page
    const preloadNextPageImages = () => {
      // This can be customized based on likely next pages
      const criticalImages: string[] = [
        // Add URLs of images that are likely to be needed next
      ];

      criticalImages.forEach((imageUrl) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.as = 'image';
        link.href = imageUrl;
        document.head.appendChild(link);
      });
    };

    // Preload after page is loaded
    if (document.readyState === 'complete') {
      preloadNextPageImages();
    } else {
      window.addEventListener('load', preloadNextPageImages);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  // This component doesn't render anything
  return null;
}

/**
 * Custom hook for lazy loading components
 */
export function useLazyLoad(threshold = 0.1) {
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;

              // Lazy load images
              if (target.tagName === 'IMG' && target.dataset.src) {
                (target as HTMLImageElement).src = target.dataset.src;
                target.removeAttribute('data-src');
              }

              // Lazy load background images
              if (target.dataset.bgSrc) {
                target.style.backgroundImage = `url(${target.dataset.bgSrc})`;
                target.removeAttribute('data-bg-src');
              }

              observer.unobserve(target);
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: threshold,
        },
      );

      // Observe all lazy-loadable elements
      const lazyElements = document.querySelectorAll('[data-src], [data-bg-src]');
      lazyElements.forEach((el) => observer.observe(el));

      return () => {
        observer.disconnect();
      };
    }
  }, [threshold]);
}

/**
 * Utility function to defer loading of non-critical CSS
 */
export function deferNonCriticalCSS(href: string) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.media = 'print';
  link.onload = function () {
    link.media = 'all';
  };
  document.head.appendChild(link);
}

/**
 * Utility function to preload critical resources
 */
export function preloadResource(href: string, as: string, type?: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (type) {
    link.type = type;
  }
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }
  document.head.appendChild(link);
}
