# Server

TBD

## Server class

TBD

## Development mode

The [`trillo`](https://trillojs.dev/docs/reference/cli) command and [`Server`](https://trillojs.dev/docs/reference/server#server-class) objects initialized with the `devmode = true` start a local Trillo server in development mode, which means will:

* automatically recompile pages whose overall source code is modified, including [`<:import>`](https://trillojs.dev/docs/reference/preprocessor#import)-ed and [`<:include>`](https://trillojs.dev/docs/reference/preprocessor#include)-d sources, recursively
* automatically update route mapping based on the [`:URLPATH`](https://trillojs.dev/docs/reference/server#urlpath) directives in modified pages
* deliver page-specific code as a separated `.js` file with sourcemap
* optionally, inject autorefresh code
* add support for `__noclient` and `__noserver` HTTP parameters

## Server values

### URLPATH
