"use client";

import { useState } from "react";
import FAQItem from "./FAQItem";

import {
  faqCategories,
  faqData,
} from "@/components/constants/faqData";

export default function FAQs({ onEnquire }) {
  const [activeCategory, setActiveCategory] =
    useState("About the Course");

  const [openQuestion, setOpenQuestion] =
    useState(null);

  const questions = faqData[activeCategory];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenQuestion(null);
  };

  return (
    <section
      id="faqs"
      className="bg-white px-5 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Frequently Asked{" "}
          <span className="text-blue-600">
            Questions
          </span>
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[330px_1fr]">

          {/* Categories */}
          <div className="space-y-5">
            {faqCategories.map((category) => {
              const isActive =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    handleCategoryChange(category)
                  }
                  className={`w-full rounded-md border px-6 py-7 text-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-blue-100 bg-[#f5f9fd] text-blue-600 shadow-md"
                      : "border-gray-300 bg-white text-gray-800"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Questions */}
          <div>
            {questions.map((item) => (
              <FAQItem
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openQuestion === item.id}
                onClick={() =>
                  setOpenQuestion(
                    openQuestion === item.id
                      ? null
                      : item.id
                  )
                }
              />
            ))}

            {/* Enquire Now */}
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={onEnquire}
                className="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-md transition hover:bg-blue-700"
              >
                Enquire Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}