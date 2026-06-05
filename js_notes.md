# 📒 Complete JavaScript Notes — Beginner to Advanced
> In-depth explanations, code examples, and interview questions for every concept

---

## Table of Contents

1. [JS Fundamentals](#1-js-fundamentals)
2. [Data Types & Type Coercion](#2-data-types--type-coercion)
3. [Variables — var, let, const](#3-variables--var-let-const)
4. [Operators](#4-operators)
5. [Control Flow](#5-control-flow)
6. [Functions](#6-functions)
7. [Arrays](#7-arrays)
8. [Objects](#8-objects)
9. [Destructuring & Spread/Rest](#9-destructuring--spreadrest)
10. [DOM Manipulation](#10-dom-manipulation)
11. [Events](#11-events)
12. [Scope & Closures](#12-scope--closures)
13. [Hoisting](#13-hoisting)
14. [The `this` Keyword](#14-the-this-keyword)
15. [Prototypes & Inheritance](#15-prototypes--inheritance)
16. [ES6+ Classes](#16-es6-classes)
17. [Asynchronous JavaScript](#17-asynchronous-javascript)
18. [Promises](#18-promises)
19. [Async / Await](#19-async--await)
20. [Fetch API & HTTP](#20-fetch-api--http)
21. [Error Handling](#21-error-handling)
22. [Modules (ES Modules)](#22-modules-es-modules)
23. [Iterators & Generators](#23-iterators--generators)
24. [Symbol, WeakMap, WeakSet](#24-symbol-weakmap-weakset)
25. [Proxy & Reflect](#25-proxy--reflect)
26. [Memory Management & Garbage Collection](#26-memory-management--garbage-collection)
27. [Event Loop & Concurrency](#27-event-loop--concurrency)
28. [Design Patterns in JS](#28-design-patterns-in-js)
29. [Functional Programming in JS](#29-functional-programming-in-js)
30. [Interview Questions](#30-interview-questions)

---

## 1. JS Fundamentals

### What is JavaScript?
JavaScript is a **high-level, interpreted, dynamically-typed, single-threaded** programming language. It runs in the browser and on servers (Node.js). It supports multiple paradigms: object-oriented, functional, and event-driven.

### How JS Runs
1. Source code → parsed by JS engine (V8, SpiderMonkey)
2. **AST** (Abstract Syntax Tree) is created
3. Compiled to **bytecode** → optimized with JIT compilation
4. Executed

### Adding JS to HTML

```html
<!-- External (Best Practice) -->
<script src="app.js" defer></script>

<!-- Internal -->
<script>
  console.log("Hello, World!");
</script>

<!-- Inline (avoid) -->
<button onclick="doSomething()">Click</button>
```

> ✅ Use `defer` on external scripts — loads without blocking HTML parsing, executes after DOM is ready.

### Comments

```javascript
// Single-line comment

/*
  Multi-line comment
*/

/**
 * JSDoc comment — used for documentation
 * @param {string} name - The name to greet
 * @returns {string} Greeting string
 */
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Console Methods

```javascript
console.log("General output");
console.warn("Warning message");
console.error("Error message");
console.info("Info message");
console.table([{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]);
console.group("Group Label");
  console.log("Inside group");
console.groupEnd();
console.time("timer");
  // ... some code
console.timeEnd("timer");
console.dir(document.body);  // shows DOM element as object
```

---

## 2. Data Types & Type Coercion

### Primitive Types (7 total)

```javascript
// 1. Number — integers and floats
let age = 25;
let price = 9.99;
let neg = -10;
let big = 1_000_000;    // numeric separator
let hex = 0xff;         // 255
let bin = 0b1010;       // 10
let oct = 0o17;         // 15
let inf = Infinity;
let nan = NaN;          // Not a Number

// 2. String
let name = "Alice";
let greeting = 'Hello';
let template = `Hi, ${name}! You are ${age} years old.`; // Template literal

// 3. Boolean
let isActive = true;
let isLoggedIn = false;

// 4. Undefined — declared but not assigned
let x;
console.log(x);  // undefined

// 5. Null — intentional absence of value
let user = null;

// 6. Symbol — unique identifier
let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2);  // false — every Symbol is unique

// 7. BigInt — for very large integers
let bigNum = 9007199254740991n;
let huge = BigInt("123456789012345678901234567890");
```

### Reference Types

```javascript
// Object
let person = { name: "Alice", age: 25 };

// Array (special object)
let colors = ["red", "green", "blue"];

// Function (callable object)
let greet = function() { return "Hello"; };
```

### `typeof` Operator

```javascript
typeof 42           // "number"
typeof "hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object"  ← famous bug in JS!
typeof Symbol()     // "symbol"
typeof 42n          // "bigint"
typeof {}           // "object"
typeof []           // "object"  ← arrays are objects
typeof function(){} // "function"
```

### Type Coercion — Implicit vs Explicit

```javascript
// IMPLICIT coercion (JS converts automatically)
"5" + 3       // "53"  — number coerced to string
"5" - 3       // 2     — string coerced to number
"5" * "3"     // 15    — both coerced to numbers
true + 1      // 2     — true = 1
false + 1     // 1     — false = 0
null + 1      // 1     — null = 0
undefined + 1 // NaN   — undefined = NaN
[] + []       // ""
[] + {}       // "[object Object]"
{} + []       // 0 (in some contexts)

// EXPLICIT coercion
Number("42")     // 42
Number("")       // 0
Number(null)     // 0
Number(undefined)// NaN
Number(true)     // 1
Number(false)    // 0

String(42)       // "42"
String(null)     // "null"
String(undefined)// "undefined"

Boolean(0)       // false
Boolean("")      // false
Boolean(null)    // false
Boolean(undefined) // false
Boolean(NaN)     // false
Boolean(false)   // false
// Everything else is truthy: "0", [], {}, -1, etc.

parseInt("42px")  // 42
parseFloat("3.14abc") // 3.14
parseInt("0xff", 16)  // 255
```

### Equality: `==` vs `===`

```javascript
// == (loose equality) — allows type coercion
0 == false      // true
"" == false     // true
null == undefined // true
1 == "1"        // true

// === (strict equality) — no coercion
0 === false     // false
1 === "1"       // false
null === undefined // false

// Always prefer ===
```

---

## 3. Variables — var, let, const

### Declarations

```javascript
// var — function-scoped, hoisted, can be redeclared
var name = "Alice";
var name = "Bob";   // OK — redeclared!
console.log(name);  // "Bob"

// let — block-scoped, not re-declarable, hoisted but NOT initialized
let age = 25;
// let age = 30;    // Error: already declared
age = 30;           // OK — reassignment is fine

// const — block-scoped, must be initialized, cannot be reassigned
const PI = 3.14159;
// PI = 3;          // Error: assignment to constant variable

// const with objects — the REFERENCE is constant, not the content
const person = { name: "Alice" };
person.name = "Bob";  // OK! The object itself changed
// person = {};       // Error! Can't reassign the binding
```

### Key Differences Table

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function | Block | Block |
| Hoisting | Yes (initialized as `undefined`) | Yes (TDZ — not initialized) | Yes (TDZ — not initialized) |
| Re-declaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Global object property | Yes | No | No |

### Temporal Dead Zone (TDZ)

```javascript
console.log(a); // undefined (var is hoisted + initialized)
console.log(b); // ReferenceError: Cannot access 'b' before initialization
console.log(c); // ReferenceError

var a = 1;
let b = 2;
const c = 3;
// The period between hoisting and initialization for let/const is the TDZ
```

---

## 4. Operators

### Arithmetic

```javascript
5 + 3   // 8
5 - 3   // 2
5 * 3   // 15
10 / 3  // 3.3333...
10 % 3  // 1  (remainder/modulo)
2 ** 3  // 8  (exponentiation)
-5      // unary negation
+"5"    // 5  (unary plus — converts to number)
```

### Assignment

```javascript
let x = 10;
x += 5;   // x = x + 5 = 15
x -= 3;   // x = x - 3 = 12
x *= 2;   // x = x * 2 = 24
x /= 4;   // x = x / 4 = 6
x %= 4;   // x = x % 4 = 2
x **= 3;  // x = x ** 3 = 8
x++;      // post-increment: returns x, then x = x + 1
++x;      // pre-increment: x = x + 1, then returns x
x--;      // post-decrement
--x;      // pre-decrement
```

### Logical Operators

```javascript
// && (AND) — returns first falsy or last value
true && "hello"    // "hello"
false && "hello"   // false
null && "hello"    // null
"hi" && "hello"    // "hello"

// || (OR) — returns first truthy or last value
false || "default"  // "default"
null || "fallback"  // "fallback"
"value" || "other"  // "value"
0 || 42             // 42

// ! (NOT)
!true   // false
!false  // true
!!0     // false (double negation → boolean conversion)
!!"hi"  // true

// ?? (Nullish Coalescing) — only checks null/undefined (not 0 or "")
null ?? "default"      // "default"
undefined ?? "default" // "default"
0 ?? "default"         // 0  ← different from ||
"" ?? "default"        // ""  ← different from ||
false ?? "default"     // false ← different from ||

// Logical Assignment (ES2021)
x ||= "default"   // x = x || "default"
x &&= newValue    // x = x && newValue
x ??= "default"   // x = x ?? "default"
```

### Comparison

```javascript
5 > 3     // true
5 >= 5    // true
5 < 3     // false
5 <= 4    // false
5 === 5   // true (strict)
5 !== 3   // true (strict not equal)
```

### Ternary Operator

```javascript
// condition ? valueIfTrue : valueIfFalse
let status = age >= 18 ? "adult" : "minor";

// Nested ternary (use sparingly)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// Better as if-else for readability
```

### Optional Chaining `?.`

```javascript
const user = { profile: { address: { city: "Delhi" } } };

// Without optional chaining
const city = user && user.profile && user.profile.address && user.profile.address.city;

// With optional chaining — stops and returns undefined if any part is null/undefined
const city = user?.profile?.address?.city;  // "Delhi"
const zip  = user?.profile?.address?.zip;   // undefined (no error)

// With arrays and methods
const first = arr?.[0];
const result = obj?.method?.();
```

---

## 5. Control Flow

### if / else if / else

```javascript
const score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else if (score >= 70) {
  console.log("C grade");
} else {
  console.log("Fail");
}
```

### switch

```javascript
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}
```

### Loops

```javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i++);
}

// do-while (runs at least once)
let j = 0;
do {
  console.log(j++);
} while (j < 5);

// for...of — iterates values (arrays, strings, sets, maps)
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in — iterates keys/indices (objects, arrays)
const person = { name: "Alice", age: 25 };
for (const key in person) {
  console.log(key, person[key]);  // name Alice, age 25
}

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // skip 3
  if (i === 7) break;     // stop at 7
  console.log(i);         // 0, 1, 2, 4, 5, 6
}
```

---

## 6. Functions

### Function Declaration vs Expression

```javascript
// Declaration — hoisted, can be called before definition
function greet(name) {
  return `Hello, ${name}!`;
}

// Expression — NOT hoisted
const greet = function(name) {
  return `Hello, ${name}!`;
};

// Named function expression
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1);  // can reference itself
};
```

### Arrow Functions (ES6)

```javascript
// Full form
const add = (a, b) => {
  return a + b;
};

// Concise (implicit return — no braces needed)
const add = (a, b) => a + b;

// Single parameter — parentheses optional
const double = n => n * 2;

// No parameters
const greet = () => "Hello!";

// Returning an object literal — wrap in parentheses
const makeObj = (x, y) => ({ x, y });

// Arrow functions do NOT have their own `this`
// They inherit `this` from the surrounding lexical scope
const obj = {
  name: "Alice",
  greet: function() {
    const inner = () => console.log(this.name);  // 'this' = obj
    inner();
  }
};
```

### Default Parameters

```javascript
function createUser(name, role = "user", active = true) {
  return { name, role, active };
}

createUser("Alice");             // { name: "Alice", role: "user", active: true }
createUser("Bob", "admin");      // { name: "Bob", role: "admin", active: true }
createUser("Charlie", "user", false); // { name: "Charlie", role: "user", active: false }
```

### Rest Parameters & Arguments Object

```javascript
// Rest parameter — collects remaining arguments into an array
function sum(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
sum(1, 2, 3, 4, 5);  // 15

function logFirst(first, ...rest) {
  console.log("First:", first);
  console.log("Rest:", rest);
}
logFirst(1, 2, 3, 4);  // First: 1, Rest: [2, 3, 4]

// arguments object (old way, NOT available in arrow functions)
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
```

### Higher-Order Functions

```javascript
// Functions that take or return other functions
function applyTwice(fn, value) {
  return fn(fn(value));
}
applyTwice(x => x * 2, 3);  // 12

// Function returning a function
function multiplier(factor) {
  return (number) => number * factor;
}
const double = multiplier(2);
const triple = multiplier(3);
double(5);  // 10
triple(5);  // 15
```

### IIFE — Immediately Invoked Function Expression

```javascript
// Runs immediately, creates private scope
(function() {
  const secret = "hidden";
  console.log("IIFE runs!");
})();

// Arrow IIFE
(() => {
  console.log("Arrow IIFE");
})();

// With parameters
(function(name) {
  console.log(`Hello, ${name}`);
})("Alice");
```

### Function Methods: `call`, `apply`, `bind`

```javascript
const person = { name: "Alice" };

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

// call — invokes immediately, passes args individually
greet.call(person, "Hello", "!");   // "Hello, Alice!"

// apply — invokes immediately, passes args as array
greet.apply(person, ["Hi", "?"]);   // "Hi, Alice?"

// bind — returns a NEW function with `this` permanently bound
const greetAlice = greet.bind(person, "Hey");
greetAlice(".");   // "Hey, Alice."
greetAlice("!");   // "Hey, Alice!"
```

---

## 7. Arrays

### Creating Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = new Array(3);        // [empty × 3]
const arr3 = new Array(1, 2, 3);  // [1, 2, 3]
const arr4 = Array.from("hello"); // ['h','e','l','l','o']
const arr5 = Array.from({length: 5}, (_, i) => i * 2);  // [0,2,4,6,8]
const arr6 = Array.of(1, 2, 3);   // [1, 2, 3]
```

### Mutating Methods (modify original)

```javascript
const arr = [1, 2, 3];

arr.push(4);           // [1,2,3,4]    — add to end, returns new length
arr.pop();             // [1,2,3]      — remove from end, returns removed item
arr.unshift(0);        // [0,1,2,3]    — add to start, returns new length
arr.shift();           // [1,2,3]      — remove from start, returns removed item
arr.splice(1, 1);      // [1,3]        — remove 1 item at index 1
arr.splice(1, 0, 2);   // [1,2,3]      — insert without removing
arr.splice(1, 1, 99);  // [1,99,3]     — replace
arr.reverse();         // [3,99,1]     — reverses in place
arr.sort();            // lexicographic sort
arr.sort((a, b) => a - b);  // numeric ascending
arr.sort((a, b) => b - a);  // numeric descending
arr.fill(0, 1, 3);     // fills indices 1-2 with 0
```

### Non-Mutating Methods (return new array/value)

```javascript
const arr = [1, 2, 3, 4, 5];

// Iteration
arr.forEach((item, index) => console.log(index, item));

// Transformation
arr.map(x => x * 2);           // [2,4,6,8,10]
arr.filter(x => x % 2 === 0);  // [2,4]
arr.reduce((acc, x) => acc + x, 0);    // 15
arr.reduceRight((acc, x) => acc + x);  // right to left

// Search
arr.find(x => x > 3);      // 4 (first match)
arr.findIndex(x => x > 3); // 3 (index of first match)
arr.findLast(x => x < 4);  // 3
arr.indexOf(3);             // 2 (first occurrence index)
arr.lastIndexOf(3);         // 2
arr.includes(3);            // true

// Testing
arr.some(x => x > 4);      // true (at least one)
arr.every(x => x > 0);     // true (all)

// Slicing and joining
arr.slice(1, 3);            // [2,3] (non-mutating)
arr.concat([6, 7]);         // [1,2,3,4,5,6,7]
arr.join(" - ");            // "1 - 2 - 3 - 4 - 5"

// Flattening
[[1,2],[3,[4,5]]].flat();    // [1,2,3,[4,5]] (depth 1)
[[1,2],[3,[4,5]]].flat(2);   // [1,2,3,4,5]
[[1,2],[3,4]].flatMap(x => x.map(n => n * 2)); // [2,4,6,8]

// Spread (copy)
const copy = [...arr];
const combined = [...arr, ...otherArr];
```

### Array Destructuring

```javascript
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// Skip elements
const [,, third] = [1, 2, 3];  // third = 3

// Default values
const [a = 10, b = 20] = [5];  // a = 5, b = 20

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];  // x = 2, y = 1
```

---

## 8. Objects

### Creating Objects

```javascript
// Object literal
const person = {
  name: "Alice",
  age: 25,
  "favorite color": "blue",  // quoted for special chars
  greet() {                   // method shorthand (ES6)
    return `Hi, I'm ${this.name}`;
  }
};

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const alice = new Person("Alice", 25);

// Object.create (sets prototype)
const proto = { greet() { return `Hi, I'm ${this.name}`; } };
const bob = Object.create(proto);
bob.name = "Bob";
```

### Accessing & Modifying

```javascript
person.name         // "Alice" — dot notation
person["age"]       // 25 — bracket notation (needed for dynamic/special keys)

const key = "name";
person[key]         // "Alice" — dynamic property access

person.email = "alice@example.com";  // add property
delete person.age;                   // remove property
"name" in person                     // true — check existence
person.hasOwnProperty("name")        // true (not inherited)
```

### Object Methods

```javascript
const obj = { a: 1, b: 2, c: 3 };

Object.keys(obj)     // ["a", "b", "c"]
Object.values(obj)   // [1, 2, 3]
Object.entries(obj)  // [["a",1], ["b",2], ["c",3]]

// Create object from entries
Object.fromEntries([["a", 1], ["b", 2]])  // { a: 1, b: 2 }

// Merge objects
Object.assign({}, obj1, obj2)   // shallow merge
const merged = { ...obj1, ...obj2 };  // spread (ES6)

// Freeze / Seal
Object.freeze(obj);   // can't add, remove, or change properties
Object.seal(obj);     // can't add/remove, CAN change existing

// Property descriptors
Object.defineProperty(obj, "id", {
  value: 42,
  writable: false,    // can't change
  enumerable: false,  // won't show in for...in
  configurable: false // can't delete or redefine
});

Object.getOwnPropertyDescriptor(obj, "name");
// { value: "Alice", writable: true, enumerable: true, configurable: true }
```

### Computed Property Names

```javascript
const key = "name";
const obj = {
  [key]: "Alice",          // { name: "Alice" }
  [`${key}_upper`]: "ALICE" // { name_upper: "ALICE" }
};
```

### Shorthand Property Names

```javascript
const name = "Alice";
const age = 25;

// Old way
const person = { name: name, age: age };

// ES6 shorthand — if key and variable name are same
const person = { name, age };  // { name: "Alice", age: 25 }
```

---

## 9. Destructuring & Spread/Rest

### Object Destructuring

```javascript
const user = { name: "Alice", age: 25, city: "Delhi", country: "India" };

// Basic
const { name, age } = user;

// Rename while destructuring
const { name: userName, age: userAge } = user;

// Default values
const { name, score = 100 } = user;  // score = 100 (not in user)

// Nested destructuring
const { address: { city, zip } } = { address: { city: "Delhi", zip: "110001" } };

// Rest in destructuring
const { name, ...rest } = user;
// name = "Alice", rest = { age: 25, city: "Delhi", country: "India" }

// In function parameters
function display({ name, age = 0, city = "Unknown" }) {
  console.log(`${name}, ${age}, ${city}`);
}
display(user);
```

### Spread Operator

```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];    // [1,2,3,4,5,6]
const copy = [...arr1];                 // shallow copy

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };   // { a:1, b:2, c:3, d:4 }
const overridden = { ...obj1, b: 99 }; // { a:1, b:99 } — later key wins

// Function calls
function sum(a, b, c) { return a + b + c; }
const nums = [1, 2, 3];
sum(...nums);  // 6

// Clone and modify
const updated = { ...user, age: 26 };  // common in React state updates
```

---

## 10. DOM Manipulation

### Selecting Elements

```javascript
// Single element
document.getElementById("main")
document.querySelector(".card")         // first match
document.querySelector("#header h1")    // CSS selector

// Multiple elements (returns HTMLCollection or NodeList)
document.getElementsByClassName("card")  // HTMLCollection (live)
document.getElementsByTagName("p")       // HTMLCollection (live)
document.querySelectorAll(".card")       // NodeList (static)

// Traversal
element.parentElement
element.children         // HTMLCollection of child elements
element.firstElementChild
element.lastElementChild
element.nextElementSibling
element.previousElementSibling
```

### Creating & Modifying Elements

```javascript
// Create
const div = document.createElement("div");
const text = document.createTextNode("Hello");

// Set content
div.textContent = "Safe text";     // escapes HTML — XSS safe
div.innerHTML = "<b>Bold</b>";     // parses HTML — use carefully

// Attributes
div.setAttribute("class", "card");
div.getAttribute("class");          // "card"
div.removeAttribute("class");
div.id = "main";                    // direct property
div.className = "card active";

// Dataset (data-* attributes)
div.dataset.userId = "123";         // sets data-user-id="123"
div.dataset.userId                  // "123"

// Styles
div.style.color = "red";
div.style.backgroundColor = "#fff";
div.style.cssText = "color: red; font-size: 16px;";

// Classes
div.classList.add("active");
div.classList.remove("hidden");
div.classList.toggle("open");
div.classList.contains("active");   // true/false
div.classList.replace("old", "new");
```

### Inserting Elements

```javascript
const parent = document.querySelector(".container");
const child = document.createElement("p");

parent.appendChild(child);                    // append to end
parent.insertBefore(child, referenceNode);    // before specific child
parent.prepend(child);                        // prepend to start
parent.append(child, "text node");            // append (multiple items)

// Modern — insertAdjacentElement / insertAdjacentHTML
parent.insertAdjacentHTML("beforebegin", "<p>Before</p>");
parent.insertAdjacentHTML("afterbegin", "<p>First child</p>");
parent.insertAdjacentHTML("beforeend", "<p>Last child</p>");
parent.insertAdjacentHTML("afterend", "<p>After</p>");

// Cloning
const clone = element.cloneNode(true);   // deep clone (includes children)
const shallow = element.cloneNode(false);

// Removing
child.remove();                          // modern
parent.removeChild(child);              // older way
```

---

## 11. Events

### Event Listeners

```javascript
const btn = document.querySelector("button");

// Add event listener
btn.addEventListener("click", handleClick);

function handleClick(event) {
  console.log("Clicked!", event);
}

// Anonymous function
btn.addEventListener("click", function(e) {
  console.log(this);  // refers to the element
});

// Arrow function (this = outer context, NOT the element)
btn.addEventListener("click", (e) => {
  console.log(e.target);  // use e.target instead
});

// Remove event listener (needs same function reference)
btn.removeEventListener("click", handleClick);

// Options
btn.addEventListener("click", handler, { once: true });    // fires once
btn.addEventListener("click", handler, { passive: true });  // improves scroll perf
btn.addEventListener("click", handler, { capture: true });  // capture phase
```

### The Event Object

```javascript
element.addEventListener("click", (e) => {
  e.target          // element that triggered the event
  e.currentTarget   // element the listener is attached to
  e.type            // "click"
  e.bubbles         // true
  e.cancelable      // true
  e.preventDefault()  // prevent default browser behavior
  e.stopPropagation() // stop bubbling
  e.stopImmediatePropagation() // stop other listeners on same element
  e.clientX / e.clientY   // mouse position relative to viewport
  e.pageX / e.pageY       // mouse position relative to document
  e.key               // for keyboard events: "Enter", "Escape", etc.
  e.keyCode           // deprecated
  e.code              // physical key: "KeyA", "Space"
  e.shiftKey, e.ctrlKey, e.altKey, e.metaKey  // modifier keys
});
```

### Event Bubbling & Capturing

```javascript
/*
  Event phases:
  1. CAPTURE phase — event travels from window down to target
  2. TARGET phase — event reaches the target element
  3. BUBBLE phase — event bubbles up from target to window

  Listeners are called in BUBBLE phase by default.
  Pass { capture: true } to listen in capture phase.
*/

document.addEventListener("click", (e) => {
  console.log("Document (capture)", e.target);
}, true);  // capture phase

document.querySelector(".parent").addEventListener("click", (e) => {
  console.log("Parent (bubble)");
  e.stopPropagation();  // stops event from reaching document
});

document.querySelector(".child").addEventListener("click", (e) => {
  console.log("Child clicked");
});
```

### Event Delegation

```javascript
/*
  Instead of adding listeners to each child,
  add ONE listener to parent and check e.target.
  Works for dynamically added elements too!
*/

const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
    e.target.classList.toggle("selected");
  }
});

// Using closest() for nested children
list.addEventListener("click", (e) => {
  const item = e.target.closest(".list-item");
  if (item) {
    console.log("Item:", item.dataset.id);
  }
});
```

### Common Events

```javascript
// Mouse
"click", "dblclick", "mouseenter", "mouseleave",
"mouseover", "mouseout", "mousemove", "mousedown", "mouseup"

// Keyboard
"keydown", "keyup", "keypress" (deprecated)

// Form
"submit", "change", "input", "focus", "blur", "reset"

// Window / Document
"load", "DOMContentLoaded", "resize", "scroll",
"beforeunload", "hashchange", "popstate"

// Touch (mobile)
"touchstart", "touchend", "touchmove"

// Drag
"dragstart", "dragend", "dragover", "drop"

// Example: DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  // Safe to manipulate DOM here
});

// Form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();  // prevent page reload
  // handle form data
});

// Debouncing a search input
let timer;
input.addEventListener("input", (e) => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    fetchResults(e.target.value);
  }, 300);
});
```

---

## 12. Scope & Closures

### Scope Types

```javascript
// Global scope
const globalVar = "I'm global";

function outer() {
  // Function/Local scope
  const outerVar = "I'm in outer";

  function inner() {
    // Nested function scope
    const innerVar = "I'm in inner";
    console.log(globalVar);  // ✅ accessible
    console.log(outerVar);   // ✅ accessible (closure)
    console.log(innerVar);   // ✅ accessible
  }

  // console.log(innerVar);  // ❌ ReferenceError
}

// Block scope (let/const)
{
  let blockVar = "block";
  const blockConst = "const block";
  // These don't exist outside this block
}
// console.log(blockVar);  // ❌ ReferenceError
```

### Closures — One of JS's Most Important Concepts

A **closure** is a function that "remembers" its lexical environment — the variables from the scope where it was defined — even after that scope has finished executing.

```javascript
function counter() {
  let count = 0;  // private variable

  return {
    increment() { count++; },
    decrement() { count--; },
    getCount()  { return count; }
  };
}

const c = counter();
c.increment();  // count = 1
c.increment();  // count = 2
c.decrement();  // count = 1
c.getCount();   // 1
// count is not accessible directly — it's encapsulated!

// Closure for data privacy
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
    },
    withdraw(amount) {
      if (amount <= balance) balance -= amount;
      else console.log("Insufficient funds");
    },
    getBalance() { return balance; }
  };
}

// Closure with factory functions
function makeMultiplier(x) {
  return (y) => x * y;  // remembers x
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
double(5);  // 10
triple(5);  // 15

// Classic closure gotcha with var
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // 3, 3, 3 (not 0, 1, 2!)
}

// Fix 1: use let
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);  // 0, 1, 2 ✅
}

// Fix 2: IIFE closure
for (var i = 0; i < 3; i++) {
  ((j) => {
    setTimeout(() => console.log(j), 100);
  })(i);  // 0, 1, 2 ✅
}
```

---

## 13. Hoisting

Hoisting is JavaScript's behavior of moving declarations (not initializations) to the top of their scope before execution.

```javascript
// --- FUNCTION DECLARATIONS are fully hoisted ---
greet();  // ✅ Works! "Hello"

function greet() {
  console.log("Hello");
}

// --- var DECLARATIONS are hoisted (but NOT initialized) ---
console.log(name);  // undefined (not ReferenceError)
var name = "Alice";
console.log(name);  // "Alice"

// Mentally, JS treats it as:
var name;           // hoisted to top
console.log(name);  // undefined
name = "Alice";     // assignment stays in place

// --- let and const are hoisted but NOT initialized (TDZ) ---
console.log(age);   // ReferenceError: Cannot access before initialization
let age = 25;

// --- FUNCTION EXPRESSIONS are NOT hoisted ---
sayHi();            // TypeError: sayHi is not a function
var sayHi = function() { console.log("Hi"); };
// var sayHi is hoisted as undefined, calling undefined() is TypeError
```

---

## 14. The `this` Keyword

`this` refers to the **execution context** — who called the function.

```javascript
// 1. Global context
console.log(this);          // window (browser) / global (Node.js)

// 2. Regular function — this = caller (or window in strict mode = undefined)
function show() {
  console.log(this);        // window (non-strict) or undefined (strict)
}

// 3. Method — this = the object before the dot
const user = {
  name: "Alice",
  greet() {
    console.log(this.name); // "Alice" — called as user.greet()
  }
};
user.greet();

// Problem: losing 'this' when passing method as callback
const fn = user.greet;
fn();  // undefined! — called without context

// Fix: bind
const fn = user.greet.bind(user);
fn();  // "Alice" ✅

// 4. Arrow functions — NO own 'this', inherit from enclosing scope
const timer = {
  count: 0,
  start() {
    setInterval(() => {           // arrow — inherits 'this' from start()
      this.count++;               // 'this' = timer object ✅
    }, 1000);
  }
};

// 5. Constructor with 'new'
function Person(name) {
  this.name = name;   // 'this' = newly created object
}
const alice = new Person("Alice");  // alice.name = "Alice"

// 6. Class methods
class Car {
  constructor(model) { this.model = model; }
  getModel() { return this.model; }  // this = instance
}

// 7. Explicit binding: call, apply, bind (see Functions section)

// 8. Event handlers
button.addEventListener("click", function() {
  console.log(this);  // the button element
});
button.addEventListener("click", () => {
  console.log(this);  // window (arrow — no own this)
});
```

---

## 15. Prototypes & Inheritance

### Prototype Chain

Every object in JavaScript has a hidden `[[Prototype]]` link to another object. When you access a property, JS walks up the chain until found or `null` is reached.

```javascript
const animal = {
  type: "Animal",
  describe() { return `I am a ${this.type}`; }
};

const dog = Object.create(animal);  // dog.__proto__ = animal
dog.type = "Dog";
dog.bark = function() { return "Woof!"; };

dog.describe();           // "I am a Dog" — found on animal via prototype
dog.bark();               // "Woof!" — found on dog itself
dog.hasOwnProperty("type"); // true — own property
dog.hasOwnProperty("describe"); // false — inherited

// Prototype chain: dog → animal → Object.prototype → null
```

### Constructor Functions + Prototype

```javascript
function Animal(name, sound) {
  this.name = name;    // own property (per instance)
  this.sound = sound;
}

// Methods on prototype — SHARED across all instances (memory efficient)
Animal.prototype.speak = function() {
  return `${this.name} says ${this.sound}`;
};

Animal.prototype.toString = function() {
  return `[Animal: ${this.name}]`;
};

const cat = new Animal("Cat", "Meow");
const dog = new Animal("Dog", "Woof");

cat.speak();  // "Cat says Meow"
dog.speak();  // "Dog says Woof"

// 'new' keyword does:
// 1. Creates a new empty object
// 2. Sets its prototype to Animal.prototype
// 3. Executes Animal with 'this' = the new object
// 4. Returns the new object

// Inheritance via prototype chain
function Dog(name) {
  Animal.call(this, name, "Woof");  // call parent constructor
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.fetch = function() { return `${this.name} fetches!`; };

const rex = new Dog("Rex");
rex.speak();   // "Rex says Woof"  — inherited
rex.fetch();   // "Rex fetches!"   — own
```

---

## 16. ES6+ Classes

Classes are syntactic sugar over prototype-based inheritance.

```javascript
class Animal {
  // Static field
  static count = 0;

  // Private field (ES2022)
  #health = 100;

  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    Animal.count++;
  }

  // Instance method
  speak() {
    return `${this.name} says ${this.sound}`;
  }

  // Getter
  get info() {
    return `${this.name} (${this.sound})`;
  }

  // Setter
  set nickname(value) {
    this.name = value.trim();
  }

  // Private method
  #calculateEnergy() {
    return this.#health * 0.1;
  }

  getEnergy() {
    return this.#calculateEnergy();
  }

  // Static method — called on class, not instance
  static create(name, sound) {
    return new Animal(name, sound);
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof");  // must call super() before using 'this'
    this.breed = breed;
  }

  // Override parent method
  speak() {
    return `${super.speak()} (${this.breed})`;
  }

  fetch() {
    return `${this.name} fetches!`;
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak();          // "Rex says Woof (Labrador)"
dog.fetch();          // "Rex fetches!"
dog instanceof Dog;   // true
dog instanceof Animal; // true
Animal.count;         // 1

// Mixins (for multiple inheritance simulation)
const Swimmer = (Base) => class extends Base {
  swim() { return `${this.name} swims`; }
};

const Runner = (Base) => class extends Base {
  run() { return `${this.name} runs`; }
};

class Athlete extends Swimmer(Runner(Animal)) {}
const athlete = new Athlete("Alex", "...");
athlete.swim(); // "Alex swims"
athlete.run();  // "Alex runs"
```

---

## 17. Asynchronous JavaScript

### Why Async?
JavaScript is **single-threaded** but can handle async operations (network requests, timers, file I/O) without blocking via the **Event Loop**.

### Callbacks — The Old Way

```javascript
// setTimeout
setTimeout(() => console.log("After 1 second"), 1000);

// setInterval
const id = setInterval(() => console.log("Every second"), 1000);
setTimeout(() => clearInterval(id), 5000);  // stop after 5 seconds

// Callback pattern
function fetchData(url, callback) {
  // Simulating async operation
  setTimeout(() => {
    const data = { id: 1, name: "Alice" };
    callback(null, data);  // error-first convention
  }, 1000);
}

fetchData("/api/user", (error, data) => {
  if (error) return console.error(error);
  console.log(data);
});

// Callback Hell (Pyramid of Doom)
fetchUser(id, (err, user) => {
  fetchOrders(user.id, (err, orders) => {
    fetchProducts(orders[0].id, (err, products) => {
      // deeply nested, hard to maintain
    });
  });
});
```

---

## 18. Promises

A **Promise** is an object representing the eventual result of an async operation. It has three states: **pending**, **fulfilled**, or **rejected**.

```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  // async operation
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve("Data loaded!");    // fulfilled
    } else {
      reject(new Error("Failed")); // rejected
    }
  }, 1000);
});

// Consuming a Promise
myPromise
  .then(result => {
    console.log(result);   // "Data loaded!" (on resolve)
    return processData(result);  // can return another promise
  })
  .then(processed => {
    console.log(processed);
  })
  .catch(error => {
    console.error(error);  // runs on rejection or thrown error in .then()
  })
  .finally(() => {
    console.log("Always runs — cleanup here");
  });

// Promisifying a callback
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
await delay(1000);  // wait 1 second

// Promise combinators
// Promise.all — waits for ALL, fails if ANY fails
Promise.all([fetchUser(), fetchPosts(), fetchComments()])
  .then(([user, posts, comments]) => {
    console.log(user, posts, comments);
  });

// Promise.allSettled — waits for ALL, never fails
Promise.allSettled([p1, p2, p3])
  .then(results => {
    results.forEach(r => {
      if (r.status === "fulfilled") console.log(r.value);
      if (r.status === "rejected") console.error(r.reason);
    });
  });

// Promise.race — resolves/rejects with FIRST settled promise
Promise.race([slowRequest(), timeout(5000)])
  .then(result => console.log(result))
  .catch(() => console.log("Timed out"));

// Promise.any — resolves with FIRST fulfilled (ignores rejections)
Promise.any([p1, p2, p3])
  .then(firstSuccess => console.log(firstSuccess))
  .catch(() => console.log("All failed"));
```

---

## 19. Async / Await

Async/Await is syntactic sugar over Promises — it makes async code look and behave like synchronous code.

```javascript
// async function always returns a Promise
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);  // pause here
  const data = await response.json();                 // pause here
  return data;  // auto-wrapped in Promise.resolve(data)
}

// Full example with error handling
async function loadDashboard(userId) {
  try {
    const user = await fetchUser(userId);
    const [orders, notifications] = await Promise.all([
      fetchOrders(user.id),
      fetchNotifications(user.id)
    ]);

    return { user, orders, notifications };
  } catch (error) {
    console.error("Dashboard failed to load:", error);
    throw error;  // re-throw if needed
  } finally {
    hideLoadingSpinner();
  }
}

// Sequential vs Parallel
// Sequential (slower — waits for each)
async function sequential() {
  const a = await fetchA();  // waits ~1s
  const b = await fetchB();  // waits ~1s after A done
  // Total: ~2s
}

// Parallel (faster — runs simultaneously)
async function parallel() {
  const [a, b] = await Promise.all([fetchA(), fetchB()]);
  // Total: ~1s (max of individual times)
}

// Top-level await (ES2022, in modules only)
const data = await fetch("/api/data").then(r => r.json());

// Async iteration
async function processStream() {
  for await (const chunk of readableStream) {
    process(chunk);
  }
}
```

---

## 20. Fetch API & HTTP

```javascript
// Basic GET request
async function getUser(id) {
  const response = await fetch(`https://api.example.com/users/${id}`);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

// POST request
async function createUser(userData) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(userData)
  });

  return response.json();
}

// PUT / PATCH / DELETE
const update = await fetch(`/api/users/${id}`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Updated Name" })
});

const deleted = await fetch(`/api/users/${id}`, { method: "DELETE" });

// Reading different response types
const text = await response.text();
const json = await response.json();
const blob = await response.blob();
const buffer = await response.arrayBuffer();
const form = await response.formData();

// Abort a request
const controller = new AbortController();
const response = await fetch(url, { signal: controller.signal });
controller.abort();  // cancel the request

// Timeout pattern
async function fetchWithTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  try {
    const response = await fetch(url, { signal: controller.signal });
    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}
```

---

## 21. Error Handling

```javascript
// try / catch / finally
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error(error.name);     // "TypeError", "ReferenceError", etc.
  console.error(error.message);  // description
  console.error(error.stack);    // stack trace
} finally {
  cleanup();  // always runs
}

// Custom Error classes
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

// Using custom errors
function validateAge(age) {
  if (typeof age !== "number") throw new ValidationError("Age must be a number", "age");
  if (age < 0 || age > 150) throw new ValidationError("Age out of range", "age");
}

try {
  validateAge("not a number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(`Validation failed on field: ${error.field}`);
  } else {
    throw error;  // re-throw unexpected errors
  }
}

// Error handling in Promises
fetchData()
  .then(process)
  .catch(error => {
    if (error instanceof NetworkError) handleNetworkError(error);
    else throw error;
  });

// Global error handling
window.addEventListener("error", (e) => {
  console.error("Global error:", e.error);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason);
});
```

---

## 22. Modules (ES Modules)

```javascript
// math.js — EXPORTING
// Named exports
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// Default export (one per file)
export default class Calculator {
  add(a, b) { return a + b; }
}

// Re-export from another module
export { something } from "./other.js";
export * from "./utils.js";


// app.js — IMPORTING
// Named imports
import { PI, add, subtract } from "./math.js";

// Rename on import
import { add as sum } from "./math.js";

// Default import
import Calculator from "./math.js";

// Import all as namespace
import * as MathUtils from "./math.js";
MathUtils.add(1, 2);
MathUtils.PI;

// Mixed
import Calculator, { PI, add } from "./math.js";

// Dynamic import (lazy loading)
async function loadModule() {
  const { add } = await import("./math.js");
  console.log(add(1, 2));
}

// Conditional dynamic import
if (condition) {
  const module = await import("./heavy-module.js");
  module.doSomething();
}
```

---

## 23. Iterators & Generators

### Iterators

```javascript
// An object is iterable if it has [Symbol.iterator]() method
// Arrays, Strings, Maps, Sets, NodeLists are built-in iterables

const str = "hello";
const iterator = str[Symbol.iterator]();
iterator.next();  // { value: "h", done: false }
iterator.next();  // { value: "e", done: false }
// ...
iterator.next();  // { value: undefined, done: true }

// Custom iterable
const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        return current <= last
          ? { value: current++, done: false }
          : { value: undefined, done: true };
      }
    };
  }
};

for (const num of range) {
  console.log(num);  // 1, 2, 3, 4, 5
}

[...range];  // [1, 2, 3, 4, 5]
```

### Generators

```javascript
// Generator functions use function* and yield
function* count(start = 0) {
  while (true) {
    yield start++;   // pause and return value
  }
}

const counter = count(1);
counter.next();  // { value: 1, done: false }
counter.next();  // { value: 2, done: false }
counter.next();  // { value: 3, done: false }

// Finite generator
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
Array.from({ length: 8 }, () => fib.next().value);
// [0, 1, 1, 2, 3, 5, 8, 13]

// Generator for range
function* range(start, end, step = 1) {
  for (let i = start; i < end; i += step) {
    yield i;
  }
}

[...range(0, 10, 2)];  // [0, 2, 4, 6, 8]

// Async generator
async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const data = await fetch(`${url}?page=${page++}`).then(r => r.json());
    if (data.length === 0) return;
    yield data;
  }
}

for await (const page of fetchPages("/api/items")) {
  console.log(page);
}
```

---

## 24. Symbol, WeakMap, WeakSet

### Symbol

```javascript
// Unique, immutable primitive — often used as object keys
const id = Symbol("id");
const id2 = Symbol("id");
id === id2;  // false — always unique

const user = {
  name: "Alice",
  [id]: 123   // Symbol as property key — won't show in for...in or JSON.stringify
};

user[id];    // 123
Object.keys(user);  // ["name"] — Symbol keys hidden

// Well-known symbols
class MyArray {
  [Symbol.iterator]() { /* custom iteration */ }
  get [Symbol.toStringTag]() { return "MyArray"; }
}
```

### WeakMap & WeakSet

```javascript
// WeakMap — keys MUST be objects, held weakly (garbage collected when key gone)
const cache = new WeakMap();

function processUser(user) {
  if (cache.has(user)) return cache.get(user);  // return cached
  const result = expensiveComputation(user);
  cache.set(user, result);
  return result;
}
// When user object is removed, its WeakMap entry is GC'd automatically

// WeakSet — stores objects, no iteration (no size, no forEach)
const seen = new WeakSet();

function process(obj) {
  if (seen.has(obj)) return "Already processed";
  seen.add(obj);
  // ... process
}

// Map vs WeakMap
const map = new Map();      // any key type, iterable, has .size
const weakMap = new WeakMap(); // only object keys, not iterable, auto-GC

// Set vs WeakSet
const set = new Set([1,2,3]);    // any values, iterable
const weakSet = new WeakSet();    // only objects, not iterable, auto-GC
```

### Map and Set (ES6)

```javascript
// Map — key-value pairs, any key type, insertion-ordered
const map = new Map();
map.set("name", "Alice");
map.set(42, "the answer");
map.set({}, "object key");

map.get("name");   // "Alice"
map.has(42);       // true
map.size;          // 3
map.delete(42);
map.clear();

for (const [key, value] of map) {
  console.log(key, value);
}

// Set — unique values only
const set = new Set([1, 2, 2, 3, 3, 3]);
set;  // Set {1, 2, 3}

set.add(4);
set.has(3);    // true
set.delete(2);
set.size;      // 3

// Useful: Remove duplicates from array
const unique = [...new Set([1, 2, 2, 3, 3])];  // [1, 2, 3]
```

---

## 25. Proxy & Reflect

### Proxy

```javascript
// Proxy wraps an object and intercepts operations
const handler = {
  // Intercept property GET
  get(target, key, receiver) {
    console.log(`Getting ${key}`);
    return key in target ? Reflect.get(target, key, receiver) : `Property ${key} doesn't exist`;
  },

  // Intercept property SET
  set(target, key, value) {
    if (typeof value !== "number") throw new TypeError("Only numbers allowed");
    target[key] = value;
    return true;  // must return true on success
  },

  // Intercept 'in' operator
  has(target, key) {
    console.log(`Checking if ${key} exists`);
    return key in target;
  },

  // Intercept delete
  deleteProperty(target, key) {
    console.log(`Deleting ${key}`);
    delete target[key];
    return true;
  }
};

const data = new Proxy({ x: 1, y: 2 }, handler);
data.x;          // logs "Getting x", returns 1
data.z;          // "Property z doesn't exist"
data.x = 5;      // ok
data.x = "hi";   // TypeError

// Validation Proxy
function createValidator(target, schema) {
  return new Proxy(target, {
    set(obj, key, value) {
      if (schema[key]) {
        const { type, min, max } = schema[key];
        if (typeof value !== type) throw new TypeError(`${key} must be ${type}`);
        if (min !== undefined && value < min) throw new RangeError(`${key} must be >= ${min}`);
        if (max !== undefined && value > max) throw new RangeError(`${key} must be <= ${max}`);
      }
      obj[key] = value;
      return true;
    }
  });
}
```

### Reflect

```javascript
// Reflect provides methods mirroring Proxy traps
// Used to call default behavior inside proxy handlers

Reflect.get(target, key);           // target[key]
Reflect.set(target, key, value);    // target[key] = value
Reflect.has(target, key);           // key in target
Reflect.deleteProperty(target, key); // delete target[key]
Reflect.apply(fn, thisArg, args);   // fn.apply(thisArg, args)
Reflect.construct(Class, args);     // new Class(...args)
Reflect.ownKeys(target);            // all own keys including Symbols
```

---

## 26. Memory Management & Garbage Collection

```javascript
/*
  JS uses automatic Garbage Collection (GC).
  The main algorithm is Mark-and-Sweep:
  1. GC marks all "roots" (global variables, call stack)
  2. It traverses all reachable objects from roots
  3. Unreachable objects are swept (freed)
*/

// Memory Leaks — common causes:

// 1. Forgotten global variables
function leak() {
  leakyVar = "I'm global now!";  // missing var/let/const — attaches to window!
}

// 2. Event listeners not removed
function addListeners() {
  const handler = () => console.log("clicked");
  button.addEventListener("click", handler);
  // If button is removed from DOM but handler references it — memory leak
  // Fix: remove listeners when cleaning up
  return () => button.removeEventListener("click", handler);
}

// 3. Closures holding large objects
function createClosure() {
  const largeData = new Array(1000000).fill("data");
  return () => largeData[0];  // whole largeData is retained
}

// 4. Detached DOM nodes
let detachedNode;
function createNode() {
  const div = document.createElement("div");
  detachedNode = div;  // variable holds reference
  document.body.appendChild(div);
  document.body.removeChild(div);
  // div removed from DOM, but detachedNode still holds it in memory
}

// WeakRef — weak reference (ES2021)
const weakRef = new WeakRef(someObject);
const obj = weakRef.deref();  // undefined if GC'd, otherwise the object
if (obj) {
  obj.doSomething();
}
```

---

## 27. Event Loop & Concurrency

```javascript
/*
  JavaScript is SINGLE-THREADED but non-blocking.
  The Event Loop manages async operations.

  Execution order:
  1. SYNCHRONOUS code (call stack)
  2. MICROTASKS (Promise .then, queueMicrotask, MutationObserver)
  3. MACROTASKS (setTimeout, setInterval, I/O, UI render)
*/

console.log("1 — synchronous");

setTimeout(() => console.log("2 — setTimeout (macrotask)"), 0);

Promise.resolve()
  .then(() => console.log("3 — Promise (microtask)"))
  .then(() => console.log("4 — Promise chain (microtask)"));

queueMicrotask(() => console.log("5 — queueMicrotask"));

console.log("6 — synchronous");

// Output order:
// 1 — synchronous
// 6 — synchronous
// 3 — Promise (microtask)
// 4 — Promise chain (microtask)
// 5 — queueMicrotask
// 2 — setTimeout (macrotask)

/*
  Event Loop steps:
  1. Execute all sync code in call stack
  2. Process ALL microtasks (until queue is empty)
  3. Render (if needed)
  4. Process ONE macrotask
  5. Go to step 2

  This is why Promises (.then) always run before setTimeout!
*/

// requestAnimationFrame — runs before next paint (between macro/microtasks)
requestAnimationFrame(() => {
  // Run animation logic at ~60fps
});
```

---

## 28. Design Patterns in JS

### Module Pattern

```javascript
const UserModule = (() => {
  let _users = [];  // private

  return {
    addUser(user) { _users.push(user); },
    removeUser(id) { _users = _users.filter(u => u.id !== id); },
    getUsers() { return [..._users]; }
  };
})();
```

### Singleton Pattern

```javascript
class Database {
  static #instance = null;

  constructor(connectionString) {
    if (Database.#instance) return Database.#instance;
    this.connection = connectionString;
    Database.#instance = this;
  }

  static getInstance(cs) {
    return Database.#instance ?? new Database(cs);
  }
}
```

### Observer Pattern

```javascript
class EventEmitter {
  #listeners = {};

  on(event, listener) {
    if (!this.#listeners[event]) this.#listeners[event] = [];
    this.#listeners[event].push(listener);
    return () => this.off(event, listener);  // unsubscribe
  }

  off(event, listener) {
    this.#listeners[event] = this.#listeners[event]?.filter(l => l !== listener);
  }

  emit(event, ...args) {
    this.#listeners[event]?.forEach(listener => listener(...args));
  }
}

const emitter = new EventEmitter();
const unsubscribe = emitter.on("data", (data) => console.log(data));
emitter.emit("data", { id: 1 });
unsubscribe();
```

### Factory Pattern

```javascript
class UserFactory {
  static create(type, data) {
    switch (type) {
      case "admin":  return new AdminUser(data);
      case "guest":  return new GuestUser(data);
      default:       return new RegularUser(data);
    }
  }
}
const user = UserFactory.create("admin", { name: "Alice" });
```

### Strategy Pattern

```javascript
class Sorter {
  constructor(strategy) { this.strategy = strategy; }
  sort(data) { return this.strategy(data); }
}

const bubbleSort = arr => { /* ... */ };
const quickSort = arr => { /* ... */ };

const sorter = new Sorter(quickSort);
sorter.sort([3, 1, 4, 1, 5]);
```

---

## 29. Functional Programming in JS

### Core Concepts

```javascript
// 1. Pure Functions — same input always gives same output, no side effects
const add = (a, b) => a + b;  // pure
let count = 0;
const impure = (x) => { count += x; return count; };  // impure (modifies external state)

// 2. Immutability — don't modify, create new
// Bad: mutation
const arr = [1, 2, 3];
arr.push(4);  // mutates

// Good: new array
const newArr = [...arr, 4];

// 3. Function Composition — combine small functions into larger ones
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const double = x => x * 2;
const addOne = x => x + 1;
const square = x => x ** 2;

const transform = pipe(double, addOne, square);
transform(3);  // square(addOne(double(3))) = square(addOne(6)) = square(7) = 49

// 4. Currying — transform f(a,b,c) into f(a)(b)(c)
const curry = fn => {
  const arity = fn.length;
  return function curried(...args) {
    if (args.length >= arity) return fn(...args);
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
};

const add3 = curry((a, b, c) => a + b + c);
add3(1)(2)(3);   // 6
add3(1, 2)(3);   // 6
add3(1)(2, 3);   // 6

// 5. Memoization — cache results
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

const expensiveCalc = memoize((n) => {
  console.log("Computing...");
  return n ** 2;
});

expensiveCalc(5);  // "Computing..." → 25
expensiveCalc(5);  // 25 (cached, no log)

// 6. Partial Application
const partial = (fn, ...presetArgs) => (...laterArgs) => fn(...presetArgs, ...laterArgs);

const multiply = (a, b) => a * b;
const double = partial(multiply, 2);
double(5);   // 10
double(10);  // 20
```

---

## 30. Interview Questions

### 🔴 Core JavaScript

**Q1. What is the difference between `==` and `===`?**
> `==` is loose equality — it allows type coercion before comparing (`"5" == 5` is `true`). `===` is strict equality — no coercion, both value AND type must match (`"5" === 5` is `false`). Always use `===` unless you specifically need type coercion.

**Q2. What are the falsy values in JavaScript?**
> There are exactly 6 falsy values: `false`, `0`, `""` (empty string), `null`, `undefined`, and `NaN`. Everything else is truthy — including `"0"`, `[]`, `{}`, `-1`.

**Q3. What is the difference between `null` and `undefined`?**
> `undefined` means a variable was declared but not assigned. `null` is an intentional absence of value — explicitly set by the developer. `typeof null` is `"object"` (historical bug). `null == undefined` is `true`, but `null === undefined` is `false`.

**Q4. What is hoisting? How does it differ for `var`, `let`, and functions?**
> Hoisting moves declarations to the top of their scope. Function declarations are fully hoisted (callable before definition). `var` is hoisted but initialized as `undefined`. `let` and `const` are hoisted but NOT initialized — accessing them before declaration causes a `ReferenceError` (Temporal Dead Zone).

**Q5. Explain closures and give a practical use case.**
> A closure is a function that retains access to its lexical scope even after the outer function has returned. Use cases: data privacy (counter module), factory functions, memoization, partial application, and event handlers that remember data from their creation scope.

**Q6. What is the difference between `call`, `apply`, and `bind`?**
> All three set `this` explicitly. `call(context, arg1, arg2)` invokes immediately with individual args. `apply(context, [arg1, arg2])` invokes immediately with an args array. `bind(context, arg1)` returns a NEW function with `this` permanently set — doesn't invoke immediately.

**Q7. How does the Event Loop work?**
> JS is single-threaded with a call stack. Async callbacks go into task queues. The Event Loop continuously checks: if the call stack is empty, process ALL microtasks (Promises), then render, then process ONE macrotask (setTimeout/setInterval). Microtasks always have priority over macrotasks.

**Q8. What is the difference between Promises and async/await?**
> They solve the same problem (async operations) differently. Promises use `.then()/.catch()` chains. Async/await is syntactic sugar over Promises that makes code look synchronous and is easier to read/debug. Both ultimately work the same way under the hood. `async/await` makes error handling with `try/catch` more intuitive.

**Q9. What is event delegation and why is it useful?**
> Event delegation is attaching one event listener to a parent element rather than many listeners to individual children. It works because events bubble up. Benefits: fewer listeners (better performance), works for dynamically added elements, simpler cleanup.

**Q10. What is the difference between `deep copy` and `shallow copy`?**
```javascript
// Shallow copy — copies references for nested objects
const shallow = { ...original };
const shallow2 = Object.assign({}, original);
// Modifying shallow.nested ALSO modifies original.nested!

// Deep copy — completely independent copy
const deep = JSON.parse(JSON.stringify(original));  // lossy (no functions, undefined, etc.)
const deep2 = structuredClone(original);  // modern, handles more types
```

**Q11. What are Promises and what are their states?**
> A Promise represents the eventual result of an async operation. States: **pending** (initial), **fulfilled** (success, resolved with value), **rejected** (failure, rejected with reason). Once settled (fulfilled or rejected) it cannot change state.

**Q12. Explain `prototype` and the prototype chain.**
> Every JS object has a hidden `[[Prototype]]` link to another object. When you access a property not found on the object, JS walks up the prototype chain until it finds it or reaches `null`. This is how inheritance works in JS — methods on `Animal.prototype` are shared by all `Animal` instances.

---

### 🔵 Intermediate

**Q13. What is the difference between `map`, `filter`, and `reduce`?**
> `map` transforms each element and returns a new array of the same length. `filter` returns a new array containing only elements that pass a test. `reduce` accumulates all elements into a single value (sum, object, array — anything).

**Q14. What is the Temporal Dead Zone (TDZ)?**
> The TDZ is the period between when `let`/`const` variables are hoisted and when they're initialized. Accessing them during this period throws a `ReferenceError`. It starts at the beginning of the block and ends at the declaration line.

**Q15. What's the difference between `forEach` and `map`?**
> `forEach` iterates and returns `undefined` — used for side effects. `map` iterates, transforms each element, and returns a new array. You can't break out of `forEach`. Neither `map` nor `forEach` modify the original array (though callbacks can).

**Q16. What is memoization?**
> Memoization caches the results of function calls. When called with the same arguments again, it returns the cached result instead of recomputing. It trades memory for speed and is useful for expensive pure functions.

**Q17. What are generators and when would you use them?**
> Generators are functions that can be paused and resumed using `yield`. They return an iterator. Use cases: lazy evaluation of infinite sequences, implementing custom iterables, managing async flow (before async/await), and data streaming.

**Q18. What is the difference between `WeakMap` and `Map`?**
> Map can have any key type, is iterable, and maintains strong references (keys won't be GC'd). WeakMap only accepts object keys, is not iterable, and holds weak references — when a key object has no other references, it can be garbage collected, automatically removing the WeakMap entry. Useful for private data and caching.

---

### 🟢 Advanced

**Q19. What is a Proxy? Give a use case.**
> Proxy wraps an object and intercepts fundamental operations (get, set, delete, etc.) via "traps". Use cases: validation (enforce types on set), logging, auto-default values, implementing reactive data systems (like Vue's reactivity), and creating read-only objects.

**Q20. Explain the difference between microtasks and macrotasks.**
> Macrotasks (setTimeout, setInterval, I/O) are processed one at a time, with microtask processing between each. Microtasks (Promise.then, queueMicrotask, MutationObserver) are processed ALL at once immediately after the current synchronous code finishes, before any macrotask. This is why `Promise.then` always runs before `setTimeout(() => {}, 0)`.

**Q21. What is tail call optimization?**
> TCO is a JS engine optimization where a function call in "tail position" (last thing before returning) reuses the current stack frame instead of adding a new one, preventing stack overflow in recursive functions. Supported in strict mode in some engines: `function factorial(n, acc = 1) { "use strict"; return n <= 1 ? acc : factorial(n - 1, n * acc); }`

**Q22. What is currying? How is it useful?**
> Currying transforms a function with multiple args `f(a,b,c)` into a chain of single-arg functions `f(a)(b)(c)`. Benefits: partial application (create specialized functions), function composition, and reusability. Example: a curried `filter(predicate)(array)` lets you create reusable predicates like `filterEven = filter(x => x % 2 === 0)`.

**Q23. Explain memory leaks in JavaScript and how to prevent them.**
> Common causes: forgotten global variables, uncleaned event listeners, closures retaining large objects, circular references, and detached DOM nodes still referenced in JS. Prevention: always remove event listeners on cleanup, use WeakMap/WeakRef for caches, avoid globals, nullify references when done.

**Q24. What is the difference between `structuredClone` and `JSON.parse(JSON.stringify())`?**
> `JSON.parse(JSON.stringify())` is lossy — it cannot handle `undefined`, functions, `Symbol`, `Date` objects (converts to strings), `RegExp`, circular references (throws error). `structuredClone()` (modern API) handles `Date`, `Map`, `Set`, `ArrayBuffer`, and circular references correctly, but still cannot clone functions.

**Q25. What are WeakRef and FinalizationRegistry?**
> `WeakRef` holds a weak reference to an object — doesn't prevent GC. Use `.deref()` to access it (returns `undefined` if collected). `FinalizationRegistry` lets you register a callback that fires when an object is garbage collected. Both are for advanced memory management — use rarely.

**Q26. What is function composition and how does it relate to FP?**
> Composition combines two or more functions where output of one is input of the next. `compose(f, g)(x) = f(g(x))` (right-to-left). `pipe(f, g)(x) = g(f(x))` (left-to-right). It's fundamental to functional programming — building complex operations from simple, pure, reusable functions.

**Q27. Explain the differences between `for...in` and `for...of`.**
> `for...in` iterates over **enumerable property keys** of an object (including inherited ones — use `hasOwnProperty` check). `for...of` iterates over **values** of iterables (arrays, strings, Maps, Sets, generators). Don't use `for...in` on arrays — use `for...of` or `forEach` instead.

**Q28. What happens when you use `new` with a function?**
> The `new` keyword: 1) Creates a new empty object, 2) Sets its `[[Prototype]]` to the function's `prototype` property, 3) Executes the function with `this` = the new object, 4) Returns the new object (unless the function explicitly returns another object).

**Q29. How does `async/await` error handling differ from Promise chains?**
> In Promise chains, `.catch()` at the end catches any rejection. In async/await, you use `try/catch` blocks — much more readable and mirrors synchronous error handling. You can also mix them: `const data = await fetch(url).catch(handleError)` for inline error handling of specific awaits.

**Q30. What are the differences between ES Modules and CommonJS?**

| Feature | ES Modules | CommonJS |
|---|---|---|
| Syntax | `import/export` | `require/module.exports` |
| Loading | Static (analyzed at parse time) | Dynamic (runtime) |
| Async | Yes (top-level await) | No |
| Tree-shaking | Yes (static analysis) | No |
| `this` at top level | `undefined` | `module.exports` |
| Use in browser | Yes (native) | No (needs bundler) |

---

> 💡 **Pro Tips for Interviews:**
> - Always mention edge cases (e.g., `typeof null === "object"`)
> - Draw the Event Loop when explaining async
> - Use real-world examples for closures, prototypes, and design patterns
> - Know the difference between concepts and their practical applications
> - Understand WHY things work, not just WHAT they do

---

*Last Updated: 2025 | JavaScript ES2022+ | All major concepts covered*
