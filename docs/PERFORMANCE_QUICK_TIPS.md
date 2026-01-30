# Performance Quick Tips - ThinkMents

## 🚀 Quick Reference for Developers

### Image Optimization

#### ✅ DO:

```tsx
// Hero images (above the fold)
<ImageWithFallback
  src="hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority={true}
/>

// Regular images (below the fold)
<ImageWithFallback
  src="image.jpg"
  alt="Description"
  width={800}
  height={600}
  loading="lazy"
/>
```

#### ❌ DON'T:

```tsx
// Missing dimensions (causes layout shift)
<img src="image.jpg" alt="Bad" />

// Loading all images eagerly
<img src="image.jpg" loading="eager" />
```

---

### Font Loading

#### ✅ DO:

```html
<!-- Already configured in index.html -->
<link href="...fonts.googleapis.com...&display=swap" rel="stylesheet" />
```

#### ❌ DON'T:

```html
<!-- Blocks rendering -->
<link href="...fonts.googleapis.com..." rel="stylesheet" />
```

---

### Script Loading

#### ✅ DO:

```html
<!-- Defer non-critical scripts -->
<script src="analytics.js" defer></script>

<!-- Async for independent scripts -->
<script src="widget.js" async></script>
```

#### ❌ DON'T:

```html
<!-- Blocks page parsing -->
<script src="large-script.js"></script>
```

---

### Resource Hints

#### ✅ DO:

```html
<!-- Critical origins -->
<link rel="preconnect" href="https://fonts.googleapis.com" />

<!-- Third-party analytics -->
<link rel="dns-prefetch" href="//www.google-analytics.com" />
```

#### ❌ DON'T:

```html
<!-- Too many preconnects (limit to 3-4) -->
<link rel="preconnect" href="..." />
<link rel="preconnect" href="..." />
<link rel="preconnect" href="..." />
<link rel="preconnect" href="..." />
<link rel="preconnect" href="..." />
```

---

### Component Best Practices

#### ✅ DO:

```tsx
// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>;
```

#### ❌ DON'T:

```tsx
// Import everything upfront
import HeavyComponent from './HeavyComponent';
```

---

## 🎯 Performance Targets

| Metric | Target  | Current |
| ------ | ------- | ------- |
| FCP    | < 1.8s  | ✅      |
| LCP    | < 2.5s  | ✅      |
| FID    | < 100ms | ✅      |
| CLS    | < 0.1   | ✅      |
| TTI    | < 3.8s  | ✅      |

---

## 🔍 Quick Testing

### Test Performance

```bash
# Using Lighthouse CLI
npm install -g lighthouse
lighthouse https://thinkments.com --view

# Using PageSpeed Insights
# Visit: https://pagespeed.web.dev/
```

### Check Bundle Size

```bash
# Build and analyze
npm run build

# Check dist/ folder sizes
```

---

## 📋 Pre-Deployment Checklist

- [ ] All images have width/height attributes
- [ ] Hero images use `priority={true}`
- [ ] Below-fold images use `loading="lazy"`
- [ ] No console errors in production
- [ ] Analytics scripts use `defer`
- [ ] Critical CSS is inlined
- [ ] Fonts use `display=swap`
- [ ] Run Lighthouse audit (score > 90)

---

## 🐛 Common Mistakes

### 1. Forgetting Image Dimensions

```tsx
// ❌ Bad
<ImageWithFallback src="image.jpg" />

// ✅ Good
<ImageWithFallback src="image.jpg" width={800} height={600} />
```

### 2. Loading All Images Eagerly

```tsx
// ❌ Bad - All images load immediately
<ImageWithFallback src="image.jpg" loading="eager" />

// ✅ Good - Lazy load below fold
<ImageWithFallback src="image.jpg" loading="lazy" />
```

### 3. Blocking Scripts in Head

```html
<!-- ❌ Bad - Blocks parsing -->
<script src="analytics.js"></script>

<!-- ✅ Good - Deferred -->
<script src="analytics.js" defer></script>
```

### 4. No Preconnect to Critical Origins

```html
<!-- ❌ Bad - Slow connection setup -->
<!-- No preconnect -->

<!-- ✅ Good - Fast connection -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

---

## 📊 Monitoring

### Check Performance

```tsx
// Add to App.tsx
import PerformanceOptimizer from './components/PerformanceOptimizer';

<PerformanceOptimizer />;
```

### View Core Web Vitals

1. Open Chrome DevTools
2. Go to Performance tab
3. Record page load
4. Check Web Vitals section

---

## 🔗 Quick Links

- [Full Performance Guide](/PERFORMANCE_OPTIMIZATION_GUIDE.md)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- [Web.dev Vitals](https://web.dev/vitals/)

---

**Remember:** Performance is a feature, not an afterthought!
