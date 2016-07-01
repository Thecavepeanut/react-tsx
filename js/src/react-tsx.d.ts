import React = require("react");
declare module reactTSX {
    interface Props extends __React.HTMLAttributes, __React.ClassAttributes<any> {
    }
    interface imgProps extends Props {
        src: string;
        width?: number | string;
        height?: number | string;
    }
    interface aProps extends Props {
        href?: string;
    }
    type El = (props: Props, ...children: any[]) => __React.ReactElement<any>;
    var el: typeof React.createElement;
    var a: (props: aProps, ...children: any[]) => React.ReactElement<aProps>;
    var article: El;
    var section: El;
    var aside: El;
    var div: El;
    var p: El;
    var span: El;
    var button: El;
    var form: El;
    var input: El;
    var h1: El;
    var h2: El;
    var h3: El;
    var h4: El;
    var h5: El;
    var h6: El;
    var head: El;
    var header: El;
    var i: El;
    var img: (props: imgProps) => React.ReactElement<imgProps>;
    var svg: El;
    var ul: El;
    var ol: El;
    var li: El;
    var nav: El;
    var table: El;
    var thead: El;
    var tbody: El;
    var th: El;
    var tr: El;
    var td: El;
    var s_break: El;
    var m_break: El;
    var l_break: El;
    var br: El;
    var row: El;
}
declare module "react-tsx" {
    export = reactTSX;
}
