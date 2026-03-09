import type { ServiceItem } from "@/types/service";

export const services: ServiceItem[] = [
  {
    title: "Tracking and Analytics Setup",
    description:
      "Build a dependable measurement foundation across ads, analytics, and your website so every campaign decision starts with clean data.",
    icon: "tracking"
  },
  {
    title: "Server Side Tracking",
    description:
      "Reduce browser-side signal loss with resilient server-side tracking that improves match quality and attribution reliability.",
    icon: "server"
  },
  {
    title: "Ad Revenue Attribution",
    description:
      "Connect ad platforms to downstream revenue signals so you can see which campaigns, audiences, and creatives actually drive profit.",
    icon: "attribution"
  },
  {
    title: "Google Ads Conversion Tracking",
    description:
      "Implement accurate conversion events and values inside Google Ads to sharpen bidding, reporting, and budget allocation.",
    icon: "googleAds"
  },
  {
    title: "Facebook Pixel + Conversion API",
    description:
      "Pair browser and server events for Meta so optimization has stronger signals and your campaign data stays consistent.",
    icon: "metaPixel"
  },
  {
    title: "Funnel Tracking",
    description:
      "Track every key step from landing page to purchase to uncover drop-off points and reveal where scaling is being blocked.",
    icon: "funnel"
  }
];
