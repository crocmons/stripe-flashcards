import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Partners from './Partners'

const HeroSection = () => {
  return (
    <>
    <div className='flex flex-col text-center justify-center items-center mx-auto text-black h-screen px-2 my-24 overflow-hidden md:my-14'>
     <h1 className='font-bold text-3xl md:text-5xl leading-10 py-5 gap-5 tracking-wider mx-auto '>Elevate Your Presence with Seamless <br /> Design and Innovation.</h1>
     <p className='text-slate-600 text-base tracking-wider py-4'>From strategic planning to digital presence, we're your dedicated partner in achieving solo success.</p>
     <button className="py-2 px-4 border border-slate-700 text-center items-center 
     justify-center text-white bg-black rounded-md text-xl my-1">
        <Link href="#pricing">
        View Pricing
        </Link>
     </button>

    <p className='text-base text-center justify-center items-center text-slate-700 py-10'>Trusted By 250+ Companies</p>
    <Partners />
    </div>
    </>
  )
}

export default HeroSection