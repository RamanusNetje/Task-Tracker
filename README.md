# ✅ Task Tracker

A simple task management app built with vanilla HTML, CSS, and JavaScript. No frameworks, no build tools.

## 📌 About

Add tasks, mark them complete, and delete them. Completed tasks automatically move to the bottom of the list with strikethrough styling. Unchecking a completed task returns it to the pending list. All tasks live in memory only — refreshing the page starts fresh.

## 🧠 What I Learned & Implemented

### ⚙️ JavaScript
- Managing application state with a plain array of objects
- DOM manipulation — creating, updating, and removing elements entirely with JavaScript (`createElement`, `appendChild`, `innerHTML = ''`)
- Full re-render pattern: clearing and rebuilding the entire list on every state change instead of patching individual elements
- Array methods: `push`, `filter`, `find`, and spread (`...`) for sorting pending vs. completed tasks
- Event listeners attached dynamically inside a render loop (closures capturing task `id`)
- Input validation — trimming whitespace and rejecting empty strings

### 🎨 CSS
- CSS custom properties (`--variable`) for a consistent color system
- Flexbox for layout — centering the card, aligning task rows, and the pill input
- Transitions on `border-color`, `background`, `color`, and `transform` for smooth hover/focus feedback
- `@keyframes` animation with `animation-delay` to stagger task items on render
- `:focus-within` to highlight the input container when the inner `<input>` is focused
- `:last-child` and `:first-child` selectors to remove borders and padding at list edges

### 🗂️ General
- Separating concerns across three files: `index.html`, `style.css`, `script.js`
- Linking Google Fonts with `<link rel="preconnect">` for faster load
- Using SVG icons inline via JavaScript template literals
- Setting up `.gitignore` for a clean repository

## 📁 Structure

```
index.html   — HTML structure
style.css    — All styles
script.js    — State management and DOM rendering
```

## 📜 License

MIT License

## 👤 Author

**RamanusNetje**
