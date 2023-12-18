"use client"
import React from 'react'
import { Swiper, SwiperSlide} from "swiper/react"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination} from 'swiper/modules'
import {RxArrowTopRight} from 'react-icons/rx'
import Image from 'next/image';
import { WorkProjects } from '@/constants'
import Link from 'next/link';


const ProjectSlider = () => {
  return (
    <div className='mx-auto flex flex-col items-center justify-center'>
            <Swiper
              breakpoints={{
                340:{
                    slidesPerView:2,
                    spaceBetween: 15,
                },
                700:{
                    slidesPerView:3,
                    spaceBetween: 15,
                },
                
              }}

              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, FreeMode]}
              className='max-w-[100%] lg:max-w-[80%]'
              
            >
                { WorkProjects.map((project)=>(
                   <SwiperSlide key={project.title}>
                       <div className='mb-20 flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-5 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] mx-auto'>
                          
                          <div className='absolute inset-0 rounded-md bg-blend-normal bg-cover bg-center w-full h-full' style={{ backgroundImage: `url(${project.bgImg})`}} />

                          <div className='absolute inset-0 bg-black opacity-0 group-hover:opacity-50 cursor-pointer'/>

                          <div className='relative flex flex-col gap-3'>
                          <h1 className='font-bold hidden group-hover:block group-hover:text-white group-hover:text-2xl  justify-center items-center mx-auto'>
                              {project.title}
                            </h1>
                          </div>

                          <RxArrowTopRight className="absolute bottom-5 left-5 w-[40px] h-[40px] font-bold text-white group-hover:text-[#7dc8ef] group-hover:rotate-45 duration-100" />
                             
                       </div>
                   </SwiperSlide>
                ))}

            </Swiper>

            <button className="py-2 px-4 border border-slate-900 text-center items-center justify-center text-black rounded-md text-xl">
        <Link href="#works">
        View Recent Works
        </Link>
     </button>
    </div>
  )
}

export default ProjectSlider