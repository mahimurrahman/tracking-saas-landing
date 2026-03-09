import { memo } from "react";

import { Activity, Funnel, MousePointerClick, Radar, Server, Target, type LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/Card";
import type { ServiceItem } from "@/types/service";

type ServiceCardProps = {
  item: ServiceItem;
};

const iconMap: Record<string, LucideIcon> = {
  attribution: Target,
  funnel: Funnel,
  googleAds: MousePointerClick,
  metaPixel: Radar,
  server: Server,
  tracking: Activity
};

export const ServiceCard = memo(function ServiceCard({ item }: ServiceCardProps) {
  const Icon = iconMap[item.icon] ?? Activity;

  return (
    <Card className="h-full" interactive>
      <div className="space-y-5">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(79,70,229,0.16)] text-accent ring-1 ring-[rgba(99,102,241,0.3)]">
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-sm leading-7 text-muted">{item.description}</p>
        </div>
      </div>
    </Card>
  );
});
