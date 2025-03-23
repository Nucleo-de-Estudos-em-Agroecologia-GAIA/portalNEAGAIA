"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = ({ src }) => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{
          opacity: 1, 
          transition: { delay: 1, duration: 0.4, ease: "easeIn" }, // Delay reduzido
        }}
      >
        {/* image */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1, 
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" }, // Delay reduzido
          }}
          className="w-[198px] h-[198px] xl:w-[298px] xl:h-[298px] mix-blend-lighten absolute" // Diminuído
        >
          <Image 
            src={src} 
            priority 
            quality={100} 
            fill 
            alt="" 
            className="object-contain"
          />
        </motion.div>
        {/* Logo e Legenda */}
        <figure className="relative">
            {/* Logo do ViTech */}
            <motion.svg className="w-[300px] xl:w-[306=px] h-[150px] xl:h-[220px]" fill="transparent" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg">
                {/* Conteúdo do SVG aqui */}
            </motion.svg>
            
            {/* Legenda */}
            <figcaption className="text-center text-accent mb-5">
                
            </figcaption>
        </figure>
      </motion.div>
    </div>
  );
};

export default Photo;
