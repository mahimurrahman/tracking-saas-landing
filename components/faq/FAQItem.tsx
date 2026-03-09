"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { Card } from "@/components/ui/Card";
import { accordionContent } from "@/lib/animations";
import { cn } from "@/lib/utils";

type FAQItemProps = {
  answer: string;
  controlsId: string;
  isOpen: boolean;
  question: string;
  triggerId: string;
  onToggle: () => void;
};

export function FAQItem({
  answer,
  controlsId,
  isOpen,
  question,
  triggerId,
  onToggle
}: FAQItemProps) {
  return (
    <Card className="p-0">
      <div className="overflow-hidden rounded-3xl">
        <button
          aria-controls={controlsId}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          id={triggerId}
          onClick={onToggle}
          type="button"
        >
          <span className="text-base font-semibold sm:text-lg">{question}</span>
          <ChevronDown
            className={cn(
              "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
              isOpen && "rotate-180 text-white"
            )}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              animate="open"
              aria-labelledby={triggerId}
              className="overflow-hidden"
              exit="closed"
              id={controlsId}
              initial="closed"
              role="region"
              variants={accordionContent}
            >
              <div className="border-t border-white/8 px-6 py-5">
                <p className="max-w-3xl text-sm leading-7 text-muted">{answer}</p>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Card>
  );
}
