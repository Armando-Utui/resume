"use client";
import Link from "next/link"

function Navbar() {
  return (
    <div className="w-full h-20 my-8">
        <nav className="flex justify-between mx-10">
            <Link href="/">Amando Utui</Link>
            <ul className="flex">
                <li className="mx-2">
                    <Link href="/">Home</Link>
                </li>
                <li className="mx-2">
                    <Link href="/About">About</Link>
                </li>
                <li className="mx-2"> 
                    <Link href="/Service">Service</Link>
                </li>
                <li className="mx-2">
                    <Link href="/Project">Project</Link>
                </li>
                <li >
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
           
        </nav>
    </div>
  )
}

export default Navbar