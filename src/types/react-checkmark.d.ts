declare module "react-checkmark" {
  import * as React from "react";

  interface CheckmarkProps {
    size?: string;
    color?: string;
    duration?: number;
    className?: string;
  }

  export const Checkmark: React.FC<CheckmarkProps>;
}
