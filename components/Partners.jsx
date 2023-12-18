import Image from 'next/image'
import React from 'react'

const Partners = () => {
  return (
    <div className="h-[100px] mx-auto overflow-hidden relative w-auto items-center justify-center flex flex-col">
        
    <div className="slider-track">
      <div className="h-[100px] w-[250px]">
        <Image 
        src="/zapierlogo.png"
        width={100}
        height={100}
        alt='logo'
        />
      </div>
      <div className="h-[100px] w-[250px]">
        <Image 
        src="/spotifylogo.png"
        width={100}
        height={100}
        alt='logo'
        />
      </div>
      <div className="h-[100px] w-[250px]">
        <Image 
        src="/zoomlogo.png"
        width={100}
        height={100}
        alt='logo'
        />
      </div>
      <div className="h-[100px] w-[250px]">
        <Image 
        src="/slacklogo.png"
        width={100}
        height={100}
        alt='logo'
        />
      </div>
      <div className="h-[100px] w-[250px]">
        <Image 
        src="/amazonlogo.png"
        width={100}
        height={100}
        alt='logo'
        />
      </div>
      <div className="h-[100px] w-[250px]">
        <Image 
        src="/adobelogo.png"
        width={100}
        height={100}
        alt='logo'
        />
      </div>
    </div>
   </div>
  )
}

export default Partners