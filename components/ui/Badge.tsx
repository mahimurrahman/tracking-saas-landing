import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    variant?: "accent" | "neutral" | "outline";
  }
>;

const variantClasses = {
  accent: "bg-[rgba(79,70,229,0.18)] text-white ring-1 ring-[rgba(99,102,241,0.35)]",
  neutral: "bg-white/6 text-muted ring-1 ring-white/10",
  outline: "bg-transparent text-white ring-1 ring-white/15"
};

export function Badge({
  children,
  className,
  variant = "accent",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em]",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
