import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick? : () => void;
    width?: number;
    iconHover? : boolean
}

const variantStyle = {
    "primary": "bg-purple-300 text-purple-600 hover:bg-purple-350",
    "secondary": "bg-purple-600 text-white hover:bg-purple-500"
}

const sizeStyle = {
    "sm": "px-2 py-3",
    "md": "px-3 py-2 text-xl",
    "lg": "px-4 py-2 text-2xl"
}

const defaultStyle = "rounded-lg m-4 cursor-pointer";

function Button(props: ButtonProps) {

    return(
        <button className={`${variantStyle[props.variant]} ${sizeStyle[props.size]} ${defaultStyle}`} 
        onClick={props.onClick} style={{ width: props.width ? `${props.width * 0.25}rem` : 'auto' }}>

            <div className="w-full flex justify-center items-center font-">
                { props.startIcon &&
                    <div className={`flex items-center mr-2 scale-100 ${props.iconHover ? "hover:scale-125" : ""}`}> 
                        { props.startIcon } 
                    </div>
                }

                { props.text }

                { props.endIcon && (
                    <div className={`flex items-center ml-2 scale-100 ${props.iconHover ? "hover:scale-125" : ""}`}> 
                        {props.endIcon} 
                    </div>
                )}
            </div>

        </button>
    )
}

export default Button;