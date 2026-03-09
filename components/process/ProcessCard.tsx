import { memo } from "react";

import { Card } from "@/components/ui/Card";
import type { ProcessItem } from "@/types/process";

type ProcessCardProps = {
  item: ProcessItem;
};

export const ProcessCard = memo(function ProcessCard({ item }: ProcessCardProps) {
  return (
    <Card className="h-full" interactive>
      <div className="space-y-5">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-heading text-lg font-semibold text-accent">
          {item.step}
        </div>
        <div className="space-y-3">
          <h3 className="font-heading text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-sm leading-7 text-muted">{item.description}</p>
        </div>
      </div>
    </Card>
  );
});
