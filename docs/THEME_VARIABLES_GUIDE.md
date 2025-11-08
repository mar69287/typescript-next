# Theme Variables Guide

## ✅ Now Using CSS Variables!

All components now use **CSS variables** instead of hardcoded hex values. This means you can update your entire theme by changing values in **one place**.

## How It Works

### 1. Define Colors in `app/globals.css`

```css
:root {
  /* Neon Colors */
  --neon-orange: #ff652f;
  --neon-green: #14a76c;
  --neon-yellow: #ffe400;
  
  /* Other colors... */
}
```

### 2. Use in Components

Instead of:
```tsx
// ❌ BAD - Hardcoded
className="text-[#FF652F]"
```

We now use:
```tsx
// ✅ GOOD - CSS Variable
className="text-[--neon-orange]"
```

## Available Theme Variables

### Neon Colors (Main Theme)
```css
--neon-orange  /* Primary buttons, highlights */
--neon-green   /* Secondary buttons, success */
--neon-yellow  /* Warnings, badges */
```

### Semantic Colors
```css
--primary-500   /* Primary color */
--primary-600   /* Primary hover */
--accent-500    /* Accent color */
--success-500   /* Success states */
--warning-500   /* Warnings */
--error-500     /* Errors */
--info-500      /* Info */
```

### Background Colors
```css
--background    /* Main background (#272727) */
--neutral-700   /* Card backgrounds */
--neutral-800   /* Section backgrounds */
```

## Usage Examples

### Buttons
```tsx
// Primary button
className="bg-[--neon-orange] hover:bg-[--primary-600]"

// Secondary button
className="border-[--neon-green] text-[--neon-green]"

// Ghost button
className="text-neutral-200 hover:text-[--neon-yellow]"
```

### Text Colors
```tsx
// Neon text
className="text-[--neon-orange]"

// Regular text
className="text-neutral-200"
```

### Badges & Alerts
```tsx
// Success
className="bg-[--neon-green]/20 text-[--neon-green]"

// Warning
className="bg-[--neon-yellow]/20 text-[--neon-yellow]"
```

### Inline Styles (for dynamic props)
```tsx
// In page.tsx features array
color: "var(--neon-yellow)"
```

## How to Change Theme Colors

### Want to change the primary color?

**Before:** Had to find and replace in every component 😫

**Now:** Change ONE line in `app/globals.css` 🎉

```css
:root {
  /* Change from orange to purple */
  --neon-orange: #a855f7; /* That's it! */
}
```

All buttons, icons, and highlights automatically update!

### Want a completely different color scheme?

Just update these 3 variables in `globals.css`:

```css
:root {
  --neon-orange: #YOUR_PRIMARY_COLOR;
  --neon-green: #YOUR_SECONDARY_COLOR;
  --neon-yellow: #YOUR_ACCENT_COLOR;
}
```

## Benefits

### ✅ Maintainability
- Change colors in ONE place
- No need to search through files
- Consistent across entire app

### ✅ Flexibility
- Easy theme switching
- Support for dark/light mode
- Dynamic theming possible

### ✅ Performance
- CSS variables are fast
- No JavaScript needed
- Browser-native support

## Current Theme Colors

| Variable | Current Value | Usage |
|----------|--------------|-------|
| `--neon-orange` | `#ff652f` | Primary buttons, main brand color |
| `--neon-green` | `#14a76c` | Secondary buttons, success states |
| `--neon-yellow` | `#ffe400` | Warnings, highlights, badges |
| `--error-500` | `#ff4d4d` | Error messages, destructive actions |
| `--info-500` | `#00bcd4` | Info messages, links |
| `--background` | `#272727` | Main dark background |

## Adding New Colors

1. **Add to `:root` in `globals.css`:**
```css
:root {
  --neon-blue: #3b82f6;
}
```

2. **Use in components:**
```tsx
className="text-[--neon-blue]"
```

That's it! The variable is immediately available.

## Migration Complete

All components have been updated:
- ✅ Button
- ✅ Badge  
- ✅ Alert
- ✅ Input
- ✅ Spinner
- ✅ StatWave
- ✅ FeatureBlob
- ✅ Navbar
- ✅ Footer
- ✅ HeroSection
- ✅ All page components

**No more hardcoded hex values!** 🎨✨

