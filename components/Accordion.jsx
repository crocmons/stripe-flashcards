"use client"
import Image from 'next/image'
import React, {useEffect, useRef, useState} from 'react'



const Accordion = ({question, idx, answer}) => {
   
  const [turn, setTurn] = useState([false, false, false, false, false,false])
  
  const toggleAccordion = ()=>{
     let newTurn = [...turn]
     newTurn[idx] = !newTurn[idx]
     setTurn(newTurn)
  }

  const contentRef = useRef(null)

  useEffect(()=>{

    if(contentRef.current){
      contentRef.current.style.maxHeight = turn[idx] ? `${contentRef.current.scrollHeight}px` : "0px"
    }

  },[contentRef, turn, idx])

  return (
    <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>

        <button onClick={toggleAccordion} className={`bg-transparent px-5 shadow cursor-pointer w-full h-full ${turn[idx]}`}>
          <div className='py-5'>
            <div className='flex items-center justify-between h-14 text-left'>
              <span className='ml-2 font-medium lg:font-semibold lg:text-xl text-sm text-slate-700'>{question}</span>
              <div>
                {turn[idx] ?
                <Image 
                 src='/minus.svg'
                 alt='minus-img'
                 width={20}
                 height={20}
                /> : 
                <Image 
                 src='/plus.svg'
                 alt='plus-img'
                 width={20}
                 height={20}
                />
               }
              </div>
            </div>
            <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
              <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg'>
                {answer}
              </p>

            </div>

          </div>

        </button>
         


    </div>
  )
}

export default Accordion