import type { ReactNode } from "react";
import { Heading } from "@/components/heading";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Button } from "@/components/ui/button";


type CardType = "default" | "primary";


const typeClasses: Record<CardType, string> = {
  default: "default",
  primary: "primary",
};

interface LoginCardProps {
  children?: ReactNode;
  type?: CardType;
  className?: string;
  shadow?: boolean;
  heading?: ReactNode;
  headingClass?: string;
  headingIcon?: ReactNode;
  caption?: ReactNode;
  description?: string;
}

export function LoginCard({
  type = "default",
  className = "",
  shadow = false,
  heading,
  headingClass = "",
}: LoginCardProps) {
    const typeClass = typeClasses[type];
    const shadowClass = shadow ? "shadow-lg" : "";

  return (
    <div
      className={`flex flex-col bg-card p-8 ${typeClass} ${shadowClass} ${className}`.trim()}
    >
        <div className={`flex flex-col`}>
          {heading && (<Heading level={4} className={headingClass}>{heading}</Heading>)}
        </div>
        <div className="flex flex-col gap-5">
            <Input size="xl" placeholder="Email"/>
            <Input size="xl" placeholder="Password"/>
            <FieldGroup className="mx-auto w-56">
                <Field orientation="horizontal">
                    <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
                    <FieldLabel htmlFor="terms-checkbox-basic">
                        Accept terms and conditions
                    </FieldLabel>
                </Field>
            </FieldGroup>
            <Button size="xl">Create free account</Button>
        </div>
    </div>
  );
}
