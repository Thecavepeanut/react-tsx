///<reference path="react-tsx-types.d.ts"/>
export var el = React.createElement;
function expand(tag, props, children) {
    children.unshift(tag, props);
    return el.apply(null, children);
}
export var a = (props, ...children) => {
    return expand("a", props, children);
};
export var article = (props, ...children) => {
    return expand("article", props, children);
};
export var section = (props, ...children) => {
    return expand("section", props, children);
};
export var aside = (props, ...children) => {
    return expand("aside", props, children);
};
export var div = (props, ...children) => {
    return expand("div", props, children);
};
export var p = (props, ...children) => {
    return expand("p", props, children);
};
export var span = (props, ...children) => {
    return expand("span", props, children);
};
export var button = (props, ...children) => {
    return expand("button", props, children);
};
export var form = (props, ...children) => {
    return expand("form", props, children);
};
export var input = (props, ...children) => {
    return expand("input", props, children);
};
export var h1 = (props, ...children) => {
    return expand("h1", props, children);
};
export var h2 = (props, ...children) => {
    return expand("h2", props, children);
};
export var h3 = (props, ...children) => {
    return expand("h3", props, children);
};
export var h4 = (props, ...children) => {
    return expand("h4", props, children);
};
export var h5 = (props, ...children) => {
    return expand("h5", props, children);
};
export var h6 = (props, ...children) => {
    return expand("h6", props, children);
};
export var head = (props, ...children) => {
    return expand("head", props, children);
};
export var header = (props, ...children) => {
    return expand("header", props, children);
};
export var i = (props, ...children) => {
    return expand("i", props, children);
};
export var img = (props) => {
    return expand("img", props, []);
};
export var svg = (props, ...children) => {
    return expand("svg", props, children);
};
export var ul = (props, ...children) => {
    return expand("ul", props, children);
};
export var ol = (props, ...children) => {
    return expand("ol", props, children);
};
export var li = (props, ...children) => {
    return expand("li", props, children);
};
export var nav = (props, ...children) => {
    return expand("nav", props, children);
};
export var table = (props, ...children) => {
    return expand("table", props, children);
};
export var thead = (props, ...children) => {
    return expand("thead", props, children);
};
export var tbody = (props, ...children) => {
    return expand("tbody", props, children);
};
export var th = (props, ...children) => {
    return expand("th", props, children);
};
export var tr = (props, ...children) => {
    return expand("tr", props, children);
};
export var td = (props, ...children) => {
    return expand("td", props, children);
};
export var s_break = (props, ...children) => {
    this.props.className = this.props.className ? this.props.className + " clear small-break" : "clear small-break";
    return expand("div", props, children);
};
export var m_break = (props, ...children) => {
    this.props.className = this.props.className ? this.props.className + " clear med-break" : "clear med-break";
    return expand("div", props, children);
};
export var l_break = (props, ...children) => {
    this.props.className = this.props.className ? this.props.className + " clear large-break" : "clear large-break";
    return expand("div", props, children);
};
export var br = (props, ...children) => {
    return expand("br", props, children);
};
export var row = (props, ...children) => {
    props.className = props.className ? props.className + " row" : "row";
    return expand("div", props, children);
};
//# sourceMappingURL=react-tsx.js.map