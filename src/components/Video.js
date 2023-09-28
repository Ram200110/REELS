import React,{useRef,useState,} from 'react'

//import components
import Header from "./Header/Header";

import Footer from "./Footer/Footer";
//import media
import "./vedio.css";




export default function Video({channel,likes,comments,url,share}) {

    const [isVideoPlaying, setisVideoPlaying] = useState(false)

    const vidRef = useRef()

    const onVideoClick = () => {
        if (isVideoPlaying){
            vidRef.current.pause();
            setisVideoPlaying(false);
        }else{
            vidRef.current.play();
            setisVideoPlaying(true);
         }
    
    };


  return (
    
      <div className= "viedo-play">
        <Header/>
        <video 
        onClick={onVideoClick}
        className="video-player"
        ref={vidRef}
        src={url}
        loop 
        />
        
        <Footer 
        /*footer display number count  */
        channel={channel} 
        likes={likes}
         comments={comments} 
         url={url}
         share={share}/>
       </div>
      
  )
}

