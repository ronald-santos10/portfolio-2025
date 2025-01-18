export function Services() {
  return (
    <div
      id="services"
      className="flex flex-col gap-6 md:gap-12 justify-center items-center mx-auto"
    >
      <h2 className="text-zinc-50 text-2xl md:text-4xl font-light text-center">
        O que posso fazer <span className="font-bold">por você?</span>
      </h2>

      <div className="flex flex-col gap-6 md:flex-row">
        <div className="stroke-custom max-w-[332px] flex flex-col justify-center items-center gap-5 bg-custom-gradient p-8 rounded-lg">
          <img
            src="/svg/design.svg"
            alt="Design de sites e apps"
            className="shadow-custom rounded-full w-[60px]"
          />
          <h3 className="text-zinc-50 font-bold text-xl">
            Design de Sites e Apps
          </h3>
          <p className="text-zinc-50 font-light text-center text-xl">
            Sites modernos e responsivos que encantam e convertem.
          </p>
        </div>
        <div className="stroke-custom max-w-[332px] flex flex-col justify-center items-center gap-5 bg-custom-gradient p-8 rounded-lg">
          <img
            src="/svg/development.svg"
            alt="Desenvolvimento Web"
            className="shadow-custom rounded-full w-[60px]"
          />
          <h3 className="text-zinc-50 font-bold text-xl">
            Desenvolvimento Web
          </h3>
          <p className="text-zinc-50 font-light text-center text-xl">
            Tecnologia robusta para soluções digitais escaláveis.
          </p>
        </div>
        <div className="stroke-custom max-w-[332px] flex flex-col justify-center items-center gap-5 bg-custom-gradient p-8 rounded-lg">
          <img
            src="/svg/identity.svg"
            alt="Identidade Visual"
            className="shadow-custom rounded-full w-[60px]"
          />
          <h3 className="text-zinc-50 font-bold text-xl">Identidade Visual</h3>
          <p className="text-zinc-50 font-light text-center text-xl">
            Marcas que se destacam e comunicam sua essência.
          </p>
        </div>
      </div>
    </div>
  );
}
