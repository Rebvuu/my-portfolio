import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": {
        url?: string;
        class?: string;
        className?: string;
      };
    }
  }
}
