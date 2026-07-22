"use client";

import { useEffect, useState } from "react";

const domains = [
  "Product Management",
  "CEO",
  "Data Science",
  "Artificial Intelligence",
  "Human Resource",
  "Strategy & Leadership",
  "General Management",
  "Digital Transformation",
  "Business Management",
  "Finance",
  "Project Management",
  "Senior Management",
];

const deliveryModes = ["Online", "Offline"];

export default function EnquiryModal({ isOpen, onClose }) {
  const [countries, setCountries] = useState([]);
  const [countryOpen, setCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: "IN",
    dial_Code: "+91",
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/codes",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }

        const result = await response.json();
        setCountries(result.data);
      } catch (error) {
        console.error("Failed to load countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const [domainOpen, setDomainOpen] = useState(false);
  const [modeOpen, setModeOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: "",
    candidates: "",
    mode: "",
    location: "",
  });

  // Stop the page behind the modal from scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry Form:", formData);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-3 sm:p-5"
      onMouseDown={onClose}
    >
      {/* MODAL */}
      <div
        className="
          relative
          grid
          h-[92vh]
          w-full
          max-w-[1150px]
          overflow-hidden
          rounded-md
          bg-white
          shadow-2xl
          lg:grid-cols-[1fr_1fr]
        "
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* LEFT IMAGE */}

        <div className="relative hidden h-full overflow-hidden lg:block">
          <img
            src="/images/enquiry-team.webp"
            alt="Corporate professionals"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT FORM */}

        <div className="relative h-full overflow-y-auto bg-white">
          <div className="min-h-full px-7 pb-10 pt-8 sm:px-10 lg:px-12">
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={onClose}
              className="
                absolute
                right-6
                top-5
                z-20
                flex
                h-10
                w-10
                items-center
                justify-center
                text-3xl
                font-light
                text-gray-600
                transition
                hover:text-black
              "
              aria-label="Close enquiry form"
            >
              ×
            </button>

            {/* TITLE */}

            <h2 className="mb-10 pr-14 text-3xl font-semibold text-gray-900 sm:text-4xl">
              Enquire Now
            </h2>

            {/* FORM */}

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* NAME */}

              <div className="border-b border-gray-300">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  required
                  className="
                    w-full
                    bg-transparent
                    px-2
                    py-3
                    text-lg
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* EMAIL */}

              <div className="border-b border-gray-300">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  required
                  className="
                    w-full
                    bg-transparent
                    px-2
                    py-3
                    text-lg
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* PHONE */}

              <div className="flex items-center border-b border-gray-300 px-2">
                <div className="mr-4 flex shrink-0 items-center gap-1">
                  <div className="relative mr-4 shrink-0">
                    <button
                      type="button"
                      onClick={() => setCountryOpen(!countryOpen)}
                      className="flex items-center gap-1 bg-transparent text-lg text-gray-700 outline-none"
                    >
                      <span>{selectedCountry.code}</span>
                      <span>{selectedCountry.dial_code}</span>
                      <span className="text-xs">▼</span>
                    </button>

                    {countryOpen && (
                      <div className="absolute left-0 top-full z-50 mt-2 max-h-64 min-w-[220px] overflow-y-auto rounded-md border border-gray-200 bg-white shadow-lg">
                        {countries.map((country) => (
                          <button
                            key={country.code}
                            type="button"
                            onClick={() => {
                              setSelectedCountry({
                                code: country.code,
                                dial_code: country.dial_code,
                              });

                              setCountryOpen(false);
                            }}
                            className="block w-full px-4 py-3 text-left text-sm hover:bg-blue-50"
                          >
                            {country.name} ({country.code}) {country.dial_code}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  required
                  className="
                    w-full
                    bg-transparent
                    py-3
                    text-lg
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* COMPANY */}

              <div className="border-b border-gray-300">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter company name"
                  className="
                    w-full
                    bg-transparent
                    px-2
                    py-3
                    text-lg
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* DOMAIN DROPDOWN */}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setDomainOpen(!domainOpen);
                    setModeOpen(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-gray-300
                    px-2
                    py-3
                    text-left
                    text-lg
                  "
                >
                  <span
                    className={
                      formData.domain ? "text-gray-800" : "text-gray-400"
                    }
                  >
                    {formData.domain || "Select Domain"}
                  </span>

                  <span
                    className={`text-xl transition-transform ${
                      domainOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {domainOpen && (
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-full
                      z-40
                      max-h-[300px]
                      overflow-y-auto
                      border
                      border-gray-200
                      bg-white
                      shadow-xl
                    "
                  >
                    {domains.map((domain) => (
                      <button
                        key={domain}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            domain: domain,
                          }));

                          setDomainOpen(false);
                        }}
                        className="
                          block
                          w-full
                          px-5
                          py-4
                          text-left
                          text-lg
                          text-gray-800
                          transition
                          hover:bg-blue-50
                        "
                      >
                        {domain}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* NUMBER OF CANDIDATES */}

              <div className="border-b border-gray-300">
                <input
                  type="number"
                  name="candidates"
                  value={formData.candidates}
                  onChange={handleChange}
                  placeholder="Enter No. of candidates"
                  min="1"
                  className="
                    w-full
                    bg-transparent
                    px-2
                    py-3
                    text-lg
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* MODE DROPDOWN */}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    setModeOpen(!modeOpen);
                    setDomainOpen(false);
                  }}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    border-b
                    border-gray-300
                    px-2
                    py-3
                    text-left
                    text-lg
                  "
                >
                  <span
                    className={
                      formData.mode ? "text-gray-800" : "text-gray-400"
                    }
                  >
                    {formData.mode || "Select Mode of Delivery *"}
                  </span>

                  <span
                    className={`text-xl transition-transform ${
                      modeOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {modeOpen && (
                  <div
                    className="
                      absolute
                      left-0
                      right-0
                      top-full
                      z-40
                      overflow-hidden
                      border
                      border-gray-200
                      bg-white
                      shadow-xl
                    "
                  >
                    {deliveryModes.map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({
                            ...prev,
                            mode: mode,
                          }));

                          setModeOpen(false);
                        }}
                        className="
                          block
                          w-full
                          px-5
                          py-4
                          text-left
                          text-lg
                          text-gray-800
                          transition
                          hover:bg-blue-50
                        "
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* LOCATION */}

              <div className="border-b border-gray-300">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Eg: Gurgaon, Delhi, India"
                  className="
                    w-full
                    bg-transparent
                    px-2
                    py-3
                    text-lg
                    text-gray-800
                    outline-none
                    placeholder:text-gray-400
                  "
                />
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                className="
                  mt-4
                  w-full
                  rounded-md
                  bg-blue-600
                  px-6
                  py-4
                  text-xl
                  font-semibold
                  text-white
                  transition
                  hover:bg-blue-700
                "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
