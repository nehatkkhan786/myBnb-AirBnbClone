import React from 'react'
import {Box, Container, Stack, Paper, Link, Button} from '@mui/material'
import PublicIcon from '@mui/icons-material/Public';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

const footerLinks = [
    { id: 1, text: 'Privacy', url: '#' },
    { id: 2, text: 'Terms', url: '#' },
    { id: 3, text: 'Sitemap', url: '#' },
    { id: 4, text: 'Destinations', url: '#' },
  ];

const Footer = () => {
  return (
   <Box sx={{display:'flex', width:'100%', borderTop:'1px solid #ddd'}}>
        <Container maxWidth='xl'>
            <Box sx={{ width:'100%', display:'flex', justifyContent:{xs:'center', md:'space-between'}, alignItems:'center' }}>

                <Stack>
                    <Paper>
                        <Link href='#'>2022 myBnb Copyright</Link>
                    </Paper>
                    {
                        footerLinks.map((item)=>{
                            return (
                                <Paper>
                                    <Link href='item.url'>{item.text}</Link>
                                </Paper>
                            )
                        })
                    }
                </Stack>

                <Stack>
                    <Paper sx={{display:'flex', justifyContent:'center'}}>
                        <Button>
                            <Box sx={{display:'flex', justifyContent:'center', mr:1}}>
                                <PublicIcon size={24}/>
                            </Box>
                            English IN
                        </Button>
                        <Button>&#8377;INR</Button>
                        <Button>
                            Support and Resources
                            <Box sx={{display:'flex', justifyContent:'center', ml:1}}>
                                <ContactSupportOutlinedIcon size={24}/>
                            </Box>
                        </Button>
                    </Paper>
                </Stack>


            </Box>
        </Container>
   </Box>
  )
}

export default Footer