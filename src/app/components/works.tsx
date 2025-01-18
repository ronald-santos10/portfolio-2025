export function Works() {
  return (
    <div
      id="works"
      className="flex flex-col gap-6 md:gap-14 justify-center items-center mx-auto"
    >
      <h2 className="text-center md:text-left text-3xl md:text-5xl text-zinc-50 font-light">
        Projetos de sucesso que <span className="font-bold">criam Impacto</span>
      </h2>
      <div className="flex flex-col gap-3 md:flex-row md:gap-14 md:flex-wrap justify-center items-center mx-auto">
        <div className="w-auto md:w-[498px] md:h-[426px] rounded-xl z-10 relative transition-all duration-500 md:hover:scale-105">
          <a
            href="https://www.behance.net/gallery/217143521/Identidade-Visual-Insider-925-Pratas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/works/insider.webp"
              alt="Insider 925 Pratas"
              className="z-10 w-full h-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
            <span className="absolute bottom-4 left-4 bg-primary py-2 px-4 rounded-full font-bold text-bg z-20">
              Identidade Visual
            </span>
          </a>
        </div>

        <div className="w-auto md:w-[498px] md:h-[426px] rounded-xl z-10 relative transition-all duration-500 md:hover:scale-105">
          <a
            href="https://www.behance.net/gallery/135634351/Identidade-Visual-Pratas-With-Love"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/works/pratas-with-love.webp"
              alt="Pratas With Love"
              className="z-10 w-full h-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
            <span className="absolute bottom-4 left-4 bg-primary py-2 px-4 rounded-full font-bold text-bg z-20">
              Identidade Visual
            </span>
          </a>
        </div>

        <div className="w-auto md:w-[498px] md:h-[426px] rounded-xl z-10 relative transition-all duration-500 md:hover:scale-105">
          <a
            href="https://ithinkcreative.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/works/ithink-creative.webp"
              alt="I Think Creative"
              className="z-10 w-full h-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
            <span className="absolute bottom-4 left-4 bg-primary py-2 px-4 rounded-full font-bold text-bg z-20">
              Site Institucional
            </span>
          </a>
        </div>

        <div className="w-auto md:w-[498px] md:h-[426px] rounded-xl z-10 relative transition-all duration-500 md:hover:scale-105">
          <a
            href="https://www.behance.net/gallery/217145849/App-Design-Olha-o-Gol?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/works/app.webp"
              alt="App Olha o Gol"
              className="z-10 w-full h-full rounded-xl object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
            <span className="absolute bottom-4 left-4 bg-primary py-2 px-4 rounded-full font-bold text-bg z-20">
              App Design
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
