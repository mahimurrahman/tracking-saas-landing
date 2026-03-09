"use client";

import { motion } from "framer-motion";
import {
  Chrome,
  Clapperboard,
  CreditCard,
  Layers3,
  Package2,
  ShoppingBag,
  type LucideIcon
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { BrandItem } from "@/types/brand";

type BrandLogosProps = {
  eyebrow: string;
  items: BrandItem[];
};

const brandIconMap: Record<string, LucideIcon> = {
  amazon: Package2,
  google: Chrome,
  meta: Layers3,
  shopify: ShoppingBag,
  stripe: CreditCard,
  tiktok: Clapperboard
};

export function BrandLogos({ eyebrow, items }: BrandLogosProps) {
  return (
    <motion.section
      className="pb-8 sm:pb-12"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportOnce}
      whileInView="visible"
    >
      <Container>
        <motion.div className="space-y-8" variants={fadeUp}>
          <div className="flex justify-center">
            <Badge variant="neutral">{eyebrow}</Badge>
          </div>

          <motion.div className="flex flex-wrap items-center justify-center gap-3 opacity-70" variants={staggerContainer}>
            {items.map((item) => {
              const Icon = brandIconMap[item.icon] ?? Chrome;

              return (
                <motion.div
                  key={item.name}
                  className="flex min-w-32 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/85"
                  variants={fadeUp}
                >
                  <Icon className="h-4 w-4 text-accent" />
                  <span>{item.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
