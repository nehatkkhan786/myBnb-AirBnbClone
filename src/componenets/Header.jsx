import React from 'react'
import Logo from './Logo'
import {Box, Container} from '@mui/material'
import LocationSearch from './LocationSearch'
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
                <Logo/>
                <LocationSearch/>
            </Box>

        </Container>

    </Box>
  )
}

export default Header