import React from 'react';
import { Closesub} from '../features/cart/slice'
import{useDispatch} from 'react-redux'
const SubMenu = () => {
  const dispatch = useDispatch()
  const handle = () => {
    dispatch(Closesub())
  }
  return (
    <div onClick={handle} className='submenu-cont'>
      <div className="submenu">

      <p className='sub-text'>already in chart.</p>
      </div>
    </div>
  );
}

export default SubMenu;
