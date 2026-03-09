"use client";

import { useEffect, useState, type MouseEvent } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { isHashLink, scrollToHash } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  logo: string;
  items: readonly NavItem[];
  cta: {
    label: string;
    href: string;
  };
};

export function Navbar({ logo, items, cta }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavigation = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (!isHashLink(href)) {
      setIsOpen(false);
      return;
    }

    event.preventDefault();
    setIsOpen(false);
    scrollToHash(href);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <Container size="wide">
        <div className="glass-panel flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <a
            aria-label="Go to the top of the page"
            className="font-heading text-lg font-bold tracking-[0.2em] text-white"
            href="#home"
            onClick={handleNavigation("#home")}
          >
            {logo}
          </a>

          <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
            {items.map((item) => (
              <a
                key={item.href}
                className="text-sm font-medium text-muted transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                href={item.href}
                onClick={handleNavigation(item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              aria-label={cta.label}
              href={cta.href}
              onClick={isHashLink(cta.href) ? handleNavigation(cta.href) : undefined}
              variant="primary"
            >
              {cta.label}
            </Button>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent lg:hidden"
            onClick={() => setIsOpen((previous) => !previous)}
            type="button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden"
            exit={{ opacity: 0, y: -10 }}
            initial={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <Container className="pt-3" size="wide">
              <nav
                aria-label="Mobile navigation"
                className="glass-panel space-y-2 rounded-[2rem] p-3"
                id="mobile-navigation"
              >
                {items.map((item) => (
                  <a
                    key={item.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    href={item.href}
                    onClick={handleNavigation(item.href)}
                  >
                    {item.label}
                  </a>
                ))}

                <Button
                  aria-label={cta.label}
                  className="mt-2"
                  fullWidth
                  href={cta.href}
                  onClick={isHashLink(cta.href) ? handleNavigation(cta.href) : undefined}
                  variant="primary"
                >
                  {cta.label}
                </Button>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
