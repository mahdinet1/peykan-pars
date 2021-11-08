import { Button, Container, Grid } from "@mui/material";
import React, { useState, useContext,useEffect } from "react";
import { partsData } from "../../api/data";
import { DataContext } from "../../context/DataContext";
import BuyInfo from "../buyInfo/BuyInfo";
import Card from "../card/Card";
import LoginPart from "../loginPart/LoginPart";
const ProductsList: React.FC = () => {
  const [loggedIn, setloggedIn] = useState<boolean>(false);  
  const [data, setdata] = useContext(DataContext)
  useEffect(() => {
    
    setdata(partsData) 
  }, [])
  return ( 
    <>
    {/* its for test */}
    <Button variant="contained" onClick={()=>setloggedIn(true)}> logge in</Button> 
     {/*-----------------------------------------------------------------------------  */}
 
    <Container maxWidth="xl" sx={{ background: "#ECEDEF", padding: "10px 0" }}>
      <Grid container spacing={2} justifyContent="center" >
        {data.map((el: { id: number; proName: string; text: string ; offer: number; image: any; existense: boolean ; price: string; })=>{
          return( 
            <Grid item xs={10} sm={5} md={3} key={el.id}>
              <Card  productName={el.proName} description={el.text} offer={el.offer} image={el.image}>
            {!loggedIn ?  <LoginPart />:<BuyInfo exist={el.existense} offer={el.offer}  price={el.price} id={el.id}  />}
          </Card>  
        </Grid> 
          ) 
        })}
      </Grid>
    </Container>
    </>
  );
};

export default ProductsList;
