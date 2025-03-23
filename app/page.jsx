import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link"; // Adicione isso no topo do arquivo

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full mb-8">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Núcleos de Estudos em Agroecologia</span>
            <h1 className="h1 mb-2">
            Oi!  <br /> <span className="text-accent">Eu me chamo NEA Gaia! 🌱</span>
            </h1>
            <p className="text-center xl:text-left order-2 xl:order-none max-w-[500px] mb-6 text-white/120 mx-auto xl:mx-0 xl:ml-2">
            Sou o Núcleo de Agroecologia Gaia, e meu objetivo é simples: fortalecer a conexão entre a comunidade e a universidade para construir um futuro mais agroecológico e sustentável! Nós acreditamos que a agroecologia vai muito além da prática agrícola: ela busca integrar sustentabilidade, biodiversidade e sabedoria local de forma harmônica, criando agroecossistemas resilientes e diversificados, que garantem a saúde da terra e das pessoas.
            </p>
            <div className="mb-8 bg-accent-light p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold text-accent mb-4">Nossos Objetivos</h2>
                <ul className="space-y-3 text-white/90">
                    <li className="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6M9 16h6M9 8h6"></path></svg>
                        <span>Fortalecer os laços entre a universidade e as comunidades que buscam por um futuro mais sustentável.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6M9 16h6M9 8h6"></path></svg>
                        <span>Construir um mundo mais agroecológico, onde a harmonia entre seres humanos e a natureza é fundamental.</span>
                    </li>
                </ul>
            </div>

            {/* btn and socials */}
            <div className="mb-6 flex flex-col xl:flex-row items-center gap-8">
              <Link href="https://www.editorapantanal.com.br/ebooks/2022/banco-de-sementes-do-gaia-cartilha-uniao-pela-semente-crioula/ebook.pdf" passHref>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download</span>
                  <FiDownload className="text-xl"/>
                </Button>
              </Link>
              <div className="xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none xl:mb-0 relative top-[-80px] sm:top-[-50px] md:top-[-60px] lg:top-[-80px] xl:top-[-180px]">
            <Photo src="/assets/photo.png" />
          </div>

        </div>
      </div>
      <Stats />
      
    </section>
  );
};

export default Home;
