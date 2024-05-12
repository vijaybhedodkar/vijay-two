"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Loove Animal / Homepage',
};

function Header() {
  return (
    <div className='flex flex-col  ml-14 w-[] justify-center text-center h-[36rem]  lg:flex  relative'>
   
        <img src='/somthing/file.png' className= " h-100 object-cover rounded-xl  relative overflow-hidden w-[37rem] lg:top-[13rem]  top-[-1rem] left-[-2rem] lg:left-[50rem] md:relative   "></img>
      
        <h1 className=' mt-[10rem]  md:mt-[-5rem] text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 lg:w-[70%] w-[100%] flex justify-center items-center text-center capitalize absolute right-[2rem] lg:right-[30rem] '>All Animals Deserve a Chance in Life</h1>
<p className=' font-normal text-base md:text-lg text-neutral-300 max-w-[49rem] mx-auto lg:flex justify-center items-center relative right-[3rem]  lg:right-[23rem] lg:top-[-4rem]  top-[4rem] flex text-opacity-0 lg:text-opacity-100  '>we aim at improving the situation for Animals in long term i.e by providing veterniary care.
    by supporting animal sanctuaies and through our educational work. Every single donation help!

</p>
<div className='lg:absolute lg:bottom-[2rem] lg:left-[11rem] lg:mt-[4rem] flex gap-5  absolute l-[2rem] top-[33rem]  '>
<Link href={"/"}><button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ">
          Donate
        </div>
      </button></Link> 

<Link href={"/"}><button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Adopt
        </div>
      </button></Link> 
    </div>
    </div>
  )
}

export default Header
