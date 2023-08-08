import Title from "./Title";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";
import Authentication from "./Authentication";
import { useState } from "react";

const loggedUser = () => {
    return true;
}
const HeaderComponent = () => {

    const [isLogged, setLogged] = useState(true)

    return (
        <div className='header'>
            <Title/>
            <SearchBar/>
            <UserIcon/>
            {
                isLogged ? <button onClick={() => {
                    setLogged(false);
                }}>Login</button> : <button onClick={() => {
                    setLogged(true)
                }}>Logout</button>
            }
        </div>
    )
}

export default HeaderComponent;