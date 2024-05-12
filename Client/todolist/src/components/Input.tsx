export default function Input({halder , types}:{halder:string , types:string}) {
  
  return (
    <div >
      <input type={types} placeholder={halder} style ={{width:"400px"}} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
    </div>
  );
}
