import { type Dispatch, type SetStateAction } from "react";
import InputBox from "./InputBox";
import axios from "axios";
import { BACKEND_URL } from "../Config";

interface ModalProps{
    popup: boolean;
    setPopup: Dispatch<SetStateAction<boolean>>;
    refresh: () => void;
}

//controlled component
export function CreateContentModal({popup, setPopup, refresh}: ModalProps){

    async function addContent(recievedData: any) { //function called to add content
        const type = recievedData.type;
        const title = recievedData.title;
        const link = recievedData.link;
        const tags = recievedData.tags;

        const response = await axios.post(`${BACKEND_URL}/api/v1/content`, { //send req to add content
            type,
            title,
            link,
            tags,
        }, {
            headers: {
                "Authorization": localStorage.getItem("token"), //have to send token for authorisation
            }
        })
        
        alert("Notes added successfully");

        refresh();
        
        console.log(response.data);
        return response.data; //when InoutBox added "Data" in onAdd, addContent runs. aur ye return 'InputBox' ko bata raha hai ki kaam khatam!. tab InputBox ka "await onAdd" khatam hoga.
    }


    return(
        popup && 
        <div className="h-screen w-screen fixed top-0 left-0 z-10 backdrop-blur-xs flex justify-center items-center">
            <div className=" rounded-xl w-135 h-170 bg-white border border-gray-300">
                <div className="flex justify-end p-5">
                    <i className="fa-solid fa-xmark scale-100 hover:scale-125 transition-transform cursor-pointer" onClick={() => setPopup(!popup)}></i>
                </div>

                <div className="py-2">
                    {/*jab submit button click hoga to handleSubmit function input catch krke data me store karke "onAdd" ke through data dega. */}
                    {/* yaha hame "InputBox" ko addContent khali dabba bheja "onAdd props" ke through, child ne data store krke addContent me data bhar diya aur wapas  kar diya. */}
                    <InputBox onAdd={addContent} setPopup={setPopup}  />
                </div>
            </div>
        </div>
    )
}