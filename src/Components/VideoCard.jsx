import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  DemoVideoUrl,
  DemoVideoTitle,
  demoChannelUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  //  console.log(snippet.thumbnails.high.url);
  //  console.log(snippet.title);
  return <>
<Card sx={{backgroundColor:'#FCE700',}}>
<Link  to={videoId ? `/video/${videoId}` : demoVideoUrl}>
<CardMedia image={snippet?.thumbnails?.high?.url}
alt={snippet?.title} 
   sx={{width: 300, height: 150, }}         />
</Link>
{/* //first video row */}
<CardContent sx={{backgroundColor:"#1e1e1e", height:"80px"}}>
<Link   to={videoId ? `/video/${videoId}` : demoVideoTitle}>
<Typography sx={{variant: "subtitle2", fontWeight:"bold",color:"#fff"}}>
  {snippet?.title.slice(0,60) || demoChannelTitle.slice(0,60)}
</Typography>
</Link>

{/* //second video row */}
<Link   to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl}>
<Typography sx={{variant: "subtitle1", fontWeight:"bold",color:"Gray"}}>
  {snippet?.channelTitle || demoChannelTitle}
  <CheckCircle sx={{fontSize:15, color: 'blue', ml:"5px"}}/>
</Typography>
</Link>



</CardContent>



</Card>
</>;
};

export default VideoCard;
//width: 356, height: 260