import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import { useState } from "react";
import useBgColor from "../utils/useBgColor";

const About = () => {

    const [bgcolor, setBgcolor] = useState(null);
    return (
        <>
            <div className={`bg-[${bgcolor}] p-4 m-4 flex flex-col items-center`}>
                <h1>About Us</h1>
                <h3>This is a normal demo about us page... did you like it??????</h3>
                <Outlet/>
                <ProfileClass comp="First Component"/>
                {/* <ProfileClass comp="Second Component"/> */}
                <div className="bg-neutral-300 p-2 m-2">
                    <h6>Choose Background Color</h6>
                    <button className="rounded-l-lg bg-[red] p-1 m-1" onClick={()=>{
                        setBgcolor(useBgColor('red'));
                    }} key={0}>Red</button>
                    <button className="rounded-none bg-[blue] p-1 m-1" onClick={()=>{
                        setBgcolor(useBgColor('blue'))
                    }} key={1}>Blue</button>
                    <button className="rounded-r-lg bg-[green] p-1 m-1" onClick={()=>{
                        setBgcolor(useBgColor('green'))
                    }} key={2}>Green</button>
                </div>
            </div>  
        </>
                                                                                                 
    )
}

export default About;