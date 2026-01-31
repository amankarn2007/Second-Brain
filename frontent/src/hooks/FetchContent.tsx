import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../Config";


function FetchContent() {
    const [content, setContent] = useState([]);

    const fetch = async() => {
        try{
            const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
                headers: { //token required to fetch data
                    "Authorization": localStorage.getItem("token"),
                }
                    
            })
            //console.log(response.data);
            setContent(response.data.contents); //set the fetched data
        } catch(err) {
            console.log("fetch failed", err);
        }
    }
    //useEffect fetch ke bahar rhega hamesh
    useEffect(() => {
        fetch(); //for first time render
    }, [])

    return { 
        content, //this will show data on dashboard
        fetch, //we'll use this to fetch contain when new content added
    }
}

export default FetchContent;