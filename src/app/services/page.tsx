import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Photography Services & Pricing | Wedding, Portrait, Events",
  description:
    "Explore our professional photography services and packages. Wedding photography, portrait sessions, fashion shoots, and event coverage in Pune. Competitive pricing.",
  keywords: [
    "photography services",
    "wedding photography packages",
    "photography pricing Pune",
    "portrait session cost",
    "event photography rates",
  ],
};

export default function ServicesPage() {
  return <ServicesContent />;
}
