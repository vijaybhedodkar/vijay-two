import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='fixed top-2 inset-x-0 min-w-[63rem]  w-[63rem] overflow-hidden mx-auto z-50  m-auto '>
        <div className='lg:flex lg:justify-between items-center text-center bg-[#DFDCE3] text-black h-20 pl-[2rem] pr-[2rem] rounded-[3rem] flex " '>
            <div className='font-extrabold'>
               <img src='/somthing/logo.png' className='flex relative w-[13rem] top-[2rem]'></img>
            
            </div>
            <div className=' sm:w-50'>
                <input type='text' placeholder='search' className="h-8 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"></input>
            </div>
            <div className='line'>
                <ul className='text-center flex gap-14 sm:gap-6 font-extrabold  text-sm '>
                   <Link href={"/"} className='hover:underline'>Home</Link> 
                  
                   <Link href={'/Facilities'} className='hover:underline'>Adopt</Link>
                   <Link href={'/Shop'} className='hover:underline'>Shop</Link>
                   <Link href={'/contact'} className='hover:underline'>Donate</Link>
                </ul>
            </div>
<div className='font-extrabold'>
<Link href={"/"}>Login / sign up</Link> 
</div>
        </div>
    </nav>
  )
}

export default Navbar











// md:min-w-[1440px] font-serif text-lg sticky