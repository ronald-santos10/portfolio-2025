'use client'

import { SpeedInsights } from "@vercel/speed-insights/next";
import { About } from "../components/about";
import { Contact } from "../components/contact";
import { Cta } from "../components/cta";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Services } from "../components/services";
import { Works } from "../components/works";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";
import { useState } from "react";
import type { Locale } from "@/config/i18n.config";

export default function Home() {
  const [lang, setLang] = useState<Locale>("pt-BR");

  return (
    <div>
      <GoogleTagManager gtmId="GTM-NQG3J4HB" />
      <header>
        <Header lang={lang} setLang={setLang} />
      </header>
      <main className="flex flex-col gap-20 md:gap-40 mx-auto max-w-7xl px-5 md:px-0">
        <Hero lang={lang} />
        <Services lang={lang} />
        <Cta lang={lang} />
        <Works lang={lang} />
        <About lang={lang} />
      </main>
      <section className="bg-dark w-full mx-auto py-16 mt-20 md:mt-40">
        <div id="contact" className="mx-auto max-w-7xl">
          <Contact lang={lang} />
        </div>
      </section>
      <footer className="flex flex-col gap-20 md:gap-40 mx-auto max-w-7xl px-5 md:px-0">
        <Footer lang={lang} />
      </footer>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
