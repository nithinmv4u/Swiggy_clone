import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";

const About = () => {
    return (
        <>
            <div style={{margin:'5%', textAlign:'center'}}>
                <h1>About Us</h1>
                <h3>This is a normal demo about us page... did you like it??????</h3>
                <Outlet/>
                <ProfileClass comp="First Component"/>
                <ProfileClass comp="Second Component"/>
            </div>  
        </>
                                                                                                 
    )
}

export default About;