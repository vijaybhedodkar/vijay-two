import React from 'react'

function Loader() {
  return (
    <div className='loader-container'>
        <div className='flex justify-center items-center mt-[10%] mb-[40%]'>
          <img src='/somthing/loader.gif' className='w-[full] h-[full] bg-none mix-blend-multiply'></img>
        </div>
      
    </div>
  )
}

export default Loader
