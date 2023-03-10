import Title from "./Title";
function Contact(){
    return(
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">

                    <form
                        action="https://getform.io/f/a02c1052-a4bf-4f3f-bedd-c12cbe4ba7f0"
                        method="POST"
                        className="flex flex-col w-full md:w-7/12"
                    >
                        <Title>Contact</Title>
                        <input 
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-white border-2 
                        rounder-md focus:outline-none"
                        />
                        
                        <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-white border-2 
                        rounder-md focus:outline-none"
                        />
                        
                        <input
                            name="message"
                            placeholder="Message"
                            rows="10"
                            className="mb-4 p-2 bg-white border-2 
                            rounder-md focus:outline-none "
                        />
                        
                        <button className="text-center inline-block px-8 
                        py-3 w-max text-base 
                        rounded-md text-white 
                        bg-gradient-to-r from-green-500 
                        to-blue-500 drop-shadow-md
                        hover:from-purple-600 hover:to-yellow-600">
                            Connect with me
                        </button>
                    </form>

            </div>

        </div>
    )
}

export default Contact;