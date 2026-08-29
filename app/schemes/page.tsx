import type { Metadata } from "next";

import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { FloatingWhatsApp } from "@/sections/FloatingWhatsApp";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { SchemeAccordion } from "@/components/SchemeAccordion";
import { BRAND } from "@/config/brand";
import { GOLDEN_GOAL, type SchemeBenefit } from "@/config/goldenGoal";
import { whatsappHref } from "@/lib/format";

export const metadata: Metadata = {
  title: "Golden Goal — Gold Saving Scheme",
  description:
    "Golden Goal is an 11-month Gold Advance Booking Scheme from Iskan Jewellers, Taliparamba. Save from ₹500, build gold at the rate on each payment date, with home service and a 50% diamond making-charge benefit — all subject to the scheme terms.",
  alternates: { canonical: "/schemes" },
};

const joinHref = whatsappHref(BRAND.whatsapp, GOLDEN_GOAL.joinMessage);

/** Minimal line-icons for the benefit cards. */
function BenefitIcon({ name }: { name: SchemeBenefit["icon"] }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
    "aria-hidden": true,
  };
  switch (name) {
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 3l7 3v5c0 4.5-3 7.6-7 9-4-1.4-7-4.5-7-9V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "home":
      return (
        <svg {...props}>
          <path d="M4 10.5 12 4l8 6.5" />
          <path d="M6 9.5V20h12V9.5" />
          <path d="M10 20v-5h4v5" />
        </svg>
      );
    case "coins":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v3c0 1.7 3.1 3 7 3s7-1.3 7-3v-3" />
        </svg>
      );
    case "diamond":
      return (
        <svg {...props}>
          <path d="M6 3h12l4 6-10 12L2 9z" />
          <path d="M2 9h20" />
          <path d="M9 3 6 9l6 12 6-12-3-6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SchemesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 — HERO */}
        <section className="relative flex min-h-[90svh] w-full items-center overflow-hidden pb-20 pt-32">
          <img
            src="/collections/jia-gold.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="container-lux relative z-10">
            <div className="max-w-2xl">
              <p className="label-eyebrow">{BRAND.businessName}</p>
              <h1 className="mt-4 font-display text-display-xl text-gold-sweep">
                {GOLDEN_GOAL.name}
              </h1>
              <p className="mt-2 font-sans text-caption uppercase tracking-[0.24em] text-gold/85">
                {GOLDEN_GOAL.subtitle}
              </p>
              <p className="mt-6 font-malayalam text-body-lg text-gold">
                {GOLDEN_GOAL.malayalamTagline}
              </p>
              <p className="mt-5 max-w-xl font-sans text-body-lg text-ivory/85">
                {GOLDEN_GOAL.intro}
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {GOLDEN_GOAL.pills.map((pill) => (
                  <li
                    key={pill}
                    className="rounded-pill border border-gold/30 bg-background/40 px-4 py-1.5 font-sans text-caption uppercase tracking-[0.12em] text-gold backdrop-blur-sm"
                  >
                    {pill}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href={joinHref} external variant="primary">
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2 — HOW IT WORKS */}
        <section className="py-20 md:py-28">
          <div className="container-lux">
            <Reveal>
              <SectionHeading eyebrow="Simple Steps" title="How Golden Goal Works" align="center" />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {GOLDEN_GOAL.steps.map((step, index) => (
                <Reveal key={step.number} delay={index * 0.08}>
                  <div className="h-full rounded-card border border-border bg-white/[0.02] p-8">
                    <span className="font-display text-display-m text-gold/70">{step.number}</span>
                    <h3 className="mt-4 font-sans text-caption uppercase tracking-[0.18em] text-gold">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-sans text-body text-muted">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3 — KEY BENEFITS */}
        <section className="border-t border-border py-20 md:py-28">
          <div className="container-lux">
            <Reveal>
              <SectionHeading eyebrow="Why Join" title="Why Golden Goal?" align="center" />
            </Reveal>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {GOLDEN_GOAL.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={(index % 2) * 0.08}>
                  <div className="flex h-full items-start gap-5 rounded-card border border-border bg-white/[0.02] p-8">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 text-gold">
                      <BenefitIcon name={benefit.icon} />
                    </span>
                    <div>
                      <h3 className="font-sans text-caption uppercase tracking-[0.16em] text-gold">
                        {benefit.title}
                      </h3>
                      <p className="mt-2 font-sans text-body text-muted">{benefit.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-8 text-center font-sans text-caption text-muted">
              All benefits are subject to the scheme terms &amp; conditions.
            </p>
          </div>
        </section>

        {/* 4 — IMPORTANT TO KNOW */}
        <section className="py-20 md:py-28">
          <div className="container-lux max-w-3xl">
            <Reveal>
              <SectionHeading eyebrow="Please Note" title="Important to Know" />
            </Reveal>
            <ul className="mt-10 flex flex-col gap-5">
              {GOLDEN_GOAL.importantToKnow.map((point) => (
                <li key={point} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  />
                  <span className="font-sans text-body-lg text-ivory/85">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 — TERMS & CONDITIONS */}
        <section className="border-t border-border py-20 md:py-28">
          <div className="container-lux max-w-3xl">
            <Reveal>
              <SectionHeading eyebrow="The Fine Print" title="Terms & Conditions" />
            </Reveal>
            <div className="mt-10">
              <SchemeAccordion items={GOLDEN_GOAL.terms} />
            </div>
          </div>
        </section>

        {/* 6 — FINAL CTA */}
        <section className="border-t border-border py-24 md:py-32">
          <div className="container-lux flex flex-col items-center gap-8 text-center">
            <Reveal>
              <h2 className="mx-auto max-w-3xl font-display text-display-l text-ivory">
                Start your Golden Goal today
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mx-auto max-w-xl font-sans text-body-lg text-muted">
                Save monthly. Plan your next jewellery purchase with {BRAND.businessName}.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href={joinHref} external variant="primary">
                  Join Golden Goal
                </Button>
                <Button href="/#contact" variant="secondary">
                  Contact Us
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
