import type { TestimonialItem } from "@/types/testimonial";

export const testimonials = [
  {
    name: "Nadim Hasan",
    position: "Growth Lead",
    company: "Atlas Commerce",
    review:
      "Maruf cleaned up a messy multi-platform setup and finally gave us confidence in what was driving revenue. The difference in reporting clarity was immediate.",
    avatar: "https://placehold.co/96x96/png"
  },
  {
    name: "Sarah Mitchell",
    position: "Founder",
    company: "NorthPeak Skincare",
    review:
      "We were scaling ads with incomplete data. After the new tracking setup, wasted spend dropped and our team could make decisions without second-guessing the numbers.",
    avatar: "https://placehold.co/96x96/png"
  },
  {
    name: "Imran Kabir",
    position: "Performance Marketing Manager",
    company: "Nova Retail",
    review:
      "The implementation was fast, the communication was clear, and the reporting became far more actionable. It felt like moving from guesswork to control.",
    avatar: "https://placehold.co/96x96/png"
  }
] satisfies TestimonialItem[];
