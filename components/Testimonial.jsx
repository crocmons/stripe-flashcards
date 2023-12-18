import Image from 'next/image'
import React from 'react'

const Testimonial = () => {
  return (
    <div className='flex flex-col my-16 gap-4 py-2 px-2 mx-auto items-center justify-center text-center'>
        <Image 
        src='/logo.jpg'
        width={150}
        height={150}
        className=' object-cover'
        alt='compant_logo'
        />
     <h2 className='text-black text-lg md:text-2xl tracking-wide font-bold py-3'>
     We’ve been with unicraft to kick start every new project and can’t imagine working without it.
     </h2>

     <Image 
        src='/Avatar.png'
        width={120}
        height={120}
        className='rounded-full object-cover'
        alt='compant_logo'
        />
        <span className='text-center font-semibold text-sm text-black'>Candice Wu</span>
        <span className='text-gray-700 text-xs font-medium '>Product Manager, Sisyphus</span>

     
    </div>
  )
}

export default Testimonial