import * as React from "react";

import { cn } from "@/lib/utils";

type InputSize = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<InputSize, string> = {
  sm: "h-8 px-2 py-1 rounded-sm text-xs md:text-sm",
  md: "h-9 px-3 py-1.5 rounded-md text-sm md:text-base",
  lg: "h-10 px-3.5 py-2 rounded-md text-lg",
  xl: "h-16 p-5 rounded-md text-lg font-normal text-muted",
};

interface InputProps extends Omit<React.ComponentProps<"input">, "size"> {
  size?: InputSize;
}

function Input({ className, type, size = "md", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input w-full min-w-0 border bg-transparent shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

export { Input };
