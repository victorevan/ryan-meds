import { Footer } from "@components/Home/Footer";
import { Header } from "@components/Home/Header";
import { Hero } from "@components/Home/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
