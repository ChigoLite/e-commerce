import { Avatar, Container,  Typography, ButtonGroup, Button,ThemeProvider, Fab, Grid } from '@mui/material';
import React from 'react';
import Nav from './nav';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import Theme from '../theme';
import { Increase, Decrease, Remove } from '../features/cart/slice';
import{AiFillDelete,AiFillPlusCircle,AiFillMinusCircle}from 'react-icons/ai'

const Shoppingchart = () => {
  const{bags,total,current}=useSelector((store)=>store.cart)
  const dispatch = useDispatch()
  
  if (current < 1) {
    
    return (
      <>
      <Nav /> 
      
      <div className="empty-cart">
          <h3>your cart is empty ....</h3>
          <div></div>
      </div>
      </>
    )
  }
  return (
    <ThemeProvider theme={Theme}>

    <>
      <Nav /> 
      
        <h4 className='cart-text'> review your order so far...procced to order.</h4>
        <hr />
      <Container sx={{ marginLeft:'1rem', marginTop: '3rem' }}>
        <hr />
        
        <Grid container direction='row' justifyContent='center'
alignItems='center'
spacing={4}>
          
          {bags.map((allp) => {
            const {image, name ,price,amount,id,}=allp
            return (
                 
                <Grid item sm={4} md={3} xs={6} key={id}  >
                  
<Avatar sx={{width:'6rem',height:'6rem'}} variant='rounded' src={image}></Avatar>
                <h3 className='cartname'>{name }</h3>
                <p className='cartprice' >${price}</p>
           
                <ButtonGroup>
                  <Button onClick={() => {
                    dispatch(Increase(id))
                  }}><AiFillPlusCircle  className='svg-adj'/></Button>
                  <Avatar variant='square'>{ amount}</Avatar>
                  <Button onClick={() => {
                    if (amount===1) {
                      dispatch(Remove(id))
                      return;
                    }
                       dispatch(Decrease(id))
                  }}><AiFillMinusCircle className='svg-adj'/></Button>
                </ButtonGroup>
                <Fab sx={{display:'block',marginLeft:'2.5rem',marginTop:'0.5rem'}} size='small' color='primary' onClick={() => {
                  dispatch(Remove(id))
                }}><AiFillDelete className='svg-trash' /></Fab>
                <hr />
                  </Grid>
                  
                  )
                })}
                </Grid>
        </Container>
        <div className='divide'></div>
        <p className='total'>total price: $<span>
      {total}  </span> </p>
      <br />
        <br />
        <Link to='/form'>
        <Button  variant='contained'> <Typography variant='body2' component='button'>Order Now.</Typography></Button>
        </Link>
      <br />
        <br />
        
    </>
    </ThemeProvider>
  );
}

export default Shoppingchart;
