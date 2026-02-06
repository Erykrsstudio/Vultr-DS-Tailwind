import type { ReactNode } from "react";
import clsx from "clsx";

type ContainerSize = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-7xl mx-auto px-8",
};

interface ContainerProps {  
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
}

export function Container({ children, size = "xl", className }: ContainerProps) {
  const sizeClass = sizeClasses[size];

  return (
    <div className={clsx(sizeClass, className)}>
      {children}
    </div>
  );
}
