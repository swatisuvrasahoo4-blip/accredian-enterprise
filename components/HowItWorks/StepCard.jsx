export default function StepCard({
  number,
  title,
  description,
  Icon,
}) {
  return (
    <div className="relative flex min-h-[310px] flex-col items-center justify-center rounded-xl border border-blue-100 bg-blue-50/40 px-7 py-10 text-center shadow-md">

      {/* Side blue lines */}
      <div className="absolute -left-[5px] top-[20%] h-[62%] w-[7px] rounded-full bg-blue-600" />

      <div className="absolute -right-[5px] top-[20%] h-[62%] w-[7px] rounded-full bg-blue-600" />

      {/* Step number */}
      <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-500 text-lg font-bold text-gray-800">
        {number}
      </div>

      {/* Icon */}
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 shadow-lg">
        <Icon
          className="h-10 w-10 text-white"
          strokeWidth={1.8}
        />
      </div>

      <h3 className="mt-7 text-xl font-bold text-gray-900 lg:text-2xl">
        {title}
      </h3>

      <p className="mt-4 max-w-[320px] text-base leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}