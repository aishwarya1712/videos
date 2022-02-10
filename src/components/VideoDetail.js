import React from "react";

const VideoDetail = ({selectedVideo}) => {
    if(!selectedVideo){
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className="ui embed">
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {/* <iframe src={`https://www.youtube.com/watch?v${selectedVideo.id.videoId}`}/> */}
            </div>
           <div className="ui segment">
               <h4 className="ui header">{selectedVideo.snippet.title}</h4>
               <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;