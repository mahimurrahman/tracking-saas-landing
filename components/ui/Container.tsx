import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type ContainerProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    size?: "default" | "wide" | "narrow";
  }
>;

const sizeClasses = {
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
  narrow: "max-w-4xl"
};

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizeClasses[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
