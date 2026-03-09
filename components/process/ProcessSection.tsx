"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cardHover, fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { ProcessItem } from "@/types/process";

import { ProcessCard } from "./ProcessCard";

type ProcessSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ProcessItem[];
};

export function ProcessSection({
  id,
  eyebrow,
  title,
  description,
  items
}: ProcessSectionProps) {
  return (
    <motion.section
      className="section-spacing"
      id={id}
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
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
          >
            {items.map((item) => (
              <motion.div key={item.step} variants={fadeUp} whileHover={cardHover}>
                <ProcessCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
