### Express 

- robust routing
- focus on higt performance

[https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)

`npm install express`

---

### OpenAI

- The OpenAI API provides a consistent interface to state-of-the-art AI models for text generation, natural language processing, computer vision, and more.

[https://developers.openai.com/api/docs/quickstart](https://developers.openai.com/api/docs/quickstart)

`npm install openai`

---

### dotenv

- Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

[https://www.npmjs.com/package/dotenv](https://www.npmjs.com/package/dotenv)

`npm install dotenv`

---

### ws: a Node.js WebSocket library

- ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation.
- This module does not work in the browser. 
- The client in the docs is a reference to a backend with the role of a client in the WebSocket communication. 
- Browser clients must use the native WebSocket object.

[https://www.npmjs.com/package/ws](https://www.npmjs.com/package/ws)

`npm install ws`

---

## Modules

JavaScript was originally designed for browsers without any module system.As it evolved, two different, incompatible module standards emerged:

- **CommonJS (CJS):** Node.js's original, default module system using require() and module.exports.
- **ES Modules (ESM):** The official ECMAScript standard used in modern browsers and modern Node.js using import and export.

### CommonJS
- CommonJS is a module system used in JavaScript
- Before modern JavaScript had built-in modules, CommonJS was developed (most famously adopted by Node.js) to allow developers to break code into reusable files and import/export functions, objects, or primitives between them.

#### Key characteristics:

- Syntax: Uses module.exports or exports to share code, and require() to import it.
- Loading Mechanism: Synchronous (blocking). Code executes sequentially when require() is called, which makes it ideal for server-side environments like Node.js, but less ideal for synchronous browser environments without a bundler (like Webpack or Vite).
- Execution: Modules are executed once when required and cached for subsequent calls.

**Even though both commonJS and ESM are module systems, Node.js needs a way to know how to parse and execute your .js files before running them. Because their underlying parsing and execution mechanics are fundamentally different (ESM is parsed statically before code runs, while CommonJS is loaded dynamically at runtime), Node.js cannot automatically guess which syntax a standard .js file contains.**

The "type" field in package.json serves as an explicit configuration switch for all .js files in that package directory:

- `"type": "commonjs"` (or omit "type"): Treats every .js file as CommonJS. You must use require() and module.exports.
- `"type": "module"`: Treats every .js file as ES Modules. You must use import and export.

#### File Extension Overrides

If you need to mix both module types within the same project, file extensions take priority over the package.json "type" field:

- `.cjs` – Always treated as CommonJS, regardless of package.json.
- `.mjs` – Always treated as ES Modules, regardless of package.json.
- `.js` – Follows whatever "type" is configured in package.json.

---

- package.json file in order to make sure we mark our package as private. This is to prevent an accidental publish of your code.
- add "type": "module" so that Node.js treats .js files in this project as ES modules.