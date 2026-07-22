"use client"
import { useState } from "react";
import AccredianEdge from "@/components/AccredianEdge/AccredianEdge";
import CAT from "@/components/CAT/CAT";
import Clients from "@/components/Clients/Clients";
import FAQs from "@/components/FAQ/FAQ";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import Stats from "@/components/Stats/Stats";
import EnquiryModal from "@/components/Enquiry/EnquiryModal";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function Home(){
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return(
    <>
      <Navbar/>
      <main>
        <Hero 
          onEnquire={()=> setIsEnquiryOpen(true)}
        />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CAT />
        <HowItWorks />
        <FAQs 
          onEnquire={()=> setIsEnquiryOpen(true)}
        />
        <Testimonials
          onEnquire={()=> setIsEnquiryOpen(true)}
        />
      </main>
      <Footer
        onEnquire={()=> setIsEnquiryOpen(true)}
      />
      <EnquiryModal
        isOpen ={isEnquiryOpen}
        onClose={()=> setIsEnquiryOpen(false)}
      />
    </>
  )
}