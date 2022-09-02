import { Paper,Container, Grid } from '@mui/material';
import React,{useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import{FaAngleLeft} from 'react-icons/fa'
import Nav from './nav';
import { useSelector } from 'react-redux';
const Chart = () => {
  const{goods}=useSelector(store=>store.cart)
  const { id } = useParams()
  const [cont, setCont] = useState([]);

  useEffect(() => {
    

    const specs = goods.find((items) => items.id === parseInt(id))
  
    setCont([...cont,specs])
  },[])
  return (
    <>
      <Nav />

      <Container>
        
        <Paper sx={{ marginTop: '2rem' }} elevation={6}>
          {cont.map((each) => {
            const { id,category, descrip, image, name, price, size } = each;
            return (
              
          <div key={id} className='spec'>
                <div className='spec-img'>
                  <img src={image} alt={image} />
                  <Link to='/'><FaAngleLeft className='svg-arrow'/></Link>
                
                </div>
                <div className='spec-title'>
                  <h4>name: {name}</h4>
                  <h5> category: {category }</h5>
                  <h6>price : ${price}</h6>
                  <h5>size: {size }</h5>
                  <p>description: {descrip }</p>
            </div>
         </div>
            )
          })}
     </Paper>
</Container>
    </>
  );
}

export default Chart;
