"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  CarFront,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  FileCheck2,
  FileText,
  GraduationCap,
  HandCoins,
  HeartHandshake,
  HeartPulse,
  House,
  Layers3,
  LifeBuoy,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  UserRound,
  UserRoundCheck,
} from "lucide-react";
import {
  dllBenefits,
  faqItems,
  financialGoals,
  loanTypes,
  processSteps,
  testimonialPlaceholders,
  trustPoints,
} from "../data/siteContent";
import { Reveal, SectionIntro } from "./MotionBits";

const iconMap = {
  HandCoins,
  BriefcaseBusiness,
  CarFront,
  GraduationCap,
  House,
  Sparkles,
  ClipboardCheck,
  Layers3,
  HeartHandshake,
  BadgeCheck,
  MessageCircle,
  MapPin,
  SlidersHorizontal,
  Search,
  FileCheck2,
  FileText,
  ArrowUpRight,
  UserRound,
  HeartPulse,
  LifeBuoy,
  CircleHelp,
  ShieldCheck,
  UserRoundCheck,
};

function LineIcon({ name, size = 21, strokeWidth = 1.8, ...props }) {
  const Icon = iconMap[name] || Sparkles;
  return <Icon size={size} strokeWidth={strokeWidth} aria-hidden="true" {...props} />;
}

export function TrustBar() {
  return (
    <section className="trust-strip" aria-label="DLL service qualities">
      <div className="page-wrap trust-strip__inner">
        {trustPoints.map((point) => (
          <div className="trust-point" key={point.title}>
            <span className="trust-point__icon"><LineIcon name={point.icon} size={18} /></span>
            <span>{point.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function LoanSolutions({ onApply }) {
  return (
    <section className="section loans-section" id="loans" aria-labelledby="loans-title">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="Loan solutions"
          title="A range of ways to move forward."
          description="Loan options can change. Explore the categories below, then speak with DLL to confirm current availability and understand the terms."
          id="loans-title"
        />
        <div className="loan-grid">
          {loanTypes.map((loan, index) => (
            <Reveal as="article" className="loan-card" delay={index * 0.045} key={loan.id}>
              <div className="loan-card__top">
                <span className="icon-tile"><LineIcon name={loan.icon} size={23} /></span>
                <span className="loan-card__spark" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </div>
              <h3>{loan.title}</h3>
              <p>{loan.description}</p>
              <div className="loan-card__benefit"><span className="benefit-check"><Check size={14} /></span>{loan.benefit}</div>
              <div className="loan-card__actions">
                <a className="text-link" href="#contact">Learn More <ArrowRight size={15} /></a>
                <button className="button button--small button--outline" type="button" onClick={() => onApply(loan.title)}>Apply Now</button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="section-footnote">Availability, suitability, eligibility and terms are confirmed by DLL after a discussion and assessment.</p>
      </div>
    </section>
  );
}

export function WhyDll() {
  return (
    <section className="section why-section" id="why-dll" aria-labelledby="why-title">
      <div className="page-wrap why-layout">
        <div className="why-intro">
          <SectionIntro
            eyebrow="Why DLL"
            title="Good guidance makes a difference."
            description="A helpful conversation should make your choices easier to understand—not add pressure."
            id="why-title"
          />
          <div className="why-note">
            <div className="why-note__mark"><ShieldCheck size={24} /></div>
            <div><strong>Clear information. Considered choices.</strong><p>Take time to understand the terms and repayment commitment before deciding.</p></div>
          </div>
        </div>
        <div className="benefit-grid">
          {dllBenefits.map((benefit, index) => (
            <Reveal as="article" className="benefit-card" delay={index * 0.035} key={benefit.title}>
              <span className="benefit-card__icon"><LineIcon name={benefit.icon} size={20} /></span>
              <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="How it works"
          title="A clear path, one step at a time."
          description="The exact steps and documents depend on the loan you discuss and DLL's assessment."
          align="center"
          id="process-title"
        />
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <Reveal as="article" className="process-card" delay={index * 0.06} key={step.number}>
              <div className="process-card__top"><span className="process-number">{step.number}</span><span className="process-icon"><LineIcon name={step.icon} size={21} /></span></div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < processSteps.length - 1 && <span className="process-connector" aria-hidden="true"><ArrowRight size={18} /></span>}
            </Reveal>
          ))}
        </div>
        <p className="process-disclaimer">An enquiry is not an approval or a promise of disbursal.</p>
      </div>
    </section>
  );
}

export function FinancialGoals() {
  return (
    <section className="section goals-section" aria-labelledby="goals-title">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="For the things that matter"
          title="Whatever your financial goal, we're here to help."
          description="Start with the goal. Then take a considered look at the options and repayment commitment before borrowing."
          id="goals-title"
        />
        <div className="goals-grid">
          {financialGoals.map((goal, index) => (
            <Reveal as="article" className="goal-card" delay={(index % 4) * 0.045} key={goal.title}>
              <span className="goal-card__icon"><LineIcon name={goal.icon} size={20} /></span>
              <div><h3>{goal.title}</h3><p>{goal.description}</p></div>
              <span className="goal-card__arrow" aria-hidden="true"><ArrowUpRight size={17} /></span>
            </Reveal>
          ))}
        </div>
        <div className="responsible-note"><span className="responsible-note__icon"><ShieldCheck size={18} /></span><p>Borrow only after reviewing the costs and repayment schedule, and considering whether the commitment fits your circumstances.</p></div>
      </div>
    </section>
  );
}

export function CustomerStories() {
  return (
    <section className="section stories-section" id="stories" aria-labelledby="stories-title">
      <div className="page-wrap">
        <div className="stories-heading-row">
          <SectionIntro
            eyebrow="Customer stories"
            title="Your experience deserves to be heard."
            description="These are layout placeholders—not real customer reviews. Replace them with approved, verified customer stories before publishing, or remove this section."
            id="stories-title"
          />
          <div className="satisfaction-visual" aria-label="Illustrative customer satisfaction visual; not a measured score">
            <span className="satisfaction-visual__icon"><HeartHandshake size={22} /></span>
            <div><strong>Customer-first, always</strong><small>Satisfaction visual placeholder · no score claimed</small></div>
          </div>
        </div>
        <div className="stories-grid">
          {testimonialPlaceholders.map((story, index) => (
            <Reveal as="article" className="story-card" delay={index * 0.06} key={story.id}>
              <div className="story-card__flag"><span /> Placeholder — replace before publishing</div>
              <div className="rating-placeholder" aria-label="Rating visualization placeholder, not a real customer rating">
                {Array.from({ length: 5 }, (_, starIndex) => <Star key={starIndex} size={15} strokeWidth={1.8} aria-hidden="true" />)}
                <span>Rating visual placeholder</span>
              </div>
              <p className="story-card__quote">“{story.quote}”</p>
              <div className="story-card__person">
                <span className="story-avatar"><UserRound size={18} aria-hidden="true" /></span>
                <span><strong>Customer name placeholder</strong><small>{story.loanType}</small></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutDll() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="page-wrap about-layout">
        <Reveal className="about-illustration" aria-hidden="true">
          <div className="about-illustration__sun" />
          <div className="about-illustration__card about-illustration__card--one"><span className="about-mini-icon"><HeartHandshake size={20} /></span><span><b>People first</b><i>Listen · guide · support</i></span></div>
          <div className="about-illustration__card about-illustration__card--two"><span className="about-mini-icon about-mini-icon--yellow"><Check size={19} /></span><span><b>Clear next steps</b><i>Understand before you decide</i></span></div>
          <div className="about-illustration__path"><span /><span /><span /></div>
        </Reveal>
        <div className="about-copy">
          <SectionIntro
            eyebrow="About DLL"
            title="Finance should feel easier to approach."
            description="Dhana Lakshmi Loans is here to help customers explore accessible financial solutions with professional assistance and clear communication."
            id="about-title"
          />
          <p className="about-extra">We start by understanding what matters to you, then help you explore the available options and the questions worth asking. No pressure to rush a decision.</p>
          <ul className="about-values">
            <li><span><Check size={15} /></span> Customer-first service</li>
            <li><span><Check size={15} /></span> Accessible financial solutions</li>
            <li><span><Check size={15} /></span> Professional, transparent guidance</li>
          </ul>
          <a href="#contact" className="text-link text-link--strong">Talk with the DLL team <ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

export function ApplicationCta({ onApply }) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="page-wrap cta-band__inner">
        <Reveal className="cta-copy">
          <p className="eyebrow eyebrow--on-blue">Your next step</p>
          <h2 id="cta-title">Let's find the right loan for you.</h2>
          <p>Tell us what you need and our team will help you explore the available options.</p>
          <small>Options, eligibility and terms are subject to DLL's assessment.</small>
        </Reveal>
        <Reveal className="cta-action" delay={0.08}>
          <button type="button" className="button button--yellow button--large" onClick={onApply}>
            Start Your Application <ArrowRight size={17} aria-hidden="true" />
          </button>
          <span className="cta-action__hint">A conversation to understand your needs.</span>
        </Reveal>
        <span className="cta-sun" aria-hidden="true" />
      </div>
    </section>
  );
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="page-wrap faq-layout">
        <SectionIntro
          eyebrow="Frequently asked questions"
          title="A few things you might be wondering."
          description="If your question isn't here, bring it to DLL when you discuss your requirement."
          id="faq-title"
        />
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            return (
              <div className={`faq-item${isOpen ? " faq-item--open" : ""}`} key={item.question}>
                <h3>
                  <button className="faq-question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                    <span>{item.question}</span><span className="faq-chevron"><ChevronDown size={18} /></span>
                  </button>
                </h3>
                <div id={answerId} className="faq-answer" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
          <p className="faq-footnote"><ShieldCheck size={16} aria-hidden="true" /> Details can change. Confirm current availability and terms directly with DLL.</p>
        </div>
      </div>
    </section>
  );
}
