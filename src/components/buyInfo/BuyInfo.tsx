import React from 'react'
import Buy from './Buy/Buy'
import PreBuy from './preBuy/preBuy'
interface Props{
    exist?:boolean,
    offer:number,
    price:string,
    id:number
}
const BuyInfo:React.FC<Props> = ({exist,price,offer,id}) => {
    return (
        <>
          {!exist ? <PreBuy />:<Buy price={price} offer={offer} id={id} />}  
        </>
    )
}

export default BuyInfo
