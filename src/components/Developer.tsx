"use client"
import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip'

const developer =[
    {
        id: 1,
        name:"Harsh Dhande",
        designation: "Developer",
        image:""

    },
    {
        id: 2,
        name:"Om Wankhade",
        designation: "Developer",
        image:""

    },
    {
        id: 3,
        name:"Samadhan Chauhan",
        designation: "Developer",
        image:""

    },
    {
        id: 4,
        name:"Vaibhav Kadam",
        designation: "Developer",
        image:""

    },
    {
        id: 5,
        name:"Vijay Bhedodkar",
        designation: "Developer",
        image:""

    },
];

function Developer() {
  return (
    <div className='relative h-[30rem] overflow-hidden flex items-center justify-center'>
       
<div className="flex flex-row items-center mb-[20%] w-full justify-center">
    <AnimatedTooltip items={developer}/>
    </div>
    </div>
  )
}

export default Developer
