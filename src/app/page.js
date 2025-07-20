
import React from "react";

import HeroSection from "@/components/HeroSection";
import { Services } from "@/components/Services";
import { TimelineSection } from "@/components/TimelineSection";
import { Projects } from "@/components/Projects";
import SignupFormDemo from "@/components/signup-form-demo";
import { MacbookScroll } from "@/components/ui/macbook-scroll";


export default function Home() {



  return (
    <>
     <HeroSection />
     <Services />
     <Projects />
     <TimelineSection />
     <MacbookScroll 
       src="/screenshot.png"
       title="My Portfolio Project"
       showGradient={true}
       
     />
     <div className="flex lg:mt-[60rem]">
       <SignupFormDemo />
      
 
     </div>


     
     
    </>



  );
}
