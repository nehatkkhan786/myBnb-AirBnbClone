import React from 'react'
import Logo from './Logo'
import {Box, Container} from '@mui/material'
import LocationSearch from './LocationSearch'
import ProfileSettings from './ProfileSettings'
import MobileSearch from './MobileSearch'
const Header = () => {
  return (
    <Box sx={{
        minHeight:70,
        borderBottom: '1px solid #ddd',
        display: 'flex',
        flexDirection:'row',
    }}>

        <Container maxWidth='xl'>
            <Box sx={{
                display:'flex',
               flexDirection:'col',
               justifyContent: { xs: 'center', md: 'space-between' }, 
               alignItems:'center',
               minHeight:70, 
               px:4,
            }}>
                <Box sx={{display:{xs:'none', md:'block' }}}>
                    <Logo/>
                </Box>
                <Box  sx={{display:{xs:'none', md:'block' }}}>
                    <LocationSearch/>
                </Box>
               <Box  sx={{display:{xs:'none', md:'block' }}} >
                <ProfileSettings/>
               </Box>
               <Box  sx={{display:{xs:'flex', md:'none' }}}>
                 <MobileSearch/>
               </Box>
               
            </Box>

        </Container>

    </Box>
  )
}

export default Header