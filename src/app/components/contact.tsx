import { Form } from "./ui/form";
import { getDictionaryUseClient } from "@/dicionaries/default-dictionary-use-client";
import type { Locale } from "@/config/i18n.config";

interface HeaderProps {
  lang: Locale;
}

export function Contact({ lang }: HeaderProps) {
  const { dictionary } = getDictionaryUseClient(lang);
  return (
    <div className="bg-dark mx-auto items-center flex justify-center md:justify-between md:py-16">
      <img
        src="/webp/vector.webp"
        alt=""
        className="hidden md:flex w-[382px]"
      />
      <div className="md:w-[525px] w-full px-6 md:px-0 flex flex-col gap-6 md:gap-12">
        <h3 className="text-zinc-50 text-2xl md:text-4xl font-bold">
          {dictionary.contact.title}
        </h3>
        <Form lang={lang}/>
      </div>
    </div>
  );
}
