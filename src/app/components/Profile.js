import React from 'react'
import Image from 'next/image'

function Profile
() {
  return (
    <div className='ml-24'>
        <div className='w-[400px] h-[380px] border rounded-full bg-blue-900 '> 
            <Image
                src="/logo.jpg"
                alt='logo'
               width={380}
               height={290}
               className='rounded-full mx-2 '
            />
        </div>
    </div>
  )
}

export default Profile
