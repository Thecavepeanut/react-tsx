"use strict";
const React = require("react");
exports.el = React.createElement;
function expand(tag, props, children) {
    children.unshift(tag, props);
    return exports.el.apply(null, children);
}
exports.a = (props, ...children) => {
    return expand("a", props, children);
};
exports.article = (props, ...children) => {
    return expand("article", props, children);
};
exports.section = (props, ...children) => {
    return expand("section", props, children);
};
exports.aside = (props, ...children) => {
    return expand("aside", props, children);
};
exports.div = (props, ...children) => {
    return expand("div", props, children);
};
exports.p = (props, ...children) => {
    return expand("p", props, children);
};
exports.span = (props, ...children) => {
    return expand("span", props, children);
};
exports.button = (props, ...children) => {
    return expand("button", props, children);
};
exports.form = (props, ...children) => {
    return expand("form", props, children);
};
exports.input = (props, ...children) => {
    return expand("input", props, children);
};
exports.h1 = (props, ...children) => {
    return expand("h1", props, children);
};
exports.h2 = (props, ...children) => {
    return expand("h2", props, children);
};
exports.h3 = (props, ...children) => {
    return expand("h3", props, children);
};
exports.h4 = (props, ...children) => {
    return expand("h4", props, children);
};
exports.h5 = (props, ...children) => {
    return expand("h5", props, children);
};
exports.h6 = (props, ...children) => {
    return expand("h6", props, children);
};
exports.head = (props, ...children) => {
    return expand("head", props, children);
};
exports.header = (props, ...children) => {
    return expand("header", props, children);
};
exports.i = (props, ...children) => {
    return expand("i", props, children);
};
exports.img = (props) => {
    return expand("img", props, []);
};
exports.svg = (props, ...children) => {
    return expand("svg", props, children);
};
exports.ul = (props, ...children) => {
    return expand("ul", props, children);
};
exports.ol = (props, ...children) => {
    return expand("ol", props, children);
};
exports.li = (props, ...children) => {
    return expand("li", props, children);
};
exports.nav = (props, ...children) => {
    return expand("nav", props, children);
};
exports.table = (props, ...children) => {
    return expand("table", props, children);
};
exports.thead = (props, ...children) => {
    return expand("thead", props, children);
};
exports.tbody = (props, ...children) => {
    return expand("tbody", props, children);
};
exports.th = (props, ...children) => {
    return expand("th", props, children);
};
exports.tr = (props, ...children) => {
    return expand("tr", props, children);
};
exports.td = (props, ...children) => {
    return expand("td", props, children);
};
exports.s_break = (props, ...children) => {
    this.props.className = this.props.className ? this.props.className + " clear small-break" : "clear small-break";
    return expand("div", props, children);
};
exports.m_break = (props, ...children) => {
    this.props.className = this.props.className ? this.props.className + " clear med-break" : "clear med-break";
    return expand("div", props, children);
};
exports.l_break = (props, ...children) => {
    this.props.className = this.props.className ? this.props.className + " clear large-break" : "clear large-break";
    return expand("div", props, children);
};
exports.br = (props, ...children) => {
    return expand("br", props, children);
};
exports.row = (props, ...children) => {
    props.className = props.className ? props.className + " row" : "row";
    return expand("div", props, children);
};
//# sourceMappingURL=react-tsx.js.map