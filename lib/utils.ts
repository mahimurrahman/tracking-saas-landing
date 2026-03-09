import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isHashLink(href: string) {
  return href.startsWith("#");
}

export function getSectionId(href: string) {
  return href.replace(/^#/, "");
}

export function scrollToHash(href: string) {
  if (typeof window === "undefined" || !isHashLink(href)) {
    return;
  }

  const sectionId = getSectionId(href);
  const element = document.getElementById(sectionId);

  if (!element) {
    window.location.hash = href;
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  window.history.replaceState(null, "", href);
}

export function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/.test(href);
}
