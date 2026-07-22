"use client";

import Logo from "../Logo/Logo";

export default function Footer({ onEnquire }) {
  return (
    <footer className="bg-white px-6 md:px-12 lg:px-16 pt-14 pb-6">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Logo + Social Media */}
        <div>
          <Logo />

          <div className="flex items-center gap-6 mt-7 text-2xl text-gray-800">

            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-blue-600 transition"
            >
              f
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="font-bold hover:text-blue-600 transition"
            >
              in
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-blue-600 transition"
            >
              𝕏
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-blue-600 transition"
            >
              ◎
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-blue-600 transition"
            >
              ▶
            </a>

          </div>
        </div>

        {/* Enquire Button */}
        <div className="md:text-right">
          <button
            type="button"
            onClick={onEnquire}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-3
              rounded-lg
              font-semibold
              transition
              shadow-sm
            "
          >
            Enquire Now
          </button>

          <p className="mt-2 text-sm text-gray-700">
            Speak with our Advisor
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 my-8"></div>

      {/* MIDDLE SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Accredian Links */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Accredian
          </h3>

          <div className="flex flex-col gap-3 text-gray-700">
            <a href="#" className="hover:text-blue-600">
              About
            </a>

            <a href="#" className="hover:text-blue-600">
              Blog
            </a>

            <a href="#" className="hover:text-blue-600">
              Why Accredian
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Contact Us
          </h3>

          <p className="text-gray-700 mb-3">
            Email us:{" "}
            <a
              href="mailto:enterprise@accredian.com"
              className="text-blue-600"
            >
              enterprise@accredian.com
            </a>
          </p>

          <p className="text-gray-700 leading-7">
            Office Address: 4th Floor, 250, Phase IV, Udyog Vihar,
            Sector 18, Gurugram, Haryana
          </p>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-300 mt-8 mb-5"></div>

      {/* COPYRIGHT */}
      <p className="text-center text-gray-600 text-sm md:text-base">
        © 2026 Accredian A Brand of FullStack Education Pvt Ltd.
        All Rights Reserved
      </p>

    </footer>
  );
}