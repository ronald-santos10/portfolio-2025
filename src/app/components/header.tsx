"use client";

import { scrollToSection } from "@/utils/scroll-to-section";
import type React from "react";
import { useState, useEffect } from "react";
import { getDictionaryUseClient } from "@/dicionaries/default-dictionary-use-client";
import type { Locale } from "@/config/i18n.config";

interface HeaderProps {
  lang: Locale; // Idioma atual
  setLang: (lang: Locale) => void; // Função para atualizar o idioma
}

export const Header = ({ lang, setLang }: HeaderProps) => {
  const { dictionary } = getDictionaryUseClient(lang);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLang(event.target.value as Locale);
  };

  return (
    <div
      id="header"
      className={`z-50 stroke-custom fixed top-0 w-full mx-auto py-8 transition-all duration-300 ${
        isScrolled ? "bg-bg backdrop-blur-lg bg-opacity-85" : ""
      }`}
    >
      <div className="flex gap-6 items-center mx-auto max-w-7xl justify-between px-6">
        <a href="/">
          <img src="/svg/logo.svg" alt="Logo" className="w-40" />
        </a>
        <div className="flex items-center md:gap-10">
          <nav className="hidden text-neutral-50 md:flex md:gap-6 items-center justify-center">
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
              onClick={() => scrollToSection("home")}
            >
              {dictionary.nav.home}
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
              onClick={() => scrollToSection("services")}
            >
              {dictionary.nav.services}
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
              onClick={() => scrollToSection("works")}
            >
              {dictionary.nav.works}
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
              onClick={() => scrollToSection("about")}
            >
              {dictionary.nav.about}
            </button>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button
              className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
              onClick={() => scrollToSection("contact")}
            >
              {dictionary.nav.contact}
            </button>
          </nav>
          <select
            value={lang}
            onChange={handleLanguageChange}
            className="appearance-none bg-bg text-primary font-bold px-6 py-2 rounded-full border border-neutral-700 focus:outline-none"
          >
            <option value="pt-BR">PT</option>
            <option value="en-US">EN</option>
          </select>
        </div>
      </div>
    </div>
  );
};
