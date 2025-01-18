"use client";

import { scrollToSection } from "@/utils/scroll-to-section";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <div
      id="home"
      className="mt-28 md:mt-56 flex flex-col justify-between gap-10 md:items-center  md:gap-10 md:flex-row"
    >
      <div className="mt-8 flex-1 flex flex-col gap-6  md:items-start md:gap-8">
        <h1 className="text-4xl font-thin text-center text-neutral-50 md:text-6xl md:text-left">
          Transforme suas ideias em{" "}
          <span className="font-medium">Soluções Digitais Incríveis</span>
        </h1>
        <span className="md:w-4/5 font-light text-base text-center text-neutral-50 md:text-2xl md:text-left">
          Desenvolvimento de Sites e Apps com design totalmente personalizado e
          foco nos seus Resultados.
        </span>
        <div className="mx-auto md:mx-0">
          <Button
            label="Entre em Contato"
            onClick={() => scrollToSection("contact")}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/webp/vector.webp"
          alt="Desenvolvedor Front-end e Web Designer"
          className="w-64 md:w-96"
        />
      </div>
    </div>
  );
}
