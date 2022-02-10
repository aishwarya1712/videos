import axios from "axios";

const KEY = "obtain from https://console.developers.google.com/home/dashboard?project=videos-340903"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        type: "video",
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});