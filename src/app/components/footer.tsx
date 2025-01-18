export function Footer() {
  return (
    <div className="w-full flex flex-col pt-16 pb-10 justify-center items-center gap-6 md:gap-14">
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-10 md:gap-0">
        <a href="/">
          <img src="/svg/logo.svg" alt="Logo" className="w-48" />
        </a>
        <div className="flex flex-col justify-center items-center md:items-start gap-2 md:gap-6">
          <h4 className="text-zinc-50 font-bold text-xl">CONTATOS</h4>
          <div className="flex flex-col items-center md:items-start gap-2 md:gap-4">
            <a href="mailto:ronalddesign10@gmail.com" target="blank">
              <span className="text-zinc-50 font-light text-xl">
                ronalddesign10@gmail.com
              </span>
            </a>
            <a href="https://wa.me/5575999887328" target="blank">
              <span className="text-zinc-50 font-light text-xl">
                (75) 99988-7328
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start gap-2 md:gap-6">
          <h4 className="text-zinc-50 font-bold text-xl">REDES SOCIAIS</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/ronaldd_santoss/"
              target="blank"
              className="stroke-custom rounded-full bg-bg p-4"
            >
              <img
                src="/svg/instagram.svg"
                alt="Ronald Santos no Instagram"
                className="md:w-8"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ronald-santos-5774ba198/"
              target="blank"
              className="stroke-custom rounded-full bg-bg p-4"
            >
              <img
                src="/svg/linkedin.svg"
                alt="Ronald Santos no Linkedin"
                className="md:w-8"
              />
            </a>
            <a
              href="https://github.com/ronald-santos10"
              target="blank"
              className="stroke-custom rounded-full bg-bg p-4"
            >
              <img
                src="/svg/github.svg"
                alt="Ronald Santos no Github"
                className="md:w-8"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 md:gap-6">
        <div className="border-t border-neutral-800" />
        <p className="text-zinc-50 text-sm md:text-base text-center">
          Copyright © 2025{" "}
          <a href="https://ronalddev.com.br" className="text-primary">
            ronalddev.com.br
          </a>
          . Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}
