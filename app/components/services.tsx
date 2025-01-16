import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import galeraFirmaImg from "~/assets/images/galera-firma.jpeg";
import veiaVeiImg from "~/assets/images/veia-vei.jpeg";
import veiaZap2Img from "~/assets/images/veia-zap2.jpeg";
import casaPapelImg from "~/assets/images/casa-papel.jpeg";
import carroMoedaImg from "~/assets/images/carro-moeda.jpeg";
import moedaCasaImg from "~/assets/images/moeda-casa.jpeg";
import dinheiroImg from "~/assets/images/dinheiro.jpeg";
import maquinaCartaoImg from "~/assets/images/maquina-cartao.jpeg";
import meiImg from "~/assets/images/mei.jpeg";
import mulherHomemPapelImg from "~/assets/images/mulher-homem-papel.jpeg";

interface FeatureProps {
  image: string;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    image: galeraFirmaImg,
    title: "Empréstimo consignado para funcionário público",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    image: veiaVeiImg,
    title: "Empréstimo consignado para aposentado do INSS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    image: veiaZap2Img,
    title: "Empréstimo consignado para pensionista",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    image: dinheiroImg,
    title: "Quitação com recurso próprio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    image: moedaCasaImg,
    title: "Empréstimo com garantia de imóvel ou veículo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    image: maquinaCartaoImg,
    title: "Empréstimo com cartão de crédito",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    image: meiImg,
    title: "Empréstimo para MEI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
  {
    image: mulherHomemPapelImg,
    title: "Empréstimo para CNPJ LTDA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quas provident cum",
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 text-center sm:py-32">
      <h2 className="text-3xl font-bold md:text-4xl">
        Escolha a{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary bg-clip-text text-transparent">
          solução{" "}
        </span>
        ideal para você!
      </h2>
      <p className="mx-auto mb-8 mt-4 text-xl text-muted-foreground md:w-1/2">
        Descubra nossos tipos de empréstimo que ajudam a organizar suas finanças
        e trazer mais tranquilidade para a sua vida.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ image, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <img
              src={image}
              alt="Imagem de um cartão."
              className="h-40 w-full rounded-md object-cover"
            />
            <CardHeader>
              <CardTitle className="grid place-items-center gap-4">
                {title}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};
