"use strict";
const React = require("react");
var reactTSX;
(function (reactTSX) {
    reactTSX.el = React.createElement;
    function expand(tag, props, children) {
        children.unshift(tag, props);
        return reactTSX.el.apply(null, children);
    }
    reactTSX.a = (props, ...children) => {
        return expand("a", props, children);
    };
    reactTSX.article = (props, ...children) => {
        return expand("article", props, children);
    };
    reactTSX.section = (props, ...children) => {
        return expand("section", props, children);
    };
    reactTSX.aside = (props, ...children) => {
        return expand("aside", props, children);
    };
    reactTSX.div = (props, ...children) => {
        return expand("div", props, children);
    };
    reactTSX.p = (props, ...children) => {
        return expand("p", props, children);
    };
    reactTSX.span = (props, ...children) => {
        return expand("span", props, children);
    };
    reactTSX.button = (props, ...children) => {
        return expand("button", props, children);
    };
    reactTSX.form = (props, ...children) => {
        return expand("form", props, children);
    };
    reactTSX.input = (props, ...children) => {
        return expand("input", props, children);
    };
    reactTSX.h1 = (props, ...children) => {
        return expand("h1", props, children);
    };
    reactTSX.h2 = (props, ...children) => {
        return expand("h2", props, children);
    };
    reactTSX.h3 = (props, ...children) => {
        return expand("h3", props, children);
    };
    reactTSX.h4 = (props, ...children) => {
        return expand("h4", props, children);
    };
    reactTSX.h5 = (props, ...children) => {
        return expand("h5", props, children);
    };
    reactTSX.h6 = (props, ...children) => {
        return expand("h6", props, children);
    };
    reactTSX.head = (props, ...children) => {
        return expand("head", props, children);
    };
    reactTSX.header = (props, ...children) => {
        return expand("header", props, children);
    };
    reactTSX.i = (props, ...children) => {
        return expand("i", props, children);
    };
    reactTSX.img = (props) => {
        return expand("img", props, []);
    };
    reactTSX.svg = (props, ...children) => {
        return expand("svg", props, children);
    };
    reactTSX.ul = (props, ...children) => {
        return expand("ul", props, children);
    };
    reactTSX.ol = (props, ...children) => {
        return expand("ol", props, children);
    };
    reactTSX.li = (props, ...children) => {
        return expand("li", props, children);
    };
    reactTSX.nav = (props, ...children) => {
        return expand("nav", props, children);
    };
    reactTSX.table = (props, ...children) => {
        return expand("table", props, children);
    };
    reactTSX.thead = (props, ...children) => {
        return expand("thead", props, children);
    };
    reactTSX.tbody = (props, ...children) => {
        return expand("tbody", props, children);
    };
    reactTSX.th = (props, ...children) => {
        return expand("th", props, children);
    };
    reactTSX.tr = (props, ...children) => {
        return expand("tr", props, children);
    };
    reactTSX.td = (props, ...children) => {
        return expand("td", props, children);
    };
    reactTSX.s_break = (props, ...children) => {
        props.className = props.className ? props.className + " clear small-break" : "clear small-break";
        return expand("div", props, children);
    };
    reactTSX.m_break = (props, ...children) => {
        props.className = props.className ? props.className + " clear med-break" : "clear med-break";
        return expand("div", props, children);
    };
    reactTSX.l_break = (props, ...children) => {
        props.className = props.className ? props.className + " clear large-break" : "clear large-break";
        return expand("div", props, children);
    };
    reactTSX.br = (props, ...children) => {
        return expand("br", props, children);
    };
    reactTSX.row = (props, ...children) => {
        props.className = props.className ? props.className + " row" : "row";
        return expand("div", props, children);
    };
})(reactTSX || (reactTSX = {}));
var "react-tsx";
(function (react-tsx) {
})("react-tsx" || ("react-tsx" = {}));
//# sourceMappingURL=react-tsx.js.map