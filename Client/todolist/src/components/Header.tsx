export default function Header({title}:{title:string}) {
  return (
    <div>
      <h2 className="text-5xl  font-bold text-teal-100"
      style={{textAlign: "center"}}
      >{title}</h2>
    </div>
  );
}
