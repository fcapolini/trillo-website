# Reactivity

Trillo augments HTML to include:

* `:`-prefixed attributes, to declare logic values,
* `[[...]]` blocks, to declare reactive JavaScript expressions.

Let's see what this looks like in practice. Make sure you [installed Trillo](https://trillojs.dev/docs/quick-start#installation), than create a directory `myapp` containing this `index.html` file:

```html
<html :color="red">
  <head>
    <style>
      button {
        background-color: [[color]];
      }
    </style>
  </head>
  <body>
    <button :on-click="[[() => color = (color === 'red' ? 'green' : 'red')]]">
      Click to change this [[color]] color!
    </button>
  </body>
</html>
```

We can now serve the page with the `trillo serve myapp` command.

This page displays a red button with text "Click to change this red color!". When you click it, it becomes green with text "Click to change this green color!". If you click it again it gets back to its initial state and so on.

As you can see, `:` values and `[[...]]` expressions are _reactive_, meaning that changes to values are automatically reflected in all expressions where they are referenced.

In the delivered page there's no `:`-prefixed attributes and no `[[color]]` blocks. Rather, there is some page-specific JavaScript code that implements their behaviour.

This page-specific code starts executing in the server, to provide the page with a valid initial content, and then it goes on in the client as needed to continue page logic execution.

If you change e.g. `"red"` to `"blue"` in the first line you’ll see that, because we’re using Trillo’s development server, the browser is automatically refreshed after source changes.

You may have noticed that reactivity in Trillo extends to styling. While this shouldn't be overused, it makes for a much better integrated and more cohesive programming model.

There's no need for another tool and another syntax to preprocess your stylesheets. Plus, all visual aspects of your page, implemented via CSS or not, can be driven by the same set of values.

There is of course much more to reactivity than this first example can show. You can learn all there is to know in the [Reference](https://trillojs.dev/docs/reference/language).
