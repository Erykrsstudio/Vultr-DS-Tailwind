import type { ReactNode } from "react";
import { Heading } from "@/components/heading";
import { Paragraph } from "./paragraph";

type CardType = "default" | "primary";

const typeClasses: Record<CardType, string> = {
  default: "default",
  primary: "primary",
};

interface CardProps {
  type?: CardType;
  className?: string;
  heading?: ReactNode;
  headingClass?: string;
  headingIcon?: ReactNode;
  description?: string;
}

export function Feature({
  type = "default",
  className = "",
  heading,
  headingClass = "",
  headingIcon,
  description,
}: CardProps) {
  const typeClass = typeClasses[type];

  return (
    <div
      className={`flex flex-col bg-muted p-6 gap-0.5 ${typeClass} ${className}`.trim()}
    >
        <div className="flex gap-0.5 items-center">
          {heading && <Heading level={4} className={`text-muted-foreground ${headingClass}`}>{heading}</Heading>}
          {headingIcon && <span className="mb-6">{headingIcon}</span>}
        </div>
        {description && <Paragraph size="lg" className="flex-1 mb-6">{description}</Paragraph>}
    </div>
  );
}
