import type { ReactElement } from "react";

interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void
}



function Button({variant, size, text, startIcon, endIcon, onClick}: ButtonProps) {

    return(
        <button className="" onClick={onClick}>
            <div>
                { startIcon }
            </div>
            { text }
        </button>
    )
}

export default Button;