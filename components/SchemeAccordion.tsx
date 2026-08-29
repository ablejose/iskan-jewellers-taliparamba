"use client";

import { useId, useState } from "react";
import type { SchemeTerm } from "@/config/goldenGoal";

/**
 * Terms & Conditions accordion for the Golden Goal scheme. Left aligned,
 * keyboard accessible, chevron rotates. Items open/close independently so
 * members can compare clauses. Data comes from GOLDEN_GOAL.terms.
 */
export function SchemeAccordion({ items }: { items: SchemeTerm[] }) {
  const [open, setOpen] = useState<number[]>([]);
  const baseId = useId();

  const toggle = (index: number) =>
    setOpen((current) =>
      current.includes(index) ? current.filter((i) => i !== index) : [...current, index],
    );

  return (
    <div className="divide-y divide-border border-y border-border">
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
                className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-body-lg text-ivory transition-colors duration-300 hover:text-gold"
              >
                <span>{item.title}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-gold transition-transform duration-300 ease-lux ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
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
                <ul className="flex flex-col gap-3 font-sans text-body text-muted">
                  {item.body.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-gold"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-sans text-body text-muted">{item.body}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
