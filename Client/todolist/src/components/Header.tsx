export default function Header({title}:{title:string}) {
  return (
    <div>
      <h2 className="text-5xl font-bold text-teal-400">{title}</h2>
    </div>
  );
}
