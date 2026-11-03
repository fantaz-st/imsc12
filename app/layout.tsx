import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import "./globals.css";

const bulletinSans = localFont({
  src: [
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-Light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-Medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-Bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-Black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/PF Bulletin Sans Pro/PFBulletinSansPro-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-pf-bulletin-sans-pro",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://imsc.pfst.hr"),
  title: {
    default: "IMSC 2027 | International Maritime Science Conference in Split",
    template: "%s | IMSC 2027",
  },
  description:
    "Join the 12th International Maritime Science Conference at Hotel Cornaro in Split, Croatia, 6–7 May 2027. Explore maritime research, the programme, and registration.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "IMSC 2027",
    title: "IMSC 2027 | International Maritime Science Conference in Split",
    description:
      "The 12th International Maritime Science Conference takes place at Hotel Cornaro in Split, Croatia, 6–7 May 2027.",
    url: "/",
    images: [
      {
        url: "/images/hero.webp",
        alt: "International Maritime Science Conference 2027 in Split, Croatia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMSC 2027 | International Maritime Science Conference in Split",
    description:
      "Join maritime researchers and industry leaders in Split, Croatia, 6–7 May 2027.",
    images: ["/images/hero.webp"],
  },
  icons: {
    icon: "/favicon/favicon.svg",
    apple: "/favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bulletinSans.variable} suppressHydrationWarning>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <Script id="hero-intro-init" strategy="beforeInteractive">
          {`if (location.pathname === "/" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            document.documentElement.dataset.heroIntro = "pending";
          }`}
        </Script>
      </body>
    </html>
  );
}
