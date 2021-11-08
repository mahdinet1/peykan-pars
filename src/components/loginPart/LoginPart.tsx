import { Typography } from '@mui/material'
import React from 'react'
import LoginButton from '../button/LoginButton'

const LoginPart:React.FC = () => {
    return (
        <>
            <Typography color="primary">
                برای مشاهده قیمت ابتدا وارد شوید
            </Typography>  
            <LoginButton /> 
        </>
    )
}

export default LoginPart
