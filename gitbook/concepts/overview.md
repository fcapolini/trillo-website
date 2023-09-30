# Overview

Using a traditional reactive web framework like [Angular](https://angular.io/), [React](https://react.dev/) or [Vue.js](https://vuejs.org/) makes web development more akin to desktop development.

It requires a full blown software project for even the simpler projects, with dependencies, build scripts and so on. Plus, it takes quite a while to become proficient with their programming model.

Trillo is a groundbreaking alternative which tries to restore as much simplicity as possible while preserving the advantages of a reactive framework:

1. it turns HTML itself into a [reactive language](https://trillojs.dev/docs/concepts/reactivity),
2. it generates fully [indexable pages](https://trillojs.dev/docs/concepts/indexability) out of the box,
3. it makes it trivial to create your own [custom tags](https://trillojs.dev/docs/concepts/reusability),
4. it makes it easy to create your own [component libraries](https://trillojs.dev/docs/concepts/kits).

It's implemented as a customizable [Express](https://expressjs.com/) server for [Node.js](https://nodejs.org/). It augments HTML with `:`-prefixed [attributes](https://trillojs.dev/docs/reference/language#1-logic-values-), `[[...]]` [expressions](https://trillojs.dev/docs/reference/language#2-reactive-expressions-), and `<:...>` [directives](https://trillojs.dev/docs/reference/preprocessor), and it's easy to pick up.

Page-specific JavaScript code for both the client and the server is compiled on the fly as needed — you only have to focus on page logic and the server takes care of the rest, no matter what IDE or code editor you're using.

Trillo removes all the boilerplate associated with JS-oriented reactive  frameworks, while still encouraging good practices and code reuse. You'll be surprised at how effective it can be.
