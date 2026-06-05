# 📘 Complete CSS, Bootstrap & Tailwind Notes
> Comprehensive notes with in-depth explanations, examples, and interview questions

---

## Table of Contents

1. [CSS Fundamentals](#1-css-fundamentals)
2. [Box Model](#2-box-model)
3. [Selectors & Specificity](#3-selectors--specificity)
4. [Display & Positioning](#4-display--positioning)
5. [Flexbox](#5-flexbox)
6. [CSS Grid](#6-css-grid)
7. [Responsive Design & Media Queries](#7-responsive-design--media-queries)
8. [CSS Variables (Custom Properties)](#8-css-variables-custom-properties)
9. [Pseudo-classes & Pseudo-elements](#9-pseudo-classes--pseudo-elements)
10. [Transitions & Animations](#10-transitions--animations)
11. [CSS Units](#11-css-units)
12. [Bootstrap 5](#12-bootstrap-5)
13. [Tailwind CSS](#13-tailwind-css)
14. [Interview Questions](#14-interview-questions)

---

## 1. CSS Fundamentals

### What is CSS?
CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of HTML documents. It controls layout, colors, fonts, spacing, and visual effects.

### How CSS Works — The Cascade
The "Cascading" in CSS means styles are applied in a specific order of priority:
1. **Browser default styles** (lowest priority)
2. **External stylesheets** (`<link rel="stylesheet">`)
3. **Internal styles** (`<style>` in `<head>`)
4. **Inline styles** (`style=""` attribute)
5. **`!important` declarations** (highest priority — use sparingly)

### Ways to Add CSS

```html
<!-- 1. External CSS (Best Practice) -->
<link rel="stylesheet" href="styles.css">

<!-- 2. Internal CSS -->
<style>
  h1 { color: blue; }
</style>

<!-- 3. Inline CSS -->
<h1 style="color: blue;">Hello</h1>
```

### CSS Syntax

```css
selector {
  property: value;
}

/* Example */
h1 {
  color: #333333;
  font-size: 2rem;
  font-weight: bold;
}
```

### CSS Colors

```css
.box {
  color: red;                    /* Named color */
  color: #ff5733;                /* Hex */
  color: rgb(255, 87, 51);       /* RGB */
  color: rgba(255, 87, 51, 0.5); /* RGBA - with opacity */
  color: hsl(14, 100%, 60%);     /* HSL */
  color: hsla(14, 100%, 60%, 0.5); /* HSLA */
}
```

---

## 2. Box Model

### Concept
Every HTML element is a rectangular box. The CSS Box Model describes how the browser calculates the size and space of an element.

```
+---------------------------+
|        MARGIN             |
|  +---------------------+  |
|  |      BORDER         |  |
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

### Properties

```css
.box {
  width: 300px;
  height: 150px;

  padding: 20px;           /* space inside the border */
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;

  border: 2px solid black;
  border-radius: 8px;      /* rounded corners */

  margin: 30px;            /* space outside the border */
  margin: 10px 20px;       /* top/bottom left/right */
  margin: 0 auto;          /* center horizontally */
}
```

### `box-sizing` Property

By default, `width` only applies to the **content area**. Padding and border are added on top.

```css
/* Default (content-box) */
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid;
  /* Actual rendered width = 300 + 40 + 10 = 350px */
}

/* Better approach: border-box */
* {
  box-sizing: border-box;
}
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid;
  /* Actual rendered width = 300px (padding & border included) */
}
```

> ✅ **Best Practice**: Always use `box-sizing: border-box` globally.

---

## 3. Selectors & Specificity

### Types of Selectors

```css
/* Universal Selector */
* { margin: 0; padding: 0; }

/* Element Selector */
p { font-size: 16px; }

/* Class Selector (reusable) */
.card { background: white; border-radius: 8px; }

/* ID Selector (unique) */
#header { background: navy; }

/* Attribute Selector */
input[type="text"] { border: 1px solid gray; }
a[href^="https"] { color: green; }   /* starts with */
a[href$=".pdf"] { color: red; }      /* ends with */
a[href*="google"] { color: blue; }   /* contains */

/* Descendant Selector */
.container p { color: gray; }

/* Child Selector (direct child only) */
ul > li { list-style: none; }

/* Adjacent Sibling */
h1 + p { font-size: 1.2rem; }

/* General Sibling */
h1 ~ p { color: gray; }

/* Group Selector */
h1, h2, h3 { font-family: 'Georgia', serif; }
```

### Pseudo-class Selectors

```css
a:hover        { color: red; }
a:visited      { color: purple; }
a:active       { color: orange; }
input:focus    { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:last-child  { border-bottom: none; }
li:nth-child(2)     { color: red; }
li:nth-child(odd)   { background: #f5f5f5; }
li:nth-child(even)  { background: #fff; }
li:nth-child(3n)    { color: blue; }  /* every 3rd */
p:not(.special)     { color: gray; }  /* negation */
```

### Specificity — How CSS Decides Which Style Wins

Specificity is calculated as a 4-part value: **(inline, IDs, classes/attributes/pseudo-classes, elements)**

| Selector | Specificity Score |
|---|---|
| `*` | 0,0,0,0 |
| `p` | 0,0,0,1 |
| `.class` | 0,0,1,0 |
| `#id` | 0,1,0,0 |
| `style=""` | 1,0,0,0 |
| `!important` | Overrides all |

```css
/* Specificity: 0,0,0,1 */
p { color: black; }

/* Specificity: 0,0,1,0 — wins over above */
.text { color: blue; }

/* Specificity: 0,1,0,0 — wins over class */
#main { color: red; }

/* Inline — wins over ID */
<p style="color: green;">  /* 1,0,0,0 */
```

> 💡 **Tip**: Higher specificity wins. If equal, the **last rule** in the file wins.

---

## 4. Display & Positioning

### Display Property

```css
/* Block: takes full width, starts on new line */
div, p, h1-h6, ul, section { display: block; }

/* Inline: only as wide as content, no width/height */
span, a, strong, em { display: inline; }

/* Inline-block: inline flow but respects width/height */
.btn { display: inline-block; width: 120px; padding: 10px; }

/* None: completely removed from layout */
.hidden { display: none; }

/* Flex and Grid (covered in detail below) */
.container { display: flex; }
.grid { display: grid; }
```

### Position Property

```css
/* Static (default) - normal document flow */
.static { position: static; }

/* Relative - offset from its own normal position */
.relative {
  position: relative;
  top: 20px;    /* moves 20px DOWN from where it was */
  left: 10px;   /* moves 10px RIGHT */
}

/* Absolute - removed from flow, relative to nearest positioned ancestor */
.parent { position: relative; }
.child {
  position: absolute;
  top: 0;
  right: 0;    /* sticks to top-right of parent */
}

/* Fixed - relative to the viewport, stays while scrolling */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

/* Sticky - relative until scroll threshold, then fixed */
.sticky-header {
  position: sticky;
  top: 0;     /* sticks when scrolled to top of viewport */
}
```

### Z-index

```css
/* Controls stacking order on the Z-axis */
/* Higher value = appears on top */
.modal        { z-index: 1000; }
.overlay      { z-index: 999; }
.navbar       { z-index: 100; }
.card         { z-index: 1; }
```

> ⚠️ `z-index` only works on **positioned elements** (not static).

### Overflow

```css
.box {
  overflow: visible;  /* Default - content spills out */
  overflow: hidden;   /* Clips content */
  overflow: scroll;   /* Always shows scrollbar */
  overflow: auto;     /* Scrollbar only when needed */
  overflow-x: hidden; /* Horizontal only */
  overflow-y: auto;   /* Vertical only */
}
```

---

## 5. Flexbox

### Concept
Flexbox is a **one-dimensional** layout system — it arranges items in a row or column.

### Flex Container Properties

```css
.container {
  display: flex;

  /* Direction of items */
  flex-direction: row;            /* default: left to right */
  flex-direction: row-reverse;    /* right to left */
  flex-direction: column;         /* top to bottom */
  flex-direction: column-reverse;

  /* Wrapping */
  flex-wrap: nowrap;    /* default: single line */
  flex-wrap: wrap;      /* items wrap to next line */

  /* Shorthand */
  flex-flow: row wrap;

  /* Alignment on MAIN axis (horizontal for row) */
  justify-content: flex-start;    /* default */
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between; /* equal space between */
  justify-content: space-around;  /* equal space around */
  justify-content: space-evenly;  /* perfectly equal gaps */

  /* Alignment on CROSS axis (vertical for row) */
  align-items: stretch;    /* default - fills height */
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: baseline;

  /* Align multiple lines (only when flex-wrap: wrap) */
  align-content: flex-start;
  align-content: center;
  align-content: space-between;

  gap: 16px;              /* gap between items */
  row-gap: 10px;
  column-gap: 20px;
}
```

### Flex Item Properties

```css
.item {
  /* How much item GROWS relative to others */
  flex-grow: 1;    /* 0 = don't grow (default) */

  /* How much item SHRINKS relative to others */
  flex-shrink: 1;  /* 1 = can shrink (default) */

  /* Base size before growing/shrinking */
  flex-basis: 200px;  /* or auto (default) */

  /* Shorthand: grow shrink basis */
  flex: 1 1 200px;
  flex: 1;          /* same as flex: 1 1 0 */
  flex: auto;       /* same as flex: 1 1 auto */

  /* Override container's align-items for this item */
  align-self: center;
  align-self: flex-end;

  /* Reorder items (default is 0) */
  order: 2;
}
```

### Practical Flexbox Examples

```css
/* Centered card */
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

/* Equal columns */
.columns {
  display: flex;
  gap: 20px;
}
.column {
  flex: 1;  /* Each column takes equal width */
}

/* Sidebar layout */
.layout {
  display: flex;
}
.sidebar { width: 250px; flex-shrink: 0; }
.main    { flex: 1; }
```

---

## 6. CSS Grid

### Concept
CSS Grid is a **two-dimensional** layout system — it works with both rows AND columns simultaneously.

### Grid Container

```css
.grid {
  display: grid;

  /* Define columns */
  grid-template-columns: 200px 200px 200px;
  grid-template-columns: 1fr 2fr 1fr;       /* fractional units */
  grid-template-columns: repeat(3, 1fr);    /* 3 equal columns */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* responsive */

  /* Define rows */
  grid-template-rows: 100px auto 50px;

  /* Gaps */
  gap: 20px;
  row-gap: 10px;
  column-gap: 30px;

  /* Alignment of all items */
  justify-items: start | center | end | stretch;
  align-items: start | center | end | stretch;

  /* Alignment of the whole grid */
  justify-content: start | center | end | space-between;
  align-content: start | center | end | space-between;
}
```

### Grid Item Placement

```css
.item {
  /* Place by line numbers */
  grid-column: 1 / 3;      /* start at line 1, end at line 3 */
  grid-column: 1 / span 2; /* start at 1, span 2 columns */
  grid-row: 1 / 2;

  /* Shorthand */
  grid-area: 1 / 1 / 2 / 3; /* row-start / col-start / row-end / col-end */

  /* Self alignment */
  justify-self: center;
  align-self: end;
}
```

### Named Grid Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 60px 1fr 60px;
  min-height: 100vh;
}

header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }
```

### Grid vs Flexbox — When to Use Which?

| Use Case | Use |
|---|---|
| One row of items (navbar, button group) | Flexbox |
| One column of items (vertical list) | Flexbox |
| Complex 2D layouts (page layout) | Grid |
| Cards that need both row and column alignment | Grid |
| Centering a single item | Flexbox |

---

## 7. Responsive Design & Media Queries

### Viewport Meta Tag (Required!)

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Media Query Syntax

```css
/* Mobile-first approach (recommended) */
/* Base styles for mobile */
.card { flex-direction: column; }

/* Apply on tablets and above */
@media (min-width: 768px) {
  .card { flex-direction: row; }
}

/* Apply on desktops and above */
@media (min-width: 1024px) {
  .container { max-width: 1200px; }
}

/* Desktop-first approach */
.card { flex-direction: row; }

@media (max-width: 767px) {
  .card { flex-direction: column; }
}
```

### Common Breakpoints

```css
/* Mobile */
@media (max-width: 576px) { ... }

/* Tablet */
@media (min-width: 576px) and (max-width: 991px) { ... }

/* Desktop */
@media (min-width: 992px) { ... }

/* Large screens */
@media (min-width: 1200px) { ... }

/* Print */
@media print { ... }

/* Dark mode */
@media (prefers-color-scheme: dark) { ... }

/* Reduced motion (accessibility) */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

### Fluid Typography with `clamp()`

```css
/* clamp(min, preferred, max) */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  /* Never smaller than 1.5rem, never larger than 3rem */
}
```

---

## 8. CSS Variables (Custom Properties)

### Defining and Using Variables

```css
/* Define in :root for global access */
:root {
  --primary-color: #6366f1;
  --secondary-color: #a855f7;
  --text-color: #1f2937;
  --bg-color: #ffffff;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 32px;
  --border-radius: 8px;
  --font-size-base: 16px;
}

/* Using variables */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
}

/* Fallback value */
.text {
  color: var(--text-color, black); /* uses 'black' if variable undefined */
}
```

### Dynamic Theme Switching with Variables

```css
/* Light theme (default) */
:root {
  --bg: #ffffff;
  --text: #111111;
  --card-bg: #f9fafb;
}

/* Dark theme */
[data-theme="dark"] {
  --bg: #111111;
  --text: #f9fafb;
  --card-bg: #1f2937;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

```javascript
// Toggle theme with JS
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## 9. Pseudo-classes & Pseudo-elements

### Pseudo-classes (state-based)

```css
/* User interaction */
a:hover     { text-decoration: underline; }
a:active    { opacity: 0.7; }
a:visited   { color: purple; }
input:focus { outline: 2px solid blue; }
input:disabled { opacity: 0.5; cursor: not-allowed; }
input:checked  { accent-color: blue; }

/* Structural */
li:first-child  { border-top: none; }
li:last-child   { border-bottom: none; }
li:nth-child(2) { background: yellow; }
li:only-child   { font-weight: bold; }
p:empty         { display: none; }

/* Negation */
:not(p)     { color: gray; }
:not(.btn)  { cursor: default; }
```

### Pseudo-elements (style specific parts)

```css
/* ::before and ::after - inject content */
.button::before {
  content: "→ ";
}

.card::after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  background: linear-gradient(to right, #6366f1, #a855f7);
}

/* First letter and first line */
p::first-letter {
  font-size: 3em;
  float: left;
  margin-right: 8px;
  color: #6366f1;
}

p::first-line {
  font-weight: bold;
}

/* Selection highlight */
::selection {
  background: #6366f1;
  color: white;
}

/* Placeholder text */
input::placeholder {
  color: #9ca3af;
  font-style: italic;
}
```

---

## 10. Transitions & Animations

### Transitions — Smooth state changes

```css
.button {
  background: blue;
  transform: scale(1);

  /* property duration timing-function delay */
  transition: background 0.3s ease, transform 0.2s ease;

  /* Or all properties */
  transition: all 0.3s ease;
}

.button:hover {
  background: darkblue;
  transform: scale(1.05);
}

/* Timing functions */
transition-timing-function: ease;         /* slow-fast-slow (default) */
transition-timing-function: linear;       /* constant speed */
transition-timing-function: ease-in;      /* slow start */
transition-timing-function: ease-out;     /* slow end */
transition-timing-function: ease-in-out;  /* slow start & end */
transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
```

### Animations — Keyframe-based

```css
/* Define keyframes */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes slideIn {
  0%   { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}

/* Apply animation */
.card {
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-delay: 0.1s;
  animation-iteration-count: 1;       /* or infinite */
  animation-direction: normal;        /* or reverse, alternate */
  animation-fill-mode: forwards;      /* retain end state */

  /* Shorthand */
  animation: fadeIn 0.5s ease-out 0.1s 1 normal forwards;
}

.spinner {
  animation: spin 1s linear infinite;
}

/* Multiple animations */
.element {
  animation: fadeIn 0.5s ease, pulse 2s infinite 0.5s;
}
```

### Transform Property

```css
.element {
  /* Translate (move) */
  transform: translateX(50px);
  transform: translateY(-20px);
  transform: translate(50px, -20px);

  /* Scale */
  transform: scale(1.5);
  transform: scaleX(2);
  transform: scaleY(0.5);

  /* Rotate */
  transform: rotate(45deg);
  transform: rotateX(180deg); /* 3D */
  transform: rotateY(180deg); /* 3D */

  /* Skew */
  transform: skew(10deg, 5deg);

  /* Multiple transforms */
  transform: translateY(-5px) scale(1.02) rotate(2deg);

  /* 3D */
  transform: perspective(500px) rotateY(30deg);
}
```

---

## 11. CSS Units

### Absolute Units

```css
.box {
  width: 300px;    /* pixels — most common */
  width: 2cm;      /* centimeters */
  width: 20mm;     /* millimeters */
  width: 1in;      /* inches */
  font-size: 12pt; /* points (used in print) */
}
```

### Relative Units

```css
.text {
  /* Relative to parent's font-size */
  font-size: 1.5em;   /* 1.5x parent's font-size */

  /* Relative to root <html> font-size (usually 16px) */
  font-size: 1.5rem;  /* 1.5 × 16px = 24px */

  /* Viewport units */
  width: 100vw;    /* 100% of viewport width */
  height: 100vh;   /* 100% of viewport height */
  font-size: 5vmin; /* 5% of smaller viewport dimension */
  font-size: 5vmax; /* 5% of larger viewport dimension */

  /* Percentage */
  width: 50%;     /* 50% of parent's width */
  padding: 5%;    /* 5% of parent's width */
}
```

### `em` vs `rem` — Key Difference

```css
html { font-size: 16px; } /* Root = 16px */

.parent { font-size: 20px; }

.child-em  { font-size: 1.5em;  }  /* 1.5 × 20px = 30px (relative to parent) */
.child-rem { font-size: 1.5rem; }  /* 1.5 × 16px = 24px (relative to root) */
```

> ✅ **Best Practice**: Use `rem` for font-sizes (consistent), `em` for padding/margin (scales with font).

---

## 12. Bootstrap 5

### What is Bootstrap?
Bootstrap is a popular CSS framework that provides pre-built components and a responsive grid system. Version 5 dropped jQuery dependency.

### Setup

```html
<!-- Via CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### Bootstrap Grid System

Bootstrap uses a **12-column** grid with 6 breakpoints:

| Breakpoint | Class prefix | Min-width |
|---|---|---|
| Extra small | `col-` | < 576px |
| Small | `col-sm-` | ≥ 576px |
| Medium | `col-md-` | ≥ 768px |
| Large | `col-lg-` | ≥ 992px |
| X-Large | `col-xl-` | ≥ 1200px |
| XX-Large | `col-xxl-` | ≥ 1400px |

```html
<div class="container">
  <div class="row">
    <!-- Full width on mobile, 6 cols on tablet, 4 cols on desktop -->
    <div class="col-12 col-md-6 col-lg-4">Column 1</div>
    <div class="col-12 col-md-6 col-lg-4">Column 2</div>
    <div class="col-12 col-md-12 col-lg-4">Column 3</div>
  </div>
</div>

<!-- Equal columns -->
<div class="row">
  <div class="col">Equal</div>
  <div class="col">Equal</div>
  <div class="col">Equal</div>
</div>

<!-- Auto width -->
<div class="row">
  <div class="col-auto">Auto width</div>
  <div class="col">Rest of space</div>
</div>
```

### Bootstrap Utility Classes

```html
<!-- Spacing: m = margin, p = padding -->
<!-- 0=0, 1=4px, 2=8px, 3=16px, 4=24px, 5=48px -->
<div class="mt-3 mb-2 px-4 py-3">Spacing</div>

<!-- Sides: t=top, b=bottom, s=start/left, e=end/right, x=horizontal, y=vertical -->
<div class="ms-auto">Push to right</div>

<!-- Text -->
<p class="text-center text-muted fw-bold fs-4 text-uppercase">Text</p>
<p class="text-primary text-danger text-success text-warning">Colors</p>

<!-- Display -->
<div class="d-flex justify-content-between align-items-center">Flex</div>
<div class="d-none d-md-block">Hidden on mobile</div>

<!-- Colors -->
<div class="bg-primary text-white">Primary</div>
<div class="bg-light text-dark border">Light</div>

<!-- Sizing -->
<div class="w-100 h-50">Width 100%, height 50%</div>

<!-- Borders -->
<div class="border border-primary rounded rounded-pill">Border</div>

<!-- Shadow -->
<div class="shadow shadow-lg">Shadow</div>
```

### Bootstrap Components

#### Buttons

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary btn-lg">Large Secondary</button>
<button class="btn btn-outline-danger btn-sm">Small Outline</button>
<button class="btn btn-success disabled">Disabled</button>
```

#### Navbar

```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Brand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
        <li class="nav-item"><a class="nav-link" href="#">About</a></li>
      </ul>
    </div>
  </div>
</nav>
```

#### Cards

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card Title</h5>
    <p class="card-text">Some description here.</p>
    <a href="#" class="btn btn-primary">Learn More</a>
  </div>
</div>
```

#### Modal

```html
<!-- Trigger button -->
<button data-bs-toggle="modal" data-bs-target="#myModal" class="btn btn-primary">
  Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">Content here...</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
```

#### Alerts & Badges

```html
<!-- Alerts -->
<div class="alert alert-success alert-dismissible fade show">
  ✅ Operation successful!
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
<div class="alert alert-danger">Something went wrong!</div>

<!-- Badges -->
<span class="badge bg-primary">New</span>
<span class="badge rounded-pill bg-danger">99+</span>
```

#### Forms

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password">
    <div class="form-text">Must be at least 8 characters.</div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="terms">
    <label class="form-check-label" for="terms">I agree to terms</label>
  </div>
  <button type="submit" class="btn btn-primary w-100">Submit</button>
</form>
```

### Bootstrap Flexbox Utilities

```html
<div class="d-flex flex-row justify-content-between align-items-center gap-3">
  <div class="flex-grow-1">Grows</div>
  <div class="flex-shrink-0">Fixed</div>
</div>
```

---

## 13. Tailwind CSS

### What is Tailwind?
Tailwind CSS is a **utility-first** CSS framework. Instead of pre-built components, it gives you low-level utility classes to build any design directly in HTML.

### Setup

```html
<!-- Via CDN (for quick prototyping) -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Via npm (for production) -->
<!-- npm install -D tailwindcss -->
<!-- npx tailwindcss init -->
```

### Core Concept — Utility Classes

```html
<!-- Bootstrap (Component-based) -->
<button class="btn btn-primary btn-lg">Click me</button>

<!-- Tailwind (Utility-based) - you compose your own styles -->
<button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200">
  Click me
</button>
```

### Tailwind Spacing Scale

Tailwind uses a numeric scale (1 unit = 4px):

```
0 = 0px      1 = 4px      2 = 8px      3 = 12px
4 = 16px     5 = 20px     6 = 24px     8 = 32px
10 = 40px    12 = 48px    16 = 64px    20 = 80px
```

### Typography

```html
<p class="text-xs">12px</p>
<p class="text-sm">14px</p>
<p class="text-base">16px</p>
<p class="text-lg">18px</p>
<p class="text-xl">20px</p>
<p class="text-2xl">24px</p>
<p class="text-3xl">30px</p>
<p class="text-4xl">36px</p>

<p class="font-thin font-light font-normal font-medium font-semibold font-bold font-extrabold">Weight</p>

<p class="italic not-italic underline line-through tracking-wide leading-loose">Decoration</p>

<p class="text-left text-center text-right text-justify">Alignment</p>

<p class="uppercase lowercase capitalize">Transform</p>
```

### Colors

```html
<!-- Text colors -->
<p class="text-gray-900 text-gray-500 text-blue-600 text-red-500 text-green-600"></p>

<!-- Background colors -->
<div class="bg-white bg-gray-100 bg-blue-500 bg-indigo-600"></div>

<!-- Border colors -->
<div class="border border-gray-300 border-blue-500"></div>

<!-- Color scale: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 -->
<!-- e.g., bg-blue-50 (lightest) to bg-blue-900 (darkest) -->
```

### Spacing (Padding & Margin)

```html
<!-- Padding -->
<div class="p-4">All sides</div>
<div class="px-6 py-3">Horizontal & Vertical</div>
<div class="pt-2 pr-4 pb-2 pl-4">Individual</div>

<!-- Margin -->
<div class="m-4">All sides</div>
<div class="mx-auto">Center horizontally</div>
<div class="mt-8 mb-4">Top and bottom</div>
<div class="-mt-4">Negative margin</div>
```

### Flexbox in Tailwind

```html
<!-- Basic flex row -->
<div class="flex items-center justify-between gap-4">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Flex column, centered -->
<div class="flex flex-col items-center justify-center min-h-screen">
  <h1>Centered Content</h1>
</div>

<!-- Flex wrap -->
<div class="flex flex-wrap gap-3">
  <div class="flex-1 min-w-[200px]">Card 1</div>
  <div class="flex-1 min-w-[200px]">Card 2</div>
</div>
```

### Grid in Tailwind

```html
<!-- 3 column grid -->
<div class="grid grid-cols-3 gap-6">
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>

<!-- Responsive grid -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- 1 col mobile, 2 col tablet, 4 col desktop -->
</div>

<!-- Span columns -->
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-8">Main</div>
  <div class="col-span-4">Sidebar</div>
</div>
```

### Responsive Design in Tailwind

Tailwind uses **mobile-first** breakpoint prefixes:

| Prefix | Min-width |
|---|---|
| (none) | 0px — mobile |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
| `2xl:` | 1536px |

```html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<div class="hidden md:block">
  Only visible on md and above
</div>

<div class="block md:hidden">
  Only visible on mobile
</div>

<div class="flex-col md:flex-row">
  Stacked on mobile, side by side on tablet+
</div>
```

### Hover, Focus, Active States

```html
<button class="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 focus:ring-2 focus:ring-blue-300 focus:outline-none transition">
  Button
</button>

<input class="border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none rounded px-3 py-2">
```

### Borders & Border Radius

```html
<div class="border border-2 border-4">Border widths</div>
<div class="border-t border-b">Only top and bottom</div>

<div class="rounded">4px corners</div>
<div class="rounded-md">6px corners</div>
<div class="rounded-lg">8px corners</div>
<div class="rounded-xl">12px corners</div>
<div class="rounded-2xl">16px corners</div>
<div class="rounded-full">Fully rounded (circles/pills)</div>
```

### Shadows

```html
<div class="shadow-sm">Small</div>
<div class="shadow">Default</div>
<div class="shadow-md">Medium</div>
<div class="shadow-lg">Large</div>
<div class="shadow-xl">X-Large</div>
<div class="shadow-2xl">2X-Large</div>
<div class="shadow-none">None</div>
```

### Width & Height

```html
<div class="w-full h-full">100%</div>
<div class="w-screen h-screen">Viewport</div>
<div class="w-1/2 w-1/3 w-2/3">Fractions</div>
<div class="w-64">256px</div>
<div class="max-w-sm max-w-md max-w-lg max-w-xl max-w-2xl max-w-7xl">Max widths</div>
<div class="min-h-screen">At least full height</div>
```

### Custom Values (Arbitrary in Tailwind v3+)

```html
<!-- Use square brackets for custom values -->
<div class="w-[350px] h-[200px] text-[#ff5733] bg-[#1a1a2e] p-[14px]">
  Custom values
</div>
<div class="grid-cols-[1fr_2fr_1fr]">Custom grid</div>
```

### Tailwind Dark Mode

```html
<!-- In tailwind.config.js: darkMode: 'class' -->

<html class="dark">
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
    <div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
      Card content
    </div>
  </body>
</html>
```

### Tailwind @apply Directive (in CSS)

```css
/* When you have repeated utility combinations */
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200;
}

.card {
  @apply bg-white rounded-xl shadow-lg p-6 border border-gray-100;
}
```

### Bootstrap vs Tailwind — Comparison

| Feature | Bootstrap | Tailwind |
|---|---|---|
| Approach | Component-based | Utility-first |
| Learning curve | Lower | Higher initially |
| Customization | Moderate (SASS vars) | Very high |
| File size | Larger (but tree-shakeable) | Very small (purged) |
| Design opinion | Opinionated (Bootstrap look) | Unopinionated |
| Speed of development | Faster for standard UIs | Faster for custom UIs |
| JavaScript included | Yes (components) | No |
| Best for | Rapid prototyping, admin panels | Custom branded UIs |

---

## 14. Interview Questions

### 🔴 CSS Core Concepts

**Q1. What is the CSS Box Model? Explain each part.**

> The Box Model describes every element as a box with 4 layers: **content** (actual text/image), **padding** (space between content and border), **border** (outline around the padding), and **margin** (space outside the border). By default, `width` only sets the content size. Using `box-sizing: border-box` makes `width` include padding and border too.

**Q2. What is the difference between `display: none` and `visibility: hidden`?**

> `display: none` completely removes the element from the document flow — it takes up no space. `visibility: hidden` hides the element visually but it still occupies its space in the layout.

**Q3. Explain CSS Specificity with examples.**

> Specificity determines which CSS rule wins when multiple rules target the same element. It's calculated as (inline, ID, class/pseudo-class, element). Inline styles beat everything (except `!important`). IDs beat classes, classes beat elements. If specificity is equal, the **later rule** in the file wins.

**Q4. What is the difference between `em` and `rem`?**

> `em` is relative to the **parent element's** font-size, while `rem` is relative to the **root (`html`) element's** font-size. `rem` is more predictable because it doesn't compound through nesting.

**Q5. What are pseudo-elements? Give examples.**

> Pseudo-elements style specific parts of an element that don't exist in HTML. They use `::` notation. Examples: `::before` and `::after` insert generated content, `::first-letter` styles the first character, `::placeholder` styles input placeholder text, `::selection` styles highlighted text.

**Q6. What is `z-index` and when does it not work?**

> `z-index` controls the stacking order of elements on the Z-axis (depth). Higher values appear on top. It only works on **positioned elements** — those with `position` set to `relative`, `absolute`, `fixed`, or `sticky`. It does NOT work on `position: static` elements.

**Q7. What is the difference between `position: relative`, `absolute`, `fixed`, and `sticky`?**

> - `relative`: Positioned relative to itself; other elements aren't affected. Creates a positioning context for children.
> - `absolute`: Removed from document flow; positioned relative to nearest positioned ancestor.
> - `fixed`: Removed from flow; positioned relative to the viewport — stays fixed while scrolling.
> - `sticky`: Acts like `relative` until a scroll threshold, then like `fixed`.

**Q8. How do you center a div both horizontally and vertically?**

```css
/* Method 1: Flexbox */
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Method 2: Grid */
.parent {
  display: grid;
  place-items: center;
}

/* Method 3: Position + Transform */
.child {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
}

/* Method 4: margin auto (horizontal only) */
.child { width: 200px; margin: 0 auto; }
```

**Q9. What is the difference between `flex-grow`, `flex-shrink`, and `flex-basis`?**

> - `flex-grow`: How much the item grows relative to siblings when there's extra space. `0` = don't grow.
> - `flex-shrink`: How much the item shrinks when there's not enough space. `0` = don't shrink.
> - `flex-basis`: The initial size before growing/shrinking. Like `width` but for flex items.

**Q10. What are CSS custom properties (variables)? What are their advantages?**

> CSS variables are defined with `--name` and used via `var(--name)`. Advantages: reusable values, theme-ability, dynamic changes via JavaScript, scope (can be overridden in child elements), and fallback values.

**Q11. What is the difference between `transition` and `animation`?**

> `transition` requires a trigger (like `:hover`) to animate between two states. `animation` uses `@keyframes` to define multiple steps and runs automatically — it doesn't need a trigger and supports looping, delays, and more complex multi-step animations.

**Q12. What is mobile-first design?**

> Mobile-first means writing base styles for the smallest screens first, then using `min-width` media queries to progressively enhance for larger screens. It results in more performant CSS since mobile devices download only what they need.

**Q13. What is the difference between `Grid` and `Flexbox`?**

> Flexbox is **one-dimensional** (works on either a row OR a column). Grid is **two-dimensional** (works on rows AND columns simultaneously). Use Flexbox for components like navbars, button groups, and single-row/column layouts. Use Grid for page-level layouts and when you need alignment across both axes.

**Q14. Explain the `@media` query and its use cases.**

> Media queries apply styles conditionally based on device characteristics like screen width, height, orientation, color scheme, or print. They are the foundation of responsive design. `min-width` is used in mobile-first, `max-width` in desktop-first approaches.

**Q15. What does `box-sizing: border-box` do?**

> It makes the `width` and `height` of an element include its padding and border. This is more intuitive — a `width: 300px` element will be exactly 300px wide regardless of padding. It's recommended to apply it globally with `* { box-sizing: border-box; }`.

---

### 🔵 Bootstrap Questions

**Q16. What is Bootstrap's grid system based on?**

> Bootstrap's grid uses **Flexbox** and is divided into **12 columns**. You use class prefixes (`col-`, `col-sm-`, `col-md-`, `col-lg-`, `col-xl-`, `col-xxl-`) to specify how many columns an element should occupy at each breakpoint.

**Q17. What is the difference between `.container` and `.container-fluid` in Bootstrap?**

> `.container` has a fixed max-width at each breakpoint (e.g., 1140px on lg). `.container-fluid` spans the full viewport width at all sizes. There's also `.container-{breakpoint}` (like `.container-md`) which is fluid below that breakpoint and fixed above.

**Q18. How does Bootstrap handle responsiveness? What are its breakpoints?**

> Bootstrap is mobile-first. Its 6 breakpoints are: xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), xxl (≥1400px). You use the breakpoint suffix in class names to control behavior at each screen size.

**Q19. What is the difference between `d-none` and `invisible` in Bootstrap?**

> `d-none` is equivalent to `display: none` — element is completely removed from layout. `invisible` is equivalent to `visibility: hidden` — element is hidden but still occupies space.

**Q20. How do you make a responsive navbar in Bootstrap?**

> Use the `navbar`, `navbar-expand-{breakpoint}`, `navbar-toggler`, and `collapse navbar-collapse` classes. The `data-bs-toggle="collapse"` attribute connects the hamburger button to the collapsible menu. Below the breakpoint, it shows a hamburger; above it, the full menu appears.

---

### 🟢 Tailwind Questions

**Q21. What is utility-first CSS? What are its advantages and disadvantages?**

> Utility-first means composing styles by applying many small, single-purpose classes directly in HTML instead of writing custom CSS. 
> **Advantages**: No naming required, no context switching between files, styles are co-located with HTML, small bundle size (purging unused classes).
> **Disadvantages**: HTML can look verbose/cluttered, repetition across components (mitigated by `@apply` or components).

**Q22. How does Tailwind handle responsiveness?**

> Tailwind uses mobile-first breakpoint prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`. You prefix any utility with a breakpoint to apply it only at that screen size and above: `class="text-sm md:text-base lg:text-lg"`.

**Q23. What is the `@apply` directive in Tailwind?**

> `@apply` lets you extract repeated utility combinations into a custom CSS class. Used in your CSS file: `.btn { @apply bg-blue-600 text-white px-4 py-2 rounded; }`. This reduces repetition while keeping Tailwind's utility model.

**Q24. How does Tailwind's JIT (Just-In-Time) mode work?**

> JIT scans your HTML and generates only the CSS classes actually used, on-demand. This means: instant build times, tiny final CSS file, and support for arbitrary values like `w-[350px]` without bloating the stylesheet.

**Q25. How do you implement dark mode in Tailwind?**

> Set `darkMode: 'class'` in `tailwind.config.js`. Then add the `dark` class to `<html>` (via JavaScript). Use `dark:` prefix on utilities: `class="bg-white dark:bg-gray-900 text-black dark:text-white"`.

---

### 🟡 Advanced/Tricky Questions

**Q26. What is specificity of `*`, `:not()`, and `::before`?**

> `*` has specificity 0. `:not()` itself adds 0 specificity, but its argument counts. `::before` is a pseudo-element with specificity 0,0,0,1 (same as an element selector).

**Q27. What is `will-change` in CSS?**

> `will-change` hints to the browser that an element will animate, allowing it to optimize by creating a new compositor layer in advance. Example: `will-change: transform, opacity`. Use sparingly — overuse wastes GPU memory.

**Q28. What is the difference between `display: flex` on a container vs items?**

> `display: flex` makes the **container** a flex formatting context. Its **direct children** automatically become flex items. Flex properties like `justify-content` and `align-items` apply to the container; `flex-grow`, `align-self`, and `order` apply to individual items.

**Q29. How do you create a sticky footer that stays at the bottom?**

```css
/* Method 1: Flexbox */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main { flex: 1; } /* Pushes footer down */

/* Method 2: Grid */
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
```

**Q30. What is the difference between `max-width` and `width` when centering layouts?**

> Using `max-width` with `margin: 0 auto` is the standard pattern for centered layouts. `width` fixes the size regardless of viewport. `max-width` allows the container to be responsive — it fills the screen on small viewports and caps out at the max-width on larger ones.

---

> 📝 **Study Tip**: Practice by building real projects — a landing page using Flexbox/Grid, customize Bootstrap with SASS variables, build a Tailwind component library. Hands-on experience beats memorization every time.

---

*Last updated: 2025 | CSS3, Bootstrap 5, Tailwind CSS v3*
