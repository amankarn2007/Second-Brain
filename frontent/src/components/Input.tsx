
interface InpuptProps{
    onChange?: () => void;
    placeholder: string;
    width?: number;
    type?: string;
}

function Input({onChange, placeholder, width, type = "text"}: InpuptProps) {
    return(
        <div>
            <input 
                type={type}  
                placeholder={placeholder} 
                onChange={onChange} 
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all" 
                style={{ width: width ? `${width * 0.25}rem` : 'auto' }}
            />
        </div>
    )
}

export default Input;