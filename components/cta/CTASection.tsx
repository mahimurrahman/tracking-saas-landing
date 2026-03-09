"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, viewportOnce } from "@/lib/animations";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTASection({
  eyebrow,
  title,
  description,
  buttonLabel,
  buttonHref
}: CTASectionProps) {
  return (
    <motion.section
      className="section-spacing"
      initial="hidden"
      variants={fadeUp}
      viewport={viewportOnce}
      whileInView="visible"
    >
      <Container>
        <Card className="overflow-hidden p-0">
          <div className="relative isolate rounded-[1.75rem] bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.24),transparent_45%)] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="mx-auto max-w-3xl space-y-8 text-center">
              <SectionHeader
                align="center"
                description={description}
                eyebrow={eyebrow}
                title={title}
              />
              <div className="flex justify-center">
                <Button
                  href={buttonHref}
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  size="lg"
                  variant="primary"
                >
                  {buttonLabel}
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </motion.section>
  );
}
