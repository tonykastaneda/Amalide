import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amalide — Coming soon",
  description: "Amalide is coming soon. A free, open-source, cross-platform professional raster editor with familiar workflows and one shared command engine.",
  icons: { icon: `${basePath}/brand/favicon.svg`, shortcut: `${basePath}/brand/favicon.svg` },
  openGraph: {
    title: "Amalide — Coming soon",
    description: "A free, open-source professional raster editor. Coming soon.",
    type: "website",
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 1200, alt: "Amalide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amalide — Coming soon",
    description: "A free, open-source professional raster editor. Coming soon.",
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
