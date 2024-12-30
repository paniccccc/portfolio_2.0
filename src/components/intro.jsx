import Title from "./Title";

function Intro(){
    return(
        
        <>
        <div className="flex items-center justify-center flex-col text-center pt-20 ">
            <h1 className="text-8xl md:text-7xl mb-1 md:mb-3 font-bold bg-white ">Hello!</h1>
            <p className="text-base md:text-xl mb-3 font-medium bg-white">I am Ronit Mohanty</p>
            <p className="text-sm max-w-xl mb-6 font-base bg-amber-100">
                Currently an Analyst at Deloitte US-India offices. I like to game, code and read about new and
                upcoming stuff especially related to the fields of frontend development, machine learning, cloud engineering and UI/UX designing.
            </p>
        </div>
        <div className="flex justify-center flex-row text-center pt-1 pb-6 gap-2">
        <a target="_blank" href="https://github.com/paniccccc" 
            className="inline-block px-2 py-1 bg-white dark:bg-stone hover:text-white
            font-bold hover:bg-green-500 border-2 border-stone-900 dark:border-white rounded-md">
                Github
            </a>
            
            <a target="_blank" href="https://www.linkedin.com/in/ronit-mohanty-4895891b1/" 
            className="inline-block px-2 py-1 hover:bg-blue-500 hover:text-white
            font-bold border-2 bg-white border-stone-900 dark:border-white rounded-md dark:bg-stone">
                LinkedIn
            </a>

            <a target="_blank" href="mailto:mohantyronitt@gmail.com" 
            className="inline-block px-2 py-1 hover:bg-rose-500 hover:text-white
            font-bold bg-white border-2 border-stone-900 dark:border-white dark:bg-stone rounded-md ">
                Email
            </a>

            <a target="_blank" href="public\Ronit_Mohanty_Resume_09-08-2022-20-08-23.pdf" 
            className="inline-block px-2 py-1 hover:text-white hover:bg-amber-500
            font-bold bg-white border-2 border-stone-900 dark:border-white dark:bg-stone rounded-md ">
                Resume
            </a>
        </div>
        
        
        <Title>Tech Stack</Title>
        <div className="flex justify-center flex-row cursor-pointer text-center pt-1 pb-10">
        
        <div className=" pb-3 space-x-4 gap-4 ">
            <h2 
            className="text-s hover:text-white hover:bg-emerald-500 inline-block px-2 py-1 bg-white dark:bg-stone
            font-bold border-2 border-stone-900 dark:border-white rounded-md">
                Python
            </h2>

            <h2 
            className="text-s hover:text-white hover:bg-yellow-500 inline-block px-2 py-1 bg-white dark:bg-stone
            font-bold border-2 border-stone-900 dark:border-white rounded-md">
                Javascript
            </h2>
            
            <h2 
            className="text-s inline-block px-2 py-1 
            bg-white dark:bg-stone hover:text-white hover:bg-sky-500
            font-bold border-2 border-stone-900 dark:border-white rounded-md">
                React
            </h2>

            <h2 
            className="text-s inline-block px-2 py-1 
            bg-white dark:bg-stone hover:text-white hover:bg-lime-500
            font-bold border-2 border-stone-900 dark:border-white rounded-md">
                Google Cloud
            </h2>
            
            <h2
            className="text-s inline-block px-2 py-1 
            bg-white dark:bg-stone hover:text-white hover:bg-fuchsia-500
            font-bold border-2 border-stone-900 dark:border-white rounded-md"
            >
                C++
            </h2>
        </div>
        </div>
        
        </>
    )
}

export default Intro;