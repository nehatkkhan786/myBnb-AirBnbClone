import React from 'react'
import {Box, Link, Button, Stack} from '@mui/material'
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const ProfileSettings = () => {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',}}>
        <Link href='#'>Become A Host</Link>
        <Stack>
            <Button>
                <LanguageRoundedIcon/>
            </Button>
            <Button sx={{borderRadius:10, border:'1px solid #ddd'}}>
                <Stack>
                    <MenuRoundedIcon/>
                    <PersonRoundedIcon sx={{ color:'#E95420'}}/>
                </Stack>
            </Button>
        </Stack>
    </Box>
  )
}

export default ProfileSettings