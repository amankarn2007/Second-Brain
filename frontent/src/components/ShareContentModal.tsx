import type { Dispatch, SetStateAction } from "react";
import Button from "./Button";


interface ShareInterfase{
    share: boolean;
    setShare: Dispatch<SetStateAction<boolean>>;
}

function ShareContentModal({share, setShare}: ShareInterfase){
    return(
        share &&
        <div className="h-screen w-screen fixed backdrop-blur-sm top-0 left-0 z-5 flex justify-center items-center">
            <div className="w-120 h-80 bg-white rounded-xl border border-gray-300">
                <div className="flex justify-between items-center py-5 px-5">
                    <h2 className="text-xl font-medium">Share Your Second Brain</h2>
                    <i className="fa-solid fa-xmark scale-100 hover:scale-125 transition-transform" onClick={() => setShare(!share)}></i>
                </div>
                <p className="px-5 py-5 text-gray-700">Share your entire collection of notes, documents, tweets, and videos with others. They'll be able to import your content into their own second Brain.</p>
                
                <Button 
                variant={"secondary"} 
                size="md" 
                text="Share Brain" 
                startIcon={<i className="fa-regular fa-copy"></i>}
                width={108}
                onClick={() => ""} 
                />

                <p className="text-gray-500 px-40 py-3">3 items will be shared</p>
            </div>
        </div>
    )
}

export default ShareContentModal;