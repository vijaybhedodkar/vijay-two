"use client"

import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='lg:fixed lg:top-2 lg:inset-x-0 lg:min-w-[63rem]  lg:w-[63rem] lg:overflow-hidden lg:mx-auto lg:z-50  lg:m-auto'>
        <div className='lg:flex lg:justify-center  lg:items-center text-center lg:bg-[#DFDCE3] text-black lg:h-20 pl-[2rem] pr-[2rem] rounded-[3rem] flex bg:none flex-col l-[0] t-[-2rem]  h-[0rem] relative " '>
            <div className='font-extrabold'>
               <img src='/somthing/logo.png' className='flex lg:relative lg:w-[13rem]  lg:top-[3rem] top-[2rem] w-[9rem] lg:right-[26rem] right[26rem]'></img>
            
            </div>
            <div className=' sm:w-50 lg:relative relative bottom-[4rem] lg:top-[-4rem] lg:left-[-10rem] lg:flex lg:items-center lg:justify-center'>
                <input type='text' placeholder='search' className="h-8 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"></input>
            </div>
            <div className='line relative bottom-[3rem] text-black  lg:absolute lg:left-[37rem] lg:top-[2rem]'>
                <ul className='text-center flex gap-14 sm:gap-6 font-extrabold  text-sm '>
                   <Link href={"/"} className='hover:underline'>Home</Link> 
                  
                   <Link href={'/Facilities'} className='hover:underline'>Adopt</Link>
                   <Link href={'/Shop'} className='hover:underline'>Shop</Link>
                   <Link href={'/contact'} className='hover:underline'>Donate</Link>
                </ul>
            </div>

        </div>
    </nav>
  )
}
  
export default Navbar;










