import StepCard from "./StepCard";
import { howItWorksSteps } from "@/components/constants/howItWorksData";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-white px-5 py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            How We{" "}
            <span className="text-blue-600">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>

          <p className="mt-5 text-lg text-gray-600 md:text-xl">
            A Structured Three-Step Approach to{" "}
            <span className="text-blue-600">
              Skill Development
            </span>
          </p>
        </div>

        {/* Reusable step cards */}
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {howItWorksSteps.map((step) => (
            <StepCard
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
              Icon={step.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
}