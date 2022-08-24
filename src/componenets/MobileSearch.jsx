import React from 'react'
import {Paper, InputBase, IconButton} from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
const MobileSearch = () => {
  return (
    <Paper component='form' sx={{
        display: 'flex', 
        alignItems:'center',
        p:'2px 4px',
        border: '1px solid #ccc',
        borderRadius:20,
        width:400,
    }}>
        <IconButton sx={{p:'10px'}}>
            <SearchRoundedIcon/>
        </IconButton>
        <InputBase sx={{ml:1, flex:1}} placeholder='Where to?'/>
        <IconButton type='submit' sx={{p:'10px'}}>
            <TuneRoundedIcon/>
        </IconButton>
    </Paper>
  )
}

export default MobileSearch