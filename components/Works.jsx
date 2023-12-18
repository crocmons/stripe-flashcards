import Image from 'next/image'
import React from 'react'

const Works = () => {
  return (
    <div className='rounded-lg w-[95%] mx-auto px-2 shadow-xl border border-teal-50 my-16 py-5'>
    <div className='flex flex-col justify-center items-center text-center mx-auto'>
        <h1 className='m-auto font-bold text-2xl md:text-4xl text-slate-800'>
      How it Works
    </h1>
        <p className='text-gray-600 py-2 text-center text-base'>
        Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.
        </p>
    </div>
    <div className='flex flex-col md:flex-row flex-1 justify-center items-center text-center mx-auto gap-4 py-3 my-5'>

        <div className='flex-col relative'>
        <Image 
        src='/1.png'
        width={60}
        height={60}
        className=' justify-center mx-auto items-center object-cover'
        alt='1'
        />
        <h2 className='font-bold text-3xl pt-0 mt-0 pb-2 text-center justify-center mx-auto top-24 right-28 md:absolute text-black'>
        Subscribe
        </h2>
        <span className='flex-col text-center justify-center text-sm text-gray-700  overflow-x-auto  '>Subscribe to a plan & you’ll get an instant access to your private Slack channel.</span>
        </div>
        {/* <Image 
        src="/arrowframe.svg"
        alt="arrow"
        width={10}
        height={10}
        className="hidden md:block absolute text-black left-[15%] bottom-0 z-0"
      /> */}
        <div className='flex-col relative'>
    <Image 
        src='/2.png'
        width={100}
        height={100}
        className=' justify-center mx-auto items-center object-cover'
        alt='2'
        />
        <h2 className='font-bold text-3xl pt-0 mt-0 pb-2 text-center justify-center top-20 right-56 md:absolute text-black'>
        Request
        </h2>
        <span className='flex-col text-center justify-center text-sm text-gray-700'>Submit any number of requests. We'll work through them, one at a time, ensuring consistent updates every 24-48 hours</span>
        </div>
        <div className='flex-col relative'>
    <Image 
        src='/3.png'
        width={100}
        height={100}
        className=' justify-center mx-auto items-center object-cover'
        alt='3'
        />
        <h2 className='font-bold text-3xl pt-0 mt-0 pb-2 text-center justify-center mx-auto top-20 right-32 md:absolute text-black'>
        Revise
        </h2>
        <span className='flex-col text-center justify-center text-sm text-gray-700'>Need changes? We guarantee unlimited revisions until you're 200% satisfied.</span>
        </div>
    
    </div>
    </div>
  )
}

export default Works