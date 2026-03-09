import type { FaqItem } from "@/types/faq";

export const faqItems: FaqItem[] = [
  {
    question: "Why is tracking important?",
    answer:
      "Without reliable tracking, ad platforms optimize against incomplete data. Accurate tracking shows what is working, where revenue really comes from, and which campaigns are wasting budget."
  },
  {
    question: "What tools do you use?",
    answer:
      "Typical setups include Google Tag Manager, Google Analytics 4, Google Ads conversion tracking, Meta Pixel, Conversion API, and server-side tagging when the funnel requires it."
  },
  {
    question: "How long does the setup take?",
    answer:
      "Most standard implementations are completed within 24 hours after access is provided. More complex funnels or server-side migrations can take slightly longer."
  },
  {
    question: "Do you work with Shopify or WordPress?",
    answer:
      "Yes. Shopify, WordPress, and most custom landing page stacks can be supported as long as the required access is available."
  },
  {
    question: "What do you need from me?",
    answer:
      "Usually access to your website, tag manager, analytics, and ad platform accounts. If needed, a developer can also be looped in for platform-specific deployment steps."
  }
];
