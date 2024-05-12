import { useState } from "react";

export default function Button({caption}:{caption:string}) {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick} className="bg-teal-400 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-full"> {caption} {count}</button>;
}
