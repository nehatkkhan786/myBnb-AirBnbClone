import React, { useState } from 'react'
import {Box, Button, Typography} from '@mui/material'
import MobileStepper from '@mui/material/MobileStepper';

// Icons
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// Third Party
import SwipeableViews from 'react-swipeable-views';


const CarousalCard = ({cardLocation}) => {

    const [activeStep, setActiveSteps] = useState(0)
    const maxSteps = cardLocation.locationImages.length;

    const handleNext = ()=>{
        setActiveSteps((prevStep)=>prevStep + 1)
    }

    const handleBack = ()=>{
        setActiveSteps((prevStep)=>prevStep - 1)
    }

    const handleStateChange = (step)=>{
        setActiveSteps(step)
    }

  return (
    <Box sx={{flexGrow:1, position:'relative'}} className='carousal'>
        <Box sx={{position:'absolute', right:10, top:10, zIndex:10}}>
            <FavoriteBorderIcon size={24} color='#fff'/>
        </Box>
        {cardLocation.locationImages.length > 0 && (
            <SwipeableViews axis={'x'} index={activeStep} onChangeIndex ={handleStateChange} enableMouseEvents>
                    {cardLocation?.locationImages?.map((step, index)=>{
                        return (
                            <div key={step.id}>
                                <Box component='img' sx={{height:275, display:'block', overflow:'hidden', width:'100%', borderRadius:3}} src={step.url} alt={step.id}>

                                </Box>
                            </div>
                        )
                    })}
            </SwipeableViews>
        )}

        <Box sx={{position:'absolute', bottom:100, width:'100%'}}>
            <MobileStepper  
            
            sx={{backgroundColor:'transparent'}}
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            nextButton ={
                <Button size='small' onClick={handleNext} disabled={activeStep === maxSteps - 1} sx={{ color: '#fff', backgroundColor: '#000',opacity: 0.5,borderRadius: 10,p: 1,minWidth: 'auto',}}>
                    <KeyboardArrowRight/> 
                </Button>
            }
            backButton ={
                <Button size='small' onClick={handleBack} disabled={activeStep === 0}
                sx={{ color: '#fff', backgroundColor: '#000',opacity: 0.5,borderRadius: 10,p: 1,minWidth: 'auto',}}
                >
                    <KeyboardArrowLeft/> 
                </Button>
            }
            />
        </Box>

        <Box sx={{display:'flex', justifyContent:'space-between'}}>
            <Box sx={{mt:2}}>
                <Typography component='h3'>{cardLocation.location}</Typography>
                <Typography component='h3'>{cardLocation.days}</Typography>
                <Typography component='h3'>{cardLocation.price}</Typography>
            </Box>
            <Box sx={{mt:2}}>
                <Box sx={{display:'flex', flexDirection:'row'}}>
                    {cardLocation?.isNew ? (
                        <>
                        <Typography component='h5'>New</Typography>
                        <StarBorderIcon size={18}/>
                        </>
                    ) : (
                        <>
                            <Typography component='h5'>{cardLocation.rating}</Typography>
                            <StarBorderIcon size={18}/>
                        </>
                    )}
                </Box>
            </Box>
        </Box>
        

    </Box>
  )
}

export default CarousalCard