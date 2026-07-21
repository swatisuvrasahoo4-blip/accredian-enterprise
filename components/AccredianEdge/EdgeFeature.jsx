export default function EdgeFeature({
  title,
  description,
  Icon,
  position,
}) {
  const isTop = position === "top";

  return (
    <div className="relative flex min-w: 160px flex-col items-center">
      
      {isTop && (
        <div className="mb-5 min-h: 120px text-left">
          <h3 className="text-base font-bold text-gray-800">
            {title}
          </h3>

          <p className="mt-2 max-w: 180px text-sm leading-5 text-gray-600">
            {description}
          </p>

          <div className="mx-auto mt-3 h-10 w-px bg-blue-400" />
        </div>
      )}

      <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-200 bg-white shadow-lg">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
          <Icon className="h-8 w-8 text-white" strokeWidth={1.8} />
        </div>
      </div>

      {!isTop && (
        <div className="mt-3 min-h:120px text-left">
          <div className="mx-auto mb-3 h-10 w-px bg-blue-400" />

          <h3 className="text-base font-bold text-gray-800">
            {title}
          </h3>

          <p className="mt-2 max-w:180px text-sm leading-5 text-gray-600">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}