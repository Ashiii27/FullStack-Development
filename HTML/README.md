# HTML Notes

---

## 1. Basics

HTML stands for **HyperText Markup Language**. It defines the **structure and content** of a webpage. It is NOT a programming language — it has no logic, no loops, no variables. It just "marks up" plain text with tags so the browser knows what each piece of content is.

Think of it this way:
- **HTML** is the skeleton — "this is a heading, this is a paragraph, this is an image"
- **CSS** is the skin/clothes — "make this heading blue and 32px"
- **JS** is the muscles — "when this button is clicked, do this"

When you open a webpage, the browser reads your HTML top to bottom and builds a **DOM (Document Object Model)** — a tree-like in-memory structure representing your page. JS and CSS interact with this DOM, not the raw HTML file directly.

### The Minimal Page — explained line by line

```html
<!DOCTYPE html>
```
Not an HTML tag. A declaration that tells the browser "this file uses HTML5". Without it, browsers go into **Quirks Mode** — they simulate old broken behaviour from the 90s. Always include it, always first line.

```html
<html lang="en">
```
The root element — everything goes inside this. `lang="en"` tells search engines and screen readers the content language. Use `"hi"` for Hindi, `"en-US"` for US English, etc.

```html
<head>
  <meta charset="UTF-8">
```
`<head>` contains metadata — info about the page, not visible to users. `charset="UTF-8"` tells the browser how to decode the file's bytes into characters. UTF-8 supports every language on earth. Without it, characters like `₹`, `é`, `你好` can appear as garbage (called mojibake). Must be the **first element in head** — before even `<title>`, because the title might contain special characters.

```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Mobile browsers by default zoom out to show the full desktop layout, making text tiny. This tag says: "set the viewport width to the device's actual screen width, and don't zoom". Without this, CSS media queries like `@media (max-width: 768px)` won't trigger correctly on phones.

```html
  <title>Page Title</title>
```
Shows in the browser tab and in Google search results. Not visible on the page body itself.

```html
<body>
  <h1>Hello World</h1>
</body>
```
Everything the user actually sees goes in `<body>`.

---

## 2. Key Concepts

### Block vs Inline

This is fundamental to understanding how HTML lays out content.

**Block elements** always start on a new line and stretch to the full available width — like paragraphs in a document, each one starts on its own line regardless of how short it is.

**Inline elements** flow within the surrounding text — like words in a sentence, they sit next to each other and only take up as much space as their content needs.

```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
<!-- These two paragraphs are on separate lines even though we didn't add a <br> -->

<p>The word <strong>important</strong> and <em>this</em> stay inline in the paragraph.</p>
<!-- <strong> and <em> don't break to new lines — they flow with the text -->
```

| Block | Inline |
|-------|--------|
| Starts on new line, full width | Flows with text, content-width only |
| `<div>`, `<p>`, `<h1>`–`<h6>` | `<span>`, `<a>`, `<strong>`, `<em>` |
| `<ul>`, `<ol>`, `<table>`, `<form>` | `<img>`, `<input>`, `<label>`, `<code>` |
| Can contain block AND inline elements | Should only contain inline elements |

> **Why this matters:** When you try to centre something with CSS or arrange items side by side, knowing the default display type of elements saves you a lot of confusion. You'll constantly be overriding this with `display: flex` or `display: inline-block`.

### Void Elements (no closing tag)

Most elements wrap content: `<p>content</p>`. But some elements **cannot have content** by nature — they're complete on their own. These are void elements and have no closing tag.

```html
<br>      <!-- line break: just inserts a newline in text flow -->
<hr>      <!-- horizontal rule: a visual divider line across the page -->
<img src="photo.jpg" alt="...">   <!-- the content IS the image itself (src) -->
<input type="text">               <!-- an input box has no inner text content -->
<meta charset="UTF-8">           <!-- metadata — lives in head -->
<link rel="stylesheet" href="style.css">  <!-- links an external file -->
```

In XHTML you'd write `<br />`. In HTML5 the slash is optional and ignored — both are valid.

### Boolean Attributes

Some attributes don't need a value — just their presence means "true", their absence means "false".

```html
<input type="text" disabled>      <!-- greyed out, user can't interact with it -->
<input type="text" readonly>      <!-- user can see the value but not change it -->
<input type="checkbox" checked>   <!-- checkbox is ticked by default -->
<input type="text" required>      <!-- form won't submit if this is empty -->
<video autoplay muted loop>       <!-- plays automatically, muted, keeps looping -->
<details open>                    <!-- the details panel is expanded by default -->
```

Writing `disabled="disabled"` or `disabled="true"` also works but is redundant — the attribute name alone is sufficient.

---

## 3. Important Tags

### Text Tags — Semantic vs Presentational

A very common interview topic. Some tags produce the same visual output but carry different meaning.

```html
<strong>important text</strong>
<!-- Visually bold. Also semantically means "this is important".
     Screen readers may announce it with stronger emphasis. -->

<b>bold text</b>
<!-- Just makes text bold visually. Zero semantic meaning.
     Screen reader treats it exactly like normal text. -->

<em>emphasized text</em>
<!-- Visually italic. Semantically means "stress emphasis" — like
     how you'd stress a word when speaking aloud. -->

<i>italic text</i>
<!-- Just visual italic. Used for technical terms, foreign words,
     or thoughts — not for stress emphasis. -->

<mark>highlighted</mark>   <!-- yellow background, like a marker pen -->
<del>old text</del>        <!-- strikethrough — content was removed/replaced -->
<ins>new text</ins>        <!-- underlined — content was added -->
<sub>2</sub>               <!-- subscript: H₂O -->
<sup>2</sup>               <!-- superscript: E=mc² -->
<code>let x = 5</code>     <!-- monospace font, for inline code snippets -->

<abbr title="HyperText Markup Language">HTML</abbr>
<!-- Shows the full form as a tooltip when user hovers.
     Also helps screen readers and search engines. -->
```

**The rule:** Whenever you want to convey *meaning*, use the semantic tag (`<strong>`, `<em>`). Only use `<b>` or `<i>` when you literally want just the visual effect with no meaning attached (rare).

### Links

```html
<!-- Basic external link -->
<a href="https://google.com">Google</a>

<!-- Opens in new tab. Always add rel="noopener noreferrer" for security
     (explained in Section 7's interview questions) -->
<a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a>

<!-- Relative link — another page on the same site -->
<a href="/about">About Page</a>
<a href="../index.html">Go up one folder level</a>

<!-- Anchor link — jump to a section on the same page -->
<a href="#contact">Jump to Contact</a>
...
<h2 id="contact">Contact</h2>
<!-- The href="#contact" matches the id="contact" on the target element -->

<!-- Opens the user's email client with pre-filled recipient -->
<a href="mailto:ash@email.com">Email Me</a>

<!-- Forces a file download instead of opening it in browser -->
<a href="/resume.pdf" download="Ash_Resume.pdf">Download Resume</a>
```

### Images

```html
<!-- src = where the image is, alt = description of the image -->
<img src="photo.jpg" alt="A photo of the MMMUT campus">

<!-- Always specify width and height. Without them, the browser doesn't
     know how much space to reserve, so the layout jumps when the image
     loads — this is called CLS (Cumulative Layout Shift). -->
<img src="photo.jpg" alt="..." width="800" height="600">

<!-- loading="lazy": don't load this image until user scrolls near it.
     Images below the fold that load on page open waste bandwidth. -->
<img src="photo.jpg" alt="..." loading="lazy">

<!-- Decorative image (icon, background pattern): empty alt=""
     tells screen readers to skip it entirely. -->
<img src="divider.svg" alt="">
```

`alt` text has three purposes: read aloud by screen readers for blind users, shown as fallback text if image fails to load, and used by Google for image search indexing.

### Lists

```html
<!-- Unordered list: bullet points, order doesn't matter -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered list: numbered. type changes the marker style.
     start changes which number to begin at. -->
<ol type="1" start="3">    <!-- type: "1" "A" "a" "I" "i" -->
  <li>Third item</li>      <!-- shows as "3." -->
  <li>Fourth item</li>     <!-- shows as "4." -->
</ol>

<!-- Definition list: for glossaries, FAQs, key-value pairs -->
<dl>
  <dt>HTML</dt>                  <!-- dt = definition term -->
  <dd>HyperText Markup Language</dd>  <!-- dd = definition description -->
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

---

## 4. Semantic HTML5

Before HTML5, entire pages were built with `<div>` tags and classes like `class="header"` or `class="nav"`. It worked visually but the browser had no idea what was actually a header vs a sidebar — they were all just anonymous boxes.

HTML5 introduced **semantic elements** — tags that describe *what* their content is. This matters for three reasons:

1. **SEO**: Google can identify your main content vs navigation vs sidebar
2. **Accessibility**: Screen readers let users jump directly to `<nav>`, `<main>`, `<footer>` landmarks
3. **Readability**: A teammate reading your HTML immediately understands the structure without reading the classes

```html
<body>

  <header>
    <!-- Top of the site: logo, site title, main navigation.
         Can also appear inside <article> as the article's header. -->
    <h1>My Blog</h1>
    <nav>
      <!-- Navigation links. Screen readers can jump straight here.
           Tells the browser "this group of links is site navigation". -->
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>

  <main>
    <!-- The primary, unique content of the page.
         Use only ONE <main> per page.
         Repeated content like headers/nav/footers goes outside <main>. -->

    <article>
      <!-- Self-contained content that makes full sense on its own.
           Mental test: "Would this make sense in an RSS feed or email?"
           Blog posts, news articles, product cards, forum posts = article. -->
      <h2>Post Title</h2>
      <p>Content goes here...</p>
    </article>

    <section>
      <!-- A themed chunk of the page that needs a heading.
           Doesn't stand alone the way <article> does.
           "Projects section", "Skills section" on a portfolio page. -->
      <h2>My Projects</h2>
      <article>Project 1...</article>
      <article>Project 2...</article>
    </section>

    <aside>
      <!-- Content tangentially related to the main content.
           Sidebar, related posts, author bio, advertisements.
           If removed, the main content still makes full sense. -->
      <h3>Related Posts</h3>
    </aside>

  </main>

  <footer>
    <!-- Bottom of page: copyright, links, contact info.
         Can also appear inside <article> as the article's footer. -->
    <p>© 2024 Ash</p>
  </footer>

</body>
```

### article vs section vs div — quick mental test

- Use `<article>` → "Can I lift this content out and put it somewhere else and it still makes complete sense on its own?"
- Use `<section>` → "Is this a distinct chunk of the page with its own theme and a heading?"
- Use `<div>` → "I just need a wrapper for CSS layout or JS targeting, no meaning needed."

### Other useful HTML5 elements

```html
<!-- details + summary: native accordion/FAQ, zero JavaScript needed.
     Clicking <summary> toggles the rest of the content. -->
<details>
  <summary>What is the pass mark?</summary>
  <p>The pass mark is 40%. You need 60% for distinction.</p>
</details>

<!-- figure + figcaption: an image (or diagram/code) with a caption.
     Like figures in a textbook. The caption is semantically tied to the image. -->
<figure>
  <img src="architecture.png" alt="System architecture diagram">
  <figcaption>Fig 1. Overall system architecture</figcaption>
</figure>

<!-- time: makes a date machine-readable for search engines and calendars.
     The visible text can be anything; datetime must be a valid format. -->
<time datetime="2024-03-18">March 18, 2024</time>

<!-- progress: a loading/completion bar. value out of max. -->
<progress value="70" max="100"></progress>  <!-- shows a 70% filled bar -->
```

---

## 5. Forms

A form collects user input and sends it to a server (or handles it with JS). Every input with a `name` attribute inside the `<form>` gets included when submitted.

### The form element

```html
<form
  action="/login"                   <!-- WHERE to send the data (a URL or route) -->
  method="POST"                     <!-- HOW to send it: GET or POST -->
  enctype="multipart/form-data"     <!-- Required ONLY when uploading files -->
>
  ...inputs...
</form>
```

**GET vs POST — understand this properly:**

GET appends data to the URL: `https://google.com/search?q=html&lang=en`
- Data is visible in the URL bar
- Saved in browser history and server logs
- Has a length limit (~2000 chars)
- Use for: search, filters, anything where sharing the URL makes sense

POST puts data in the request body — not visible in URL:
- Not in browser history or server logs by default
- No practical size limit
- Use for: login, registration, file upload, anything that changes state or contains sensitive data

**Never use GET for passwords** — they'll appear in your server logs and the user's browser history.

### Inputs — each type has a specific purpose

```html
<input type="text"     name="username" placeholder="Enter your name">
<!-- General single-line text. placeholder is hint text that disappears on focus. -->

<input type="password" name="pass">
<!-- Same as text but characters show as dots/bullets -->

<input type="email"    name="email">
<!-- Browser validates email format (must contain @ and domain) on submit -->

<input type="number"   name="age" min="18" max="99" step="1">
<!-- Only allows numbers. Shows up/down arrows. min/max/step control range. -->

<input type="date"     name="dob">
<!-- Shows a date-picker calendar popup -->

<input type="checkbox" name="agree" checked>
<!-- A tick box. checked makes it ticked by default.
     When submitted, only sends value if checked. -->

<input type="radio"    name="gender" value="male"> Male
<input type="radio"    name="gender" value="female"> Female
<!-- All radios with the same "name" form one group — only one can be selected.
     The "value" is what gets sent to the server. -->

<input type="file"     name="resume" accept=".pdf,.doc" multiple>
<!-- File picker. accept filters which file types show in the dialog.
     multiple allows selecting several files. Requires enctype="multipart/form-data" -->

<input type="hidden"   name="csrf_token" value="abc123">
<!-- Not visible to user, but gets submitted with the form.
     Used for CSRF tokens, tracking IDs, passing data invisibly. -->

<input type="range"    name="volume" min="0" max="100" value="50">
<!-- A draggable slider -->
```

### Labels — critical for accessibility

A `<label>` must always be linked to its input. This achieves two things: clicking the label focuses/toggles the input (better usability), and screen readers announce the label text when the input is focused.

```html
<!-- Method 1: "for" on label matches "id" on input -->
<label for="email">Email address:</label>
<input type="email" id="email" name="email">

<!-- Method 2: wrap the input inside the label -->
<label>
  Email address:
  <input type="email" name="email">
</label>
```

An input without a label is inaccessible — a screen reader user hears "text input" with no idea what to type.

### Validation attributes

HTML5 can validate inputs without any JavaScript:

```html
<input type="text"   required>                 <!-- can't submit if empty -->
<input type="text"   minlength="3" maxlength="20">
<input type="number" min="1" max="10">
<input type="text"   pattern="[A-Za-z]{3,}" title="Letters only, min 3 chars">
<!-- pattern takes a regex. title shows as hint in the browser error message. -->
```

### Buttons

```html
<button type="submit">Submit</button>
<!-- Submits the form. This is the DEFAULT type for <button> inside a form. -->

<button type="reset">Clear</button>
<!-- Resets all inputs in the form back to their default values. -->

<button type="button" onclick="handleClick()">Click Me</button>
<!-- Does absolutely nothing by default — needs JavaScript.
     ALWAYS explicitly write type="button" when you don't want submission! -->
```

> **Common bug:** A `<button>` inside `<form>` without a `type` attribute defaults to `type="submit"`. So if you have a "Show password" toggle button and you forget the type, clicking it submits the form instead. Always be explicit.

### Select and Textarea

```html
<!-- Dropdown menu -->
<select name="course">
  <option value="">-- Select a course --</option>   <!-- empty default -->
  <option value="cse">Computer Science</option>
  <option value="ece" selected>Electronics</option>  <!-- pre-selected -->
</select>

<!-- Multi-line text input. rows controls the default visible height.
     User can still resize it. Has no value attribute — content goes between tags. -->
<textarea name="message" rows="5" placeholder="Write your message..."></textarea>
```

---

## 6. Meta Tags

Meta tags sit in `<head>` and carry information *about* the page — not for users to read directly, but for browsers, search engines, and social platforms to interpret.

```html
<meta charset="UTF-8">
```
Always the **first thing** in `<head>`. Declares character encoding. Without it, non-ASCII characters (special symbols, non-English text, emojis) may render as garbage characters.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
Fixes mobile rendering. `width=device-width` = use the screen's actual pixel width as the viewport. `initial-scale=1.0` = start at normal zoom. Without this, mobile browsers zoom out to fit a 980px desktop layout onto a small screen, making everything tiny.

```html
<meta name="description" content="Learn HTML from basics to advanced in 10 sections.">
```
This text appears as the snippet under your page title in Google search results. Doesn't directly affect ranking but directly affects whether people click your result. Keep it under 160 characters and make it descriptive.

```html
<meta name="robots" content="noindex, nofollow">
```
Tells search crawlers not to index this page (`noindex`) and not to follow its links (`nofollow`). Use for admin pages, staging environments, thank-you pages, or anything you don't want appearing in search results.

```html
<!-- Open Graph: controls how your page looks when shared on
     Facebook, LinkedIn, WhatsApp, Telegram, etc. -->
<meta property="og:title"       content="My Portfolio — Ash">
<meta property="og:description" content="Projects and skills">
<meta property="og:image"       content="https://mysite.com/preview.jpg">
<meta property="og:url"         content="https://mysite.com">
```
Without these, social media generates an ugly preview by grabbing a random image. With OG tags, you control the title, description, and thumbnail of your link preview card.

---

## 7. Script Loading

Very common interview topic. To understand it, remember: **HTML is parsed top to bottom**, and by default a `<script>` tag completely halts that process.

### Why normal `<script>` in `<head>` is bad

```
Browser reads HTML line by line...
<head>
  <script src="app.js"></script>   ← STOPS here. Downloads app.js. Runs it. 
                                     Then continues parsing HTML.
</head>
```
If `app.js` is large or the server is slow, the user sees a completely blank page until the script finishes. This is called **render-blocking**.

### The three behaviours

```html
<!-- Normal: stops HTML parsing, downloads, executes, then continues -->
<script src="app.js"></script>

<!-- async: downloads in parallel without stopping HTML parsing.
     BUT executes the moment it finishes downloading — which could be
     mid-parse. Multiple async scripts run in whatever order they finish
     downloading, NOT the order they appear in HTML. -->
<script src="analytics.js" async></script>

<!-- defer: downloads in parallel without stopping HTML parsing.
     Waits to execute until AFTER the full HTML is parsed.
     Multiple defer scripts execute in the order they appear in HTML.
     The DOM is fully ready when they run. -->
<script src="app.js" defer></script>
```

Timeline comparison:
```
Normal:  --parse HTML--|STOP|--download--|--execute--|--continue parse--
async:   --parse HTML (continues)-------------------------->
                  |--download--|--execute (may interrupt parse)--|
defer:   --parse HTML (continues, fully done)------------------|
                  |--download (in parallel)---------|--execute--|
```

**Practical rule:**
- Use `defer` for your own app scripts that need the DOM
- Use `async` for independent third-party scripts (analytics, ads) that don't depend on anything
- Put both in `<head>` — using `defer` in head is equivalent to the old trick of putting scripts at end of `<body>`

---

## 8. Accessibility (a11y)

Accessibility means your site works for people with disabilities — blind users with screen readers, people who navigate with keyboard only, people with motor impairments. It's also increasingly required legally and checked in code reviews.

### Labels are non-negotiable

```html
<!-- BAD: screen reader announces "text input" — completely useless -->
<input type="email">

<!-- GOOD: screen reader announces "Email address, text input" -->
<label for="email">Email address:</label>
<input type="email" id="email">
```

The `for` attribute on `<label>` must exactly match the `id` on the input. This also makes the label itself clickable, which focuses the input — good for usability.

### ARIA attributes

ARIA (Accessible Rich Internet Applications) extends HTML's semantic vocabulary for custom interactive widgets that have no native HTML equivalent.

```html
<!-- aria-label: gives a name to elements that have no visible text label -->
<button aria-label="Close dialog">✕</button>
<!-- Without: screen reader says "button". With: "Close dialog, button" -->

<!-- aria-expanded: tells screen reader whether a collapsible is open or closed.
     You update this with JS when the state changes. -->
<button aria-expanded="false" onclick="toggleMenu(this)">Menu</button>

<!-- aria-hidden: completely removes element from the accessibility tree.
     Use for decorative content that would confuse or annoy screen reader users. -->
<span aria-hidden="true">🎉</span>

<!-- aria-live: tells the screen reader to announce when this element's
     content changes dynamically (e.g. a loading status or error message).
     "polite" = wait for idle. "assertive" = interrupt and announce now. -->
<div aria-live="polite" id="status-message"></div>
<!-- When JS updates #status-message's text, screen reader reads it aloud -->
```

**The golden rule:** Always use the native HTML element first. `<button>` is keyboard-accessible and announced correctly out of the box. `<a href>` is too. Only reach for ARIA when you're building something custom (a tab component, a date picker, a custom dropdown) that has no native equivalent.

---

## 9. data-* Attributes

Sometimes your JavaScript needs extra data tied to an HTML element — a user ID, a product price, an action type — without making an extra server request or using messy global variables.

`data-*` attributes let you embed arbitrary data directly in HTML, readable by JavaScript via `dataset`.

```html
<!-- Any attribute starting with "data-" is custom. You name the rest. -->
<button data-user-id="42" data-action="delete" data-role="admin">
  Delete User
</button>

<div data-product-id="P001" data-price="999" data-in-stock="true">
  Product Card
</div>
```

JavaScript reads these via the `dataset` property. The naming automatically converts from `kebab-case` in HTML to `camelCase` in JS:

```js
const btn = document.querySelector('button');

btn.dataset.userId    // "42"       (data-user-id → userId)
btn.dataset.action    // "delete"
btn.dataset.role      // "admin"

// You can also write to them from JS
btn.dataset.userId = "99";

// You can target them in CSS too
// [data-role="admin"] { background-color: red; }
```

Real world use: a list of 50 product cards where each has `data-product-id`. When a user clicks "Add to Cart", your JS reads `event.target.dataset.productId` to know which product to add — no hidden inputs, no global lookup tables needed.

---

## 10. Common Interview Questions

| Question | Answer |
|----------|--------|
| `<b>` vs `<strong>` | Both render bold. `<strong>` conveys semantic importance — screen readers may emphasise it. Always prefer `<strong>` for meaningful content. |
| `<i>` vs `<em>` | Both render italic. `<em>` conveys stress emphasis semantically. Use `<em>` for meaningful emphasis, `<i>` for visual-only (foreign terms, technical names). |
| `id` vs `class` | `id` must be unique per page — only one element can have a given id. `class` is reusable — many elements can share a class, and one element can have multiple classes. |
| `async` vs `defer` | Both download without blocking HTML parsing. `async` executes immediately when downloaded (order not guaranteed). `defer` waits until HTML is fully parsed (order guaranteed, DOM is ready). |
| GET vs POST | GET puts data in URL — visible, bookmarkable, logged. POST puts data in request body — not in URL. Use GET for search/filter, POST for login/register/upload. |
| Why `alt` on `<img>`? | Three reasons: read aloud by screen readers for blind users, shown as fallback text if image fails to load, indexed by search engines for image search. |
| Why `rel="noopener noreferrer"` with `target="_blank"`? | Without it, the newly opened tab can access your page via `window.opener` and redirect it to a phishing site — called reverse tabnapping. `noopener` sets `window.opener` to null. |
| `localStorage` vs `sessionStorage` | Both are key-value browser storage. `localStorage` persists until manually cleared. `sessionStorage` is cleared when the tab is closed. Neither is sent to the server automatically (unlike cookies). |
| `<article>` vs `<section>` | `<article>` = self-contained content that makes sense standalone (blog post, product card). `<section>` = thematic group that's part of a larger whole, always with a heading. |
| What are void elements? | Elements with no content and no closing tag: `<br>` `<hr>` `<img>` `<input>` `<meta>` `<link>`. They can't wrap content. |
| What is the DOM? | Document Object Model — the browser's in-memory tree representation built from HTML. JavaScript reads and modifies the DOM, not the raw HTML file. Changes to the DOM update the page instantly without reloading. |
| `<!DOCTYPE html>` purpose? | Tells the browser to render in standards mode (HTML5). Without it, browsers enter Quirks Mode and simulate broken old behaviour. |
| Canvas vs SVG? | Canvas is pixel/raster-based, drawn via JS API — no DOM per shape, better for games and animations. SVG is vector-based XML — each shape is a DOM element, scales infinitely, supports native event listeners per element. |
| Why must `charset` be first in `<head>`? | Because `<title>` can contain special characters that need correct decoding. If charset is declared after title, those characters may already be misinterpreted. |
