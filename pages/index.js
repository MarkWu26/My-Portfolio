// next image
import Image from "next/image";

//components
import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer
import {motion} from 'framer-motion'

//variants
import { fadeIn } from "@/variants";

function Home() {
  return (
  <div className="bg-primary/60 h-full">
  {/* text  */}
  <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
    <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
    {/* title */}
    <motion.h1 className="h1"
      variants={fadeIn('down', 0.5)} 
    initial="hidden" 
    animate="show" 
    exit="hidden"
    >
    Transforming Ideas <br/> Into 
    <span className="text-accent"> Digital Reality</span>
    </motion.h1>
    <motion.p 
    variants={fadeIn('down', 0.6)} 
    initial="hidden" 
    animate="show" 
    exit="hidden"
    className="hidden xl:flex max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-gray-200">
      I am a full stack developer based in the Philippines. I like to explore new possibilites with emerging technologies, providing digital solutions and outcomes.<br></br>I am specializing in React.js, Node.js, MongoDB, and Express.js. I am also currently upskilling in Next.js for building SEO friendly applications.
    </motion.p>

    <div className="flex justify-center xl:hidden relative">
      <ProjectsBtn/>
    </div>
    <motion.div 
    variants={fadeIn('down', 0.7)} 
    initial="hidden" 
    animate="show" 
    exit="hidden"
    className="hidden xl:flex">

    <ProjectsBtn/>
    </motion.div>

    </div>
  </div>
  

  <div className="w-[1200px] h-full absolute right-0 bottom-0">
    <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
    </div>
    <ParticlesContainer/> 
    
    <motion.div 
    className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:top-32 lg:right-[1%]"
    variants={fadeIn('up', 0.8)} 
    initial="hidden" 
    animate="show" 
    exit="hidden"
    transition={{duration: 1, ease: 'easeInOut'}}
    >
      <Avatar/>
    </motion.div>
   
  </div>


  </div>
  );
}

export default Home;
