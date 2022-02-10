import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
    return (
        <div className="ui relaxed divided list">
            {props.videos.map(video => {
                return <VideoItem video={video} key={video.id.videoId} setSelectedVideo={props.setSelectedVideo}/>
            })}
        </div>
    )
}

export default VideoList;