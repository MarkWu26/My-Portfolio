import Image from "next/image";


import Link from "next/link";

import Socials from "../components/Socials";


const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[85px]">
  <div className="container mx-auto">
    <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-5">
      <Link href={'/'}>
       <h5 className="text-4xl">
       mark
       <span className="font-thin"> wu</span>
       <span className="text-accent font-light">.</span>
       </h5>
       
      </Link>
      <Socials/>
    </div>
  </div>
  </header>
  )
}

export default Header;
