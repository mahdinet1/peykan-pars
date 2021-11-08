import { makeStyles } from '@material-ui/core'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { numberWithCommas } from '../../../utils/helper'
import BuyButton from '../../button/BuyButton'

interface Props{
    price:string,
    offer:number,
    id:number
}
const useStyles = makeStyles({
    priceLineThrough:{
    backgroundColor:'transparent',   
    backgroundImage: 'gradient(linear, 65.1% -47.9%, 81% 107.9%, color-stop(0, transparent), color-stop(.48, transparent), color-stop(.5, #000), color-stop(.52, transparent), color-stop(1, transparent))', 
    color:'#546e7a'
    }
})
const Buy:React.FC<Props> = ({price,offer,id}) => { 
    const priceNumber = parseInt(price)
    let newPrice:any =price
    if(offer){
     newPrice = (priceNumber-priceNumber*(offer/100)).toFixed(0)
    newPrice = newPrice.toString()  
    }
   
    const style = useStyles()
    return (
        <> 
            <Grid container justifyContent="space-around">
               {offer!== 0 && <Typography className={style.priceLineThrough}>  
                    {numberWithCommas(price)} ت
                </Typography>} 
                <Typography sx={{fontWeight:600}}> 
                    {numberWithCommas(newPrice)} ت
                </Typography>
            </Grid> 
             <Grid container justifyContent="flex-end" sx={{padding:'1% 10%',marginTop:'1rem'}}>
                <BuyButton id={id} />  
            </Grid>   
        </>
    )
}

export default Buy
