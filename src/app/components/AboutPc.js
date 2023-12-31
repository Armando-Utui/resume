import React from 'react'
import Image from 'next/image'

function AboutPc
() {
  return (
    <div className=''>
        <div className='w-[400px] h-[380px] border rounded-full bg-blue-900 mt-6 '> 
            <Image
                src="/img/logo2.jpg"
                alt='logo'
               width={380}
               height={290}
               className='rounded-full mx-2 '
            />
        </div>
    </div>
  )
}

export default AboutPc
