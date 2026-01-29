"use client";

import { Header } from "@/widgets/header/ui";
import { Hero } from "@/widgets/hero/ui";
import { Advantages } from "@/widgets/advantages/ui";
import { Pricing } from "@/widgets/pricing/ui";
import { FAQ } from "@/widgets/faq/ui";
import LeadFormSection from "@/features/lead-form/ui/LeadFormSection";
import { Footer } from "@/widgets/footer/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16">
        <Hero />
        <Advantages />
        <Pricing />
        <FAQ />
        <LeadFormSection />
      </main>

      <Footer />
    </div>
  );
}
