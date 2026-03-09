import type { Metadata } from "next";

import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy placeholder for ${siteConfig.name}.`
};

export default function PrivacyPolicyPage() {
  return (
    <main className="section-spacing" id="main-content">
      <Container size="narrow">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Legal"
            title="Privacy Policy"
            description="This placeholder policy explains the type of privacy information that will be published for the final production website."
          />

          <Card className="space-y-6">
            <p className="text-sm leading-7 text-muted">
              {siteConfig.name} may collect contact details, analytics data, and project
              communication needed to provide tracking and analytics services. Information is used
              only for client communication, project delivery, and service improvement.
            </p>
            <p className="text-sm leading-7 text-muted">
              Final policy language should be reviewed and replaced with jurisdiction-specific
              legal text before launch. This page exists so footer links resolve correctly in this
              implementation.
            </p>
          </Card>
        </div>
      </Container>
    </main>
  );
}
