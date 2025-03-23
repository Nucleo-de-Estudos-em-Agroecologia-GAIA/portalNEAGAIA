"use client";
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Components
import PhotoService from "@/components/PhotoServiceWCircle";

const services = [
  {
    num: '01',
    title: 'Banco de Sementes Crioulas do Gaia',
    description: 'Um projeto agroecológico focado em segurança alimentar e preservação das sementes crioulas no sul do Brasil.',
    content: [
      {
        imageUrl: '/assets/logos/logo-casa-gaia.jpg',
        text: "Desde 2015, o projeto Banco de Sementes Crioulas do Gaia, promovido pelo NEA GAIA da UERGS/CNPq, atua para fortalecer a segurança e soberania alimentar através da preservação e troca de sementes tradicionais junto aos agricultores familiares da região.",
      },
      {
        imageUrl: '',
        text: "Com o apoio de parceiros como STR de Cachoeira do Sul e Novo Cabrais, Emater/RS-Ascar, Secretaria de Agricultura de Paraíso do Sul, Cooperfumos, MPA, Embrapa Clima Temperado e CNPq, o projeto mantém viva a tradição das sementes crioulas.",
      },
      {
        imageUrl: '',
        text: "As ações envolvem doações, empréstimos e trocas durante as feiras anuais em Cachoeira do Sul, Paraíso do Sul e Ibarama-RS, além de encontros técnicos e formações agroecológicas para agricultores e integrantes do NEA GAIA.",
      },
      {
        imageUrl: '',
        text: (
          <>
            Acesse a cartilha oficial do projeto e conheça mais detalhes:&nbsp;
            <a 
              href="https://www.editorapantanal.com.br/ebooks/2022/banco-de-sementes-do-gaia-cartilha-uniao-pela-semente-crioula/ebook.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent font-bold hover:underline"
            >
              Clique aqui para baixar a cartilha
            </a>.
          </>
        ),
      },
    ],
    href: '/work?category=agroecologia',
  },  
  {
    num: '02',
    title: 'Curso Multidisciplinar em Agroecologia',
    description: 'Curso de extensão em agrofloresta de base ecológica realizado de forma online durante a pandemia de COVID-19.',
    content: [
      {
        imageUrl: '/assets/logos/logo-curso1.png',
        text: "Durante a pandemia de COVID-19, o NEA Gaia Centro Sul (UERGS) promoveu um curso de extensão em agrofloresta de base ecológica, conduzido de maneira remota com aulas ao vivo via YouTube e StreamYard, e atividades assíncronas pelo Google Classroom.",
      },
      {
        imageUrl: '',
        text: "O curso abordou temas como reconexão entre florestas e pessoas, implantação e manejo de agroflorestas, quintais agroflorestais liderados por mulheres, e produtos da sociobiodiversidade em sistemas agroflorestais e extrativistas.",
      },
      {
        imageUrl: '',
        text: "A iniciativa foi um marco para a educação agroecológica durante o distanciamento social, reunindo participantes e educadores de diferentes regiões do Brasil em um espaço virtual de troca e construção de saberes.",
      },
      {
        imageUrl: '',
        text: (
          <>
            Consulte o curso completo no YouTube:&nbsp;
            <a 
              href="https://www.youtube.com/playlist?list=PLdj6rtngGq3Jk87-x9WLghyjzPUHxkZ4s" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent font-bold hover:underline transition-all duration-300 ease-in-out hover:text-green-600"
            >
              Assista ao curso aqui
            </a>.
          </>
        ),
      },
    ],
    href: '/work?category=agroecologia',
  },
  {
    num: '03',
    title: 'Curso de Agroflorestas de Base Ecológica',
    description: 'Uma experiência remota e interativa durante a pandemia, promovendo agroflorestas e saberes tradicionais.',
    content: [
      {
        imageUrl: '/assets/logos/logo-curso2.png',
        text: "A experiência relata um curso de extensão em agrofloresta de base ecológica realizado pelo NEA Gaia Centro Sul (UERGS) durante a pandemia de COVID-19. O curso foi conduzido de maneira remota, com aulas síncronas semanais via YouTube e StreamYard e atividades assíncronas no Google Classroom.",
      },
      {
        imageUrl: '',
        text: "Os temas abordaram desde a reconexão entre florestas, cultivos e comunidades, até princípios de agroflorestas, manejo, certificação e relatos de experiências agroflorestais de mulheres e agricultores em diferentes territórios do Brasil.",
      },
      {
        imageUrl: '',
        text: "Com a participação de educadores e alunos de várias regiões do país, o curso se destacou como um importante espaço de intercâmbio agroecológico, promovendo o fortalecimento das práticas agroflorestais mesmo em um contexto de distanciamento social.",
      },
      {
        imageUrl: '',
        text: (
          <>
            Confira o artigo completo publicado na revista <span className="italic">Experiência – Revista Científica de Extensão</span> (v.8, n.02, p.113-124, 2022):&nbsp;
            <a 
              href="https://periodicos.ufsm.br/experiencia/article/view/69141"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-accent font-bold hover:underline hover:text-primary transition-colors duration-300"
            >
              Acesse o artigo aqui
            </a>.
          </>
        ),
      },
    ],
    href: '/work?category=agroecologia',
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null); // Nenhum serviço selecionado inicialmente
  const [isHovered, setIsHovered] = useState(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    window.history.pushState({}, '', `/services?category=${service.title.replace(/\s+/g, '').toLowerCase()}`);
  };

  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-1 gap-[60px]'
        >
          {/* Informative Text */}
          <div className="">
            <h3 className="text-3xl font-bold text-white">
              Explore as Áreas de Pesquisa do NEA GAIA
            </h3>
            <p className="text-2xl text-white/40 mt-3">
              Mergulhe no mundo fascinante das pesquisas que estamos desenvolvendo! Abaixo, você encontrará algumas das principais áreas que estamos explorando atualmente no NEA GAIA, cada uma impulsionando inovações e projetos impactantes. 
              Sinta-se à vontade para explorar e descobrir mais sobre os projetos que estão moldando o futuro!
            </p>
          </div>

          {/* Research Areas */}
          <div>
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 cursor-pointer ${
                  selectedService?.num === service.num ? 'text-white' : ''
                }`} 
                onClick={() => handleServiceClick(service)}
                onMouseEnter={() => setIsHovered(service.num)} // Define o serviço que está sendo sobrevoado
                onMouseLeave={() => setIsHovered(null)} // Limpa o serviço sobrevoado
              >
                <div className={`text-4xl font-extrabold text-outline ${
                  selectedService?.num === service.num || isHovered === service.num ? 'text-white' : 'text-transparent'
                }`}>
                  {service.num}
                </div>
                <h2 className={`text-3xl font-bold ${
                  selectedService?.num === service.num || isHovered === service.num ? 'text-accent' : 'text-white'
                }`}>
                  {service.title}
                </h2>
              </div>
            ))}
          </div>


          {/* Selected Service Details */}
          {selectedService ? (
            <motion.div
              key={selectedService.num}
              className='flex flex-col gap-6'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              layout
            >
              {/* Top */}
              <div className='flex justify-between items-center'>
                <div className='text-5xl font-extrabold text-outline text-white'>
                  {selectedService.num}
                </div>
                
                <div className="flex flex-col items-center">
                  {/* Button description */}
                  <span 
                    className={`text-sm mb-4 ${isHovered ? 'text-accent' : 'text-white'}`} 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Visit the works
                  </span>
                  <Link 
                    href={selectedService.href || '#'} 
                    className={`w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ${isHovered ? 'bg-accent' : ''}`} 
                    onMouseEnter={() => setIsHovered(true)} 
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <BsArrowDownRight className='text-primary text-3xl' />
                  </Link>
                </div>
              </div>

              {/* Title */}
              <h2 className={`mb-8 text-[42px] font-bold leading-none ${
                selectedService.num === selectedService.num ? 'text-accent' : 'text-white'
              }`}>
                {selectedService.title}
              </h2>

              {/* Description */}
              <p className='text-2xl text-white/80'>
                {selectedService.description}
              </p>

              {/* Extra content of the selected service */}
              <div className='extra-content mt-4 flex flex-col gap-8'>
                {selectedService.content.map((item, index) => (
                  <div key={index} className='flex flex-row items-start'>
                    {item.imageUrl && (
                      <div className="order-1 mb-8 mr-4">
                        <PhotoService src={item.imageUrl} className="w-32 h-auto" />
                      </div>
                    )}
                    <div className="flex-1">
                      <p className='text-2xl text-white/40'>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Border */}
              <div className={`border-b border-white/50 w-full `}></div>
            </motion.div>
          ) : (
            <p className='text-2xl text-accent'>🚫 Sem área de pesquisa selecionada. Escolha um serviço acima e venha explorar com a gente! 🔍</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
