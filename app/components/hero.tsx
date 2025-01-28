import { buttonVariants } from "./ui/button";
import { HeroCards } from "./hero-cards";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export const Hero = () => {
  return (
    <div className="container grid place-items-center gap-10 py-20 md:py-32 lg:grid-cols-2">
      <div className="space-y-6 text-center lg:text-start">
        <div className="text-5xl font-bold md:text-6xl">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-sky-300 to-sky-600 bg-clip-text text-transparent">
              Crédito consignado&nbsp;
            </span>{" "}
          </h1>
          para{" "}
          <h2 className="inline">
            servidores públicos, aposentados e pensionistas.
          </h2>
        </div>

        <p className="mx-auto text-2xl text-muted-foreground md:w-10/12 lg:mx-0">
          As menores taxas do mercado com aprovação rápida e segura. Dinheiro na
          conta em até 24 horas!
        </p>

        <div className="space-y-4 md:space-x-4 md:space-y-0">
          <a
            rel="noreferrer noopener"
            href="https://wa.me/5562982111127"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({ size: "lg" })}`}
          >
            Falar com consultor
            <SiWhatsapp className="ml-2" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </div>
  );
};
