export default function BgBox({RegOrLogForm, children }: { RegOrLogForm : boolean ,children: React.ReactNode }) {
  return (
    <>
      {/* this component use home page and other pages so it render the consition as the pages want */}
      {RegOrLogForm ? (
        <div
          className="items-center
          bg-zinc-500 
          bg-opacity-50 border-2
          border-gray-400 
          text-gray-100 py-2 px-7 rounded-3xl 
          mx-auto w-1/3 "
        >
          {children}
        </div>
      ) : (
        <div
          className="items-center
          bg-zinc-500 
          bg-opacity-50 border-2
          border-gray-400 
          text-gray-100 py-7 px-12 rounded-3xl 
          mx-auto w-11/12 h-full "
        >
          {children}
        </div>
      )}
      
    </>
  );
}
