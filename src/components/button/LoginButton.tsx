import { Button } from '@mui/material'
import React from 'react'

const LoginButton:React.FC = () => {
    return (
        <Button disableElevation disableRipple variant="text" sx={{background:'#ffea00',color:'rgba(0, 0, 0, 0.87)'}}> 
        ورود
      </Button> 
    )
}

export default LoginButton 
