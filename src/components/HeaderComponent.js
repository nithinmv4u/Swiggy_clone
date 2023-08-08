import Title from "./Title";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";
import Authentication from "./Authentication";
import { useState } from "react";

const HeaderComponent = () => {

    const [isLogged, setLogged] = useState(true)

    return (
        <div className='header'>
            <Title/>
            <SearchBar/>
            {
                <div style={{display:"flex", width:'15%', justifyContent:'space-between'}}>
                    <h5><a href="/about">About</a></h5>
                    <h5><a href="/">Home</a></h5>
                    <h5><a href="">Contact</a></h5>
                    <h5><a href="">Cart</a></h5>
                </div>
            }
            <div style={{display:"flex", width:'10%', justifyContent:'space-between'}}>
                <UserIcon/>
                {
                    isLogged ? <button onClick={() => {
                        setLogged(false);
                    }}>Login</button> : <button onClick={() => {
                        setLogged(true)
                    }}>Logout</button>
                }
            </div>

        </div>
    )
}

export default HeaderComponent;