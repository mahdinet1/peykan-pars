import { Button } from "@mui/material";
import React, { useState,useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from '@mui/material/IconButton'
import { Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import {DataContext} from '../../context/DataContext'
interface Props{
  id:number
}
const BuyButton: React.FC<Props> = ({id}) => {
  
  const [changeBtn, setchangeBtn] = useState<boolean>(false);
  const [count, setcount] = useState<number>(0); 
  const [data, setdata] = useContext(DataContext)
  const product = data.find((row: { id: number | undefined; })=>row.id===id) 
  
  const clickHandler = ()=>{
      setchangeBtn(true)
  }
  const addHandler =(id:number)=>{
  
      const items = [...data] 
      const itemId =data.findIndex((row: { id: number; })=>row.id===id)  
      items[itemId].basket =  items[itemId].basket + 1
      setdata(items)  
  }
  const removerHandler=(id:number)=>{
    const items = [...data] 
    const itemId =data.findIndex((row: { id: number; })=>row.id===id)
    if(items[itemId].basket > 0)  
      items[itemId].basket =  items[itemId].basket - 1
    setdata(items)  
  }
  const deleteHandler = (id:number)=>{
    setchangeBtn(false) 
    const items = [...data] 
      const itemId =data.findIndex((row: { id: number; })=>row.id===id)  
      items[itemId].basket =  0
      setdata(items)  
  }
  return (
    <>
      {!changeBtn && <Button variant="text" sx={{ background: "#ffea00", color: "#aa9f9f" }} onClick={clickHandler}>
        <ShoppingCartIcon />
      </Button> }
      {changeBtn &&
       <Grid container justifyContent="">
          <Grid xs={2}>
            <IconButton onClick={()=>deleteHandler(id)} size="small" aria-label="delete" sx={{marginLeft:'1rem',color:'#c62828'}}>
                <DeleteIcon />
              </IconButton>
            </Grid>
            <Grid xs={8} sx={{display:'flex'}}> 
              <IconButton onClick={()=>addHandler(id)} size="small" aria-label="add" sx={{border:'1px solid #cfd8dc',borderRadius:'2px', marginLeft:'0.5rem'}}> 
                <AddIcon /> 
              </IconButton>
              <Button variant="outlined" disabled>{product.basket}</Button>
              <IconButton onClick={()=>removerHandler(id)} size="small" aria-label="remove" sx={{border:'1px solid #cfd8dc',borderRadius:'2px', marginRight:'0.5rem'}}>
                <RemoveIcon />
              </IconButton> 
            </Grid>
        </Grid>}
    </>
  );
};

export default BuyButton;
