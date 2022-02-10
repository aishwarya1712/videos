import axios from "axios";

const KEY = "AIzaSyCWqQ2Vu00Kgy1OjWO7wMR6Vhe0ddi6-Ms"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        type: "video",
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});