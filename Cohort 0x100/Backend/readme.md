# Creating an HTTP Server Using Express.js

A beginner-friendly guide to building web applications with Node.js and Express.js.

## Table of Contents

- [Introduction](#introduction)
- [Installation & Setup](#installation--setup)
- [Creating Your First Server](#creating-your-first-server)
- [Routing](#routing)
- [HTTP Methods](#http-methods)
- [Request Object](#request-object)
- [Response Object](#response-object)
- [Middleware](#middleware)
- [Serving Static Files](#serving-static-files)
- [Error Handling](#error-handling)
- [Router Module](#router-module)
- [Practical Examples](#practical-examples)
- [Quick Reference Cheat Sheet](#quick-reference-cheat-sheet)
- [Summary](#summary)

---

## Introduction

Express.js is a fast, minimal, and flexible Node.js web application framework. It is commonly used to build APIs and web apps with less boilerplate.

### Why Express?

- Lightweight and fast
- Easy to learn
- Powerful routing system
- Supports middleware
- Works well with REST APIs

### How it works

```text
Client Request → Express Server → Middleware → Route Handler → Response
```

---

## Installation & Setup

### Prerequisites

- Node.js installed (version 14 or higher is recommended)
- npm or yarn

### Step 1: Create a project folder

```bash
mkdir my-express-app
cd my-express-app
npm init -y
```

### Step 2: Install Express

```bash
npm install express
npm install --save-dev nodemon
```

### Step 3: Update package.json scripts

```json
{
  "name": "my-express-app",
  "version": "1.0.0",
  "description": "My first Express server",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

### Project structure

```text
my-express-app/
├── node_modules/
├── public/           # Static files (CSS, JS, images)
├── routes/           # Route files
├── middleware/       # Custom middleware
├── index.js          # Main server file
└── package.json
```

---

## Creating Your First Server

### Basic example

```js
// index.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! My first Express server 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
```

### Run the server

```bash
npm run dev
```

### Using environment variables

```js
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server with Environment Variables');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

```env
PORT=5000
NODE_ENV=development
```

---

## Routing

Routing defines how your application responds to client requests for specific URLs.

### Route syntax

```js
app.METHOD(PATH, HANDLER)
```

| Part | Meaning |
|------|---------|
| app | Express application |
| METHOD | HTTP method like get, post, put, delete |
| PATH | URL path |
| HANDLER | Function executed when the route matches |

### Basic routes

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🏠 Home Page');
});

app.get('/about', (req, res) => {
  res.send('📖 About Page');
});

app.listen(3000);
```

### Route parameters

```js
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.send(`User ID: ${id}`);
});
```

### Query parameters

```js
app.get('/search', (req, res) => {
  const { query, limit, page } = req.query;

  res.json({
    searchQuery: query || 'No query provided',
    limit: limit || 10,
    page: page || 1
  });
});
```

### Wildcards and optional params

```js
app.get('/api/*', (req, res) => {
  res.send(`API route: ${req.path}`);
});

app.get('/users/:id?', (req, res) => {
  if (req.params.id) {
    res.send(`User: ${req.params.id}`);
  } else {
    res.send('All Users');
  }
});
```

---

## HTTP Methods

HTTP methods define the action to perform on a resource.

| Method | Purpose | Example |
|--------|---------|---------|
| GET | Retrieve data | Get all users |
| POST | Create data | Add a new user |
| PUT | Replace an entire resource | Update a user profile |
| PATCH | Update part of a resource | Change only the email |
| DELETE | Remove data | Delete a user |

### CRUD example

```js
const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.listen(3000);
```

---

## Request Object

The `req` object contains information about the current incoming request.

### Common properties

```js
app.post('/demo', (req, res) => {
  console.log(req.url);
  console.log(req.path);
  console.log(req.method);
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log(req.headers);

  res.send('Demo route');
});
```

### Practical example

```js
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  const { username, password, email } = req.body;
  const contentType = req.get('Content-Type');
  const clientIP = req.ip;

  res.json({
    message: 'Registration data received',
    username,
    email,
    contentType,
    clientIP
  });
});

app.listen(3000);
```

---

## Response Object

The `res` object is used to send a response back to the client.

### Useful methods

| Method | Description |
|--------|-------------|
| `res.send()` | Send text, HTML, or a buffer |
| `res.json()` | Send JSON data |
| `res.status()` | Set the HTTP status code |
| `res.redirect()` | Redirect to another route |
| `res.sendFile()` | Send a file |
| `res.cookie()` | Set a cookie |
| `res.download()` | Send a downloadable file |

### Example

```js
app.get('/json', (req, res) => {
  res.json({ message: 'Hello from Express' });
});

app.get('/not-found', (req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});
```

---

## Middleware

Middleware runs between the incoming request and the response. It can log data, validate input, or authenticate users.

### Middleware flow

```text
Request → Middleware 1 → Middleware 2 → Route Handler → Response
```

### Example

```js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000);
```

### Types of middleware

1. Application-level middleware
2. Built-in middleware
3. Third-party middleware
4. Custom middleware

### Built-in examples

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
```

### Third-party example

```bash
npm install morgan cors helmet
```

```js
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
```

---

## Serving Static Files

Static files such as HTML, CSS, JavaScript, and images can be served directly.

### Example

```js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000);
```

### Folder structure

```text
public/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── images/
```

---

## Error Handling

Express lets you catch errors and return useful responses.

### 404 handler

```js
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});
```

### Global error handler

```js
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error'
  });
});
```

---

## Router Module

Routers help organize an application into smaller, modular route files.

### Example structure

```text
my-express-app/
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── authRoutes.js
├── index.js
└── package.json
```

### Route file example

```js
// routes/userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Users route' });
});

module.exports = router;
```

```js
// index.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use('/users', userRoutes);
app.listen(3000);
```

---

## Practical Examples

### Example 1: Simple JSON API server

```js
const express = require('express');
const app = express();
app.use(express.json());

const todos = [
  { id: 1, task: 'Learn Express', done: false },
  { id: 2, task: 'Build an API', done: false }
];

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.post('/todos', (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task, done: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.listen(3000);
```

### Example 2: Server with HTML pages

```js
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000);
```

### Example 3: Complete REST API with middleware

```js
const express = require('express');
const app = express();

app.use(express.json());

const requireAuth = (req, res, next) => {
  const token = req.headers['x-api-key'];
  if (token !== 'secret-api-key') {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  next();
};

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API v1.0' });
});

app.get('/api/users', requireAuth, (req, res) => {
  res.json({ success: true, data: [{ id: 1, name: 'Alice' }] });
});

app.listen(3000);
```

---

## Quick Reference Cheat Sheet

```js
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/path', (req, res) => res.send('Hello'));
app.post('/path', (req, res) => res.json(req.body));
app.put('/path', (req, res) => res.send('Updated'));
app.patch('/path', (req, res) => res.send('Patched'));
app.delete('/path', (req, res) => res.send('Deleted'));

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
```

---

## Summary

| Concept | Description |
|---------|-------------|
| `express()` | Creates an Express application |
| `app.use()` | Mounts middleware |
| `app.get()/post()/put()/delete()` | Defines routes |
| `req` | Request information from the client |
| `res` | Sends a response back to the client |
| `next()` | Moves to the next middleware or route |
| `express.Router()` | Organizes routes into modules |
| `express.json()` | Parses JSON request bodies |
| `express.static()` | Serves static files |

### Pro tips

- Always call `next()` in middleware unless you are sending a response.
- Place error handlers after all routes.
- Validate incoming data.
- Use environment variables for sensitive values.
- Handle async errors carefully.
