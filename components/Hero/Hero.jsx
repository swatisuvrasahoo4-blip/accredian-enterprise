import Image from "next/image";

export default function Hero({ onEnquire }) {
  return (
    <section id="home" className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-3xl bg-blue-50 px-6 py-10 lg:grid-cols-2 lg:px-12 lg:py-14">
        
        {/* Hero text */}
        <div>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Next-Gen
            <br />

            <span className="text-blue-600">
              Expertise
            </span>{" "}
            For Your
            <br />

            <span className="text-blue-600">
              Enterprise
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-700">
            Cultivate high-performance teams through expert learning.
          </p>

          {/* Key benefits */}
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-green-500 text-xs text-green-600">
                ✓
              </span>

              <span>Tailored Solutions</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-green-500 text-xs text-green-600">
                ✓
              </span>

              <span>Industry Insights</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-green-500 text-xs text-green-600">
                ✓
              </span>

              <span>Expert Guidance</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onEnquire}
            className="mt-9 inline-block rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Enquire Now
          </button>
        </div>

        {/* Hero image */}
        <div className="relative flex justify-center lg:justify-end">
          <Image
            src="/images/hero-enterprises.jpeg"
            alt="Enterprise professionals representing expert learning solutions"
            width={1050}
            height={820}
            priority
            className="h-auto w-full max-w-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
}