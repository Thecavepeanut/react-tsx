import React = require("react");
export interface Props extends React.HTMLAttributes, React.ClassAttributes<any> {
}
export interface imgProps extends Props {
    src: string;
    width?: number | string;
    height?: number | string;
}
export declare type El = (props: Props, ...children: any[]) => React.ReactElement<any>;
export declare var el: typeof React.createElement;
export declare type Component<P extends Props, S> = React.Component<P, S>;
export declare var a: El;
export declare var article: El;
export declare var section: El;
export declare var aside: El;
export declare var div: El;
export declare var p: El;
export declare var span: El;
export declare var button: El;
export declare var form: El;
export declare var input: El;
export declare var h1: El;
export declare var h2: El;
export declare var h3: El;
export declare var h4: El;
export declare var h5: El;
export declare var h6: El;
export declare var head: El;
export declare var header: El;
export declare var i: El;
export declare var img: (props: imgProps) => React.ReactElement<imgProps>;
export declare var svg: El;
export declare var ul: El;
export declare var ol: El;
export declare var li: El;
export declare var nav: El;
export declare var table: El;
export declare var thead: El;
export declare var tbody: El;
export declare var th: El;
export declare var tr: El;
export declare var td: El;
export declare var s_break: El;
export declare var m_break: El;
export declare var l_break: El;
export declare var br: El;
export declare var row: El;
