"use client"
import { useEffect, useState } from 'react';
import React from 'react'

import Link from 'next/link';
import Loader from '@/components/Loader';






function Page() {

  const [loading, setLoading] = useState (true);

  useEffect(() => {
    // Simulating data fetching delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
  <div>
         {loading ? <Loader/>: (
 
    
    <div className=" relative bg-[#35c2bd] overflow-hidden flex flex-col items-end justify-start pt-[10.6rem] px-[110px] pb-[198px] box-border gap-[188.5px] leading-[normal]   h-[273rem] lg:h-[154rem] w-fit tracking-[normal] text-left text-[42px] text-gray-100 font-gill-sans-ultra-bold m-autonpm run dev mx-auto">
 
      <div className='w-[1280px] h-[832px] relative right-[-640px]'>
        <div className=' h-[448px] w-[286px] rounded-[100px] bg-[#FFCF5E] relative  left-[-27rem] '>
        <img src='/somthing/dog sitting.png' className='absolute right-[-7rem] top-[8rem] '></img>
        </div>
      <img src='/somthing/name.png' className='relative bottom-[20rem] right-[9rem]'></img>
      <p className='flex items-center align-middle relative bottom-[19rem] right-[6rem] text-sm'>Shop for pet from Top Brands</p>
      <div className='relative bottom-[17rem] right-[6rem] flex gap-[2rem]' >
      <input type='text' placeholder='What you are looking for ?' className="h-8 w-80 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none text-sm text-black"></input>
      <Link href={"search"}><button className="p-[3px] relative bottom-[1.2rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent text-sm">
         Search
        </div>
      </button></Link> 
      

      </div>
      </div>

      <div className='categories w-[1280px] h-[1200px]  relative bottom-[22rem] '>
        <div className=' w-[1280px] h-[1200px]  relative right-[-640px] contents top-[415px]'>
<span className='text-[40px] text-black  font-bold  uppercase text-center flex justify-center items-center mt-[28px] '>Categories</span>
<div className=' grid grid-cols-2 gap-7 sm:grid-cols-2   lg:grid-cols-5 lg:gap-1 justify-center ml-[50px] mt-[36px]'>
  <Link href={"https://supertails.com/pages/toys"}>
  <div className='lg:w-[200px] lg:h-[220px] w-[400px] h-[420px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
    <p className='flex justify-center items-center lg:text-[24px] text-[34px] font-extrabold text-black my-[12px]'>Toys</p>
    <img src='/somthing/petneed.png' className='m-auto w-[100%] lg:w-[100%]'></img>
    </div>
    </Link>
  <div className='lg:w-[200px] lg:h-[220px] w-[400px] h-[420px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
    <p className='flex justify-center items-center text-[24px] font-extrabold text-black my-[12px]'>Cats</p>
    <img src='/somthing/cat.png' className='m-auto w-[81%] '></img>
  </div>
  <Link href={"https://petfoodsindia.com/"}>
  <div className='lg:w-[200px] lg:h-[220px] w-[400px] h-[420px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
    <p className='flex justify-center items-center lg:text-[24px] text-[34px] font-extrabold text-black my-[12px]'>Pet Foods</p>
    <img src='/somthing/petfood.png' className='lg:w-[100%] w-[100%] m-auto'></img>
  </div>
  </Link>
  <Link href={"https://himalayawellness.in/collections/animal-health"}>
  <div className='lg:w-[200px] lg:h-[220px] w-[400px] h-[420px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
    <p className='flex justify-center items-center lg:text-[24px] text-[34px] font-extrabold text-black my-[12px]'>Pet medicines</p>
    <img src='/somthing/petmedi.png' className='m-auto w-[100%] lg:w-[100%]'></img>
  </div>
  </Link>
  <Link href={"https://dharamsalaanimalrescue.org/"}>
  <div className='lg:w-[200px] lg:h-[220px] w-[400px] h-[420px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
    <p className='flex justify-center items-center lg:text-[24px] text-[34px] font-extrabold text-black my-[12px]'>Shelters</p>
    <img src='/somthing/homeless.png' className='m-auto w-[100%] lg:w-[100%] '></img>
  </div>
  </Link>
</div>
<div className='w-[1092px] h-[59px] relative left-[59px] flex justify-center items-center mt-[10rem] m-auto '>
  <div className='w-[510px] h-[59px] rounded-[10px] bg-[#FFCF5E]'>
    <h3 className='text-[38px] text-black font-bold flex text-center justify-center items-center' >Special Offers 🔥 </h3>
  </div>
</div>
<div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 lg:gap-[16rem] gap-[7rem] justify-center ml-[7rem] mt-[76px] ' >
<div className='lg:w-[200px] lg:h-[278px] w-[400px] h-[470px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
  <h1 className='text-black lg:text-[24px] text-[34px] font-extrabold text-center mt-[10px]'>Animal Foods</h1>
  <img src='/somthing/dogsoffer.png' className='m-auto p-[43px] w-[81%]'></img>
  <Link href={"https://www.petsy.online/collections/dog-food"}> <button className='w-[174px] h-[44px] bg-[#473DB9] text-[17px] flex justify-center items-center rounded-[50px] m-auto'>Shop Now</button></Link>
</div>
<div className=' lg:w-[200px] lg:h-[278px] w-[400px] h-[470px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
<h1 className='text-black lg:text-[24px] text-[34px] font-extrabold text-center mt-[10px]'>Healthcare center</h1>
<img src='/somthing/pethospital.png' className='m-auto  w-[100%] lg:w-[100%]'></img>
<Link href={"https://supertails.com/pages/consult-a-vet#:~:text=Supertails%20online%20vet%20consultation%20offers,comfort%20of%20your%20own%20home."}><button className='w-[174px] h-[44px] bg-[#473DB9] text-[17px] flex justify-center items-center rounded-[50px] m-auto'>Treatment</button></Link>
</div>
<div className='lg:w-[200px] lg:h-[278px] w-[400px] h-[470px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
<h1 className='text-black lg:text-[24px] text-[34px] font-extrabold text-center mt-[10px]'> Pets toys</h1>
<img src='/somthing/birdoffer.png ' className='m-auto p-[43px] w-[81%]' ></img>
<Link href={"https://supertails.com/pages/toys"}><button className='w-[174px] h-[44px] bg-[#473DB9] text-[17px] flex justify-center items-center rounded-[50px] m-auto'>Shop Now</button></Link>
</div>
<div className='lg:w-[200px] lg:h-[278px] w-[400px] h-[470px] bg-[#FFFFFF] rounded-[23px] hover:scale-[110%] transition-all transition-0.1s'>
<h1 className='text-black lg:text-[24px] text-[34px] font-extrabold text-center mt-[10px]'> Animals Helpline</h1>
<img src='/somthing/birdoffer.png' className='m-auto p-[43px] w-[81%]'></img>
<Link href={"https://www.animalrahat.com/report-an-animal-emergency/#:~:text=If%20you're%20calling%20after,she%20is%20properly%20tended%20to."}><button className='w-[174px] h-[44px] bg-[#473DB9] text-[17px] flex justify-center items-center rounded-[50px] m-auto'>Helpline</button></Link>
</div>

</div>
      </div>
      </div>
      <div className=' w-[1280px] h-[832px]  relative lg:bottom-[20%] bottom-[-28%]'>
        <div className=' w-[1280px] h-[632px]  '>
      <span className='text-[40px] font-bold text-black text-center flex align-middle justify-center mb-[33px]'> Read our Blog</span>
        <div className=' flex gap-[20px] justify-center align-middle '>
       
        <div className=' w-[520px] h-[547px] bg-slate-200 rounded-[30px]'>
          <div className='w-[520px] h-[249px]'>
            <img src='/somthing/dogwiki.png'></img>
            
          </div>
          <Link href={"/"} className='w-[479px] text-[30px] font-semibold text-[#302380] hover:underline'>Some tips on how to make your pets healthy and shiny</Link>
            <p className='w-[479px] text-[24px] font-serif text-black'> Feed your pets a diet made with natural real ingredients, such as beef, chicken , vegetables and protein enrich foods. Give them natural air which will help to live healthy and joyfull life..</p>


        </div>

        <div className=' w-[520px] h-[547px] bg-slate-200 rounded-[30px]'>
        <div className='w-[520px] h-[249px]'>
            <img src='/somthing/catwiki.png'></img>
            
          </div>
          <Link href={"/"} className='w-[479px] text-[30px] font-semibold text-[#302380] hover:underline'>Some tips on how to make your pets healthy and shiny</Link>
            <p className='w-[479px] text-[24px] font-serif text-black'> Feed your pets a diet made with natural real ingredients, such as beef, chicken , vegetables and protein enrich foods. Give them natural air which will help to live healthy and joyfull life..</p>
</div>

</div>

      </div>
      </div>
    
     
    </div>
        )}
        </div>

 
    

  )
}


export default Page



























