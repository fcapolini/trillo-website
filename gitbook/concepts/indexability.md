# Indexability

As shown in [Reactivity](https://trillojs.dev/docs/concepts/reactivity), page logic starts executing in the server at page delivery, for populating it with a valid content, and continues in the client, to support user interaction.

This contrasts with how traditional reactive frameworks work: they where designed to populate pages directly in the client, although all of the main frameworks now have options to implement what is known as SSR, or server-side rendering, to behave like Trillo does by design.

Unfortunately these are retrofitted solutions which add to the intrinsic complexity these frameworks already suffer from. As an example, [here are some up-to-date instructions](https://codedamn.com/news/reactjs/server-side-rendering-reactjs) for enabling SSR with React.

As you can see it's a rather long set of instructions, and it requires writing a specific server-side component for good measure. This is how exactly the same result can be achieved in a Trillo page:

```html
<html>
<body>
  <div :count="[[0]]">
    <h1>Hello from Server-Side Rendered React App!</h1>
    <p>Counter: [[count]]</p>
    <button :on-click="[[() => count++]]">Increment</button>
  </div>
</body>
</html>
```
