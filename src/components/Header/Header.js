import React from 'react'

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import CameraAltIcon from "@mui/icons-material/CameraAlt";


import "./Header.css";
function Header() {
  return (
    <div className="video-header">
    <ArrowBackIosIcon/>
    <h3>REELS</h3> 
    <CameraAltIcon/>
    </div>
  )
}

export default Header
