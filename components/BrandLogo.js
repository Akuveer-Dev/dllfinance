import Image from "next/image";

export default function BrandLogo({ footer = false }) {
  return (
    <a
      className={`brand-lockup${footer ? " brand-lockup--footer" : ""}`}
      href="#home"
      aria-label="Dhana Lakshmi Loans home"
    >
      <Image
        src="/dll-logo-horizontal.png"
        alt="Dhana Lakshmi Loans"
        width={footer ? 270 : 225}
        height={footer ? 68 : 57}
        className="brand-logo-horizontal"
        priority
      />
    </a>
  );
}
