import { Typography } from '@mui/material'
import React from 'react'
import PreBuyButton from '../../button/PreBuyButton'

const PreBuy:React.FC = () => { 
    return (
        <>
            <Typography color="primary">
                موجود نیست
            </Typography>
            <PreBuyButton />   
        </>
    )
}

export default PreBuy
