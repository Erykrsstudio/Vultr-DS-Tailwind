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
      className={`flex flex-col bg-muted p-6 gap-2 rounded-3xl ${typeClass} ${className}`.trim()}
    >
        <div className="flex gap-2.5 items-center">
          {heading && <Heading level={4} className={`text-muted-foreground text-4xl ${headingClass}`}>{heading}</Heading>}
          {headingIcon && <span className="mb-6">{headingIcon}</span>}
        </div>
        {description && <Paragraph size="md" className="flex-1">{description}</Paragraph>}
    </div>
  );
}
