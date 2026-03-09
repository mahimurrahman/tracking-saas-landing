import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div className={cn("space-y-5", isCentered && "mx-auto text-center", className)}>
      {eyebrow ? (
        <Badge className={cn(isCentered && "justify-center")} variant="neutral">
          {eyebrow}
        </Badge>
      ) : null}

      <div className={cn("space-y-4", isCentered && "mx-auto max-w-3xl")}>
        <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="text-base leading-8 text-muted sm:text-lg">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
