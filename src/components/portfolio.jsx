import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolio_item";
import Title from "./Title";
function Portfolio(){
    return(
        <>
        <div className="pt-2">
        <Title>Projects</Title></div>
        <div className="flex flex-col md:flex-row items-center justify-center">
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {portfolio.map(project=>(
                    <PortfolioItem
                        //imgUrl={project.imgUrl}
                        title={project.title}
                        about={project.about}
                        stack={project.stack}
                        link={project.link}
                        gitlink={project.gitlink}
                    />
                ))}
                <div className="shape"></div>
            </div>
        </div>
        {/* <h1 className="text-2xl font-bold underline underline-offset-8 
        decoration-4 mb-5 text-black-500 bg-white">Tech Stack</h1>
         */}

        
        </>
    )
}

export default Portfolio;