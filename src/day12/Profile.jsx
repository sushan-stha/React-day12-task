import { useSearchParams } from "react-router";
import "./Profile.css";

const Profile = ()=>{
    let [searchParams] = useSearchParams()
    let name = searchParams.get("name")
    let roll = searchParams.get("roll")
    return(
        <div className="profile-container">
            <div className="profile-wrapper">
                <h1>Profile</h1>
                <div className="profile-card">
                    <div className="profile-card-header">
                        <h2>{name || "User Profile"}</h2>
                        <span className="profile-badge">User Profile</span>
                    </div>
                    <div className="profile-card-body">
                        <div className="profile-info-group">
                            <label>Name</label>
                            <p>{name || "N/A"}</p>
                        </div>
                        <div className="profile-info-group">
                            <label>Roll</label>
                            <p>{roll || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;