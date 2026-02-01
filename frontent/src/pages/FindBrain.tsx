import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useRef, useState } from "react";
import FindBrainCard from "../components/FindBrainCard";

function FindBrain() {
    const navigate = useNavigate();
    return(
        <div className="w-full h-screen bg-white flex flex-col">
            <header className="h-25 w-full bg-white flex items-center z-5 border border-gray-300 shadow sticky">
                {/*logo*/}
                <div className=" w-full flex items-center py-2">
                    <span className="material-symbols-outlined text-5xl! text-blue-700 ml-5">neurology</span>
                    <h2 className="text-2xl font-medium ml-2">Second Brain</h2>
                </div>

                <div className="flex w-1/2 justify-center">
                    <button className="px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-4xl mr-2" 
                    onClick={() => navigate("/")}>Go to Home</button>
                    <button className="px-4 py-2 bg-blue-100 hover:bg-blue-200 rounded-4xl ml-4" 
                    onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
                </div>
            </header>

            <main className="flex-1 flex-col overflow-y-scroll flex items-center mt-2">
                <Main />
            </main>
        </div>
    )
}

export default FindBrain;

function Main() {
    const inputRef = useRef<HTMLInputElement>(null);
    const [content, setContent] = useState<any>(null); // multiple contents or maybe single

    async function fetchData() {
        const link = inputRef.current?.value;
        //console.log(link);
        const response = await axios.get(`${BACKEND_URL}/api/v1${link}`);
        //console.log(response.data);

        if(!response.data.content){ //signle content hai, bcs signle notes ke response me "content" nahi hota hai
            setContent(response.data);
        } else {
            setContent(response.data.content);
        }

        //console.log("this is all content state", content);
    }
    

    return(
        <div className="w-full max-w-7xl flex items-center flex-col border-2 border-gray-300 shadow-xl shadow-red-400 rounded-lg mb-5">
            {/*searchbox*/}
            <div className="mt-6 flex justify-center items-center">
                <input type="text" placeholder="enter your link here..." 
                className="w-150 h-10 text-center outline-0 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all shadow-lg shadow-red-300" 
                ref={inputRef} />

                <div className="py-1 px-1 ml-2 border-2 border-gray-400 rounded-lg shadow-lg shadow-red-300">
                    <i className="fa-brands fa-searchengin text-lg scale-100 hover:scale-125 transition-transform p-1" onClick={fetchData}></i>
                </div>
            </div>

            <div className="flex w-7xl mt-2 ml-5 mb-5 justify-center flex-wrap">

                {   content && !Array.isArray(content) ? (
                        <FindBrainCard 
                            projectName={content.title}
                            heading={content.title}
                            description={content.description}
                            tags={content.tags}
                            type={content.type}
                            link={content.link}
                            key={content._id}
                        />
                    ) : content && content.length > 0 ? (
                        content.map((data: any) => (
                            <FindBrainCard 
                                projectName={data.title}
                                heading={data.heading}
                                description={"description testing"}
                                tags={data.tags}
                                type={data.type}
                                link={data.link}
                                key={data._id}
                            />
                        ))
                    ) : <p className="mt-50 mb-68 text-2xl"> No content avilable</p>
                }
            </div> 
        </div>
    )
}