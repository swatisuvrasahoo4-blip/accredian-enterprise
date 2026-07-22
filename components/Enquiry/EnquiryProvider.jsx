"use client";

import { useState } from "react";
import EnquiryModal from "./EnquiryModal";
import Hero from "@/components/Hero/Hero";
import FAQs from "@/components/FAQs/FAQs";

export default function EnquiryProvider({
  beforeHero,
  betweenSections,
  afterFaqs,
}) {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => {
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <>
      {beforeHero}

      <Hero onEnquire={openEnquiry} />

      {betweenSections}

      <FAQs onEnquire={openEnquiry} />

      {afterFaqs}

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={closeEnquiry}
      />
    </>
  );
}