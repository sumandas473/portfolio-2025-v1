
import React from "react";

import HeroSection from "@/components/HeroSection";
import { Services } from "@/components/Services";
import { TimelineSection } from "@/components/TimelineSection";
import { Projects } from "@/components/Projects";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { Contact } from "@/components/Contact";


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
     <Contact  />
     
     


     
     
    </>



  );
}
