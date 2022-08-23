import React from 'react'
import {Box, Typography} from '@mui/material';
import { pink, grey } from '@mui/material/colors';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';

const Logo = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',}}>
        <AirplanemodeActiveRoundedIcon size={40} color={pink[500]}/>
        <Typography sx={{
          ml:1,
          color: theme => theme.palette.secondary.main,
          fontSize:'20px',
          fontWeight:'bold',
        }}>
          myBnb
        </Typography>
    </Box>
  )
}

export default Logo