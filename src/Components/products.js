import { Button, Card, CardActions, CardContent, CardMedia, Grid,Menu,MenuItem,Popover,ThemeProvider, Typography } from '@mui/material';
import React,{useState} from 'react';
import Theme from '../theme';
import { Addtochart ,} from '../features/cart/slice'
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../store';
import { Link } from 'react-router-dom';


const Products = ({ name, image, descrip, id, category, price }) => {
  const dispatch = useDispatch()
 const{submenu}=useSelector(store=>store.cart)
  return (
    <ThemeProvider theme={Theme}>
          <Grid item sm={6} md={4} xs={12} >
              <Card>
                  <CardMedia><img src={image} alt="beach" /></CardMedia>
                  <CardContent>
                      <h5 className='name'>{name}</h5>
                      <p className='price'>${price }</p>
        </CardContent>
        <CardActions>
            <Button variant='contained' onClick={() => {
              dispatch(Addtochart(id));
            }} 
            
            >
              
              <Typography variant='button'>Add to chart</Typography>

            </Button>
          <Button color='primary' variant='contained'><Link className='spec' to={`/${id}`}> <Typography variant='button'>Spec</Typography> </Link> </Button>
        </CardActions>
              </Card>
    </Grid>
       
    
    </ThemeProvider>
    
  );
}

export default Products;
