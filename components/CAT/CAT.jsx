export default function CAT() {
  return (
    <section
      id="cat"
      className="bg-[#F7FAFC] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
            The{" "}
            <span className="text-blue-600">
              CAT Framework
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            Our Proven Approach to{" "}
            <span className="text-blue-600">
              Learning Excellence
            </span>
          </p>
        </div>

        {/* CAT Framework Image */}
        <div className="mx-auto mt-12 flex max-w-6xl justify-center">
          <img
            src="/images/cat-framework.jpeg"
            alt="CAT Framework - Concept, Application and Tools"
            className="h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}