import { useState } from "react";

export default function Button({
  text,
  type = "button",
  onClick
}: {
  text: string;
  type: "button" | "submit" | "reset";
  onClick: (e: any) => any,
}) {
  return (
    <button
    onClick={onClick}
      className="w-full text-2xl bg-violet-500 hover:bg-violet-950 text-white font-bold py-2 px-4 rounded-full my-2"
      type ={type}
      
      >
      
      {text}
    </button>
  );
}
