import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border px-6 text-sm font-semibold transition-[transform,background-color,color,border-color,box-shadow] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary text-primary-foreground shadow-[0_12px_40px_var(--gold-shadow)] hover:-translate-y-0.5 hover:bg-primary/90",
        primary:
          "border-primary bg-primary text-primary-foreground shadow-[0_12px_40px_var(--gold-shadow)] hover:-translate-y-0.5 hover:bg-primary/90",
        outline:
          "border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary/60 hover:bg-accent",
        ghost: "border-transparent text-foreground hover:bg-accent",
      },
      size: {
        default: "min-h-12 px-6",
        sm: "min-h-9 px-4 text-xs",
        lg: "min-h-14 px-8",
        icon: "h-10 min-h-10 w-10 px-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants, type ButtonProps };