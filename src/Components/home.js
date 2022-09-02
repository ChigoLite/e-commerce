import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux'
import Products from './products';
import { AppBar, Box, Button, ButtonGroup, Card, CardContent, Container, Grid, Stack, Toolbar, Typography,Paper} from '@mui/material'
import { ThemeProvider } from '@mui/material';
import Theme from '../theme';
import Nav from './nav';
import Trending from './trending';
import Modal from '../modal';
import SubMenu from './subMenu';
import {Filter} from '../features/cart/slice'


const Home = () => {
  const { goods, modal, submenu, current, total, bags, newcate,search } = useSelector(store => store.cart);
  const dispatch = useDispatch();
  return (
    <>
      
        <Nav />
      
        <Trending />
      {submenu && <SubMenu />}

        <br />
        <br />
        <br />
      <hr />
      <Stack direction='row' sx={{marginLeft:'0.6rem',marginTop:'2rem'}}>

  {newcate.map((data, index) => {
    return (
            <Paper  key={index}>
        <button className={`sort-btn`} onClick={()=>dispatch(Filter(data))}>
{ data}
        </button>

            </Paper>
            )
          
        })}
      </Stack>
          <Container sx={{ marginTop: '7rem' }}>
                <Grid container direction='row' justifyContent='center'
          alignItems='center'
        spacing={4}
              >
          {
            goods.filter(searchy => {
              if (search === '') {
                return searchy;
              }
              else if (searchy.name.toLowerCase().includes(search.toLowerCase())) {
                return searchy
              }
            }).map((items => {
                  return <Products key={ items.id} {...items} />
                }))}
                  </Grid>
        </Container>
      {modal && <Modal />} 

                </>
    
  );
}

export default Home;
