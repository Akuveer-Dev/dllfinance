"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { heroSlides, loanMessages } from "../data/siteContent";
import RotatingText from "./RotatingText";
import { Reveal } from "./MotionBits";

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    if (paused || reduceMotion || heroSlides.length < 2) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <div
      className="hero-visual"
      role="region"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
      aria-roledescription="carousel"
      aria-label="Everyday goals DLL can help you explore"
    >
      <div className="hero-photo-frame">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            className="hero-photo-layer"
            key={activeSlide.id}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.48, ease: "easeOut" }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeIndex + 1} of ${heroSlides.length}: ${activeSlide.label}`}
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.alt}
              fill
              priority={activeIndex === 0}
              unoptimized
              sizes="(max-width: 850px) 100vw, 48vw"
              className="hero-photo"
            />
            <div className="hero-photo-shade" aria-hidden="true" />
            <div className="hero-photo-caption">
              <span className="photo-label">{activeSlide.label}</span>
              <p>{activeSlide.caption}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="carousel-controls" aria-label="Carousel controls">
          <button type="button" className="carousel-arrow" aria-label="Previous image" onClick={() => move(-1)}>
            <ChevronLeft size={19} aria-hidden="true" />
          </button>
          <div className="carousel-dots" role="group" aria-label="Choose an image">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={`carousel-dot${activeIndex === index ? " carousel-dot--active" : ""}`}
                aria-label={`Show ${slide.label}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          <button type="button" className="carousel-arrow" aria-label="Next image" onClick={() => move(1)}>
            <ChevronRight size={19} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div className="hero-floating-note" aria-hidden="true">
        <span className="hero-floating-icon"><Sparkles size={18} /></span>
        <span><strong>One step at a time</strong><small>Clear, helpful guidance</small></span>
      </div>
      <div className="hero-visual-orbit" aria-hidden="true" />
    </div>
  );
}

export default function Hero({ onApply }) {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <div className="hero-inner page-wrap">
        <Reveal className="hero-copy">
          <div className="hero-kicker"><span className="hero-kicker__dot" /> A more approachable way to explore finance</div>
          <h1 id="hero-title">Finance that <span>moves with you.</span></h1>
          <p className="hero-description">Simple loan solutions, quick assistance and flexible options designed around your financial needs.</p>
          <div className="hero-rotating-line">
            <span className="hero-rotating-label">Explore</span>
            <RotatingText texts={loanMessages} rotationInterval={2500} staggerDuration={0.017} className="hero-rotating-text" />
          </div>
          <div className="hero-actions">
            <button className="button button--primary button--large" type="button" onClick={onApply}>
              Apply for a Loan <ArrowRight size={17} aria-hidden="true" />
            </button>
            <a className="button button--text button--large" href="#loans">
              Explore Loans <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-note">Every enquiry starts with a conversation. Options and terms depend on assessment.</p>
          <div className="hero-trust-cue">
            <span className="hero-trust-cue__icon"><Sparkles size={15} aria-hidden="true" /></span>
            <span><strong>Friendly, local guidance</strong><small>Clear next steps, without the pressure.</small></span>
          </div>
        </Reveal>
        <Reveal className="hero-art" delay={reduceMotion ? 0 : 0.08}>
          <HeroCarousel />
        </Reveal>
      </div>
      <div className="hero-bottom-sweep" aria-hidden="true" />
    </section>
  );
}
