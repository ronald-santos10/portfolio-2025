export function About() {
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
      <div className="flex flex-col gap-4 md:gap-6 justify-center items-center md:justify-start md:items-start">
        <h3 className="text-primary font-bold text-2xl md:text-3xl">
          Prazer, sou Ronald Santos
        </h3>
        <p className="text-zinc-50 text-center md:text-left font-light md:text-xl">
          Sou <strong>desenvolvedor Front-end</strong> e{" "}
          <strong>web designer</strong>, com 22 anos e uma paixão por
          transformar ideias em soluções digitais. Comecei no{" "}
          <strong>design</strong> em 2019, criando{" "}
          <strong>identidades visuais</strong> e materiais para pequenos
          negócios. Hoje, com formação em Análise e
          <strong> Desenvolvimento de Sistemas</strong>, me dedico a{" "}
          <strong>criar sites e aplicações</strong>
          usando tecnologias como React, Next.js, TypeScript e Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
