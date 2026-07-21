import Image from "next/image";

export default function ClientLogo({ name, logo }) {
  return (
    <div className="flex h-24 items-center justify-center px-5">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={150}
        height={70}
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}