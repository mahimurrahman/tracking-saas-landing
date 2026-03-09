import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    interactive?: boolean;
  }
>;

export function Card({
  children,
  className,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "surface-card rounded-3xl p-6 sm:p-7",
        interactive && "transition-transform duration-200 will-change-transform",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
