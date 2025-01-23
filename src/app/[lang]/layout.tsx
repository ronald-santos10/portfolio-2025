import type { Metadata } from "next";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import "../../app/globals.css";
import { i18n } from "@/config/i18n.config";

export async function generateStaticParams() {
  const languages = i18n.locales.map((lang) => ({ lang }));
  return languages;
}

export const metadata: Metadata = {
  title:
    "Ronald Dev - Desenvolvimento Web, Design de Sites e Identidade Visual",
  description:
    "Aprimore sua presença digital com soluções sob medida em desenvolvimento web, design de sites responsivos e criação de identidades visuais. Transforme suas ideias em resultados reais. Solicite um orçamento agora!",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {

  const { lang } = await params;
  return (
    <html lang={(await params).lang}>
      <body>
        <main>{children}</main>
        <GoogleAnalytics gaId="G-ZK6H01943X" />
        <GoogleTagManager gtmId="GTM-NQG3J4HB" />
      </body>
    </html>
  );
}
