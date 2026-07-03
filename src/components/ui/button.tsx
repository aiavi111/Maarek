"use client";

import { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold select-none disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-accent text-onfg active:bg-accent/90",
        glass:
          "bg-card/80 text-fg border border-line2 backdrop-blur-xl active:bg-card",
        ghost: "text-mute active:text-fg",
        outline: "border border-line2 text-fg active:bg-veil",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[15px]",
        lg: "h-14 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
