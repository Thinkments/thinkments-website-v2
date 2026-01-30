# Performance Optimization Quick Reference Guide

## 🚀 Quick Start Checklist

Use this guide when adding new content to ensure optimal performance.

---

## 📸 Image Optimization

### ✅ Do This:

**For Hero Images (Top of Page):**

```tsx
import PerformantImage from '@/components/PerformantImage';

<PerformantImage
  src="/hero-image.jpg"
  alt="Descriptive alt text"
  width={1920}
  height={1080}
  priority={true} // ← Don't lazy load hero images
  lazy={false}
/>;
```

**For Regular Images (Below Fold):**

```tsx
<PerformantImage
  src="/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  lazy={true} // ← Lazy load everything below the fold
/>
```

**For WebP with Fallback:**

```tsx
import { PictureImage } from '@/components/PerformantImage';

<PictureImage
  webpSrc="/image.webp"
  fallbackSrc="/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  lazy={true}
/>;
```

### ❌ Don't Do This:

```tsx
// ❌ Missing width/height (causes layout shift)
<img src="/image.jpg" alt="Image" />

// ❌ No lazy loading on below-fold images
<img src="/image.jpg" alt="Image" loading="eager" />

// ❌ Lazy loading hero images (delays LCP)
<img src="/hero.jpg" alt="Hero" loading="lazy" />
```

---

## 🔤 Font Usage

### ✅ Fonts Already Optimized:

The following fonts are preloaded and optimized:

- **Playfair Display** (Headlines)
- **Montserrat** (Body text)

**Usage:**

```tsx
// Headlines
<h1 style={{ fontFamily: 'Playfair Display, serif' }}>
  Your Headline
</h1>

// Body text
<p style={{ fontFamily: 'Montserrat, sans-serif' }}>
  Your content
</p>

// Or use Tailwind classes (if configured)
<h1 className="font-playfair">Headline</h1>
<p className="font-montserrat">Content</p>
```

### ❌ Don't Add New Fonts Without:

1. Adding preload link in `/public/index.html`
2. Ensuring `display=swap` parameter
3. Checking total font weight impact

---

## 📜 Script Loading

### ✅ Do This:

**For Analytics/Tracking:**

```tsx
// Already optimized in /components/Analytics.tsx
// All scripts use defer attribute
<script defer src="..."></script>
```

**For Third-Party Widgets:**

```tsx
// Load after page content
<script defer src="third-party-widget.js"></script>;

// Or use dynamic import
useEffect(() => {
  import('third-party-widget').then((module) => {
    module.init();
  });
}, []);
```

### ❌ Don't Do This:

```tsx
// ❌ Blocking script (delays page render)
<script src="script.js"></script>

// ❌ Multiple inline scripts
<script>/* Large code block */</script>
<script>/* Another block */</script>
```

---

## 🎨 CSS Best Practices

### ✅ Do This:

**Critical CSS (Above-the-Fold):**

- Already inlined in `/public/index.html`
- Covers loading states and basic layout

**Component CSS:**

- Use Tailwind classes (already optimized)
- Import only what you need

**Font Loading:**

- Already using `display=swap` in `globals.css`

### ❌ Don't Do This:

```css
/* ❌ Blocking @import in component CSS */
@import url('https://fonts.googleapis.com/css2?family=NewFont');

/* ❌ Unused CSS selectors */
.never-used-class { ... }
```

---

## 🔗 External Resources

### ✅ Already Preconnected:

These domains are already optimized:

- `fonts.googleapis.com`
- `fonts.gstatic.com`
- `images.unsplash.com`
- `www.google-analytics.com`
- `www.googletagmanager.com`
- `analytics.ahrefs.com`

### Adding New External Resources:

**If frequently used (10+ requests):**

```html
<!-- Add to /public/index.html -->
<link rel="preconnect" href="https://new-cdn.com" crossorigin />
```

**If occasionally used (1-5 requests):**

```html
<!-- Add to /public/index.html -->
<link rel="dns-prefetch" href="//new-service.com" />
```

---

## 📱 Mobile Optimization

### ✅ Do This:

**Responsive Images:**

```tsx
import { ResponsiveImage } from '@/components/PerformantImage';

<ResponsiveImage
  src="/image-800.jpg"
  srcSet="/image-400.jpg 400w, /image-800.jpg 800w, /image-1200.jpg 1200w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
  alt="Description"
  width={800}
  height={600}
  lazy={true}
/>;
```

**Mobile-First Design:**

```tsx
// Tailwind mobile-first approach
<div className="text-sm md:text-base lg:text-lg">Responsive text</div>
```

### ❌ Don't Do This:

```tsx
// ❌ Same large image for all devices
<img src="/huge-desktop-image-3mb.jpg" alt="..." />

// ❌ Desktop-first media queries
<style>
  @media (max-width: 768px) { /* ... */ }
</style>
```

---

## ⚡ Component Performance

### ✅ Do This:

**Lazy Load Components:**

```tsx
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

**Memoize Expensive Calculations:**

```tsx
import { useMemo } from 'react';

const expensiveValue = useMemo(() => {
  return heavyCalculation(data);
}, [data]);
```

**Debounce Input Handlers:**

```tsx
import { useState, useCallback } from 'react';
import { debounce } from 'lodash';

const debouncedSearch = useCallback(
  debounce((value) => performSearch(value), 300),
  [],
);
```

### ❌ Don't Do This:

```tsx
// ❌ Import everything upfront
import MassiveLibrary from 'massive-library';

// ❌ Recalculate on every render
function Component() {
  const value = expensiveCalculation(); // ❌ No useMemo
  return <div>{value}</div>;
}

// ❌ No debouncing on search
<input onChange={(e) => performSearch(e.target.value)} />;
```

---

## 🧪 Testing Performance

### Before Deploying:

1. **Run Lighthouse:**

   ```bash
   # In Chrome DevTools
   F12 > Lighthouse > Run Audit
   ```

   - Target: 90+ on Performance
   - Check all Core Web Vitals

2. **Test on Slow Connection:**

   ```bash
   # Chrome DevTools
   F12 > Network > Throttling > Slow 3G
   ```

3. **Check Image Sizes:**

   ```bash
   # Network tab in DevTools
   # Ensure images are:
   # - < 200KB for hero images
   # - < 100KB for content images
   # - < 50KB for thumbnails
   ```

4. **Verify Lazy Loading:**
   ```bash
   # Network tab
   # Images below fold should load only when scrolling
   ```

---

## 📊 Performance Metrics Targets

### Core Web Vitals:

| Metric                             | Target  | Critical |
| ---------------------------------- | ------- | -------- |
| **LCP** (Largest Contentful Paint) | < 2.5s  | ✅       |
| **FID** (First Input Delay)        | < 100ms | ✅       |
| **CLS** (Cumulative Layout Shift)  | < 0.1   | ✅       |

### Additional Metrics:

| Metric                           | Target  | Important |
| -------------------------------- | ------- | --------- |
| **FCP** (First Contentful Paint) | < 1.8s  | ✅        |
| **TTI** (Time to Interactive)    | < 3.8s  | ✅        |
| **Speed Index**                  | < 3.4s  | ✅        |
| **TBT** (Total Blocking Time)    | < 200ms | ✅        |

---

## 🎯 Quick Wins

### Immediate Performance Boosts:

1. **Add Width/Height to Images:**
   - Before: `<img src="..." alt="..." />`
   - After: `<img src="..." alt="..." width="800" height="600" />`
   - Impact: Prevents layout shift

2. **Lazy Load Below-Fold Images:**
   - Before: `<img src="..." />`
   - After: `<PerformantImage src="..." lazy={true} />`
   - Impact: Saves 500KB-2MB on initial load

3. **Defer Analytics:**
   - Already done in `/components/Analytics.tsx`
   - Impact: 300-800ms faster TTI

4. **Use WebP Format:**
   - Before: `image.jpg` (500KB)
   - After: `image.webp` (200KB)
   - Impact: 60% file size reduction

---

## 🛠️ Common Issues & Fixes

### Issue: Images causing layout shift

**Fix:**

```tsx
// Always add width and height
<PerformantImage
  src="/image.jpg"
  alt="..."
  width={800} // ← Add this
  height={600} // ← Add this
/>
```

### Issue: Slow font loading

**Fix:**

```css
/* Already implemented in globals.css */
@import url('...&display=swap'); /* ← display=swap */
```

### Issue: Scripts blocking rendering

**Fix:**

```tsx
// Use defer attribute
<script defer src="script.js"></script>
```

### Issue: Large images on mobile

**Fix:**

```tsx
// Use responsive images
<ResponsiveImage
  srcSet="/img-400.jpg 400w, /img-800.jpg 800w"
  sizes="(max-width: 768px) 100vw, 800px"
/>
```

---

## 📋 Pre-Launch Checklist

Before deploying new pages:

- [ ] All images have `width` and `height` attributes
- [ ] Hero images use `priority={true}`, others use `lazy={true}`
- [ ] WebP format used where possible
- [ ] No custom fonts added without optimization
- [ ] All third-party scripts use `defer`
- [ ] Lighthouse score > 90
- [ ] All Core Web Vitals pass (Green)
- [ ] Tested on slow 3G connection
- [ ] Mobile performance acceptable
- [ ] No console errors

---

## 🔗 Quick Links

- [Full Performance Documentation](/PERFORMANCE_OPTIMIZATIONS.md)
- [Favicon Instructions](/FAVICON_INSTRUCTIONS.md)
- [PerformantImage Component](/components/PerformantImage.tsx)
- [Analytics Component](/components/Analytics.tsx)

---

## 💡 Pro Tips

1. **Measure Before Optimizing:** Use Lighthouse to identify actual bottlenecks
2. **Optimize Above-the-Fold First:** Hero images and critical CSS matter most
3. **Test on Real Devices:** DevTools throttling ≠ real mobile experience
4. **Monitor Continuously:** Performance degrades over time without monitoring
5. **Don't Over-Optimize:** Balance performance with development speed

---

Last Updated: December 2024
