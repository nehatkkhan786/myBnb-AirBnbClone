import React from 'react'
import {Box, Grid} from '@mui/material'
import {useState} from 'react'
import { locations } from '../data/mock-data' 
import CarousalCard from './CarousalCard'

const LocationCards = () => {
    const [cardlocations, setCardLocation] = useState(locations)
  return (
   <Box sx={{mx:2}}>
        <Grid container rowSpacing={3} columnSpacing={3}>
            {cardlocations?.map((card)=>{
                return (
                    <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                       <CarousalCard cardLocation={card}/>
                    </Grid>
                )
            })}
        </Grid>
   </Box>
  )
}

export default LocationCards