export default function AudienceCard({ title, description, Icon }) {
  return (
    <div>
      <Icon className="h-12 w-12 text-white" strokeWidth={1.8} />

      <h3 className="mt-4 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-blue-100">
        {description}
      </p>
    </div>
  );
}