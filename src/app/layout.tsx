import BodyContainer from "@/components/BodyContainer";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
  title: "Portfolio | Nguyen Xuan Hanh",
  description: "My personal website",
};
export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <BodyContainer>
        {children}
        <Analytics />
        <SpeedInsights />
      </BodyContainer>
    </html>
  );
}
