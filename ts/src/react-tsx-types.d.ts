
declare namespace __TSX {
  /*
   * This is the base properties all react components can have
   */
  interface Props extends __React.HTMLAttributes, __React.ClassAttributes<any> {
  }

  /**
   * Extra propeties that are specific to the certain html tags
   */
  interface imgProps extends Props {
    src:string; //img always requires a src property
    width?:number | string;
    height?: number | string;
  }

  interface aProps extends Props {
    href?:string;
  }

  type El = (props:Props, ...children: any[])=>__React.ReactElement<any>



  //TODO Fill out other tags like that have specific properties

}

declare module "react-tsx"{
  export = __TSX
}
