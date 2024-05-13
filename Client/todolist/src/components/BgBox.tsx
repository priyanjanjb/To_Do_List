export default function BgBox({children}:{children:React.ReactNode}){
    return(
        <div
        className="bg-zinc-500 bg-opacity-50 border-2 border-gray-400
            py-2 px-7 rounded-3xl
            text-gray-100 leading-tight"
          style={{
            margin: "auto",
            width: "35%",
            height: "100%",
          }}
        >
            {children}
        </div>
        );
}