// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Erwin Alvarez',
    position: 'Customer from fiverr',
    message:
      'I had an excellent experience collaborating with Mark on a recent project. His exceptional communication, technical proficiency, and problem-solving skills were evident throughout our work together. Mark demonstrated adaptability to changes, consistently met deadlines, and delivered a product that exceeded expectations. I highly recommend Mark to anyone in search of a skilled software developer on Fiverr. It was a pleasure working with him, and I"m eager for future collaborations.',
  },
  {
    image: '/t-avt-2.png',
    name: 'echtebezlsr',
    position: 'Customer from fiverr',
    message:
      'Amazing guy.',
  },
  /* {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  }, */
];

import {FaQuoteLeft} from 'react-icons/fa';

import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination'
 
import {Navigation, Pagination} from 'swiper';

const TestimonialSlider = () => {
  return <Swiper
  navigation={true}
  pagination={{
    clickable: true,
  }}
  modules={[Navigation, Pagination]}
  className="h-[400px]"
  >
  {
    testimonialData.map((person, index)=>{
      return (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center overflow-auto md:flex-row gap-x-8 h-full px-16'>
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                <div className='mb-2 mx-auto'>
                  <Image src={person.image} width={100} height={100} alt=""/>
                </div>
                <div className='text-lg'>{person.name}</div>
                <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
              </div>
            </div>
            <div className=" flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
            <div className='mb-4'>
              <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
            </div>
            <div className='xl:text-lg text-center md:text-left overflow-auto'>{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      )
    })
  }
  </Swiper>;
};

export default TestimonialSlider;

