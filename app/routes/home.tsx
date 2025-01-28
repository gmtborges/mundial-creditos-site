import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/home";
import { Hero } from "~/components/hero";
import stylesheet from "~/assets/styles/hero.css?url";
import { Services } from "~/components/services";
import { ZapBounce } from "~/components/zap-bounce";
import { Footer } from "~/components/footer";
import data from "~/data/services.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mundial Créditos" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export async function loader() {
  const services = await Promise.all(
    data.map(async (svc) => {
      const image = await import(`../assets/images/${svc.image}.jpeg`);
      return {
        ...svc,
        image: image.default,
      };
    }),
  );
  return services;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Navbar showLinks={true} />
      <Hero />
      <Services services={loaderData} />
      <div className="mx-auto mb-60 mt-10 flex max-w-4xl flex-col items-center gap-10 px-3 md:px-5">
        <h2 className="text-3xl font-bold">Quem somos?</h2>
        <div className="text-justify text-lg">
          <p>
            Com mais de 20 anos de experiência no mercado de correspondência
            bancária, a Mundial Créditos é referência em soluções financeiras
            sob medida.
          </p>
          <br />
          <p>
            Trabalhamos com diversas modalidades de crédito, sempre priorizando
            as melhores condições para você. Contamos com especialistas que
            garantem as menores taxas de juros do mercado e opções que se
            adequam perfeitamente ao seu perfil e às suas necessidades
            financeiras.
          </p>
        </div>
      </div>
      <Footer />
      <ZapBounce />
    </>
  );
}
