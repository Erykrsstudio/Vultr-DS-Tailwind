import type { ReactNode, ElementType } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps {
  children?: ReactNode;
  level?: HeadingLevel;
  className?: string;
}

const headingClasses: Record<HeadingLevel, string> = {
  1: "text-6xl font-light leading-none mb-6 text-foreground",
  2: "text-5xl leading-none text-foreground mb-6",
  3: "text-4xl text-foreground mb-5",
  4: "text-3xl text-foreground mb-6",
  5: "text-lg text-foreground",
  6: "text-lg text-foreground mb-6",
};

export function Heading({ children, level = 1, className = "" }: HeadingProps) {
  const Tag: ElementType = `h${level}`;
  const classes = `${headingClasses[level]} ${className}`.trim();

  return <Tag className={classes}>{children}</Tag>;
}