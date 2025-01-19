import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Ronald Dev - Desenvolvimento Web, Design de Sites e Identidade Visual",
  description:
    "Aprimore sua presença digital com soluções sob medida em desenvolvimento web, design de sites responsivos e criação de identidades visuais. Transforme suas ideias em resultados reais. Solicite um orçamento agora!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <GoogleTagManager gtmId="GTM-NQG3J4HB" />
      </body>
    </html>
  );
}
