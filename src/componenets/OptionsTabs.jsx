import React, { useState } from 'react'
import {Box, Tabs, Tab, Container, Button} from '@mui/material'
import SortIcon from '@mui/icons-material/Sort';
import { LocationTab } from '../data/mock-data';



const OptionsTabs = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) =>{
        setValue(newValue);
    }
  return (
     <Container maxWidth='xl'>
            <Box sx={{display:'flex', flexGrow:1, alignItems:'center', mt:2, mb:2, p:{xs:0, md:2}}}>
                <Tabs value={value} onChange={handleChange} variant='scrollable' scrollButtons='auto'>
                    {LocationTab.map((item)=>{
                        return (
                            <Tab key={item.id} label={item.lable} icon={item.icon}/>
                        )
                    })}
                </Tabs>
                <Button sx={{
                    display:{xs:'none', md:'flex'},
                   justifyContent:'space-between',
                   minWidth:90,
                   border: '1px solid #ddd',
                   borderRadius:2,
                   textTransform:'capitalize',
                   py:1,
                   color: 'theme.palette.text.primary'

                }}>
                    <SortIcon/> Filters
                </Button>
            </Box>
     </Container>   
  )
}

export default OptionsTabs