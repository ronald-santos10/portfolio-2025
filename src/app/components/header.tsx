"use client";

import { scrollToSection } from "@/utils/scroll-to-section";
import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="header"
      className={`z-50 stroke-custom fixed top-0 w-full mx-auto py-8 transition-all duration-300 ${
        isScrolled ? "bg-bg backdrop-blur-lg bg-opacity-85" : ""
      }`}
    >
      <div className="flex flex-col gap-6 items-center mx-auto max-w-7xl md:flex-row md:justify-between">
        <a href="/">
          <img src="/svg/logo.svg" alt="Logo" className="w-40" />
        </a>
        <nav className="hidden text-neutral-50 md:flex md:gap-6 items-center justify-center">
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
            onClick={() => scrollToSection("home")}
          >
            início
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
            onClick={() => scrollToSection("services")}
          >
            Serviços
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
            onClick={() => scrollToSection("works")}
          >
            Trabalhos
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
            onClick={() => scrollToSection("about")}
          >
            Sobre
          </button>
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button
            className="text-base font-bold transition duration-300 ease-in-out hover:text-primary"
            onClick={() => scrollToSection("contact")}
          >
            Contato
          </button>
        </nav>
      </div>
    </div>
  );
};
