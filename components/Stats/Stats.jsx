import StatCard from "./StatCard";
import { statsData } from "@/components/constants/statsData";

export default function Stats() {
  return (
    <section id="stats" className="bg-white px-4 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="text-blue-600">
              Track Record
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 sm:text-xl">
            The Numbers Behind{" "}
            <span className="text-blue-600">
              Our Success
            </span>
          </p>
        </div>

        {/* Reusable statistics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={
                index !== statsData.length - 1
                  ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                  : ""
              }
            >
              <StatCard
                value={stat.value}
                label={stat.label}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}