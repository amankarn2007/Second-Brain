import { useState, type Dispatch, type SetStateAction } from "react";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../Config";

interface shareProps {
    singleShare: boolean,
    setSignleShare: Dispatch<SetStateAction<boolean>>;
    contentId: string,
}

export function ShareNotesLink({singleShare, setSignleShare, contentId}: shareProps) {
    const [loading, setLoading] = useState(false);
    const [link, setLink] = useState("");

    //console.log(contentId);
    const id = contentId; //content id

    const shareHandler = async() => {
        setLoading(true);

        const response = await axios.post(`${BACKEND_URL}/api/v1/brain/notes/${id}`, {
            share: true,
        }, {
            headers: {
                "Authorization": localStorage.getItem("token"),
            }
        })
        console.log(response.data);
        setLink(response.data.link); //set link
        setLoading(false);

        
    }

    async function copyLink(link: string) {
        //console.log("copy clicked");
        try{
            await navigator.clipboard.writeText(link);
            alert("copied");
            
        } catch(err) {
            console.log("error in coping link", err);
        }
    }

    return(
        singleShare && 
        <div className="h-screen w-screen fixed top-0 left-0 z-10 bg-blue-200/50 flex justify-center items-center">
            <div className="bg-white w-120 h-80 flex flex-col justify-center items-center rounded-lg">

                <div className="flex justify-between items-center py-5 px-5 w-full">
                    <h2 className="text-xl font-medium">Share Your Second Brain</h2>

                    <i className="fa-solid fa-xmark scale-100 hover:scale-125 transition-transform cursor-pointer" onClick={() => setSignleShare(!singleShare)}></i>
                </div>

                <p className="px-5 py-5 text-gray-700">Share your entire collection of notes, documents, tweets, and videos with others. They'll be able to import your content into their own second Brain.</p>

                {
                    loading ? (
                        <Button
                            variant="primary"
                            size="md"
                            text="loading..."
                            width={108}
                            startIcon={<i className="fa-solid fa-spinner"></i>}
                        />
                    ) : link ? (
                        <Button
                            variant="secondary"
                            size="md"
                            text={link}
                            width={108}
                            endIcon={<i className="fa-regular fa-copy"></i>}
                            iconHover={true}
                            onClick={() => copyLink(link)}
                        />
                    ) : (
                        <Button
                            variant="secondary"
                            size="md"
                            text="share"
                            width={108}
                            startIcon={<i className="fa-solid fa-share-nodes"></i>}
                            onClick={shareHandler}
                        />
                    )
                }
                
                <p className="text-gray-500 py-3">only this items will be shared</p>
            </div>
        </div>
    )
} 