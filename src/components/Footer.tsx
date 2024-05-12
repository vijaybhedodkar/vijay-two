import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    
   <footer className='bg-black text-gray-400 py-12 w-[100%] overflow-hidden'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'> 
  <div>
    <h2 className='text-white text-lg font-semibold mb-4 uppercase'>About us</h2>
    <p className='mb-4 '> We are here to introduce our idea. Which will be Very Helpful for Animals and it will bring Change in There life and help them to get a good life. We have planned many thing but because of Lack of resourses and some problem we keep the plan aside</p>
  </div>
  <div>
    <h2 className='text-white text-lg font-semibold mb-4 uppercase'>Quick links</h2>
    <ul>
      <li className='hover:underline'><Link href='/' className='  className="hover:text-white transition-colors duration-300"'>Home</Link></li>
      <li className='hover:underline'><Link href='/About' className='  className="hover:text-white transition-colors duration-300"'>About</Link></li>
      <li className='hover:underline'><Link href='/contact' className='  className="hover:text-white transition-colors duration-300"'>Contact US</Link></li>
      <li className='hover:underline'><Link href='/Facilities' className='  className="hover:text-white transition-colors duration-300"'>Services</Link></li>
     
    </ul>
  </div>
  <div>
    <h2 className='text-white text-lg fonr-semibold mb-4 capitalize'>Follow us</h2>
<ul className='gap-13 sm:-flex flex-column gap-4 lg:flex flex-row '>
  <li className='hover:underline'><a href='#'>Facebook</a></li>
  <li className='hover:underline'><a href='#'>Twitter</a></li>
  <li className='hover:underline'><a href='#'>Instagram</a></li>
</ul>
  </div>
  <div>
    <h2 className='text-white text-lg font-semibold mb-4 uppercase'>Contact us</h2>
    <p>Nagpur,
      445001
      bhedodkarvijay@gmail.com 
      phone:7821011387
    </p>
  </div>
      
      
   
      </div>
      <p className='font-center flex justify-center p-23'> © 2024 Animal Care Taker. All rights reserved</p>
   </footer>
  )
}

export default Footer
