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
        {/* circle */}
        <motion.svg className="w-[200px] xl:w-[306px] h-[200px] xl:h-[306px]" fill="transparent" viewBox="0 0 306 306" xmlns="http://www.w3.org/2000/svg"> {/* Diminuído */}
          <motion.circle 
            cx="153" 
            cy="153" 
            r="148" // Diminuído o raio do círculo
            stroke="#A8D5BA" 
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
