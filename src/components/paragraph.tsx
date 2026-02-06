import type { ReactNode } from "react";

type ParagraphSize = "sm" | "md" | "lg" | "xl" | "2xl";

const sizeClasses: Record<ParagraphSize, string> = {
  sm: "",
  md: "",
  lg: "text-lg",
  xl:"text-xl",
  "2xl": "text-2xl",
};

interface ParagraphProps {  
  children?: ReactNode;
  size?: ParagraphSize;
  className?: string;
}

export function Paragraph({ children, size = "2xl", className = "" }: ParagraphProps) {
  const sizeClass = sizeClasses[size];

  return (
    <p className={`${sizeClass} ${className} text-foreground`.trim()}>
      {children}
    </p>
  );
}
