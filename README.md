# React-TSX
React-TSX is a typescript library that makes writing compiled react code using Typescript simple and look very close to html, if it were functional programming.

## Reason for react-tsx
The reason react-tsx was created is that Typescript does not always play well with jsx,
and at the time I started learning React it was almost impossible to use both. I personally do not like
the look, feel, syntax, and the extra build step that is required to use jsx.

## Example



```ts
import {Props, el, ul, li, div, table, thead, th, tbody, tr, td} from "react-tsx";
import React = require("react");

interface MyComponentProps extends Props {

}

interface MyComponentState {

}

class MyComponent extends React.Component<MyComponentProps, MyComponentState>{
  render() {
    div({ className: "my-component-wrapper" },
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
