"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { AnimatedTooltip } from './ui/animated-tooltip';
import Image from 'next/image';
const founderTestimonials =[
{ 
     quote: 
     'Saving one animal wont change the world, but it will change the world for that one animal.',
            name: "Unknown",
            title: "Animal Lover"
          },
          {
            
            quote: "The greatness of a nation can be judged by the way its animals are treated.",
            name: "Mahatma Gandhi",
            title: "Leader and Activist"
          },
          {
           
            quote: "Until one has loved an animal, a part of one's soul remains unawakened.",
            name: "Anatole France",
            title: "Author"
          },
          {
            
            quote: "The best therapist has fur and four legs.",
            name: "Unknown",
            title: "Pet Owner"
          },
          {
            
            quote: "Animals are such agreeable friends—they ask no questions; they pass no criticisms.",
            name: "George Eliot",
            title: "Author",
          }
        ]
        const developer =[
          {
              id: 1,
              name:"Harsh Dhande",
              designation: "Developer",
              image:"/somthing/harsh.jpg"
      
          },
          {
              id: 2,
              name:"Om Wankhade",
              designation: "Developer",
              image:"/somthing/om patil .jpg"
      
          },
          {
              id: 3,
              name:"Samadhan Chauhan",
              designation: "Developer",
              image:"/somthing/Samya.jpg"
      
          },
          {
              id: 4,
              name:"Vaibhav Kadam",
              designation: "Developer",
              image:"/somthing/vaibhav.jpg"
      
          },
          {
              id: 5,
              name:"Vijay Bhedodkar",
              designation: "Developer",
              image:"/somthing/vijay.jpg"
      
          },
      ];
function Users() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <img src='/somthing/bgx2.jpg' className='absolute w-full'></img>
       <h2 className="text-3xl font-bold text-center mb-8 z-10">Quote from website users</h2>
       <div className='flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl'>
            <InfiniteMovingCards items={founderTestimonials}
            direction='right'
            speed='slow'/>
        </div>
       </div>
       <div className='relative h-[30rem] overflow-hidden flex items-center justify-center w-[35rem]'>

<div className="flex flex-row items-center mb-[20%] w-full justify-center">
  <div className=''>
    <h1 className='flex relative top-[-4rem] left-[10rem] font-serif text-4xl text-green-600 uppercase tracking-wide '>Team</h1>
  </div>
    <AnimatedTooltip items={developer} />
    </div>
    </div>
    </div>
  )
}

export default Users
