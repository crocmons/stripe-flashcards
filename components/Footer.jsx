import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SOCIALS } from "@/constants";

const Footer = () => {
  return (
    <footer className="mx-auto">
    <div className="flex flex-col py-12 mt-28 mb-5 gap-2 justify-center items-center text-center mx-auto ">
      <h1 className='font-bold text-2xl md:text-4xl leading-tight py-2 tracking-wider'>No long-term contracts.<br /> No catches. Simple.</h1>
      <p className='text-slate-600 text-base tracking-wider py-2'>Start your 30-day free trial. Cancel anytime.</p>
      <button className="py-2 px-4 border border-slate-700 text-center items-center 
     justify-center text-white bg-black rounded-md text-xl">
        <Link href="#">Contact Us</Link>
      </button>
      </div>
      <hr />
      <div className="flex flex-col justify-start items-start text-start py-4 my-4 mx-auto px-5">
        <Link
         href="/"
        >
          <h2 className="text-2xl text-black font-bold">UniCraft</h2>
        </Link>
          <p className='text-slate-600 text-base tracking-wide py-2'>
          Design amazing digital experiences that <br />
create more happy in the world.
          </p>
          </div>
      <div className="flex flex-col md:flex-row justify-between mx-auto py-2 px-4">
        <span className="text-gray-600 text-start justify-start items-start">
        © 2077 Untitled UI. All rights reserved.
        </span>
              <FooterColumn >
                <ul className="flex py-2  mx-auto gap-3 px-2 cursor-pointer">
                  {SOCIALS.map((link) => (
                    <Link href={link.href} key={link.icons} >
                      <Image src={link.icons} alt="logo" width={24} height={24} className='text-blue-700'/>
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
    </footer>
  );
};

const FooterColumn = ({  children }) => {
    return (
      <div >
        
        {children}
      </div>
    )
  }

export default Footer;
