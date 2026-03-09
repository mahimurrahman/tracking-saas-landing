export const siteConfig = {
  name: "Maruf Dewan",
  profession: "Tracking & Analytics Specialist",
  title: "Maruf Dewan — Tracking & Analytics Specialist",
  description: "Fix your ad tracking and scale profitable campaigns with reliable analytics.",
  url: "https://maruf-tracking-landing.vercel.app",
  ogImage: "https://placehold.co/1200x630/png",
  whatsapp: "https://wa.me/8801000000000",
  email: "hello@marufdewan.com",
  social: {
    linkedin: "https://www.linkedin.com/in/marufdewan",
    youtube: "https://www.youtube.com/@marufdewan",
    twitter: "https://twitter.com/marufdewan"
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],
  sectionIds: {
    home: "home",
    services: "services",
    process: "process",
    faq: "faq",
    contact: "contact"
  },
  hero: {
    eyebrow: "Tracking & Analytics Specialist",
    title: "See exactly where your ad spend is leaking",
    description:
      "Accurate tracking helps you understand what works, eliminate waste, and scale profitable campaigns.",
    bullets: [
      "Tracking setup within 24 hours",
      "Done-for-you setup",
      "Ongoing expert support"
    ],
    primaryCta: {
      label: "Chat on WhatsApp",
      href: "https://wa.me/8801000000000"
    },
    secondaryBadge: "Clean data. Faster decisions.",
    media: {
      src: "https://placehold.co/900x500/png",
      alt: "Placeholder preview of a tracking dashboard and analytics setup"
    }
  },
  sections: {
    brands: {
      eyebrow: "Trusted ecosystem"
    },
    stats: {
      eyebrow: "Results",
      title: "Real Results from Accurate Tracking",
      description:
        "Reliable implementation creates better bidding signals, cleaner attribution, and a clearer path to profitable scaling."
    },
    services: {
      eyebrow: "Services",
      title: "Accurate Tracking, Better Decisions",
      description:
        "From first-click visibility to server-side reliability, every setup is designed to improve clarity across your funnel."
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "Trusted by hundreds of satisfied clients",
      description:
        "Operators and founders rely on Maruf to turn broken, partial tracking into dependable reporting they can act on."
    },
    process: {
      eyebrow: "Process",
      title: "Tracking Made Easy",
      description: "The simplest process you'll ever experience"
    },
    faq: {
      eyebrow: "FAQs",
      title: "Questions you may ask",
      description:
        "Clear answers to the most common implementation, platform, and access questions before you get started."
    },
    cta: {
      eyebrow: "Ready to fix it?",
      title: "Let's fix your website tracking issues",
      description:
        "Book a free consultation and discover where your marketing data is broken.",
      buttonLabel: "Schedule a Call",
      buttonHref: "#contact"
    },
    social: {
      eyebrow: "Contact",
      title: "Connect with Maruf Dewan",
      description:
        "Start the conversation on the platforms where founders and performance teams already keep in touch."
    }
  },
  navbarCta: {
    label: "Book a Call",
    href: "#contact"
  },
  footer: {
    copyright: "© 2026 Maruf Dewan",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
      { label: "Contact", href: "/contact" }
    ]
  },
  contactPage: {
    title: "Contact Maruf Dewan",
    description:
      "Reach out to discuss tracking, analytics, and ad attribution issues across your funnel."
  }
} as const;
