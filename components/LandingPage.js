"use client";

import { useState } from "react";
import { useReducedMotion } from "motion/react";
import SiteNav from "./SiteNav";
import Hero from "./Hero";
import { AboutDll, ApplicationCta, CustomerStories, FaqSection, FinancialGoals, HowItWorks, LoanSolutions, TrustBar, WhyDll } from "./ContentSections";
import { ContactSection, SiteFooter } from "./ContactAndFooter";

export default function LandingPage() {
  const [selectedLoan, setSelectedLoan] = useState("");
  const reduceMotion = useReducedMotion();

  const startEnquiry = (loanName = "") => {
    if (loanName) setSelectedLoan(loanName);
    document.getElementById("contact")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <>
      <SiteNav onApply={() => startEnquiry()} />
      <main id="main-content">
        <Hero onApply={() => startEnquiry()} />
        <TrustBar />
        <LoanSolutions onApply={startEnquiry} />
        <WhyDll />
        <HowItWorks />
        <FinancialGoals />
        <CustomerStories />
        <AboutDll />
        <ApplicationCta onApply={() => startEnquiry()} />
        <FaqSection />
        <ContactSection selectedLoan={selectedLoan} onSelectedLoanChange={setSelectedLoan} />
      </main>
      <SiteFooter />
    </>
  );
}
