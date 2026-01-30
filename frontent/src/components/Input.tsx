
interface InpuptProps{
    ref?: any; //ref for 
    placeholder: string;
    width?: number;
    type?: string;
}

function Input({ref, placeholder, width, type = "text"}: InpuptProps) {
    return(
        <div>
            <input 
                type={type}  
                placeholder={placeholder} 
                ref={ref} 
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all" 
                style={{ width: width ? `${width * 0.25}rem` : 'auto' }}
            />
        </div>
    )
}

export default Input;