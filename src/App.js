import Home from "./Components/home";
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Shoppingchart from "./Components/shoppingchart";
import { useSelector,useDispatch } from 'react-redux'
import { Summation } from "./features/cart/slice";
import { useEffect } from "react";
import Specs from './Components/spec'
import Footer from './Components/footer';
import Form from "./Components/form";
import Faq from "./subFolder/faq";
import Sharedlayout from './sharedlayout'

const App = () => {
  const { bags } = useSelector(store => store.cart)
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(Summation())
  }, [bags]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sharedlayout/>}>
       <Route index element={<Home/>} /> 
       <Route path="chart" element={<Shoppingchart/>} /> 
        <Route path="form" element={<Form/>}/>
        <Route path="faq" element={<Faq/>}/>
        <Route path="/:id" element={<Specs/>}/>
        </Route>
    </Routes>

    </BrowserRouter>
    )
}
export default App;