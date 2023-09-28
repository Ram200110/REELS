import React from 'react'
/*material ui icons */
import {Button} from "@mui/material"

import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';


import "./Footer.css"



export default function Footer({channel,likes,comments,share}) {
  return (
    <div className="video-footer">
      <div className="footer-buttons">
        <div className="flex-box">
          <FavoriteIcon/>
          {likes}
        </div>        
        <div className="flex-box">
          <CommentIcon/>   
          {comments}    
        </div>
        {/* */}
        <div className="flex-box">
          <SendIcon/>
          {share}
        </div> 
        </div>
          <div className="video-text">
            <h3>{channel}:</h3>
            <h4 className='follow'>FOLLOW</h4>
        </div> 
    </div>
  )
}


