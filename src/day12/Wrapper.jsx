import { Outlet } from "react-router"
import MyNavbar from "./Navbar"

const Wrapper = ()=>{
    return(
        <div>
            <MyNavbar/>
            <Outlet/>
            <h6>This is wrapper footer</h6>
        </div>
    )
}
export default Wrapper;