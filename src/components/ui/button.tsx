import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex min-h-12 items-center justify-center gap-3 border px-6 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent",
        accent:
          "border-accent bg-accent text-accent-foreground hover:border-primary hover:bg-primary",
        light:
          "border-hero-foreground bg-hero-foreground text-primary hover:border-accent hover:bg-accent hover:text-accent-foreground",
        outlineLight:
          "border-hero-border bg-transparent text-hero-foreground hover:border-hero-foreground hover:bg-hero-tint",
        outline:
          "border-border bg-transparent text-foreground hover:border-primary hover:bg-secondary",
        ghost: "border-transparent bg-transparent text-foreground hover:bg-secondary",
        text: "min-h-0 border-0 p-0 text-primary hover:text-accent",
      },
      size: {
        default: "min-h-12 px-6",
        sm: "min-h-9 px-3",
        lg: "min-h-14 px-8",
        icon: "size-10 min-h-0 px-0",
        "icon-sm": "size-8 min-h-0 px-0",
        "icon-lg": "size-12 min-h-0 px-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };