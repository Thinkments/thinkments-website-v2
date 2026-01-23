# Performance Optimization Guide - ThinkMents Website

## Overview

This guide details all performance optimizations implemented on the ThinkMents website to ensure
fast loading times and excellent user experience.

---

## 🎯 Performance Goals

- **First Contentful Paint (FCP):** < 1.8 seconds
- **Largest Contentful Paint (LCP):** < 2.5 seconds
- **First Input Delay (FID):** < 100 milliseconds
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3.8 seconds
- **Speed Index:** < 3.4 seconds

---

## ✅ Implemented Optimizations

### 1. Image Optimization

#### **Lazy Loading**

All images below the fold use native lazy loading:

```tsx
<ImageWithFallback 
  src="image.jpg" 
  alt="Description"
  loading="lazy"  // Defers loading until near viewport
  width={800}     // Prevents layout shift
  height={600}    // Prevents layout shift
/>
```

#### **Priority Images**

Above-the-fold images load immediately:

```tsx
<ImageWithFallback 
  src="hero.jpg" 
  alt="Hero"
  priority={true}        // Loads immediately
  fetchPriority="high"   // Browser prioritizes this
/>
```

#### **Image Attributes**

- `loading="lazy"` - Native browser lazy loading
- `decoding="async"` - Doesn't block page rendering
- `width` and `height` - Prevents Cumulative Layout Shift (CLS)
- `fetchPriority="high"` - For critical images

#### **Supported Formats**

- WebP with JPEG/PNG fallbacks (via Unsplash CDN)
- SVG for icons and logos
- Optimized dimensions via URL parameters

**Example:**

```
https://images.unsplash.com/photo-xxx?w=1200&h=800&fit=crop&fm=webp&q=80
```

---

### 2. Font Optimization

#### **Google Fonts with font-display: swap**

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Benefits:**

- `display=swap` - Shows fallback font immediately, swaps when custom font loads
- Prevents FOIT (Flash of Invisible Text)
- No blocking render

#### **Font Preconnect**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

**Benefits:**

- Establishes early connection to font servers
- Reduces DNS lookup and connection time
- Faster font loading

#### **System Font Fallbacks**

```css
font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

---

### 3. Critical CSS

#### **Inline Critical CSS**

Critical above-the-fold styles are inlined in `<head>`:

```html
<style>
  /* Critical CSS for initial page load */
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background-color: #ffffff;
    color: #030213;
  }
  
  /* Loading spinner */
  .loading-spinner {
    /* ... styles ... */
  }
</style>
```

**Benefits:**

- No render-blocking CSS for initial paint
- Faster First Contentful Paint (FCP)
- Better perceived performance

---

### 4. Preconnect & DNS Prefetch

#### **Preconnect (High Priority)**

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://images.unsplash.com" crossorigin />
```

**Benefits:**

- Establishes early connections to critical third-party domains
- Reduces DNS, TCP, and TLS negotiation time
- Saves ~300-500ms per connection

#### **DNS Prefetch (Medium Priority)**

```html
<link rel="dns-prefetch" href="//www.google-analytics.com" />
<link rel="dns-prefetch" href="//www.googletagmanager.com" />
<link rel="dns-prefetch" href="//analytics.ahrefs.com" />
```

**Benefits:**

- Resolves DNS for third-party domains in background
- Faster connection when resources are needed
- Minimal overhead

---

### 5. Script Optimization

#### **Deferred Analytics**

All analytics scripts use `defer` attribute:

```html
<script 
  src="https://analytics.ahrefs.com/analytics.js" 
  defer
></script>
```

**Benefits:**

- Scripts don't block page parsing
- Execute after HTML parsing completes
- Non-critical scripts load last

#### **Async Script Loading**

```javascript
// Load scripts after page is interactive
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Load non-critical scripts
  });
} else {
  setTimeout(() => {
    // Fallback for older browsers
  }, 2000);
}
```

---

### 6. Resource Hints

#### **Implemented Hints**

| Hint           | Purpose                        | Priority |
|----------------|--------------------------------|----------|
| `preconnect`   | Critical third-party origins   | Highest  |
| `dns-prefetch` | Analytics and tracking domains | Medium   |
| `prefetch`     | Resources for next page        | Lowest   |
| `preload`      | Critical fonts (optional)      | High     |

---

### 7. Code Splitting & Lazy Loading

#### **React Router Lazy Loading**

```tsx
import { lazy, Suspense } from 'react';

const BlogPage = lazy(() => import('./components/pages/BlogPage'));

<Suspense fallback={<LoadingSpinner />}>
  <BlogPage />
</Suspense>
```

#### **Component-Level Code Splitting**

- Each page is a separate bundle
- Loads only what's needed for current route
- Reduces initial bundle size

---

### 8. Compression & Minification

#### **Build Optimizations**

- **JavaScript:** Minified and tree-shaken
- **CSS:** Minified and purged of unused styles
- **HTML:** Minified in production
- **Assets:** Compressed and optimized

#### **Server-Side Compression**

Netlify automatically serves:

- Brotli compression (br)
- Gzip compression (gz)

---

### 9. Caching Strategy

#### **Static Assets**

```
Cache-Control: public, max-age=31536000, immutable
```

#### **HTML Pages**

```
Cache-Control: public, max-age=0, must-revalidate
```

#### **API Responses**

```
Cache-Control: public, max-age=300, stale-while-revalidate=60
```

---

## 📊 Performance Monitoring

### Built-in Performance Tracking

The `PerformanceOptimizer` component monitors:

#### **Core Web Vitals**

- **LCP (Largest Contentful Paint)** - Main content load time
- **FID (First Input Delay)** - Interactivity responsiveness
- **CLS (Cumulative Layout Shift)** - Visual stability

```tsx
import PerformanceOptimizer from './components/PerformanceOptimizer';

<PerformanceOptimizer />
```

---

## 🔧 Implementation Checklist

### Images

- ✅ Lazy loading on below-fold images
- ✅ Priority loading on hero images
- ✅ Width/height attributes on all images
- ✅ WebP format with fallbacks
- ✅ Responsive image sizing
- ✅ Async decoding

### Fonts

- ✅ font-display: swap
- ✅ Preconnect to font providers
- ✅ System font fallbacks
- ✅ Subset fonts (via Google Fonts)

### CSS

- ✅ Critical CSS inlined
- ✅ Non-critical CSS deferred
- ✅ Unused CSS purged
- ✅ CSS minified

### JavaScript

- ✅ Code splitting by route
- ✅ Deferred analytics scripts
- ✅ Minification and tree-shaking
- ✅ Lazy component loading

### Network

- ✅ Preconnect to critical origins
- ✅ DNS prefetch for third-parties
- ✅ HTTP/2 enabled (via Netlify)
- ✅ CDN delivery (Netlify)

### Monitoring

- ✅ Core Web Vitals tracking
- ✅ Performance Observer API
- ✅ Real User Monitoring (RUM)

---

## 🎬 Usage Examples

### Optimized Image Component

```tsx
// Above the fold - Priority image
<ImageWithFallback
  src="https://images.unsplash.com/photo-xxx?w=1920&h=1080&fit=crop"
  alt="Hero Background"
  width={1920}
  height={1080}
  priority={true}
  className="hero-image"
/>

// Below the fold - Lazy loaded
<ImageWithFallback
  src="https://images.unsplash.com/photo-xxx?w=800&h=600&fit=crop"
  alt="Service Image"
  width={800}
  height={600}
  loading="lazy"
  className="service-image"
/>
```

### Performance Optimizer

```tsx
// Add to App.tsx
import PerformanceOptimizer from './components/PerformanceOptimizer';

function App() {
  return (
    <>
      <PerformanceOptimizer />
      {/* Your app content */}
    </>
  );
}
```

---

## 📈 Testing Tools

### Recommended Testing Tools

1. **Google PageSpeed Insights**
    - https://pagespeed.web.dev/
    - Tests Core Web Vitals
    - Provides optimization suggestions

2. **Lighthouse (Chrome DevTools)**
    - Run audit in Chrome DevTools
    - Tests performance, accessibility, SEO
    - Generates detailed reports

3. **WebPageTest**
    - https://www.webpagetest.org/
    - Advanced performance testing
    - Multiple locations and devices

4. **GTmetrix**
    - https://gtmetrix.com/
    - Performance and optimization analysis
    - Historical tracking

5. **Chrome User Experience Report (CrUX)**
    - Real-world performance data
    - Core Web Vitals from actual users

---

## 🐛 Common Performance Issues & Fixes

### Issue: Images Causing Layout Shift

**Fix:** Add width and height attributes

```tsx
<ImageWithFallback
  src="image.jpg"
  width={800}
  height={600}
  alt="Description"
/>
```

### Issue: Fonts Blocking Render

**Fix:** Use font-display: swap (already implemented)

```html
<link href="...fonts.googleapis.com...&display=swap" rel="stylesheet">
```

### Issue: Large JavaScript Bundles

**Fix:** Implement code splitting

```tsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

### Issue: Slow Third-Party Scripts

**Fix:** Defer non-critical scripts

```html
<script src="analytics.js" defer></script>
```

### Issue: Render-Blocking CSS

**Fix:** Inline critical CSS and defer the rest

```html
<style>/* Critical CSS */</style>
<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">
```

---

## 📱 Mobile Optimization

### Mobile-Specific Optimizations

- **Responsive images** - Different sizes for different screens
- **Touch target sizing** - Minimum 48x48px for buttons
- **Reduced animations** - Respect prefers-reduced-motion
- **Smaller bundles** - Code splitting reduces mobile data usage
- **Service Worker** - Offline functionality (future enhancement)

---

## 🚀 Future Enhancements

### Planned Optimizations

1. **WebP Image Generation**
    - Generate WebP versions of all images
    - Serve WebP with JPEG/PNG fallbacks

2. **Service Worker**
    - Cache static assets
    - Offline functionality
    - Background sync

3. **Resource Hints Optimization**
    - Prefetch likely next pages
    - Preload critical resources

4. **Image CDN**
    - Custom image optimization service
    - Automatic format selection
    - Automatic compression

5. **Advanced Caching**
    - Service Worker caching strategies
    - Background refresh
    - Stale-while-revalidate

---

## 📚 Resources

- [Web.dev Performance](https://web.dev/performance/)
- [MDN Performance Best Practices](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [Google Web Vitals](https://web.dev/vitals/)
- [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)
- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)

---

## ✅ Performance Checklist Summary

### Critical Optimizations (Implemented)

- ✅ Lazy load images below the fold
- ✅ Add width/height to all images
- ✅ Optimize fonts with font-display: swap
- ✅ Preconnect to critical origins
- ✅ Defer analytics and tracking scripts
- ✅ Inline critical CSS
- ✅ Minify and compress assets
- ✅ Enable HTTP/2 and CDN
- ✅ Code splitting by route
- ✅ Monitor Core Web Vitals

### Performance Score Targets

- **Lighthouse Performance:** > 90
- **Lighthouse Accessibility:** > 95
- **Lighthouse Best Practices:** > 95
- **Lighthouse SEO:** > 95
- **Core Web Vitals:** All "Good"

---

**Last Updated:** 2025-01-24

All performance optimizations are now live and monitoring is in place. The ThinkMents website is
optimized for fast loading across all devices and network conditions.
