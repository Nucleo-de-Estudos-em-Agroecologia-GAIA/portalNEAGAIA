"use client";
import CountUp from "react-countup";

const stats = [
    {
        num: 5,
        text: "Anos de experiência em agroecologia",
    },
    {
        num: 20,
        text: "Projetos comunitários realizados",
    },
    {
        num: 4000,
        text: "Pessoas impactadas por nossas iniciativas",
    },
    {
        num: 50,
        text: "Parcerias com universidades e ONGs",
    },
];
const Stats = () => {
  return (
   <section className="pt-4 pb-12 xl:pt-0 xl:pb-0 mt-10">
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index)=> {
                return (
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" 
                    key = {index}
                    >
                        <CountUp 
                        end={item.num} 
                        duration={5} 
                        delay= {2} 
                        className="text-4xl xl:text-6xl font-extrabold"
                        /> 
                        <p 
                            className={`${
                                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                            } leading-snug text-white/80`}
                        >
                            {item.text}
                        </p>
                    </div>
                );
            })}
        </div>
    </div>
   </section>
  )
};

export default Stats;