# Scroll Animation Reference Guide

This document outlines all animation implementations in the 3D portfolio and provides reference links for learning more.

## Overview

The portfolio uses **Framer Motion** and custom scroll detection hooks to create engaging scroll-triggered animations. Elements animate in from both left and right as users scroll through the page.

## Key Technologies

### 1. Framer Motion
- **Official Docs**: https://www.framer.com/motion/
- **Animation API**: https://www.framer.com/motion/animation/
- **Scroll Animations**: https://www.framer.com/motion/scroll-animations/

Used for:
- Smooth entrance animations (`initial`, `animate`, `variants`)
- Hover effects (`whileHover`)
- Scroll-triggered animations (`whileInView`, `viewport`)
- Staggered animations between child elements

### 2. Intersection Observer API
- **MDN Documentation**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- **Tutorial**: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

Used in `useScrollInView` hook to:
- Detect when elements enter the viewport
- Trigger animations only when visible
- Optimize performance by not animating off-screen elements

### 3. CSS Transforms & Animations
- **CSS Transform Documentation**: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- **CSS Animations Guide**: https://developer.mozilla.org/en-US/docs/Web/CSS/animation

Tailwind CSS classes used:
- `translate-x` and `translate-y` for positional shifts
- `opacity` for fade effects
- `duration-*` for timing control

## Component Animation Patterns

### Pattern 1: Staggered Container Animation
Used in: **Skills**, **Experience**, **Projects**

```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,  // Delay between children
      delayChildren: 0.2,    // Initial delay
    },
  },
};
```

Reference: https://www.framer.com/motion/introduction/#animation-orchestration

### Pattern 2: Directional Entry Animations
Used in: **Projects** (alternating left/right)

```tsx
// From Left
{ hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } }

// From Right
{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }
```

Reference: https://www.framer.com/motion/gesture-animations/#drag

### Pattern 3: Scroll-Triggered Animations
Used throughout all sections

```tsx
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}  // Animate only once
  variants={variants}
>
  {content}
</motion.div>
```

Reference: https://www.framer.com/motion/scroll-animations/#viewport

### Pattern 4: Hover Animations
Used in: **Skills cards**, **Project cards**, **Experience timeline**

```tsx
whileHover={{
  y: -10,
  transition: { duration: 0.3 },
}}
```

Reference: https://www.framer.com/motion/gesture-animations/#while-hover

## Custom Hooks

### useScrollInView Hook
**File**: `hooks/useScrollInView.ts`

Provides low-level scroll detection using Intersection Observer:

```tsx
const { ref, isInView } = useScrollInView();

// Returns:
// - ref: HTMLDivElement ref to attach to element
// - isInView: boolean indicating if element is in viewport
```

### useScrollAnimation Hook
**File**: `hooks/useScrollAnimation.ts`

Higher-level hook for common animation patterns with automatic scroll cleanup.

## Section-by-Section Animation Breakdown

### Hero Section
- **Animation**: Fade in with gradual opacity increase
- **Trigger**: On page load
- **Timing**: 0.5s duration

Reference: YouTube Shorts - https://youtube.com/shorts/mF8Bkx1zDeo?si=nohOAiqpXuEssBIL

### About Section
- **Animation**: Fade in from top + staggered highlights
- **Trigger**: On scroll into view
- **Direction**: Top to bottom

### Skills Section
- **Animation**: Staggered card entrance + pulse effect on tags
- **Trigger**: On scroll into view
- **Direction**: Cards fade in with scale

### Experience Section
- **Animation**: Timeline cards slide in from left
- **Trigger**: On scroll into view
- **Direction**: Left to right with timeline dot animation

### Projects Section
- **Animation**: Alternating left/right entrance
- **Trigger**: On scroll into view
- **Pattern**: Odd cards from left, even from right

### Contact Section
- **Animation**: Form inputs fade in with stagger
- **Trigger**: On scroll into view
- **Social icons**: Scale and rotate on hover

## Performance Considerations

1. **once: true** in viewport config
   - Animations only trigger once to reduce repaints
   - Reference: https://www.framer.com/motion/scroll-animations/#viewport-options

2. **Intersection Observer**
   - Native browser API, better performance than scroll listeners
   - Reference: https://web.dev/articles/bfcache#intersection_observer

3. **Will-change CSS property**
   - Applied to animated elements for optimization
   - Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/will-change

## Browser Compatibility

- **Framer Motion**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Intersection Observer**: Chrome 51+, Firefox 55+, Safari 12.1+
- **CSS Transforms**: All modern browsers

Fallback: Elements will appear without animation in unsupported browsers.

## Customization Guide

### Changing Animation Speed
```tsx
// In variant objects, adjust duration (in seconds)
transition: { duration: 0.6 }  // Make slower
transition: { duration: 0.3 }  // Make faster
```

### Changing Entrance Direction
```tsx
// Currently left-to-right (-100 to 0)
// For top-to-bottom:
{ hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } }

// For right-to-left:
{ hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } }
```

### Adding Bounce Effect
```tsx
transition: { 
  type: "spring",
  stiffness: 100,
  damping: 10
}
```

Reference: https://www.framer.com/motion/transition/#spring

## Learning Resources

### Foundational Concepts
- Easing Functions: https://easings.net/
- Animation Principles: https://www.interaction-design.org/literature/topics/animation
- Web Performance: https://web.dev/animations-guide/

### Framer Motion Deep Dives
- Variants Tutorial: https://www.framer.com/motion/animation/#variants
- Choreography: https://www.framer.com/motion/introduction/#animation-orchestration
- Advanced Scroll Animations: https://www.framer.com/motion/scroll-animations/

### Video References
- Your Reference: https://youtube.com/shorts/mF8Bkx1zDeo?si=nohOAiqpXuEssBIL
- Framer Motion Course: https://www.youtube.com/results?search_query=framer+motion+tutorial
- CSS Animations: https://www.youtube.com/results?search_query=css+animation+tutorial

## Troubleshooting

### Animation not triggering?
1. Check if `whileInView` is set correctly
2. Verify `viewport={{ once: true }}` isn't preventing re-triggers
3. Ensure element is actually scrolling into view

### Performance issues?
1. Reduce number of simultaneous animations
2. Use `once: true` to animate only on first view
3. Consider disabling on mobile with `matchMedia`

### Animations too jerky?
1. Increase `duration` in transition
2. Use `ease: "easeInOut"` for smoother motion
3. Reduce number of keyframes

## Future Enhancement Ideas

1. **Parallax Scrolling**: Different scroll speeds for different elements
   - Reference: https://www.framer.com/motion/scroll-animations/#parallax

2. **Scroll Progress Indicator**: Visual feedback of page scroll
   - Already implemented in `ScrollProgress.tsx`

3. **Page Transitions**: Animate between different pages
   - Reference: https://www.framer.com/motion/layout-animations/

4. **Gesture Animations**: Drag and swipe interactions
   - Reference: https://www.framer.com/motion/gesture-animations/

---

**Last Updated**: 2026-04-20
**Framer Motion Version**: Latest (from package.json)
**Browser Support**: All modern browsers with Intersection Observer API
