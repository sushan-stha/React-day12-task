import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./UserDetails.css";

const UserDetails = ()=>{
    // useParams is a hook provided by react-router to access the dynamic parameters in the URL
    let {userid} = useParams()
    let navigate = useNavigate()
    let goToHome = ()=>{
        navigate("/", {
            state: "Data from User Details page",
        })
    }
    let [userDetails, setUserDetails] = useState({})
    let [loading, setLoading] = useState(true)
    let fetchUserDetails = async()=>{
        try {
            let res = await axios("https://jsonplaceholder.typicode.com/users/"+userid)
            console.log("Fetched user details: ", res.data)
            setUserDetails(res.data)
        } catch(error) {
            console.error("Error fetching user details:", error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(
        ()=>fetchUserDetails(),
        [userid]
    )
    return(
        <div className="user-details-container">
            <div className="user-details-wrapper">
                <h1>User Details</h1>
                {loading ? (
                    <div className="loading">Loading user details...</div>
                ) : (
                    <div className="user-card">
                        <div className="user-card-header">
                            <h2>{userDetails.name || "User"}</h2>
                            <span className="user-id">ID: {userid}</span>
                        </div>
                        <div className="user-card-body">
                            <div className="user-info-group">
                                <label>Email</label>
                                <p>{userDetails.email || "N/A"}</p>
                            </div>
                            <div className="user-info-group">
                                <label>Username</label>
                                <p>{userDetails.username || "N/A"}</p>
                            </div>
                            <div className="user-info-group">
                                <label>Phone</label>
                                <p>{userDetails.phone || "N/A"}</p>
                            </div>
                            <div className="user-info-group">
                                <label>Website</label>
                                <p>{userDetails.website || "N/A"}</p>
                            </div>
                            <div className="user-info-group">
                                <label>Company</label>
                                <p>{userDetails.company?.name || "N/A"}</p>
                            </div>
                            <div className="user-info-group">
                                <label>Address</label>
                                <p>
                                    {userDetails.address?.street}, {userDetails.address?.city} || "N/A"
                                </p>
                            </div>
                        </div>
                        <div className="user-card-footer">
                            <button className="btn-home" onClick={goToHome}>Go to Home</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default UserDetails;