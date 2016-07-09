import React = require("react");

/*
 * This is the base properties all react components can have
 */
export interface Props extends React.HTMLAttributes, React.ClassAttributes<any> {
}

/**
 * Extra propeties that are specific to the certain html tags
 */
export interface imgProps extends Props {
  src: string; //img always requires a src property
  width?: number | string;
  height?: number | string;
}

export type El = (props: Props, ...children: any[]) => React.ReactElement<any>
//TODO Fill out other tags like that have specific properties

/**
 * Our base element creator, this one should be used externally to render any React.ComponentClass<P>;
 * @type {(function(string, P=, ...[ReactNode]): DOMElement<P>)|(function(ClassicComponentClass<P>, P=, ...[ReactNode]): ClassicElement<P>)|(function((ComponentClass<P>|StatelessComponent<P>), P=, ...[ReactNode]): ReactElement<P>)}
 */
export var el = React.createElement;
function expand(tag: string, props: any, children: any[]): React.ReactElement<any> {
  children.unshift(tag, props);
  return el.apply(null, children);
}

export class Component<P extends Props, S> extends React.Component<P,S>{};

/**********************************************************
 *                     BASIC ELEMENTS                     *
 **********************************************************/
export var a: El = (props, ...children) => {
    return expand("a", props, children);
  };
export var article: El = (props, ...children) => {
  return expand("article", props, children);
};
export var section: El = (props, ...children) => {
  return expand("section", props, children);
};
export var aside: El = (props, ...children) => {
  return expand("aside", props, children);
};
export var div: El = (props, ...children) => {
  return expand("div", props, children);
};
export var p: El = (props, ...children) => {
  return expand("p", props, children);
};
export var span: El = (props, ...children) => {
  return expand("span", props, children);
};
/**********************************************************
 *                        BUTTONS                         *
 **********************************************************/
export var button: El = (props, ...children) => {
  return expand("button", props, children);
};
/**********************************************************
 *                         FORMS                          *
 **********************************************************/
export var form: El = (props, ...children) => {
  return expand("form", props, children);
};
export var input: El = (props, ...children) => {
  return expand("input", props, children);
};
/**********************************************************
 *                       HEADERS                          *
 **********************************************************/
export var h1: El = (props, ...children) => {
  return expand("h1", props, children);
};
export var h2: El = (props, ...children) => {
  return expand("h2", props, children);
};
export var h3: El = (props, ...children) => {
  return expand("h3", props, children);
};
export var h4: El = (props, ...children) => {
  return expand("h4", props, children);
};
export var h5: El = (props, ...children) => {
  return expand("h5", props, children);
};
export var h6: El = (props, ...children) => {
  return expand("h6", props, children);
};
export var head: El = (props, ...children) => {
  return expand("head", props, children);
};
export var header: El = (props, ...children) => {
  return expand("header", props, children);
};

/**********************************************************
 *                        IMAGES                          *
 **********************************************************/
export var i: El = (props, ...children) => {
  return expand("i", props, children);
};
export var img: (props: imgProps) => React.ReactElement<imgProps> =
  (props) => {
    return expand("img", props, []);
  };
export var svg: El = (props, ...children) => {
  return expand("svg", props, children);
};

/**********************************************************
 *                         LISTS                          *
 **********************************************************/
export var ul: El = (props, ...children) => {
  return expand("ul", props, children);
};
export var ol: El = (props, ...children) => {
  return expand("ol", props, children);
};
export var li: El = (props, ...children) => {
  return expand("li", props, children);
};
/**********************************************************
 *                     NAVIGATION                         *
 **********************************************************/
export var nav: El = (props, ...children) => {
  return expand("nav", props, children);
};

/**********************************************************
 *                        TABLES                          *
 **********************************************************/
export var table: El = (props, ...children) => {
  return expand("table", props, children);
};
export var thead: El = (props, ...children) => {
  return expand("thead", props, children);
};
export var tbody: El = (props, ...children) => {
  return expand("tbody", props, children);
};
export var th: El = (props, ...children) => {
  return expand("th", props, children);
};
export var tr: El = (props, ...children) => {
  return expand("tr", props, children);
};
export var td: El = (props, ...children) => {
  return expand("td", props, children);
};

/**********************************************************
 *                    COMMON ELEMENTS                     *
 **********************************************************/
//Breaks with clear.  Used to clear floats and to give extra space when needed.
export var s_break: El = (props: Props, ...children: any[]) => {
  props.className = props.className ? props.className + " clear small-break" : "clear small-break";
  return expand("div", props, children);
};
export var m_break: El = (props: Props, ...children: any[]) => {
  props.className = props.className ? props.className + " clear med-break" : "clear med-break";
  return expand("div", props, children);
};
export var l_break: El = (props: Props, ...children: any[]) => {
  props.className = props.className ? props.className + " clear large-break" : "clear large-break";
  return expand("div", props, children);
};
export var br: El = (props, ...children) => {
  return expand("br", props, children);
};

//Materialize/bootstrap style css short cuts
export var row: El = (props: Props, ...children: any[]) => {
  props.className = props.className ? props.className + " row" : "row";
  return expand("div", props, children);
};
