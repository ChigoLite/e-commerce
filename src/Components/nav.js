import React,{useState} from 'react';
import { ThemeProvider,Stack, AppBar, Toolbar ,Badge, IconButton,Avatar, Drawer,Box, TextField,InputAdornment, Typography, Button} from '@mui/material';
import { FaShoppingBasket, FaBars,FaSearchengin, FaAdn } from 'react-icons/fa'
import{useSelector,useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Theme from '../theme';
import{Change} from '../features/cart/slice'
import FadeMenu from './tesing';
const Nav = () => {
  const { current,search } = useSelector(store => store.cart)
  const [draw, setDraw] = useState(false);
  const dispatch=useDispatch()
  return (
    <ThemeProvider theme={Theme}>
          
          <AppBar position='sticky'>
          <Toolbar variant='dense' sx={{height:'5rem'}}>
                  <div className="navCont">
            <NavLink to='/'>

            <div className="logo"><h4>B's VENDOR  </h4></div>
            </NavLink>

                 <div className='nav-info'>

          <NavLink to='/'>home</NavLink>
          <NavLink to='/faq'>faq</NavLink>
          <NavLink to='/services'>our services</NavLink>
          <NavLink to='/product'>products</NavLink>
            <NavLink to='/feedback'>feedbacks</NavLink>
            <NavLink to='/form'><Typography component='button'>sign up</Typography> </NavLink>
           
            </div>
            <div className="navText">
              <TextField  color='secondary' size='medium' variant='filled'
                InputProps={{
                  endAdornment: <InputAdornment position='start'>
                    <FaSearchengin className='svg-src' />
                
                  </InputAdornment>
                }}
                value={search}
                onChange={(e) => { dispatch(Change(e.target.value)) }}
              />
                      </div>
          </div>
          <div className="logocont">

            <NavLink to="/chart">
            
              <div><Badge color='secondary' badgeContent={ current}>
                <FaShoppingBasket />
              </Badge> </div>
            </NavLink>
            <div className='menu-btn'> <IconButton onClick={() => setDraw(true)}>
              
            
            <FaBars  />
            </IconButton></div>
          </div>
              </Toolbar>

      </AppBar>
      <Drawer  anchor='left' open={draw} onClose={()=> setDraw(false)} >
        <Box width='300px' role='presentation' sx={{marginTop:'2rem'}}>
        <div className="logo"><h4>B's VENDOR  </h4></div>
          <br />
          <hr />
          <br />
          <div className='drawer'>

          <NavLink to='/'>home</NavLink>
          <NavLink to='/faq'>faq</NavLink>
          <NavLink to='/services'>our services</NavLink>
          <NavLink to='/product'>products</NavLink>
            <NavLink to='/feedback'>feedbacks</NavLink>
          </div>
          <div className='sign'>
            <Button fullWidth> <NavLink  to="/form"><Typography>SIGN IN</Typography></NavLink></Button>
          </div>
</Box>
      </Drawer>
      </ThemeProvider>
        
  );
}

export default Nav;
