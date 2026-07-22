import Image from "next/image";

export default function CourseCard({
  title,
  description,
  image,
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

      {/* course image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
        />
      </div>

      {/* course details */}
      <div className="flex min-h: 230px flex-col items-center px-6 py-7 text-center">
        <h3 className="text-2xl font-bold leading-tight text-blue-600">
          {title}
        </h3>

        <p className="mt-5 max-w-xs text-base leading-7 text-gray-600">
          {description}
        </p>
      </div>

    </div>
  );
}