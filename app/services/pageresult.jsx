"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";


// components
import { FaTimes } from 'react-icons/fa';
import PhotoService from "@/components/PhotoService";
import { ScrollArea } from '@/components/ui/scroll-area'; 

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae dolorum debitis quod ratione repellendus sunt!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb1.png',
    content: [
      {
        imageUrl: '/assets/photo.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
      {
        imageUrl: '',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
    ],
    live: '',
    github: "",
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'Project 2',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae dolorum debitis quod ratione repellendus sunt!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb2.png',
    content: [
      {
        imageUrl: '/assets/photo.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
      {
        imageUrl: '',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
    ],
    live: '',
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Project 3',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae dolorum debitis quod ratione repellendus sunt!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb3.png',
    content: [
      {
        imageUrl: '/assets/photo.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
      {
        imageUrl: '',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
    ],
    live: '',
    github: "",
  },
  {
    num: '04',
    category: 'fullstack',
    title: 'Project 4',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae dolorum debitis quod ratione repellendus sunt!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb4.png',
    content: [
      {
        imageUrl: '/assets/photo.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
      {
        imageUrl: '',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
    ],
    live: '',
    github: "",
  },
  {
    num: '05',
    category: 'fullstack',
    title: 'Project 5',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae dolorum debitis quod ratione repellendus sunt!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb5.png',
    content: [
      {
        imageUrl: '/assets/photo.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
      {
        imageUrl: '',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
    ],
    live: '',
    github: "",
  },
  {
    num: '06',
    category: 'fullstack',
    title: 'Project 6',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae dolorum debitis quod ratione repellendus sunt!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb6.png',
    content: [
      {
        imageUrl: '/assets/photo.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
      {
        imageUrl: '',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
    ],
    live: '',
    github: "",
  },
  {
    num: '07',
    category: 'fullstack',
    title: 'Project 7',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae dolorum debitis quod ratione repellendus sunt!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb7.png',
    content: [
      {
        imageUrl: '/assets/photo.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
      {
        imageUrl: '',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
    ],
    live: '',
    github: "",
  },
  {
    num: '08',
    category: 'frontend',
    title: 'Project 8',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vitae dolorum debitis quod ratione repellendus sunt!",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: '/assets/work/thumb8.png',
    content: [
      {
        imageUrl: '/assets/photo.png',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
      {
        imageUrl: '',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Integer in malesuada elit. Quisque a urna nec odio vestibulum ullamcorper. Aliquam eget sapien varius, pellentesque nulla ac, pharetra nisl. Duis sed risus libero. Cras venenatis euismod malesuada. Nullam ac felis at magna aliquam elementum.",
      },
    ],
    live: '',
    github: "",
  },
];

const Work = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [selectedId, setSelectedId] = useState(null); // Estado para o ID do projeto selecionado
  const projectsPerPage = 4;

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      setCurrentPage(0);
    }
  }, [category]);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const currentProjects = filteredProjects.slice(currentPage * projectsPerPage, (currentPage + 1) * projectsPerPage);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: 'easeIn' }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <Select onValueChange={(value) => {
          setSelectedCategory(value);
          setCurrentPage(0);
          window.history.pushState({}, '', `/work?category=${value}`);
        }} defaultValue={selectedCategory} className="mt-2 mb-2">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="frontend">Frontend</SelectItem>
              <SelectItem value="fullstack">Fullstack</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              layoutId={project.num}
              key={index}
              className="w-full mb-10 cursor-pointer"
              onClick={() => setSelectedId(project.num)}
            >
              <div className="h-[460px] relative group flex justify-center bg-pink-50/20 mb-4">
                <Image 
                  src={project.image} 
                  fill 
                  className="object-cover" 
                  alt={`${project.title} image`} 
                />
              </div>
              <h2 className="text-[42px] font-bold text-white capitalize">{project.title}</h2>
              <p className="text-2xl mb-2 text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name} 
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ','}
                    </li>
                  );
                })}
              </ul>
              
              {/* Buttons */}
              <div className="flex items-center gap-4 justify-start mb-3 mt-3">
              
                {/* Live project button */}
                <Link href={project.live}> {/* Link para o projeto ao vivo */}
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github project button */}
                <Link href={project.github}> {/* Link para o repositório no Github */}
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              {/* Border */}
              <div className=" border border-white/20 mb-4"></div>
  
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              layoutId={selectedId}
              className="fixed inset-0 bg-black/75 flex justify-center items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="bg-primary p-10 rounded-lg max-w-6xl w-full h-[90vh] relative overflow-hidden">
                {/* Ícone de fechar */}
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-accent z-10"
                  onClick={() => setSelectedId(null)}
                  aria-label="Fechar"
                >
                  <FaTimes className="h-6 w-6" />
                </button>

                {/* ScrollArea alinhado à direita */}
                <ScrollArea className="h-full ml-4 overflow-y-auto pr-4"> {/* Padding right para afastar o conteúdo da borda */}
                  {/* Obtenção do projeto selecionado */}
                  {projects.find(project => project.num === selectedId) && (
                    <>
                      <h2 className="text-4xl font-bold mb-4">
                        {projects.find(project => project.num === selectedId).title}
                      </h2>
    
                      <p className="mb-4">
                        {projects.find(project => project.num === selectedId).description}
                      </p>
                      <ul className="mb-6 flex gap-4">
                        {projects.find(project => project.num === selectedId).stack.map((item, index) => {
                          return (
                            <li key={index} className="text-xl text-accent">
                              {item.name} 
                              {/* remove the last comma */}
                              {index !== projects.find(project => project.num === selectedId).stack.length - 1 && ','}
                            </li>
                          );
                        })}
                      </ul>

                      {/* Buttons */}
                      <div className="flex items-center gap-4 justify-start mb-3 mt-3">
                      
                      {/* Live project button */}
                      <Link href={projects.find(project => project.num === selectedId).live}> {/* Link para o projeto ao vivo */}
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>

                      {/* Github project button */}
                      <Link href={projects.find(project => project.num === selectedId).github}> {/* Link para o repositório no Github */}
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    </div>

                      {/* Conteúdo extra do projeto selecionado */}
                      <div className="extra-content flex flex-col gap-8">
                        {projects.find(project => project.num === selectedId).content.map((item, index) => (
                          <div key={index} className="flex flex-row items-start">
                            {item.imageUrl && ( // Verificando se imageUrl existe em item
                              <div className="order-1 mb-8 mr-4">
                                <PhotoService src={item.imageUrl} className="w-32 h-auto" />
                              </div>
                            )}
                            <div className="flex-1">
                              <p className="font-medium text-2xl text-current">{item.text}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </ScrollArea>
              </div>
            </motion.div>
          )}
        </AnimatePresence>



      </div>
    </motion.section>
  );
};

export default Work;
