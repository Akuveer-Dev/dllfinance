"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * A compact React Bits-style RotatingText component. The caller owns the
 * editable `texts` list; the longest phrase reserves space to prevent layout shift.
 */
export default function RotatingText({
  texts = [],
  rotationInterval = 2500,
  staggerDuration = 0.018,
  auto = true,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const safeTexts = Array.isArray(texts) ? texts.filter(Boolean) : [];

  useEffect(() => {
    if (!auto || safeTexts.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % safeTexts.length);
    }, rotationInterval);
    return () => window.clearInterval(timer);
  }, [auto, rotationInterval, safeTexts.length]);

  if (safeTexts.length === 0) return null;

  const activeText = safeTexts[index % safeTexts.length];
  const widestText = safeTexts.reduce(
    (widest, phrase) => (phrase.length > widest.length ? phrase : widest),
    "",
  );

  return (
    <span className={`rotating-text ${className}`.trim()}>
      <span className="rotating-text__sizer" aria-hidden="true">
        {widestText}
      </span>
      <span className="rotating-text__visual" aria-hidden="true">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            className="rotating-text__phrase"
            key={activeText}
            initial={reduceMotion ? { opacity: 0 } : { y: "105%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { y: "-105%", opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            {Array.from(activeText).map((character, characterIndex) => (
              <motion.span
                className="rotating-text__character"
                key={`${activeText}-${characterIndex}`}
                initial={reduceMotion ? false : { y: "100%", opacity: 0.35 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.3,
                  delay: reduceMotion ? 0 : characterIndex * staggerDuration,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {character === " " ? "\u00a0" : character}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {activeText}
      </span>
    </span>
  );
}
