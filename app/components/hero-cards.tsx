import { Card } from "~/components/ui/card";
import veiaZapImg from "~/assets/images/veia-zap.jpeg";
import galeraFirmaImg from "~/assets/images/galera-firma2.png";
import carroMoedaImg from "~/assets/images/carro-moeda.jpeg";
import maquinaCartaoImg from "~/assets/images/maquina-cartao.jpeg";

export const HeroCards = () => {
  return (
    <div className="relative hidden h-[500px] w-[700px] flex-row flex-wrap gap-8 lg:flex">
      <Card className="absolute -top-6 right-[380px] w-72 shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <img
          src={carroMoedaImg}
          alt="Carro em cima de moedas."
          className="rounded-md"
        />
      </Card>
      <Card className="absolute right-[30px] top-7 w-80 shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <img
          src={galeraFirmaImg}
          alt="Pessoas felizes em um escritório."
          className="rounded-md"
        />
      </Card>
      <Card className="absolute left-[20px] top-[190px] w-80 shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <img
          src={veiaZapImg}
          alt="Senhora utilizando o celular."
          className="rounded-md"
        />
      </Card>
      <Card className="absolute left-[360px] top-[260px] w-72 shadow-black/10 drop-shadow-xl dark:shadow-white/10">
        <img
          src={maquinaCartaoImg}
          alt="Senhora utilizando o celular."
          className="rounded-md"
        />
      </Card>
    </div>
  );
};
