"use client";

import { scrollToSection } from "@/utils/scroll-to-section";
import { Button } from "./ui/button";
import { getDictionaryUseClient } from "@/dicionaries/default-dictionary-use-client";
import type { Locale } from "@/config/i18n.config";
import { Form } from "./ui/form";

interface HeaderProps {
  lang: Locale;
}

export function Hero({ lang }: HeaderProps) {
  const { dictionary } = getDictionaryUseClient(lang);

  return (
    <div
      id="home"
      className="mt-28 md:mt-56 flex flex-col justify-between gap-10 md:items-center  md:gap-10 md:flex-row"
    >
      <div className="mt-8 flex-1 flex flex-col gap-6  md:items-start md:gap-8">
        <h1 className="text-4xl font-medium text-center text-neutral-50 md:text-6xl md:text-left">
          {dictionary.hero.title}
        </h1>
        <span className="md:w-4/5 font-light text-base text-center text-neutral-50 md:text-2xl md:text-left">
          {dictionary.hero.subtitle}
        </span>
        <div className="mx-auto md:mx-0">
          <Button
            label={dictionary.hero.contact_button}
            onClick={() => scrollToSection("contact")}
          />
        </div>
      </div>
      <div
        id="contact"
        className="md:w-[480px] flex justify-center items-center"
      >
        <Form lang={lang} />
      </div>
    </div>
  );
}
