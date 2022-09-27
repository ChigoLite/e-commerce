import{Container, FormControl, FormLabel, Paper, Radio, RadioGroup, Stack, TextField, Typography, FormControlLabel, Checkbox, Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle
}from '@mui/material'
import { FaChevronLeft} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Nav from './nav';
import { useSelector, useDispatch } from 'react-redux'
import{HandleChange1,HandleChange2,HandleChange3,HandleChange4,HandleChange5,HandleChange6,HandleChangeAll,Show,Hide} from '../features/cart/formSlice'
const Form = () => {
    const{ firstname,
    lastname,
    email,
    number,
    postcode,
    state,open}=useSelector(store=>store.form) 
    const dispatch = useDispatch()
 
    return (
        <>
            <Nav/>
    <Container>
          <Paper>
              <Typography sx={{ textAlign: 'center', textTransform: 'uppercase' }} variant='h4' component='div' gutterBottom>fill out your address for delivery.</Typography>
              <br />
              <br />
              <Link to='/'><FaChevronLeft/> </Link>
              <hr />
              <br />
              <Stack
                  sx={{display:{md:'dispay'},justifyContent:"center",alignItem:'center'}} direction='row' spacing={3}>
                  
              <TextField value={firstname} onChange={(e)=>{dispatch(HandleChange1(e.target.value))} }  label='Firstname' required  />
              <TextField value={lastname} onChange={(e)=>{dispatch(HandleChange2(e.target.value))}}  label='Lastname' required />
              </Stack>
              <Stack
                  sx={{display:{md:'dispay'},justifyContent:"center",alignItem:'center',marginTop:2}} direction='row' spacing={3} >
                  
              <TextField value={email} onChange={(e)=>{dispatch(HandleChange3(e.target.value))} }  label='Email' type='email'  required  />
              <TextField value={number} onChange={(e)=>{dispatch(HandleChange4(e.target.value))} }  label='Number' required type='number'  />
              </Stack>
              <Stack
                  sx={{display:{md:'dispay'},justifyContent:"center",alignItem:'center',marginTop:2}} direction='row' spacing={3} >
                  
              <TextField value={postcode} onChange={(e)=>{dispatch(HandleChange5(e.target.value))} }  label='PostCode' type='number'  required  />
              <TextField value={state} onChange={(e)=>{dispatch(HandleChange6(e.target.value))}}  label='State' required  />
              </Stack>
              <Stack sx={{marginLeft:3,marginTop:2}} spacing={2} direction='row'>
                  
              <FormControl>
                  <FormLabel id='radio'>Gender</FormLabel>
                  <RadioGroup  aria-labelledby='radio' row >
                      <FormControlLabel size='small' control={<Radio/>  }label='male' value='male'  />
                      <FormControlLabel size='small' control={<Radio/>  }label='female' value='female'  />
                  </RadioGroup>
              </FormControl>
</Stack>
              <Stack sx={{marginLeft:3,marginTop:2}} spacing={2} direction='row'>
                  
                      <FormControlLabel control={<Checkbox/>}label=' I Accept The Terms And Condition.'  />
                    
                    </Stack>
                  
                    <br />
                    <Button onClick={()=>dispatch(Show())} fullWidth variant='contained'><Typography sx={{textAlign:'center'}} variant='h4' component='div'>Submit</Typography></Button>
                </Paper>
            

    <div>
    
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are You Sure You Want To Submit?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           Check your information well, in other to avoid delay or deny delivery...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
                            <Button onClick={() => {
                                dispatch(HandleChangeAll());
                                dispatch(Hide());
                            } } autoFocus>Continue</Button>
          <Button onClick={()=>dispatch(Hide())} >
            Discard
          </Button>
        </DialogActions>
      </Dialog>
    </div>
            </Container>
      
      </>
  );
}

export default Form;
