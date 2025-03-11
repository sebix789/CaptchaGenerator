import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "components/lib/utils";

const inputVariants = cva(
  "block w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "h-10",
        sm: "h-8 text-xs",
        lg: "h-12 text-lg",
      },
      border: {
        default: "",
        success: "border-2 border-solid border-[#18c518]",
        danger: "border-2 border-solid border-[#f64c4c]",
      },
      placeholderVariant: {
        default: "",
        success: "placeholder-success",
        danger: "placeholder-danger",
      },
    },
    defaultVariants: {
      size: "default",
      border: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, border, size, disabled, placeholderVariant, ...props },
    ref
  ) => {
    return (
      <input
        className={cn(
          inputVariants({ size, border, placeholderVariant, className })
        )}
        ref={ref}
        disabled={disabled}
        {...props}
        style={{ maxWidth: "var(--input-max-width, 400px)" }}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
