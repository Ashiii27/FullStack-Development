# JS Callbacks & Timers — Solutions

---

## Problem 1 — Countdown Counter (30 → 0)

```javascript
let count = 30;

const interval = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(interval);
    console.log("Done!");
  }
}, 1000);
```

**Approach:**
`setInterval` repeatedly calls a function at a fixed time gap — here, every 1000ms (1 second). The `count` variable is kept outside the callback so it persists across calls. Each tick it gets decremented. `clearInterval` is called once `count` goes below 0 — we pass it the interval's ID so JS knows which one to stop. Without it, the interval would keep running past 0.

---

## Problem 2 — setTimeout Drift

```javascript
const start = Date.now();

setTimeout(() => {
  const actual = Date.now() - start;
  console.log(`Requested delay: 2000ms`);
  console.log(`Actual delay: ${actual}ms`);
  console.log(`Drift: ${actual - 2000}ms`);
}, 2000);
```

**Approach:**
`setTimeout` doesn't guarantee exact timing — it only guarantees the callback won't run *before* the delay. Actual execution depends on whether the call stack is free when the timer expires. `Date.now()` is captured before the call and again inside the callback; the difference is the real elapsed time. The drift (actual − requested) is usually a few milliseconds, but can be much more under heavy load. This is a direct consequence of how the JS event loop works.

---

## Problem 3 — Terminal Clock (HH:MM:SS)

```javascript
setInterval(() => {
  const now = new Date();

  const HH = String(now.getHours()).padStart(2, "0");
  const MM = String(now.getMinutes()).padStart(2, "0");
  const SS = String(now.getSeconds()).padStart(2, "0");

  console.clear();
  console.log(`${HH}:${MM}:${SS}`);
}, 1000);
```

**Approach:**
`setInterval` fires every 1000ms. Inside, `new Date()` fetches the current system time and hours/minutes/seconds are extracted from it. `padStart(2, "0")` handles formatting — without it, `9` displays as `9` instead of `09`, breaking the `HH:MM:SS` format. `console.clear()` before each print makes it behave like a live updating clock instead of printing a new line every second.