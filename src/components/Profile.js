import React from "react";
import { useEffect } from "react";

const Profile = () => {
    useEffect(() => {
        const timer = setInterval(()=>{
            console.log("setting...");
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[]);
    return(
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default Profile;