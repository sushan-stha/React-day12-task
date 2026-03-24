import { Link } from "react-router"

const MyNavbar = ()=>{
    return(
        <div className="navbar">
            <h1>My Navbar</h1>
            <Link to={"/"}>User Home</Link>
            <span>&nbsp;&nbsp;</span>
            <Link to={"/profile?name=dipak&&roll=34"}>Profile</Link>
            <span>&nbsp;&nbsp;</span>
            <Link to={"/user/3847384"}>User Details</Link>
        </div>
    )
}
export default MyNavbar;