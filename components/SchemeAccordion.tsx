"use client";

import { useId, useState } from "react";
import type { SchemeTerm } from "@/config/goldenGoal";

/**
 * Terms & Conditions accordion for the Golden Goal scheme (light / professional
 * theme). English titles, Malayalam body copy. Keyboard accessible, chevron
 * rotates, items open independently. Data comes from GOLDEN_GOAL.terms.
 */
export function SchemeAccordion({ items }: { items: SchemeTerm[] }) {
  const [open, setOpen] = useState<number[]>([]);
  const baseId = useId();

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index],
    );

  return (
    <div className="divide-y divide-slate-200 border-y border-slate-200">
      {items.map((item, index) => {
        const isOpen = open.includes(index);
        const buttonId = `${baseId}-term-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.title}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-medium text-slate-900 transition-colors hover:text-[#8a6a1a]"
              >
                <span>{item.title}</span>
                <svg
                  viewBox="0 0 24 24"
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-6"
            >
              {Array.isArray(item.body) ? (
                <ul className="flex flex-col gap-2.5 font-malayalam text-[0.95rem] leading-relaxed text-slate-600">
                  {item.body.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9a7b2e]"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-malayalam text-[0.95rem] leading-relaxed text-slate-600">
                  {item.body}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
