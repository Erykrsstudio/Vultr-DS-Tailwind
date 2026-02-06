import type { ReactNode } from "react";

type SectionSize = "sm" | "md" | "lg" | "xl";
type SectionType = "default" | "primary";

const sizeClasses: Record<SectionSize, string> = {
  sm: "",
  md: "",
  lg: "",
  xl: "py-24 bg-background",
};

const typeClasses: Record<SectionType, string> = {
  default: "",
  primary: "primary",
};

interface SectionProps {  
  children: ReactNode;
  size?: SectionSize;
  type?: SectionType;
}

export function Section({ children, size = "xl", type = "default" }: SectionProps) {
  const sizeClass = sizeClasses[size];
  const typeClass = typeClasses[type];

  return (
    <section className={`${sizeClass} ${typeClass}`}>
      {children}
    </section>
  );
}