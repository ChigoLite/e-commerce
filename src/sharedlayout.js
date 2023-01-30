import { Outlet } from "react-router-dom"
import Footer from "./Components/footer"
import Nav from './Components/nav'

const Shared = () => {
    
    return (
        <>
            <div className="footer-nav">
                <Nav/>              
                <Outlet />
                <div className="footer"><Footer/></div>
        </div>
        </>
    )
}
export default Shared;