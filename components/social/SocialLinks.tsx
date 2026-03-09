"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter, Youtube, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cardHover, fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

type SocialLinksProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: {
    label: string;
    href: string;
    icon: "linkedin" | "youtube" | "twitter";
  }[];
};

const iconMap: Record<SocialLinksProps["items"][number]["icon"], LucideIcon> = {
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube
};

export function SocialLinks({
  id,
  eyebrow,
  title,
  description,
  items
}: SocialLinksProps) {
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
            <SectionHeader
              align="center"
              description={description}
              eyebrow={eyebrow}
              title={title}
            />
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
            variants={staggerContainer}
          >
            {items.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <motion.div key={item.label} variants={fadeUp} whileHover={cardHover}>
                  <Card className="h-full p-0" interactive>
                    <Button
                      aria-label={`Open ${item.label}`}
                      className="h-full min-h-40 w-full rounded-[1.5rem] px-6 py-8"
                      external
                      href={item.href}
                      leftIcon={<Icon className="h-8 w-8" />}
                      rightIcon={<ArrowUpRight className="h-5 w-5" />}
                      size="lg"
                      variant="ghost"
                    >
                      {item.label}
                    </Button>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
