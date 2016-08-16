# React-TSX
React-TSX is a typescript library that makes writing compiled react code using Typescript simple and look very close to html, if it were functional programming.

## Reason for react-tsx
The reason react-tsx was created is that Typescript does not always play well with jsx,
and at the time I started learning React it was almost impossible to use both. I personally do not like
the look, feel, syntax, and the extra build step that is required to use jsx.
## Screw IDEs I only code in vim, nano, less, vi, etc..
You need to manually add the following to your files section of your tsconfig.json
```json
"files":[
  "path-to-src/entry-file.tsx",
  "path-to-src/all-other-src-files.tsx",
  "node_modules/react-tsx/js/index.d.ts",
  "node_modules/react-tsx/js/src/react-tsx.d.ts",
  "node_modules/react-tsx/ts/typings/globals/react-tap-event-plugin/index.d.ts",
  "node_modules/react-tsx/ts/typings/globals/react/index.d.ts",
  "node_modules/react-tsx/ts/typings/index.d.ts",
  "node_modules/react-tsx/ts/typings/modules/react-dom/index.d.ts",
  "node_modules/react-tsx/ts/typings/modules/react-router/index.d.ts"
]
```
## Using react-tsx in a project with IDE re-write
If you are taking advantage of your IDE all you need is a properly configured tsconfig.json

### List of IDEs I know of
 * Atom
 * Visual Studio
 * Visual Studio Code
 * WebStorm

### IDE re write
```json
"your-ide": {
    "rewriteTsconfig": true
}
```

### compilerOptions
The required compiler options you can use es5 or es6, it's your choice!
```json
"compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "isolatedModules": false,
    "moduleResolution": "node",
    "jsx": "react"
}
```

### filesGlob if you are using a supported IDE
The last line in the fileGlobs is what picks up react.d.ts, react-dom.d.ts, react-router.d.ts, and react-tap-event-plugin.d.ts. This is so you do not have to deal with the definition files and can use import React = require("react") etc. anywhere.
```json
"filesGlob": [
        "<insert path to source dir/>/**/*.ts",
        "<insert path to source dir/>/**/*.tsx",
        "<insert path to node_modules/>/react-tsx/**/*.d.ts"
    ],
```
### My starter tsconfig.json
Please note that I did not fill out files:[], my IDE did!
```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "isolatedModules": false,
        "moduleResolution": "node",
        "jsx": "react",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "declaration": false,
        "noImplicitAny": false,
        "removeComments": true,
        "sourceMap": true,
        "noLib": false,
        "preserveConstEnums": true,
        "suppressImplicitAnyIndexErrors": true
    },
    "filesGlob": [
        "src/**/*.ts",
        "src/**/*.tsx",
        "node_modules/react-tsx/**/*.d.ts"
    ],
    "compileOnSave": true,
    "buildOnSave": false,
    "files": [
        "src/index.tsx",
        "node_modules/react-tsx/js/index.d.ts",
        "node_modules/react-tsx/js/src/react-tsx.d.ts",
        "node_modules/react-tsx/ts/typings/globals/react-tap-event-plugin/index.d.ts",
        "node_modules/react-tsx/ts/typings/globals/react/index.d.ts",
        "node_modules/react-tsx/ts/typings/index.d.ts",
        "node_modules/react-tsx/ts/typings/modules/react-dom/index.d.ts",
        "node_modules/react-tsx/ts/typings/modules/react-router/index.d.ts"
    ],
    "atom": {
        "rewriteTsconfig": true
    }
}

```

## Bundlign Time: Browserify, Webpack, etc..
You will need to use a commonjs bundler, this is agnostic so pick your poison.

## Full Example
For a full example please see my example using react-toolbox(http://react-toolbox.com/#/) and webpack (https://github.com/Thecavepeanut/react-tsx-basic-example)

## Basic Example With No JSX
```ts
import {Props, Component, el, ul, li, div, table, thead, th, tbody, tr, td} from "react-tsx";

interface MyComponentProps extends Props {

}

interface MyComponentState {

}

class MyComponent extends Component<MyComponentProps, MyComponentState>{
  render() {
    return div({ className: "my-component-wrapper" },
      ul({},
        li({}, "1"),
        li({}, "2"),
        li({ onClick: () => { alert("you clicked 3") } }, "3")
      ),
      table({ className: "my-component-table" },
        thead({},
          tr({},
            th({}, "header 1"),
            th({}, "header 2"),
            th({}, "header 3")
          )
        ),
        tbody({},
          tr({},
            td({}, "cell 1-1"),
            td({}, "cell 1-2"),
            td({}, "cell 1-3")
          ),
          tr({},
            td({}, "cell 2-1"),
            td({}, "cell 2-2"),
            td({}, "cell 2-3")
          )
        )
      )
    )
  }
}
```
### If Are Using JSX (\*.tsx) import React
The compiled jsx will compile down to React.createElement thus you need to import React at the top of your files!
```ts
import React = require("react");
```
Example Source ex.tsx:
```jsx
<div class="my-awesome-div"></div>
```
Now compiled ex.js:
```js
React.createElement("div", {className:"my-awesome-div"})
```
