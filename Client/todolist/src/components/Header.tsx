export default function Header({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-4xl font-bold text-indigo-100 text-center mb-2">
        {title}
      </h2>
    </div>
  );
}
