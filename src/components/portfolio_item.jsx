
function PortfolioItem({title, about, stack, link, gitlink}){
    return(
        
        <div className="border-2 border-stone-900 rounded-md overflow-hidden bg-white"> 
        
        <div className="w-full p-3">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold ">{title}</h3>
            <p className="text-xs md:text-s dark:text-white mb-2 md:mb-3 font-semibold bg-green-100" >{about}</p>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                {stack.map(item=>(
                    <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                        {item}
                    </span>
                ))}
            </p>
    
        <div className="pt-4 grid grid-cols-1 gap-4">
            {/* <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-block px-2 py-1 text-center
         border-2 border-stone-900 font-bold hover:text-white hover:bg-cyan-500
         dark:border-white rounded-md overflow-hidden">
            Link
      </a> */}

        <a 
         href={gitlink}
         target="_blank"
         rel="noopener noreferrer"
         className="inline-block text-center px-2 py-1 border-2 hover:text-white hover:bg-green-500 font-bold
         border-stone-900 dark:border-white rounded-md overflow-hidden">
            Github
      </a>
      </div>

        </div>
        </div>
    )
}

export default PortfolioItem;