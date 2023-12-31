"use client"
import About from "./About"
import Contact from "./Contact"
import Project from "./Project"
import Service from "./Service"
import Hero from "./components/Hero"

import Image from "next/image"
export default function Home() {
  return (
    <div>
      <div >
        <Hero/>
        <About/>
        <Service/>
        <Project/>
        <Contact/>
      </div>
      
    </div>
  )
}
