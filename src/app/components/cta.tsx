"use client";

import { scrollToSection } from "@/utils/scroll-to-section";
import { Button } from "./ui/button";
import { getDictionaryUseClient } from "@/dicionaries/default-dictionary-use-client";
import type { Locale } from "@/config/i18n.config";

interface HeaderProps {
  lang: Locale;
}

export function Cta({ lang }: HeaderProps) {
  const { dictionary } = getDictionaryUseClient(lang);
  return (
    <div className="stroke-custom rounded-3xl bg-custom-gradient flex flex-col items-center md:flex-row md:justify-between">
      <div className="py-10 px-4 md:px-16 flex flex-col gap-4 md:gap-6">
        <h2 className="text-zinc-50 text-center md:text-left text-3xl md:text-4xl font-light">
          {dictionary.cta.title}
        </h2>
        <p className="text-zinc-50 text-center md:text-left text-lg font-light">
          {dictionary.cta.description}
        </p>
        <div className="flex justify-center items-center md:justify-start">
          <Button
            label={dictionary.cta.button}
            onClick={() => scrollToSection("contact")}
          />
        </div>
      </div>
      <div className="flex justify-center items-center w-full md:max-w-[500px] bg-custom-radial rounded-b-3xl md:rounded-b-none md:rounded-tr-3xl md:rounded-br-3xl">
        <img src="/svg/rocket-icon.svg" alt="" className="w-64 md:w-[439px]" />
      </div>
    </div>
  );
}
