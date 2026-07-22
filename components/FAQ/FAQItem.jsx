"use client";

import { ChevronDown } from "lucide-react";

export default function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span
          className={`text-lg font-semibold md:text-xl ${
            isOpen ? "text-blue-600" : "text-gray-900"
          }`}
        >
          {question}
        </span>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gray-700 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <p className="pb-6 pr-10 text-base leading-7 text-gray-700">
          {answer}
        </p>
      )}
    </div>
  );
}