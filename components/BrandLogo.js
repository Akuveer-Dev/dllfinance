export default function BrandLogo({ compact = false, footer = false }) {
  return (
    <a className={`brand-lockup${compact ? " brand-lockup--compact" : ""}${footer ? " brand-lockup--footer" : ""}`} href="#home" aria-label="Dhana Lakshmi Loans home">
      <span className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="presentation">
          <rect x="1" y="1" width="46" height="46" rx="15" fill="currentColor" />
          <path d="M11 30.5c5.3-1.1 8.4-7.4 13.5-9.1 3.8-1.2 7.2 1.8 12.5-2.2" fill="none" stroke="#FFD84D" strokeWidth="4.2" strokeLinecap="round" />
          <circle cx="36.8" cy="16.2" r="3" fill="#FFD84D" />
          <path d="M13 36h22" stroke="white" strokeOpacity=".9" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
      {!compact && (
        <span className="brand-wordmark">
          <span className="brand-name">DHANA LAKSHMI</span>
          <span className="brand-subtitle">LOANS <i aria-hidden="true" /> DLL</span>
        </span>
      )}
    </a>
  );
}
