import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void
}

const variantStyle = {
    "primary": "bg-purple-300 text-purple-600 hover:bg-purple-350",
    "secondary": "bg-purple-600 text-white hover:bg-purple-500"
}

const sizeStyle = {
    "sm": "px-2 py-3",
    "md": "px-4 py-3 text-xl",
    "lg": "py-4 text-2xl"
}

const defaultStyle = "rounded-lg m-4 w-42 cursor-pointer";

function Button(props: ButtonProps) {

    return(
        <button className={`${variantStyle[props.variant]} ${sizeStyle[props.size]} ${defaultStyle}`} 
        onClick={props.onClick}>

            <div className="w-full flex justify-center items-center">
                { props.startIcon &&
                    <div className="flex items-center mr-2"> 
                        { props.startIcon } 
                    </div>
                }
                { props.text }

                { props.endIcon && (
                    <div className="flex items-center ml-2"> 
                        {props.endIcon} 
                    </div>
                )}
            </div>

        </button>
    )
}

export default Button;