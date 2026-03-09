"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";
import type { FaqItem } from "@/types/faq";

import { FAQItem } from "./FAQItem";

type FAQSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: FaqItem[];
};

export function FAQSection({ id, eyebrow, title, description, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <motion.section
      className="section-spacing"
      id={id}
      initial="hidden"
      variants={staggerContainer}
      viewport={viewportOnce}
      whileInView="visible"
    >
      <Container size="narrow">
        <div className="space-y-10">
          <motion.div variants={fadeUp}>
            <SectionHeader
              align="center"
              description={description}
              eyebrow={eyebrow}
              title={title}
            />
          </motion.div>

          <motion.div className="space-y-4" variants={staggerContainer}>
            {items.map((item, index) => {
              const controlsId = `faq-panel-${index}`;
              const triggerId = `faq-trigger-${index}`;

              return (
                <motion.div key={item.question} variants={fadeUp}>
                  <FAQItem
                    answer={item.answer}
                    controlsId={controlsId}
                    isOpen={openIndex === index}
                    onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                    question={item.question}
                    triggerId={triggerId}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
}
