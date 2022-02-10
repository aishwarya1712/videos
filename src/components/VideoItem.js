import React from "react";
import './VideoItem.css';

const VideoItem = (props) => {
    return (
        <div className="item my-video-item" onClick={(e) => props.setSelectedVideo(props.video)}>
            <div className="image">
                <img src={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url}/>
            </div>
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;