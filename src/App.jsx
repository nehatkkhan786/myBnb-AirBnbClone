import React from 'react'
import {Box, CssBaseline} from '@mui/material'
import Header from './componenets/Header'
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
    </Box>
    </>
  )
}

export default App
