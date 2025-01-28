import { Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="mx-auto w-11/12" />

      <section className="container grid grid-cols-2 gap-x-12 gap-y-8 py-20 md:grid-cols-4 xl:grid-cols-6">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="flex gap-1 text-xl font-bold"
          >
            <Globe className="text-primary" />
            Mundial Créditos
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Redes sociais</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.instagram.com/mundialcreditos_"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="https://www.facebook.com/profile.php?id=100063516580358"
              className="opacity-60 hover:opacity-100"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">Contato</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="tel:+5562982111127"
              className="opacity-60 hover:opacity-100"
            >
              62 98211-1127
            </a>
          </div>

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              contato@mundialcreditos.com.br
            </a>
          </div>
        </div>
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &#174; 2025 Mundial Créditos. Site feito por{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://gbsoft.net"
            className="border-primary text-primary transition-all hover:border-b-2"
          >
            GBSoft.NET
          </a>
        </h3>
      </section>
    </footer>
  );
};
