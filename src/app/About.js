import Link from 'next/link'
import AboutPc from './components/AboutPc';
import {FaGithub ,FaInstagram,FaLinkedin, FaTwitter} from "react-icons/fa";

function About() {
  return (
    <section className='w-[80%] flex justify-between mt-16'  >
      <div className='w-[25%] ml-[10%]'>
        <AboutPc/>
      </div>  
     <div className='w-[50%] mt-16 ml-[10%]'>
        <h1 className='font-bold text-4xl'>About Me</h1>
        <h2 className='font-bold text-2xl mt-2'>
          Hello, My name is  
          <span className='text-cyan-700'>
            &nbsp; Armando Utui
          </span>
        </h2>
        <p className=' font-semibold'>
          Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. 
          Error necessitatibus quae similique laudantium molestiae, 
          iste enim in hic nobis dolore id quo corrupti fugiat vel a ab iure tempore accusantium!
        </p>
        <div className='mt-4'>
          <button className='rounded-xl w-24 text-white p-1 bg-cyan-700'>
            Hire me
          </button>
        </div>
     </div>
    
    </section>
  )
}

export default About