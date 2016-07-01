import React = require("react");

/**
 * Our base element creator, this one should be used externally to render any React.ComponentClass<P>;
 * @type {(function(string, P=, ...[ReactNode]): DOMElement<P>)|(function(ClassicComponentClass<P>, P=, ...[ReactNode]): ClassicElement<P>)|(function((ComponentClass<P>|StatelessComponent<P>), P=, ...[ReactNode]): ReactElement<P>)}
 */
export var el = React.createElement;
function expand(tag:string, props:any, children:any[]):React.ReactElement<any> {
  children.unshift(tag, props);
  return el.apply(null, children);
}

/**********************************************************
 *                     BASIC ELEMENTS                     *
 **********************************************************/
export var a:(props:__TSX.aProps, ...children:any[]) => React.ReactElement<__TSX.aProps> =
  (props, ...children) => {
    return expand("a", props, children);
  };
export var article:__TSX.El = (props, ...children) => {
  return expand("article", props, children);
};
export var section:__TSX.El = (props, ...children) => {
  return expand("section", props, children);
};
export var aside:__TSX.El = (props, ...children) => {
  return expand("aside", props, children);
};
export var div:__TSX.El = (props, ...children) => {
  return expand("div", props, children);
};
export var p:__TSX.El = (props, ...children) => {
  return expand("p", props, children);
};
export var span:__TSX.El = (props, ...children) => {
  return expand("span", props, children);
};
/**********************************************************
 *                        BUTTONS                         *
 **********************************************************/
export var button:__TSX.El = (props, ...children) => {
  return expand("button", props, children);
};
/**********************************************************
 *                         FORMS                          *
 **********************************************************/
export var form:__TSX.El = (props, ...children) => {
  return expand("form", props, children);
};
export var input:__TSX.El = (props, ...children) => {
  return expand("input", props, children);
};
/**********************************************************
 *                       HEADERS                          *
 **********************************************************/
export var h1:__TSX.El = (props, ...children) => {
  return expand("h1", props, children);
};
export var h2:__TSX.El = (props, ...children) => {
  return expand("h2", props, children);
};
export var h3:__TSX.El = (props, ...children) => {
  return expand("h3", props, children);
};
export var h4:__TSX.El = (props, ...children) => {
  return expand("h4", props, children);
};
export var h5:__TSX.El = (props, ...children) => {
  return expand("h5", props, children);
};
export var h6:__TSX.El = (props, ...children) => {
  return expand("h6", props, children);
};
export var head:__TSX.El = (props, ...children) => {
  return expand("head", props, children);
};
export var header:__TSX.El = (props, ...children) => {
  return expand("header", props, children);
};

/**********************************************************
 *                        IMAGES                          *
 **********************************************************/
export var i:__TSX.El = (props, ...children) => {
  return expand("i", props, children);
};
export var img:(props:__TSX.imgProps) => React.ReactElement<__TSX.imgProps> =
  (props) => {
    return expand("img", props, []);
  };
export var svg:__TSX.El = (props, ...children) => {
  return expand("svg", props, children);
};

/**********************************************************
 *                         LISTS                          *
 **********************************************************/
export var ul:__TSX.El = (props, ...children) => {
  return expand("ul", props, children);
};
export var ol:__TSX.El = (props, ...children) => {
  return expand("ol", props, children);
};
export var li:__TSX.El = (props, ...children) => {
  return expand("li", props, children);
};
/**********************************************************
 *                     NAVIGATION                         *
 **********************************************************/
export var nav:__TSX.El = (props, ...children) => {
  return expand("nav", props, children);
};

/**********************************************************
 *                        TABLES                          *
 **********************************************************/
export var table:__TSX.El = (props, ...children) => {
  return expand("table", props, children);
};
export var thead:__TSX.El = (props, ...children) => {
  return expand("thead", props, children);
};
export var tbody:__TSX.El = (props, ...children) => {
  return expand("tbody", props, children);
};
export var th:__TSX.El = (props, ...children) => {
  return expand("th", props, children);
};
export var tr:__TSX.El = (props, ...children) => {
  return expand("tr", props, children);
};
export var td:__TSX.El = (props, ...children) => {
  return expand("td", props, children);
};

/**********************************************************
 *                    COMMON ELEMENTS                     *
 **********************************************************/
//Breaks with clear.  Used to clear floats and to give extra space when needed.
export var s_break:__TSX.El = (props:__TSX.Props, ...children:any[]) => {
  this.props.className = this.props.className ? this.props.className + " clear small-break" : "clear small-break";
  return expand("div", props, children);
};
export var m_break:__TSX.El = (props:__TSX.Props, ...children:any[]) => {
  this.props.className = this.props.className ? this.props.className + " clear med-break" : "clear med-break";
  return expand("div", props, children);
};
export var l_break:__TSX.El = (props:__TSX.Props, ...children:any[]) => {
  this.props.className = this.props.className ? this.props.className + " clear large-break" : "clear large-break";
  return expand("div", props, children);
};
export var br:__TSX.El = (props, ...children) => {
  return expand("br", props, children);
};

//Materialize/bootstrap style css short cuts
export var row:__TSX.El = (props:__TSX.Props, ...children:any[]) => {
  props.className = props.className ? props.className + " row" : "row";
  return expand("div", props, children);
};
