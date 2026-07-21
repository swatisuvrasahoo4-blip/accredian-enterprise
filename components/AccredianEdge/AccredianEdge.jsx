import EdgeFeature from "./EdgeFeature";
import DomainCard from "./DomainCard";
import CourseCard from "./CourseCard"
import AudienceCard from "./AudienceCard";
import {
  edgeFeatures,
  domainData,
  courseSegments,
  audienceData,
} from "@/components/constants/edgeData";

export default function AccredianEdge() {
  return (
    <section
      id="edge"
      className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
            The <span className="text-blue-600">Accredian Edge</span>
          </h2>

          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            Key Aspects of Our{" "}
            <span className="text-blue-600">
              Strategic Training
            </span>
          </p>
        </div>

        {/* edge journey */}
        <div className="mt-16 overflow-x-auto pb-6">
          <div className="flex min-w: 1200px items-center justify-between gap-2">

            {edgeFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className="flex items-center"
              >
                <EdgeFeature
                  title={feature.title}
                  description={feature.description}
                  Icon={feature.icon}
                  position={feature.position}
                />

                {index !== edgeFeatures.length - 1 && (
                  <div className="mx-2 flex items-center">
                    <span className="text-4xl font-light text-gray-300">
                      ›
                    </span>
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
        {/* Domain Expertise */}
        <div className="mt-28">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
                    Our{" "}
                    <span className="text-blue-600">
                        Domain Expertise
                    </span>
                </h2>

                <p className="mt-4 text-lg text-gray-600 sm:text-xl">
                    <span className="text-blue-600">
                        Specialized Programs
                    </span>{" "}
                   Designed to Fuel Innovation
                </p>
           </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {domainData.slice(0, 6).map((domain) => (
                <DomainCard
                key={domain.id}
                title={domain.title}
                Icon={domain.icon}
                />
                ))}
             </div>

        {/* last card centered like reference */}
        <div className="mx-auto mt-6 max-w-md">
            <DomainCard
            title={domainData[6].title}
            Icon={domainData[6].icon}
            />
        </div>
        </div>
        {/* Tailored Course Segmentation */}
        <div className="mt-28">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
                    Tailored{" "}
                    <span className="text-blue-600">
                        Course Segmentation
                    </span>
                </h2>

                <p className="mt-5 text-lg text-gray-600 sm:text-xl">
                    Explore{" "}
                    <span className="text-blue-600">
                        Custom-fit Courses
                    </span>{" "}
                    Designed to Address Every Professional Focus
                </p>
            </div>

        {/* reusable course cards */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {courseSegments.map((course) => (
                <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                image={course.image}
                />
            ))}
        </div>

        </div>
        {/* Strategic Skill Enhancement */}
        <div className="mt-28 overflow-hidden rounded-2xl bg-blue-600 px-6 py-10 sm:px-10 lg:px-14">
            <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.6fr]">

            {/* left side */}
            <div>
                <p className="text-lg font-semibold text-blue-100">
                    Who Should Join?
                </p>

                <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Strategic Skill
                    <br />
                    Enhancement
                </h2>

                <div className="mt-8">
                    <img
                     src="/images/edge/strategic-skill.png"
                     alt="Professionals developing strategic skills"
                     className="max-h: 360px w-auto object-contain"
                    />
                </div>
            </div>

            {/* audience groups */}
            <div className="grid gap-10 sm:grid-cols-2">
                {audienceData.map((item) => (
                    <AudienceCard
                     key={item.id}
                     title={item.title}
                     description={item.description}
                     Icon={item.icon}
                    />
                ))}
            </div>

            </div>
        </div>
      </div>
    </section>
  );
}