import axios from "axios";
import type { Dispatch, SetStateAction } from "react"
import type React from "react"
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../Config";

interface sidebarInterface{
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    setFilterX: Dispatch<SetStateAction<boolean>>;
    setVideoFilter: Dispatch<SetStateAction<boolean>>;
    setNotesFilter: Dispatch<SetStateAction<boolean>>;
    setLinksFilter: Dispatch<SetStateAction<boolean>>;
    setAllLinks: Dispatch<SetStateAction<any[]>>;
}

export function Sidebar(props: sidebarInterface) {
    const navigate = useNavigate();

    function xContent() {
        //console.log("tweeter")
        props.setFilterX((prev) => !prev); //send this boolean to dashboard, and then content
    }

    function videoContent() {
        //console.log("youtube video");
        props.setVideoFilter((prev) => !prev);
    }

    function notesFilter() {
        //console.log("notes filter");
        props.setNotesFilter((prev) => !prev)
    }

    async function filterLinks() {
        console.log("Links filter");
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/getLinks`, {
            "headers": {
                "Authorization": localStorage.getItem("token")
            }
        })
        props.setAllLinks(response.data); //sare data set kar do
        console.log(response.data); //.hash = link
        
        props.setLinksFilter((prev) => !prev);
    }

    return(
        props.isOpen ?
        <div className="h-screen w-80 bg-white flex flex-col z-1 shadow-xl">
            {/*logo*/}
            <div className=" w-full flex items-center py-2">
                <span className="material-symbols-outlined text-5xl! text-blue-700 ml-5">neurology</span>
                <h2 className="text-2xl font-medium ml-2">Second Brain</h2>

                <div className="bg-blue-50 p-1 rounded-4xl hover:text-lg opacity-50 hover:opacity-100 cursor-pointer ml-7" onClick={() => 
                    props.setOpen(!props.setOpen)
                }>
                    <i className="fa-solid fa-xmark"></i>
                </div>

            </div>

            {/*sidebar content*/}
            <div className="flex flex-col mt-5 cursor-pointer">
                <SidebarContent title="Tweets" icon={<i className="fa-brands fa-twitter"></i>}  onClick={xContent}/>

                <SidebarContent title="Videos" icon={<i className="fa-brands fa-youtube"></i>} onClick={videoContent} />

                <SidebarContent title="Documents" icon={<i className="fa-regular fa-file-lines"></i>} onClick={notesFilter} />

                <SidebarContent title="Links" icon={<span className="material-symbols-outlined">link</span>} onClick={filterLinks}/>

                <SidebarContent title="Tags" icon={<i className="fa-solid fa-hashtag"></i>} />

                <SidebarContent 
                    title="Search Brains" 
                    icon={<i className="fa-brands fa-searchengin"></i> } 
                    onClick={() => navigate("/findbrain")}    
                />
            </div>
        </div> : <div></div>
    )
}

interface sidebarProps {
    title: string, 
    icon: React.ReactNode
    onClick?: () => void
}

function SidebarContent({title, icon, onClick}: sidebarProps) {
    return(
        <div className="flex items-center text-xl py-3 px-8 hover:bg-blue-50 rounded-xl" onClick={onClick}>  
            { icon }
            <p className="pl-4"> { title } </p>
        </div>
    )
}