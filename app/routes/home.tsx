import { Navbar } from "~/components/navbar";
import type { Route } from "./+types/home";
import { Hero } from "~/components/hero";
import stylesheet from "~/assets/styles/hero.css?url";
import { Services } from "~/components/services";
import { ZapBounce } from "~/components/zap-bounce";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mundial Créditos" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ZapBounce />
      <Footer />
    </>
  );
}
