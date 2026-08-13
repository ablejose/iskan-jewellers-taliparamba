"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

import { Reveal } from "@/components/Reveal";

/**
 * Editorial brand introduction (Document 2 §5), Malayalam edition.
 *
 * A single decorative gold line runs down the LEFT of the section and fills
 * downward as the block scrolls into view. The Malayalam story sits on the
 * RIGHT, right-aligned across eight deliberate lines, and each word warms from
 * muted to gold one after another — both effects driven by one shared scroll
 * progress so the line and the lettering advance together.
 */

// Muted -> gold, matching the design tokens in tailwind.config.ts.
const MUTED = "#9E9EAE";
const GOLD = "#F2D28B";

// The story, split into exactly eight lines (word order preserved verbatim).
const LINES: string[][] = [
  ["തളിപ്പറമ്പിന്റെ", "ഹൃദയതാളമായി,", "നിങ്ങളുടെ", "ഓരോ"],
  ["സന്തോഷനിമിഷങ്ങളിലും", "തിളക്കമേകാൻ", "ഇസ്‌ക്കാൻ"],
  ["ജ്വല്ലേഴ്സ്", "ഒപ്പമുണ്ട്.", "മാറ്റു", "കുറയാത്ത"],
  ["സ്വർണ്ണത്തിന്റെ", "പരിശുദ്ധിയിലൂടെയും,", "കാലത്തിനനുസരിച്ച്"],
  ["മാറുന്ന", "മനോഹരമായ", "ഡിസൈനുകളിലൂടെയും", "ഏറ്റവും"],
  ["പുതിയ", "ശേഖരങ്ങളുമായി", "ഞങ്ങൾ", "എന്നും"],
  ["നിങ്ങളോടൊപ്പമുണ്ടാകും.", "നാളിതുവരെ", "നിങ്ങൾ", "ഞങ്ങൾക്ക്"],
  ["നൽകിയ", "സ്നേഹത്തിനും", "വിശ്വാസത്തിനും", "ഒരുപാട്", "നന്ദി!"],
];

// Assign each word a stable global index so its reveal window is deterministic.
let runningIndex = 0;
const INDEXED_LINES = LINES.map((line) =>
  line.map((word) => ({ word, index: runningIndex++ })),
);
const TOTAL_WORDS = runningIndex;

interface HeritageWordProps {
  word: string;
  index: number;
  progress: MotionValue<number>;
  reduced: boolean;
}

/**
 * A single word that warms from muted grey to gold as scroll progress passes
 * through its slice of the timeline, giving the "one letter/word at a time"
 * golden-lettering effect.
 */
function HeritageWord({ word, index, progress, reduced }: HeritageWordProps) {
  const start = index / TOTAL_WORDS;
  const end = (index + 1) / TOTAL_WORDS;
  const color = useTransform(progress, [start, end], [MUTED, GOLD]);

  return (
    <motion.span
      className="inline-block"
      style={{ color: reduced ? GOLD : color }}
    >
      {word}
      {" "}
    </motion.span>
  );
}

export function BrandIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;

  // Shared progress: 0 as the block enters the lower viewport, 1 as it leaves
  // the upper-middle. Drives both the left line and the word-by-word gilding.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.35"],
  });

  // Left line fills top -> bottom.
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="about" className="py-24 md:py-32">
      <div
        ref={ref}
        className="container-lux grid grid-cols-1 items-stretch gap-12 md:grid-cols-12 md:gap-16"
      >
        {/* Left decorative line — fills downward on scroll (desktop only). */}
        <div
          className="hidden md:col-span-1 md:flex md:justify-start"
          aria-hidden="true"
        >
          <div className="relative w-px self-stretch bg-white/10">
            <motion.span
              className="absolute inset-0 block w-px origin-top bg-gradient-to-b from-gold via-gold/70 to-gold/30"
              style={{ scaleY: reduced ? 1 : lineScale }}
            />
          </div>
        </div>

        {/* Right column — Malayalam story, right-aligned in eight lines. */}
        <div className="md:col-span-11">
          <div className="ml-auto max-w-3xl text-right">
            <Reveal>
              <span className="label-eyebrow">Our Heritage</span>
              <h2 className="mt-4 font-display text-display-l text-ivory">
                ഇസ്‌ക്കാൻ ജ്വല്ലേഴ്സ്
              </h2>
            </Reveal>

            <p className="mt-6 font-sans text-body-lg leading-loose">
              {INDEXED_LINES.map((line, lineIdx) => (
                <span key={lineIdx} className="block">
                  {line.map(({ word, index }) => (
                    <HeritageWord
                      key={index}
                      word={word}
                      index={index}
                      progress={scrollYProgress}
                      reduced={reduced}
                    />
                  ))}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
