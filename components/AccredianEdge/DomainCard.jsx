export default function DomainCard({ title, Icon }) {
  return (
    <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <Icon
        className="h-14 w-14 text-blue-600"
        strokeWidth={1.8}
      />

      <h3 className="mt-5 text-xl font-bold text-gray-800">
        {title}
      </h3>
    </div>
  );
}