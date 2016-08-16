import React = require("react");
import { render } from "react-dom";
import { Router, Route, Link } from "react-router";
export interface Props extends React.HTMLAttributes, React.ClassAttributes<any> {
}
export interface SVGProps extends React.SVGAttributes, React.ClassAttributes<any> {
}
export interface imgProps extends Props {
    src: string;
    width?: number | string;
    height?: number | string;
}
export declare type El = (props: Props, ...children: any[]) => React.ReactElement<any>;
export declare type SVGEl = (props: Props, ...children: any[]) => React.ReactElement<any>;
export declare var el: typeof React.createElement;
export declare class Component<P extends Props, S> extends React.Component<P, S> {
}
export declare var RenderToDom: typeof render;
export declare var ReactRouter: {
    Router: typeof Router;
    Route: typeof Route;
    Link: typeof Link;
};
export declare var a: El;
export declare var abbr: El;
export declare var address: El;
export declare var area: El;
export declare var article: El;
export declare var aside: El;
export declare var audio: El;
export declare var b: El;
export declare var base: El;
export declare var bdi: El;
export declare var bdo: El;
export declare var big: El;
export declare var blockquote: El;
export declare var body: El;
export declare var br: El;
export declare var button: El;
export declare var canvas: El;
export declare var caption: El;
export declare var cite: El;
export declare var code: El;
export declare var col: El;
export declare var colgroup: El;
export declare var data: El;
export declare var datalist: El;
export declare var dd: El;
export declare var del: El;
export declare var details: El;
export declare var dfn: El;
export declare var dialog: El;
export declare var div: El;
export declare var dl: El;
export declare var dt: El;
export declare var em: El;
export declare var embed: El;
export declare var fieldset: El;
export declare var figcaption: El;
export declare var figure: El;
export declare var footer: El;
export declare var form: El;
export declare var h1: El;
export declare var h2: El;
export declare var h3: El;
export declare var h4: El;
export declare var h5: El;
export declare var h6: El;
export declare var head: El;
export declare var header: El;
export declare var hgroup: El;
export declare var hr: El;
export declare var html: El;
export declare var i: El;
export declare var iframe: El;
export declare var img: El;
export declare var input: El;
export declare var ins: El;
export declare var kbd: El;
export declare var keygen: El;
export declare var label: El;
export declare var legend: El;
export declare var li: El;
export declare var link: El;
export declare var main: El;
export declare var map: El;
export declare var mark: El;
export declare var menu: El;
export declare var menuitem: El;
export declare var meta: El;
export declare var meter: El;
export declare var nav: El;
export declare var noscript: El;
export declare var object: El;
export declare var ol: El;
export declare var optgroup: El;
export declare var option: El;
export declare var output: El;
export declare var p: El;
export declare var param: El;
export declare var picture: El;
export declare var pre: El;
export declare var progress: El;
export declare var q: El;
export declare var rp: El;
export declare var rt: El;
export declare var ruby: El;
export declare var s: El;
export declare var samp: El;
export declare var script: El;
export declare var section: El;
export declare var select: El;
export declare var small: El;
export declare var source: El;
export declare var span: El;
export declare var strong: El;
export declare var style: El;
export declare var sub: El;
export declare var summary: El;
export declare var sup: El;
export declare var table: El;
export declare var tbody: El;
export declare var td: El;
export declare var textarea: El;
export declare var tfoot: El;
export declare var th: El;
export declare var thead: El;
export declare var time: El;
export declare var title: El;
export declare var tr: El;
export declare var track: El;
export declare var u: El;
export declare var ul: El;
export declare var video: El;
export declare var wbr: El;
export declare var circle: SVGEl;
export declare var clipPath: SVGEl;
export declare var defs: SVGEl;
export declare var ellipse: SVGEl;
export declare var g: SVGEl;
export declare var image: SVGEl;
export declare var line: SVGEl;
export declare var linearGradient: SVGEl;
export declare var mask: SVGEl;
export declare var path: SVGEl;
export declare var pattern: SVGEl;
export declare var polygon: SVGEl;
export declare var polyline: SVGEl;
export declare var radialGradient: SVGEl;
export declare var rect: SVGEl;
export declare var stop: SVGEl;
export declare var svg: SVGEl;
export declare var text: SVGEl;
export declare var tspan: SVGEl;
