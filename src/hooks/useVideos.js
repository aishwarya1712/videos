import {useState, useEffect} from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        onFormSubmit(defaultSearchTerm)
    }, [defaultSearchTerm])

    const onFormSubmit = async (term) => {
        console.log("Search term submitted is: ", term)
        const res = await youtube.get('/search', {
            params:{
                q: term
            }
            
        })
        setVideos(res.data.items);
    }

    return [videos, onFormSubmit]
}

export default useVideos;