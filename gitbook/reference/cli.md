# CLI

Once installed, Trillo provides the `trillo` command:

```sh
npm install -g trillo
mkdir myapp
echo "<html><body>it's [[new Date()]]</body></html>" > myapp/index.html
trillo serve myapp
# ... http://localhost:3000
```

The `serve` option launches a [development server](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/server/README.md#development-mode) serving pages from the given directory, as an easy way to develop Trillo pages, and includes the ability to auto reload the browser on changes.

> The `trillo` command is only intended as a development tool.
