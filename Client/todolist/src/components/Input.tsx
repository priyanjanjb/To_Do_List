export default function Input({
  halder,
  types,
}: {
  halder: string;
  types: string;
}) {
  return (
    <div>
      <input
        type={types}
        placeholder={halder}
        style={{ width: "400px" }}
        className="bg-gray-700  border-2
       border-gray-400
       rounded-full py-2 px-7
        text-gray-100 leading-tight 
        focus:outline-none focus:bg-cyan-200
         focus:border-purple-500
         focus:text-gray-500 bg-opacity-20
         "
      />
    </div>
  );
}
