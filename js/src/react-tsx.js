"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
exports.el = React.createElement;
function expand(tag, props, children) {
    children.unshift(tag, props);
    return exports.el.apply(null, children);
}
var Component = (function (_super) {
    __extends(Component, _super);
    function Component() {
        _super.apply(this, arguments);
    }
    return Component;
}(React.Component));
exports.Component = Component;
;
exports.a = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("a", props, children);
};
exports.article = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("article", props, children);
};
exports.section = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("section", props, children);
};
exports.aside = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("aside", props, children);
};
exports.div = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("div", props, children);
};
exports.p = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("p", props, children);
};
exports.span = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("span", props, children);
};
exports.button = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("button", props, children);
};
exports.form = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("form", props, children);
};
exports.input = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("input", props, children);
};
exports.h1 = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("h1", props, children);
};
exports.h2 = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("h2", props, children);
};
exports.h3 = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("h3", props, children);
};
exports.h4 = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("h4", props, children);
};
exports.h5 = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("h5", props, children);
};
exports.h6 = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("h6", props, children);
};
exports.head = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("head", props, children);
};
exports.header = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("header", props, children);
};
exports.i = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("i", props, children);
};
exports.img = function (props) {
    return expand("img", props, []);
};
exports.svg = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("svg", props, children);
};
exports.ul = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("ul", props, children);
};
exports.ol = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("ol", props, children);
};
exports.li = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("li", props, children);
};
exports.nav = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("nav", props, children);
};
exports.table = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("table", props, children);
};
exports.thead = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("thead", props, children);
};
exports.tbody = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("tbody", props, children);
};
exports.th = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("th", props, children);
};
exports.tr = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("tr", props, children);
};
exports.td = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("td", props, children);
};
exports.s_break = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    props.className = props.className ? props.className + " clear small-break" : "clear small-break";
    return expand("div", props, children);
};
exports.m_break = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    props.className = props.className ? props.className + " clear med-break" : "clear med-break";
    return expand("div", props, children);
};
exports.l_break = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    props.className = props.className ? props.className + " clear large-break" : "clear large-break";
    return expand("div", props, children);
};
exports.br = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    return expand("br", props, children);
};
exports.row = function (props) {
    var children = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        children[_i - 1] = arguments[_i];
    }
    props.className = props.className ? props.className + " row" : "row";
    return expand("div", props, children);
};
//# sourceMappingURL=react-tsx.js.map