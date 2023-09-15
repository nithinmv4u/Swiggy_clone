import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import { useState } from "react";
import useBgColor from "../utils/useBgColor";

const About = () => {

    const [bgcolor, setBgcolor] = useState(null);
    return (
        <>
            <div style={{margin:'5%', textAlign:'center', backgroundColor: bgcolor}}>
                <h1>About Us</h1>
                <h3>This is a normal demo about us page... did you like it??????</h3>
                <Outlet/>
                <ProfileClass comp="First Component"/>
                {/* <ProfileClass comp="Second Component"/> */}
                <div style={{padding:'5%', border: '1px solid black'}}>
                    <h6>Background Color</h6>
                    <button onClick={()=>{
                        setBgcolor(useBgColor('red'));
                    }} key={0}>Red</button>
                    <button onClick={()=>{
                        setBgcolor(useBgColor('blue'))
                    }} key={1}>Green</button>
                    <button onClick={()=>{
                        setBgcolor(useBgColor('green'))
                    }} key={2}>Blue</button>
                </div>
            </div>  
        </>
                                                                                                 
    )
}

export default About;