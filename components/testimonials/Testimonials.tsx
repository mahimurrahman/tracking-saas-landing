"use client";

import { motion } from "framer-motion";
import { PlayCircle, ShieldCheck } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cardHover, fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { TestimonialItem } from "@/types/testimonial";

import { TestimonialCard } from "./TestimonialCard";

type TestimonialsProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: TestimonialItem[];
};

export function Testimonials({ eyebrow, title, description, items }: TestimonialsProps) {
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

          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <motion.div variants={fadeUp} whileHover={cardHover}>
              <Card className="h-full overflow-hidden p-4" interactive>
                <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-white/10">
                  <div className="absolute left-5 top-5 z-10">
                    <Badge variant="outline">Video testimonial</Badge>
                  </div>
                  <button
                    aria-label="Play placeholder testimonial video"
                    className="absolute left-1/2 top-1/2 z-10 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    type="button"
                  >
                    <PlayCircle className="h-8 w-8" />
                  </button>
                  <div className="absolute bottom-5 left-5 z-10 flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-sm text-white backdrop-blur">
                    <ShieldCheck className="h-4 w-4 text-accent" />
                    Client success story placeholder
                  </div>
                  <Image
                    alt="Placeholder testimonial video cover"
                    className="aspect-[4/3] h-full w-full object-cover"
                    height={720}
                    sizes="(min-width: 1280px) 38vw, 100vw"
                    src="https://placehold.co/800x720/png"
                    width={800}
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div className="grid gap-5 md:grid-cols-2 xl:grid-cols-1" variants={staggerContainer}>
              {items.map((item) => (
                <motion.div key={item.name} variants={fadeUp} whileHover={cardHover}>
                  <TestimonialCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
}
