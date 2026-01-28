
interface cardProps {
    projectName: string,
    heading?: string,
    description?: string,
    tags?: string,
}

function Card(props: cardProps) {
    return(
        <div className="h-90 w-72 bg-white rounded-2xl px-4 mr-6 border border-gray-300 shadow-xl">
            <div className="flex justify-between items-center py-3  text-lg">
                <div className="flex items-center ">
                    <i className="fa-regular fa-file-lines"></i>
                    <p className="px-2"> Project Ideas </p>
                </div>
                <div className="flex justify-center items-center cursor-pointer">
                    <i className="fa-solid fa-share-nodes opacity-70 hover:opacity-100"></i>
                    <span className="material-symbols-outlined px-2 opacity-70 hover:opacity-100">delete</span>
                </div>
            </div>

            { props.heading &&
                <h2 className="text-2xl font-bold py-1"> {props.heading} </h2>
            }

            { props.description && <h2 className="py-1"> {props.description} </h2> }


            <div className="flex py-3">
                <Tags tags={props.tags} />
            </div>

            <p className="flex text-sm text-gray-500 py-2">Added on&nbsp; <CustomDate/> </p>

        </div>
    )
}

export default Card;

function Tags(props: { tags: string | undefined }) {
    return(
        props.tags && (
            <p className="px-2 py-1 mx-2 rounded-2xl bg-blue-100 hover:bg-purple-100 cursor-pointer"> 
                { props.tags } 
            </p>
        )
    )
}

function CustomDate() {
    let date = new String(new Date().getMonth() + 1);
    const month = new Date().getDate();
    const year = new Date().getFullYear();

    if(date.length === 1 ){
        date = "0" + date;
    }

    return(
        <p> {date}/{month}/{year} </p>
    )
}