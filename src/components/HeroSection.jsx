import React from 'react'
import image1 from "../../public/image1.jpg";
import logo from "../../public/images.png"
import { Cover } from "@/components/ui/cover";
// import { Skills } from "@/components/Skills";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import Link from "next/link";
import Image from "next/image";
// import styles from "./page.module.css";


function HeroSection() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px] select-none">

      <div className="max-w-[600px] w-[90%] mx-auto ">
        <Link href="/" className="font-bold text-amber-50"> <Image src={logo} width={120} height={80} className="max-h-[80px] h-full object-contain object-center" alt="logo" /></Link>
        {/* left side content  */}
        <div className="flex flex-col justify-center h-[80%]">
          <span className="text-blue-400 text-sm md:text-lg ">Its me</span>
          <h2 className="bg-clip-text text-transparent  text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-8 relative z-20 font-bold lg:font-semibold tracking-tight">
            Suman Das, <br /> Web & App <Cover> Developer</Cover>
          </h2>

          <Link href="#" className=" z-30 text-white  border-[#525252] border-b hover:p-[10px] hover:bg-[#5070ff2f] mr-auto text-start ease-in-out duration-200 py-2 hover:px-5 hover:rounded-full cursor-pointer">
            Contact Me &rarr;
          </Link>
        </div>

      </div>

      <div className="w-full h-full flex  bg-black mt-12 lg:mt-0">
        <Image src={image1} width={800} height={1200} className="w-full max-h-[100vh] object-contain " alt="model" />
      </div>


      {/* right side content */}

      <div className="w-[90%] mx-auto  flex flex-col items-center z-3 pt-8">
        <Link href="#" className="max-w-32 w-full h-[35px] flex justify-center items-center  border-1 border-[#525252] mx-auto pb-1 rounded-4xl">Hire me</Link>


        <h2 className=" my-4 md:my-1  bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-5xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          About me
        </h2>
        <p className="max-w-xl mx-auto text-md lg:text-sm text-neutral-700 dark:text-neutral-400 text-center lg:text-start ">
          I specialize in modern frontend development with a strong focus on creating clean, responsive, and engaging user interfaces. My core expertise lies in React.js, where I build scalable component-based applications using tools like Vite for fast development and optimized builds.
          I&aposm proficient in JavaScript (ES6+), with solid knowledge of HTML5 and CSS3, and I often use Tailwind CSS to rapidly create modern, utility-first UI designs. For animations and motion effects, I rely on Framer Motion to bring interfaces to life with smooth transitions.
          I handle client-side routing using React Router DOM and manage application state with React Context API. I follow mobile-first and accessible design principles to ensure performance and usability across all devices.
          In terms of tooling, I&aposm experienced with Git and GitHub for version control, and I use VS Code as my primary development environment. I&aposm also familiar with npm and pnpm for managing project dependencies.

        </p>

        {/* <a href="" className="  mt-4 border-1 border-[#525252] mx-auto px-4 py-2 rounded-full">Download Resume</a> */}
        <div className="relative group w-fit mx-auto mt-12 mb-4">
          <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-50 group-hover:opacity-100 transition duration-300 blur-sm"></div>
          <a download
            target="_blank"
            rel="noopener noreferrer"

            href="/resume.pdf"
            className="relative z-10 px-6 py-2 rounded-full  text-white bg-black transition duration-300 group-hover:border-transparent"
          >
            Download Resume
          </a>
        </div>


        {/* <Skills /> */}

      </div>

      <ShootingStars className="-z-1" />
      <StarsBackground className="-z-2" />

    </div>
  )
}

export default HeroSection