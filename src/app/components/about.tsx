import { getDictionaryUseClient } from "@/dicionaries/default-dictionary-use-client";
import type { Locale } from "@/config/i18n.config";

interface HeaderProps {
  lang: Locale;
}

export function About({ lang }: HeaderProps) {
  const { dictionary } = getDictionaryUseClient(lang);
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center md:flex-row gap-12 md:gap-28"
    >
      <img
        src="/webp/ronald.webp"
        alt="Ronald Santos Desenvolvedor e Web Designer"
        className="w-64 md:w-[429px]"
      />
      <div className="flex flex-col gap-4 md:gap-6 justify-center items-center md:justify-start md:items-start md:max-w-[495px]">
        <h3 className="text-primary font-bold text-2xl md:text-3xl">
          {dictionary.about.title}
        </h3>
        <p className="text-zinc-50 text-center md:text-left font-light md:text-xl">
          {dictionary.about.description}
        </p>
      </div>
    </div>
  );
}
