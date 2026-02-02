interface ShowLink {
    link: string;
}

function ShowLink(props: ShowLink) {
    async function copyLink(link: string) {
        await navigator.clipboard.writeText(link);
        alert("copied");
    }

    return(
        <div className="w-150 h-15 rounded-2xl bg-blue-100 hover:bg-blue-200 flex items-center justify-center my-5 ml-15">
            <p className="text-lg">{props.link}</p>
            <i className="fa-regular fa-copy pl-4 scale-100 hover:scale-125 transition-transform cursor-pointer" onClick={() => copyLink(props.link)}></i>
        </div>
    )
}

export default ShowLink;