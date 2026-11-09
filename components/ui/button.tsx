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
      "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
      {
        "bg-foreground text-background shadow-sm hover:bg-foreground/85":
          variant === "default",
        "border border-border bg-surface/60 backdrop-blur-sm hover:border-foreground/25 hover:bg-surface":
          variant === "outline",
        "hover:bg-foreground/5": variant === "ghost",
        "h-9 px-4 text-sm": size === "sm",
        "h-11 px-6 text-base": size === "md",
        "h-12 px-7 text-[15px]": size === "lg",
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

