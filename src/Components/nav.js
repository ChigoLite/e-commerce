import React,{useState} from 'react';
import { ThemeProvider,Stack, AppBar, Toolbar ,Badge, IconButton,Avatar, Drawer,Box, TextField,InputAdornment, Typography, Button} from '@mui/material';
import { FaShoppingBasket, FaBars,FaSearchengin, FaAdn } from 'react-icons/fa'
import{useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
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
            <Link to='/'>

            <div className="logo"><h4>B's VENDOR  </h4></div>
            </Link>

                 <div className='nav-info'>

          <Link to='/'>home</Link>
          <Link to='/faq'>faq</Link>
          <Link to='/services'>our services</Link>
          <Link to='/product'>products</Link>
            <Link to='/feedback'>feedbacks</Link>
            <Link to='/form'><Typography component='button'>sign up</Typography> </Link>
           
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

            <Link to="/chart">
            
              <div><Badge color='secondary' badgeContent={ current}>
                <FaShoppingBasket />
              </Badge> </div>
            </Link>
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

          <Link to='/'>home</Link>
          <Link to='/faq'>faq</Link>
          <Link to='/services'>our services</Link>
          <Link to='/product'>products</Link>
            <Link to='/feedback'>feedbacks</Link>
          </div>
          <div className='sign'>
            <Button fullWidth> <Link  to="/form"><Typography>SIGN IN</Typography></Link></Button>
          </div>
</Box>
      </Drawer>
      </ThemeProvider>
        
  );
}

export default Nav;
