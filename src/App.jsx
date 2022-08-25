import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './componenets/Header'
import OptionsTabs from './componenets/OptionsTabs'
import LocationCards from './componenets/LocationCards'
import Footer from './componenets/Footer/Footer'

function App() {
  return (
    <>
    <CssBaseline/>
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      height: '100vh'
    }}>
      <Header/>
      <OptionsTabs/>
      <Box sx={{ display:'flex', flexDirection:'column', height:'100', overflowY:'scroll'}}>
        <Container maxWidth='xl' sx={{mb:3}}>
            <LocationCards/>
        </Container>
      </Box>
      <Box>
        <Footer/>
      </Box>
    </Box>
    </>
  )
}

export default App
