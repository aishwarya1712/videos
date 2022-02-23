import React, {useState, useEffect} from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from "./VideoDetail";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(()=>{
        onFormSubmit('jimin')
    }, [])

    const onFormSubmit = async (term) => {
        console.log("Search term submitted is: ", term)
        const res = await youtube.get('/search', {
            params:{
                q: term
            }
        })
        setVideos(res.data.items);
        setSelectedVideo(res.data.items[0])
    }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onFormSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail selectedVideo={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} setSelectedVideo={setSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;

// -------- class component-----------
// class App extends React.Component {
//     constructor(props){
//         super(props);  
//         this.state = {
//             videos: [],
//             selectedVideo: null
//         }
//     }

//     componentDidMount(){
//         this.onFormSubmit("jimin");
//     }
    
//     onFormSubmit = async (term) => {
//         console.log("Search term submitted is: ", term)
//         const res = await youtube.get('/search', {
//             params:{
//                 q: term
//             }
//         })
//         this.setState({
//             videos: res.data.items,
//             selectedVideo: res.data.items[0]
//         },()=>{
//             console.log(this.state.videos)
//         })
//     }

//     setSelectedVideo = (video) => {
//         console.log("In set selected video", video)
//         this.setState({
//             selectedVideo: video
//         })
//     }

//     render(){
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onFormSubmit}/>
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail selectedVideo={this.state.selectedVideo}/>
//                         </div>
//                         <div className="five wide column">
//                             <VideoList videos={this.state.videos} setSelectedVideo={this.setSelectedVideo}/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default App;