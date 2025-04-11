import React from "react";
import { cn } from "../lib/utils";

export const Button = React.forwardRef(({ className, variant = "default", asChild = false, ...props }, ref) => {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp
      ref={ref}
      className={cn(
        "inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-colors",
        variant === "default" && "bg-black text-white hover:bg-gray-900",
        variant === "outline" &&
          "border border-gray-300 text-black hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
});

Button.displayName = "Button"; 