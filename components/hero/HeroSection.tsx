"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, PlayCircle } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { cardHover, fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/animations";

type HeroSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: readonly string[];
  secondaryBadge: string;
  cta: {
    label: string;
    href: string;
  };
  media: {
    src: string;
    alt: string;
  };
};

export function HeroSection({
  id,
  eyebrow,
  title,
  description,
  bullets,
  secondaryBadge,
  cta,
  media
}: HeroSectionProps) {
  return (
    <motion.section
      className="section-spacing relative overflow-hidden"
      id={id}
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportOnce}
      whileInView="visible"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div className="space-y-8" variants={fadeUp}>
            <div className="space-y-6">
              <Badge>{eyebrow}</Badge>
              <div className="space-y-5">
                <h1 className="max-w-3xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {title}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
                  {description}
                </p>
              </div>
            </div>

            <motion.ul className="grid gap-4 sm:grid-cols-2 xl:max-w-2xl" variants={staggerContainer}>
              {bullets.map((bullet) => (
                <motion.li
                  key={bullet}
                  className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-sm text-white/90"
                  variants={fadeUp}
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                href={cta.href}
                leftIcon={<MessageCircle className="h-4 w-4" />}
                rightIcon={<ArrowRight className="h-4 w-4" />}
                variant="primary"
              >
                {cta.label}
              </Button>

              <Badge className="px-4 py-2 text-[0.68rem]" variant="neutral">
                {secondaryBadge}
              </Badge>
            </div>
          </motion.div>

          <motion.div variants={scaleIn}>
            <motion.div whileHover={cardHover}>
              <Card className="overflow-hidden p-3 sm:p-4" interactive>
                <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/40">
                  <div className="absolute left-4 top-4 z-10">
                    <Badge variant="outline">Tracking preview</Badge>
                  </div>
                  <button
                    aria-label="Play placeholder hero preview"
                    className="absolute left-1/2 top-1/2 z-10 inline-flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    type="button"
                  >
                    <PlayCircle className="h-8 w-8" />
                  </button>
                  <Image
                    alt={media.alt}
                    className="aspect-[9/5] w-full object-cover"
                    height={500}
                    priority
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    src={media.src}
                    width={900}
                  />
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
