import Link from 'next/link'
import Profile from './Profile'
import {FaGithub ,FaInstagram,FaLinkedin, FaTwitter} from "react-icons/fa";

function Hero() {
  return (
    <section className='w-[80%] flex justify-around'  >
      
     <div className='w-[60%] mt-16 mx-16'>
      <h2 className='font-bold text-4xl'>
          Hi i'm Armando Utui  
          <span className='text-cyan-700'>
            &nbsp; Full Stack Web developer
          </span>
        </h2>
        <p className='mt-5 font-semibold'>
          Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. 
          Error necessitatibus quae similique laudantium molestiae, 
          iste enim in hic nobis dolore id quo corrupti fugiat vel a ab iure tempore accusantium!
        </p>
        <div className='mt-4'>
          <ul className='flex'>
            <li className='mr-1'>
              <Link href="/"><FaGithub className='w-7 h-7 rounded-full'/></Link>
            </li>
            <li className='mx-1'>
              <Link href="/"><FaInstagram className='w-7 h-7 rounded-full'/></Link>
            </li>
            <li className='mx-1'>
              <Link href="/"><FaLinkedin className='w-7 h-7 rounded-full'/></Link>
            </li>
            <li>
              <Link href="/"><FaTwitter className='text-slate-500 w-7 h-7 rounded-full'/></Link>
            </li>
          </ul>
        </div>
        <div className='mt-4'>
          <button className='rounded-xl w-24 text-white p-1 bg-cyan-700'>
            Hire me
          </button>
        </div>
     </div>
     <div className='w-[25%] ml-[10%]'>
      <Profile />
     </div>
    </section>
  )
}

export default Hero