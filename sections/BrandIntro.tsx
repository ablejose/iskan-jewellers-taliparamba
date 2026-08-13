"use client";

import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import { HeritageSlideshow } from "@/components/HeritageSlideshow";
import { ScrollRevealStory } from "@/components/ScrollRevealStory";

/**
 * Our Heritage. A margin-aligned, rounded Ken Burns photo slideshow on top
 * (the three store frames glide from one to the next — a slow push-in with a
 * cross-fade, never a hard cut), with the Malayalam brand story below it —
 * right-aligned to the margin and led by a premium golden line at the text's
 * left edge that fills with gold in step with the words as the story scrolls
 * into view. "ഇസ്‌ക്കാൻ ജ്വല്ലേഴ്സ്" stays highlighted in a gold-foil brand font.
 */

// Eight deliberate lines (word order preserved verbatim); "\n" = hard break.
const HERITAGE_STORY =
  "തളിപ്പറമ്പിന്റെ ഹൃദയതാളമായി, നിങ്ങളുടെ ഓരോ\n" +
  "സന്തോഷനിമിഷങ്ങളിലും തിളക്കമേകാൻ ഇസ്‌ക്കാൻ ജ്വല്ലേഴ്സ്\n" +
  "ഒപ്പമുണ്ട്. മാറ്റു കുറയാത്ത സ്വർണ്ണത്തിന്റെ\n" +
  "പരിശുദ്ധിയിലൂടെയും, കാലത്തിനനുസരിച്ച് മാറുന്ന മനോഹരമായ\n" +
  "ഡിസൈനുകളിലൂടെയും ഏറ്റവും പുതിയ ശേഖരങ്ങളുമായി\n" +
  "ഞങ്ങൾ എന്നും നിങ്ങളോടൊപ്പമുണ്ടാകും. നാളിതുവരെ\n" +
  "നിങ്ങൾ ഞങ്ങൾക്ക് നൽകിയ സ്നേഹത്തിനും\n" +
  "വിശ്വാസത്തിനും ഒരുപാട് നന്ദി!";

export function BrandIntro() {
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 0.9", "end 0.5"],
  });

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-lux">
        <HeritageSlideshow />

        <div className="mt-10 flex gap-4 md:mt-14 md:gap-8">
          {/* Premium golden line at the text's left edge; fills top-to-bottom
              in sync with the words turning gold. */}
          <div
            className="relative w-[3px] shrink-0 self-stretch overflow-hidden rounded-full bg-white/10"
            aria-hidden="true"
          >
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-[#FFF1C4] via-[#F2D28B] to-[#B8892F] shadow-[0_0_14px_rgba(242,210,139,0.55)]"
            />
          </div>

          <div ref={textRef} className="flex-1">
            <ScrollRevealStory
              text={HERITAGE_STORY}
              progress={scrollYProgress}
              className="text-right font-malayalam text-[1.05rem] font-medium leading-[1.5] break-words sm:text-[1.3rem] md:text-[1.55rem] md:leading-[1.45]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
