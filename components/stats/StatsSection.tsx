"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cardHover, fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { StatItem } from "@/types/stats";

import { StatsCard } from "./StatsCard";

type StatsSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: StatItem[];
};

export function StatsSection({ eyebrow, title, description, items }: StatsSectionProps) {
  return (
    <motion.section
      className="section-spacing"
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportOnce}
      whileInView="visible"
    >
      <Container>
        <div className="space-y-12">
          <motion.div variants={fadeUp}>
            <SectionHeader description={description} eyebrow={eyebrow} title={title} />
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
          >
            {items.map((item) => (
              <motion.div key={item.label} variants={fadeUp} whileHover={cardHover}>
                <StatsCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
