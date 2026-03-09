import { memo } from "react";

import { Card } from "@/components/ui/Card";
import type { StatItem } from "@/types/stats";

type StatsCardProps = {
  item: StatItem;
};

export const StatsCard = memo(function StatsCard({ item }: StatsCardProps) {
  return (
    <Card className="h-full" interactive>
      <div className="space-y-4">
        <p className="font-heading text-4xl font-bold tracking-tight text-white">{item.value}</p>
        <div className="space-y-2">
          <p className="text-lg font-semibold text-white">{item.label}</p>
          <p className="text-sm leading-7 text-muted">{item.description}</p>
        </div>
      </div>
    </Card>
  );
});
