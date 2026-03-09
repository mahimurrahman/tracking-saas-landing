import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn, isExternalHref, isHashLink } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
};

type ButtonAsButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    external?: boolean;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const sizeClasses = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm sm:text-base",
  lg: "h-14 px-6 text-base"
};

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  ghost:
    "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10"
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50";

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      children,
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      fullWidth = false,
      href,
      external,
      ...anchorProps
    } = props;
    const classes = cn(
      baseClasses,
      sizeClasses[size],
      variantClasses[variant],
      fullWidth && "w-full",
      className
    );
    const content = (
      <>
        {leftIcon}
        <span>{children}</span>
        {rightIcon}
      </>
    );
    const shouldUseAnchor = external || isExternalHref(href) || isHashLink(href);

    if (shouldUseAnchor) {
      return (
        <a
          className={classes}
          href={href}
          rel={external || isExternalHref(href) ? "noreferrer" : undefined}
          target={external || isExternalHref(href) ? "_blank" : undefined}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <Link className={classes} href={href}>
        {content}
      </Link>
    );
  }

  const buttonOnlyProps = props as ButtonAsButtonProps;
  const {
    children,
    className,
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    fullWidth = false,
    type = "button" as ButtonHTMLAttributes<HTMLButtonElement>["type"],
    ...buttonProps
  } = buttonOnlyProps;
  const classes = cn(
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth && "w-full",
    className
  );
  const content = (
    <>
      {leftIcon}
      <span>{children}</span>
      {rightIcon}
    </>
  );

  return (
    <button className={classes} type={type} {...buttonProps}>
      {content}
    </button>
  );
}
