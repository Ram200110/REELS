import React from 'react'
import Video from "./components/Video";
import play from "./vedio/play.mp4";
import speak from "./vedio/speak.mp4";
import  tea from "./vedio/tea.mp4";
import  travel from "./vedio/bus.mp4";
import farewell from "./vedio/farewell.mp4";
import cook from "./vedio/cook.mp4";
import bazar from "./vedio/bazar.mp4";


import "./App.css";
export default function App() {

  const data = [{channel:"sports",
   likes:"60",
    comments:"20",
     url: play,
     share:"12"

  },
  {
  channel:"speech",
  likes:"90",
   comments:"20",
    url: speak,
  share:"80"},
  {
    channel:"entertainment",
   likes:"180",
    comments:"70",
     url: tea,
     share:"190"
  },
  {
    channel:"cooking",
    likes:"159",
     comments:"20",
      url:cook,
      share:"78"}
      ,{
  channel:"TRAVEL",
  likes:"80",
   comments:"60",
    url: travel,
    share:"70"},
    {
    channel:"EVENT",
    likes:"159",
     comments:"20",
      url: bazar,
      share:"45"},
      {
      channel:"college",
      likes:"187",
       comments:"20",
        url: farewell,
        share:"49"}]
  return (
<div className="App">
  
            <center>
        
      <div className="video-container">
        {/* */}
        {data.map((list,i) => (
           <Video 
           key={i}
           channel={list.channel}
            likes={list.likes}
             comments={list.comments}
              url={list.url}
              share={list.share}
              className='videos'/>
        ))}
       
              {/* */}
         
    </div>
    </center>
    </div>
    
    
  );
}
