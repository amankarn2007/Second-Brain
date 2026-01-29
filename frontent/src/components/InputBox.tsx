

function InputBox(){
    return(
        <div className="flex justify-center items-center">
            <form action="">
                <h2 className="text-2xl font-mono">Write your thought here</h2>

                <div className="mt-10">
                    <label className="px-5">Choose a type:</label>

                    <select name="fruits_list">
                        <option value="select">---select here---</option>
                        <option value="notes">Notes</option>
                        <option value="youtube">Youtube</option>
                        <option value="x">X</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default InputBox;