import React from 'react'
import {FaTv, FaCode,FaDatabase } from "react-icons/fa";
function Service() {
  return (
    <div>
      
      <h2 className='font-bold text-4xl text-center mt-16'>Our Service</h2>
      <div className='flex justify-around mt-12'>
        <div className='w-[400px] h-[350px] rounded-lg bg-slate-400 mx-8'>
          <FaTv className='w-[75px] h-[75px] mx-auto my-4'/>
          <h2 className='font-semibold text-2xl text-center'>Front end</h2>
          <p className='mt-4 mx-4'>
          Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. 
          Error necessitatibus quae similique laudantium molestiae, 
          iste enim in hic nobis dolore id quo corrupti fugiat vel a ab iure tempore accusantium!
          </p>
          <button className='bg-slate-950 text-white p-1 rounded-xl mt-6 w-36 ml-[30%]'>Ask Service</button>
        </div>
        <div className='w-[400px] h-[350px] bg-slate-400 mx-8 rounded-lg'>
          <FaCode className='w-[75px] h-[75px] mx-auto my-4'/>
          <h2 className='font-semibold text-2xl text-center'>Back end</h2>
          <p className='mx-4 mt-4'>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Error necessitatibus quae similique laudantium molestiae, 
            iste enim in hic nobis dolore id quo corrupti fugiat vel a ab iure tempore accusantium!
          </p>
            <button className='bg-slate-950 text-white p-1 rounded-xl mt-6 w-36 ml-[30%]'>Ask Service</button>
        </div>
        <div className='w-[400px] h-[350px] bg-slate-400 mx-8 rounded-lg'>
          <FaDatabase className='w-[75px] h-[75px] mx-auto my-4'/>
            <h2   className='font-semibold text-2xl text-center'>Database manegerment</h2>
            <p className='mt-4 mx-4'>
              Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit. 
              Error necessitatibus quae similique laudantium molestiae, 
              iste enim in hic nobis dolore id quo corrupti fugiat vel a ab iure tempore accusantium!
            </p>
            <button className='bg-slate-950 text-white p-1 rounded-xl mt-6 w-36 ml-[30%]'>Ask Service</button>
        </div>
      </div>
      
    </div>
  )
}

export default Service