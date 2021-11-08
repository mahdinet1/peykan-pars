import { makeStyles } from "@material-ui/core";
import { Paper,Grid, Typography } from "@mui/material";
import React from "react";

interface Props{
    productName?:string,
    description?:string,
    children?:any,
    offer:number,
    image?:any  
}
const useStyles = makeStyles({
  img: {
    maxWidth: "50%",
    marginTop:50
  },
  image: {
    width: "100%", 
    height: "100%",
  },
  child:{
    marginTop:20, 
    textAlign:'center',
    width:'100%'
  },
  container:{
    padding:'13px 0',
    position:'relative',
    cursor:'pointer'
    
  }
});
const Card: React.FC<Props> = ({productName,description,children,offer,image}) => { 
  const style = useStyles();
  
  return (
    <Paper elevation={0}> 
      <Grid container alignItems="center" direction="column" className={style.container}> 
      {(offer!==0) && <Paper  elevation={0} sx={{background:'#e64a19',position:'absolute',padding:'5px 15px',left:10,color:'#fff',fontWeight:'500',fontSize:'0.8rem'}}>%{offer} تخفیف</Paper>} 
        <div className={style.img}> 
          <img src={image} alt="Remy sharp" className={style.image} />
        </div>
        <div>  
            <Typography  sx={{fontWeight:"500"}}>  
               {productName}
            </Typography>
            <Typography sx={{fontSize:'0.9rem'}}>
               {description}
            </Typography>
        </div>
        <div className={style.child}>
          {children}
        </div>
      </Grid>
    </Paper>
  );
};

export default Card;
