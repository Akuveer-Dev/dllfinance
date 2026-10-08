"use client";

import { useState } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { loanTypes, officeAddress, footerNav } from "../data/siteContent";
import BrandLogo from "./BrandLogo";
import { Reveal, SectionIntro } from "./MotionBits";

const fullAddress = officeAddress.join(" ");
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export function ContactSection({ selectedLoan = "", onSelectedLoanChange }) {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFeedback("This demo form did not send or save your details. Connect it to a verified DLL contact channel before inviting enquiries.");
    event.currentTarget.reset();
    onSelectedLoanChange("");
  };

  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-wrap">
        <SectionIntro
          eyebrow="Contact DLL"
          title="Let's start with a conversation."
          description="Share what you are looking for, or visit the DLL office. Add verified phone, email and business-hour details before publication."
          id="contact-title"
        />
        <div className="contact-layout">
          <Reveal as="article" className="contact-card contact-card--form">
            <div className="contact-card__heading"><span className="contact-heading-icon"><Send size={20} /></span><div><h3>Tell us what you need</h3><p>Fields marked required are needed to prepare this sample enquiry.</p></div></div>
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label className="form-field"><span>Your name <i>*</i></span><input id="contact-name" name="name" autoComplete="name" placeholder="Name" required /></label>
                <label className="form-field"><span>Phone or email <i>*</i></span><input name="contact" autoComplete="email" placeholder="Your preferred contact" required /></label>
              </div>
              <label className="form-field"><span>What would you like to discuss?</span>
                <select name="loanType" value={selectedLoan} onChange={(event) => onSelectedLoanChange(event.target.value)}>
                  <option value="">Choose a loan category</option>
                  {loanTypes.map((loan) => <option key={loan.id} value={loan.title}>{loan.title}</option>)}
                  <option value="Other financial requirement">Other financial requirement</option>
                </select>
              </label>
              <label className="form-field"><span>Tell us a little about your goal <i>*</i></span><textarea name="message" rows={4} placeholder="A short note—please do not include account numbers or sensitive documents." required /></label>
              <button className="button button--primary form-submit" type="submit">Prepare Enquiry <ArrowUpRight size={16} aria-hidden="true" /></button>
              {feedback && <p className="form-feedback" role="status">{feedback}</p>}
              <p className="form-privacy"><ShieldCheck size={15} aria-hidden="true" /> This sample form does not transmit or retain personal information.</p>
            </form>
          </Reveal>
          <div className="contact-side">
            <Reveal as="article" className="contact-card contact-card--address">
              <div className="contact-card__heading"><span className="contact-heading-icon"><MapPin size={20} /></span><div><h3>Visit our office</h3><p>Visakhapatnam, Andhra Pradesh</p></div></div>
              <address>{officeAddress.map((line) => <span key={line}>{line}</span>)}</address>
              <div className="map-placeholder" aria-label="Google Maps integration placeholder for DLL office">
                <div className="map-art" aria-hidden="true"><span className="map-route map-route--one" /><span className="map-route map-route--two" /><span className="map-block map-block--one" /><span className="map-block map-block--two" /><span className="map-pin"><MapPin size={20} fill="currentColor" /></span></div>
                <div className="map-placeholder__copy"><strong>Google Maps location placeholder</strong><small>Confirm the pin location before adding an embedded map.</small></div>
              </div>
              <a className="text-link" href={mapsHref} target="_blank" rel="noreferrer">Open address in Google Maps <ArrowUpRight size={15} /></a>
            </Reveal>
            <Reveal as="article" className="contact-card contact-card--details" delay={0.06}>
              <div className="contact-detail"><span><Phone size={17} /></span><div><strong>Phone</strong><small>Placeholder — add DLL's verified number</small></div></div>
              <div className="contact-detail"><span><Mail size={17} /></span><div><strong>Email</strong><small>Placeholder — add DLL's verified email</small></div></div>
              <div className="contact-detail"><span><Clock size={17} /></span><div><strong>Business hours</strong><small>Placeholder — confirm current office hours</small></div></div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-wrap">
        <div className="footer-main">
          <div className="footer-brand"><BrandLogo footer /><p>Simple loan solutions, professional assistance and clear conversations for the goals that matter to you.</p><span className="footer-social-placeholder">Social media links: placeholders pending DLL's verified profiles</span></div>
          <div className="footer-column"><h3>Explore</h3>{footerNav.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div>
          <div className="footer-column"><h3>Loan links</h3>{loanTypes.map((loan) => <a href="#loans" key={loan.id}>{loan.title}</a>)}</div>
          <div className="footer-column footer-address"><h3>Find DLL</h3><address>{officeAddress.map((line) => <span key={line}>{line}</span>)}</address><a className="text-link" href="#contact">Contact information <ArrowUpRight size={14} /></a></div>
        </div>
        <div className="footer-legal-links" aria-label="Legal information links">
          <a href="#privacy">Privacy Policy</a><a href="#terms">Terms &amp; Conditions</a><a href="#disclaimer">Disclaimer</a>
        </div>
        <div className="legal-notes">
          <details id="privacy"><summary>Privacy Policy placeholder</summary><p>Privacy information is a placeholder for DLL's review. Add the company's verified data-handling practices before enabling a live enquiry form. This sample form does not transmit or store information.</p></details>
          <details id="terms"><summary>Terms &amp; Conditions placeholder</summary><p>Terms and conditions are placeholders and require DLL's review before publication. Confirm applicable product terms directly with DLL.</p></details>
          <details id="disclaimer"><summary>Financial disclaimer</summary><p>Website content is general information only and is not a loan offer, approval, financial advice or a promise of disbursal. Loan availability, eligibility, documents, costs and terms may vary and are subject to DLL's assessment and applicable agreements. Review repayment obligations and all terms before deciding to borrow.</p></details>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Dhana Lakshmi Loans (DLL)</span><span>Getting financial help should be simple.</span></div>
      </div>
    </footer>
  );
}
