import { type Dispatch, type SetStateAction } from "react";
import InputBox from "./InputBox";

interface ModalProps{
    popup: boolean,
    setPopup: Dispatch<SetStateAction<boolean>>
}

//controlled component
export function CreateContentModal({popup, setPopup}: ModalProps){

    return(
        popup && 
        <div className="h-screen w-screen fixed top-0 left-0 z-5 backdrop-blur-xs flex justify-center items-center">
            <div className=" rounded-xl w-135 h-170 bg-white border border-gray-300">
                <div className="flex justify-end p-5">
                    <i className="fa-solid fa-xmark scale-100 hover:scale-125 transition-transform cursor-pointer" onClick={() => setPopup(!popup)}></i>
                </div>

                <div className="py-2">
                    <InputBox />
                </div>
            </div>
        </div>
    )
}