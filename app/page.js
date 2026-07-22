import AccredianEdge from "@/components/AccredianEdge/AccredianEdge";
import CAT from "@/components/CAT/CAT";
import Clients from "@/components/Clients/Clients";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Stats from "@/components/Stats/Stats";

export default function Home(){
  return(
    <main>
      <Navbar/>
      <main>
        <Hero />
        <Stats />
        <Clients />
        <AccredianEdge />
        <CAT />
      </main>
    </main>
  )
}