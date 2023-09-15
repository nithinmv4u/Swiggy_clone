import Title from "./Title";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";
import Authentication from "./Authentication";
import { useState } from "react";
import { Link } from "react-router-dom"

const HeaderComponent = () => {

    const [isLogged, setLogged] = useState(true)

    return (
        <div className='header'>
            <Title/>
            <SearchBar/>
            {
                <div style={{display:"flex", width:'20%', justifyContent:'space-between',}}>
                    <Link to="/about"><h4 key={0}>About</h4></Link>
                    <Link to="/"><h4 key={1}>Home</h4></Link>
                    <Link to="/contact"><h4 key={2}>Contact</h4></Link>
                    <h4 key={3}>Cart</h4>
                </div>
            }
            <div style={{display:"flex", width:'10%', justifyContent:'space-between'}}>
                <UserIcon/>
                {
                    isLogged ? <Link to={'/login'}><button onClick={() => {
                        setLogged(false);
                    }}>Login</button></Link> : <button onClick={() => {
                        setLogged(true)
                    }}>Logout</button>
                }
            </div>

        </div>
    )
}

export default HeaderComponent;