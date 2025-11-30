import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", asChild, children, ...props }, ref) => {
    const buttonClassName = cn(
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-foreground text-background hover:bg-foreground/90":
          variant === "default",
        "border border-foreground/20 bg-transparent hover:bg-foreground/10":
          variant === "outline",
        "hover:bg-foreground/10": variant === "ghost",
        "h-9 px-4 text-sm": size === "sm",
        "h-11 px-6 text-base": size === "md",
        "h-13 px-8 text-lg": size === "lg",
      },
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        className: cn(buttonClassName, (children as React.ReactElement<any>)?.props?.className),
        ref,
      });
    }

    return (
      <button
        className={buttonClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };

