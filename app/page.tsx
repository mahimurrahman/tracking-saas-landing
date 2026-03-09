import { BrandLogos } from "@/components/brands/BrandLogos";
import { CTASection } from "@/components/cta/CTASection";
import { FAQSection } from "@/components/faq/FAQSection";
import { Footer } from "@/components/footer/Footer";
import { HeroSection } from "@/components/hero/HeroSection";
import { Navbar } from "@/components/navbar/Navbar";
import { ProcessSection } from "@/components/process/ProcessSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { SocialLinks } from "@/components/social/SocialLinks";
import { StatsSection } from "@/components/stats/StatsSection";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { brands } from "@/data/brands";
import { faqItems } from "@/data/faq";
import { processSteps } from "@/data/process";
import { services } from "@/data/services";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

const socialItems = [
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: "linkedin" as const
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: "youtube" as const
  },
  {
    label: "Twitter",
    href: siteConfig.social.twitter,
    icon: "twitter" as const
  }
];

export default function HomePage() {
  return (
    <>
      <Navbar
        cta={siteConfig.navbarCta}
        items={siteConfig.navigation}
        logo={siteConfig.name}
      />

      <main id="main-content">
        <HeroSection
          bullets={siteConfig.hero.bullets}
          cta={siteConfig.hero.primaryCta}
          description={siteConfig.hero.description}
          eyebrow={siteConfig.hero.eyebrow}
          id={siteConfig.sectionIds.home}
          media={siteConfig.hero.media}
          secondaryBadge={siteConfig.hero.secondaryBadge}
          title={siteConfig.hero.title}
        />

        <BrandLogos eyebrow={siteConfig.sections.brands.eyebrow} items={brands} />

        <StatsSection
          description={siteConfig.sections.stats.description}
          eyebrow={siteConfig.sections.stats.eyebrow}
          items={stats}
          title={siteConfig.sections.stats.title}
        />

        <ServicesSection
          description={siteConfig.sections.services.description}
          eyebrow={siteConfig.sections.services.eyebrow}
          id={siteConfig.sectionIds.services}
          items={services}
          title={siteConfig.sections.services.title}
        />

        <Testimonials
          description={siteConfig.sections.testimonials.description}
          eyebrow={siteConfig.sections.testimonials.eyebrow}
          items={testimonials}
          title={siteConfig.sections.testimonials.title}
        />

        <ProcessSection
          description={siteConfig.sections.process.description}
          eyebrow={siteConfig.sections.process.eyebrow}
          id={siteConfig.sectionIds.process}
          items={processSteps}
          title={siteConfig.sections.process.title}
        />

        <FAQSection
          description={siteConfig.sections.faq.description}
          eyebrow={siteConfig.sections.faq.eyebrow}
          id={siteConfig.sectionIds.faq}
          items={faqItems}
          title={siteConfig.sections.faq.title}
        />

        <CTASection
          buttonHref={siteConfig.sections.cta.buttonHref}
          buttonLabel={siteConfig.sections.cta.buttonLabel}
          description={siteConfig.sections.cta.description}
          eyebrow={siteConfig.sections.cta.eyebrow}
          title={siteConfig.sections.cta.title}
        />

        <SocialLinks
          description={siteConfig.sections.social.description}
          eyebrow={siteConfig.sections.social.eyebrow}
          id={siteConfig.sectionIds.contact}
          items={socialItems}
          title={siteConfig.sections.social.title}
        />
      </main>

      <Footer
        copyright={siteConfig.footer.copyright}
        links={siteConfig.footer.links}
      />
    </>
  );
}
