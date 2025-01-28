import { useNavigate } from "react-router";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { type Service } from "~/types";

interface ServicesProps {
  services: Service[];
}

export const Services = ({ services }: ServicesProps) => {
  const navigate = useNavigate();
  return (
    <section id="services" className="container py-24 text-center sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        Escolha a{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          solução{" "}
        </span>
        ideal para você!
      </h2>
      <p className="mx-auto mb-8 mt-4 text-2xl text-muted-foreground md:w-1/2">
        Descubra nossos tipos de empréstimo que ajudam a organizar suas finanças
        e trazer mais tranquilidade para a sua vida.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map(({ id, name, image, title }) => {
          return (
            <Card
              key={id}
              className="cursor-pointer bg-muted/50 hover:bg-muted/40"
              onClick={() => {
                navigate(`/servicos/${name}`);
              }}
            >
              <img
                src={image}
                className="h-40 w-full rounded-md object-cover"
              />
              <CardHeader>
                <CardTitle className="grid place-items-center gap-4">
                  {title}
                </CardTitle>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
