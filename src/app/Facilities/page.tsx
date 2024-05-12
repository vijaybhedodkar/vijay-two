"use client"
import React from 'react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from 'next/link';
import animalData from "@/data/animal_care.json";
import Footer from '@/components/Footer';

import Loader from '@/components/Loader';
import { useEffect, useState } from 'react';



function page() {

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
    <div className='min-h-screen bg-[#F78733] py-12 pt-[5rem]'>
        <h1 className=' text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white'>All Services({animalData.services.length})</h1>
        <div className='flex flex-wrap justify-center gap-[29px]  bg-[#EBE3CC]'>
            {animalData.services.map((Animal)=>(
               <CardContainer className='inter-var m-4'>
                <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border '>
                    <CardItem  translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white">
                {Animal.name}

              </CardItem>
              <CardItem
                 as="p"
                 translateZ="60"
                 className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">

                     {Animal.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
              <Image
              src={Animal.image_url}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt={Animal.name}
              />
            </CardItem>
            <div className='flex justify-between items-center mt-20'>
            <CardItem
                translateZ={20}
                as={Link}
                href="https://twitter.com/mannupaaji"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>

                </CardBody>
               </CardContainer> 
            ))}
        </div>
  
    </div>
      )}
      </div>

  )

}

export default page