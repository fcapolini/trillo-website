# Overview

Using a traditional reactive web framework like [Angular](https://angular.io/), [React](https://react.dev/) or [Vue.js](https://vuejs.org/) can be pretty involved.

Trillo is a groundbreaking alternative which strives for simplicity:

1. it turns HTML itself into a [reactive language](reactivity.md),
2. it generates fully [indexable pages](https://docs.trillojs.dev/en/topics/indexability) out of the box,
3. it lets you create your own [custom tags](https://docs.trillojs.dev/en/topics/reusability),
4. it makes it easy to create your own [component libraries](https://docs.trillojs.dev/en/topics/kits).

It's implemented as a customizable [Express](https://expressjs.com/) server for [Node.js](https://nodejs.org/). It augments HTML with `:`-prefixed [attributes](https://trillojs.gitbook.io/docs/reference/language#values), `[[...]]` [expressions](https://trillojs.gitbook.io/docs/reference/language#expressions), and `<:...>` [directives](https://trillojs.gitbook.io/docs/reference/preprocessor), and it's easy to pick up.

Page-specific JavaScript code for both the client and the server is compiled on the fly as needed — you only have to focus on page logic and the server takes care of the rest, no matter what IDE or code editor you're using.

Trillo removes all the boilerplate associated with JS-oriented reactive  frameworks, while still encouraging good practices and code reuse. You'll be surprised at how effective it can be.
