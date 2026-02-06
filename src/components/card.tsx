import type { ReactNode } from "react";
import { Heading } from "@/components/heading";
import { Paragraph } from "./paragraph";

type CardSize = "sm" | "md";
type CardType = "default" | "primary";

const sizeClasses: Record<CardSize, string> = {
  sm: "p-6",
  md: "p-8",
};

const typeClasses: Record<CardType, string> = {
  default: "default",
  primary: "primary",
};

interface CardProps {
  children?: ReactNode;
  size?: CardSize;
  type?: CardType;
  className?: string;
  shadow?: boolean;
  heading?: ReactNode;
  headingClass?: string;
  captionClass?: string;
  headingIcon?: ReactNode;
  caption?: ReactNode;
  description?: string;
}

export function Card({
  children,
  size = "md",
  type = "default",
  className = "",
  shadow = false,
  heading,
  headingClass = "",
  captionClass = "",
  headingIcon,
  caption,
  description,
}: CardProps) {
  const sizeClass = sizeClasses[size];
  const typeClass = typeClasses[type];
  const shadowClass = shadow ? "shadow-lg" : "";

  return (
    <div
      className={`flex flex-col bg-card min-h-[280px] ${sizeClass} ${typeClass} ${shadowClass} ${className}`.trim()}
    >
      {(heading || caption) && (
        <div className={`flex flex-col ${!description ? "flex-1" : ""}`}>
          {caption && <Heading level={6} className={`font-medium ${captionClass}`.trim()}>{caption}</Heading>}
          {heading && (
            <Heading
              level={4}
              className={`flex gap-[10px] ${headingClass}`.trim()}
            >
              {heading}
              {headingIcon}
            </Heading>
          )}
        </div>
      )}
      {description && <Paragraph size="lg" className="flex-1 mb-6">{description}</Paragraph>}
      {children}
    </div>
  );
}
