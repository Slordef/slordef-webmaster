import type { Metadata } from "next";
import "./index.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Slordef | Developer",
  description: "Personal website of Slordef, a developer.",
  applicationName: "Slordef",
  authors: { name: "Slordef", url: "https://slordef-webmaster.ch" },
  generator: "Slordef",
  keywords: ["Slordef", "Developer"],
  referrer: "origin",
  robots: "index, follow",
  icons: {
    icon: "/template/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/c628b2d872.js"
        crossOrigin="anonymous"
      />
      <html lang="fr">
        <body>{children}</body>
      </html>
    </>
  );
}
