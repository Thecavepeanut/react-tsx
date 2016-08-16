import React = require("react");
import {render} from "react-dom";
import {Router, Route, Link} from "react-router";

declare var require: any;
import injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
/*
 * This is the base properties all react components can have
 */
export interface Props extends React.HTMLAttributes, React.ClassAttributes<any> {
}

export interface SVGProps extends React.SVGAttributes, React.ClassAttributes<any> {

}

/**
 * Extra propeties that are specific to the certain html tags
 */
export interface imgProps extends Props {
  src: string; //img always requires a src property
  width?: number | string;
  height?: number | string;
}

export type El = (props: Props, ...children: any[]) => React.ReactElement<any>;
export type SVGEl = (props: Props, ...children: any[]) => React.ReactElement<any>;
/**
 * Our base element creator, this one should be used externally to render any React.ComponentClass<P>;
 * @type {(function(string, P=, ...[ReactNode]): DOMElement<P>)|
 (function(ClassicComponentClass<P>, P=, ...[ReactNode]): ClassicElement<P>)|
 (function((ComponentClass<P>|StatelessComponent<P>), P=, ...[ReactNode]): ReactElement<P>)}
 */
function expand(tag: string, props: any, children: any[]): React.ReactElement<any> {
  children.unshift(tag, props);
  return el.apply(null, children);
}
/**********************************************************
 *        Exporting commonly used React Methods           *
 **********************************************************/
export var el = React.createElement; // use this to createElement, mainly for custom Components
export class Component<P extends Props, S> extends React.Component<P, S>{ };
export var RenderToDom = render;
export var ReactRouter = { Router, Route, Link };

/**********************************************************
 *                     HTML ELEMENTS                     *
 **********************************************************/

export var a: El = (props, ...children) => {
  return expand("a", props, children);
};

export var abbr: El = (props, ...children) => {
  return expand("abbr", props, children);
};

export var address: El = (props, ...children) => {
  return expand("address", props, children);
};

export var area: El = (props, ...children) => {
  return expand("area", props, children);
};

export var article: El = (props, ...children) => {
  return expand("article", props, children);
};

export var aside: El = (props, ...children) => {
  return expand("aside", props, children);
};

export var audio: El = (props, ...children) => {
  return expand("audio", props, children);
};

export var b: El = (props, ...children) => {
  return expand("b", props, children);
};

export var base: El = (props, ...children) => {
  return expand("base", props, children);
};

export var bdi: El = (props, ...children) => {
  return expand("bdi", props, children);
};

export var bdo: El = (props, ...children) => {
  return expand("bdo", props, children);
};

export var big: El = (props, ...children) => {
  return expand("big", props, children);
};

export var blockquote: El = (props, ...children) => {
  return expand("blockquote", props, children);
};

export var body: El = (props, ...children) => {
  return expand("body", props, children);
};

export var br: El = (props, ...children) => {
  return expand("br", props, children);
};

export var button: El = (props, ...children) => {
  return expand("button", props, children);
};

export var canvas: El = (props, ...children) => {
  return expand("canvas", props, children);
};

export var caption: El = (props, ...children) => {
  return expand("caption", props, children);
};

export var cite: El = (props, ...children) => {
  return expand("cite", props, children);
};

export var code: El = (props, ...children) => {
  return expand("code", props, children);
};

export var col: El = (props, ...children) => {
  return expand("col", props, children);
};

export var colgroup: El = (props, ...children) => {
  return expand("colgroup", props, children);
};

export var data: El = (props, ...children) => {
  return expand("data", props, children);
};

export var datalist: El = (props, ...children) => {
  return expand("datalist", props, children);
};

export var dd: El = (props, ...children) => {
  return expand("dd", props, children);
};

export var del: El = (props, ...children) => {
  return expand("del", props, children);
};

export var details: El = (props, ...children) => {
  return expand("details", props, children);
};

export var dfn: El = (props, ...children) => {
  return expand("dfn", props, children);
};

export var dialog: El = (props, ...children) => {
  return expand("dialog", props, children);
};

export var div: El = (props, ...children) => {
  return expand("div", props, children);
};

export var dl: El = (props, ...children) => {
  return expand("dl", props, children);
};

export var dt: El = (props, ...children) => {
  return expand("dt", props, children);
};

export var em: El = (props, ...children) => {
  return expand("em", props, children);
};

export var embed: El = (props, ...children) => {
  return expand("embed", props, children);
};

export var fieldset: El = (props, ...children) => {
  return expand("fieldset", props, children);
};

export var figcaption: El = (props, ...children) => {
  return expand("figcaption", props, children);
};

export var figure: El = (props, ...children) => {
  return expand("figure", props, children);
};

export var footer: El = (props, ...children) => {
  return expand("footer", props, children);
};

export var form: El = (props, ...children) => {
  return expand("form", props, children);
};

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

export var hgroup: El = (props, ...children) => {
  return expand("hgroup", props, children);
};

export var hr: El = (props, ...children) => {
  return expand("hr", props, children);
};

export var html: El = (props, ...children) => {
  return expand("html", props, children);
};

export var i: El = (props, ...children) => {
  return expand("i", props, children);
};

export var iframe: El = (props, ...children) => {
  return expand("iframe", props, children);
};

export var img: El = (props, ...children) => {
  return expand("img", props, children);
};

export var input: El = (props, ...children) => {
  return expand("input", props, children);
};

export var ins: El = (props, ...children) => {
  return expand("ins", props, children);
};

export var kbd: El = (props, ...children) => {
  return expand("kbd", props, children);
};

export var keygen: El = (props, ...children) => {
  return expand("keygen", props, children);
};

export var label: El = (props, ...children) => {
  return expand("label", props, children);
};

export var legend: El = (props, ...children) => {
  return expand("legend", props, children);
};

export var li: El = (props, ...children) => {
  return expand("li", props, children);
};

export var link: El = (props, ...children) => {
  return expand("link", props, children);
};

export var main: El = (props, ...children) => {
  return expand("main", props, children);
};

export var map: El = (props, ...children) => {
  return expand("map", props, children);
};

export var mark: El = (props, ...children) => {
  return expand("mark", props, children);
};

export var menu: El = (props, ...children) => {
  return expand("menu", props, children);
};

export var menuitem: El = (props, ...children) => {
  return expand("menuitem", props, children);
};

export var meta: El = (props, ...children) => {
  return expand("meta", props, children);
};

export var meter: El = (props, ...children) => {
  return expand("meter", props, children);
};

export var nav: El = (props, ...children) => {
  return expand("nav", props, children);
};

export var noscript: El = (props, ...children) => {
  return expand("noscript", props, children);
};

export var object: El = (props, ...children) => {
  return expand("object", props, children);
};

export var ol: El = (props, ...children) => {
  return expand("ol", props, children);
};

export var optgroup: El = (props, ...children) => {
  return expand("optgroup", props, children);
};

export var option: El = (props, ...children) => {
  return expand("option", props, children);
};

export var output: El = (props, ...children) => {
  return expand("output", props, children);
};

export var p: El = (props, ...children) => {
  return expand("p", props, children);
};

export var param: El = (props, ...children) => {
  return expand("param", props, children);
};

export var picture: El = (props, ...children) => {
  return expand("picture", props, children);
};

export var pre: El = (props, ...children) => {
  return expand("pre", props, children);
};

export var progress: El = (props, ...children) => {
  return expand("progress", props, children);
};

export var q: El = (props, ...children) => {
  return expand("q", props, children);
};

export var rp: El = (props, ...children) => {
  return expand("rp", props, children);
};

export var rt: El = (props, ...children) => {
  return expand("rt", props, children);
};

export var ruby: El = (props, ...children) => {
  return expand("ruby", props, children);
};

export var s: El = (props, ...children) => {
  return expand("s", props, children);
};

export var samp: El = (props, ...children) => {
  return expand("samp", props, children);
};

export var script: El = (props, ...children) => {
  return expand("script", props, children);
};

export var section: El = (props, ...children) => {
  return expand("section", props, children);
};

export var select: El = (props, ...children) => {
  return expand("select", props, children);
};

export var small: El = (props, ...children) => {
  return expand("small", props, children);
};

export var source: El = (props, ...children) => {
  return expand("source", props, children);
};

export var span: El = (props, ...children) => {
  return expand("span", props, children);
};

export var strong: El = (props, ...children) => {
  return expand("strong", props, children);
};

export var style: El = (props, ...children) => {
  return expand("style", props, children);
};

export var sub: El = (props, ...children) => {
  return expand("sub", props, children);
};

export var summary: El = (props, ...children) => {
  return expand("summary", props, children);
};

export var sup: El = (props, ...children) => {
  return expand("sup", props, children);
};

export var table: El = (props, ...children) => {
  return expand("table", props, children);
};

export var tbody: El = (props, ...children) => {
  return expand("tbody", props, children);
};

export var td: El = (props, ...children) => {
  return expand("td", props, children);
};

export var textarea: El = (props, ...children) => {
  return expand("textarea", props, children);
};

export var tfoot: El = (props, ...children) => {
  return expand("tfoot", props, children);
};

export var th: El = (props, ...children) => {
  return expand("th", props, children);
};

export var thead: El = (props, ...children) => {
  return expand("thead", props, children);
};

export var time: El = (props, ...children) => {
  return expand("time", props, children);
};

export var title: El = (props, ...children) => {
  return expand("title", props, children);
};

export var tr: El = (props, ...children) => {
  return expand("tr", props, children);
};

export var track: El = (props, ...children) => {
  return expand("track", props, children);
};

export var u: El = (props, ...children) => {
  return expand("u", props, children);
};

export var ul: El = (props, ...children) => {
  return expand("ul", props, children);
};

export var video: El = (props, ...children) => {
  return expand("video", props, children);
};

export var wbr: El = (props, ...children) => {
  return expand("wbr", props, children);
};


/**********************************************************
 *                      SVG ELEMENTS                      *
 **********************************************************/

export var circle: SVGEl = (props, ...children) => {
  return expand("circle", props, children);
};

export var clipPath: SVGEl = (props, ...children) => {
  return expand("clipPath", props, children);
};

export var defs: SVGEl = (props, ...children) => {
  return expand("defs", props, children);
};

export var ellipse: SVGEl = (props, ...children) => {
  return expand("ellipse", props, children);
};

export var g: SVGEl = (props, ...children) => {
  return expand("g", props, children);
};

export var image: SVGEl = (props, ...children) => {
  return expand("image", props, children);
};

export var line: SVGEl = (props, ...children) => {
  return expand("line", props, children);
};

export var linearGradient: SVGEl = (props, ...children) => {
  return expand("linearGradient", props, children);
};

export var mask: SVGEl = (props, ...children) => {
  return expand("mask", props, children);
};

export var path: SVGEl = (props, ...children) => {
  return expand("path", props, children);
};

export var pattern: SVGEl = (props, ...children) => {
  return expand("pattern", props, children);
};

export var polygon: SVGEl = (props, ...children) => {
  return expand("polygon", props, children);
};

export var polyline: SVGEl = (props, ...children) => {
  return expand("polyline", props, children);
};

export var radialGradient: SVGEl = (props, ...children) => {
  return expand("radialGradient", props, children);
};

export var rect: SVGEl = (props, ...children) => {
  return expand("rect", props, children);
};

export var stop: SVGEl = (props, ...children) => {
  return expand("stop", props, children);
};

export var svg: SVGEl = (props, ...children) => {
  return expand("svg", props, children);
};

export var text: SVGEl = (props, ...children) => {
  return expand("text", props, children);
};

export var tspan: SVGEl = (props, ...children) => {
  return expand("tspan", props, children);
};
