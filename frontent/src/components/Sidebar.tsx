import type { Dispatch, SetStateAction } from "react"
import type React from "react"

interface sidebarInterface{
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar(props: sidebarInterface) {
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
                <SidebarContent title="Tweets" icon={<i className="fa-brands fa-twitter"></i>} />

                <SidebarContent title="Videos" icon={<i className="fa-brands fa-youtube"></i>} />

                <SidebarContent title="Documents" icon={<i className="fa-regular fa-file-lines"></i>} />

                <SidebarContent title="Links" icon={<span className="material-symbols-outlined">link</span>} />

                <SidebarContent title="Tags" icon={<i className="fa-solid fa-hashtag"></i>} />

                <SidebarContent 
                    title="Search Brains" 
                    icon={<i className="fa-brands fa-searchengin"></i> } 
                    onClick={() => console.log("search clicked")}    
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