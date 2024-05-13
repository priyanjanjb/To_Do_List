import { useState } from "react";

export default function Button({ text ,onClick}: { text: string , onClick:()=>null }) {
  

  return (
    <button
      onClick={onClick}
      className="bg-indigo-400 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full"
    >
      
      {text}
    </button>
  );
}
