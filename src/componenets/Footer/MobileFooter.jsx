import { Box, Button, Link, Paper, Stack } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public';

const footerLinks = [
    { id: 1, text: 'Privacy', url: '#' },
    { id: 2, text: 'Terms', url: '#' },
    { id: 3, text: 'Sitemap', url: '#' },
  ];

const MobileFooter = () => {
  return (
   <Box sx={{ borderTop: '1px solid #ddd', mt:3, pt:3, width:'100%',}}>
       <Paper>
           <Button>
               <Box sx={{display:'flex', justifyContent:'center', me:1}}>
                    <PublicIcon size={24}/>
               </Box>
               English (IN)
           </Button>
           <Button>&#8377; INR</Button>
       </Paper>
       <Stack sx={{mt:2}}>
            <Paper>
                <Link href='#'>2022 myBnb Copyright Inc</Link>
            </Paper>
       </Stack>
       <Stack sx={{mt:2}}>
            {footerLinks.map((item)=>{
                return (
                    <Paper key={item.id}>
                        <Link href='item.url'>{item.text}</Link>
                    </Paper>
                )
            })}
       </Stack>
   </Box>
  )
}

export default MobileFooter