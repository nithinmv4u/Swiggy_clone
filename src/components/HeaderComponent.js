import Title from "./Title";
import SearchBar from "./SearchBar";
import UserIcon from "./UserIcon";
import Authentication from "./Authentication";
import { useState } from "react";
import { Link } from "react-router-dom"

const HeaderComponent = () => {

    const [isLogged, setLogged] = useState(true)

    return (
        <div className='flex justify-between items-center p-2 bg-orange-600 drop-shadow-xl'>
            <Title/>
            {/* <SearchBar/> */}
            <div className="flex justify-around items-center w-2/6 font-bold text-white ">
                <Link to="/about"><h4 className="hover:text-yellow-200" key={0}>About</h4></Link>
                <Link to="/"><h4 className="hover:text-yellow-200" key={1}>Home</h4></Link>
                <Link to="/contact"><h4 className="hover:text-yellow-200" key={2}>Contact</h4></Link>
                <h4 className="hover:text-yellow-200" key={3}>Cart</h4>
                <Link to='/instamart' ><h4 className="hover:text-yellow-200" key={4}>Instamart</h4></Link>
            </div>
            <div className="flex items-center w-2/12 justify-around font-bold text-white hover:text-yellow-200">
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