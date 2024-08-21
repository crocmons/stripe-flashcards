"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { SignIn,SignUp, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const Navbar = () => {
  const [click, setClick] = useState(false);

//   const handleClick = () => {
//     setClick(!click);
//   };

  return (
    <div>
        <nav className="w-full bg-slate-50 fixed top-0 left-0 right-0 z-10">
          <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">

            <div>
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                   {/* Logo */}
                   <Link href='/'>
                    <h2 className="text-2xl text-black font-bold">
                     UniCraft
                    </h2>
                   </Link>
                   {/* Hamburger Menu for phone */}

                   <div className="md:hidden">
                     <button 
                     className="p-2 text-gray-800 text-2xl rounded-md outline-none focus:border-gray-400"
                     onClick={()=>setClick(!click)}
                     >
                     {
                        click ? (
                           <IoClose className="w-8 h-8" />
                        ) : (
                           <CiMenuFries className="w-8 h-8 focus:border-none active:border-none"/>
                        )
                     }
                     </button>
                   </div>
                </div>
            </div>

            <div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 ${click ? 'p-12 md:p-0 block' : 'hidden' }`}>
                      <ul className=" h-screen md:h-auto items-center justify-center text-center md:flex">
                        <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href='/#works' onClick={()=>setClick(!click)}>
                        How it Works
                        </Link>
                        </li>
                        <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href='/#pricing' onClick={()=>setClick(!click)}>
                        Pricing
                        </Link>
                        </li>
                        <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href='/#faq' onClick={()=>setClick(!click)}>
                        FAQ
                        </Link>
                        </li>
                        <SignedOut>
                          <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                          <Link href={"/sign-in"} onClick={()=>setClick(!click)}>
                          Sign In
                          </Link>
                          </li>
                          <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                          <Link href={"/sign-up"} onClick={()=>setClick(!click)}>
                          Sign Up
                          </Link>
                          </li>
                        </SignedOut>
                        <SignedIn>
                        <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                          <Link href='/generate' onClick={()=>setClick(!click)}>
                          Create Flashcards
                          </Link>
                          </li>
                          <li className="pb-6 text-xl text-slate-900 font-medium py-2 md:px-6 text-center border-b-2 md:border-b-0 md:hover:text-purple-600 md:hover:bg-transparent">
                          <Link href='/flashcards' onClick={()=>setClick(!click)}>
                          View Flashcards
                          </Link>
                          </li>
                        </SignedIn>
                        <button className="mt-2 md:hidden py-2 px-4  text border border-slate-700 text-center items-center justify-center text-black">
                        <SignedIn>
                        <UserButton className="mt-2 md:hidden py-2 px-4  text border border-slate-700 text-center items-center justify-center text-black"/>
                        </SignedIn>
                      </button>
                      </ul>
                      
                </div>
            </div>
                       
            <button className="hidden md:flex py-2 px-4 text  border-slate-700 text-center items-center justify-center text-black">
                        <SignedIn>
                        <UserButton  />
                        </SignedIn>
                      </button>

          </div>
        </nav>
    </div>
  );
};

export default Navbar;
