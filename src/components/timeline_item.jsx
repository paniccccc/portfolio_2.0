
function TimelineItem({year, title, duration, details}){
    return(
        <ol className="flex flex-col md:flex-row relative border-1 border-stone-200">
            <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-stone-200 rounded-full 
                mt-1.5 -left-1.5 border-white"/>
                <p className="flex flex-wrap gap-4 flex-row 
                items-center justify-start text-xs md:text-s">
                    <span className="inline-block px-2 py-2 font-semibold 
                    text-white bg-stone-900 rounded-md">
                        {year}
                    </span>
                    
                    <h3 className="text-lg font-semibold text-stone-900 bg-white">{title}</h3>

                    <div className="my-1 text-s font-normal leading-none text-white bg-emerald-600">
                        {duration}
                    </div>
                </p>
                <p className="my-2 text-base font-normal text-stone-900 bg-lime-200">
                    {details}
                </p>
            </li>
        </ol>
    )
}

export default TimelineItem;