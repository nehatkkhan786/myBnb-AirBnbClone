import React from 'react'
import {Box, Button, Divider, Stack, Paper, Typography} from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { pink, grey } from '@mui/material/colors';



const choices = [
    {id:1, text:'Anywhere'},
    {id:2, text:'Any Week'},
    {id:3, text:'Add Guest', withIcon:true},
];

const LocationSearch = () => {
  return (
   <Paper sx={{borderRadius:15, ml:15}} elevation={3}>
    <Stack sx={{borderRadius:20, pl:2}} divider={<Divider orientation='vertical' flexItem/>}>
        {choices.map((item)=>{
            return (
                <Button key={item.id}>
                    <Typography sx={{
                        color:(theme) => theme.palette.text.primary,
                        fontWeight:'bold',
                    }}>
                    {item.text}
                    </Typography>
                    {item.withIcon  && (
                        <Box sx={{ml:1, mr:1, mt:1}}>
                            <SearchSharpIcon sx={{ color:'#E95420', fontSize:32}} />
                        </Box>
                    )}
                </Button>
            )
        })}
    </Stack>
   </Paper>
  )
}

export default LocationSearch