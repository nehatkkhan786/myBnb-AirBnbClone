import React from 'react'
import {Box, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom'

import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';

const Logo = () => {
  // const navigate = useNavigate();
  
  return (
    <Box  sx={{display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer'}}>
        <AirplanemodeActiveRoundedIcon sx={{color:'#E95420', fontSize:40}}/>
        <Typography sx={{
          ml:1,
          // color: theme => theme.palette.secondary.main,
          color: '#E95420',
          fontSize:'30px',
          fontWeight:'bold',
        }}>
          Travelicious
        </Typography>
    </Box>
  )
}

export default Logo