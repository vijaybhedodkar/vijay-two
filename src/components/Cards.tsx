"use client"
import React from 'react'
import animalData from "../data/animal_care.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'
interface Animal{
    id:number,
    name:string,
    description:string,
    slug:string,
    isFeatured:boolean,
}

function Cards() {
    const cards = animalData.services.filter((animal:Animal)=>animal.isFeatured)
  return (
    <div className="py-12 bg-[#0000003f]">
        
    <div className="mt-10">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
         {cards.map((animal:Animal)=>(
             <div key={animal.id} className="flex justify-center">
                  <BackgroundGradient className="flex flex-col rounded-[22px] bg dark:bg-zinc-900 overflow-hidden h-full max-w-sm text-white">
                  <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                     <p className="text-lg sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">{animal.name}</p>
                     <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow ">{animal.description}</p>
                     <Link href ={`/Facilities/${animal.slug}`}>
                         More
                     </Link>
                     </div>
                  </BackgroundGradient>
                  </div>
         ))}
     </div>
    </div>


 <div className="mt-20 text-center">
     <Link href={"/Facilities"} className="px-4 py-2 rounded-[50px] border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">view all services</Link>

 </div>
</div>
  )
}

export default Cards
