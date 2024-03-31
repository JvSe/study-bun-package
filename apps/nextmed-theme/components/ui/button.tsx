import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "#/lib";
import { Spinner } from "../spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-sf-pro-text font-semibolf whitespace-nowrap transition-all rounded-md select-none hover:scale-[1.03] disabled:pointer-events-none disabled:cursor-not-allowed disabled:text-dark-3 disabled:bg-dark-5 dark:disabled:bg-transparent disabled:border-dark-3",
  {
    variants: {
      variant: {
        clean: "transition-all",
        default:
          "bg-primary font-semibold dark:bg-dark-button-succes text-white text-[18px] shadow-sm border border-primary-border dark:border-dark-background hover:bg-primary-hover dark:hover:bg-dark-primary hover:text-primary-border dark:hover:text-dark-background dark:hover:border-dark-primary dark:disabled:border-dark-3 dark:disabled:text-dark-3",
        destructive:
          "bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "border border-dark-4 text-[18px] text-dark bg-white font-semibold dark:bg-transparent dark:border-dark-2 dark:text-white",
        secondary:
          "border border-dark-4 text-[18px] text-dark-2 bg-white font-medium dark:bg-transparent dark:border-dark-2 dark:text-white",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        back: "bg-[#EBF3F5] border border-dark-2 dark:border-dark-border text-dark-2 hover:bg-primary-hover hover:border-primary2 dark:bg-transparent dark:hover:text-dark-primary dark:hover:border-dark-primary",
      },
      size: {
        clean: "",
        figma: "h-9 px-4 py-2",
        default: "min-h-[3.5rem] h-[3.5rem] w-full",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, loading = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {loading ? <Spinner /> : props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
