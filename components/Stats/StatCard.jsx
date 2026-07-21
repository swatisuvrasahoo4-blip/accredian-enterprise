export default function StatCard({ value, label }) {
  return (
    <div className="flex flex-col items-center px-8 py-6 text-center">
      <div className="rounded-full bg-blue-50 px-7 py-3">
        <h3 className="text-3xl font-bold text-blue-600">
          {value}
        </h3>
      </div>

      <p className="mt-6 max-w-sm text-base leading-7 text-gray-700">
        {label}
      </p>
    </div>
  );
}