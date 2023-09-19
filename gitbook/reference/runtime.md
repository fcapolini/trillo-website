# Runtime

Trillo's runtime reserves special treatment to the following [logic values](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/language/README.md#values).

## Special values

These are declared in HTML as any other logic value, e.g. `<div :hidden="[[false]]">`, but they have a special meaning.

### aka

TBD

### hidden

TBD

### data

TBD

### dataOffset

TBD

### dataLength

TBD

### nestFor

TBD

### nestIn

TBD

## Special prefixes

Values using special prefixes have special meanings based on the prefix itself. We can specify them in HTML code using the prefix followed by `-` (dash), and we can access them from JavaScript using the prefix followed by `_` (underscore).

### attr

Normal HTML attribute that have an [expression](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/language/README.md#expressions) in their value are available with this prefix in tag's [scope](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/language/README.md#scopes). E.g.:

```html
<html lang="[['en']]">
```

will add a value `attr_lang` in the root scope.

### on

These values contain event listeners for DOM events. E.g.:

```html
<body :on-click="[[(ev) => ...]]">
```

will assign the listener function to value on\_click in tag's [scope](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/language/README.md#scopes), and will register it with its underlying DOM element.

Using `:on-` attributes for registering DOM event handlers is recommended, so scopes can be added and removed as needed, with their event listener properly registered and unregistered, when [replicating](runtime.md#data) scopes or when using [conditional blocks](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/stdlib/README.md).

> `:on-` event listeners are not related to the legacy `on...` HTML attributes, and are implemented with `addEventListener()` behind the scenes.

### handle

These values contain handler expressions which are executed when and only when some other value changes. E.g.:

```html
<body :count="[[0]]"
      :mode="increment"
      :handle-count="[[
        console.log(count, mode);
      ]]">
</body>
```

The handler will only be executed only when `count` changes (including when it's initialized). Changes of the mode value won't execute it.

This is in contrast with how reactive expressions normally work: they are re-evaluated when any of the values they reference changes.

### class

These values let us add and remove class names in a scope's underlying DOM element.

TBD

### style

TBD

### did

TBD

### will

TBD

## Implementation values

TBD

### \_\_id

TBD

### \_\_dom

TBD

### \_\_scope

TBD

### \_\_outer

TBD

### \_\_elementIndex

TBD

### \_\_isLastElement

TBD

### \_\_mixColors

TBD

### \_\_regexMap

TBD
