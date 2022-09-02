import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Closetoogle} from './features/cart/slice'
const Modal = () => {
    const{modal}=useSelector((store)=>store.cart)
    const dispatch=useDispatch()
    useEffect(() => {
        setTimeout(() => {
           dispatch(Closetoogle()) 
        }, 3000);
    },[modal])
  return (
    <div className='modaltxt' >
     <p> item added.</p> 
    </div>
  );
}

export default Modal;
