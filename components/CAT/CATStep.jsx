export default function CATStep({
  title,
  description,
  Icon,
}) {
  return (
    <div className="flex flex-col items-center px-8 text-center">
      <Icon
        className="h-12 w-12 text-blue-600"
        strokeWidth={1.7}
      />

      <h3 className="mt-5 text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 max-w-[220px] text-base leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
}