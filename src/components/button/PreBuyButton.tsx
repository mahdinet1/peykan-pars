import { Button } from '@mui/material'
import React from 'react'

const PreBuyButton:React.FC = () => {
    return (
        <Button disableElevation  variant="text" sx={{background:'#b3e5fc',color:'#0d47a1',padding:'10px 35px',fontWeight:500,marginTop:'1.1rem'}}> 
            پیش خرید کنید
      </Button> 
    ) 
}

export default PreBuyButton 
