import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms placeholder for ${siteConfig.name}.`
};

export default function TermsPage() {
  return (
    <main className="section-spacing" id="main-content">
      <Container size="narrow">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Legal"
            title="Terms"
            description="This placeholder terms page is included so the landing page footer points to working routes in the initial codebase."
          />

          <Card className="space-y-6">
            <p className="text-sm leading-7 text-muted">
              All services, timelines, deliverables, platform access needs, and support terms
              should be confirmed in a client-specific agreement before any production work starts.
            </p>
            <p className="text-sm leading-7 text-muted">
              This route is intentionally lightweight and should be replaced with finalized legal
              copy during launch preparation.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
