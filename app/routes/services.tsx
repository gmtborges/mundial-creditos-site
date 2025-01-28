import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/services";
import data from "~/data/services.json";
import { Footer } from "~/components/footer";

export function meta({ params }: Route.MetaArgs) {
  const title = data.find((service) => service.name === params.name)?.title;
  return [
    { title: "Mundial Créditos - " + title },
    { name: "description", content: title },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  const services = await Promise.all(
    data.map(async (svc) => {
      const image = await import(`../assets/images/${svc.image}.jpeg`);
      return {
        ...svc,
        image: image.default,
      };
    }),
  );
  const service = services.find((service) => service.name === params.name);
  if (!service) {
    throw new Response("Not Found", { status: 404 });
  }
  return service;
}

export default function Services({ loaderData }: Route.ComponentProps) {
  const { title, description, image } = loaderData;

  return (
    <>
      <Navbar />
      <main className="mx-auto mb-20 max-w-7xl px-3 md:px-5">
        <div className="flex flex-col items-center gap-5 space-y-6">
          <h1 className="mt-8 text-center text-2xl font-bold md:text-4xl">
            {title}
          </h1>
          <div className="w-full">
            <img
              src={image}
              alt={title}
              className="mx-auto h-auto w-full max-w-3xl rounded-lg shadow-lg"
            />
          </div>
          <p className="w-full max-w-3xl whitespace-pre-line text-justify text-lg">
            {description}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
