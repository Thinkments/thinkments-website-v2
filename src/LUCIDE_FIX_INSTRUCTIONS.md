# Lucide React Import Fix

## Problem

All files importing from `lucide-react` need to use `lucide-react@0.487.0` instead.

## Pattern to Replace

```typescript
// WRONG:
from 'lucide-react';

// CORRECT:
from 'lucide-react@0.487.0';
```

## Files Already Fixed

- ✅ /components/Footer.tsx
- ✅ /components/Header.tsx
- ✅ /components/pages/RobotsPage.tsx

## Files Still Need Fixing

All other files that import from 'lucide-react' (approximately 47 files).

## Solution

Use find and replace across the entire project:

- Find: `from 'lucide-react';`
- Replace with: `from 'lucide-react@0.487.0';`

This will fix all remaining lucide-react imports in one operation.
