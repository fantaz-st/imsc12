import type { Metadata } from "next";
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
  title: "IMSC 2027 — International Maritime Science Conference",
  description:
    "Join the 12th International Maritime Science Conference at Hotel Cornaro in Split, Croatia, 6–7 May 2027.",
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
    <html lang="en" className={bulletinSans.variable}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
