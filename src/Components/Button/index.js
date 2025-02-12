export default function Button({variant=null, onClick=null, children=null}){

  switch (variant) {

    case "solid":
      return (  
        <button className="bg-transparent flex justify-even gap-2 text-black border border-gray-300 h-97 px-3 min-w-min lg:min-w-min relative z-20 rounded-xl hover:bg-primary hover:text-white items-center" onClick={onClick}>
          {children}
        </button>
      )

    case "solidblue":
      return (  
        <button className="bg-brand text-white border border-brand px-6 py-3 relative z-20 rounded-full hover:bg-white hover:text-brand" onClick={onClick}>
          {children}
        </button>)

    case "solidlight":
      return (  
        <button className="bg-lightblue text-white border border-lightblue px-6 py-3 relative z-20 rounded-full hover:bg-white hover:text-lightblue hover:border-white" onClick={onClick}>
          {children}
        </button>
      )

    case "ham":
      return (  
        <button className="bg-primary text-white w-12 h-12 shadow-sm rounded-full hover:bg-transparent border-2 hover:text-primary border-primary hover:border-primary flex justify-center items-center" onClick={onClick}>
          {children}
        </button>
      )
  
    default:
      return (  
        <button className="bg-lightblue text-white border rounded-lg border-lightblue p-2" onClick={onClick}>
          {children}
        </button>
      )
  }
}
