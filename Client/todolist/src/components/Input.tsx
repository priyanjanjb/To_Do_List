export default function Input({
  halder,
  type,
  onChange,
  value,
}: {
  halder: string;
  type: string;
  onChange: any;
  value: string;
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={halder}
        onChange={onChange}
        className="w-full bg-gray-700  border-2
       border-gray-400
       rounded-full py-2 px-7 my-2
      text-gray-100 leading-tight 
        focus:outline-none focus:bg-violet-200
        focus:border-purple-500
        focus:text-gray-500 bg-opacity-20
         "
      />
    </div>
  );
}
