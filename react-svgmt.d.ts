declare module "react-svgmt" {
  import * as React from "react";

  export interface SVGProps {
    src: string;
    style?: React.CSSProperties;
    onLoad?: () => void;
    onError?: (error: ErrorEvent) => void;
  }

  export class SVG extends React.Component<SVGProps> {}
}
