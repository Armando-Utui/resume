import React from 'react'

function Footer() {
  var year;
  const date= Date(year);
  return (
    <div className='w-full h-16 mt-30 '>
      
        <p className ='mt-[10%] border-b-2 text-center'>Desgn e Developed by <span>Armando Utui</span> &copy; {date}</p>

    </div>
  )
}

export default Footer