
import {RiYouTubeLine, RiInstagramLine, RiFacebookLine, RiDribbleLine, RiBehanceLine, riPinterestLine, RiYoutubeLine, RiGithubLine, RiLinkedinLine} from 'react-icons/ri'

import Link from 'next/link'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
  <a href={'https://github.com/MarkWu26/'} target="_blank" className="hover:text-accent transition-all duration-300">
    <RiGithubLine/>
  </a>
  <a href={'https://www.linkedin.com/in/markwu30/'} target="_blank" className="hover:text-accent transition-all duration-300">
    <RiLinkedinLine/>
  </a>
  <Link href={''} className="hover:text-accent transition-all duration-300">
    <RiInstagramLine/>
  </Link>
  <a href={'https://www.facebook.com/markstanley.wu'} target="_blank" className="hover:text-accent transition-all duration-300">
    <RiFacebookLine/>
  </a>
  <Link href={'https://www.youtube.com/channel/UC6KL3Iti9rf2p2vgMyfpk3Q'}  target="_blank" className="hover:text-accent transition-all duration-300">
    <RiYoutubeLine/>
  </Link>
  </div>;
};

export default Socials;
