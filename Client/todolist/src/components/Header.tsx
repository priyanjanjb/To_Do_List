export default function Header({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-6xl  font-bold text-indigo-100 text-center">
        {title}
      </h2>
    </div>
  );
}
