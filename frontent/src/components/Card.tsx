
interface cardProps {
    projectName: string,
    heading?: string,
    description?: string,
    tags?: string,
    type: "notes" | "youtube" | "x",
    link?: string,
}

function Card(props: cardProps) {
    return(
        <div className="h-98 w-72 bg-white rounded-2xl px-4 mr-6 border border-gray-300 shadow-xl">
            <div className="flex justify-between items-center py-3 text-lg">
                <div className="flex items-center ">
                    <i className="fa-regular fa-file-lines"></i>
                    <p className="px-2"> { props.projectName } </p>
                </div>
                <div className="flex justify-center items-center cursor-pointer">
                    <i className="fa-solid fa-share-nodes opacity-70 hover:opacity-100"></i>
                    <span className="material-symbols-outlined px-2 opacity-70 hover:opacity-100">delete</span>
                </div>
            </div>

            {  props.type === "notes" &&
                <>
                    {  props.heading && 
                        <h2 className="text-2xl font-bold py-1"> {props.heading} </h2>
                    }
    
                    {  props.description && 
                        <h2 className="py-1 mt-4"> {props.description} </h2>
                    }
                </>
            }

            {  props.type === "youtube" &&
                <iframe className="w-full h-38 rounded-lg" 
                    src={props.link ? linkEbeder({ link: props.link }) : ""}
                    //https://youtu.be/xTtL8E4LzTQ?si=C2q0F74INzJ8I1HW
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            }

            {  props.type === "x" &&
                <div className="w-full max-h-60 overflow-y-auto no-scrollbar rounded-lg no-scrollbar">
                    <blockquote className="twitter-tweet">
                        <a href={props.link?.replace("x.com", "twitter.com")}></a>
                    </blockquote>
                </div>
            }

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

function linkEbeder(props: {link: string}) {
    //catch youtube main link from given link
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = props.link.match(regExp);

    if (match && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}?controls=0`;
    }
    return ""; // Agar link galat ho
}