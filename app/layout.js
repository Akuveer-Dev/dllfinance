import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "./globals.css";

export const metadata = {
  title: {
    default: "Dhana Lakshmi Loans | Finance That Moves With You",
    template: "%s | Dhana Lakshmi Loans",
  },
  description:
    "Simple loan solutions, quick assistance and flexible options designed around your financial needs. Speak with Dhana Lakshmi Loans in Visakhapatnam.",
  applicationName: "Dhana Lakshmi Loans",
  keywords: [
    "Dhana Lakshmi Loans",
    "DLL",
    "loan assistance",
    "Visakhapatnam finance",
    "loan solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Dhana Lakshmi Loans",
    title: "Finance That Moves With You | Dhana Lakshmi Loans",
    description:
      "Simple loan solutions, quick assistance and flexible options designed around your financial needs.",
  },
  twitter: {
    card: "summary",
    title: "Dhana Lakshmi Loans | Finance That Moves With You",
    description:
      "Simple loan solutions, quick assistance and flexible options designed around your financial needs.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1769E8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
