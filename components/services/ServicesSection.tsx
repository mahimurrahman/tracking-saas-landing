"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cardHover, fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { ServiceItem } from "@/types/service";

import { ServiceCard } from "./ServiceCard";

type ServicesSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

export function ServicesSection({
  id,
  eyebrow,
  title,
  description,
  items
}: ServicesSectionProps) {
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
              <motion.div key={item.title} variants={fadeUp} whileHover={cardHover}>
                <ServiceCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
