import { useRef, type Dispatch, type SetStateAction } from "react";
import Button from "./Button";
import Input from "./Input";

interface InputBoxInterface{
    onAdd: (data: any) => void;
    setPopup: Dispatch<SetStateAction<boolean>>;
}

function InputBox(props: InputBoxInterface) {
    const typeRef = useRef<HTMLSelectElement>(null); //refs to store input data
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const tagRef = useRef<HTMLInputElement>(null);


    function handleSubmit() {
        //sare refs ka input nikal ke "Data" me insert kar diya
        const Data = {
            type: typeRef.current?.value,
            title: titleRef.current?.value,
            link: linkRef.current?.value,
            tags: tagRef.current?.value,
        }

        props.onAdd(Data); //send data to parent in where "InputBox Component" is used
        props.setPopup(prev => !prev); //close the CreateContent Modal
    }


    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Content</h2>
            
            <div className="w-full max-w-md space-y-4">
                {/* Type Selection */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-600 ml-1">Type</label>
                    <select ref={typeRef}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white transition-all">
                        <option value="select" className="text-gray-600">Select</option>
                        <option value="notes">Notes</option>
                        <option value="youtube">YouTube</option>
                        <option value="x">Twitter (X)</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-600 ml-1">Title</label>
                    <Input ref={titleRef} placeholder="Project name or title" width={112} />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-gray-600 ml-1">Link</label>
                    <Input ref={linkRef} placeholder="https://..." width={112} />
                </div>

                <div className="flex flex-col gap-1.5 pb-4">
                    <label className="text-sm font-medium text-gray-600 ml-1">Tags</label>
                    <Input ref={tagRef} placeholder="tech, productivity, ideas" width={112} />
                </div>

                {/* Submit Button Container */}
                <div className="flex justify-center pt-2">
                    <Button 
                        variant="secondary" 
                        size="md" 
                        text="Create Content" 
                        startIcon={<i className="fa-solid fa-plus"></i>}
                        onClick={handleSubmit} // submit par sunction call hoga
                        width={80}
                    />
                </div>
            </div>
        </div>
    );
}

export default InputBox;