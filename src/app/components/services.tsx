import { getDictionaryUseClient } from "@/dicionaries/default-dictionary-use-client";
import type { Locale } from "@/config/i18n.config";

interface HeaderProps {
  lang: Locale;
}

export function Services({ lang }: HeaderProps) {
  const { dictionary } = getDictionaryUseClient(lang);
  return (
    <div
      id="services"
      className="flex flex-col gap-6 md:gap-12 justify-center items-center mx-auto"
    >
      <h2 className="text-zinc-50 text-2xl md:text-4xl font-light text-center">
        {dictionary.services.title}
      </h2>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="stroke-custom max-w-[332px] flex flex-col justify-center items-center gap-5 bg-custom-gradient p-8 rounded-lg">
          <img
            src="/svg/design.svg"
            alt="Design de sites e apps"
            className="shadow-custom rounded-full w-[60px]"
          />
          <h3 className="text-zinc-50 font-bold text-xl">
            {dictionary.services.design.title}
          </h3>
          <p className="text-zinc-50 font-light text-center text-xl">
            {dictionary.services.design.description}
          </p>
        </div>
        <div className="stroke-custom max-w-[332px] flex flex-col justify-center items-center gap-5 bg-custom-gradient p-8 rounded-lg">
          <img
            src="/svg/development.svg"
            alt="Desenvolvimento Web"
            className="shadow-custom rounded-full w-[60px]"
          />
          <h3 className="text-zinc-50 font-bold text-xl">
            {dictionary.services.development.title}
          </h3>
          <p className="text-zinc-50 font-light text-center text-xl">
            {dictionary.services.development.description}
          </p>
        </div>
        <div className="stroke-custom max-w-[332px] flex flex-col justify-center items-center gap-5 bg-custom-gradient p-8 rounded-lg">
          <img
            src="/svg/identity.svg"
            alt="Identidade Visual"
            className="shadow-custom rounded-full w-[60px]"
          />
          <h3 className="text-zinc-50 font-bold text-xl">
            {dictionary.services.branding.title}
          </h3>
          <p className="text-zinc-50 font-light text-center text-xl">
            {dictionary.services.branding.description}
          </p>
        </div>
      </div>
    </div>
  );
}
