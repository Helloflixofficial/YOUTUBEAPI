import React from 'react';
import { Stack, Box } from '@mui/system';
import {ChannelCard , VideoCard} from './IExport';

const Videos = ({ videos }) => {
  return (
  <Stack diraction="row" flexWrop="wrap" justifyContent="start" gap={2}> 
{videos.map((item, idx) => (
<Box key={idx}>

{item.id.videoId && <VideoCard video={item}/>}









{/* {item.id.channelId && <ChannelCard channelDetail={item}/>} */}
</Box>
))}
    </Stack>
  )
}
export default Videos