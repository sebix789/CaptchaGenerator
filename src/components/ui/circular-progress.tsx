import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "components/lib/utils";

const circularProgressVariants = cva(
  "relative flex items-center justify-center",
  {
    variants: {
      size: {
        small: "w-8 h-8",
        medium: "w-16 h-16",
        large: "w-24 h-24",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

interface CircularProgressProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof circularProgressVariants> {}

const CircularProgress = ({
  className,
  size,
  ...props
}: CircularProgressProps) => {
  return (
    <div
      className={cn(
        circularProgressVariants({ size }),
        "animate-spin border-t-4 border-current rounded-full border-[#03A9E5]",
        className
      )}
      {...props}
    />
  );
};

export { CircularProgress };
