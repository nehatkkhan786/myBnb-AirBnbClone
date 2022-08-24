import React from 'react'
import {Box, CssBaseline, Container} from '@mui/material'
import Header from './componenets/Header'
import OptionsTabs from './componenets/OptionsTabs'
import LocationCards from './componenets/LocationCards'





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
      <Container maxWidth='xl' sx={{mb:3}}>
          <LocationCards/>
      </Container>
    </Box>
    </>
  )
}

export default App
