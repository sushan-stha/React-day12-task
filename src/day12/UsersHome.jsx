import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./UsersHome.css";

const UsersHome = ()=>{
    let location = useLocation()
    let data = location.state || "No data received"
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    let fetchUsers = async()=>{
        try {
            let res = await axios("https://jsonplaceholder.typicode.com/users")
            console.log("Fetched users data: ", res.data)
            setUsers(res.data)
        } catch(error) {
            console.error("Error fetching users:", error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(
        ()=>{
            fetchUsers()
        },
        []
    )
    let navigate = useNavigate()
    return(
        <div className="users-home-container">
            <div className="users-home-header">
                <h1>Users Directory</h1>
                <p className="welcome-text">Welcome to the Users Home page!</p>
                {data !== "No data received" && <p className="data-info">📬 {data}</p>}
            </div>
            
            {loading ? (
                <div className="loading-state">
                    <p>Loading users...</p>
                </div>
            ) : (
                <div className="users-grid">
                    {
                        users.map(
                            (u)=>{
                                return(
                                    <div 
                                        key={u.id} 
                                        className="user-card"
                                        onClick={()=>{
                                            navigate(`/user/${u.id}`)
                                        }}
                                    >
                                        <div className="user-card-number">
                                            #{u.id}
                                        </div>
                                        <div className="user-card-content">
                                            <h3 className="user-name">{u.name}</h3>
                                            <p className="user-username">@{u.username}</p>
                                            <p className="user-email">
                                                <span className="email-icon">✉</span>
                                                {u.email}
                                            </p>
                                            <p className="user-phone">
                                                <span className="phone-icon">☎</span>
                                                {u.phone}
                                            </p>
                                            <p className="user-company">
                                                <span className="company-icon">🏢</span>
                                                {u.company?.name}
                                            </p>
                                        </div>
                                        <div className="user-card-footer">
                                            <span className="view-details">View Details →</span>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            )}
        </div>
    )
}
export default UsersHome;