"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    logo: "/images/Adp.png",
    company: "ADP",
    text: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
  },
  {
    logo: "/images/Bayer.png",
    company: "Bayer",
    text: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    logo: "/images/Reliance.png",
    company: "Reliance",
    text: "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
  },
];

export default function Testimonials({ onEnquire }) {
  const [slide, setSlide] = useState(0);

  // First dot = ADP + Bayer
  // Second dot = Bayer + Reliance
  const slides = [
    [testimonials[0], testimonials[1]],
    [testimonials[1], testimonials[2]],
  ];

  return (
    <section
      id="testimonials"
      className="bg-white py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* HEADING */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            Testimonials from{" "}
            <span className="text-blue-600">
              Our Partners
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-700 md:text-xl">
            What{" "}
            <span className="text-blue-600">
              Our Clients
            </span>{" "}
            Are Saying
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

          {slides[slide].map((item) => (
            <div
              key={item.company}
              className="
                flex
                min-h-[300px]
                flex-col
                justify-center
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-8
                md:p-12
              "
            >

              {/* Company Logo */}
              <div className="relative mb-8 h-16 w-28">
                <Image
                  src={item.logo}
                  alt={`${item.company} logo`}
                  fill
                  className="object-contain object-left"
                  sizes="112px"
                />
              </div>

              {/* Testimonial Text */}
              <p className="text-lg leading-relaxed text-gray-800 md:text-xl">
                &quot;{item.text}&quot;
              </p>

            </div>
          ))}

        </div>

        {/* SLIDER DOTS  */}
        <div className="mt-7 flex justify-center gap-3">

          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSlide(index)}
              aria-label={`Show testimonial slide ${index + 1}`}
              className={`
                h-3
                w-3
                rounded-full
                transition-all
                duration-300
                ${
                  slide === index
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }
              `}
            />
          ))}

        </div>

        {/* =========================
            BLUE CONTACT BANNER
        ========================== */}
        <div
          className="
            relative
            mt-20
            overflow-hidden
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-blue-800
            px-7
            py-10
            md:px-14
            md:py-14
          "
        >

          {/* Decorative Background Circles */}
          <div
            className="
              pointer-events-none
              absolute
              -bottom-40
              left-[30%]
              h-[400px]
              w-[400px]
              rounded-full
              border
              border-white/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-52
              left-[45%]
              h-[500px]
              w-[500px]
              rounded-full
              border
              border-white/10
            "
          />

          {/* Banner Content */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-between
              gap-8
              md:flex-row
            "
          >

            {/* Left Side */}
            <div
              className="
                flex
                flex-col
                items-center
                gap-6
                text-center
                sm:flex-row
                sm:text-left
              "
            >

              {/* Headset Icon */}
              <div
                className="
                  flex
                  h-20
                  w-20
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-white
                  shadow-sm
                "
              >
                <span
                  className="text-4xl"
                  role="img"
                  aria-label="Customer support"
                >
                  🎧
                </span>
              </div>

              {/* Banner Text */}
              <div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    leading-tight
                    text-white
                    md:text-3xl
                  "
                >
                  Want to Learn More About Our Training
                  <br className="hidden lg:block" />
                  {" "}Solutions?
                </h3>

                <p
                  className="
                    mt-3
                    text-base
                    text-blue-100
                    md:text-lg
                  "
                >
                  Get Expert Guidance for Your Team&apos;s Success!
                </p>

              </div>

            </div>

            {/* Contact Us Button */}
            <button
              type="button"
              onClick={onEnquire}
              className="
                flex
                min-w-[220px]
                shrink-0
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-white
                px-9
                py-4
                text-lg
                font-semibold
                text-blue-700
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-lg
              "
            >
              Contact Us

              <span className="text-2xl leading-none">
                ›
              </span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}