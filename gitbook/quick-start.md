# Quick Start

## Installation

> Trillo requires Node.js >= v.16. If you don't have it on you machine, download it from the [Node.js site](https://nodejs.org/en) and install it before proceeding.

```sh
npm install -g trillo
```

Once installed, we can use the [`trillo serve`](https://trillojs.dev/docs/reference/cli) command to start a [development server](https://trillojs.dev/docs/reference/server#development-mode).

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

In TypeScript (or ES6 code) we can use imports instead:

```ts
// index.ts
import { Server } from 'trillo';
import path from 'path';

new Server({
  port: 3001,
  rootPath: path.join(__dirname, 'docroot'),
});
```

We can now create a page in `docroot/` like shown above and run the project:

```sh
node index.js
# ... START http://localhost:3001
```

> When using Trillo in a project we can customize it and add our own services and middleware to the server. All options are documented in the [Server Reference](https://trillojs.dev/docs/reference/server).
