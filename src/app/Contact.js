import {FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";
import React from 'react'

function Contact() {
  return (
    <div className='w-[94%] mx-10 my-10'>
      <h2 className='text-4xl font-bold  text-center'>Contact Us</h2>
      <div className='mt-4 w-full h-64'>
        <div className=' h-40 bg-zinc-200 border-t-2 border-blue-50 '>
          <h2 className='font-bold text-2xl mt-6 ml-[16%]'>Get in touch</h2>
          <p className='w-[450px] mt-4 ml-[16%]'>Want get in touch? we'd love to hear from you here's how can you reach us</p>
        </div>
        <div className='flex justify-stretch ml-[16%] my-[-2%]'>
          <div className='w-[400px] border-4 bg-white border-blue-50 h-[250px] mx-4 '>
            <FaPhoneAlt className="w-[50px] h-[50px] mx-auto mt-4"/>
            <h2 className="text-center font-bold text-xl mt-3">Talk Sales</h2>
            <p className="mx-6 text-center my-4">
              Lorem ipsum dolor sit amet, 
              consectetur adipisicing elit.  
            </p>
            <h3 className="font-bold text-center">+25846304630</h3>
          </div>
          <div className='w-[400px] border-4 bg-white border-blue-50 h-[250px]'>
          <FaFacebookMessenger className="w-[50px]  h-[50px] mx-auto mt-4"/>
            <h2 className="text-center font-bold text-xl mt-3">Contact Customer Suport</h2>
            <p className="mx-6 text-center my-4">
              Lorem ipsum dolor sit amet, 
              consectetur adipisicing  amet elit adipisicing elit..  
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact