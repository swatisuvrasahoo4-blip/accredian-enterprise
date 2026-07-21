import ClientLogo from "./ClientLogo";
import { clientsData } from "@/components/constants/clientsData";

export default function Clients() {
  return (
    <section
      id="clients"
      className="bg-white px-4 py-16 sm:px-6 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* section heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700 sm:text-4xl lg:text-5xl">
            Our <span className="text-blue-600">Proven Partnerships</span>
          </h2>

          <p className="mt-5 text-lg text-gray-600 sm:text-xl">
            Successful Collaborations With the{" "}
            <span className="text-blue-600">Industry&apos;s Best</span>
          </p>
        </div>

        {/* client logos */}
        <div className="mt-14 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {clientsData.map((client) => (
            <ClientLogo
              key={client.id}
              name={client.name}
              logo={client.logo}
            />
          ))}
        </div>

      </div>
    </section>
  );
}