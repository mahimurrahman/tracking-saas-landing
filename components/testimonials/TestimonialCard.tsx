import { memo } from "react";

import { Quote } from "lucide-react";
import Image from "next/image";

import { Card } from "@/components/ui/Card";
import type { TestimonialItem } from "@/types/testimonial";

type TestimonialCardProps = {
  item: TestimonialItem;
};

export const TestimonialCard = memo(function TestimonialCard({ item }: TestimonialCardProps) {
  return (
    <Card className="h-full" interactive>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              alt={`${item.name} avatar`}
              className="h-14 w-14 rounded-full border border-white/10 object-cover"
              height={56}
              sizes="56px"
              src={item.avatar}
              width={56}
            />
            <div className="space-y-1">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-muted">
                {item.position}, {item.company}
              </p>
            </div>
          </div>

          <Quote className="h-5 w-5 text-accent" />
        </div>

        <p className="text-sm leading-7 text-muted">{item.review}</p>
      </div>
    </Card>
  );
});
