import { useState, type Dispatch, type SetStateAction } from "react";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../Config";


interface ShareInterfase{
    share: boolean;
    setShare: Dispatch<SetStateAction<boolean>>;
}

function ShareContentModal({share, setShare}: ShareInterfase){
    const [loader, setLoader] = useState(false);
    const [link, setLink] = useState();
    const [copyState, setCopyState] = useState(false);

    async function sendBackendReq() { //send backend req to genrate link
        setLoader(true);

        const responce = await axios.post(`${BACKEND_URL}/api/v1/brain/share`,  //link
            {
                share: true,  //req body
            },
            {
                headers: {  //config
                    "Authorization": localStorage.getItem("token")
                }
            }
        )
        setLink(responce.data.link); // now, can use link fron "link"
        //console.log(responce.data.link); //link

        setLoader(false);
    }

    const copyLink = async(link: string) => { //functoin for copy
        try{
            await navigator.clipboard.writeText(link); //this will copy our link

            //ek flash dikhado copied ka
            alert("copied");
        } catch(err) {
            console.log("error i copy", err);
        }
    }

    return(
        share &&
        <div className="h-screen w-screen fixed backdrop-blur-sm top-0 left-0 z-5 flex justify-center items-center">
            <div className="w-120 h-80 bg-white rounded-xl border border-gray-300">

                <div className="flex justify-between items-center py-5 px-5">
                    <h2 className="text-xl font-medium">Share Your Second Brain</h2>

                    <i className="fa-solid fa-xmark scale-100 hover:scale-125 transition-transform cursor-pointer" 
                    onClick={() => setShare(!share)}></i>
                </div>

                <p className="px-5 py-5 text-gray-700">Share your entire collection of notes, documents, tweets, and videos with others. They'll be able to import your content into their own second Brain.</p>
                
                {
                    loader ? ( //if loading
                        <Button 
                            variant="primary"
                            size="md" 
                            text="loading..."
                            startIcon={<i className="fa-solid fa-spinner"></i>}
                            width={108}
                        />
                    ) : link ? ( //genrated link button
                        <Button 
                            variant={"secondary"} 
                            size="md" 
                            text= {`${link}`} 
                            endIcon={<i className="fa-regular fa-copy"></i>}
                            iconHover={true}
                            width={108}
                            onClick={() => copyLink(link)}
                        />                        

                    ) : ( //default share button
                        <Button 
                            variant={"secondary"} 
                            size="md" 
                            text="Share Brain" 
                            startIcon={<i className="fa-regular fa-share-from-square"></i>}
                            width={108}
                            onClick={sendBackendReq} 
                        />
                    )

                    
                }

                <p className="text-gray-500 px-38 py-3">all items will be shared</p>
            </div>
        </div>
    )
}

export default ShareContentModal;