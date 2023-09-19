# Server

TBD

## Server class

TBD

## Development mode

The [`trillo`](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/cli/README.md) command and [`Server`](server.md#server-class) objects initialized with the `devmode = true` start a local Trillo server in development mode, which means will:

* automatically recompile pages whose overall source code is modified, including [`<:import>`](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/preprocessor/README.md#import)-ed and [`<:include>`](https://github.com/reflectjs/reflectjs-doc/blob/main/markdown/reference/preprocessor/README.md#include)-d sources, recursively
* automatically update route mapping based on the [`:URLPATH`](server.md#urlpath) directives in modified pages
* deliver page-specific code as a separated `.js` file with sourcemap
* optionally, inject autorefresh code
* add support for `__noclient` and `__noserver` HTTP parameters

## Server values

### URLPATH
