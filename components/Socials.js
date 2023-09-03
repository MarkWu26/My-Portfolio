
import {RiYouTubeLine, RiInstagramLine, RiFacebookLine, RiDribbleLine, RiBehanceLine, riPinterestLine, RiYoutubeLine, RiGithubLine, RiLinkedinLine} from 'react-icons/ri'

import Link from 'next/link'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
  <Link href={'https://github.com/MarkWu26/'} className="hover:text-accent transition-all duration-300">
    <RiGithubLine/>
  </Link>
  <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiLinkedinLine/>
  </Link>
  <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiInstagramLine/>
  </Link>
  <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiFacebookLine/>
  </Link>
  <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiYoutubeLine/>
  </Link>
  </div>;
};

export default Socials;
