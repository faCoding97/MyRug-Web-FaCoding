import type { Metadata } from "next";
import "./globals.css";
import site from "@/data/site";
import Header from "@/components/layout/Header.client";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://myrug.co.za"),
  title: {
    default: "myrug · Premium Rugs in  Gqeberha (Port Elizabeth)",
    template: "%s · myrug",
  },
  description:
    "myrug is a premium rug and carpet retailer in Gqeberha (Port Elizabeth) , South Africa. Explore curated Persian, Oriental and modern rugs with local delivery.",
  openGraph: {
    title: "myrug · Premium Rugs in  Gqeberha (Port Elizabeth)",
    description:
      "Curated Persian, Oriental, kilim and modern rugs with expert advice and local delivery in  Gqeberha (Port Elizabeth).",
    url: "https://myrug.co.za",
    siteName: "myrug",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "myrug showroom with premium rugs in  Gqeberha (Port Elizabeth)",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "myrug · Premium Rugs in  Gqeberha (Port Elizabeth)",
    description:
      "Curated Persian, Oriental, kilim and modern rugs with expert advice and local delivery in  Gqeberha (Port Elizabeth).",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://myrug.co.za",
  },
  verification: {
    google: "Xke9sSoZGAxq3-aNsIJubc73vqJ_tLCh80nXg6mR0xs",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = (site as any).theme ?? {};
  return (
    <html lang="en">
      <body
        style={{
          // CSS variables for theme tokens
          ["--brand" as any]: theme.brand ?? "#8B5E34",
          ["--accent" as any]: theme.accent ?? "#C19A6B",
          ["--bg" as any]: theme.bg ?? "#FAF7F2",
          ["--fg" as any]: theme.fg ?? "#0B1220",
        }}
        className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--fg)]">
        <Header nav={(site as any).nav} />
        <main className="flex-1">{children}</main>
        <Footer org={(site as any).org} contact={(site as any).contact} />
      </body>
    </html>
  );
}
