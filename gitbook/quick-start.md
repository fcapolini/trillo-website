# Quick Start

## Installation

> Trillo requires Node.js >= v.16. If you don't have it on you machine, download it from the [Node.js site](https://nodejs.org/en) and install it before proceeding.

```sh
npm install -g trillo
```

Once installed, we can use the [`trillo`](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/cli/README.md) command to start a [development server](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/server/README.md).

## Hello World

```sh
mkdir myapp
trillo serve myapp
# ... http://localhost:3000
```

We can add a simple page...

```html
<!-- myapp/index.html -->
<html>
  <body :count="[[0]]"
        :did-init="[[
          setInterval(() => count++, 1000);
        ]]">
    Seconds: [[count]]
  </body>
</html>
```

...and open [http://localhost:3000](http://localhost:3000/) to see the seconds counter live.

> If you look at the page source received by the browser you'll notice it contains the text "Seconds: 0". This shows that page logic is executed once in the server in order to deliver content-ready pages, and then transferred to the client to support local updates and user interaction: Trillo supports [isomorphism](https://en.wikipedia.org/wiki/Isomorphic\_JavaScript) out of the box.

## Use in a project

Let's create a demo project:

```sh
mkdir myproject
cd myproject
npm init -y
npm install trillo
mkdir docroot
```

We need to add an entry point with our configuration:

```js
// index.js
const trillo = require('trillo');
const path = require('path');

new trillo.Server({
  port: 3001,
  rootPath: path.join(__dirname, 'docroot'),
});
```

In TypeScript we can use imports instead:

```ts
// index.ts
import { Server } from 'trillo';
import path from 'path';

new Server({
  port: 3001,
  rootPath: path.join(__dirname, 'docroot'),
});
```

We can now create a page in `docroot/`:

```html
<!-- index.html -->
<html>
  <body>
    Good [[
      new Date().getHours() <= 12
          ? 'morning'
          : 'evening'
    ]]!
  <body>
</html>
```

And we can run the project:

```sh
node index.js
# ... START http://localhost:3001When using Trillo in a project we can customize it and add our own services and middleware to the server. All options are documented in the .
```

> When using Trillo in a project we can customize it and add our own services and middleware to the server. All options are documented in the [Server Reference](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/server/README.md).
