import type { Metadata } from "next";
import Link from "next/link";

import { SchemeAccordion } from "@/components/SchemeAccordion";
import { BRAND } from "@/config/brand";
import { GOLDEN_GOAL, type SchemeBenefit } from "@/config/goldenGoal";
import { telHref, whatsappHref } from "@/lib/format";

export const metadata: Metadata = {
  title: "Golden Goal — Gold Saving Scheme",
  description:
    "Golden Goal is an 11-month Gold Advance Booking Scheme from Iskan Jewellers, Taliparamba. Start with ₹500, build gold at the rate on each payment date, with home service and gold & diamond making-charge benefits — all subject to the scheme terms.",
  alternates: { canonical: "/schemes" },
};

const joinHref = whatsappHref(BRAND.whatsapp, GOLDEN_GOAL.joinMessage);

const btnPrimary =
  "inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-slate-800";
const btnSecondary =
  "inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-slate-400 hover:text-slate-900";

/** Minimal line-icons for the benefit rows. */
function BenefitIcon({ name }: { name: SchemeBenefit["icon"] }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-5 w-5",
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
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-wide text-slate-900">
              {BRAND.businessName}
            </span>
            <span className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#8a6a1a]">
              Golden Goal Scheme
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="hidden text-sm text-slate-600 transition-colors hover:text-slate-900 sm:inline">
              Home
            </Link>
            <a href={joinHref} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
              Join Now
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a1a]">
              {GOLDEN_GOAL.subtitle}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              {GOLDEN_GOAL.name}
            </h1>
            <p className="mt-3 font-malayalam text-lg font-medium text-[#9a7b2e]">
              {GOLDEN_GOAL.malayalamTagline}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
              {GOLDEN_GOAL.intro}
            </p>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {GOLDEN_GOAL.pills.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-slate-300 px-4 py-1.5 text-sm font-medium text-slate-700"
                >
                  {pill}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={joinHref} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Join Now
              </a>
              <Link href="/#contact" className={btnSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-[#8a6a1a] md:text-3xl">
            How Golden Goal Works
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {GOLDEN_GOAL.steps.map((step) => (
              <div key={step.number} className="rounded-lg border border-slate-200 p-6">
                <span className="text-sm font-semibold text-[#8a6a1a]">{step.number}</span>
                <h3 className="mt-2 text-base font-semibold text-[#8a6a1a]">{step.title}</h3>
                <p className="mt-2 font-malayalam text-[0.95rem] leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key benefits */}
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Why Golden Goal?
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {GOLDEN_GOAL.benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4efe1] text-[#8a6a1a]">
                    <BenefitIcon name={benefit.icon} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{benefit.title}</h3>
                    <p className="mt-1.5 font-malayalam text-[0.95rem] leading-relaxed text-slate-600">
                      {benefit.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 font-malayalam text-sm text-slate-500">{GOLDEN_GOAL.disclaimer}</p>
          </div>
        </section>

        {/* Important to know */}
        <section className="mx-auto max-w-5xl px-6 py-14 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Important to Know
          </h2>
          <ul className="mt-6 max-w-3xl space-y-4">
            {GOLDEN_GOAL.importantToKnow.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a7b2e]"
                />
                <span className="font-malayalam text-base leading-relaxed text-slate-700">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Terms & Conditions */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-14 md:py-16">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Terms &amp; Conditions
            </h2>
            <p className="mt-2 text-sm text-slate-500">Tap a section to expand.</p>
            <div className="mt-8 max-w-3xl">
              <SchemeAccordion items={GOLDEN_GOAL.terms} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-slate-200">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Start your Golden Goal today
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Save monthly. Plan your next jewellery purchase with {BRAND.businessName}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={joinHref} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Join Golden Goal
              </a>
              <Link href="/#contact" className={btnSecondary}>
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-base font-semibold text-slate-900">{BRAND.businessName}</p>
              <p className="mt-1 max-w-xs text-sm text-slate-500">{BRAND.address}</p>
            </div>
            <div className="text-sm text-slate-600">
              <p>
                <a href={telHref(BRAND.phone)} className="transition-colors hover:text-slate-900">
                  {BRAND.phone}
                </a>
              </p>
              <p className="mt-1">
                <a
                  href={joinHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-slate-900"
                >
                  WhatsApp
                </a>
              </p>
              <p className="mt-1">{BRAND.openingHours}</p>
            </div>
          </div>
          <p className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-400">
            © {year} {BRAND.businessName}. <span className="font-malayalam">{GOLDEN_GOAL.disclaimer}</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
