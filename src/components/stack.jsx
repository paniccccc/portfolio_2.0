import Title from "./Title";

function Stack(){

    return(
        <>
        <Title>Tech Stack</Title>
        <div className="pb-5 div flex justify-center flex-row text-center pt-1 pb-6 gap-2 ">
            
            

            <h2 
            className="text-s inline-block px-2 py-1 bg-white dark:bg-stone
            font-bold border-2 border-stone-900 dark:border-white rounded-md">
                HTML
            </h2>

            <h2 
            className="text-s inline-block px-2 py-1 bg-white dark:bg-stone
            font-bold border-2 border-stone-900 dark:border-white rounded-md">
                CSS
            </h2>
            
            <h2 
            className="text-s inline-block px-2 py-1 bg-white dark:bg-stone
            font-bold border-2 border-stone-900 dark:border-white rounded-md">
                Javascript
            </h2>

            <h2 
            className="text-s inline-block px-2 py-1 bg-white dark:bg-stone
            font-bold border-2 border-stone-900 dark:border-white rounded-md">
                React
            </h2>
            

        </div>
        </>
    )
}

export default Stack;