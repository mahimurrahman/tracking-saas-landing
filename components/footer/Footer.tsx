import Link from "next/link";

import { Container } from "@/components/ui/Container";

type FooterProps = {
  copyright: string;
  links: readonly {
    label: string;
    href: string;
  }[];
};

export function Footer({ copyright, links }: FooterProps) {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container>
        <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{copyright}</p>
          <nav aria-label="Footer links" className="flex flex-wrap items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                className="transition-colors hover:text-white focus-visible:outline-none focus-visible:text-white"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
