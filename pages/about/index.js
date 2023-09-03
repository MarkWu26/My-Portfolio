// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaNode,
} from "react-icons/fa";

import {
  BsGit,
  BsGithub
} from "react-icons/bs";


import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiPrisma
} from "react-icons/si";

import { useState } from "react";
import Circles from "@/components/Circles";
import Avatar from "@/components/Avatar";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Technologies and Frameworks',
        icons: [
          {icon: <FaHtml5/>, name: "HTML 5"},
          {icon: <FaCss3/>, name: "CSS"},
          {icon: <FaJs/>, name: "Javascript"},
          {icon: <FaReact/>, name: "Reactjs"},
          {icon: <FaNode/>, name: "Nodejs"},
          {icon: <SiMongodb/>, name: "MongoDB"},
          {icon: <SiExpress/>, name: "Expressjs"},
          {icon:  <SiNextdotjs/>, name: "Nextjs"},
          {icon: <SiTailwindcss/>, name: "Tailwind"},
          {icon: <SiMysql/>, name: "MySQL"},
          {icon:  <SiPrisma/>, name: "Prisma"},
          {icon:  <SiFramer/>, name: "Framer"},
          {icon:  <FaWordpress />, name: "Wordpress"},
          {icon:  <BsGit/>, name: "Git"},
          {icon:   <BsGithub/>, name: "Github"},
          {icon:   <SiPostman/>, name: "Github"},
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
        {icon: <FaFigma />, name:"Figma"}, 
        {icon:  <SiAdobexd />,  name:"Xd"},
        {icon:  <SiAdobephotoshop/>,  name:"Photoshop"},
        ],
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Ateneo De Zamboanga University (2020-2024)',
        course: 'Bachelor of Science In Information Technology',
    
        awards: [
          {awardName: `- Dean's Lister`},
          {awardName: '- Events Lead | Google Developers Student Club '}
        ]
      },
      {
        title: 'Zamboanga Chong Hua High School',
        course: 'Elementary - Senior High School',
        date: '2007-2020',
        awards: [
          {awardName: `- Graduated With Honors`},
          {awardName: '- Best Research Paper'},
          {awardName: '- Academic Excellence Award'},
          {awardName: "- Alumni Achiever's award"}
        ]
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'GSYNC Solutions Philippines - Intern (450 hours)',
        position: '- Assistant IT Team Lead',
        stage: ['- Lead Developer | Developed GSYNC Facebook Chatbot using Node.js'],
        stage2: '- Developed UI of GSYNC Website',
        stage3: '- Assisted LGUs on ARCGIS'
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Ateneo Computing Festival AlgoLumpia at HackaTuron',
        stage: ' - Hackathon Finalist',
      },
      {
        title: 'Responsive Web Design Certifcate',
        stage: ' - FreeCodeCamp 2023',
      },
      {
        title: 'JavaScript Data Structures and Algorithms Certificate',
        stage: ' - FreeCodeCamp 2023',
      },
      
    ],
  },
];

import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

const About = () => {
  const [index, setIndex] = useState(0);
  
  return (
  <div className="h-full bg-primary/30 py-24 text-center xl:text-left">
    <Circles/>
    <motion.div
     className="hidden xl:flex absolute -bottom-16 -left-[373px]"
     variants={fadeIn('right', 0.6)}
     initial="hidden" 
    animate="show" 
    exit="hidden"
    transition={{duration: 1, ease: 'easeInOut'}}
     >
      <Avatar/>
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      <motion.div className="flex-1 flex flex-col justify-center"
      variants={fadeIn('right', 0.6)}
      animate="show"
      initial="hidden"
      exit="hidden"
      >
        
          <h2 className="h2">
            Captivating <span className="text-accent">stories</span> birth magnificent designs.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I am Mark Stanley Wu, a student passionate about becoming a full-stack developer. Focused on the MERN stack and Next.js. I'm excited to collaborate and bring innovative web experiences to life.
          </p>
   
      </motion.div>

      <motion.div 
      className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
      variants={fadeIn('left', 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      >
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex)=>{
            return(
              <div 
              key={itemIndex} 
              className={`${index === itemIndex && `text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300`} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:bg-white after:-bottom-1 after:left-0 hover:text-accent hover:duration-300 hover:transition-all`}
              onClick={()=> setIndex(itemIndex)}
              >{item.title}</div>
            )
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col items-center gap-y-2 xl:gap-y-4 xl:items-start">
          {aboutData[index].info.map((item, itemIndex)=>{
            return (
              <div key={itemIndex} >
               <div className="font-normal mb-2 md:mb-0">{item.title}</div>
               {/* <div className="hidden md:flex">-</div> */}
               <div className="font-light ">{item.position}</div>
               <div className="font-light">{item.stage}</div>
               <div className="font-[390]">{item.course}</div>
               <div className="font-light">{item.stage2}</div>
               <div className="font-light">{item.stage3}</div>
               <div className="font-light">{item.date}</div>
               <ul className="font-light">{item.awards && Array.isArray(item.awards) && item.awards.map((award,awardKey)=>{
                  return(
                    <li key={awardKey}>{award.awardName}</li>
                  )
               })}
               </ul>

               {item.icons ?  <div className="flex flex-wrap gap-x-5 gap-y-4 mt-4 mb-4 justify-center items-center">
              
              {item.icons?.map((icon, itemIndex)=>{
                return (                  
                  <div>
                    <motion.div className="text-3xl flex text-white max-w-full flex-col items-center align-center "
                    key={itemIndex}
                    >
                    <motion.div
                    transition={{
                       repeat: Infinity, duration: 1.5
                      }}
                 
                    animate={{ 
                    y:[-1, 1, -1],
                    }}
                    >{icon.icon}</motion.div>
                 
                    <span key={itemIndex} className= "text-xs font-extralight text-gray-200 items-center">
                    {icon.name}
                    </span>                  
                    </motion.div>
                  </div>
                )
              })}
             </div>: null}
              </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
