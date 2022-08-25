import React from 'react'

import SearchRounded from '@mui/icons-material/SearchRounded';
import { HeartBrokenRounded } from '@mui/icons-material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Box, Stack, Typography, Button } from '@mui/material';


const footerMenu = [
    { id: 1, text: 'Explore', icon: <SearchRounded size={18} /> },
    { id: 2, text: 'Wishlist', icon: <HeartBrokenRounded size={18} /> },
    { id: 3, text: 'Login', icon: <PersonOutlineIcon size={18} /> },
  ];
  

const MobileFooterMenu = () => {
  return (
   <Box sx={{display:'flex', justifyContent:'center', flexGrow:1}}>
       <Stack>
           {footerMenu.map((item)=>{
               return (
                   <Button key={item.id}>
                       <Stack sx={{justifyContent:'center', alignItems:'center'}} direction='column' spacing={1}>
                           {item.icon}
                           <Typography>{item.text}</Typography>
                       </Stack>
                   </Button>
               )
           })}
       </Stack>
   </Box>
  )
}

export default MobileFooterMenu