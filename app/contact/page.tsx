import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: siteConfig.contactPage.description
};

export default function ContactPage() {
  return (
    <main className="section-spacing" id="main-content">
      <Container size="narrow">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Contact"
            title={siteConfig.contactPage.title}
            description={siteConfig.contactPage.description}
          />

          <div className="grid gap-5 md:grid-cols-2">
            <Card className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(79,70,229,0.16)] text-accent ring-1 ring-[rgba(99,102,241,0.3)]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading text-2xl font-semibold text-white">WhatsApp</h2>
                <p className="text-sm leading-7 text-muted">
                  Start with a direct conversation about broken tracking, missing revenue data, or
                  platform attribution issues.
                </p>
              </div>
              <Button
                external
                href={siteConfig.whatsapp}
                rightIcon={<ArrowUpRight className="h-4 w-4" />}
                variant="primary"
              >
                Chat on WhatsApp
              </Button>
            </Card>

            <Card className="space-y-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-2">
                <h2 className="font-heading text-2xl font-semibold text-white">Email</h2>
                <p className="text-sm leading-7 text-muted">
                  For project scope, access questions, or partnership discussions, you can also
                  reach out by email.
                </p>
              </div>
              <Button href={`mailto:${siteConfig.email}`} variant="secondary">
                {siteConfig.email}
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
